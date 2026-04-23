% Exercices - Étude de signes dans des modèles réels
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Étude de signes dans des modèles réels

```{metadata}
subject: "Mathématiques 2e année"
```


## Objectifs

- Relier un problème concret à une inéquation.
- Utiliser un tableau de signes pour analyser une situation réelle.
- Visualiser les fonctions associées.

---

### Trajectoire d’une balle (physique)

Lorsqu’on lance une balle verticalement avec une vitesse initiale de $12$ $m/s$ et $g=9,8$ $m/s^2$ l'accélération de la pesanteur à la surface de la terre (voir [Wikipedia](https://fr.wikipedia.org/wiki/G_(acc%C3%A9l%C3%A9ration))), sa hauteur est :

$h(t) = 12t - \dfrac{1}{2} 9,8 t^2=12t-4,9 t^2$

Pendant combien de temps la balle est-elle au-dessus de 5 mètres ?

Représentez graphiquement la fonction :

```{jsxgraph} fonction-rationnelle
:style: width: 80%;
```

<script type="module">
const {defaults, initBoard, JXG, nonInteractive} =
    await tdoc.import('jsxgraph.js');
initBoard('fonction-rationnelle', [defaults, nonInteractive, {
    boundingBox: [-10.5, 10.5, 10.5, -10.5],
    grid: {majorStep: 1},
    defaults: {
        line: {dash: 2},
        point: {label: {anchorX: 'right', anchorY: 'bottom', offset: [-7, 0]}},
    },
}], board => {
    const f = x => (x ** 2 - 7 * x + 10) / (x ** 2 - 9);
    board.create('functiongraph', [f], {
        name: `\\(f\\)`, withLabel: true,
        label: {position: '0.1fr left'}
    });
    board.create('point', [2, f(2)], {name: `\\(x_1\\)`});
    board.create('point', [5, f(5)], {name: `\\(x_2\\)`});
    board.create('line', [3, 1, 0]);
    board.create('line', [-3, 1, 0]);
});
</script>

---

### Rentabilité d’un artisan (économie)

Un artisan vend des carnets décorés.
- Prix unitaire : $p(x)=18 - 0.2x$
- Coût total : $C(x)=4x+100$

Montrer que le bénéfice peut être modélisé par la fonction :

$B(x) = -0,2x^2 + 14x - 100$

Pour quelles valeurs de $x$ l’artisan fait-il un bénéfice positif ?

---

### Débit d’un bassin pluvial (hydraulique)

Le débit d’écoulement d’un bassin dépend de la hauteur d'eau :

$Q(h)= \dfrac{h-20}{h+5},\qquad h \ge 0$

Interprétation :
  - Q(h) > 0: l’eau s’écoule normalement.
  - Q(h) < 0: risque de refoulement (l'eau rentre dans la bassin au lieu d'en sortir).

Déterminez pour quelles valeurs de $h$ le bassin risque de refouler.
