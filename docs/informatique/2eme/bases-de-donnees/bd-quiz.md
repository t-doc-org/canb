% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Bases de données - quiz de synthèse

Ce quiz reprend les notions vues dans ce chapitre : la gestion et la
structure des données, les bases de données relationnelles, les types de
données et le langage SQL de base (hors jointures et requêtes imbriquées).

Pour les premières questions, clique sur le bouton <button class="tdoc
fa-check"></button> pour vérifier ta réponse. Pour les questions SQL, il faut
écrire la requête toi-même, l'exécuter, puis comparer ton résultat avec celui
de la solution (clique sur son titre pour l'afficher).

```{role} num(quiz-input)
:style: width: 3rem; text-align: center;
:check: trim
```

```{role} vf(quiz-select)
:options: |
: Vrai
: Faux
```

## Gérer et structurer les données

### Question 1

```{role} q1(quiz-select)
:options: |
: Le stockage
: La sauvegarde
: L'archivage
```

```{quiz}
Bob copie chaque soir ses documents de travail importants sur un disque dur
externe, pour pouvoir les récupérer rapidement en cas de problème avec son
ordinateur. Il s'agit de : {q1}`La sauvegarde`
```

### Question 2

```{role} q2(quiz-select)
:options: |
: CSV
: XML
: JSON
```

Voici un extrait d'un fichier :

```{code-block} text
nom, prenom, classe
Dupont, Bob, 2F8
Martin, Amandine, 2F7
```

```{quiz}
De quel format s'agit-il ? {q2}`CSV`
```

### Question 3

```{quiz}
Toutes les données que nous utilisons au quotidien (mails, messages, photos,
etc.) sont structurées. {vf}`Faux`
```

## Bases de données relationnelles

### Question 4

```{role} q4(quiz-select)
:options: |
: Unique et stable
: Unique et courte
: Stable et facile à retenir
: Courte et facile à retenir
```

```{quiz}
Une clé primaire doit être : {q4}`Unique et stable`
```

### Question 5

```{role} q5(quiz-select)
:options: |
: Une colonne qui ne doit jamais rester vide
: Une colonne qui contient la clé primaire d'une autre table
: Une colonne qui contient toujours un nombre
: Une colonne calculée automatiquement
```

```{quiz}
Une clé étrangère est : {q5}`Une colonne qui contient la clé primaire d'une autre table`
```

### Question 6

```{quiz}
Stocker toutes les informations d'une entreprise dans un seul grand tableau
(comme dans un tableur) permet d'éviter la redondance des données.
{vf}`Faux`
```

### Question 7

Une bibliothèque veut enregistrer qui a emprunté quels livres. Un usager peut
emprunter plusieurs livres, et un même livre peut être emprunté (à des
moments différents) par plusieurs usagers.

```{quiz}
En suivant la méthode vue en cours (une table par entité, plus une table de
liaison si nécessaire), le schéma relationnel de cette base de données
contiendra au minimum {num}`3` tables.
```

## Types de données

### Question 8

Pour chacune des valeurs suivantes, choisis le type SQL le plus adapté.

```{role} type4(quiz-select)
:options: |
: text
: int
: decimal(5,2)
: date
```

```{quiz}
- `"Fribourg"` : {type4}`text`
- `15` (un nombre d'élèves) : {type4}`int`
- `19.90` (un prix en CHF) : {type4}`decimal(5,2)`
- `2007-03-14` (une date de naissance) : {type4}`date`
```

## Langage SQL

Voici la table `jeu`, qui contient le catalogue de jeux vidéo d'un magasin :

```{exec} sql
:name: bdq-jeu
:then: bdq-jeu-select
create table jeu (
  id int,
  titre text,
  genre text,
  prix decimal(5,2),
  stock int
);

insert into jeu values
  (1, 'Super Mario Odyssey', 'Plateforme', 59.90, 3),
  (2, 'The Legend of Zelda', 'Aventure', 69.90, 0),
  (3, 'Mario Kart 8', 'Course', 49.90, 5),
  (4, 'Super Smash Bros', 'Combat', 39.90, 2),
  (5, 'Animal Crossing', 'Simulation', 44.90, 0);
```

```{exec} sql
:name: bdq-jeu-select
:when:
:class: hidden
select * from jeu;
```

### Question 9

Écris la requête SQL qui insère un nouveau jeu de ton choix dans la table
`jeu`.

```{exec} sql
:after: bdq-jeu
:then: bdq-jeu-select
:editor:
```

````{solution}
```{exec} sql
:name: bdq-jeu-insert
:after: bdq-jeu
:then: bdq-jeu-select
insert into jeu values (6, 'Splatoon 3', 'Action', 54.90, 4);
```
````

### Question 10

Écris la requête SQL qui affiche uniquement le `titre` et le `prix` de tous
les jeux.

```{exec} sql
:after: bdq-jeu-insert
:editor:
```

````{solution}
```{exec} sql
:after: bdq-jeu-insert
select titre, prix from jeu;
```
````

### Question 11

Écris la requête SQL qui affiche tous les jeux du genre `'Aventure'`.

```{exec} sql
:after: bdq-jeu-insert
:editor:
```

````{solution}
```{exec} sql
:after: bdq-jeu-insert
select * from jeu where genre = 'Aventure';
```
````

### Question 12

Écris la requête SQL qui affiche tous les jeux dont le prix est strictement
inférieur à 30 CHF.

```{exec} sql
:after: bdq-jeu-insert
:editor:
```

````{solution}
```{exec} sql
:after: bdq-jeu-insert
select * from jeu where prix < 30;
```
````

### Question 13

Écris la requête SQL qui affiche tous les jeux triés du moins cher au plus
cher.

```{exec} sql
:after: bdq-jeu-insert
:editor:
```

````{solution}
```{exec} sql
:after: bdq-jeu-insert
select * from jeu order by prix asc;
```
````

### Question 14

Écris la requête SQL qui affiche tous les jeux dont le titre commence par
`Super`.

```{exec} sql
:after: bdq-jeu-insert
:editor:
```

````{solution}
```{exec} sql
:after: bdq-jeu-insert
select * from jeu where titre like 'Super%';
```
````

### Question 15

Écris la requête SQL qui affiche tous les jeux dont le prix est compris
entre 20 et 50 CHF.

```{exec} sql
:after: bdq-jeu-insert
:editor:
```

````{solution}
```{exec} sql
:after: bdq-jeu-insert
select * from jeu where prix between 20 and 50;
```
````

### Question 16

Le jeu *Mario Kart 8* (id 3) est désormais en rupture de stock. Écris la
requête SQL qui met à jour son stock à 0.

```{exec} sql
:after: bdq-jeu-insert
:then: bdq-jeu-select
:editor:
```

````{solution}
```{exec} sql
:name: bdq-jeu-update
:after: bdq-jeu-insert
:then: bdq-jeu-select
update jeu set stock = 0 where id = 3;
```
````

### Question 17

Écris la requête SQL qui supprime tous les jeux en rupture de stock (`stock`
à 0).

```{exec} sql
:after: bdq-jeu-update
:then: bdq-jeu-select
:editor:
```

````{solution}
```{exec} sql
:after: bdq-jeu-update
:then: bdq-jeu-select
delete from jeu where stock = 0;
```
````

### Question 18

Recrée la table `jeu` en ajoutant :
- `id` comme clé primaire ;
- `titre` obligatoire (`not null`) ;
- `stock` avec une valeur par défaut de 0, si elle n'est pas précisée.

```{exec} sql
:then: bdq-jeu-select
:editor:
```

````{solution}
```{exec} sql
:name: bdq-jeu2
:then: bdq-jeu-select
create table jeu (
  id int primary key not null,
  titre text not null,
  genre text,
  prix decimal(5,2),
  stock int default 0
);
```
````
