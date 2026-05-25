/* fonc_quad_exos.js — Exercices sur les formes de la fonction quadratique
 * Usage: <div id="fonc_quad_exos" class="fonc_quad_exos"></div>
 * Requires Chart.js (loaded automatically if absent).
 */
(function () {
    'use strict';

    /* ── Chart.js plugin ──────────────────────────────────────── */

    const axesPlugin = {
        id: 'fqe-axes',
        afterDraw(ch) {
            const { ctx, scales: { x, y } } = ch;
            ctx.save();
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 1.5;
            const y0 = y.getPixelForValue(0);
            ctx.beginPath(); ctx.moveTo(x.left, y0); ctx.lineTo(x.right, y0); ctx.stroke();
            const x0 = x.getPixelForValue(0);
            ctx.beginPath(); ctx.moveTo(x0, y.top); ctx.lineTo(x0, y.bottom); ctx.stroke();
            ctx.restore();
        }
    };

    /* ── widget ───────────────────────────────────────────────── */

    function initWidget() {
        const container = document.getElementById('fonc_quad_exos');
        if (!container) return;

        /* Each operator is a small clickable button. Inputs hold absolute values.
           Sign conventions:
           - Additive  (b, c, k):       op '+' → value positive,  op '−' → value negative
           - Paren     (h, x1, x2):     op '−' → zero at +|val|,  op '+' → zero at -|val|
             because the form is (x − val), so op '−' means the zero is at +val             */

        container.innerHTML = `
            <h2>Compléter les formes de la fonction quadratique</h2>
            <p id="fqe-given"></p>

            <div class="fqe-box">
                <h4>Forme développée</h4>
                <div class="fqe-formula">
                    f(x) = <input id="fqe-a1">x²
                    <button class="fqe-op" id="fqe-op-b">+</button>
                    <input id="fqe-b1">x
                    <button class="fqe-op" id="fqe-op-c">+</button>
                    <input id="fqe-c1">
                </div>
            </div>

            <div class="fqe-box">
                <h4>Forme canonique</h4>
                <div class="fqe-formula">
                    f(x) = <input id="fqe-a2">(x
                    <button class="fqe-op" id="fqe-op-h">−</button>
                    <input id="fqe-h">)²
                    <button class="fqe-op" id="fqe-op-k">+</button>
                    <input id="fqe-k">
                </div>
            </div>

            <div class="fqe-box">
                <h4>Forme factorisée</h4>
                <select id="fqe-typeFac">
                    <option value="2">Deux solutions</option>
                    <option value="1">Solution double</option>
                    <option value="0">Aucune solution réelle</option>
                </select>
                <div class="fqe-formula" id="fqe-facInputs">
                    f(x) = <input id="fqe-a3">(x
                    <button class="fqe-op" id="fqe-op-x1">−</button>
                    <input id="fqe-x1">)<span id="fqe-secondRoot">(x
                    <button class="fqe-op" id="fqe-op-x2">−</button>
                    <input id="fqe-x2">)</span><span id="fqe-square">²</span>
                </div>
                <div class="fqe-formula fqe-no-fac" id="fqe-noFac" style="display:none">
                    <i>Pas factorisable (dans ℝ)</i>
                </div>
            </div>

            <div class="fqe-btn-row">
                <button id="fqe-btn-check">Valider</button>
                <button id="fqe-btn-new">Nouvel exercice</button>
            </div>
            <p id="fqe-feedback"></p>
            <div class="fqe-chart-wrapper" id="fqe-chart-wrapper" style="display:none">
                <canvas id="fqe-graph"></canvas>
            </div>
        `;

        /* state */
        let a, b, c, xv, yv, r1, r2, delta, typeSolution, chart;

        function el(id) { return document.getElementById(id); }

        /* ── operator toggles ─────────────────────────────────── */

        ['fqe-op-b', 'fqe-op-c', 'fqe-op-h', 'fqe-op-k', 'fqe-op-x1', 'fqe-op-x2']
            .forEach(id => el(id).addEventListener('click', () => {
                const btn = el(id);
                btn.textContent = btn.textContent.trim() === '+' ? '−' : '+';
            }));

        /* ── value getters ────────────────────────────────────── */

        /* Additive term: the operator directly gives the sign of the value. */
        function getAdd(inputId, opId) {
            const raw  = Math.abs(parseFloat(el(inputId).value) || 0);
            const sign = el(opId).textContent.trim() === '+' ? 1 : -1;
            return sign * raw;
        }

        /* Parenthetical term (x [op] val): '−' → zero at +|val|, '+' → zero at -|val|. */
        function getParen(inputId, opId) {
            const raw  = Math.abs(parseFloat(el(inputId).value) || 0);
            const sign = el(opId).textContent.trim() === '−' ? 1 : -1;
            return sign * raw;
        }

        /* ── setters for given (disabled) values ──────────────── */

        function setSimple(inputId, val, disabled) {
            const inp = el(inputId);
            inp.value = val; inp.disabled = disabled;
        }

        /* Additive term: set |val| in input and matching sign on operator. */
        function setAdd(inputId, opId, signedVal, disabled) {
            setSimple(inputId, Math.abs(signedVal), disabled);
            const btn = el(opId);
            btn.textContent = signedVal >= 0 ? '+' : '−';
            btn.disabled    = disabled;
        }

        /* Parenthetical term: set |zero| in input, operator reflects the form (x − zero). */
        function setParen(inputId, opId, zeroVal, disabled) {
            setSimple(inputId, Math.abs(zeroVal), disabled);
            const btn = el(opId);
            btn.textContent = zeroVal >= 0 ? '−' : '+';
            btn.disabled    = disabled;
        }

        /* ── factored form display ────────────────────────────── */

        function updateFacDisplay() {
            const type = el('fqe-typeFac').value;
            el('fqe-facInputs').style.display  = type !== '0' ? '' : 'none';
            el('fqe-noFac').style.display       = type === '0' ? '' : 'none';
            el('fqe-secondRoot').style.display  = type === '2' ? 'inline' : 'none';
            el('fqe-square').style.display      = type === '1' ? 'inline' : 'none';
        }

        /* ── reset all inputs and operators to blank/defaults ─── */

        function resetAll() {
            container.querySelectorAll('input').forEach(inp => {
                inp.value = ''; inp.className = ''; inp.disabled = false;
            });
            /* Additive operators default to '+', parenthetical to '−'. */
            el('fqe-op-b').textContent  = '+';  el('fqe-op-b').disabled  = false;
            el('fqe-op-c').textContent  = '+';  el('fqe-op-c').disabled  = false;
            el('fqe-op-h').textContent  = '−';  el('fqe-op-h').disabled  = false;
            el('fqe-op-k').textContent  = '+';  el('fqe-op-k').disabled  = false;
            el('fqe-op-x1').textContent = '−';  el('fqe-op-x1').disabled = false;
            el('fqe-op-x2').textContent = '−';  el('fqe-op-x2').disabled = false;
        }

        /* ── new exercise ─────────────────────────────────────── */

        function newExercise() {
            r1 = Math.floor(Math.random() * 6 - 3);
            r2 = Math.floor(Math.random() * 6 + 1);
            a  = 1;
            b  = -(r1 + r2);
            c  = r1 * r2;
            xv = -b / (2 * a);
            yv = a * xv * xv + b * xv + c;
            delta = b * b - 4 * a * c;

            if      (delta > 0)   typeSolution = '2';
            else if (delta === 0) typeSolution = '1';
            else                  typeSolution = '0';

            resetAll();
            el('fqe-typeFac').value = typeSolution;
            updateFacDisplay();

            const type = Math.floor(Math.random() * 3);

            if (type === 0) {
                el('fqe-given').innerHTML =
                    '<b>Forme développée donnée</b> — complète les deux autres.';
                setSimple('fqe-a1', a, true);
                setAdd('fqe-b1', 'fqe-op-b', b, true);
                setAdd('fqe-c1', 'fqe-op-c', c, true);
            }
            if (type === 1) {
                el('fqe-given').innerHTML =
                    '<b>Forme canonique donnée</b> — complète les deux autres.';
                setSimple('fqe-a2', a, true);
                setParen('fqe-h',  'fqe-op-h', xv, true);
                setAdd(  'fqe-k',  'fqe-op-k', yv, true);
            }
            if (type === 2) {
                el('fqe-given').innerHTML =
                    '<b>Forme factorisée donnée</b> — complète les deux autres.';
                setSimple('fqe-a3', a, true);
                setParen('fqe-x1', 'fqe-op-x1', r1, true);
                if (typeSolution === '2') setParen('fqe-x2', 'fqe-op-x2', r2, true);
            }

            el('fqe-chart-wrapper').style.display = 'none';
            el('fqe-feedback').textContent = '';
        }

        /* ── check ────────────────────────────────────────────── */

        function check() {
            let ok = true;

            function testSimple(inputId, expected) {
                const inp = el(inputId);
                if (!inp || inp.disabled) return;
                const correct = Math.abs(parseFloat(inp.value) - expected) < 0.1;
                inp.className = correct ? 'fqe-good' : 'fqe-bad';
                if (!correct) ok = false;
            }

            function testAdd(inputId, opId, expected) {
                const inp = el(inputId);
                if (!inp || inp.disabled) return;
                const correct = Math.abs(getAdd(inputId, opId) - expected) < 0.1;
                inp.className = correct ? 'fqe-good' : 'fqe-bad';
                if (!correct) ok = false;
            }

            function testParen(inputId, opId, expectedZero) {
                const inp = el(inputId);
                if (!inp || inp.disabled) return;
                const correct = Math.abs(getParen(inputId, opId) - expectedZero) < 0.1;
                inp.className = correct ? 'fqe-good' : 'fqe-bad';
                if (!correct) ok = false;
            }

            testSimple('fqe-a1', a);
            testAdd(   'fqe-b1', 'fqe-op-b', b);
            testAdd(   'fqe-c1', 'fqe-op-c', c);

            testSimple('fqe-a2', a);
            testParen( 'fqe-h',  'fqe-op-h', xv);
            testAdd(   'fqe-k',  'fqe-op-k', yv);

            testSimple('fqe-a3', a);

            if (typeSolution === '2') {
                const x1El = el('fqe-x1'), x2El = el('fqe-x2');
                if (!x1El.disabled && !x2El.disabled) {
                    const v1 = getParen('fqe-x1', 'fqe-op-x1');
                    const v2 = getParen('fqe-x2', 'fqe-op-x2');
                    const okRoots = (
                        (Math.abs(v1 - r1) < 0.1 && Math.abs(v2 - r2) < 0.1) ||
                        (Math.abs(v1 - r2) < 0.1 && Math.abs(v2 - r1) < 0.1)
                    );
                    x1El.className = okRoots ? 'fqe-good' : 'fqe-bad';
                    x2El.className = okRoots ? 'fqe-good' : 'fqe-bad';
                    if (!okRoots) ok = false;
                }
            }

            if (typeSolution === '1') {
                const x1El = el('fqe-x1');
                if (!x1El.disabled) {
                    const correct = Math.abs(getParen('fqe-x1', 'fqe-op-x1') - r1) < 0.1;
                    x1El.className = correct ? 'fqe-good' : 'fqe-bad';
                    if (!correct) ok = false;
                }
            }

            if (el('fqe-typeFac').value !== typeSolution) ok = false;

            if (ok) {
                el('fqe-feedback').innerHTML = '✅ Correct !';
                drawGraph();
                el('fqe-chart-wrapper').style.display = '';
            } else {
                el('fqe-feedback').innerHTML = '❌ Certaines réponses sont incorrectes.';
                el('fqe-chart-wrapper').style.display = 'none';
            }
        }

        /* ── graph ────────────────────────────────────────────── */

        function drawGraph() {
            const canvas = el('fqe-graph');
            const data   = [];
            for (let xi = -10; xi <= 10.001; xi += 0.1) {
                data.push({ x: xi, y: a * xi * xi + b * xi + c });
            }
            const pts = [
                { x: 0,  y: c,  color: '#e67e22' },
                { x: xv, y: yv, color: '#27ae60' }
            ];
            if (delta >= 0) {
                pts.push({ x: r1, y: 0, color: '#e74c3c' });
                if (delta > 0) pts.push({ x: r2, y: 0, color: '#e74c3c' });
            }

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
                        x: { min: -10, max: 10, grid: { color: '#e0e0e0' } },
                        y: { ticks: { display: false }, grid: { color: '#e0e0e0' } }
                    }
                },
                plugins: [axesPlugin]
            });
        }

        /* ── wire up ──────────────────────────────────────────── */

        el('fqe-typeFac').addEventListener('change', updateFacDisplay);
        el('fqe-btn-check').addEventListener('click', check);
        el('fqe-btn-new').addEventListener('click', newExercise);

        newExercise();
    }

    /* ── dependency loading ───────────────────────────────────── */

    function loadScript(src, cb) {
        const s = document.createElement('script');
        s.src = src;
        s.onload = cb;
        document.head.appendChild(s);
    }

    function start() {
        if (window.Chart) initWidget();
        else loadScript('https://cdn.jsdelivr.net/npm/chart.js', initWidget);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', start);
    } else {
        start();
    }
})();
