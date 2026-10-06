% Copyright 2026 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Bases de données - résumé

Ce résumé reprend toutes les notions vues dans ce chapitre : la gestion des
données, les bases de données relationnelles et le langage SQL.

## Gérer ses données

Il existe 3 manières d'enregistrer des données :

- Le **stockage** est l'enregistrement des fichiers sous forme de données
  binaires sur un support physique (disque dur, clé USB, carte SSD, etc.).
- La **sauvegarde** (*backup*) est une copie des données pertinentes à garder
  sous la main pour une restauration (*restore*) rapide en cas de besoin.
- L'**archivage** est l'enregistrement de fichiers pour des rétentions
  longues, en général pour des raisons légales.

## Structurer les données

- Les données **non-structurées** (mail, texte, image, etc.) contiennent des
  données **explicites** et des données implicites, appelées **métadonnées**.
- Les données **semi-structurées** sont organisées pour faciliter leur
  analyse. Une donnée y est représentée par une paire **propriété: valeur**.
- Un **tableau** (ou table) représente un ensemble de données sous forme de
  **lignes** et **colonnes** :
  - Une colonne correspond à **une seule propriété**, commune à toutes les
    entités.
  - Une ligne correspond à **une seule entité**, avec la liste de ses valeurs
    pour chaque propriété.

Pour enregistrer le contenu d'une table dans un fichier texte, on utilise
notamment les formats suivants :

| Format | Nom complet | Principe |
| :----- | :---------- | :------- |
| **CSV** | Comma Separated Values | Une ligne de fichier = une ligne de table ; les valeurs sont séparées par des virgules. La première ligne contient les noms des colonnes. |
| **XML** | Extensible Markup Language | La structure est définie par des balises dont les noms sont librement choisis. |
| **JSON** | JavaScript Object Notation | Utilise la syntaxe du langage JavaScript. |

## Excel

Excel est un **tableur**, c'est-à-dire un logiciel qui permet d'organiser des
informations sous forme de tableaux, d'y faire des calculs automatiques, des
graphiques, ainsi que de trier, filtrer et analyser des données.

## Bases de données relationnelles

Une **base de données** est un ensemble d'informations organisées pour être
facilement accessibles, gérées et mises à jour.

Stocker toutes les informations dans un seul tableau (comme dans un tableur)
pose un problème de **redondance** : une même information (l'adresse d'un
client, le titre d'un livre, etc.) apparaît sur plusieurs lignes. En cas de
changement, il faut alors le répercuter partout, sinon les données
deviennent incohérentes.

Une **base de données relationnelle** utilise plusieurs tables reliées entre
elles pour éviter cette redondance : chaque information n'est stockée qu'à un
seul endroit.

### Clé primaire

Une **clé primaire** est une colonne (ou une combinaison de colonnes) qui
identifie chaque ligne d'une table de manière unique. Elle doit être :

- **unique** : deux lignes ne peuvent pas avoir la même valeur ;
- **stable** : sa valeur ne doit pas changer au cours du temps.

Si aucune colonne ne remplit ces critères, on en crée une nouvelle sous
forme de compteur (un numéro qui augmente de 1 à chaque nouvelle ligne).

### Clé étrangère

Une **clé étrangère** est une colonne qui contient une valeur qui est la clé
primaire d'une autre table. Elle sert à relier deux tables entre elles.

### Relations plusieurs-à-plusieurs

Quand deux tables sont liées par une relation où chaque élément de l'une peut
correspondre à plusieurs éléments de l'autre et inversement (par exemple un
client qui achète plusieurs produits, et un produit acheté par plusieurs
clients), on crée une troisième table de liaison. Celle-ci contient au
minimum les clés étrangères des deux tables liées ; si leur combinaison
n'est pas unique à elle seule, on y ajoute une autre colonne (une date, par
exemple) pour former une **clé primaire composée**.

### Schéma relationnel

Une base de données relationnelle se représente à l'aide d'un schéma, en
respectant quelques règles :

1. Chaque table a un nom, suivi de la liste de ses colonnes.
2. La clé primaire de chaque table est indiquée par un soulignement.
3. Les flèches représentent les références entre tables et pointent toujours
   d'une clé étrangère vers une clé primaire.

```{tip}
Avant de créer les tables, il est essentiel de vérifier qu'il n'y a pas de
duplication d'informations. S'il y a de la redondance, il faut en général
ajouter une nouvelle table pour normaliser les données.
```

## Types de données

Lors de la création d'une table en SQL, il faut choisir le type de chaque
colonne.

**Types numériques**

| Type | Description |
| :--- | :---------- |
| `tinyint` | -128 à 127 |
| `smallint` | -32'768 à 32'767 |
| `int` | -2'147'483'648 à 2'147'483'647 |
| `bigint` | Très grands nombres entiers |
| `decimal(taille,d)` | Nombre décimal : `taille` chiffres au total, dont `d` décimales |
| `real` | Nombre réel (valeur approchée) |

**Types textes**

| Type | Description |
| :--- | :---------- |
| `text` | Chaîne de caractères de taille quelconque |
| `char(n)` | Chaîne de caractères de taille **fixe** `n` |
| `varchar(n)` | Chaîne de caractères de taille **variable**, au maximum `n` |

**Types dates, durées et instants**

| Type | Format |
| :--- | :----- |
| `date` | `AAAA-MM-JJ` |
| `datetime` | `AAAA-MM-JJ hh:mm:ss` |
| `time` | `hh:mm:ss` |
| `year` | `AAAA` |

En SQL, la valeur `null` représente une **absence de valeur**. Elle peut
remplacer une valeur quel que soit le type attendu, sauf si la colonne est
définie avec `not null`.

## Langage SQL

**SQL** (Structured Query Language) permet de créer des bases de données et
de récupérer les données répondant à des critères particuliers. Chaque
instruction SQL doit se terminer par un **point-virgule**.

```{attention}
Les noms de colonnes ne doivent pas contenir d'espaces (utiliser
`prix_unitaire` plutôt que `prix unitaire`) ni, de préférence, d'accents.
Les chaînes de caractères doivent être entourées d'apostrophes (guillemets
simples), par exemple `'rouge'`.
```

### Modifier la structure et le contenu

| Instruction | Description |
| :----------- | :---------- |
| `create table nom (...)` | Crée une table et ses colonnes |
| `insert into nom values (...)` | Insère une ligne dans la table |
| `insert into nom (col1, col2) values (...)` | Insère une ligne en ne précisant que certaines colonnes (les autres reçoivent `null` ou leur valeur par défaut) |
| `update nom set col = valeur where ...` | Met à jour des valeurs |
| `delete from nom where ...` | Supprime une ou plusieurs lignes |
| `alter table nom` | Modifie la structure de la table (ajout de colonne, etc.) |
| `drop table nom` | Supprime une table |

```{code-block} sql
create table produit (
  no_p int primary key not null,
  nom text not null,
  description text,
  prix int
);

insert into produit values (1, 'Ektorp', 'canapé 2 places', 599);
```

Pour qu'une colonne ne puisse jamais rester vide, on ajoute `not null` lors
de sa définition. Pour qu'elle reçoive automatiquement une valeur si aucune
n'est fournie, on utilise `default valeur` (la valeur par défaut doit être
du même type que la colonne) :

```{code-block} sql
create table boisson (
  nom text not null,
  prix decimal(3,2) not null default 2.50
);
```

### Clé primaire en SQL

Pour définir une clé primaire simple, on ajoute `primary key` (et `not
null`) sur la colonne :

```{code-block} sql
create table client (
  no_c int not null primary key,
  nom text not null
);
```

Pour une clé primaire composée de plusieurs colonnes :

```{code-block} sql
create table achat (
  no_c int not null,
  no_p int not null,
  primary key (no_c, no_p)
);
```

### Consulter une table

| Instruction | Description |
| :----------- | :---------- |
| `select * from nom` | Sélectionne toutes les colonnes |
| `select col1, col2 from nom` | Sélectionne certaines colonnes |
| `where` | Filtre les lignes selon un ou plusieurs critères |
| `distinct` | Supprime les doublons du résultat |
| `order by col asc` / `order by col desc` | Trie le résultat (ordre croissant / décroissant) |
| `between valeur1 and valeur2` | Filtre dans une plage de valeurs |
| `like 'texte%'` | Le `%` remplace n'importe quelle suite de caractères |
| `like 'te_te'` | Le `_` remplace exactement un caractère |

```{code-block} sql
select nom, prix from produit
  where prix < 100
  order by prix asc;
```

Les critères du `where` utilisent les opérateurs de comparaison suivants :
`=`, `<>` (différent de), `<`, `>`, `<=`, `>=`. Pour du texte, ces opérateurs
comparent selon l'ordre alphabétique. On combine plusieurs critères avec
`and` (et) et `or` (ou) :

```{code-block} sql
select * from canton
  where population > 500000 and nb_communes < 100;
```

### Jointure

Pour relier les informations de deux tables dans un même résultat, on
utilise l'instruction `join ... on ...`, en précisant la colonne de chaque
table à faire correspondre (en général une clé étrangère et la clé primaire
qu'elle référence) :

```{code-block} sql
select client.prenom, client.nom, produit.nom
  from client
  join achat on client.no_c = achat.no_c
  join produit on achat.no_p = produit.no_p;
```

```{note}
Il est possible d'enchaîner plusieurs `join` à la suite pour relier plus de
deux tables, comme dans l'exemple ci-dessus.
```

### Pour aller plus loin : sous-requêtes

Une requête `select` peut être placée entre parenthèses à l'intérieur d'une
autre requête, pour l'utiliser comme critère. Par exemple, pour trouver les
livres publiés avant un livre donné, sans connaître son année à l'avance :

```{code-block} sql
select titre from livre
  where annee < (select annee from livre where titre = 'Astérix chez les Bretons');
```

```{attention}
Avec SQLite, l'instruction `drop database` n'existe pas : pour supprimer une
base de données, il suffit de supprimer le fichier qui lui correspond.
```

## Conseils

- **Organise tes fichiers avec soin** : utilise une hiérarchie de dossiers
  adéquate et des noms de fichiers qui permettent de savoir ce qu'ils
  contiennent.

- **Sauvegarde régulièrement tes données** (par exemple sur OneDrive) : une
  perte de matériel, une erreur de manipulation ou un piratage peuvent
  arriver à tout moment.

- **Dessine le schéma relationnel avant de créer les tables.** Repère
  d'abord les entités (client, produit, etc.), leurs propriétés, puis les
  relations entre elles ; tu éviteras ainsi les redondances dès la
  conception plutôt que de devoir tout réorganiser après coup.

- **Vérifie l'absence de redondance** dans un schéma avant de le valider :
  si une information se répète sur plusieurs lignes, il manque probablement
  une table.

- **Choisis soigneusement chaque clé primaire** en te demandant si elle est
  vraiment unique et stable dans le temps ; dans le doute, préfère un
  compteur créé spécialement pour cet usage.

- **Construis une requête SQL étape par étape** : commence par un `select *
  from table` simple, puis ajoute progressivement `where`, `order by` ou les
  `join`, en vérifiant le résultat à chaque étape.

- **Reste rigoureux.se avec la syntaxe** : point-virgule en fin
  d'instruction, apostrophes autour des chaînes de caractères, pas d'espace
  ni d'accent dans les noms de colonnes.
