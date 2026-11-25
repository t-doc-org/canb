% Copyright 2026 Brice Canvel <brccvl@proton.me>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Cryptographie - quiz de synthèse

Ce quiz reprend les notions vues dans ce chapitre : le vocabulaire, la
cryptographie symétrique (transpositions et substitutions), les notions
mathématiques, la cryptographie asymétrique et le système RSA.

Clique sur le bouton <button class="tdoc fa-check"></button> pour vérifier ta
réponse. Pour les exercices de calcul, la démarche est donnée dans la solution
(clique sur son titre pour l'afficher).

Comme dans le cours, le texte clair est écrit en MAJUSCULES et le texte chiffré
en minuscules. Pour les calculs RSA, tu peux utiliser une calculatrice, la
calculatrice de l'[outil RSA](crypto-asym.md) (page *Cryptographie
asymétrique*) ou
[WolframAlpha](https://www.wolframalpha.com/).

<script type="module">
const quiz = await tdoc.import('tdoc/quiz.js');
// Compare des nombres entiers : « 09 » et « 9 » sont acceptés.
quiz.checks.int = args => args.applyAS(v => String(Number(v.trim())));
</script>

```{role} vf(quiz-select)
:options: |
: Vrai
: Faux
```

```{role} nb(quiz-input)
:style: width: 4rem; text-align: center;
:check: int
```

```{role} clair(quiz-input)
:style: width: 18rem;
:check: remove uppercase
```

```{role} chiffre(quiz-input)
:style: width: 18rem;
:check: remove lowercase
```

## Vocabulaire et histoire

### Question 1

```{role} q1(quiz-select)
:options: |
: Stéganographie
: Cryptographie
```

```{quiz}
- Histiée tatoue un message sur le crâne rasé d'un esclave et attend que les
  cheveux repoussent : {q1}`Stéganographie`
- Jules César remplace chaque lettre par la lettre située trois positions plus
  loin dans l'alphabet : {q1}`Cryptographie`
- Giovanni Porta écrit un message sur le blanc d'un oeuf dur, à travers la
  coquille : {q1}`Stéganographie`
- Marie Stuart remplace les lettres de ses messages par des symboles :
  {q1}`Cryptographie`
```

### Question 2

```{role} q2(quiz-select)
:options: |
: Chiffrer
: Déchiffrer
: Décrypter
: Cryptogramme
: Cryptanalyse
```

Associe chaque définition au bon terme.

```{quiz}
- Transformer un texte clair en un texte incompréhensible : {q2}`Chiffrer`
- Retrouver le texte clair grâce à la clé : {q2}`Déchiffrer`
- Retrouver le texte clair **sans** connaître la clé : {q2}`Décrypter`
- Synonyme de texte chiffré : {q2}`Cryptogramme`
- Activité consistant à casser la sécurité d'un procédé cryptographique :
  {q2}`Cryptanalyse`
```

## Cryptographie symétrique

### Question 3

```{role} q3(quiz-select)
:options: |
: Transposition
: Substitution monoalphabétique
: Substitution polyalphabétique
```

Classe chacun des procédés suivants.

```{quiz}
- La scytale : {q3}`Transposition`
- Le chiffre Rail Fence : {q3}`Transposition`
- Le chiffre de César : {q3}`Substitution monoalphabétique`
- Le chiffre de Vigenère : {q3}`Substitution polyalphabétique`
```

### Question 4

```{quiz}
Avec le chiffre de César, il existe {nb}`25` clés différentes (sans compter le
décalage de 0 position, qui ne change rien).
```

### Question 5

```{quiz}
- L'analyse des fréquences est efficace pour décrypter un long message chiffré
  avec une substitution monoalphabétique. {vf}`Vrai`
- L'analyse des fréquences est aussi efficace contre le chiffre de Vigenère.
  {vf}`Faux`
- Dans une transposition, le texte chiffré est une anagramme du texte clair.
  {vf}`Vrai`
- Dans une substitution monoalphabétique, une même lettre du texte clair peut
  être remplacée par des symboles différents. {vf}`Faux`
```

### Question 6

Chiffre le mot suivant avec le chiffre de César d'origine (décalage de trois
positions).

Position de chaque lettre dans l'alphabet, pour compter le décalage :

| Lettre | A | B | C | D | E | F | G | H | I | J | K | L | M |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Position | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |

| Lettre | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Position | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |

```{quiz}
BONJOUR → {chiffre}`erqmrxu`
```

````{solution}
Chaque lettre est décalée de 3 positions vers la droite :\
B → e, O → r, N → q, J → m, O → r, U → x, R → u.

<center>erqmrxu</center>
````

### Question 7

Ève a intercepté le message suivant, chiffré avec le chiffre de César. Elle ne
connaît pas le décalage utilisé.

<center>yluklgcvbz klchua sl jvsslnl</center>

Position de chaque lettre dans l'alphabet, pour compter le décalage :

| Lettre | A | B | C | D | E | F | G | H | I | J | K | L | M |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Position | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |

| Lettre | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Position | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |

```{quiz}
- En supposant que la lettre la plus fréquente du message remplace le E, le
  décalage utilisé est de {nb}`7` positions.
- Le message en clair est : {clair}`RENDEZVOUS DEVANT LE COLLEGE`
```

````{solution}
La lettre la plus fréquente est le l (6 fois). Si l remplace E, le décalage
est de 7 positions (E → l : E, f, g, h, i, j, k, l).

Pour déchiffrer, on décale chaque lettre de 7 positions vers la gauche :\
y → R, l → E, u → N, k → D, ...

<center>RENDEZVOUS DEVANT LE COLLEGE</center>
````

### Question 8

Le message suivant a été chiffré avec le chiffre Rail Fence, avec comme clé
de chiffrement 2 lignes.

<center>atqee anmdt audmi aii</center>

```{quiz}
Le message en clair est : {clair}`ATTAQUE DEMAIN A MIDI`
```

````{solution}
Il y a 18 caractères, donc 9 sur la première ligne et 9 sur la deuxième.

```{code-block} text
a t q e e a n m d
 t a u d m i a i i
```

<center>ATTAQUE DEMAIN A MIDI</center>
````

### Question 9

Chiffre le mot suivant avec le chiffre de Vigenère et la clé **CLE**.

Le décalage correspondant à chaque lettre de la clé est donné par son rang
dans l'alphabet, en commençant à 0 pour A.

| Lettre | A | B | C | D | E | F | G | H | I | J | K | L | M |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Décalage | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 |

| Lettre | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Décalage | 13 | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 |

```{quiz}
SECRET → {chiffre}`upgtpx`
```

````{solution}
```{list-table}
:class: text-center
:stub-columns: 1
:align: center
:widths: 10 3 3 3 3 3 3
* - Texte clair
  - S
  - E
  - C
  - R
  - E
  - T
* - Clé
  - C
  - L
  - E
  - C
  - L
  - E
* - Décalage
  - 2
  - 11
  - 4
  - 2
  - 11
  - 4
* - Texte chiffré
  - u
  - p
  - g
  - t
  - p
  - x
```
````

### Question 10

```{role} q10(quiz-select)
:options: |
: La clé doit être transmise par un canal sûr
: Le chiffrement est trop lent
: Il faut deux clés différentes
: Le message chiffré est beaucoup plus long que le message clair
```

```{quiz}
Le principal problème de la cryptographie symétrique est :
{q10}`La clé doit être transmise par un canal sûr`
```

## Notions mathématiques

### Question 11

```{quiz}
- $47 \textrm{ mod } 6 =$ {nb}`5`
- $100 \textrm{ mod } 7 =$ {nb}`2`
- $15 \textrm{ mod } 20 =$ {nb}`15`
- $36 \textrm{ mod } 4 =$ {nb}`0`
```

```{solution}
$$
& 47 \textrm{ mod } 6 = 5 & \qquad \textrm{car} \qquad & 47 = 7 \cdot 6 + 5\\
& 100 \textrm{ mod } 7 = 2 & \qquad \textrm{car} \qquad & 100 = 14 \cdot 7 + 2\\
& 15 \textrm{ mod } 20 = 15 & \qquad \textrm{car} \qquad & 15 = 0 \cdot 20 + 15\\
& 36 \textrm{ mod } 4 = 0 & \qquad \textrm{car} \qquad & 36 = 9 \cdot 4 + 0
$$
```

### Question 12

```{role} q12(quiz-select)
:options: |
: 1
: 21
: 51
: 53
```

```{quiz}
Parmi ces nombres, lequel est premier ? {q12}`53`
```

### Question 13

```{quiz}
- Si $a \textrm{ mod } 5 = 3$, on peut retrouver la valeur de $a$ de manière
  unique. {vf}`Faux`
- Multiplier deux grands nombres premiers est facile, mais retrouver ces deux
  nombres à partir de leur produit est très difficile. {vf}`Vrai`
```

## Cryptographie asymétrique

### Question 14

```{role} cle(quiz-select)
:options: |
: la clé publique d'Alice
: la clé privée d'Alice
: la clé publique de Bob
: la clé privée de Bob
```

Alice veut envoyer à Bob un message que lui seul pourra lire.

```{quiz}
- Alice chiffre le message avec {cle}`la clé publique de Bob`.
- Bob déchiffre le message avec {cle}`la clé privée de Bob`.
```

### Question 15

Alice veut envoyer à Bob un message signé, pour que Bob soit sûr qu'il vient
bien d'elle.

```{quiz}
- Alice signe le message avec {cle}`la clé privée d'Alice`.
- Bob vérifie la signature avec {cle}`la clé publique d'Alice`.
```

### Question 16

```{role} op(quiz-select)
:options: |
: Chiffrement
: Déchiffrement
: Signature
: Vérification d'une signature
```

Quelle opération est réalisée dans chaque situation ?

```{quiz}
- Bob transforme un message clair avec la clé publique de Carole :
  {op}`Chiffrement`
- Carole transforme un cryptogramme reçu avec sa propre clé privée :
  {op}`Déchiffrement`
- Bob transforme un message clair avec sa propre clé privée : {op}`Signature`
- Carole transforme un message signé avec la clé publique de Bob :
  {op}`Vérification d'une signature`
```

### Question 17

```{quiz}
- Une signature électronique garantit que personne d'autre que le
  destinataire ne peut lire le message. {vf}`Faux`
- On peut publier sa clé publique sur le web sans danger. {vf}`Vrai`
- Le chiffrement asymétrique est plus rapide que le chiffrement symétrique.
  {vf}`Faux`
- En pratique, on utilise souvent la cryptographie asymétrique pour échanger
  une clé symétrique, puis la cryptographie symétrique pour les messages.
  {vf}`Vrai`
```

### Question 18

```{role} q18(quiz-select)
:options: |
: Ta clé privée et la clé publique du prof
: Ta clé publique et la clé privée du prof
: Ta clé privée et ta clé publique
: La clé publique du prof uniquement
```

```{quiz}
Pendant le labo PGP, pour envoyer au prof un message **chiffré et signé**, tu
as besoin de : {q18}`Ta clé privée et la clé publique du prof`
```

## Système RSA

### Question 19

```{role} q19(quiz-select)
:options: |
: 2
: 3
: 4
: 5
```

```{quiz}
On a $\phi = 40$. Parmi ces valeurs, laquelle peut être choisie pour $e$ ?
{q19}`3`
```

```{solution}
$e$ doit être un nombre premier tel que $\phi \textrm{ mod } e \ne 0$.
- 2 et 5 sont premiers, mais ce sont des diviseurs de 40.
- 4 n'est pas un nombre premier.
- 3 est premier et $40 \textrm{ mod } 3 = 1 \ne 0$.
```

### Question 20

Bob choisit $p = 3$, $q = 11$ et $e = 3$ pour créer ses clés RSA.

```{quiz}
- $n =$ {nb}`33`
- $\phi =$ {nb}`20`
- $d =$ {nb}`7` (le plus petit $d$ possible)
- La clé publique de Bob est ({nb}`33`, {nb}`3`).
- La clé privée de Bob est ({nb}`3`, {nb}`11`, {nb}`7`).
```

```{solution}
1. $n = p \cdot q = 3 \cdot 11 = 33$.
2. $\phi = (p - 1) \cdot (q - 1) = 2 \cdot 10 = 20$.
3. $e = 3$ convient, car 3 est premier et $20 \textrm{ mod } 3 = 2 \ne 0$.
4. On cherche $d$, $d \ne 3$ tel que $(3 \cdot d) \textrm{ mod } 20 = 1$.\
   $d = 7 \quad \quad (3 \cdot 7) \textrm{ mod } 20 = 21 \textrm{ mod } 20 = 1$ &#9989;

La clé publique est (33, 3) et la clé privée est (3, 11, 7).
```

### Question 21

Alice veut envoyer le message "OUI" à Bob, dont la clé publique est (33, 3).
Comme dans le cours, chaque lettre est remplacée par son rang dans l'alphabet
et chiffrée séparément.

Rang de chaque lettre dans l'alphabet :

| Lettre | A | B | C | D | E | F | G | H | I | J | K | L | M |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Rang | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |

| Lettre | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Rang | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 |

```{quiz}
- O → {nb}`9`
- U → {nb}`21`
- I → {nb}`3`
```

```{solution}
O → 15, U → 21, I → 9. On calcule $c = m^{3} \textrm{ mod } 33$ :\
O: $c = 15^{3} \textrm{ mod } 33 = 3375 \textrm{ mod } 33 = 9$\
U: $c = 21^{3} \textrm{ mod } 33 = 9261 \textrm{ mod } 33 = 21$\
I: $c = 9^{3} \textrm{ mod } 33 = 729 \textrm{ mod } 33 = 3$

Le cryptogramme est 09 21 03.
```

### Question 22

Bob reçoit le cryptogramme 18 03 05. Sa clé privée est (3, 11, 7).

Rang de chaque lettre dans l'alphabet :

| Lettre | A | B | C | D | E | F | G | H | I | J | K | L | M |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Rang | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |

| Lettre | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Rang | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 |

```{quiz}
- 18 → {nb}`6`
- 03 → {nb}`9`
- 05 → {nb}`14`
- Le message en clair est : {clair}`FIN`
```

```{solution}
On calcule $m = c^{7} \textrm{ mod } (3 \cdot 11) = c^{7} \textrm{ mod } 33$ :\
18: $m = 18^{7} \textrm{ mod } 33 = 6$\
03: $m = 3^{7} \textrm{ mod } 33 = 9$\
05: $m = 5^{7} \textrm{ mod } 33 = 14$

6 → F, 9 → I, 14 → N. Le message est "FIN".
```

### Question 23

Bob reçoit le message signé 27 11. Il vient de quelqu'un dont la clé publique
est (33, 3).

Rang de chaque lettre dans l'alphabet :

| Lettre | A | B | C | D | E | F | G | H | I | J | K | L | M |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Rang | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 |

| Lettre | N | O | P | Q | R | S | T | U | V | W | X | Y | Z |
| :---: |:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|:-:|
| Rang | 14 | 15 | 16 | 17 | 18 | 19 | 20 | 21 | 22 | 23 | 24 | 25 | 26 |

```{quiz}
- 27 → {nb}`15`
- 11 → {nb}`11`
- Le message en clair est : {clair}`OK`
```

```{solution}
Pour vérifier une signature, on utilise la clé publique de l'expéditeur :
$m = c^{3} \textrm{ mod } 33$.\
27: $m = 27^{3} \textrm{ mod } 33 = 19683 \textrm{ mod } 33 = 15$\
11: $m = 11^{3} \textrm{ mod } 33 = 1331 \textrm{ mod } 33 = 11$

15 → O, 11 → K. Le message est "OK". Comme la vérification donne un message
lisible, il a bien été signé avec la clé privée correspondante.
```

### Question 24

Ève trouve sur le web la clé publique (77, 7) de Carole. Elle veut montrer que
cette clé est beaucoup trop petite pour être sûre.

```{quiz}
- $77 = p \cdot q$ avec $p =$ {nb}`7` et $q =$ {nb}`11` ($p < q$)
- $\phi =$ {nb}`60`
- La clé privée de Carole est ({nb}`7`, {nb}`11`, {nb}`43`).
```

```{solution}
1. Il faut factoriser 77 : $77 = 7 \cdot 11$, donc $p = 7$ et $q = 11$.
2. $\phi = (7 - 1) \cdot (11 - 1) = 6 \cdot 10 = 60$.
3. On cherche $d$ tel que $(7 \cdot d) \textrm{ mod } 60 = 1$.\
   $d = 43 \quad \quad (7 \cdot 43) \textrm{ mod } 60 = 301 \textrm{ mod } 60 = 1$ &#9989;

La clé privée de Carole est (7, 11, 43). Avec un petit $n$, la factorisation
est immédiate. C'est pourquoi les nombres utilisés dans la pratique ont plus
de 100 chiffres.
```
