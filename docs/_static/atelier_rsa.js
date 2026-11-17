/* atelier_rsa.js — Atelier RSA (généré par web/build_embed.py, ne pas modifier à la main)
 * Usage : <div id="atelier_rsa" class="atelier_rsa"></div>
 * avec atelier_rsa.css chargé dans la page.
 */
(function () {
  "use strict";
  const MARKUP = '<div class="wrap">\n  <header class="top">\n    <div class="brand">\n      <p class="sub">De la création des clés au chiffrement d\'un mot, lettre par lettre.</p>\n    </div>\n    <div class="modes" role="group" aria-label="Mode">\n      <button id="ar-mode-demo" type="button" aria-pressed="true">Démo</button>\n      <button id="ar-mode-exo" type="button" aria-pressed="false">S\'exercer</button>\n      <button id="ar-mode-machine" type="button" aria-pressed="false">Chiffrer / déchiffrer</button>\n    </div>\n  </header>\n\n  <ol class="steps" id="ar-steps" aria-label="Étapes"></ol>\n\n  <div class="main">\n    <div class="ar-col">\n      <section class="stage" id="ar-stage" aria-live="polite"></section>\n      <details class="help calcbox" id="ar-calcbox">\n        <summary>Calculatrice</summary>\n        <div class="body">\n          <form id="ar-calc-form">\n            <label for="ar-calc-in" style="position:absolute;left:-9999px">Calcul</label>\n            <input id="ar-calc-in" type="text" inputmode="text" autocomplete="off" placeholder="ex. 19^3 ou 124 * 55 + 39">\n          </form>\n          <div class="calc-res" id="ar-calc-res" aria-live="polite"></div>\n          <div class="keypad" id="ar-keypad">\n            <button type="button" data-k="C" class="op" aria-label="Effacer">C</button>\n            <button type="button" data-k="(">(</button>\n            <button type="button" data-k=")">)</button>\n            <button type="button" data-k="÷" class="op">÷</button>\n            <button type="button" data-k="7">7</button><button type="button" data-k="8">8</button><button type="button" data-k="9">9</button>\n            <button type="button" data-k="·" class="op" aria-label="Multiplier">*</button>\n            <button type="button" data-k="4">4</button><button type="button" data-k="5">5</button><button type="button" data-k="6">6</button>\n            <button type="button" data-k="−" class="op" aria-label="Soustraire">−</button>\n            <button type="button" data-k="1">1</button><button type="button" data-k="2">2</button><button type="button" data-k="3">3</button>\n            <button type="button" data-k="+" class="op">+</button>\n            <button type="button" data-k="0">0</button>\n            <button type="button" data-k="^" class="op" aria-label="Puissance">x<sup>y</sup></button>\n            <button type="button" data-k="DEL" aria-label="Effacer le dernier caractère">⌫</button>\n            <button type="button" data-k="=" class="eq">=</button>\n          </div>\n          <ul class="calc-hist" id="ar-calc-hist" aria-label="Derniers calculs"></ul>\n        </div>\n      </details>\n    </div>\n    <aside class="book" id="ar-book"></aside>\n  </div>\n</div>';

  function init(root) {
    if (root.dataset.ready) return;
    root.dataset.ready = "1";
    root.innerHTML = MARKUP;



/* ---------- Outils mathématiques ---------- */
const PRIMES = (() => {
  const out = [];
  for (let n = 2; out.length < 100; n++) if (isPrime(n)) out.push(n);
  return out;
})();
function isPrime(n) {
  if (!Number.isInteger(n) || n < 2) return false;
  for (let k = 2; k * k <= n; k++) if (n % k === 0) return false;
  return true;
}
function smallestFactor(n) {
  for (let k = 2; k * k <= n; k++) if (n % k === 0) return k;
  return n;
}
function gcd(a, b) { while (b) [a, b] = [b, a % b]; return a; }
// Plus petit d > after (et différent de e) tel que le reste de la division de e · d par φ vaut 1
function findD(e, phi, after = 0) {
  if (gcd(e, phi) !== 1) return null;
  for (let d = after + 1; d <= after + 2 * phi; d++) {
    if (d !== e && (e * d) % phi === 1) return d;
  }
  return null;
}
// Plus grand d < before (au moins 1 et différent de e) qui convient, ou null s'il n'y en a pas
function findDBefore(e, phi, before) {
  if (gcd(e, phi) !== 1) return null;
  for (let d = before - 1; d >= 1; d--) {
    if (d !== e && (e * d) % phi === 1) return d;
  }
  return null;
}
function modPow(m, e, n) {
  let r = 1n, b = BigInt(m) % BigInt(n), x = BigInt(e); const N = BigInt(n);
  while (x > 0n) { if (x & 1n) r = r * b % N; b = b * b % N; x >>= 1n; }
  return Number(r);
}
function powDigits(m, e) { return m <= 1 ? 1 : Math.floor(e * Math.log10(m)) + 1; }
function fmt(x) {
  const s = String(x);
  return s.length <= 4 ? s : s.replace(/\B(?=(\d{3})+(?!\d))/g, " ");
}
const ALPHA = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const rank = (L) => ALPHA.indexOf(L) + 1;
const pad2 = (n) => String(n).padStart(2, "0");
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
const MAX_SHOWN_DIGITS = 40;

// Une ligne de chiffrement : m, m^e, division euclidienne, c
function encryptRow(m, e, n, maxDigits = MAX_SHOWN_DIGITS) {
  const c = modPow(m, e, n);
  if (powDigits(m, e) <= maxDigits) {
    const P = BigInt(m) ** BigInt(e);
    const q = P / BigInt(n);
    return { c, pow: fmt(P), div: `${fmt(P)} = ${fmt(q)} · ${n} + <b class="rest">${c}</b>` };
  }
  return { c, pow: `nombre de ${powDigits(m, e)} chiffres`, div: `reste calculé à la machine : <b class="rest">${c}</b>` };
}

function validEs(phi, limit) {
  const out = [];
  for (const e of PRIMES) {
    if (e >= phi) break;
    if (phi % e !== 0 && findD(e, phi) !== null) out.push(e);
    if (out.length >= limit) break;
  }
  return out;
}

const STEP_NAMES = ["Choisir p et q", "Calculer n", "Calculer φ", "Choisir e", "Trouver d", "Les clés", "Le message", "Chiffrer"];
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* ---------- État ---------- */
const state = {
  mode: "demo",
  demo: { p: 5, q: 11, e: 3, word: "SALUT", step: 0, auto: false },
  exo: freshExo(),
  machine: { key: "(55, 3)", msg: "SALUT", ran: false, speed: "lent" },
};
function freshExo() {
  return { step: 0, reached: 0, p: null, q: null, n: null, phi: null, e: null, d: null, keysOk: false, word: null, ranksOk: false, c: null };
}
function demoVals() {
  const { p, q, e, word } = state.demo;
  const n = p * q, phi = (p - 1) * (q - 1);
  return { p, q, n, phi, e, d: findD(e, phi), word };
}

/* ---------- Rendu commun ---------- */
const $ = (id) => root.querySelector("#ar-" + id);

function renderSteps() {
  const ol = $("steps");
  const cur = state.mode === "demo" ? state.demo.step : state.exo.step;
  const reached = state.mode === "demo" ? STEP_NAMES.length - 1 : state.exo.reached;
  ol.innerHTML = STEP_NAMES.map((name, i) => {
    const done = i < cur || (state.mode === "exo" && i < state.exo.reached);
    const cls = [i === cur ? "current" : "", done && i !== cur ? "done" : ""].join(" ");
    return `<li><button type="button" class="${cls}" data-step="${i}" ${i > reached ? "disabled" : ""} ${i === cur ? 'aria-current="step"' : ""}>
      <span class="n">${done && i !== cur ? "✓" : i + 1}</span>${name}</button></li>`;
  }).join("");
  ol.querySelectorAll("button").forEach((b) => b.addEventListener("click", () => {
    const i = Number(b.dataset.step);
    if (state.mode === "demo") goDemo(i); else { state.exo.step = i; renderExo(); }
  }));
  const curBtn = ol.querySelector(".current");
  if (curBtn) curBtn.scrollIntoView({ block: "nearest", inline: "nearest" });
}

function renderBook(v, upto) {
  // upto : nombre d'étapes terminées (les valeurs apparaissent au fur et à mesure)
  const show = (cond, val) => cond ? `<dd>${val}</dd>` : `<dd class="empty">—</dd>`;
  const keys = upto >= 6;
  $("book").innerHTML = `
    <h2>Carnet d'Alice</h2>
    <dl class="vals">
      <dt>p</dt>${show(upto >= 1 && v.p, v.p)}
      <dt>q</dt>${show(upto >= 1 && v.q, v.q)}
      <dt>n = p · q</dt>${show(upto >= 2 && v.n, v.n)}
      <dt>φ = (p − 1) · (q − 1)</dt>${show(upto >= 3 && v.phi, v.phi)}
      <dt>e</dt>${show(upto >= 4 && v.e, v.e)}
      <dt>d</dt>${show(upto >= 5 && v.d, v.d)}
    </dl>
    <div class="key pub"><span class="t">Clé publique</span><span class="v">${keys ? `(${v.n}, ${v.e})` : "( — , — )"}</span></div>
    <div class="key priv"><span class="t">Clé privée</span><span class="v">${keys ? `(${v.p}, ${v.q}, ${v.d})` : "( — , — , — )"}</span></div>
    <dl class="vals">
      <dt>Message</dt>${show(upto >= 7 && v.word, esc(v.word || ""))}
      <dt>Cryptogramme</dt>${show(upto >= 8 && v.cipher, v.cipher || "")}
    </dl>
    <p class="hint">Les valeurs s'ajoutent à chaque étape terminée.</p>`;
}

function primesGrid(highlight, clickable) {
  return `<div class="primes">${PRIMES.map((p) =>
    clickable
      ? `<button type="button" data-prime="${p}" class="${highlight.includes(p) ? "on" : ""}">${p}</button>`
      : `<span class="${highlight.includes(p) ? "on" : ""}" data-prime="${p}">${p}</span>`).join("")}</div>`;
}
function alphaGrid(highlight) {
  return `<div class="alpha">${[...ALPHA].map((L, i) =>
    `<div class="${highlight.includes(L) ? "on" : ""}" data-letter="${L}"><b>${L}</b><small>${i + 1}</small></div>`).join("")}</div>`;
}

/* ---------- Mode démo ---------- */
let playToken = 0, autoTimer = null;

function demoStepHTML(i, v) {
  const head = (eyebrow, title, lead) => `<div><p class="eyebrow">Étape ${i + 1} sur 8 · ${eyebrow}</p><h2>${title}</h2></div><p class="ar-lead">${lead}</p>`;
  const line = (lbl, html, extra = "") => `<div class="line rv" ${extra}>${lbl ? `<span class="lbl">${lbl}</span>` : ""}${html}</div>`;
  switch (i) {
    case 0: return head("Génération des clés", "Alice choisit deux nombres premiers",
      "Un nombre premier n'est divisible que par 1 et par lui-même. Pour un vrai chiffrement RSA, p et q ont plus de 100 chiffres ; ici on prend de petits nombres pour suivre les calculs.") + `
      <div class="calc">
        ${line("Premier nombre premier", `p = <span class="big">${v.p}</span>`, `data-mark="${v.p}"`)}
        ${line("Deuxième nombre premier", `q = <span class="big">${v.q}</span>`, `data-mark="${v.q}"`)}
        <div class="rv">${primesGrid([], false)}</div>
      </div>`;
    case 1: return head("Génération des clés", "Alice calcule n",
      "n est le produit des deux nombres premiers. Il fait partie des deux clés.") + `
      <div class="calc">
        ${line("Formule", "n = p · q")}
        ${line("On remplace", `n = ${v.p} · ${v.q}`)}
        ${line("Résultat", `n = <span class="big">${v.n}</span>`)}
        <p class="note rv">n doit être plus grand que 26 : chaque lettre (de 1 à 26) devra être plus petite que n.</p>
      </div>`;
    case 2: return head("Génération des clés", "Alice calcule φ",
      "φ (la lettre grecque « phi ») sert à choisir e et à trouver d. Elle reste secrète : la connaître permet de retrouver la clé privée.") + `
      <div class="calc">
        ${line("Formule", "φ = (p − 1) · (q − 1)")}
        ${line("On remplace", `φ = (${v.p} − 1) · (${v.q} − 1)`)}
        ${line("On calcule", `φ = ${v.p - 1} · ${v.q - 1}`)}
        ${line("Résultat", `φ = <span class="big">${v.phi}</span>`)}
      </div>`;
    case 3: {
      const q = Math.floor(v.phi / v.e), r = v.phi % v.e;
      return head("Génération des clés", "Alice choisit e",
        "e doit être un nombre premier, et le reste de la division de φ par e ne doit pas valoir 0.") + `
      <div class="calc">
        ${line("Alice essaie", `e = <span class="big">${v.e}</span> &nbsp;(${v.e} est premier)`)}
        ${line(`Division de φ = ${v.phi} par ${v.e}`, `${v.phi} = ${q} · ${v.e} + ${r}`)}
        ${line("Vérification", `reste = ${r} <span class="okk">≠ 0 ✓</span> &nbsp;donc e = ${v.e} convient`)}
      </div>`;
    }
    case 4: {
      const rows = [];
      const all = [];
      for (let d = 1; d <= v.d; d++) all.push(d);
      const list = v.d <= 30 ? all : [...all.slice(0, 6), null, v.d];
      for (const d of list) {
        if (d === null) { rows.push(`<tr class="rv"><td>…</td><td>…</td><td>…</td><td>…</td><td></td></tr>`); continue; }
        const prod = v.e * d, q = Math.floor(prod / v.phi), r = prod % v.phi;
        if (d === v.e) { rows.push(`<tr class="rv"><td>${d}</td><td colspan="4" style="font-family:var(--f-body);color:var(--muted)">d doit être différent de e : on passe</td></tr>`); continue; }
        const good = d === v.d;
        rows.push(`<tr class="rv ${good ? "found" : ""}"><td>${d}</td><td>${fmt(prod)}</td><td>${fmt(prod)} = ${q} · ${v.phi} + <b class="rest">${r}</b></td><td>${r}</td><td>${good ? '<span class="okk">✓</span>' : '<span class="nok">✗</span>'}</td></tr>`);
      }
      return head("Génération des clés", "Alice cherche d",
        `d doit être différent de e, et le reste de la division de e · d par φ doit valoir 1. Alice essaie d = 1, 2, 3… jusqu'à trouver.`) + `
      <div class="calc">
        <div class="tablewrap follow" id="ar-dtable"><table>
          <thead><tr><th>d</th><th>e · d = ${v.e} · d</th><th>Division par φ = ${v.phi}</th><th>Reste</th><th></th></tr></thead>
          <tbody>${rows.join("")}</tbody></table></div>
        ${line("Résultat", `d = <span class="big">${v.d}</span>, car ${v.e} · ${v.d} = ${fmt(v.e * v.d)} = ${Math.floor(v.e * v.d / v.phi)} · ${v.phi} + 1`)}
      </div>`;
    }
    case 5: return head("Génération des clés", "Les deux clés d'Alice",
      "Alice publie sa clé publique dans l'annuaire. Elle garde sa clé privée secrète : sans p et q, impossible de retrouver d.") + `
      <div class="keys">
        <div class="key pub rv"><span class="t">Clé publique · publiée</span><span class="v">(n, e) = (${v.n}, ${v.e})</span><span class="d">Tout le monde peut l'utiliser pour chiffrer un message destiné à Alice.</span></div>
        <div class="key priv rv"><span class="t">Clé privée · secrète</span><span class="v">(p, q, d) = (${v.p}, ${v.q}, ${v.d})</span><span class="d">Seule Alice peut déchiffrer les messages qu'elle reçoit.</span></div>
      </div>
      <p class="note rv">Pour retrouver p et q à partir de n, il faudrait factoriser n. Avec des nombres de plusieurs centaines de chiffres, c'est impossible en pratique.</p>`;
    case 6: return head("Chiffrement", `Bob prépare le message « ${esc(v.word)} »`,
      `Bob veut écrire à Alice. Il remplace chaque lettre par sa position dans l'alphabet. Chaque nombre est plus petit que n = ${v.n} : chaque lettre forme un bloc.`) + `
      <div class="calc">
        <div class="word">${[...v.word].map((L) => `<div class="tile rv" data-letter="${L}"><span class="L">${L}</span><span class="m">${pad2(rank(L))}</span></div>`).join("")}</div>
        <div>${alphaGrid([])}</div>
        ${line("Message transformé", [...v.word].map((L) => pad2(rank(L))).join(" "))}
      </div>`;
    case 7: {
      const rows = [...v.word].map((L) => {
        const m = rank(L), r = encryptRow(m, v.e, v.n);
        return `<tr><td class="rv" style="font-family:var(--f-display);font-weight:800">${L}</td><td class="rv">${m}</td><td class="rv">${m}<sup>${v.e}</sup> = ${r.pow}</td><td class="rv">${r.div}</td><td class="rv"><span class="big">${r.c}</span></td></tr>`;
      }).join("");
      const cipher = [...v.word].map((L) => pad2(modPow(rank(L), v.e, v.n))).join(" ");
      return head("Chiffrement", "Bob chiffre chaque lettre",
        `Bob utilise la clé publique d'Alice (${v.n}, ${v.e}). Pour chaque bloc m : c = reste de la division de m<sup>${v.e}</sup> par ${v.n}.`) + `
      <div class="calc">
        <div class="tablewrap"><table>
          <thead><tr><th>Lettre</th><th>m</th><th>m<sup>${v.e}</sup></th><th>Division par ${v.n}</th><th>c</th></tr></thead>
          <tbody>${rows}</tbody></table></div>
        ${line("Cryptogramme envoyé à Alice", `<span class="crypto">${cipher}</span>`)}
      </div>`;
    }
  }
}

function renderDemo(animate) {
  clearTimeout(autoTimer);
  const v = demoVals();
  const i = state.demo.step;
  const cipher = [...v.word].map((L) => pad2(modPow(rank(L), v.e, v.n))).join(" ");
  renderSteps();
  $("stage").innerHTML = (i === 0 ? demoSetupHTML() : "") + demoStepHTML(i, v) + `
    <div class="controls">
      <div class="group">
        <button class="ar-btn" id="ar-d-prev" type="button" ${i === 0 ? "disabled" : ""}>← Étape précédente</button>
        <button class="ar-btn primary" id="ar-d-next" type="button">${i === 7 ? "Recommencer" : "Étape suivante →"}</button>
      </div>
      <div class="group">
        <button class="ar-btn" id="ar-d-replay" type="button">Rejouer l'étape</button>
        <button class="ar-btn" id="ar-d-auto" type="button" aria-pressed="${state.demo.auto}">${state.demo.auto ? "Pause" : "Lecture automatique"}</button>
      </div>
    </div>`;
  renderBook({ ...v, cipher }, i + 1);
  if (i === 0) bindDemoSetup();
  $("d-prev").onclick = () => goDemo(i - 1);
  $("d-next").onclick = nextDemo;
  $("d-replay").onclick = () => renderDemo(true);
  $("d-auto").onclick = () => { state.demo.auto = !state.demo.auto; renderDemo(false); if (state.demo.auto) scheduleAuto(); };
  play(animate && !reduceMotion);
}

function goDemo(i) {
  state.demo.step = Math.max(0, Math.min(7, i));
  renderDemo(true);
}
function nextDemo() {
  const pending = $("stage").querySelectorAll(".rv.pending");
  if (pending.length) { finishPlay(); return; }
  if (state.demo.step === 7) { state.demo.auto = false; goDemo(0); return; }
  goDemo(state.demo.step + 1);
}
function scheduleAuto() {
  clearTimeout(autoTimer);
  if (!state.demo.auto) return;
  autoTimer = setTimeout(() => {
    if (state.mode !== "demo" || !state.demo.auto) return;
    if (state.demo.step === 7) { state.demo.auto = false; renderDemo(false); return; }
    goDemo(state.demo.step + 1);
  }, 2200);
}

// Révèle les éléments .rv un par un ; met en évidence les nombres premiers et les lettres concernés
function play(animate, onDone) {
  const token = ++playToken;
  const items = [...$("stage").querySelectorAll(".rv")];
  const done = () => { scheduleAuto(); if (onDone) onDone(); };
  if (!animate) { items.forEach((el) => revealItem(el, false)); done(); return; }
  items.forEach((el) => el.classList.add("pending"));
  const inTable = (el) => el.closest("table");
  let k = 0;
  const step = () => {
    if (token !== playToken) return;
    if (k >= items.length) { done(); return; }
    const el = items[k++];
    revealItem(el, true);
    el.classList.add("hl");
    const delay = inTable(el) ? (el.tagName === "TD" ? 420 : 260) : 850;
    setTimeout(step, delay);
  };
  setTimeout(step, 250);
}
function finishPlay() {
  playToken++;
  $("stage").querySelectorAll(".rv.pending").forEach((el) => revealItem(el, false));
  scheduleAuto();
}
function revealItem(el, follow) {
  el.classList.remove("pending");
  const mark = el.dataset.mark;
  if (mark) $("stage").querySelectorAll(`.primes [data-prime="${mark}"]`).forEach((s) => s.classList.add("on"));
  const letter = el.dataset.letter;
  if (letter && el.classList.contains("tile")) $("stage").querySelectorAll(`.alpha [data-letter="${letter}"]`).forEach((s) => s.classList.add("on"));
  // Pendant l'animation, le tableau des essais défile pour suivre la ligne en cours
  const box = follow && el.closest(".follow");
  if (box) {
    const over = el.getBoundingClientRect().bottom - box.getBoundingClientRect().bottom;
    if (over > -8) box.scrollTop += over + 8;
  }
}

function demoSetupHTML() {
  const { p, q, e, word } = state.demo;
  const phi = (p - 1) * (q - 1);
  const es = validEs(phi, 15);
  return `<form class="setup" id="ar-setup">
    <h3>Paramètres de la démo</h3>
    <div class="fields">
      <div class="field"><label for="ar-s-p">p (premier)</label><input id="ar-s-p" type="number" min="2" max="997" value="${p}"></div>
      <div class="field"><label for="ar-s-q">q (premier)</label><input id="ar-s-q" type="number" min="2" max="997" value="${q}"></div>
      <div class="field"><label for="ar-s-e">e</label><select id="ar-s-e">${es.map((x) => `<option ${x === e ? "selected" : ""}>${x}</option>`).join("")}</select></div>
      <div class="field wide"><label for="ar-s-w">Mot à chiffrer</label><input id="ar-s-w" type="text" maxlength="10" value="${esc(word)}" autocomplete="off"></div>
      <button class="ar-btn" type="submit">Appliquer</button>
    </div>
    <div class="feedback" id="ar-s-fb"></div>
  </form>`;
}
function bindDemoSetup() {
  const refreshE = () => {
    const p = Number($("s-p").value), q = Number($("s-q").value);
    if (!isPrime(p) || !isPrime(q) || p === q) return;
    const es = validEs((p - 1) * (q - 1), 15);
    const cur = Number($("s-e").value);
    $("s-e").innerHTML = es.map((x) => `<option ${x === cur ? "selected" : ""}>${x}</option>`).join("");
  };
  $("s-p").addEventListener("change", refreshE);
  $("s-q").addEventListener("change", refreshE);
  $("s-w").addEventListener("input", (ev) => { ev.target.value = ev.target.value.toUpperCase(); });
  $("setup").addEventListener("submit", (ev) => {
    ev.preventDefault();
    const p = Number($("s-p").value), q = Number($("s-q").value), e = Number($("s-e").value);
    const word = $("s-w").value.trim().toUpperCase();
    const err = checkPQ(p, q) || checkWord(word);
    if (err) { setFb("s-fb", false, err); return; }
    const phi = (p - 1) * (q - 1);
    if (!e || phi % e === 0 || !isPrime(e)) { setFb("s-fb", false, "Choisis une valeur de e dans la liste."); return; }
    Object.assign(state.demo, { p, q, e, word, step: 0 });
    renderDemo(true);
  });
}

/* ---------- Vérifications communes ---------- */
function notPrimeMsg(x) {
  if (!Number.isInteger(x) || x < 2) return `${x} n'est pas un nombre premier.`;
  const f = smallestFactor(x);
  return `${x} n'est pas premier : ${x} = ${f} · ${x / f}.`;
}
function checkPQ(p, q) {
  if (!Number.isInteger(p) || !Number.isInteger(q)) return "Entre deux nombres entiers.";
  if (!isPrime(p)) return notPrimeMsg(p);
  if (!isPrime(q)) return notPrimeMsg(q);
  if (p === q) return "p et q doivent être deux nombres premiers différents.";
  if (p * q <= 26) return `n = p · q = ${p * q} est trop petit : il doit dépasser 26 pour que chaque lettre (de 1 à 26) soit plus petite que n. Choisis des nombres plus grands.`;
  if (p > 997 || q > 997) return "Choisis des nombres premiers plus petits que 1000 pour que les calculs restent lisibles.";
  return null;
}
function checkWord(w) {
  if (!/^[A-Z]{2,10}$/.test(w)) return "Le mot doit contenir de 2 à 10 lettres, sans accents, espaces ni chiffres.";
  return null;
}
function setFb(id, ok, html) {
  const el = $(id);
  el.className = "feedback " + (ok ? "ok" : "bad");
  el.innerHTML = html;
}
const intVal = (id) => { const s = $(id).value.trim(); return /^-?\d+$/.test(s) ? Number(s) : NaN; };

/* ---------- Outils d'aide (mode exercice) ---------- */
function helpPrimes(open) {
  return `<details class="help" ${open ? "open" : ""}><summary>Table des 100 premiers nombres premiers</summary>
    <div class="body"><p class="hint">Clique sur un nombre pour le placer dans le champ actif.</p>${primesGrid([], true)}</div></details>`;
}
function helpDivision(a, b) {
  return `<details class="help"><summary>Outil : division avec reste</summary><div class="body">
    <div class="fields">
      <div class="field"><label for="ar-t-a">Nombre à diviser</label><input id="ar-t-a" type="text" inputmode="numeric" value="${a ?? ""}"></div>
      <div class="field"><label for="ar-t-b">Diviser par</label><input id="ar-t-b" type="number" value="${b ?? ""}"></div>
      <button class="ar-btn ar-small" type="button" id="ar-t-div">Diviser</button>
    </div>
    <div class="out" id="ar-t-div-out"></div></div></details>`;
}
function helpFindD(e, phi) {
  return `<details class="help"><summary>Outil : trouver d</summary><div class="body">
    <p class="hint">L'outil cherche le plus petit d (différent de e) tel que le reste de la division de e · d par φ vaut 1. « d suivant » et « d précédent » parcourent les autres valeurs qui conviennent (jamais en dessous de 1).</p>
    <div class="fields">
      <div class="field"><label for="ar-t-e">e</label><input id="ar-t-e" type="number" value="${e ?? ""}"></div>
      <div class="field"><label for="ar-t-phi">φ</label><input id="ar-t-phi" type="number" value="${phi ?? ""}"></div>
      <button class="ar-btn ar-small" type="button" id="ar-t-find">Chercher d</button>
      <button class="ar-btn ar-small" type="button" id="ar-t-find-prev" hidden>← d précédent</button>
      <button class="ar-btn ar-small" type="button" id="ar-t-find-next" hidden>d suivant →</button>
    </div>
    <div class="out" id="ar-t-find-out"></div></div></details>`;
}
function helpPower(m, e) {
  return `<details class="help"><summary>Calculatrice : puissance</summary><div class="body">
    <div class="fields">
      <div class="field"><label for="ar-t-m">Nombre</label><input id="ar-t-m" type="number" value="${m ?? ""}"></div>
      <div class="field"><label for="ar-t-x">Exposant</label><input id="ar-t-x" type="number" value="${e ?? ""}"></div>
      <button class="ar-btn ar-small" type="button" id="ar-t-pow">Calculer</button>
    </div>
    <div class="out" id="ar-t-pow-out"></div>
    <div><button class="ar-btn ar-small" type="button" id="ar-t-pow-use" hidden>Diviser ce résultat avec l'outil de division</button></div></div></details>`;
}
function helpAlpha() {
  return `<details class="help"><summary>Position des lettres dans l'alphabet</summary><div class="body">${alphaGrid([])}</div></details>`;
}
function bindHelps() {
  const stage = $("stage");
  let lastInput = null;
  stage.querySelectorAll(".exo-in").forEach((inp) => inp.addEventListener("focus", () => { lastInput = inp; }));
  stage.querySelectorAll(".primes button").forEach((b) => b.addEventListener("click", () => {
    const targets = [...stage.querySelectorAll(".exo-in")];
    const t = lastInput || targets.find((x) => !x.value) || targets[0];
    if (!t) return;
    t.value = b.dataset.prime;
    const next = targets[targets.indexOf(t) + 1];
    lastInput = next && !next.value ? next : t;
  }));
  const div = $("t-div");
  if (div) div.onclick = () => {
    const as = $("t-a").value.replace(/\s| /g, ""), b = Number($("t-b").value);
    if (!/^\d+$/.test(as) || !Number.isInteger(b) || b <= 0) { $("t-div-out").textContent = "Entre deux nombres entiers positifs."; return; }
    const A = BigInt(as), B = BigInt(b), q = A / B, r = A % B;
    $("t-div-out").innerHTML = `${fmt(A)} = ${fmt(q)} · ${b} + <span class="big">${r}</span><br><span style="font-family:var(--f-body)">Le reste vaut <b>${r}</b>.</span>`;
  };
  const find = $("t-find");
  if (find) {
    const next = $("t-find-next"), prev = $("t-find-prev");
    let last = null; // { e, phi, d } du dernier d trouvé
    // dir : 0 = plus petit d, 1 = d suivant, -1 = d précédent
    const search = (dir) => {
      const e = Number($("t-e").value), phi = Number($("t-phi").value);
      next.hidden = prev.hidden = true;
      if (!Number.isInteger(e) || !Number.isInteger(phi) || e < 2 || phi < 2) { $("t-find-out").textContent = "Entre e et φ."; last = null; return; }
      const same = last && last.e === e && last.phi === phi;
      let d;
      if (dir === 1 && same) d = findD(e, phi, last.d);
      else if (dir === -1 && same) d = findDBefore(e, phi, last.d) ?? last.d;
      else d = findD(e, phi);
      if (d === null) { $("t-find-out").innerHTML = `Aucun d ne convient : ${e} et ${phi} ont un diviseur commun. Choisis un autre e.`; last = null; return; }
      last = { e, phi, d };
      const prod = e * d;
      const smallest = findDBefore(e, phi, d) === null;
      $("t-find-out").innerHTML = `d = <span class="big">${d}</span>${smallest ? ` <span style="font-family:var(--f-body)">(la plus petite valeur possible)</span>` : ""}<br>Vérification : ${e} · ${d} = ${fmt(prod)} = ${fmt(Math.floor(prod / phi))} · ${phi} + 1`;
      next.hidden = prev.hidden = false;
      prev.disabled = smallest;
    };
    find.onclick = () => search(0);
    next.onclick = () => search(1);
    prev.onclick = () => search(-1);
  }
  const pow = $("t-pow");
  if (pow) pow.onclick = () => {
    const m = Number($("t-m").value), x = Number($("t-x").value);
    const use = $("t-pow-use");
    use.hidden = true;
    if (!Number.isInteger(m) || !Number.isInteger(x) || m < 0 || x < 0) { $("t-pow-out").textContent = "Entre deux nombres entiers positifs."; return; }
    if (powDigits(m, x) > 3000) { $("t-pow-out").textContent = `Le résultat aurait ${powDigits(m, x)} chiffres : trop grand pour être affiché. Choisis un e plus petit.`; return; }
    const P = BigInt(m) ** BigInt(x);
    $("t-pow-out").innerHTML = `${m}<sup>${x}</sup> = ${fmt(P)}`;
    use.hidden = !$("t-a");
    use.onclick = () => {
      $("t-a").value = P.toString();
      const det = $("t-a").closest("details"); det.open = true;
      $("t-div").click();
      det.scrollIntoView({ block: "nearest" });
    };
  };
}

/* ---------- Mode exercice ---------- */
function exoVals() {
  const x = state.exo;
  const cipher = x.c ? x.c.map(pad2).join(" ") : null;
  return { p: x.p, q: x.q, n: x.n, phi: x.phi, e: x.e, d: x.d, word: x.ranksOk ? x.word : null, cipher };
}

function exoStepHTML(i) {
  const x = state.exo;
  const head = (eyebrow, title, lead) => `<div><p class="eyebrow">Étape ${i + 1} sur 8 · ${eyebrow}</p><h2>${title}</h2></div><p class="ar-lead">${lead}</p>`;
  const check = `<button class="ar-btn primary" type="submit">Vérifier</button>`;
  switch (i) {
    case 0: return head("Génération des clés", "Choisis deux nombres premiers p et q",
      "p et q doivent être deux nombres premiers différents, et leur produit doit dépasser 26.") + `
      <form id="ar-f" class="fields">
        <div class="field"><label for="ar-x-p">p</label><input class="exo-in" id="ar-x-p" type="number" value="${x.p ?? ""}"></div>
        <div class="field"><label for="ar-x-q">q</label><input class="exo-in" id="ar-x-q" type="number" value="${x.q ?? ""}"></div>
        ${check}
      </form>
      <div class="feedback" id="ar-fb"></div>
      <div class="helps">${helpPrimes(true)}</div>`;
    case 1: return head("Génération des clés", "Calcule n",
      `n = p · q, avec p = ${x.p} et q = ${x.q}.`) + `
      <form id="ar-f" class="fields">
        <div class="field"><label for="ar-x-n">n</label><input class="exo-in" id="ar-x-n" type="number" value="${x.n ?? ""}"></div>${check}
      </form>
      <div class="feedback" id="ar-fb"></div>
      <div class="helps"><details class="help"><summary>Indice</summary><div class="body"><p class="line">n = p · q = ${x.p} · ${x.q}</p></div></details></div>`;
    case 2: return head("Génération des clés", "Calcule φ",
      `φ = (p − 1) · (q − 1), avec p = ${x.p} et q = ${x.q}.`) + `
      <form id="ar-f" class="fields">
        <div class="field"><label for="ar-x-phi">φ</label><input class="exo-in" id="ar-x-phi" type="number" value="${x.phi ?? ""}"></div>${check}
      </form>
      <div class="feedback" id="ar-fb"></div>
      <div class="helps"><details class="help"><summary>Indice</summary><div class="body"><p class="line">φ = (${x.p} − 1) · (${x.q} − 1) = ${x.p - 1} · ${x.q - 1}</p></div></details></div>`;
    case 3: return head("Génération des clés", "Choisis e",
      `e doit être un nombre premier plus petit que φ = ${x.phi}, et le reste de la division de ${x.phi} par e ne doit pas valoir 0. Un petit e rend les calculs plus simples.`) + `
      <form id="ar-f" class="fields">
        <div class="field"><label for="ar-x-e">e</label><input class="exo-in" id="ar-x-e" type="number" value="${x.e ?? ""}"></div>${check}
      </form>
      <div class="feedback" id="ar-fb"></div>
      <div class="helps">${helpPrimes(false)}${helpDivision(x.phi, "")}</div>`;
    case 4: return head("Génération des clés", "Trouve d",
      `d doit être différent de e = ${x.e}, et le reste de la division de ${x.e} · d par φ = ${x.phi} doit valoir 1.`) + `
      <form id="ar-f" class="fields">
        <div class="field"><label for="ar-x-d">d</label><input class="exo-in" id="ar-x-d" type="number" value="${x.d ?? ""}"></div>${check}
      </form>
      <div class="feedback" id="ar-fb"></div>
      <div class="helps">${helpFindD(x.e, x.phi)}${helpDivision("", x.phi)}</div>`;
    case 5: return head("Génération des clés", "Écris les deux clés",
      "Retrouve quels nombres forment la clé publique (publiée) et la clé privée (gardée secrète).") + `
      <form id="ar-f" class="calc">
        <div class="key pub"><span class="t">Clé publique (n, e)</span>
          <div class="fields"><div class="field"><label for="ar-k-n">n</label><input class="exo-in" id="ar-k-n" type="number"></div>
          <div class="field"><label for="ar-k-e">e</label><input class="exo-in" id="ar-k-e" type="number"></div></div></div>
        <div class="key priv"><span class="t">Clé privée (p, q, d)</span>
          <div class="fields"><div class="field"><label for="ar-k-p">p</label><input class="exo-in" id="ar-k-p" type="number"></div>
          <div class="field"><label for="ar-k-q">q</label><input class="exo-in" id="ar-k-q" type="number"></div>
          <div class="field"><label for="ar-k-d">d</label><input class="exo-in" id="ar-k-d" type="number"></div></div></div>
        <div>${check}</div>
      </form>
      <div class="feedback" id="ar-fb"></div>
      <div class="helps"><details class="help"><summary>Indice</summary><div class="body"><p>La clé publique contient n et e. La clé privée contient les deux nombres premiers et d. Les valeurs sont dans le carnet d'Alice.</p></div></details></div>`;
    case 6: {
      const word = x.word;
      return head("Chiffrement", "Transforme le message en nombres",
        "Choisis un mot, puis remplace chaque lettre par sa position dans l'alphabet (A = 1, B = 2, …, Z = 26).") + `
      <form id="ar-fw" class="fields">
        <div class="field"><label for="ar-x-w">Mot à chiffrer</label><input id="ar-x-w" type="text" maxlength="10" autocomplete="off" value="${esc(word ?? "")}"></div>
        <button class="ar-btn" type="submit">${word ? "Changer de mot" : "Valider le mot"}</button>
      </form>
      ${word ? `<form id="ar-f" class="calc">
        <div class="word">${[...word].map((L, k) => `<div class="tile"><span class="L">${L}</span><label class="sr" for="ar-r-${k}" style="position:absolute;left:-9999px">Position de ${L}</label><input class="exo-in" id="ar-r-${k}" type="number"></div>`).join("")}</div>
        <div>${check}</div>
      </form>` : ""}
      <div class="feedback" id="ar-fb"></div>
      <div class="helps">${helpAlpha()}</div>`;
    }
    case 7: {
      const word = x.word;
      return head("Chiffrement", "Chiffre chaque lettre",
        `Avec la clé publique (${x.n}, ${x.e}) : pour chaque bloc m, c = reste de la division de m<sup>${x.e}</sup> par ${x.n}.`) + `
      <form id="ar-f" class="calc">
        <div class="tablewrap"><table>
          <thead><tr><th>Lettre</th><th>m</th><th>Calcul</th><th>c</th></tr></thead>
          <tbody>${[...word].map((L, k) => `<tr><td style="font-family:var(--f-display);font-weight:800">${L}</td><td>${rank(L)}</td>
            <td style="font-family:var(--f-body)">reste de la division de ${rank(L)}<sup>${x.e}</sup> par ${x.n}</td>
            <td><label for="ar-c-${k}" style="position:absolute;left:-9999px">c pour ${L}</label><input class="exo-in" id="ar-c-${k}" type="number" style="max-width:110px" value="${x.c ? x.c[k] : ""}"></td></tr>`).join("")}</tbody>
        </table></div>
        <div>${check}</div>
      </form>
      <div class="feedback" id="ar-fb"></div>
      ${x.c ? `<div class="line"><span class="lbl">Cryptogramme à envoyer</span><span class="crypto">${x.c.map(pad2).join(" ")}</span></div>` : ""}
      <div class="helps">${helpPower(rank(word[0]), x.e)}${helpDivision("", x.n)}</div>`;
    }
  }
}

function renderExo() {
  clearTimeout(autoTimer);
  playToken++;
  const x = state.exo, i = x.step;
  renderSteps();
  $("stage").innerHTML = exoStepHTML(i) + `
    <div class="controls">
      <div class="group">
        <button class="ar-btn" id="ar-x-prev" type="button" ${i === 0 ? "disabled" : ""}>← Étape précédente</button>
        <button class="ar-btn primary" id="ar-x-next" type="button" ${i >= x.reached ? "disabled" : ""}>${i === 7 ? "Terminé" : "Étape suivante →"}</button>
      </div>
      <div class="group"><button class="ar-btn" id="ar-x-reset" type="button">Tout recommencer</button></div>
    </div>`;
  renderBook(exoVals(), x.reached);
  bindHelps();
  $("x-prev").onclick = () => { x.step--; renderExo(); };
  $("x-next").onclick = () => { if (i < 7) { x.step++; renderExo(); } };
  $("x-reset").onclick = () => { state.exo = freshExo(); renderExo(); };
  const f = $("f");
  if (f) f.addEventListener("submit", (ev) => { ev.preventDefault(); checkExo(i); });
  const fw = $("fw");
  if (fw) {
    $("x-w").addEventListener("input", (ev) => { ev.target.value = ev.target.value.toUpperCase(); });
    fw.addEventListener("submit", (ev) => {
      ev.preventDefault();
      const w = $("x-w").value.trim().toUpperCase();
      const err = checkWord(w);
      if (err) { setFb("fb", false, err); return; }
      Object.assign(x, { word: w, ranksOk: false, c: null, reached: 6 });
      renderExo();
      const first = $("r-0"); if (first) first.focus();
    });
  }
}

// Valide l'étape i ; en cas de succès, débloque l'étape suivante
function succeed(i, html) {
  const x = state.exo;
  x.reached = Math.max(x.reached, i + 1);
  renderSteps();
  renderBook(exoVals(), x.reached);
  setFb("fb", true, html);
  $("x-next").disabled = i === 7;
}
function invalidateFrom(i) {
  // Une valeur modifiée rend les étapes suivantes à refaire
  const x = state.exo;
  if (i < 1) x.n = null;
  if (i < 2) x.phi = null;
  if (i < 3) x.e = null;
  if (i < 4) x.d = null;
  if (i < 5) x.keysOk = false;
  if (i < 7) x.c = null;
  if (i < 6) x.ranksOk = false;
  x.reached = Math.min(x.reached, i);
}

function checkExo(i) {
  const x = state.exo;
  switch (i) {
    case 0: {
      const p = intVal("x-p"), q = intVal("x-q");
      const err = checkPQ(p, q);
      if (err) return setFb("fb", false, err);
      if (p !== x.p || q !== x.q) invalidateFrom(0);
      x.p = p; x.q = q;
      return succeed(0, `Bien choisi : ${p} et ${q} sont deux nombres premiers, et leur produit dépasse 26.`);
    }
    case 1: {
      const n = intVal("x-n"), good = x.p * x.q;
      if (n !== good) return setFb("fb", false, n === x.p + x.q ? "Tu as additionné p et q. Il faut les multiplier." : `Ce n'est pas encore ça. Recalcule ${x.p} · ${x.q}.`);
      if (x.n !== n) invalidateFrom(1);
      x.n = n;
      return succeed(1, `Exact : n = ${x.p} · ${x.q} = ${n}.`);
    }
    case 2: {
      const phi = intVal("x-phi"), good = (x.p - 1) * (x.q - 1);
      if (phi !== good) {
        const msg = phi === x.n ? "Tu as calculé p · q. Pour φ, enlève d'abord 1 à p et à q."
          : phi === x.n - 1 ? "Tu as enlevé 1 au produit. Il faut enlever 1 à p et à q, puis multiplier."
          : `Ce n'est pas encore ça. Calcule d'abord p − 1 et q − 1, puis multiplie-les.`;
        return setFb("fb", false, msg);
      }
      if (x.phi !== phi) invalidateFrom(2);
      x.phi = phi;
      return succeed(2, `Exact : φ = ${x.p - 1} · ${x.q - 1} = ${phi}.`);
    }
    case 3: {
      const e = intVal("x-e");
      if (!Number.isInteger(e)) return setFb("fb", false, "Entre un nombre entier.");
      if (!isPrime(e)) return setFb("fb", false, notPrimeMsg(e));
      if (e >= x.phi) return setFb("fb", false, `Choisis e plus petit que φ = ${x.phi}.`);
      if (e > 500) return setFb("fb", false, "Choisis un e plus petit que 500 pour que les calculs restent affichables.");
      const q = Math.floor(x.phi / e), r = x.phi % e;
      if (r === 0) return setFb("fb", false, `${x.phi} = ${q} · ${e} + 0 : le reste vaut 0, donc e = ${e} ne convient pas. Essaie un autre nombre premier.`);
      if (x.e !== e) invalidateFrom(3);
      x.e = e;
      return succeed(3, `e = ${e} convient : ${x.phi} = ${q} · ${e} + ${r}, le reste vaut ${r}, il ne vaut pas 0.`);
    }
    case 4: {
      const d = intVal("x-d");
      if (!Number.isInteger(d) || d < 1) return setFb("fb", false, "Entre un nombre entier positif.");
      if (d === x.e) return setFb("fb", false, "d doit être différent de e.");
      const prod = x.e * d, q = Math.floor(prod / x.phi), r = prod % x.phi;
      if (r !== 1) return setFb("fb", false, `${x.e} · ${d} = ${fmt(prod)} = ${fmt(q)} · ${x.phi} + ${r} : le reste vaut ${r}, pas 1. Utilise l'outil « trouver d ».`);
      if (x.d !== d) invalidateFrom(4);
      x.d = d;
      return succeed(4, `d = ${d} convient : ${x.e} · ${d} = ${fmt(prod)} = ${fmt(q)} · ${x.phi} + 1.`);
    }
    case 5: {
      const v = { n: intVal("k-n"), e: intVal("k-e"), p: intVal("k-p"), q: intVal("k-q"), d: intVal("k-d") };
      if (v.n !== x.n || v.e !== x.e) return setFb("fb", false, "La clé publique n'est pas correcte : elle contient n puis e.");
      const pq = (v.p === x.p && v.q === x.q) || (v.p === x.q && v.q === x.p);
      if (!pq || v.d !== x.d) return setFb("fb", false, "La clé privée n'est pas correcte : elle contient p, q puis d.");
      x.keysOk = true;
      return succeed(5, `Bravo ! Clé publique (${x.n}, ${x.e}) à publier, clé privée (${x.p}, ${x.q}, ${x.d}) à garder secrète.`);
    }
    case 6: {
      const word = x.word;
      if (!word) return setFb("fb", false, "Commence par valider un mot.");
      const wrong = [...word].map((L, k) => intVal(`r-${k}`) === rank(L) ? null : L).filter(Boolean);
      if (wrong.length) return setFb("fb", false, `Position incorrecte pour : ${[...new Set(wrong)].join(", ")}. Regarde la table de l'alphabet.`);
      x.ranksOk = true; x.c = null;
      return succeed(6, `Message transformé : ${[...word].map((L) => pad2(rank(L))).join(" ")}. Chaque nombre est plus petit que n = ${x.n}.`);
    }
    case 7: {
      const word = x.word;
      const vals = [...word].map((_, k) => intVal(`c-${k}`));
      const good = [...word].map((L) => modPow(rank(L), x.e, x.n));
      const wrong = [...word].filter((L, k) => vals[k] !== good[k]);
      if (wrong.length) {
        const k = vals.findIndex((v, j) => v !== good[j]);
        const m = rank(word[k]);
        const hint = Number.isInteger(vals[k]) && vals[k] >= x.n ? ` Un reste est toujours plus petit que ${x.n}.` : " Calcule la puissance, puis divise-la par n avec les outils.";
        return setFb("fb", false, `À corriger : ${[...new Set(wrong)].join(", ")}. Commence par ${word[k]} (m = ${m}).${hint}`);
      }
      x.c = good;
      succeed(7, `Bravo, tout est juste ! Tu peux envoyer le cryptogramme à Alice : seule sa clé privée permet de le déchiffrer.`);
      renderExoCipher();
      return;
    }
  }
}
function renderExoCipher() {
  const x = state.exo;
  if (!$("cipher-line")) {
    const div = document.createElement("div");
    div.className = "line"; div.id = "cipher-line";
    div.innerHTML = `<span class="lbl">Cryptogramme à envoyer</span><span class="crypto">${x.c.map(pad2).join(" ")}</span>`;
    $("fb").after(div);
  }
}

/* ---------- Calculatrice ---------- */
// Calcul exact en entiers (BigInt) tant qu'il n'y a ni division ni virgule ; sinon en nombres décimaux
function calcEval(src) {
  const toks = src.replace(/\s| /g, "").replace(/,/g, ".").match(/\d+(\.\d+)?|[-+−*×x·/÷^()]|./g) || [];
  if (!toks.length) throw new Error("Entre un calcul.");
  const bad = toks.find((t) => !/^(\d+(\.\d+)?|[-+−*×x·/÷^()])$/.test(t));
  if (bad) throw new Error(`Caractère non reconnu : « ${bad} ».`);
  const exact = !toks.some((t) => t === "/" || t === "÷" || t.includes("."));
  const num = (t) => exact ? BigInt(t) : Number(t);
  let i = 0;
  const peek = () => toks[i];
  const isOp = (t, ops) => ops.includes(t);
  function expr() {
    let v = term();
    while (isOp(peek(), ["+", "-", "−"])) { const op = toks[i++]; const w = term(); v = op === "+" ? v + w : v - w; }
    return v;
  }
  function term() {
    let v = power();
    while (isOp(peek(), ["*", "×", "x", "·", "/", "÷"])) {
      const op = toks[i++]; const w = power();
      if (op === "/" || op === "÷") { if (w === 0) throw new Error("Division par 0 impossible."); v = v / w; } else v = v * w;
    }
    return v;
  }
  function power() {
    const b = unary();
    if (peek() !== "^") return b;
    i++;
    const x = power();
    if (exact) {
      if (x < 0n) throw new Error("Exposant négatif non pris en charge.");
      const ab = b < 0n ? -b : b;
      if (ab > 1n && Number(x) * Math.log10(Number(ab)) > 3000) throw new Error("Résultat trop grand (plus de 3000 chiffres).");
      return b ** x;
    }
    return Math.pow(b, x);
  }
  function unary() {
    if (isOp(peek(), ["-", "−"])) { i++; return -unary(); }
    if (peek() === "+") { i++; return unary(); }
    return primary();
  }
  function primary() {
    const t = toks[i++];
    if (t === undefined) throw new Error("Calcul incomplet.");
    if (t === "(") {
      const v = expr();
      if (toks[i++] !== ")") throw new Error("Il manque une parenthèse fermante.");
      return v;
    }
    if (/^\d/.test(t)) return num(t);
    throw new Error("Calcul incomplet.");
  }
  const v = expr();
  if (i < toks.length) throw new Error(toks[i] === ")" ? "Parenthèse fermante en trop." : "Calcul incomplet.");
  if (typeof v === "number" && !Number.isFinite(v)) throw new Error("Résultat trop grand.");
  return v;
}
function calcFormat(v) {
  if (typeof v === "bigint") return (v < 0n ? "−" : "") + fmt(v < 0n ? -v : v);
  if (Number.isInteger(v) && Math.abs(v) < 1e15) return (v < 0 ? "−" : "") + fmt(Math.abs(v));
  return v.toLocaleString("fr-CH", { maximumFractionDigits: 6 }).replace(/-/g, "−");
}
const calcPretty = (s) => s.replace(/\s+/g, "").replace(/[*×x]/g, "·").replace(/\//g, "÷").replace(/-/g, "−")
  .replace(/([·÷+−])/g, " $1 ").trim();
(function setupCalc() {
  const inp = $("calc-in"), res = $("calc-res"), hist = $("calc-hist");
  const history = [];
  const run = () => {
    const src = inp.value.trim();
    if (!src) return;
    try {
      const out = calcFormat(calcEval(src));
      res.className = "calc-res"; res.textContent = "= " + out;
      history.unshift({ expr: calcPretty(src), out });
      history.length = Math.min(history.length, 4);
      hist.innerHTML = history.map((h, k) => `<li><button type="button" data-k="${k}" title="Réutiliser le résultat">${esc(h.expr)} = ${esc(h.out)}</button></li>`).join("");
      hist.querySelectorAll("button").forEach((b) => b.onclick = () => { inp.value = history[b.dataset.k].out.replace(/[ −]/g, (c) => c === "−" ? "-" : ""); inp.focus(); });
    } catch (err) {
      res.className = "calc-res err"; res.textContent = err.message;
    }
  };
  $("calc-form").addEventListener("submit", (ev) => { ev.preventDefault(); run(); });
  inp.addEventListener("input", () => {
    if (!/[*×]/.test(inp.value)) return;
    const pos = inp.selectionStart;
    inp.value = inp.value.replace(/[*×]/g, "·");
    inp.setSelectionRange(pos, pos);
  });
  $("keypad").addEventListener("click", (ev) => {
    const b = ev.target.closest("button"); if (!b) return;
    const k = b.dataset.k;
    if (k === "=") run();
    else if (k === "C") { inp.value = ""; res.textContent = ""; res.className = "calc-res"; }
    else if (k === "DEL") inp.value = inp.value.slice(0, -1);
    else inp.value += k;
  });
})();


/* ---------- Chiffrer / déchiffrer avec une clé ---------- */
// L'opération dépend de la clé (publique → e, privée → d) et du message (lettres → nombres, nombres → lettres)
const OPS = {
  "pub-L": { title: "Chiffrement", text: "On chiffre avec la clé publique : tout le monde peut le faire, mais seul le propriétaire de la clé privée pourra lire le message." },
  "priv-N": { title: "Déchiffrement", text: "On déchiffre avec la clé privée : seul son propriétaire peut le faire." },
  "priv-L": { title: "Signature", text: "On chiffre avec la clé privée : c'est une signature. Tout le monde pourra la vérifier en déchiffrant avec la clé publique." },
  "pub-N": { title: "Vérification d'une signature", text: "On déchiffre avec la clé publique. Si on retrouve un message lisible, il a bien été signé avec la clé privée correspondante." },
};
function parseKey(src) {
  const nums = (src.match(/\d+/g) || []).map(Number);
  const help = "Écris une clé publique (n, e), par exemple (55, 3), ou une clé privée (p, q, d), par exemple (5, 11, 27).";
  if (nums.length === 2) {
    const [n, e] = nums;
    if (n < 2 || e < 1) return { err: "Dans une clé publique (n, e), n et e doivent être plus grands que 0." };
    if (n > 1e9) return { err: "n est trop grand pour cet atelier : choisis un n plus petit qu'un milliard." };
    return { type: "pub", n, k: e, kName: "e", label: `(${n}, ${e})` };
  }
  if (nums.length === 3) {
    const [p, q, d] = nums;
    if (!isPrime(p)) return { err: notPrimeMsg(p) + " Dans une clé privée (p, q, d), p et q sont premiers." };
    if (!isPrime(q)) return { err: notPrimeMsg(q) + " Dans une clé privée (p, q, d), p et q sont premiers." };
    if (p === q) return { err: "Dans une clé privée (p, q, d), p et q sont deux nombres premiers différents." };
    if (p * q > 1e9) return { err: "p · q est trop grand pour cet atelier : choisis des nombres premiers plus petits." };
    const phi = (p - 1) * (q - 1);
    if (d < 1 || gcd(d, phi) !== 1) return { err: `d = ${d} ne peut pas faire partie d'une clé privée avec p = ${p} et q = ${q} : aucun e ne lui correspond.` };
    return { type: "priv", p, q, n: p * q, k: d, kName: "d", label: `(${p}, ${q}, ${d})` };
  }
  return { err: help };
}
function parseMsg(src, n) {
  const s = src.trim();
  if (!s) return { err: "Entre un message : un mot en lettres ou des nombres séparés par des espaces." };
  if (/^[A-Za-z\s]+$/.test(s)) {
    const word = s.replace(/\s+/g, "").toUpperCase();
    if (word.length > 12) return { err: "Le message doit contenir 12 lettres au plus." };
    if (n <= 26) return { err: `n = ${n} est trop petit pour chiffrer des lettres : il doit dépasser 26.` };
    return { kind: "L", word, ms: [...word].map(rank) };
  }
  if (/^[\d\s,;.\-]+$/.test(s)) {
    const ms = (s.match(/\d+/g) || []).map(Number);
    if (!ms.length) return { err: "Entre des nombres séparés par des espaces." };
    if (ms.length > 12) return { err: "Le message doit contenir 12 nombres au plus." };
    const big = ms.find((x) => x >= n);
    if (big !== undefined) return { err: `${big} n'est pas plus petit que n = ${n} : ce nombre ne peut pas avoir été chiffré avec cette clé.` };
    return { kind: "N", ms };
  }
  return { err: "Le message doit contenir soit uniquement des lettres (sans accents), soit uniquement des nombres." };
}
function machineCompute(key, msg) {
  const width = Math.max(2, String(key.n - 1).length);
  const padN = (x) => String(x).padStart(width, "0");
  const rows = msg.ms.map((a) => ({ a, ...encryptRow(a, key.k, key.n, 50) }));
  const out = rows.map((r) => r.c);
  const letters = msg.kind === "N" ? out.map((b) => (b >= 1 && b <= 26 ? ALPHA[b - 1] : null)) : null;
  const allLetters = letters ? letters.every(Boolean) : false;
  const op = OPS[`${key.type}-${msg.kind}`];
  const inText = msg.kind === "L" ? msg.word : msg.ms.map(padN).join(" ");
  const outNums = out.map(padN).join(" ");
  const outText = msg.kind === "L" ? outNums : allLetters ? letters.join("") : outNums;
  return { rows, out, letters, allLetters, op, padN, inText, outNums, outText };
}
function machineHTML() {
  const mc = state.machine;
  const ex = (label, key, msg) => `<button class="ar-btn ar-small" type="button" data-key="${key}" data-msg="${msg}">${label}</button>`;
  return `<div><p class="eyebrow">Chiffrer / déchiffrer</p><h2>Utiliser une clé</h2></div>
    <p class="ar-lead">Entre une clé et un message. Un mot en lettres est transformé en nombres, une suite de nombres est transformée en lettres. Avec une clé publique (n, e), on utilise e ; avec une clé privée (p, q, d), on utilise d.</p>
    <form class="setup" id="ar-m-form">
      <div class="fields">
        <div class="field"><label for="ar-m-key">Clé</label><input id="ar-m-key" type="text" value="${esc(mc.key)}" placeholder="(55, 3) ou (5, 11, 27)" autocomplete="off"></div>
        <div class="field"><label for="ar-m-msg">Message</label><input id="ar-m-msg" type="text" value="${esc(mc.msg)}" placeholder="SALUT ou 39 01 23 21 25" autocomplete="off"></div>
        <button class="ar-btn primary" type="submit">Lancer</button>
      </div>
      <div class="examples"><span class="hint">Exemples :</span>
        ${ex("Chiffrer SALUT", "(55, 3)", "SALUT")}
        ${ex("Déchiffrer 39 01 23 21 25", "(5, 11, 27)", "39 01 23 21 25")}
        ${ex("Signer OUI", "(5, 11, 27)", "OUI")}
        ${ex("Vérifier 05 21 04", "(55, 3)", "05 21 04")}
      </div>
      <div class="feedback" id="ar-m-fb"></div>
    </form>
    <div id="ar-m-out" class="calc"></div>`;
}
function machineRunHTML(key, msg, r) {
  const L = msg.kind === "L";
  const a = L ? "m" : "c", b = L ? "c" : "m";
  const kn = key.kName;
  const line = (lbl, html) => `<div class="line rv"><span class="lbl">${lbl}</span>${html}</div>`;
  const tiles = (word) => `<div class="word">${word.map((Lt, i) => Lt
    ? `<div class="tile rv" data-letter="${Lt}"><span class="L">${Lt}</span><span class="m">${pad2(rank(Lt))}</span></div>`
    : `<div class="tile rv unk"><span class="L">?</span><span class="m">${r.padN(r.out[i])}</span></div>`).join("")}</div>`;
  let h = `<div class="op-title rv"><h3>${r.op.title}</h3><span class="hint" style="color:var(--muted)">${r.op.text}</span></div>
    <div class="key ${key.type} rv"><span class="t">Clé ${key.type === "pub" ? "publique (n, e)" : "privée (p, q, d)"}</span><span class="v">${key.label}</span>
      <span class="d">On utilise n = ${key.n} et l'exposant ${kn} = ${key.k}.</span></div>`;
  if (key.type === "priv") h += line("On calcule n", `n = p · q = ${key.p} · ${key.q} = <span class="big">${key.n}</span>`);
  if (L) {
    h += `<div class="line rv"><span class="lbl">Chaque lettre est remplacée par sa position dans l'alphabet</span><div style="margin-top:6px">${tiles([...msg.word])}</div></div>`;
    h += `<div>${alphaGrid([])}</div>`;
    h += line("Message en nombres", msg.ms.map(pad2).join(" "));
  }
  h += line("Pour chaque nombre", `${b} = reste de la division de ${a}<sup>${kn}</sup> par ${key.n}`);
  const rows = r.rows.map((row) => `<tr>${L ? `<td class="rv" style="font-family:var(--f-display);font-weight:800">${ALPHA[row.a - 1]}</td>` : ""}<td class="rv">${row.a}</td><td class="rv">${row.a}<sup>${key.k}</sup> = ${row.pow}</td><td class="rv">${row.div}</td><td class="rv"><span class="big">${row.c}</span></td></tr>`).join("");
  h += `<div class="tablewrap follow"><table>
    <thead><tr>${L ? "<th>Lettre</th>" : ""}<th>${a}</th><th>${a}<sup>${kn}</sup></th><th>Division par ${key.n}</th><th>${b}</th></tr></thead>
    <tbody>${rows}</tbody></table></div>`;
  if (L) {
    h += line(r.op.title === "Signature" ? "Message signé" : "Cryptogramme", `<span class="crypto">${r.outNums}</span>`);
  } else {
    h += `<div class="line rv"><span class="lbl">Chaque nombre est remplacé par la lettre correspondante</span><div style="margin-top:6px">${tiles(r.letters)}</div></div>`;
    h += `<div>${alphaGrid([])}</div>`;
    h += r.allLetters
      ? line("Message", `<span class="crypto">${r.outText}</span>`)
      : `<p class="note rv">Certains nombres (marqués « ? ») ne correspondent à aucune lettre de 1 à 26. Le message a sans doute été chiffré avec une autre clé.</p>`;
  }
  return h;
}
function renderMachineBook(key, msg, r, finished) {
  if (!key) {
    $("book").innerHTML = `<h2>Résumé</h2><p class="hint">La clé, l'opération et le résultat s'afficheront ici.</p>`;
    return;
  }
  $("book").innerHTML = `<h2>Résumé</h2>
    <div class="key ${key.type}"><span class="t">Clé ${key.type === "pub" ? "publique" : "privée"}</span><span class="v">${key.label}</span></div>
    <dl class="vals">
      <dt>Opération</dt><dd style="font-family:var(--f-body)">${r.op.title}</dd>
      <dt>n</dt><dd>${key.n}</dd>
      <dt>Exposant</dt><dd>${key.kName} = ${key.k}</dd>
      <dt>Message</dt><dd>${esc(r.inText)}</dd>
      <dt>Résultat</dt>${finished ? `<dd>${esc(r.outText)}</dd>` : `<dd class="empty">…</dd>`}
    </dl>`;
}
function renderMachine() {
  $("stage").innerHTML = machineHTML();
  renderMachineBook(null);
  $("m-msg").addEventListener("input", (ev) => { const el = ev.target, pos = el.selectionStart; el.value = el.value.toUpperCase(); el.setSelectionRange(pos, pos); });
  $("m-form").addEventListener("submit", (ev) => { ev.preventDefault(); runMachine(true); });
  $("stage").querySelectorAll(".examples button").forEach((btn) => btn.addEventListener("click", () => {
    $("m-key").value = btn.dataset.key; $("m-msg").value = btn.dataset.msg; runMachine(true);
  }));
  if (state.machine.ran) runMachine(false);
}
function runMachine(animate) {
  const mc = state.machine;
  mc.key = $("m-key").value; mc.msg = $("m-msg").value;
  const out = $("m-out");
  playToken++;
  $("m-fb").className = "feedback"; $("m-fb").textContent = "";
  const key = parseKey(mc.key);
  const msg = key.err ? null : parseMsg(mc.msg, key.n);
  const err = key.err || msg.err;
  if (err) { setFb("m-fb", false, err); out.innerHTML = ""; renderMachineBook(null); mc.ran = false; return; }
  mc.ran = true;
  const r = machineCompute(key, msg);
  const speed = mc.speed || "lent";
  out.innerHTML = machineRunHTML(key, msg, r) + `
    <div class="controls">
      <div class="player">
        <button class="ar-btn" type="button" id="ar-m-prev">← Précédent</button>
        <button class="ar-btn primary" type="button" id="ar-m-next">Suivant →</button>
        <span class="count" id="ar-m-count" aria-live="polite"></span>
      </div>
      <div class="player">
        <button class="ar-btn" type="button" id="ar-m-auto"></button>
        <label for="ar-m-speed" style="position:absolute;left:-9999px">Vitesse</label>
        <select id="ar-m-speed">
          <option value="lent" ${speed === "lent" ? "selected" : ""}>Lente</option>
          <option value="normal" ${speed === "normal" ? "selected" : ""}>Normale</option>
          <option value="rapide" ${speed === "rapide" ? "selected" : ""}>Rapide</option>
        </select>
        <button class="ar-btn" type="button" id="ar-m-all">Tout afficher</button>
        <button class="ar-btn" type="button" id="ar-m-replay">Recommencer</button>
      </div>
    </div>`;
  const items = [...out.querySelectorAll(".rv")];
  const DELAYS = { lent: [1500, 2600], normal: [800, 1500], rapide: [350, 700] }; // [case de tableau, autre élément]
  const token = playToken; // un nouveau lancement ou un changement d'onglet arrête ce lecteur
  let shown = 0, timer = null, auto = false;
  // Affiche les `shown` premiers éléments, cache les autres, et met en évidence le dernier affiché
  const sync = (follow) => {
    items.forEach((el, k) => {
      el.classList.toggle("pending", k >= shown);
      el.classList.toggle("cur", k === shown - 1 && shown < items.length);
    });
    out.querySelectorAll(".alpha .on").forEach((x) => x.classList.remove("on"));
    items.slice(0, shown).forEach((el) => {
      if (el.classList.contains("tile") && el.dataset.letter) out.querySelectorAll(`.alpha [data-letter="${el.dataset.letter}"]`).forEach((x) => x.classList.add("on"));
    });
    const last = items[shown - 1];
    if (follow && last) {
      last.classList.remove("hl"); void last.offsetWidth; last.classList.add("hl");
      revealItem(last, true);
    }
    $("m-count").textContent = `${shown} / ${items.length}`;
    $("m-prev").disabled = shown === 0;
    $("m-next").disabled = shown === items.length;
    $("m-all").disabled = shown === items.length;
    $("m-auto").textContent = auto ? "Pause" : shown === items.length ? "Rejouer" : "Lecture automatique";
    renderMachineBook(key, msg, r, shown === items.length);
  };
  const stop = () => { auto = false; clearTimeout(timer); };
  const tick = () => {
    if (!auto || token !== playToken) return;
    if (shown >= items.length) { stop(); sync(false); return; }
    shown++; sync(true);
    if (shown >= items.length) { stop(); sync(false); return; }
    const [inTable, other] = DELAYS[mc.speed || "lent"];
    timer = setTimeout(tick, items[shown].closest("table") ? inTable : other);
  };
  const startAuto = () => {
    if (shown >= items.length) shown = 0;
    auto = true; sync(false); timer = setTimeout(tick, 300);
  };
  $("m-next").onclick = () => { stop(); if (shown < items.length) shown++; sync(true); };
  $("m-prev").onclick = () => { stop(); if (shown > 0) shown--; sync(true); };
  $("m-all").onclick = () => { stop(); shown = items.length; sync(false); };
  $("m-replay").onclick = () => { stop(); shown = 0; sync(false); };
  $("m-auto").onclick = () => { if (auto) { stop(); sync(false); } else startAuto(); };
  $("m-speed").onchange = (ev) => { mc.speed = ev.target.value; };
  if (animate) out.scrollIntoView({ block: "nearest", behavior: reduceMotion ? "auto" : "smooth" });
  if (!animate) { shown = items.length; sync(false); }
  else if (reduceMotion) sync(false);
  else startAuto();
}

/* ---------- Bascule de mode ---------- */
function setMode(m) {
  state.mode = m;
  playToken++; clearTimeout(autoTimer);
  for (const id of ["demo", "exo", "machine"]) $("mode-" + id).setAttribute("aria-pressed", m === id);
  $("steps").hidden = m === "machine";
  if (m === "demo") renderDemo(false); else if (m === "exo") renderExo(); else renderMachine();
}
$("mode-demo").onclick = () => setMode("demo");
$("mode-exo").onclick = () => setMode("exo");
$("mode-machine").onclick = () => setMode("machine");

renderDemo(false);

  }

  function start() {
    if (!document.querySelector('link[href*="Bricolage+Grotesque"]')) {
      const l = document.createElement("link");
      l.rel = "stylesheet";
      l.href = 'https://fonts.googleapis.com/css2?family=Atkinson+Hyperlegible:wght@400;700&family=Bricolage+Grotesque:opsz,wght@12..96,600;12..96,800&family=JetBrains+Mono:wght@400;600&display=swap';
      document.head.appendChild(l);
    }
    const root = document.getElementById("atelier_rsa") || document.querySelector(".atelier_rsa");
    if (root) init(root);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", start);
  else start();
})();
