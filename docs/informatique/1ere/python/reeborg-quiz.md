% Copyright 2026 Brice Canvel <brccvl@proton.me>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Reeborg - quiz de synthèse

Ce quiz reprend toutes les notions vues dans **Reeborg - partie 1** et
**Reeborg - partie 2** : les instructions, les boucles, les commandes, les
conditions, ainsi que quelques conseils de méthode de travail.

Pour chaque question, clique sur le bouton <button class="tdoc
fa-check"></button> pour vérifier ta réponse. Il devient vert quand tout est
correct. Si une réponse est fausse, un indice s'affiche parfois pour
t'aider ; tu peux alors corriger et vérifier à nouveau.

```{role} num(quiz-input)
:style: width: 3rem; text-align: center;
:check: trim
```

```{role} pos3(quiz-select)
:style: width: 4rem;
:options: |
: 1
: 2
: 3
```

```{role} pos5(quiz-select)
:style: width: 4rem;
:options: |
: 1
: 2
: 3
: 4
: 5
```

```{role} cond(quiz-select)
:style: width: 20rem;
:options: |
: Reeborg est arrivé sur une case but
: Reeborg transporte un objet
: Un objet se trouve sur la case de Reeborg
: Il y a un mur devant Reeborg
```

```{role} vf(quiz-select)
:options: |
: Vrai
: Faux
```

```{role} lettre4(quiz-select)
:style: width: 4rem;
:options: |
: A
: B
: C
: D
```

## Instructions et boucles

### Question 1

Complète le programme suivant pour que Reeborg avance exactement 7 fois :

```{quiz}
`for i in range(`{num}`7`{quiz-hint}`Combien de fois Reeborg doit-il avancer ?` `):`\
`    avance()`
```

### Question 2

Reeborg exécute le programme suivant :

```{code-block} python
for i in range(7):
    avance()
tourne_a_gauche()
for i in range(3):
    avance()
tourne_a_gauche()
for i in range(7):
    avance()
tourne_a_gauche()
for i in range(3):
    avance()
tourne_a_gauche()
```

Quelle forme géométrique Reeborg dessine-t-il avec sa trace ?

```{role} q1(quiz-select)
:options: |
: Un carré
: Un rectangle
: Un triangle
: Un pentagone
```

```{quiz}
{q1}`Un rectangle`
```

### Question 3

```{quiz}
Les deux côtés de cette forme mesurent {num}`7` cases et {num}`3` cases.
```

### Question 4

```{role} q4(quiz-select)
:options: |
: Sans aucune parenthèse, par exemple avance
: Avec des parenthèses, même vides, par exemple avance()
: Entre guillemets, par exemple "avance()"
: Avec un argument obligatoire entre les parenthèses
```

```{quiz}
Pour exécuter correctement l'instruction `avance`, même sans rien écrire
entre les parenthèses, il faut l'écrire : {q4}`Avec des parenthèses, même vides, par exemple avance()`
```

### Question 5

```{quiz}
Il n'existe pas d'instruction native `tourne_a_droite()` chez Reeborg : il
faut la définir soi-même avec `def`. {vf}`Vrai`
```

## Définir des commandes

### Question 6

Voici, dans le désordre, les trois lignes qui définissent la commande
`tourne_a_droite()`. Indique le numéro d'ordre (1 à 3) de chaque ligne :

```{quiz}
- {pos3}`3` `        tourne_a_gauche()`
- {pos3}`1` `def tourne_a_droite():`
- {pos3}`2` `    for i in range(3):`
```

### Question 7

Voici quatre propositions pour définir une commande `avance_7_fois()` qui
fait avancer Reeborg 7 fois :

**A**
```{code-block} python
def avance_7_fois()
    for i in range(7):
        avance()
```

**B**
```{code-block} python
def avance_7_fois():
    for i in range(7):
        avance()
```

**C**
```{code-block} python
def avance_7_fois():
for i in range(7):
    avance()
```

**D**
```{code-block} python
def avance_7_fois():
    for i in range(7)
        avance()
```

```{quiz}
La bonne proposition est la {lettre4}`B`{quiz-hint}`Relis la section « Attention » du résumé : parenthèses et deux points.`
```

### Question 8

```{role} q8(quiz-select)
:options: |
: Juste avant sa première utilisation
: En début de programme
: À la toute fin du programme
: N'importe où, l'ordre n'a pas d'importance
```

```{quiz}
Une nouvelle commande définie avec `def` doit être placée : {q8}`En début de programme`
```

## Conditions et décisions

### Question 9

Associe chaque condition à ce qu'elle vérifie :

```{quiz}
- `au_but()` : {cond}`Reeborg est arrivé sur une case but`
- `transporte()` : {cond}`Reeborg transporte un objet`
- `objet_ici()` : {cond}`Un objet se trouve sur la case de Reeborg`
- `mur_devant()` : {cond}`Il y a un mur devant Reeborg`
```

### Question 10

Reeborg exécute le programme suivant :

```{code-block} python
if mur_devant():
    tourne_a_gauche()
avance()
```

```{role} q10(quiz-select)
:options: |
: Il avance quand même et fonce dans le mur
: S'il y a un mur devant lui, il tourne à gauche, puis il avance
: Il s'arrête définitivement
: Il dépose un jeton
```

```{quiz}
S'il y a un mur juste devant Reeborg : {q10}`S'il y a un mur devant lui, il tourne à gauche, puis il avance`
```

### Question 11

```{code-block} python
if au_but():
```

```{role} q11(quiz-select)
:options: |
: avance()
: tourne_a_gauche()
: termine()
: prend()
```

```{quiz}
Pour que Reeborg arrête son programme dès qu'il est arrivé au but, il faut
écrire à la ligne suivante : {q11}`termine()`
```

## Lire et remettre en ordre un programme

### Question 12

Les 5 lignes suivantes, une fois remises dans l'ordre, font dessiner à
Reeborg le parcours en crochet de l'exercice 4 (voir *Reeborg - partie 1*) :

```{image} images/reeborg_parcours-exercice-4-en-crochet.png
:alt: Parcours en crochet attendu
:width: 60%
:align: center
```

Indique le numéro d'ordre (1 à 5) de chaque ligne :

```{quiz}
- {pos5}`4` `tourne_a_droite()`
- {pos5}`1` `avance_4_fois()`
- {pos5}`5` `avance_4_fois()`
- {pos5}`2` `tourne_a_gauche()`
- {pos5}`3` `avance_4_fois()`
```

### Question 13

```{role} q13(quiz-select)
:options: |
: Elle fait faire à Reeborg un demi-tour (180°)
: Elle fait monter Reeborg d'un étage
: Elle fait ramasser le journal à Reeborg
: Elle fait tourner Reeborg de 90° à droite
```

```{quiz}
Dans le programme de l'exercice 10 (*Reeborg - partie 2*, livraison du
journal), la commande `demi_tour()` sert à : {q13}`Elle fait faire à Reeborg un demi-tour (180°)`
```

## Aspects pédagogiques

### Question 14

```{role} q14(quiz-select)
:options: |
: Écrire directement le programme sans réfléchir : Reeborg dira si ça ne va pas
: Réfléchir d'abord à la solution sur papier ou dans un document
: Copier le programme d'un camarade
: Attendre que l'enseignant donne la solution
```

```{quiz}
Avant d'écrire ou d'exécuter un programme, surtout en vue d'une évaluation,
il est conseillé de : {q14}`Réfléchir d'abord à la solution sur papier ou dans un document`{quiz-hint}`Tu n'auras pas toujours la possibilité d'exécuter ton programme lors d'une évaluation.`
```

### Question 15

```{quiz}
Un commentaire introduit par `#` est exécuté par Python comme n'importe
quelle autre instruction. {vf}`Faux`
```

### Question 16

```{quiz}
Un seul niveau de décalage (indentation) en Python représente {num}`4` espaces.
```

### Question 17

```{role} q17(quiz-select)
:options: |
: Un point-virgule ;
: Des parenthèses (), même quand il n'y a rien à écrire dedans
: Une majuscule en début d'instruction
: Un commentaire #
```

```{quiz}
Pour exécuter une instruction ou une commande, il faut toujours mettre :
{q17}`Des parenthèses (), même quand il n'y a rien à écrire dedans`
```

### Question 18

```{role} q18(quiz-select)
:options: |
: Un programme plus long s'exécute toujours plus vite
: Un programme un peu plus long peut parfois être plus facile à comprendre
: Les commandes def sont interdites dans les longs programmes
: Reeborg se fatigue si le programme contient trop de boucles
```

```{quiz}
On cherche parfois à écrire un programme un peu plus long plutôt que le plus
court possible, car : {q18}`Un programme un peu plus long peut parfois être plus facile à comprendre`
```
