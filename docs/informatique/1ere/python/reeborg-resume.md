% Copyright 2026 Brice Canvel <brccvl@proton.me>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# Reeborg - résumé

## Instructions du robot

Ces instructions ne fonctionnent qu'avec le robot :

```{code-block} python
avance()
```

```{code-block} python
tourne_a_gauche()
```

## Instructions Python

Ces instructions fonctionnent dans n'importe quel programme Python.

### Répéter des instructions

```{code-block} python
for i in range(x):
    instructions à répéter
```

Il faut décaler la ou les instructions à répéter de 4 espaces vers la droite.

Par exemple, pour d'abord avancer 3 fois et ensuite tourner une fois à gauche :

```{code-block} python
for i in range(3):
    avance()
tourne_a_gauche()
```

Mais pour avancer et tourner à gauche 3 fois :

```{code-block} python
for i in range(3):
    avance()
    tourne_a_gauche()
```

### Définir une nouvelle commande

```{code-block} python
def nouvelle_commande():
    instructions de la commande
```

Il faut décaler la ou les instructions que la commande doit exécuter de 4
espaces vers la droite et placer la commande en début de programme.

Pour ensuite utiliser la commande :

```{code-block} python
nouvelle_commande()
```

Un exemple très utile pour tourner à droite :

```{code-block} python
def tourne_a_droite():
    for i in range(3):
        tourne_a_gauche()
```

## Attention

- Chaque détail a son importance : une parenthèse qui manque
  (`tourne_a_gauche(`), un espace mal placé (`tourne_a_ gauche()`), une
  instruction mal écrite (`toune_a_gauche()`), etc.

- N'oublie pas les décalages après `def` et `for`.

- Les nouvelles commandes `def` sont placées en début de programme.
