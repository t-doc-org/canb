% Copyright 2026 Brice Canvel <brccvl@proton.me>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Reeborg - résumé

## Instructions du robot

Ces instructions ne fonctionnent qu'avec le robot et provoquent une action :

```{code-block} python
avance()
```

```{code-block} python
tourne_a_gauche()
```

Reeborg peut aussi ramasser ou déposer un objet (un « jeton ») :

```{code-block} python
prend()
```

```{code-block} python
depose()
```

Et arrêter l'exécution du programme :

```{code-block} python
termine()
```

## Conditions du robot

Une condition ne fait rien exécuter : elle permet seulement de savoir si une
affirmation est vraie ou fausse sur la situation actuelle de Reeborg, pour
ensuite prendre une décision (voir plus bas `if`).

-   `au_but()` : vrai si Reeborg est arrivé sur une case but.
-   `transporte()` : vrai si Reeborg transporte quelque chose.
-   `objet_ici()` : vrai si un objet se trouve sur la case où est Reeborg.
-   `rien_devant()` / `rien_a_droite()` : vrai s'il n'y a rien devant / à
    droite.
-   `mur_devant()` / `mur_a_droite()` : vrai s'il y a un mur devant / à
    droite.

## Instructions Python

Ces instructions fonctionnent dans n'importe quel programme Python.

### Commenter son programme

Pour ajouter une remarque dans un programme, sans que Python ne l'exécute, on
utilise le symbole `#` :

```{code-block} python
# Ceci est un commentaire, Python l'ignore complètement
avance()
```

C'est très utile pour expliquer à quoi sert une partie du programme (par
exemple `# Définitions des commandes` ou `# Programme`).

### Répéter des instructions

```{code-block} python
for i in range(x):
    instructions à répéter
```

Il faut décaler la ou les instructions à répéter de 4 espaces vers la droite.

Par exemple, pour d'abord avancer 3 fois et ensuite tourner une fois à gauche :

```{code-block} python
for i in range(3):
    avance()
tourne_a_gauche()
```

Mais pour avancer et tourner à gauche 3 fois :

```{code-block} python
for i in range(3):
    avance()
    tourne_a_gauche()
```

On peut aussi imbriquer une boucle `for` dans une autre, par exemple pour
avancer 5 fois puis tourner à gauche, et répéter cela 4 fois :

```{code-block} python
for i in range(4):
    for i in range(5):
        avance()
    tourne_a_gauche()
```

### Prendre une décision

```{code-block} python
if condition:
    instructions si la condition est vraie
```

La `condition` est une des conditions du robot vues plus haut (ou son
contraire avec `not`, par exemple `not objet_ici()`).

Par exemple, pour éviter un obstacle :

```{code-block} python
if mur_devant():
    tourne_a_gauche()
```

Ou pour ramasser un objet s'il y en a un sur la case où se trouve Reeborg :

```{code-block} python
if objet_ici():
    prend()
```

Et pour arrêter le programme dès que Reeborg est arrivé au but :

```{code-block} python
if au_but():
    termine()
```

### Définir une nouvelle commande

```{code-block} python
def nouvelle_commande():
    instructions de la commande
```

Il faut décaler la ou les instructions que la commande doit exécuter de 4
espaces vers la droite et placer la commande en début de programme.

Pour ensuite utiliser la commande :

```{code-block} python
nouvelle_commande()
```

Un exemple très utile pour tourner à droite :

```{code-block} python
def tourne_a_droite():
    for i in range(3):
        tourne_a_gauche()
```

## Attention

- Chaque détail a son importance : une parenthèse qui manque
  (`tourne_a_gauche(`), un espace mal placé (`tourne_a_ gauche()`), une
  instruction mal écrite (`toune_a_gauche()`), etc.

- N'oublie pas les décalages (indentations) après `def`, `for` et `if`.

- N'oublie pas les deux points `:` à la fin des lignes `for ...`, `def ...`
  et `if ...`.

- Pour exécuter une instruction ou une commande, il faut toujours mettre les
  parenthèses, même quand il n'y a rien à écrire dedans :
  `avance_3_fois()` et non `avance_3_fois`.

- Les espaces de décalage se cumulent lorsqu'une instruction est décalée
  plusieurs fois (par exemple 4 espaces pour `for ...` à l'intérieur d'une
  commande `def ...`, donc 4+4=8 espaces pour l'instruction répétée).

- Il ne faut pas mettre d'espaces vides dans les noms des nouvelles commandes
  que l'on définit.

- Les nouvelles commandes `def` sont placées en début de programme.

## Conseils

- **Réfléchis avant de programmer.** Avant d'écrire ou d'exécuter un
  programme, demande-toi comment Reeborg va réussir sa mission. Fais-le sur
  une feuille ou dans un document, surtout lors des évaluations où tu n'auras
  pas toujours la possibilité d'exécuter ton programme.

- **Sois rigoureux.se.** En programmation, chaque caractère compte : une
  parenthèse, un espace ou des deux points oubliés, et le programme ne
  fonctionnera pas.

- **Prends le temps de lire et comprendre un programme donné** avant de le
  modifier ou de le compléter, en te demandant ce que fait chaque commande et
  chaque ligne.

- **Cherche le bon équilibre entre un programme court et un programme
  compréhensible.** Utiliser des boucles et de nouvelles commandes permet
  d'écrire des programmes plus courts, mais un programme un peu plus long est
  parfois plus facile à comprendre. Commente ton code pour le rendre plus
  clair.

- **Essaye de généraliser ton programme** pour qu'il fonctionne dans
  plusieurs mondes semblables (par exemple quand le nombre d'objets à
  ramasser peut varier), plutôt que d'écrire une solution qui ne marche que
  pour un seul cas précis.
