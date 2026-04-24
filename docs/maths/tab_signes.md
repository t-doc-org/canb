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

Voici une représentation graphique de la fonction :

```{jsxgraph} ex1
:style: aspect-ratio: 16 / 9;
```

<script type="module">
const [{initBoard}] = await tdoc.imports('tdoc/jsxgraph.js');
initBoard('ex1', {
    boundingBox: [-2, 10, 4, -2], keepAspectRatio: false,
    axis: true, grid: true,
}, board => {
    board.create('functiongraph', [x => 12*x-4.9*x**2]);
});
</script>

### Rentabilité d’un artisan (économie)

Un artisan vend des carnets décorés.
- Prix unitaire : $p(x)=18 - 0.2x$
- Coût total : $C(x)=4x+100$

Montrer que le bénéfice peut être modélisé par la fonction :

$B(x) = -0,2x^2 + 14x - 100$

Pour quelles valeurs de $x$ l’artisan fait-il un bénéfice positif ?

Voici une représentation graphique de la fonction :

```{jsxgraph} ex2
:style: aspect-ratio: 16 / 9;
```

<script type="module">
const [{initBoard}] = await tdoc.imports('tdoc/jsxgraph.js');
initBoard('ex2', {
    boundingBox: [-2, 200, 80, -50], keepAspectRatio: false,
    axis: true, grid: true,
}, board => {
    board.create('functiongraph', [x => -0.2*x**2+14*x-100]);
});
</script>

---

### Débit d’un bassin pluvial (hydraulique)

Le débit d’écoulement d’un bassin dépend de la hauteur d'eau :

$Q(h)= \dfrac{h-20}{h+5},\qquad h \ge 0$

Interprétation :
  - $Q(h) > 0$: l’eau s’écoule normalement.
  - $Q(h) < 0$: risque de refoulement (l'eau rentre dans la bassin au lieu d'en sortir).

Déterminez pour quelles valeurs de $h$ le bassin risque de refouler.

Voici une représentation graphique de la fonction :

```{jsxgraph} ex3
:style: aspect-ratio: 16 / 9;
```

<script type="module">
const [{initBoard}] = await tdoc.imports('tdoc/jsxgraph.js');
initBoard('ex3', {
    boundingBox: [-2, 5, 60, -5], keepAspectRatio: false,
    axis: true, grid: true,
}, board => {
    board.create('functiongraph', [x => (x-20)/(x+5)]);
});
</script>
