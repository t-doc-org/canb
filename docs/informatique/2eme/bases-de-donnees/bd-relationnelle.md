% Copyright 2024 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Bases de données relationnelles

Nous avons vu précédemment qu'il est pratique de stocker des données
semi-structurées dans des tables (ou tableaux). Grâce au langage SQL, il est
facile de les créer et de les manipuler.

Une **base de données** est un ensemble d'informations organisées pour être
facilement accessibles, gérées et mises à jour par ses utilisateurs. Par exemple,
dans une entreprise, toutes les données relatives aux clients sont stockées dans
une base de données.

## Tableur

Une approche simple serait d'utiliser un tableur (logiciel pour la création et
la manipulation de tableaux, par exemple Excel) pour stocker les informations.

Voici un exemple de tableau qui représente les achats effectués par des clients.
Les informations concernant le client sont son nom, son prénom et son adresse et
celles concernant le produit acheté sont le nom, la description et le prix.

| nom_client | prenom | adresse | nom_produit | description | prix |
| :--------- | :----- | :------ | :---------- | :---------- | ---: |
| Duck | Donald | Bd de Pérolles 7<br> 1700 Fribourg | Ektorp | canapé 2 places | 499 |
| Léclair | Buzz | Rue de Centre 14<br> 1752 Villars-sur-Glâne | Brimnes | structure de lit | 129 |
| Duck | Donald | Bd de Pérolles 7<br> 1700 Fribourg | Brimnes | structure de lit | 129 |
| Léclair | Buzz | Rue de Centre 14<br> 1752 Villars-sur-Glâne | Jaren | matelas à ressorts | 59 |
| Lebricoleur | Bob | Rue de Lausanne 65<br> 1700 Fribourg  | Brimnes | structure de lit | 129 |

Que se passe-t-il si un client change d'adresse?

Les inconvénients de cette représentation sont les suivants:

1. Les informations sont **redondantes**: l'adresse du client ou la description
du produit apparaissent sur plusieurs lignes.
2. S'il y a un changement, il faut le faire à plusieurs endroits, sinon les
données ne sont plus cohérentes.

L'utilisation d'un tableur n'est donc pas adaptée pour les grandes bases de
données.

## Modèle relationnel

Une autre approche est d'utiliser plusieurs tables reliées entre elles. Nous
parlons alors de **base de données relationnelle**.

Pour pouvoir relier des tables entre elles, il est nécessaire d'introduire
quelques concepts.

### Clé primaire

Une **clé primaire** est une colonne (ou une combinaison de colonnes) qui permet
d'identifier chaque enregistrement (ligne) d'une table de manière unique. Elle
doit donc être:
- unique (deux lignes distinctes ne peuvent pas avoir la même valeur pour la
colonne qui est clé primaire)
- stable (la valeur de la colonne qui est clé primaire ne doit pas changer au
cours du temps)

Si aucune colonne ne remplit ces critères, nous pouvons en créer une nouvelle
avec un compteur (la valeur augmentera toujours de 1).

#### Exemple - Cantons

````{list-grid}
:style: grid-template-columns: 3fr 7fr;
- ```{graphviz}
  :align: center
  digraph UML_Class_diagram {
    graph [
      labelloc="t"
      fontname="Helvetica,Arial,sans-serif"
      fontsize="20pt"
      layout="circo"
      bgcolor="transparent"
    ]
    node [
      fontname="Helvetica,Arial,sans-serif"
      shape=record
      style=filled
      fillcolor=gray95
    ]

    Class1 [
      shape=plain
      label=<<table border="0" cellborder="1" cellspacing="0" cellpadding="4">
        <tr> <td> <b>canton</b> </td> </tr>
        <tr> <td>
          <table border="0" cellborder="0" cellspacing="7" >
            <tr> <td align="left"><u>nom </u> (clé primaire)</td> </tr>
            <tr> <td align="left" >abr</td> </tr>
            <tr> <td align="left" >chef_lieu</td> </tr>
            <tr> <td align="left" >nb_communes</td> </tr>
            <tr> <td align="left" >population</td> </tr>
            <tr> <td align="left" >superficie</td> </tr>
          </table>
        </td> </tr>
      </table>>
    ]
  }
  ```
- - Chaque canton a un nom différent et ne change pas.
  - Chaque abréviation est différente et ne change pas.
  - Les chefs-lieux sont en principe différents, mais pourrait changer.
  - Le nombre de communes peut être le même, voir même changer.
  - La population peut être la même et change.
  - La superficie peut être la même, voir même changer.
````

Dans cet exemple, nous pouvons donc choisir la colonne `nom` ou `abr` comme clé
primaire. Nous avons choisi `nom`.

#### Exemple - Clients

````{list-grid}
:style: grid-template-columns: 3fr 7fr;
- ```{graphviz}
  :align: center
  digraph UML_Class_diagram {
    graph [
      labelloc="t"
      fontname="Helvetica,Arial,sans-serif"
      fontsize="20pt"
      layout="circo"
      bgcolor="transparent"
    ]
    node [
      fontname="Helvetica,Arial,sans-serif"
      shape=record
      style=filled
      fillcolor=gray95
    ]

    Class1 [
      shape=plain
      label=<<table border="0" cellborder="1" cellspacing="0" cellpadding="4">
        <tr> <td> <b>client</b> </td> </tr>
        <tr> <td>
          <table border="0" cellborder="0" cellspacing="7" >
            <tr> <td align="left"><u>no_c </u> (clé primaire)</td> </tr>
            <tr> <td align="left" >nom</td> </tr>
            <tr> <td align="left" >prenom</td> </tr>
            <tr> <td align="left" >adresse</td> </tr>
            <tr> <td align="left" >telephone</td> </tr>
            <tr> <td align="left" >mail</td> </tr>
          </table>
        </td> </tr>
      </table>>
    ]
  }
  ```
- - Deux clients peuvent avoir le même nom.
  - Deux clients peuvent avoir le même prénom.
  - Deux clients peuvent avoir la même adresse et elle peut changer.
  - Le téléphone peut changer.
  - Le mail peut changer.
````

Dans cet exemple, aucune colonne ne correspond aux critères de clé primaire
(unique et stable). Par conséquent, il faut créer une nouvelle colonne en
ajoutant, par exemple, un numéro de client `no_c`.

### Clé étrangère

Une **clé étrangère** est une colonne qui contient une information qui est une
clé primaire d'une autre table.


### Schéma relationnel

Nous pouvons représenter une base de données relationnelles à l'aide d'un
schéma. Pour ce faire, il existe quelques règles à respecter:
1. Chaque table a un nom, suivi de la liste de ses colonnes.
2. Chaque table a une clé primaire indiquée grâce au soulignement.
3. Les flèches représentent les références entre les tables et pointent
toujours d'une clé étrangère vers une clé primaire.

```{tip}
Lorsque nous construisons une base de données relationnelles, il est essentiel
de s'assurer qu'il n'y a pas de duplication d'informations. S'il y a de la
redondance, il est souvent nécessaire d'ajouter une nouvelle table pour
normaliser les données.
```

Reprenons l'exemple du tableur avec le tableau d'achats. Un **achat** est une
relation entre un **client** et un **produit**. Pour construire une base de
données relationnelle, nous aurons donc besoin de trois tables distinctes:
client, produit et achat. La table achat contiendra deux informations: le numéro
de client et le numéro de produit. Ces deux éléments sont des clés étrangères,
notées `# no_c` et le `# no_p`. Comme un client peut acheter plusieurs produits
ou un produit peut être acheté par plusieurs clients, aucune des deux colonnes
ne peut être une clé primaire à elle seule. Dans ce cas, nous utilisons la
combinaison des deux colonnes comme clé primaire. Alternativement, nous aurions
pu créer une nouvelle colonne pour servir de clé primaire.

% TODO: Améliorer le rendu des diagrammes (titre, couleur).

```{graphviz}
:align: center
digraph UML_Class_diagram {
  graph [
    label="Schéma relationnel"
    labelloc="t"
    fontname="Helvetica,Arial,sans-serif"
    fontsize="20pt"
    layout="circo"
    bgcolor="transparent"
  ]
  node [
    fontname="Helvetica,Arial,sans-serif"
    shape=record
    style=filled
    fillcolor=gray95
  ]
  edge [fontname="Helvetica,Arial,sans-serif"]
  edge [style=solid]
  Class3:a1 -> Class1:p1
  Class3:a2 -> Class2:c1

  Class1 [
    shape=plain
    label=<<table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      <tr> <td> <b>produit</b> </td> </tr>
      <tr> <td>
        <table border="0" cellborder="0" cellspacing="7" >
          <tr> <td align="left" port="p1"><u>no_p</u></td> </tr>
          <tr> <td port="p2" align="left" >nom</td> </tr>
          <tr> <td port="p3" align="left" >description</td> </tr>
          <tr> <td port="p4" align="left" >prix</td> </tr>
        </table>
      </td> </tr>
    </table>>
  ]

  Class2 [
    shape=plain
    label=<<table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      <tr> <td> <b>client</b> </td> </tr>
      <tr> <td>
        <table border="0" cellborder="0" cellspacing="7" >
          <tr> <td align="left" port="c1"><u>no_c</u></td> </tr>
          <tr> <td port="c2" align="left" >nom</td> </tr>
          <tr> <td port="c3" align="left" >prenom</td> </tr>
          <tr> <td port="c4" align="left" >adresse</td> </tr>
          <tr> <td port="c5" align="left" >telephone</td> </tr>
          <tr> <td port="c6" align="left" >mail</td> </tr>
        </table>
      </td> </tr>
    </table>>
  ]

  Class3 [
    shape=plain
    label=<<table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      <tr> <td> <b>achat</b> </td> </tr>
      <tr> <td>
        <table border="0" cellborder="0" cellspacing="7" >
          <tr> <td align="left" port="a1"><u># no_p</u></td> </tr>
          <tr> <td port="a2" align="left" ><u># no_c</u></td> </tr>
          <tr> <td port="a2" align="left" ><u>date</u></td> </tr>
          <tr> <td port="a2" align="left" >quantite</td> </tr>
        </table>
      </td> </tr>
    </table>>
  ]
}
```

### Exercice {num2}`exercice` — Streaming musical

Une application de streaming musical enregistre l'historique d'écoute de ses
utilisateurs dans une seule table:

| nom | prenom | titre_chanson | artiste | album | genre | date_ecoute |
| :--- | :----- | :------------- | :------- | :----------------- | :--------- | :--------------- |
| Fontaine | Léa | Levitating | Dua Lipa | Future Nostalgia | Pop | 12.03.2024 08:15 |
| Fontaine | Léa | As It Was | Harry Styles | Harry's House | Pop | 12.03.2024 08:19 |
| Perret | Noah | Levitating | Dua Lipa | Future Nostalgia | Pop | 12.03.2024 09:02 |
| Perret | Noah | Blinding Lights | The Weeknd | After Hours | Synth-pop | 12.03.2024 09:05 |
| Fontaine | Léa | Levitating | Dua Lipa | Future Nostalgia | Pop | 13.03.2024 07:40 |

1. Quelles redondances observez-vous dans cette table?
2. Proposez un découpage de cette table en plusieurs tables qui évite ces
   redondances.
3. Quelles sont les clés primaires et étrangères de chacune de vos tables?

````{solution}
En observant cette table, nous remarquons deux redondances:

1. Les informations de l'**utilisateur** (`nom`, `prenom`) sont répétées à
   chaque écoute faite par ce même utilisateur (Léa Fontaine, lignes 1, 2 et
   5).
2. Les informations de la **chanson** (`titre_chanson`, `artiste`, `album`,
   `genre`) sont répétées à chaque écoute de cette même chanson (*Levitating*,
   lignes 1, 3 et 5).

Pour éliminer ces redondances, il faut sortir ces informations dans leurs
propres tables: une table `utilisateur` et une table `chanson`. Il reste
alors une table `ecoute` qui décrit chaque écoute effectuée.

Il faut maintenant déterminer la clé primaire de chacune de ces tables:

- **utilisateur**: ni le nom, ni le prénom ne sont uniques (deux utilisateurs
  pourraient s'appeler pareil) ni forcément stables. Nous créons donc un
  compteur `no_utilisateur`.
- **chanson**: contrairement à l'exercice des trottinettes, aucune colonne
  n'identifie déjà une chanson de manière unique: le titre seul ne suffit
  pas, car deux chansons différentes peuvent porter le même nom. Nous créons
  donc un compteur `no_chanson`.
- **ecoute**: la table contient deux clés étrangères, `# no_utilisateur` et
  `# no_chanson`, qui pointent vers les clés primaires des tables
  `utilisateur` et `chanson`. Comme un même utilisateur peut écouter
  plusieurs fois la même chanson (à des dates différentes), la combinaison de
  ces deux clés étrangères ne suffit pas à identifier une écoute de manière
  unique. Nous créons donc, ici aussi, un compteur `no_ecoute`.

Nous obtenons donc les trois tables suivantes:

- `utilisateur`: no_utilisateur, nom, prenom
- `chanson`: no_chanson, titre_chanson, artiste, album, genre
- `ecoute`: no_ecoute, # no_utilisateur, # no_chanson, date_ecoute

```{graphviz}
:align: center
digraph UML_Class_diagram {
  graph [
    label="Schéma relationnel - streaming musical"
    labelloc="t"
    fontname="Helvetica,Arial,sans-serif"
    fontsize="20pt"
    layout="circo"
    bgcolor="transparent"
  ]
  node [
    fontname="Helvetica,Arial,sans-serif"
    shape=record
    style=filled
    fillcolor=gray95
  ]
  edge [fontname="Helvetica,Arial,sans-serif"]
  edge [style=solid]
  Class3:e1 -> Class1:u1
  Class3:e2 -> Class2:c1

  Class1 [
    shape=plain
    label=<<table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      <tr> <td> <b>utilisateur</b> </td> </tr>
      <tr> <td>
        <table border="0" cellborder="0" cellspacing="7" >
          <tr> <td align="left" port="u1"><u>no_utilisateur</u></td> </tr>
          <tr> <td port="u2" align="left" >nom</td> </tr>
          <tr> <td port="u3" align="left" >prenom</td> </tr>
        </table>
      </td> </tr>
    </table>>
  ]

  Class2 [
    shape=plain
    label=<<table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      <tr> <td> <b>chanson</b> </td> </tr>
      <tr> <td>
        <table border="0" cellborder="0" cellspacing="7" >
          <tr> <td align="left" port="c1"><u>no_chanson</u></td> </tr>
          <tr> <td port="c2" align="left" >titre_chanson</td> </tr>
          <tr> <td port="c3" align="left" >artiste</td> </tr>
          <tr> <td port="c4" align="left" >album</td> </tr>
          <tr> <td port="c5" align="left" >genre</td> </tr>
        </table>
      </td> </tr>
    </table>>
  ]

  Class3 [
    shape=plain
    label=<<table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      <tr> <td> <b>ecoute</b> </td> </tr>
      <tr> <td>
        <table border="0" cellborder="0" cellspacing="7" >
          <tr> <td align="left" port="l0"><u>no_ecoute</u></td> </tr>
          <tr> <td align="left" port="e1"><u># no_utilisateur</u></td> </tr>
          <tr> <td port="e2" align="left" ><u># no_chanson</u></td> </tr>
          <tr> <td port="e3" align="left" >date_ecoute</td> </tr>
        </table>
      </td> </tr>
    </table>>
  ]
}
```
````

### Exercice {num2}`exercice` — Football

Un club de football amateur enregistre les buts marqués lors de ses matchs
dans une seule table:

| nom | prenom | equipe | adversaire | date_match | stade | minute |
| :--- | :----- | :---------- | :----------- | :---------- | :----------------- | -----: |
| Moreau | Kylian | FC Fribourg | AS Bulle | 05.04.2024 | Stade St-Léonard | 23 |
| Moreau | Kylian | FC Fribourg | AS Bulle | 05.04.2024 | Stade St-Léonard | 67 |
| Berger | Sofia | FC Fribourg | AS Bulle | 05.04.2024 | Stade St-Léonard | 41 |
| Moreau | Kylian | FC Fribourg | US Portalban | 12.04.2024 | Stade St-Léonard | 15 |

1. Quelles redondances observez-vous dans cette table?
2. Proposez un découpage de cette table en plusieurs tables qui évite ces
   redondances.
3. Quelles sont les clés primaires et étrangères de chacune de vos tables?

````{solution}
En observant cette table, nous remarquons deux redondances:

1. Les informations du **joueur** (`nom`, `prenom`, `equipe`) sont répétées
   à chaque but marqué par ce même joueur (Kylian Moreau, lignes 1, 2 et 4).
2. Les informations du **match** (`adversaire`, `date_match`, `stade`) sont
   répétées à chaque but marqué lors de ce même match (match du 05.04.2024,
   lignes 1, 2 et 3).

Pour éliminer ces redondances, il faut sortir ces informations dans leurs
propres tables: une table `joueur` et une table `match`. Il reste alors une
table `but` qui décrit chaque but marqué.

Il faut maintenant déterminer la clé primaire de chacune de ces tables:

- **joueur**: le nom et le prénom sont stables, mais ne sont pas garantis
  uniques (deux joueurs pourraient porter le même nom). Nous créons donc un
  compteur `no_joueur`.
- **match**: la combinaison `adversaire` + `date_match` identifie déjà chaque
  match de manière unique (une équipe ne joue en principe qu'un seul match
  par jour contre un adversaire donné). Nous pourrions donc utiliser cette
  combinaison comme clé primaire, mais il est plus simple de créer un
  compteur `no_match`.
- **but**: la table contient deux clés étrangères, `# no_joueur` et
  `# no_match`, qui pointent vers les clés primaires des tables `joueur` et
  `match`. Comme un même joueur peut marquer plusieurs buts lors du même
  match (Kylian Moreau, lignes 1 et 2), la combinaison de ces deux clés
  étrangères ne suffit pas à identifier un but de manière unique. Nous
  créons donc, ici aussi, un compteur `no_but`.

Nous obtenons donc les trois tables suivantes:

- `joueur`: no_joueur, nom, prenom, equipe
- `match`: no_match, adversaire, date_match, stade
- `but`: no_but, # no_joueur, # no_match, minute

```{graphviz}
:align: center
digraph UML_Class_diagram {
  graph [
    label="Schéma relationnel - football"
    labelloc="t"
    fontname="Helvetica,Arial,sans-serif"
    fontsize="20pt"
    layout="circo"
    bgcolor="transparent"
  ]
  node [
    fontname="Helvetica,Arial,sans-serif"
    shape=record
    style=filled
    fillcolor=gray95
  ]
  edge [fontname="Helvetica,Arial,sans-serif"]
  edge [style=solid]
  Class3:b1 -> Class1:j1
  Class3:b2 -> Class2:m1

  Class1 [
    shape=plain
    label=<<table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      <tr> <td> <b>joueur</b> </td> </tr>
      <tr> <td>
        <table border="0" cellborder="0" cellspacing="7" >
          <tr> <td align="left" port="j1"><u>no_joueur</u></td> </tr>
          <tr> <td port="j2" align="left" >nom</td> </tr>
          <tr> <td port="j3" align="left" >prenom</td> </tr>
          <tr> <td port="j4" align="left" >equipe</td> </tr>
        </table>
      </td> </tr>
    </table>>
  ]

  Class2 [
    shape=plain
    label=<<table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      <tr> <td> <b>match</b> </td> </tr>
      <tr> <td>
        <table border="0" cellborder="0" cellspacing="7" >
          <tr> <td align="left" port="m1"><u>no_match</u></td> </tr>
          <tr> <td port="m2" align="left" >adversaire</td> </tr>
          <tr> <td port="m3" align="left" >date_match</td> </tr>
          <tr> <td port="m4" align="left" >stade</td> </tr>
        </table>
      </td> </tr>
    </table>>
  ]

  Class3 [
    shape=plain
    label=<<table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      <tr> <td> <b>but</b> </td> </tr>
      <tr> <td>
        <table border="0" cellborder="0" cellspacing="7" >
          <tr> <td align="left" port="l0"><u>no_but</u></td> </tr>
          <tr> <td align="left" port="b1"><u># no_joueur</u></td> </tr>
          <tr> <td port="b2" align="left" ><u># no_match</u></td> </tr>
          <tr> <td port="b3" align="left" >minute</td> </tr>
        </table>
      </td> </tr>
    </table>>
  ]
}
```
````

### Exercice {num2}`exercice` — Trottinettes

Dessinez le schéma de la base de données relationnelle qui représente un système
de location de trottinettes électriques.

1. Quelles sont les différentes tables?
2. Quelles sont les colonnes de ces tables?
3. Existe-t-il déjà une clé primaire?
4. Y a-t-il des clés étrangères?

````{solution}
Comme pour l'exemple du tableur, nous pouvons commencer par imaginer une seule
table qui contiendrait toutes les informations utiles: qui a loué quelle
trottinette et quand.

| nom | prenom | telephone | no_trottinette | modele | date_debut | date_fin | prix |
| :--- | :------ | :-------- | :-------------- | :------ | :--------- | :------- | ---: |
| Dupont | Bob | 079 111 11 11 | 10 | Xiaomi Mi3 | 01.05.2024 08:00 | 01.05.2024 08:30 | 3.00 |
| Dupont | Bob | 079 111 11 11 | 12 | Ninebot ES4 | 02.05.2024 09:00 | 02.05.2024 09:15 | 1.50 |
| Martin | Amandine | 079 222 22 22 | 10 | Xiaomi Mi3 | 02.05.2024 10:00 | 02.05.2024 10:45 | 4.50 |
| Perroud | Marie | 079 333 33 33 | 10 | Xiaomi Mi3 | 03.05.2024 07:30 | 03.05.2024 08:00 | 3.00 |

En observant cette table, nous remarquons deux redondances:

1. Les informations de l'**utilisateur** (`nom`, `prenom`, `telephone`) sont
   répétées à chaque location faite par ce même utilisateur (voir Dupont Bob,
   lignes 1 et 2).
2. Les informations de la **trottinette** (`modele`) sont répétées à chaque
   location de cette même trottinette (voir la trottinette n°10, lignes 1, 3
   et 4).

Pour éliminer ces redondances, il faut sortir ces informations dans leurs
propres tables: une table `utilisateur` et une table `trottinette`. Il reste
alors une table `location` qui décrit chaque location effectuée.

Il faut maintenant déterminer la clé primaire de chacune de ces tables:

- **utilisateur**: ni le nom, ni le prénom ne sont uniques (deux utilisateurs
  pourraient s'appeler pareil) ni forcément stables. Nous créons donc un
  compteur `no_utilisateur`.
- **trottinette**: le `modele` n'est pas unique (plusieurs trottinettes
  partagent le même modèle), mais le numéro de la trottinette (par exemple
  inscrit sur l'engin) identifie chaque trottinette de manière unique et
  stable. C'est cette colonne, `no_trottinette`, qui devient la clé primaire.
- **location**: la table contient deux clés étrangères, `# no_utilisateur` et
  `# no_trottinette`, qui pointent vers les clés primaires des tables
  `utilisateur` et `trottinette`. Comme un même utilisateur peut louer
  plusieurs fois la même trottinette (à des dates différentes), la
  combinaison de ces deux clés étrangères ne suffit pas à identifier une
  location de manière unique. Nous créons donc, ici aussi, un compteur
  `no_location`.

Nous obtenons donc les trois tables suivantes:

- `utilisateur`: no_utilisateur, nom, prenom, telephone
- `trottinette`: no_trottinette, modele
- `location`: no_location, # no_utilisateur, # no_trottinette, date_debut,
  date_fin, prix

```{graphviz}
:align: center
digraph UML_Class_diagram {
  graph [
    label="Schéma relationnel - trottinettes"
    labelloc="t"
    fontname="Helvetica,Arial,sans-serif"
    fontsize="20pt"
    layout="circo"
    bgcolor="transparent"
  ]
  node [
    fontname="Helvetica,Arial,sans-serif"
    shape=record
    style=filled
    fillcolor=gray95
  ]
  edge [fontname="Helvetica,Arial,sans-serif"]
  edge [style=solid]
  Class3:a1 -> Class1:u1
  Class3:a2 -> Class2:t1

  Class1 [
    shape=plain
    label=<<table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      <tr> <td> <b>utilisateur</b> </td> </tr>
      <tr> <td>
        <table border="0" cellborder="0" cellspacing="7" >
          <tr> <td align="left" port="u1"><u>no_utilisateur</u></td> </tr>
          <tr> <td port="u2" align="left" >nom</td> </tr>
          <tr> <td port="u3" align="left" >prenom</td> </tr>
          <tr> <td port="u4" align="left" >telephone</td> </tr>
        </table>
      </td> </tr>
    </table>>
  ]

  Class2 [
    shape=plain
    label=<<table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      <tr> <td> <b>trottinette</b> </td> </tr>
      <tr> <td>
        <table border="0" cellborder="0" cellspacing="7" >
          <tr> <td align="left" port="t1"><u>no_trottinette</u></td> </tr>
          <tr> <td port="t2" align="left" >modele</td> </tr>
        </table>
      </td> </tr>
    </table>>
  ]

  Class3 [
    shape=plain
    label=<<table border="0" cellborder="1" cellspacing="0" cellpadding="4">
      <tr> <td> <b>location</b> </td> </tr>
      <tr> <td>
        <table border="0" cellborder="0" cellspacing="7" >
          <tr> <td align="left" port="l0"><u>no_location</u></td> </tr>
          <tr> <td align="left" port="a1"><u># no_utilisateur</u></td> </tr>
          <tr> <td port="a2" align="left" ><u># no_trottinette</u></td> </tr>
          <tr> <td port="a3" align="left" >date_debut</td> </tr>
          <tr> <td port="a4" align="left" >date_fin</td> </tr>
          <tr> <td port="a5" align="left" >prix</td> </tr>
        </table>
      </td> </tr>
    </table>>
  ]
}
```
````
