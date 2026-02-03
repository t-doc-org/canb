# Introduction à print, variables et input

## Éléments de théorie

### print

L'instruction `print` permet d'afficher quelque chose ...

### Variables

#### Nommage des variables

Un nom de variable peut être composé de lettres, de chiffres et de caractères spéciaux (mais en général, on se limite à `-` et `_`).

Un nom de variable ne peut pas contenir d'espaces et ne peut pas commencer par un chiffre.

Pour une meilleure compréhension, il est préférable de donner aux variables des noms qui indique ce qu'elles contiennent. Par exemple :

`age`, `nom`, `anneeDeNaissance` ou `annee_de_naissance`, etc.

#### Types de variables

Les variables peuvent être de différents types :

Entier - `int`(eger) - par exemple : 3, 5, -4

Nombre réel (à virgule) - `float` - par exemple : 3.14, 5.2567, -2.718

Texte - `str`(ing) - par exemple : Billy, chien, J'aime l'informatique

### input

L'instruction `input()` permet d'interagir avec l'utilisateur et de lui demander des informations qui seront utilisées dans le programme.

### Variables et input()

input() donne toujours le type str(ing).

Quand on veut faire des calculs avec des valeurs entrées par l'utilisateur à l'aide de input(), il faut d'abord les transformer en valeurs numériques :
```{code-block} text
:linenos:
a=int(input()) # Transformer en nombre entier
b=float(input()) # Transformer en nombre réel (à virgule)
```

#### Opérations mathématiques

Les opérations mathématiques de base peuvent s'utiliser avec les variables de type numérique (`int` et `float`) : `+ - * /`

Exemple :

```{exec} python
:linenos:
a=3
b=4
c=a+b
print(c)
```

Pour écrire une puissance, on utilise `**` - par exemple `4**2` donne `16`.

#### Comparer des variables

On peut comparer les valeurs des variables avec les opérateurs :

`<` : plus petit que

`<=` : plus petit ou égal à

`>` : plus grand que

`>=` : plus grand ou égal à

`==` : égal à

Exemple :

```{exec} python
:linenos:
a=int(input())
b=int(input())
if a<b:
    print(a, "est plus petit que", b)
```

## Exercices 

### Exercice 1

Écrivez un programme qui demande à l'utilisateur d'entrer son nom et son année de naissance et écrivez comme réponse : Bonjour ..., vous avez ... ans. où les pointillés seront remplacés par les informations correctes.

```{exec} python
:editor:
# Ecrire le programme ici

```

### Exercice 2

Lorsque les variables sont des valeurs numériques, il est possible de faire des opérations mathématiques avec. Il faut cependant bien penser à les transformer en nombre entier avec `int` ou en nombre réel (à virgule) avec `float` :

`a=int(input())`

`b=float(input())`

Écrire un programme qui demande deux nombres à l'utilisateur, puis affiche la somme, la soustraction, la multiplication et la division de ces deux nombres.

Les réponses seront affichées sous la forme La somme de ... et ... est ... etc. où les pointillés seront remplacés par les informations correctes.

```{exec} python
:editor:
# Ecrire le programme ici

```

### Exercice 3 

Convertir une température donnée en Fahrenheit en Celsius (voir ici comment convertir).

```{exec} python
:editor:
# Ecrire le programme ici

```

### Exercice 4

Ecrivez un programme qui demande à l'utilisateur d'entrer le rayon d'un cercle et qui calcule le périmètre et l'aire.

L'affichage sera Le cercle de rayon ... a pour périmètre ... et pour aire .... où les pointillés seront remplacés par les informations correctes.

```{exec} python
:editor:
# Ecrire le programme ici

```

### Exercice 5

Soit le polynôme p=x2+2x-5.

Demander à l'utilisateur d'entrer une valeur de x et calculer et afficher la valeur du polynôme pour la valeur x donnée.

```{exec} python
:editor:
# Ecrire le programme ici

```

### Exercice 6

Dans cet exercice, vous allez créer un jeu où l'ordinateur génère un nombre au hasard et le joueur doit le deviner en 10 essais.

Compléter le programme suivant :

```{exec} python
:editor:
from random import randint

nb_a_deviner = randint(1,101) # Génère un nombre au hasard entre 1 et 100

for _ in range(10): # 10 essais
    # Demander à l'utilisateur d'entrer un nombre

    # Lui dire si son nombre est plus petit ou plus grand que le nombre à deviner

    # S'il trouve le nombre correct, lui indiquer qu'il a gagné
```
