% Copyright 2026 Brice Canvel <brccvl@proton.me>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Reeborg - partie 2

## Exercice 7

Le programme que tu trouveras à l'adresse <https://www.codepuzzle.io/PWJQGR>
est dans le désordre. Remets-le dans l'ordre pour que Reeborg fasse le parcours
suivant (attention : souviens-toi que certaines lignes doivent être décalées
vers la droite) :

```{image} images/reeborg_parcours-exercice-1-en-escalier.png
:alt: Parcours en escalier de l'exercice 1
:width: 45%
:align: center
```

Position initiale :

```{image} images/reeborg_position-initiale-exercice-1.png
:alt: Position initiale de Reeborg
:width: 20%
:align: center
```

**Colle ta solution dans le devoir sur Teams**

Pour copier :

```{image} images/reeborg_bouton-copier.png
:alt: Bouton pour copier le programme
:width: 30%
:align: center
```

````{solution}
```{exec} python
:when:
def tourne_a_droite():
    for _ in range(3):
        tourne_a_gauche()
        
for _ in range(9):
    tourne_a_gauche()
    avance()
    tourne_a_droite()
    avance()
```
````


## Exercice 8

Reeborg doit faire le tour du monde :

```{image} images/reeborg_parcours-tour-du-monde.png
:alt: Parcours du tour du monde
:width: 45%
:align: center
```

Le programme suivant est proposé mais il est long :

```{code-block} python
avance()
avance()
avance()
avance()
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
avance()
avance()
avance()
avance()
tourne_a_gauche()
```

Propose une solution plus « élégante » en définissant au moins une nouvelle
commande et en faisant usage de l'instruction `for` pour répéter des
instructions.

Sélectionne le monde **Autour 1**.

```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```

**Colle ta solution dans le devoir sur Teams**

````{solution}
```{exec} python
:when:
# Avance 9 fois
def avance_9_fois():
    for i in range(9):
        avance()

for i in range(4):
    avance_9_fois()
    tourne_a_gauche()
```
````

```{note}
Dans tous les exercices à partir de maintenant, tu dois réfléchir comment
définir des nouvelles commandes et utiliser les instructions de répétition pour
écrire des programmes courts et le plus compréhensible possible.

Parfois un programme un peu plus long est plus facile à comprendre. Il faut donc
trouver le bon équilibre !
```

## Collection de jetons

Certains aiment collectionner les timbres, d'autres collectionnent les pièces de
monnaie ; Reeborg, lui, aime collectionner les jetons. Il utilise son
imagination pour représenter toute sorte d'objet par des jetons. Il peut les
ramasser lorsqu'ils sont par terre, ou les déposer, en utilisant les
instructions suivantes :

```{code-block} python
prend()
depose()
```

## Exercice 9

```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```

Sélectionne le monde **Jetons 1**.

Il y a un jeton tout juste à côté de Reeborg avec un chiffre 1 en rouge à côté :
le chiffre 1 indique qu'il n'y a qu'un seul jeton à cet endroit ; la couleur
rouge indique que le jeton n'est pas à l'endroit désiré.

Dans le carré suivant, on voit une image d'un jeton en ton de gris plutôt qu'en
couleur : ceci indique que Reeborg doit déposer un seul jeton à cet endroit.

Finalement, le carré suivant en vert pâle indique l'endroit où Reeborg doit
terminer son programme.

Écris un programme pour accomplir cette tâche et **colle ta solution dans le devoir sur Teams**.


Est-ce que ton programme peut également, sans aucun changement, accomplir la
tâche du monde **Jetons 2** ?

La réponse devrait être non... mais, plus tard, tu apprendras à écrire un seul
programme pouvant accomplir ces deux tâches.

````{solution}
```{exec} python
:when:
avance()
prend()
avance()
depose()
avance()
```
````

## Exercice 10

**Dans cet exercice, tu dois lire et comprendre le programme donné et le
compléter !**

Reeborg a un emploi : il livre le journal l'Étoile du nord. Plusieurs des
clients de Reeborg ne vivent pas au rez-de-chaussée de leur immeuble. Pour
ceux-ci, Reeborg doit suivre la procédure suivante :

1.  Prendre une copie du journal (représenté par une étoile jaune).

2.  Grimper le nombre d'étages requis pour rejoindre la porte du client.

3.  Laisser une copie du journal sur le seuil de porte (représenté par une
    étoile grise).

4.  Redescendre au rez-de-chaussée.

Le journal est représenté par une étoile. Reeborg prend l'étoile en bas à gauche
et doit la déposer en haut à droite :

```{image} images/reeborg_livraison-du-journal.png
:alt: Livraison du journal
:width: 45%
:align: center
```

Choisis le monde **Journal 0** et aide Reeborg à livrer le journal.

```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```

Tu dois pour cela tout d'abord comprendre puis adapter le programme suivant en
utilisant les deux instructions `prend()` et `depose()` :

```{code-block} python
# Définitions de commandes
def tourne_a_droite():
    for i in range(3):
        tourne_a_gauche()

def avance_2_fois():
    for i in range(2):
        avance()

def demi_tour():
    for i in range(2):
        tourne_a_gauche()

def monte():
    tourne_a_gauche()
    avance()
    tourne_a_droite()
    avance_2_fois()

def descend():
    avance_2_fois()
    tourne_a_gauche()
    avance()
    tourne_a_droite()

# Programme
for i in range(5):
    monte()

demi_tour()

for i in range(5):
    descend()
```

**Colle ta réponse dans le devoir sur Teams**

## Si 6 scies scient 6 citrons, 606 scies scient 606 citrons !

Si seulement Reeborg pouvait prendre des décisions de lui-même, écrire des
programmes serait tellement plus simple... OUPS ! J'ai oublié de te le
mentionner : Reeborg PEUT prendre ses propres décisions !

La syntaxe Python pour prendre des décisions est la suivante :

```{code-block} python
if condition:
    instructions si la condition est vraie
```

Ceci permet à Reeborg de prendre des décisions.

Dans le monde Reeborg, les conditions possibles sont :

-   `au_but()` est vérifié si Reeborg est sur une des cases suivantes :

    ```{image} images/reeborg_cases-au-but.png
    :alt: Cases marquant le but
    :width: 20%
    :align: center
    ```

    Dans ce cas, on peut alors terminer l'exécution du programme en utilisant
    l'instruction `termine()`.

-   `transporte()` est vérifié si Reeborg transporte quelque chose (une carotte
    par exemple).

-   `rien_devant()` / `rien_a_droite()` est vérifié s'il n'y a rien devant / à
    droite.

-   `mur_devant()` / `mur_a_droite()` est vérifié s'il y a un mur devant / à
    droite.

-   `objet_ici()` si un objet se trouve sur la case où est placé Reeborg.

Par exemple, pour éviter un obstacle, on pourra écrire :

```{code-block} python
if mur_devant():
    tourne_a_gauche()
```

Ou pour ramasser un objet s'il y en a un sur la case où se trouve Reeborg :

```{code-block} python
if objet_ici():
    prend()
```

## Exercice 11a

**Dans cet exercice, tu dois lire et comprendre le programme donné et le compléter !**

Ouvre le monde **Récolte 1** :

```{image} images/reeborg_monde-recolte-1.png
:alt: Monde Récolte 1
:width: 40%
:align: center
```

```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```

Le programme ci-dessous permet à Reeborg de parcourir tout le champ de carottes.

Prends du temps pour le comprendre.

Ensuite, adapte-le pour que Reeborg récolte les carottes. Il faut bien réfléchir
où placer les instructions pour ramasser les carottes. (Indice : il y a **deux**
endroits où il faut changer le programme).

```{code-block} python
# Définition des commandes
def tourne_a_droite():
    for i in range(3):
        tourne_a_gauche()

def avance_2_fois():
    for i in range(2):
        avance()

def avance_5_fois():
    for i in range(5):
        avance()

def aller_au_depart():
    avance_2_fois()
    tourne_a_gauche()
    avance_2_fois()

def recolte_2_colonnes():
    avance_5_fois()
    tourne_a_droite()
    avance()
    tourne_a_droite()
    avance_5_fois()
    tourne_a_gauche()
    avance()
    tourne_a_gauche()

# Programme
aller_au_depart()
for i in range(3):
    recolte_2_colonnes()
```

**Colle ta solution dans le devoir sur Teams**

## Exercice 11b

Dans le monde **Autour 1 - carottes**, des carottes sont placées aléatoirement
(à chaque exécution du programme, elles se trouvent à un endroit différent).

```{image} images/reeborg_monde-autour-1-carottes.png
:alt: Monde Autour 1 - carottes
:width: 45%
:align: center
```

Voici ci-dessous un programme pour ce monde.

Réécris le programme pour qu'il soit plus court et plus facile à lire :

```{code-block} python
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
tourne_a_gauche()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
tourne_a_gauche()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
tourne_a_gauche()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
if objet_ici():
    prend()
avance()
tourne_a_gauche()
```

```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```

**Colle ta solution dans le devoir sur Teams**

## Exercice 12

Tu vas écrire un programme qui permet à Reeborg de réaliser ses tâches dans les
mondes **Jetons 1**, **2** et **3**.

Dans chacun de ces mondes, il y a un jeton sur une case et il faut aller déposer
celui-ci sur la case suivante.

Une partie du programme a été écrite pour toi. Avant de réfléchir comment le
compléter, essaye de l'exécuter dans ta tête et de comprendre ce qui se passe
dans les 2 cas où Reeborg est arrivé au but quand il y a un objet à l'endroit où
il se trouve.

L'instruction `termine()` permet de stopper le programme.

```{code-block} python
def avance_jusqua_tache_terminee():
    if au_but():
        # Ajouter 1 instruction
    avance()
    if objet_ici():
        # Ajouter 3 instructions

for i in range(42):
    # La valeur 42 a été choisie pour être sûr d'arriver au bout.
    # Nous verrons plus tard comment mieux faire.
    avance_jusqua_tache_terminee()
```

À toi de compléter le programme et de le tester dans les mondes **Jetons 1**,
**2** et **3**.

```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```

**Colle ta solution dans le devoir sur Teams**

## Exercice 13

Reprends le programme de l'exercice 11a.

Va dans le monde **Récolte 2**.

Ce monde est très similaire au monde Récolte 1 : on ne sait pas a priori combien
de carottes il y a sur chaque emplacement. Cependant, on sait qu'il y a au
maximum 3 carottes.

```{image} images/reeborg_monde-recolte-2.png
:alt: Monde Récolte 2
:width: 40%
:align: center
```

Réfléchis comment modifier le programme de l'exercice 11a pour qu'il fonctionne
dans ce nouveau monde.

Fonctionne-t-il aussi dans le monde Récolte 1 ?

```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```
