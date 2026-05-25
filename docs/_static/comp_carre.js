/* comp_carre.js — Complétion du carré, explication guidée
 * Usage: <div id="comp_carre" class="comp_carre"></div>
 */
(function () {
    'use strict';

    function initWidget() {
        const container = document.getElementById('comp_carre');
        if (!container) return;

        container.innerHTML = `
            <h2>Comprendre la complétion du carré</h2>

            <div class="cc-box">
                <p>Choisis une fonction :</p>
                <div class="cc-formula">
                    f(x) =
                    <input id="cc-a" value="1">x²

                    <select id="cc-opB">
                        <option value="+">+</option>
                        <option value="-">−</option>
                    </select>

                    <input id="cc-b" value="4">x

                    <select id="cc-opC">
                        <option value="+">+</option>
                        <option value="-">−</option>
                    </select>

                    <input id="cc-c" value="5">
                </div>
                <button id="cc-start">Commencer</button>
            </div>

            <div id="cc-steps">
                <div class="cc-box cc-step" id="cc-s1" style="display:none"></div>
                <div class="cc-box cc-step" id="cc-s2" style="display:none"></div>
                <div class="cc-box cc-step" id="cc-s3" style="display:none"></div>
                <div class="cc-box cc-step" id="cc-s4" style="display:none"></div>
                <div class="cc-box cc-step" id="cc-s5" style="display:none"></div>
            </div>

            <button id="cc-next" style="display:none">Suivant</button>
        `;

        let a, b, c, add, h, k;
        let currentStep = 0;

        function el(id) { return document.getElementById(id); }

        function sign(x) { return x >= 0 ? '+' : '-'; }

        function start() {
            a = parseFloat(el('cc-a').value);
            const bInput = parseFloat(el('cc-b').value);
            const cInput = parseFloat(el('cc-c').value);
            const signB  = el('cc-opB').value;
            const signC  = el('cc-opC').value;

            b = signB === '+' ? bInput : -bInput;
            c = signC === '+' ? cInput : -cInput;

            if (a !== 1) {
                alert("Pour l'instant, a doit être égal à 1.");
                return;
            }

            add = (b / 2) * (b / 2);
            h   = b / 2;
            k   = c - add;
            currentStep = 0;

            container.querySelectorAll('.cc-step').forEach(s => {
                s.style.display = 'none';
                s.innerHTML = '';
            });

            el('cc-next').style.display = 'block';
            nextStep();
        }

        function nextStep() {
            currentStep++;

            if (currentStep === 1) {
                const s = el('cc-s1');
                s.style.display = 'block';
                s.innerHTML = `
                    <p>On part de :</p>
                    <div class="cc-formula">
                        f(x) = x² ${sign(b)} ${Math.abs(b)}x ${sign(c)} ${Math.abs(c)}
                    </div>`;
            }

            if (currentStep === 2) {
                const s = el('cc-s2');
                s.style.display = 'block';
                s.innerHTML = `
                    <p>On ajoute et retranche pour créer un carré parfait :</p>
                    <div class="cc-formula">
                        x² ${sign(b)} ${Math.abs(b)}x + ${add} − ${add} ${sign(c)} ${Math.abs(c)}
                    </div>`;
            }

            if (currentStep === 3) {
                const s = el('cc-s3');
                s.style.display = 'block';
                s.innerHTML = `
                    <p>On isole les termes du carré parfait :</p>
                    <div class="cc-formula">
                        x² ${sign(b)} ${Math.abs(b)}x + ${add}
                    </div>`;
            }

            if (currentStep === 4) {
                const s = el('cc-s4');
                s.style.display = 'block';
                s.innerHTML = `
                    <p>C'est un carré parfait :</p>
                    <div class="cc-formula">
                        (x ${sign(h)} ${Math.abs(h)})²
                    </div>`;
            }

            if (currentStep === 5) {
                const s = el('cc-s5');
                s.style.display = 'block';
                s.innerHTML = `
                    <p>On remet tout et on simplifie :</p>
                    <div class="cc-formula">
                        f(x) = (x ${sign(h)} ${Math.abs(h)})² − ${add} ${sign(c)} ${Math.abs(c)} = (x ${sign(h)} ${Math.abs(h)})² ${sign(k)} ${Math.abs(k)}
                    </div>
                    <p style="text-align:center">🎉 Forme canonique obtenue !</p>`;
                el('cc-next').style.display = 'none';
            }
        }

        el('cc-start').addEventListener('click', start);
        el('cc-next').addEventListener('click', nextStep);
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidget);
    } else {
        initWidget();
    }
})();
