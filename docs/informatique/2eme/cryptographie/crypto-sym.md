% Copyright 2024 Caroline Blank <caro@c-space.org>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Cryptographie symétrique

## Introduction

```{iframe} https://view.genially.com/68a5883499046bf67cdb9028
```

```{solution}
Énigme 1: Gallia -> 234483 <br>
Énigme 2: mxohv -> JULES <br>
Énigme 3: NIORGITVJQD <br>
Code final: 318
```

## Définition

La **cryptographie symétrique**, également appelée cryptographie à clé secrète,
est la méthode de chiffrement la plus ancienne. Elle repose sur l'utilisation
d'une même clé pour {term}`chiffrer` et {term}`déchiffrer` un message.

```{figure} images/crypt-sym.png
:alt: Schéma de la cryptographie symétrique
:width: 70%
source: Network Associates Inc, *Introduction à la cryptographie*
```

- Une clé est choisie et échangée entre les participants.
- Le chiffrement et le déchiffrement s'effectue à l'aide d'un algorithme qui
utilise cette clé.

## Transpositions

Dans une **transposition**, les lettres du texte clair sont mélangées, mais pas
modifiées. C'est-à-dire que le texte mélangé est une anagramme du texte
d'origine.

### Scytale

````{list-grid}
:style: grid-template-columns: 9fr 4fr;
- Ce procédé était déjà utilisé pendant l'Antiquité (~3400 av. J.-C. à 476) par
  les Spartes. La scytale est un morceau de bois autour duquel est entouré une
  bande de cuir ou de parchemin. L'expéditeur écrit son message et déroule la
  bande qui est une suite de lettre sans signification. Le messager amène cette
  bande, en générale portée comme ceinture, au destinataire qui enroulera cette
  bande sur son bâton de même diamètre pour lire le message en clair.

  **Clé de chiffrement:** la largeur du bâton.
- ```{figure} images/scytale.jpg
  :alt: Scytale
  source: [apprendre en ligne](https://www.apprendre-en-ligne.net/crypto/index-crypto-transpo.html)
  ```
````

### Chiffre Rail Fence

Ce procédé a été beaucoup utilisé pendant la guerre de Sécession (1861-1865).
Le Rail Fence dispose les lettres en "zig-zag" sur un nombre de lignes donné.

Le texte "VIVE LE COLLÈGE SAINT-CROIX" donnera le message codé sur 2 lignes:
vvlcleeaneriieeolgsitcox\
Écrit en "zig-zag", cela donne:

```{code-block} text
v v l c l e e a n e r i
 i e e o l g s i t c o x
```

Le même texte donnera le message codé sur 3 lignes: vllenrieeolgsitcoxvceaei\
Écrit en "zig-zag", cela donne:

```{code-block} text
v   l   l   e   n   r
 i e e o l g s i t c o x
  v   c   e   a   e   i
```

**Clé de chiffrement:** le nombre de lignes.

#### Exercice 1

Un texte a été chiffré avec le procédé du Chiffre de Rail Fence avec comme
clé de chiffrement 2.\
Déchiffrez le texte suivant:

<center>lcytg aheye rqesf claeh frrar porpi smtiu etaie dcife</center>

````{solution}
Il y 45 caractères $45 : 2 = 22.5$. Il y aura 23 caractères sur la première
ligne et 22 sur la deuxième.

```{code-block} text
l c y t g a h e y e r q e s f c l a e h f r r
 a r p o r p i s m t i u e t a i e d c i f e
```

<center>LA CRYPTOGRAPHIE SYMETRIQUE EST FACILE A DECHIFFRER</center>
````

## Substitutions monoalphabétiques

Dans une **substitution monoalphabétique**, aussi appelée substitution simple,
chaque lettre est remplacée par un autre symbole, toujours le même.

(cesar)=
### Chiffre de César

Ce procédé, déjà utilisé dans l'Antiquité, était connu des Romains. Jules César,
dont elle tire le nom, l'employait pour chiffrer certaines de ses
correspondances. La substitution proposée par César est un décalage de trois
positions. C'est-à-dire que le A est remplacé par d, B par e, etc.

| Clair | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Chiffré | d | e | f | g | h | i | j | k | l | m | n | o | p | q | r | s | t | u | v | w | x | y | z | a | b | c |

**Clé de chiffrement:** décalage de trois positions.

#### Exercice 2

Codez le message suivant en utilisant le chiffre de César d'origine (décalage de
trois positions):

<center>LA CRYPTO, C'EST SYMPA!</center>

````{solution}
Il faut effectuer un décalage de 3 positions pour chaque lettre:\
L &rarr; o, A &rarr; d, C &rarr; f, ...

<center>odfub swrfh vwvbp sd</center>
````

#### Exercice 3

Déchiffrez le texte suivant chiffré en utilisant le Chiffre de César d'origine,
c'est-à-dire avec comme clé de chiffrement un décalage de trois positions.

<center>whawh frghd yhfoh fklii uhghf hvdu</center>

````{solution}
Un décalage de 3 positions vers la droite a été utilisé pour coder, il faut
donc faire une décalage vers la gauche de 3 positions pour décoder:\
w &rarr; T, h &rarr; E, a &rarr; X, ...

<center>TEXTE CODE AVEC LE CHIFFRE DE CESAR</center>
````

#### Remarque

Comme il y a 26 lettres de l'alphabet, il est possible de décaler de 1 à 25
positions. Il existe donc 25 clés de César différentes.

Une telle substitution n'est pas très sûre, car la connaissance d'une seule
lettre permet de découvrir tout le message sans difficulté.

Si les 25 positions possibles sont testées, le message sera découvert.

### Cas général

Pour rendre le {term}`décryptage` plus difficile, on peut substituer à chaque
lettre une lettre tirée au hasard. Dans ce cas, il y a environ
$1.5 \cdot 10^{25}$ possibilités.

| Clair | A | B | C | D | E | F | G | H | I | J | K | L | M | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Chiffré | k | t | e | w | q | j | s | v | m | a | z | g | p | x | c | u | i | o | b | l | y | f | r | n | d | h |

**Clé de chiffrement:** le tableau de correspondance entier.

`````{admonition} Le saviez vous?
:class: attention, dropdown
# Première Guerre mondiale - Cryptanalyse

Imaginez une guerre où les armes les plus puissantes ne sont pas les canons,
mais les crayons et les cerveaux. Pendant la Première Guerre mondiale, une
bataille invisible s'est jouée dans l'ombre : celle des codes secrets. Pour la
première fois de l'histoire, les décodeurs (la cryptanalyse) ont remporté une
victoire totale sur les créateurs de codes (la cryptographie), incapables de
s'adapter aux réalités du terrain.

À cette époque, la technologie crée un paradoxe de vitesse. Grâce aux inventions
du XIX<sup>e</sup> siècle, les messages radio voyagent instantanément d'un bout
à l'autre de l'Europe. En revanche, le codage et le décodage se font entièrement
à la main, sur le papier. Sur le champ de bataille, au milieu des explosions et
du stress, les soldats n'ont pas le temps de manipuler des calculs complexes.
Pour éviter les erreurs matérielles et transmettre les ordres à temps, les codes
doivent rester simples et rapides à appliquer — une heure maximum. Le problème?
Cette simplicité obligatoire rend les messages extrêmement vulnérables. Les
chiffres utilisés n'offrent plus une sécurité suffisante, ouvrant grand la porte
aux espions:

  - Le décryptage de Louis Thévenin (1914):<br>
    Premier message allemand cassé dès le début du conflit, offrant un avantage
    stratégique immédiat aux Alliés.
  - Le télégramme Zimmermann par le Royaume-Uni (1917):<br>
    Interception d'une proposition d'alliance secrète entre l'Allemagne et le
    Mexique, provoquant l'entrée en guerre des États-Unis.
  - Le radiotélégramme de Georges Painvin (1er juin 1918):<br>
    Clé d'un code allemand brisée à temps pour stopper net l'une de leurs
    dernières grandes offensives.

Cette guerre marque la fin d'une époque. Ce conflit a prouvé que le chiffrement
artisanal à la main était devenu trop dangereux et dépassé.

# Deuxième Guerre mondiale - Machine Enigma

````{list-grid}
:style: grid-template-columns: 2fr 1fr;
-   La machine Enigma est l'un des exemples les plus célèbres de chiffrement
    symétrique. Utilisée par l'Allemagne nazi pendant la Seconde Guerre
    mondiale, elle était une machine électromécanique aux airs de machine à
    écrire capable de chiffrer et déchiffrer des messages.

    Elle fonctionnait selon le principe du chiffrement symétrique :

      1.  Les Allemands configuraient la machine avec une clé secrète (position
          initiale des rotors, configuration des fiches de permutation).
      2.  Un message était saisi, et chaque lettre était transformée par un
          système de rotors et de substitution.
      3.  Le texte chiffré était transmis par radio.
      4.  Le destinataire, possédant une machine Enigma configurée avec la même
          clé, pouvait déchiffrer le message.

    [Machine Enigma (Wikipédia)](https://fr.wikipedia.org/wiki/Enigma_(machine))

-   ```{figure} images/enigma.jpg
    :alt: Machine Enigma
    :width: 80%
    :align: center
    source: Wikipédia
    ```
`````

### Attaque

Une méthode efficace pour attaquer un message qui utilise une substitution
monoalphabétique est l'**analyse des fréquences**. En supposant que le symbole le
plus fréquent remplace la lettre la plus fréquente en français (le "E") et en
appliquant cette logique aux autres lettres, il devient possible de
décrypte le message, à condition qu'il soit suffisamment long.

Voici un tableau qui représente la fréquence d'apparition des lettres en
français (les lettres accentuées ont été remplacée par des lettres non
accentuées, les espaces et ponctuations ont été supprimés).

| Lettre | E | A | S | I | T | N | R | ... |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Fréquence (en %) | 17.4 | 8.2 | 8.1 | 7.3 | 7.2 | 7.1 | 6.6 | ... |

```{figure} images/batonsfr.gif
:alt: Fréquence d'apparition des lettres en français
source: [apprendre en ligne](https://apprendre-en-ligne.net/crypto/stat/francais.html)
```

## Substitutions polyalphabétiques

Dans une **substitution polyalphabétique**, une lettre dans le texte clair peut
être remplacée par différents symboles dans le {term}`cryptogramme`.

Ce procédé rend le {term}`décryptage` beaucoup plus difficile, car l'analyse de
fréquences vue précédemment ne peut pas être utilisée.

### Chiffre de Vigenère

Blaise Vigenère (1523-1596) est un diplomate, cryptologue, kabbaliste,
traducteur, alchimiste et astrologue français. S'appuyant sur les travaux de
ses prédécesseurs (Alberti, Trithème, Bellaso et Porta), il a mis au point le
chiffre qui porte désormais son nom.

Le chiffre de Vigenère est une amélioration du chiffre de César. Il utilise 26
alphabets décalés pour {term}`chiffrer` un message.

**Clé de chiffrement:** un mot choisi.

Chiffrons "TOUT EST PERDU" avec comme clé CRYPTO.
1. Écrire la clé en la répétant pour qu'elle soit de même longueur que le texte
en clair.
2. Calculer le décalage pour chaque lettre de la clé. A&rarr;C: décalage de 2
positions, A&rarr;R: 17 positions, ...
3. Appliquer le décalage aux lettres du texte clair.

Sans devoir calculer le décalage, on peut utiliser le
[carré de Vigenère](https://www.apprendre-en-ligne.net/crypto/vigenere/carrevig.html).

```{list-table}
:class: text-center
:stub-columns: 1
:align: center
:widths: 10 3 3 3 3 3 3 3 3 3 3 3 3
* - Texte clair
  - T
  - O
  - U
  - T
  - E
  - S
  - T
  - P
  - E
  - R
  - D
  - U
* - Clé
  - C
  - R
  - Y
  - P
  - T
  - O
  - C
  - R
  - Y
  - P
  - T
  - O
* - Décalage
  - 2
  - 17
  - 24
  - 15
  - 19
  - 14
  - 2
  - 17
  - 24
  - 15
  - 19
  - 14
* - Texte chiffré
  - v
  - f
  - s
  - i
  - x
  - g
  - v
  - g
  - c
  - g
  - w
  - i
```

#### Exercice 4

Déchiffrez le message suivant, chiffré avec le Chiffre de Vigenère, sachant que
la clé de chiffrement est **informatique**:

<center>arxod qondh yxwv</center>

````{solution}
Pour déterminer le message en clair, il faut compléter le tableau suivant:
1. Noter la clé et le texte chiffré.
2. Compter le décalage de chaque lettre du mot informatique par rapport à la
lettre a.
3. Déterminer le texte clair en appliquant le décalage vers la gauche.

```{list-table}
:class: text-center
:stub-columns: 1
:align: center
:widths: 10 3 3 3 3 3 3 3 3 3 3 3 3 3 3
* - Texte clair
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
  -
* - Clé
  - I
  - N
  - F
  - O
  - R
  - M
  - A
  - T
  - I
  - Q
  - U
  - E
  - I
  - N
* - Décalage
  - 8
  - 13
  - 5
  - 14
  - 17
  - 12
  - 0
  - 19
  - 8
  - 16
  - 20
  - 4
  - 8
  - 13
* - Texte chiffré
  - a
  - r
  - x
  - o
  - d
  - q
  - o
  - n
  - d
  - h
  - y
  - x
  - w
  - v
```

<center>SESAME OUVRE TOI</center>
````

## Cryptographie symétrique moderne

Les chiffrements vus précédemment sont simples et donc faciles à décrypter, ce
qui explique pourquoi ils ne sont plus utilisés aujourd'hui. Les systèmes
modernes, comme AES (Advanced Encryption Standard), reposent sur le chiffrement
par blocs qui fonctionne plus ou moins de la manière suivante:

1. Remplacer les caractères par un code binaire (par exemple, par l'encodage
   ASCII), ce qui génère une chaîne de 0 et de 1.
2. Découper cette chaîne en blocs de longueur donnée (par exemple, 128 bits).
3. Pour chaque bloc:
    - Permuter certains bits du bloc selon une table prédéfinie.
    - Chiffrer le bloc en utilisant la clé secrète (par exemple, addition bit
      par bit).
    - Répéter les deux opérations précédentes plusieurs fois.

## Conclusion

Dans un chiffrement symétrique, toute personne connaissant la clé est capable de
déchiffrer le texte. Il est donc essentiel de maintenir la clé secrète.

Problèmes:

- La clé doit être transmise par un canal sûr. Comment faire?

- On ne peut pas garantir que l'expéditeur du message est bien celui qu'il
prétend être (authentification). Si un intru intercepte la clé, il peut créer
des messages frauduleux indétectables (falsification).
