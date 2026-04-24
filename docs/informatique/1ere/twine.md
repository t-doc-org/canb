# Introduction au logiciel Twine

## Introduction

[Twine](https://twinery.org/2/) est un logiciel qui permet d'écrire des histoires dont vous êtes l'héroïne/le héro.

Dans ce tutoriel, le scénario suivant va être mis en place :
- Le joueur commence le jeu sur la rive d'une rivière ;
- Deux choix s'offre à lui : il traverse la rivière ou il marche 1km pour allez jusqu'au prochain pont ;
- S'il choisit de traverser la rivière, il se fait dévorer par les crocodiles ;
- S'il va jusqu'au pont, il traverse celui-ci et voit de l'autre côté une clé. Si peut la prendre ou la laisser ;
- Il poursuit ensuite sont chemin et se retrouve devant une grande muraille dans laquelle se trouve une porte. S'il a la clé, il peut ouvrir la porte, sinon, il doit retourner au début du jeu ;
- De l'autre côté de la muraille, un sage l'attend pour lui poser une énigme. S'il l'a résoud, il entre au paradis. Sinon, il finit emprisonné pour l'éternité.

Vous pouvez tester l'histoire [ici](https://e-apprendre.ch/twine_histoire.html).

## Découverte de Twine

### Créer une nouvelle histoire

Pour créer une nouvelle histoire :
```{figure} images/twine_1.png
:alt: Twine créer histoire
:width: 500px
:align: center
```

Une première page est automatiquement créée mais elle est vide :
Pour créer une nouvelle histoire :
```{figure} images/twine_2.png
:alt: Twine page vide
:width: 500px
:align: center
```

En double cliquant sur la page, on peut modifier son contenu et changer son nom :
Pour créer une nouvelle histoire :
```{figure} images/twine_3.png
:alt: Twine ajouter contenu
:width: 500px
:align: center
```

### Proposer différents chemins

Pour proposer différents chemins, on peut utiliser la syntaxe ```[[Message->nom de la page]]```. Par exemple, pour notre scénario :
```{figure} images/twine_4.png
:alt: Twine ajouter chemins - 1
:width: 500px
:align: center
```

Cela créé 2 nouvelles pages :
```{figure} images/twine_5.png
:alt: Twine ajouter chemins - 2
:width: 500px
:align: center
```

On peut directement compléter la page pieds qui marque la fin de l'aventure :
```{figure} images/twine_6.png
:alt: Twine crocodiles
:width: 500px
:align: center
```

Et également le début de la page pont :
```{figure} images/twine_7.png
:alt: Twine pont
:width: 500px
:align: center
```

### Utiliser des variables pour différencier le déroulement de l'histoire
Lorsque le joueur arrive au bout du pont, il peut prendre ou non la clé.

La possession ou non de la clé sera nécessaire lorsqu'il arrivera devant la porte.

Pour garder une trace de son action, on va créer une variable ```key``` qui prendra comme valeur ```true``` s'il a pris la clé et ```false``` autrement.

Pour ce faire, on utilise la syntaxe : ```(set: $nomDeVariable to ...)```.

Dans notre exemple, cela donne :
```{figure} images/twine_8.png
:alt: Twine prend clé
:width: 500px
:align: center
```

```{figure} images/twine_9.png
:alt: Twine laisse clé
:width: 500px
:align: center
```

### Faire des choix
Le joueur poursuit son chemin et arrive devant une porte :
```{figure} images/twine_10.png
:alt: Twine ouvrir porte - 1
:width: 500px
:align: center
```

A ce moment de l'histoire, on voudrait que la porte s'ouvre s'il a pris la clé précédemment et sinon qu'il retourne au début du jeu.

Pour cela, on peut utiliser une structure ```ìf...else``` :

```
(if: qqc)
[Ce qu'il faut faire si c'est vrai]
(else:)
[Ce qu'il faut faire si ce n'est pas vrai]
```

Dans notre scénario, si la valeur de ```key``` est ```true```, le joueur continue et se voit poser une énigme, sinon il retourne au départ :
```{figure} images/twine_11.png
:alt: Twine ouvrir porte - 2
:width: 500px
:align: center
```

### Demander une info à l'utilisateur
Le joueur va se voir poser une énigme. Il va devoir répondre. Pour cela, on va utiliser l'instruction ```prompt``` qui permet d'afficher pop-up et dans lequel le joueur peut entrer du texte. Le résultat de ce prompt sera stocké dans une variable ```reponse``` (cela est similaire à ```reponse=input()```en python) :
```{figure} images/twine_12.png
:alt: Twine énigme - 1
:width: 500px
:align: center
```

Il faut ensuite vérifer si la réponse est correcte. On utilise ici à nouveau une structure ```ìf...else``` :
```{figure} images/twine_13.png
:alt: Twine énigme - 2
:width: 500px
:align: center
``` 

## L'histoire complète
Voici les différentes pages que nous avons créées avec les liens qui existent entre elles :
```{figure} images/twine_14.png
:alt: Twine tout
:width: 700px
:align: center
```

## Améliorer la présentation
Dans le contenu de la page, il est possible d'utiliser des balises HTML.

Il est donc possible d'utiliser des titres, d'ajouter des images, etc.

Pour la page où le joueur se trouve face à une muraille, on pourrait par exemple ajouter l'image d'une muraille :
```{figure} images/twine_15.png
:alt: Twine muraille - 1
:width: 500px
:align: center
```
ce qui donne l'affichage suivant :
```{figure} images/twine_16.png
:alt: Twine muraille - 1
:width: 700px
:align: center
```
