/* fonc_quad.js — Fonction quadratique interactive
 * Usage: <div id="fonc_quad" class="fonc_quad"></div>
 * Requires Chart.js (loaded automatically if absent).
 */
(function () {
    'use strict';

    /* ── helpers ─────────────────────────────────────────────── */

    function fmt(x) {
        if (Number.isInteger(x)) return x;
        return parseFloat(x.toFixed(2));
    }

    /* "a" coefficient as a string prefix for parentheses */
    function coeffStr(a) {
        if (a === 1)  return '';
        if (a === -1) return '−';
        return String(a);
    }

    /* Build the developed-form string; c is wrapped in a coloured span */
    function buildDeveloppee(a, b, c) {
        const parts = [];

        if      (a === 1)  parts.push('x²');
        else if (a === -1) parts.push('−x²');
        else               parts.push(`${a}x²`);

        if (b !== 0) {
            const bAbs = Math.abs(b);
            const bStr = bAbs === 1 ? 'x' : `${bAbs}x`;
            parts.push(b > 0 ? `+ ${bStr}` : `− ${bStr}`);
        }

        if (c !== 0) {
            const cHL = `<span class="fq-orange">${Math.abs(c)}</span>`;
            parts.push(c > 0 ? `+ ${cHL}` : `− ${cHL}`);
        }

        return parts.join(' ');
    }

    /* ── Chart.js inline plugins ──────────────────────────────── */

    const axesPlugin = {
        id: 'fq-axes',
        afterDraw(ch) {
            const { ctx, scales: { x, y } } = ch;
            ctx.save();
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 1.5;
            if (y.min <= 0 && y.max >= 0) {
                const y0 = y.getPixelForValue(0);
                ctx.beginPath(); ctx.moveTo(x.left, y0); ctx.lineTo(x.right, y0); ctx.stroke();
            }
            if (x.min <= 0 && x.max >= 0) {
                const x0 = x.getPixelForValue(0);
                ctx.beginPath(); ctx.moveTo(x0, y.top); ctx.lineTo(x0, y.bottom); ctx.stroke();
            }
            ctx.restore();
        }
    };

    const labelsPlugin = {
        id: 'fq-labels',
        afterDatasetsDraw(ch) {
            const { ctx } = ch;
            ctx.save();
            ctx.font = '12px Arial, sans-serif';
            ch.data.datasets[1].data.forEach(pt => {
                const px = ch.scales.x.getPixelForValue(pt.x);
                const py = ch.scales.y.getPixelForValue(pt.y);
                ctx.fillStyle = pt.color;
                ctx.fillText(`${pt.label} (${fmt(pt.x)}, ${fmt(pt.y)})`, px + 6, py - 6);
            });
            ctx.restore();
        }
    };

    /* ── main widget ──────────────────────────────────────────── */

    function initWidget() {
        const container = document.getElementById('fonc_quad');
        if (!container) return;

        container.innerHTML = `
            <h2>Fonction quadratique&nbsp;: ax² + bx + c</h2>

            <div class="fq-controls">
                <label>a&nbsp;= <input id="fq-a" type="number" value="1" step="any"></label>
                <label>b&nbsp;= <input id="fq-b" type="number" value="6" step="any"></label>
                <label>c&nbsp;= <input id="fq-c" type="number" value="5" step="any"></label>
            </div>

            <h3>Formes de la fonction</h3>
            <div class="fq-form-box" id="fq-developpee"></div>
            <div class="fq-form-box" id="fq-canonique"></div>
            <div class="fq-form-box" id="fq-factorisee"></div>

            <h3>Points caractéristiques</h3>
            <p id="fq-points"></p>

            <div class="fq-chart-wrapper">
                <canvas id="fq-graph"></canvas>
            </div>

            <h3>Résumé</h3>
            <div class="fq-form-box">
                <p><strong>Forme développée&nbsp;:</strong>
                    <i>f(x) = ax² + bx + c</i>
                    → <span class="fq-orange">c est l'ordonnée à l'origine</span></p>
                <p><strong>Forme canonique&nbsp;:</strong>
                    <i>f(x) = a(x − h)² + k</i>
                    → <span class="fq-green">sommet = (h ; k)</span></p>
                <p><strong>Forme factorisée&nbsp;:</strong>
                    <i>f(x) = a(x − x<sub>1</sub>)(x − x<sub>2</sub>)</i>
                    → <span class="fq-red">zéros = x<sub>1</sub> et x<sub>2</sub></span></p>
            </div>
        `;

        const aInput = document.getElementById('fq-a');
        const bInput = document.getElementById('fq-b');
        const cInput = document.getElementById('fq-c');
        const canvas  = document.getElementById('fq-graph');
        let chart = null;

        /* ── graph ──────────────────────────────────────────── */

        function drawGraph(a, b, c, xv, yv, roots) {
            let xmin = xv - 5, xmax = xv + 5;
            roots.forEach(r => {
                xmin = Math.min(xmin, r - 2);
                xmax = Math.max(xmax, r + 2);
            });

            const data = [];
            let ymin = Infinity, ymax = -Infinity;
            for (let xi = xmin; xi <= xmax + 0.001; xi += 0.05) {
                const yi = a * xi * xi + b * xi + c;
                data.push({ x: xi, y: yi });
                ymin = Math.min(ymin, yi);
                ymax = Math.max(ymax, yi);
            }

            const margin = (ymax - ymin) * 0.2 || 1;
            ymin -= margin; ymax += margin;

            const pts = [
                { x: 0,  y: c,  label: 'Ord. orig.', color: '#e67e22' },
                { x: xv, y: yv, label: 'Sommet',     color: '#27ae60' }
            ];
            roots.forEach(r => pts.push({ x: r, y: 0, label: 'Zéro', color: '#e74c3c' }));

            if (chart) chart.destroy();
            chart = new Chart(canvas, {
                type: 'scatter',
                data: {
                    datasets: [
                        { data, showLine: true, borderColor: '#3498db', borderWidth: 2, pointRadius: 0 },
                        { data: pts, pointRadius: 6, backgroundColor: pts.map(p => p.color) }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    aspectRatio: 1.75,
                    plugins: { legend: { display: false } },
                    scales: {
                        x: { min: xmin, max: xmax, grid: { color: '#e0e0e0' } },
                        y: { min: ymin, max: ymax, ticks: { display: false }, grid: { color: '#e0e0e0' } }
                    }
                },
                plugins: [axesPlugin, labelsPlugin]
            });
        }

        /* ── update ─────────────────────────────────────────── */

        function update() {
            const a = parseFloat(aInput.value);
            const b = parseFloat(bInput.value);
            const c = parseFloat(cInput.value);
            if (!a || isNaN(a) || isNaN(b) || isNaN(c)) return;

            const xv    = -b / (2 * a);
            const yv    = a * xv * xv + b * xv + c;
            const delta = b * b - 4 * a * c;
            const roots = [];

            /* developed form */
            document.getElementById('fq-developpee').innerHTML =
                `<strong>Forme développée :</strong>&ensp;f(x) = ${buildDeveloppee(a, b, c)}`;

            /* canonical form */
            const hSign = xv >= 0 ? '−' : '+';
            const canClassic  = `${coeffStr(a)}(x ${hSign} ${fmt(Math.abs(xv))})² + ${fmt(yv)}`;
            const canExplicit = `${coeffStr(a)}(x − <span class="fq-green">${fmt(xv)}</span>)² + <span class="fq-green">${fmt(yv)}</span>`;
            document.getElementById('fq-canonique').innerHTML =
                `<strong>Forme canonique :</strong><br>
                 f(x) = ${canClassic}<br>
                 <span class="fq-muted">f(x) = ${canExplicit}</span>`;

            /* factored form */
            const EPS = 1e-9;
            if (delta > EPS) {
                const x1 = (-b - Math.sqrt(delta)) / (2 * a);
                const x2 = (-b + Math.sqrt(delta)) / (2 * a);
                roots.push(x1, x2);
                const s1 = x1 >= 0 ? '−' : '+', s2 = x2 >= 0 ? '−' : '+';
                const fClassic  = `${coeffStr(a)}(x ${s1} ${fmt(Math.abs(x1))})(x ${s2} ${fmt(Math.abs(x2))})`;
                const fExplicit = `${coeffStr(a)}(x − <span class="fq-red">${fmt(x1)}</span>)(x − <span class="fq-red">${fmt(x2)}</span>)`;
                document.getElementById('fq-factorisee').innerHTML =
                    `<strong>Forme factorisée :</strong><br>
                     f(x) = ${fClassic}<br>
                     <span class="fq-muted">f(x) = ${fExplicit}</span>`;
            } else if (delta > -EPS) {
                const x0 = -b / (2 * a);
                roots.push(x0);
                document.getElementById('fq-factorisee').innerHTML =
                    `<strong>Forme factorisée :</strong><br>
                     f(x) = ${coeffStr(a)}(x − <span class="fq-red">${fmt(x0)}</span>)²`;
            } else {
                document.getElementById('fq-factorisee').innerHTML =
                    `<strong>Forme factorisée :</strong>&ensp;<em>Δ &lt; 0 — pas de zéros réels</em>`;
            }

            /* characteristic points */
            document.getElementById('fq-points').innerHTML =
                `<span class="fq-green">Sommet</span> : (${fmt(xv)}, ${fmt(yv)})<br>
                 <span class="fq-orange">Ordonnée à l'origine</span> : (0, ${c})<br>
                 <span class="fq-red">Zéros</span> : ${roots.length ? roots.map(fmt).join(' ; ') : '—'}`;

            drawGraph(a, b, c, xv, yv, roots);
        }

        [aInput, bInput, cInput].forEach(el => el.addEventListener('input', update));
        update();
    }

    /* ── dependency loading ───────────────────────────────────── */

    function loadScript(src, cb) {
        const s = document.createElement('script');
        s.src = src;
        s.onload = cb;
        document.head.appendChild(s);
    }

    function start() {
        if (window.Chart) {
            initWidget();
        } else {
            loadScript('https://cdn.jsdelivr.net/npm/chart.js', initWidget);
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
