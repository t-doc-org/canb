/* comp_carre_exos.js — Exercices sur la complétion du carré
 * Usage: <div id="comp_carre_exos" class="comp_carre_exos"></div>
 */
(function () {
    'use strict';

    function initWidget() {
        const container = document.getElementById('comp_carre_exos');
        if (!container) return;

        container.innerHTML = `
            <h2>Complétion du carré</h2>

            <div class="cce-box">
                <div class="cce-formula" id="cce-original"></div>
            </div>

            <div class="cce-box">
                <p>Étape 1 : Compléter</p>
                <div class="cce-formula">
                    f(x) = x²
                    <select id="cce-opB">
                        <option value="+">+</option>
                        <option value="-">−</option>
                    </select>
                    <span id="cce-bTxt"></span>x
                    + <input id="cce-addValue">
                    − <input id="cce-subValue">
                    <span id="cce-cTxt"></span>
                </div>
                <button id="cce-btn1">Valider</button>
            </div>

            <p class="cce-feedback" id="cce-feedback"></p>

            <div class="cce-box" id="cce-step2" style="display:none">
                <p>Étape 2 : Écrire le carré parfait</p>
                <div class="cce-formula">
                    x²
                    <select id="cce-opB2"></select>
                    <span id="cce-bTxt2"></span>x + <span id="cce-addTxt"></span> =
                    (x
                    <select id="cce-opH">
                        <option value="+">+</option>
                        <option value="-">−</option>
                    </select>
                    <input id="cce-h">)²
                </div>
                <button id="cce-btn2">Valider</button>
            </div>

            <div class="cce-box" id="cce-step3" style="display:none">
                <p>Étape 3 : Compléter la forme canonique</p>
                <div class="cce-formula">
                    f(x) = (x
                    <select id="cce-opH2">
                        <option value="+">+</option>
                        <option value="-">−</option>
                    </select>
                    <span id="cce-hTxt"></span>)²
                    <select id="cce-opK">
                        <option value="+">+</option>
                        <option value="-">−</option>
                    </select>
                    <input id="cce-k">
                </div>
                <button id="cce-btn3">Valider</button>
            </div>

            <button id="cce-btnNew">Nouvel exercice</button>
        `;

        let b, c, correctAdd, hValue, kValue;

        function el(id) { return document.getElementById(id); }

        /* ── new exercise ─────────────────────────────────────── */

        function newExercise() {
            b = (Math.floor(Math.random() * 5 + 1)) * 2;
            if (Math.random() < 0.5) b = -b;
            c = Math.floor(Math.random() * 10 - 5);

            el('cce-original').innerHTML =
                `f(x) = x² ${b >= 0 ? '+' : '−'} ${Math.abs(b)}x ${c >= 0 ? '+' : '−'} ${Math.abs(c)}`;

            el('cce-bTxt').innerText  = Math.abs(b);
            el('cce-bTxt2').innerText = Math.abs(b);
            el('cce-cTxt').innerText  = c >= 0 ? '+ ' + c : '− ' + Math.abs(c);

            correctAdd = (b / 2) * (b / 2);
            hValue     = b / 2;
            kValue     = c - correctAdd;

            el('cce-addTxt').innerText = correctAdd;
            el('cce-hTxt').innerText   = Math.abs(hValue);

            el('cce-opB2').innerHTML = `<option>${b >= 0 ? '+' : '−'}</option>`;

            el('cce-step2').style.display = 'none';
            el('cce-step3').style.display = 'none';
            el('cce-feedback').innerHTML  = '';

            container.querySelectorAll('input').forEach(i => {
                i.value = '';
                i.className = '';
            });
        }

        /* ── step 1 ───────────────────────────────────────────── */

        function checkStep1() {
            const op  = el('cce-opB').value;
            const add = parseFloat(el('cce-addValue').value);
            const sub = parseFloat(el('cce-subValue').value);
            let ok = true;

            if ((b > 0 && op !== '+') || (b < 0 && op !== '-')) ok = false;
            if (isNaN(add) || Math.abs(add - correctAdd) > 0.01)  ok = false;
            if (isNaN(sub) || Math.abs(sub - correctAdd) > 0.01)  ok = false;

            if (ok) {
                el('cce-feedback').innerHTML  = '✅ Très bien !';
                el('cce-step2').style.display = 'block';
            } else {
                el('cce-feedback').innerHTML = '❌ Corrige';
            }
        }

        /* ── step 2 ───────────────────────────────────────────── */

        function checkStep2() {
            const h  = parseFloat(el('cce-h').value);
            const op = el('cce-opH').value;
            let ok = true;

            if (Math.abs(h - Math.abs(hValue)) > 0.01)                    ok = false;
            if ((hValue > 0 && op !== '+') || (hValue < 0 && op !== '-')) ok = false;

            if (ok) {
                el('cce-feedback').innerHTML  = '✅ Parfait ! Tu as trouvé le carré 👍';
                el('cce-step3').style.display = 'block';
            } else {
                el('cce-feedback').innerHTML = '❌ Corrige';
            }
        }

        /* ── step 3 ───────────────────────────────────────────── */

        function checkStep3() {
            const k  = parseFloat(el('cce-k').value);
            const op = el('cce-opK').value;
            const kEl = el('cce-k');
            let ok = true;

            if (Math.abs(kValue) < 0.01) {
                if (Math.abs(k) < 0.01) {
                    kEl.className = 'cce-good';
                } else {
                    kEl.className = 'cce-bad';
                    ok = false;
                }
            } else {
                if (Math.abs(k - Math.abs(kValue)) < 0.01) {
                    kEl.className = 'cce-good';
                    if ((kValue > 0 && op !== '+') || (kValue < 0 && op !== '-')) {
                        ok = false;
                        kEl.className = 'cce-bad';
                    }
                } else {
                    ok = false;
                    kEl.className = 'cce-bad';
                }
            }

            el('cce-feedback').innerHTML = ok
                ? '🎉 Bravo ! Tu maîtrises la complétion du carré !'
                : '❌ Encore un effort 💪';
        }

        /* ── wire up ──────────────────────────────────────────── */

        el('cce-btn1').addEventListener('click', checkStep1);
        el('cce-btn2').addEventListener('click', checkStep2);
        el('cce-btn3').addEventListener('click', checkStep3);
        el('cce-btnNew').addEventListener('click', newExercise);

        newExercise();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initWidget);
    } else {
        initWidget();
    }
})();
