% Copyright 2026 Brice Canvel <brccvl@proton.me>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Reeborg - partie 1

## Introduction

Reeborg est un robot qui doit accomplir des missions.

Chaque mission se déroule dans un monde. Parfois la mission est d'amener Reeborg
à un endroit précis, parfois la mission est de faire ramasser à Reeborg des
objets ou encore de lui faire suivre un parcours donné.

Pour ce faire, tu devras lui donner des instructions dans un langage de
programmation nommé Python.

Tu vas au fur et à mesure apprendre de nouvelles *instructions* qui te
permettront d'écrire des *programmes* et de rendre ces programmes plus faciles à
comprendre.

## Exercice 1

Dans ce 1er exercice, Reeborg évolue dans un monde vide :

```{image} images/reeborg_monde-vide.png
:alt: Reeborg dans un monde vide
:width: 60%
:align: center
```

Quand il se déplace, Reeborg laisse une trace derrière lui :

```{image} images/reeborg_trace-de-reeborg.png
:alt: Reeborg laisse une trace derrière lui
:width: 40%
:align: center
```

On lui a donné les instructions suivantes et on te demande quelle forme
géométrique il va dessiner avec la trace qu'il laisse derrière lui (représente
cette forme sur une feuille en utilisant un quadrillage 10x10 comme le monde
dans lequel se trouve Reeborg) :

```{code-block} python
avance()
avance()
avance()
avance()
avance()
tourne_a_gauche()
avance()
avance()
avance()
avance()
avance()
tourne_a_gauche()
avance()
avance()
avance()
avance()
avance()
tourne_a_gauche()
avance()
avance()
avance()
avance()
avance()
tourne_a_gauche()
```

**Réponds aux questions ci-dessous dans le devoir sur Teams**

- Quelle forme géométrique a-t-il dessiné (décris en termes exacts) ?

- Que faut-il changer dans le programme pour que la forme soit plus petite ? Plus grande ?

- Il n'existe pas d'instruction `tourne_a_droite()`. Comment peut-on utiliser l'instruction `tourne_a_gauche()` pour que Reeborg tourne à droite ? Et pour qu'il fasse demi-tour ?

## Exercice 2

Dans le programme de l'exercice 1, on répète de nombreuses fois l'instruction
`avance()`.

Il existe en Python une instruction qui permet de répéter une suite
d'instructions plusieurs fois.

Voici un exemple de cette instruction pour que Reeborg avance 3 fois :

```{code-block} python
for i in range(3):
    avance()
```

Dans l'exemple ci-dessus, note que l'instruction `avance()` est décalée vers la
droite de 4 espaces.

En programmation, il faut être très *rigoureux.se*. Chaque caractère a son
importance : une parenthèse, un espace, etc. oubliés et le programme ne
fonctionnera pas.

**Réponds aux questions ci-dessous dans le devoir sur Teams**

- Comment changer l'exemple pour que Reeborg avance 5 fois ?

- Réécris le programme de l'exercice 1 afin qu'il soit plus court en utilisant
cette nouvelle instruction.

- Comment peux-tu améliorer `tourne_a_droite` pour éviter d'écrire
`tourne_a_gauche()` 3 fois ?

## Exécuter un programme

Tu vas pouvoir maintenant voir le robot se déplacer pendant l'exécution d'un
programme :

```{image} images/reeborg_interface-site-reeborg.png
:alt: Page du site de programmation Reeborg
:width: 90%
:align: center
```

Tout généralement, il est important de réfléchir avant d'écrire un programme ou
de l'exécuter : comment Reeborg va-t-il réussir sa mission ? Fais-le sur une
feuille de papier par exemple, ou un document Word.

C'est une bonne habitude à prendre : lors des évaluations, tu n'auras pas
toujours la possibilité d'exécuter tes programmes et tu devras donc travailler
de cette manière.

## Exercice 3

1.  Copie et colle le programme de l'exercice 1 dans la zone de programmation
    puis clique sur « exécuter le programme ». Tu devrais voir Reeborg
    dessiner un carré.

2.  Copie et colle le programme de l'exercice 1 que tu as réécrit dans
    l'exercice 2 (version qui utilise `for i in range(...)`). Tu devrais voir
    Reeborg dessiner la même chose.
    
```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```

## Exercice 4

Écris un programme qui fait faire à Reeborg le parcours suivant :

```{image} images/reeborg_parcours-exercice-4-en-crochet.png
:alt: Parcours de l'exercice 4
:width: 60%
:align: center
```

**Colle ton code dans le devoir sur Teams**

```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```

## Exercice 5

Pour réutiliser des éléments de programme, on peut définir de nouvelles
commandes.

On peut par exemple définir une nouvelle commande (*que l'on place tout au début
du programme*) pour avancer 5 fois (comme c'était le cas dans l'exercice 1) :

```{code-block} python
def avance_5_fois():
    for i in range(5):
        avance()
```

**Attention**, les espaces se cumulent : 4 espaces pour `for ...` et 4+4=8
espaces pour `avance()`.

On peut ensuite utiliser cette nouvelle commande dans les instructions que l'on
donne au robot. Par exemple :

```{code-block} python
avance_5_fois()
tourne_a_gauche()
```

va faire avancer le robot 5 fois puis tourner à gauche.

Attention, il ne faut pas mettre d'espaces vides dans les noms des nouvelles
commandes que l'on définit.

- Réécris le programme de l'exercice 1 en entier en utilisant la nouvelle commande `avance_5_fois()`.

- Définis une nouvelle commande `tourne_a_droite()`.

- Utilise cette commande ainsi qu'une commande `avance_4_fois()` que tu devras
définir pour réécrire le programme que tu as fait à l'exercice 4.

**Colle ton code dans le devoir sur Teams**

```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```

## Exercice 6

Voici un programme qui contient des erreurs. À toi de les corriger :

```{code-block} python
def avance_3_fois():
    for i in range(5)
        avance()

def avance_4_fois
    for i in range(4):
        avance()

def tourne_a_droite():
    for i in range(3):
        tourne_a_gauche()

avance_3_fois
tourne_a_gauche
avance_3_fois
tourne_a_droite
avance_4_fois
```

**Colle dans le devoir sur Teams ton programme corrigé** 

```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```
