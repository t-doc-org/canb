% Traduction française pour un usage pédagogique.
% Sources : Barendsen, Schulte et Sentance, Computer Science Education (Bloomsbury), p. 180 ;
% Harrison, How to Teach Computer Science (John Catt Educational), p. 94 et tableaux.

# Conceptions erronées des élèves

Une **conception erronée** est une idée fausse, souvent cohérente aux yeux de
l'élève, qui l'empêche de comprendre correctement un concept. Connaître les
conceptions erronées les plus fréquentes permet de les anticiper et de les
travailler explicitement en classe. Ce document en présente une sélection,
classée par domaine de l'informatique.

## Le rôle de l'enseignant·e

Les connaissances de l'enseignant·e sur les conceptions erronées probables des
élèves ont un effet sur leur apprentissage (Sadler et al., 2013). La même étude
montre aussi que la maîtrise du contenu par l'enseignant·e est une condition
nécessaire, mais pas suffisante, pour connaître ces conceptions erronées.
Autrement dit, les enseignant·e·s qui maîtrisent leur sujet risquent moins de
renforcer des conceptions erronées chez leurs élèves, surtout s'ils savent en
plus en quoi ce sujet pose problème aux élèves. D'autres aspects des compétences
de l'enseignant·e et de la conception de l'enseignement comptent aussi, bien
sûr. Par exemple, des tâches trop complexes ou peu motivantes conduisent à un
moins bon apprentissage et peuvent favoriser des conceptions erronées.

### Comment faire évoluer une conception erronée ?

L'approche classique, issue de l'enseignement des sciences, consiste à
« confronter et remplacer » (Posner et al., 1982). On fait d'abord exprimer la
conception de l'élève, puis on la met en échec par une observation qui la
contredit (conflit cognitif). On propose enfin une conception correcte, qui doit
lui paraître compréhensible, plausible et plus utile que l'ancienne. La
programmation se prête bien à cette démarche : prédire le comportement d'un
programme, puis l'exécuter, peut directement contredire la prédiction. Ma et al.
(2011) ont ainsi combiné le conflit cognitif et la visualisation de programmes
pour faire évoluer les modèles erronés de l'affectation.

Cette approche a cependant ses limites. Les conceptions des élèves ne sont pas
toujours des théories cohérentes qu'on pourrait remplacer d'un bloc. Ce sont
souvent des idées intuitives fragmentées, justes dans certains contextes, qu'il
vaut mieux affiner que rejeter (Smith et al., 1993). « Confronter et
remplacer » convient surtout aux croyances isolées, beaucoup moins aux modèles
mentaux plus profonds (Chi, 2008).

La didactique francophone propose une voie intermédiaire avec la notion
d'obstacle (Astolfi & Peterfalvi, 1993), qui comporte quatre étapes :

1. **repérer** la conception, en la faisant exprimer ;
2. la **fissurer** par un conflit réellement vécu par l'élève, ce qui suppose un
   climat où l'erreur est permise ;
3. **reconstruire** un modèle alternatif satisfaisant ;
4. le **réutiliser** dans des situations variées, car l'obstacle tend à
   réapparaître.

Pour l'enseignant·e d'informatique, cela signifie : provoquer des prédictions,
offrir un modèle explicite de la machine notionnelle, et revenir plusieurs fois
sur les mêmes notions.

## Programmation

### Débutant·e·s

Ces conceptions erronées concernent les débutant·e·s en programmation. Elles
sont regroupées selon leur origine probable.

#### Analogies avec les mathématiques

- **M1** Une variable peut contenir plusieurs valeurs ; elle peut garder
  l'« historique » des valeurs qui lui ont été affectées.
- **M3** Une variable est simplement l'association d'un nom (symbole) et d'une
  valeur. Elle n'est pas stockée dans l'ordinateur, en dehors du code du
  programme.
- **M4** Une instruction d'affectation comme `a = b + 1` stocke une équation
  en mémoire, ou stocke l'expression non évaluée `b + 1` dans la variable `a`.
- **M5** Un programme, surtout s'il contient des affectations, est
  essentiellement un ensemble d'équations.
- **M6** Plusieurs lignes d'un programme (simple et non concurrent) peuvent être
  actives en même temps.
- **M7** Une affectation comme `a = b` fonctionne dans les deux sens : elle
  échange les valeurs des deux variables.
- **M8** Un nom de variable doit être formé d'une seule lettre ; un
  identificateur plus long est interprété comme une commande (ou une partie de
  commande).

#### Vocabulaire

- **M9** La condition d'une boucle `while` est évaluée en permanence. Dès
  qu'elle devient fausse, on sort de la boucle.
- **M10** Une instruction `if` se déclenche chaque fois que sa condition devient
  vraie.

#### Analogies

- **M11** Une affectation comme `a = b` déplace la valeur d'une variable vers
  une autre. La variable source est vidée au passage.
- **M12** Les variables sont des boîtes initialement vides et n'ont pas besoin
  d'être initialisées.

#### But et structure

- **M13** Incrémenter une variable est une opération indivisible : l'élève ne
  distingue pas l'évaluation de l'expression et l'affectation du résultat.

#### Attente d'une intelligence interprétative

Pea (1986) a donné un nom à ces conceptions erronées : le *superbug*, c'est-à-dire
« l'idée qu'il existe, quelque part dans le langage de programmation, un esprit
caché doté de pouvoirs intelligents et interprétatifs ». Les élèves transposent
à la programmation les conventions d'une conversation entre humains, où
l'interlocuteur comprend l'intention et complète ce qui manque.

- **M18** Les programmes sont interprétés plus ou moins comme les phrases d'une
  conversation. En pratique, l'ordinateur ou l'environnement de programmation
  est capable de deviner l'intention du programmeur. Il peut par exemple
  compléter de lui-même une information manquante « évidente ».
- **M19** L'ordinateur ou l'environnement n'autorise pas les opérations
  déraisonnables ou inutiles.
- **M20** Le sens des noms de variables dans la langue courante influence la
  valeur affectée à chaque variable. Par exemple, `plus_petit` ne contiendra
  sûrement pas un nombre plus grand que celui de `plus_grand`.
- **M21** Le `else` est facultatif : le code qui suit un `if` est la branche
  `else` (si elle est nécessaire).
- **M22** Les deux branches, `then` et `else`, sont toujours exécutées.

#### Concepts invisibles sous le code

- **M23** Les noms de variables doivent être différents dans le code appelant et
  dans la [signature de la fonction](https://www.devx.com/open-source-zone/programming-basics-the-function-signature/).
- **M24** Le passage de paramètres crée un lien direct entre les noms de
  variables de l'appel et ceux de la signature.

#### Machines notionnelles implicites

Une **machine notionnelle** (*notional machine*) n'est pas un ordinateur
physique, mais une abstraction du logiciel et du matériel. C'est l'ensemble des
possibilités qu'un langage ou un environnement de programmation offre au
programmeur. Comprendre une machine notionnelle permet de répondre à des
questions comme :

- Que peut faire ce système de programmation pour moi ?
- Qu'est-ce qu'il ne peut pas faire, ou ne fera pas ?
- Comment le travail se répartit-il entre moi et le système, c'est-à-dire entre
  l'humain qui donne les instructions et la machine qui les exécute
  mécaniquement ?
- Quels changements chacune de mes instructions provoque-t-elle dans le système
  pendant l'exécution du programme ?
- Comment raisonner sur ce que fait mon programme ?

Des langages et des paradigmes différents demandent des machines notionnelles
différentes. Par exemple, une machine notionnelle pour Python peut faire
intervenir l'allocation de mémoire, le flux d'exécution, les références et la
pile d'appels. Une machine notionnelle pour la programmation fonctionnelle pure
peut être plus simple. Même les programmes écrits dans un seul langage peuvent
être vus à travers différentes machines notionnelles.

Sans modèle explicite de la machine, les débutant·e·s inventent leurs propres
« théories bizarres » sur la façon dont les programmes sont exécutés
(du Boulay, 1986). Selon du Boulay, « un programme en cours d'exécution est une
sorte de mécanisme, et il faut beaucoup de temps pour apprendre la relation
entre un programme écrit sur la page et le mécanisme qu'il décrit » ; il compare
cette tâche à comprendre le fonctionnement d'un moteur de voiture à partir d'un
schéma. Il recommande une machine notionnelle simple, rendue observable par un
outil concret : une « boîte de verre » plutôt qu'une « boîte noire »
(du Boulay, O'Shea et Monk, 1989). Les visualiseurs d'exécution pas à pas, comme
Python Tutor, vont dans ce sens.

Mayer (1989) a montré que des élèves à qui l'on fournissait un modèle concret de
la machine résolvaient mieux certains types de problèmes que des élèves sans ce
modèle. Sorva (2013) recommande donc de faire de la machine notionnelle un
**objectif d'apprentissage explicite** et de l'aborder en classe. Pourtant, dans
une enquête auprès de 457 enseignant·e·s de premiers cours de programmation,
seuls 29 % l'abordaient explicitement (Schulte et Bennedsen, 2006).

#### Variété limitée des programmes rencontrés

- **M36** Les arguments d'une fonction doivent être des
  [littéraux](https://fr.wikipedia.org/wiki/Litt%C3%A9ral_(programmation)) ou
  des constantes.
- **M37** Les comparaisons doivent apparaître dans une condition, et non par
  exemple dans un `return` ou une affectation. Les booléens sont perçus comme
  une partie des structures de contrôle, et non comme des valeurs au même titre
  que les nombres.
- **M41** Les sous-programmes sont exécutés dans l'ordre où ils sont définis
  dans le texte du programme.

### Avancé·e·s

Ces conceptions erronées concernent surtout la programmation orientée objet et
la récursivité, qui ne sont en général pas abordées à l'école secondaire.

#### Analogies avec les mathématiques

- **M2** Deux objets qui ont la même valeur pour un attribut `nom` ou `id` sont
  le même objet.

#### But et structure

- **M14** La variable qui référence un objet est confondue avec l'objet ; le nom
  de la variable fait partie de l'objet. Une affectation change le nom des
  objets.
- **M15** Un objet ne peut être référencé que par une seule variable.
- **M16** Déclarer une variable crée aussi un objet du type correspondant.
- **M17** Un attribut dont la valeur diffère pour chaque objet, comme `nom` ou
  `id`, sert d'identifiant aux objets.

#### Concepts invisibles sous le code

- **M25** Les variables locales d'une méthode sont des membres de l'objet dont
  on a appelé la méthode. Ou inversement : les membres d'un objet sont
  réinitialisés à chaque appel de méthode.
- **M26** Une fonction récursive est essentiellement une boucle à l'intérieur
  d'une seule exécution de la fonction.
- **M27** Affecter un objet à une variable stocke (toujours) les données de
  l'objet dans la variable.
- **M28** Une affectation copie les propriétés d'un objet source vers un objet
  cible.
- **M29** Deux objets dans le même état sont le même objet.
- **M30** Un objet est essentiellement un morceau de code, difficile à
  distinguer d'une classe.
- **M31** Une classe est une collection d'objets, ou un conteneur d'objets.
- **M32** L'instanciation consiste seulement à exécuter le corps du
  constructeur, sans allocation de mémoire.
- **M33** Il suffit de définir un constructeur pour que des objets soient créés.

#### Variété limitée des programmes rencontrés

- **M35** Les attributs d'un objet doivent être des nombres ou des données
  primitives semblables.
- **M38** On ne peut créer qu'une seule instance de chaque classe.
- **M39** Une méthode ne peut être appelée qu'une seule fois (sur chaque objet,
  ou en tout).
- **M40** Une classe ne peut avoir qu'une seule méthode, ou une seule variable
  membre.

```{note}
La numérotation est celle de la source, qui ne comporte pas de M34.
```

### Conceptions erronées et réalité

````{admonition} Doublons avec la liste M1–M41
:class: attention dropdown noprint instructor

Ces conceptions erronées figurent déjà dans la section « Débutant·e·s » ci-
dessus (M6, M7, M9, M10, M18, M20, M36 et M37). Les tableaux sont conservés pour
leurs exemples de code.

**Exécution des programmes**

```{list-table}
:header-rows: 1
:widths: 45 55

* - Conception erronée
  - Réalité
* - **Plusieurs lignes d'un programme peuvent être actives en même temps, en
    particulier une série d'affectations.**
  - Les programmes sont exécutés séquentiellement, de haut en bas. Une seule
    ligne de code est exécutée à la fois, et on n'y revient pas (sauf par un
    changement explicite du flux d'exécution, comme une boucle ou un
    branchement).
* - **L'ordinateur peut deviner l'intention du programmeur à partir
    d'instructions incomplètes, comme :**

    ```python
    score + 1
    if age >= 18
    "entrez"
    else "interdit"
    ```
  - Les instructions doivent être complètes et syntaxiquement correctes. Les
    exemples ci-contre devraient donc s'écrire (en Python) :

    ```python
    score = score + 1
    if age >= 18:
        print("entrez")
    else:
        print("interdit")
    ```
* - **Une affectation comme `a = b` fonctionne dans les deux sens : elle échange
    les variables, ou les rend égales pendant toute l'exécution du programme.**
  - Une affectation comporte deux parties : la partie à droite de l'opérateur
    d'affectation (`=`) est une expression qui est évaluée, puis le résultat est
    stocké dans la variable de gauche. L'enseigner explicitement permet
    d'éviter cette conception erronée.
* - **Un nom de variable parlant indique à l'ordinateur ce qu'elle peut
    contenir : `plus_petit` ne contiendra donc jamais une valeur supérieure à
    `plus_grand`.**
  - Les noms de variables n'ont aucun sens pour l'ordinateur : `plus_petit` peut
    tout à fait recevoir une valeur supérieure à `plus_grand`.
* - **Une instruction `if` est active en permanence et se déclenche dès que sa
    condition est remplie.**
  - Une instruction `if` est exécutée une seule fois : si la condition est vraie
    au moment de l'exécution, le programme prend la branche correspondante.
    L'instruction n'a ensuite plus aucun effet sur l'exécution.
* - **Une boucle `while` s'arrête à l'instant où sa condition devient fausse,
    quelle que soit l'instruction qui la rend fausse.**
  - La condition d'une boucle `while` est évaluée à l'entrée de la boucle, puis
    chaque fois que le bloc de code de la boucle se termine, et non en
    permanence pendant l'exécution de ce bloc.
```

**Fonctions et booléens**

```{list-table}
:header-rows: 1
:widths: 45 55

* - Conception erronée
  - Réalité
* - **Les arguments d'une fonction doivent être des littéraux ou des constantes
    (sauf si les élèves ont vu des exemples particuliers, comme la première
    ligne ici).**

    ```python
    r = int(input("rayon ?"))
    a = aire(r)
    print(a)
    ```
  - Les arguments d'un appel de fonction peuvent en général être n'importe
    quelle expression, y compris un autre appel de fonction. Ceci est donc
    valide en Python :

    ```python
    print(aire(int(input("rayon ?"))))
    ```
* - **Les comparaisons ne peuvent apparaître que dans une condition. Elles ne
    peuvent pas apparaître ailleurs, par exemple dans un `return` ou une
    affectation.**

    ```python
    if age < 18 or enfant == True:
        reduction = True
    else:
        reduction = False
    if mot_de_passe == "été" then:
        return True
    else:
        return False
    ```
  - Les booléens sont des valeurs calculables, comme les nombres. On peut donc
    les utiliser de la même façon dans des expressions, à droite d'une
    affectation ou dans un `return`.

    ```python
    reduction = age < 18 or enfant
    return mot_de_passe == "été"
    ```
```
````

#### Validation et tests

```{list-table}
:header-rows: 1
:widths: 45 55

* - Conception erronée
  - Réalité
* - **La validation consiste à « vérifier que l'entrée est correcte ».**
  - La validation consiste à « vérifier que l'entrée est plausible ».

    Les élèves confondent la validation avec la vérification, l'assainissement
    (*sanitisation*) et l'authentification. Il faut expliquer clairement ces
    processus et les comparer.
* - **Il suffit de tester le code qu'on a modifié.**
  - Quand ils ajoutent ou modifient du code, les élèves testent souvent la
    nouvelle partie sans tenir compte du reste du programme.

    Tester le code inchangé pour s'assurer que son comportement n'a pas changé
    s'appelle un **test de non-régression**, et il faut l'encourager.
* - **On teste seulement les résultats attendus.**

    **Par exemple, après avoir écrit ce code qui reconnaît les voyelles :**

    ```python
    l = input("lettre ?")
    if l in "aeiou":
        print("voyelle")
    else:
        print("consonne")
    ```

    **les débutant·e·s risquent de tester uniquement avec des voyelles seules,
    ou uniquement avec des minuscules seules, ou uniquement avec des lettres
    seules de casse mixte.**
  - Les tests devraient couvrir un échantillon de toutes les valeurs d'entrée
    possibles : des données normales, limites et erronées (aussi appelées
    valides, extrêmes ou invalides).

    Les élèves pensent souvent que le but des tests est de vérifier que le
    programme fonctionne comme prévu quand on entre les données attendues.

    Ils envisagent rarement que des données erronées soient entrées : par
    exemple des lettres dans la mauvaise casse, une entrée du mauvais type ou
    une valeur hors limites.
* - **Les tests en boîte noire sont réalisés par des pirates : confusion avec le
    piratage *black hat*.**
  - Les tests en boîte noire et en boîte blanche sont souvent confondus avec le
    piratage *black hat* et *white hat*. Les élèves pensent alors que les
    testeurs en boîte noire sont malveillants.

    En réalité, tester en boîte noire signifie simplement traiter le programme
    comme une boîte noire dont on ne voit pas l'intérieur : on vérifie donc que
    les sorties correspondent à celles attendues pour des entrées données.
* - **Le débogage et les tests ne sont nécessaires que parce que nous sommes des
    programmeurs débutants.**
  - Les élèves pensent souvent qu'ils doivent déboguer et tester leur code parce
    qu'ils sont débutants, et qu'avec l'expérience ils écriront du code parfait
    du premier coup.

    Il est important de souligner que le débogage et les tests sont une partie
    essentielle du développement de nouveaux programmes, et que les
    programmeurs expérimentés en font beaucoup !

    Coder en direct devant la classe, puis déboguer et tester, est très utile
    ici.
```

#### Langages et traducteurs

```{list-table}
:header-rows: 1
:widths: 45 55

* - Conception erronée
  - Réalité
* - **L'ordinateur « comprend » simplement le code.**
  - Pour exécuter un langage de haut niveau, il faut un programme traducteur,
    interpréteur ou compilateur, qui produit du code machine pour cet
    ordinateur. Le code machine binaire n'est toujours pas « compris » : il est
    traité par des circuits logiques dépourvus d'intelligence.
* - **Un programme est toujours une suite d'instructions.**
  - C'est vrai pour les langages impératifs, mais pas pour les langages
    déclaratifs comme LISP, Prolog et Haskell.

    Malheureusement, on enseigne généralement cette conception erronée comme un
    « mal nécessaire » dès l'école primaire, car la notion de paradigme de
    programmation est trop abstraite à ce niveau. En vue des A-levels (examens
    de fin du secondaire II en Angleterre), on peut la « désapprendre » par une
    brève initiation à la programmation fonctionnelle en KS4 (Years 9 et 10,
    élèves d'environ 13 à 15 ans).
* - **Python est le seul langage, ou tous les ordinateurs comprennent Python.**
  - Il existe de nombreux langages.

    Cette idée vient du manque de contact avec d'autres langages. Il est utile
    d'en aborder brièvement d'autres en KS4, par exemple VBA dans Excel si
    l'école dispose de Microsoft Office, JavaScript dans App Lab sur
    [code.org](https://code.org), ou le tutoriel JavaScript de W3Schools.
* - **Java = JavaScript.**
  - Expliquer l'histoire des deux langages devrait dissiper cette conception
    erronée.
* - **Les traducteurs se trouvent dans la ROM.**
  - Les traducteurs sont des utilitaires du logiciel système.

    Les élèves ne réalisent souvent pas que les compilateurs et les
    interpréteurs sont des logiciels système, qui ne sont généralement pas
    fournis avec le système d'exploitation, mais téléchargés et installés sur
    la mémoire de masse quand on en a besoin.
```

#### Pseudocode et algorithmes

```{list-table}
:header-rows: 1
:widths: 45 55

* - Conception erronée
  - Réalité
* - **Le pseudocode a une syntaxe précise.**
  - Le pseudocode suit la structure générale d'un langage de programmation,
    mais n'a pas de syntaxe précise.

    Les organismes d'examen britanniques ont brouillé les pistes en publiant des
    guides de « syntaxe du pseudocode » et en exigeant des réponses d'examen
    dans un format précis. Utilisez toujours des termes comme « langage de
    référence de l'examen » pour les distinguer du pseudocode.
* - **Un algorithme est un organigramme, un morceau de pseudocode ou un
    programme.**
  - Les organigrammes, le pseudocode et les programmes sont différentes
    représentations d'un algorithme, qui existe en tant que concept à part
    entière.

    Un programme est la mise en œuvre d'un algorithme sur un ordinateur, sous
    forme de processus automatique.
* - **On peut échanger deux éléments d'un tableau avec deux affectations, une
    qui copie vers la gauche et une qui copie vers la droite :**

    ```python
    a[i] = a[i+1]
    a[i+1] = a[i]
    ```
  - Il faut une variable temporaire pour stocker l'une des valeurs, sinon elle
    est perdue, écrasée par la première affectation.

    ```python
    temp = a[i]
    a[i] = a[i+1]
    a[i+1] = temp
    ```

    Ce type de conception erronée vient d'une compréhension fragile de
    l'exécution des programmes. Il est utile de développer la compréhension
    d'une « machine notionnelle » (voir plus haut).

    Remarque : Python (comme d'autres langages) permet d'affecter des valeurs à
    plusieurs variables en une seule ligne. On peut donc écrire le code
    ci-dessous, mais ce n'est pas la même chose que la conception erronée
    décrite.

    ```python
    a[i], a[i+1] = a[i+1], a[i]
    ```

    Dans cette instruction, les deux expressions à droite du signe égal sont
    d'abord évaluées, puis affectées aux éléments de gauche. Ce code échange
    donc bien deux éléments du tableau en une seule ligne.
* - **Lors d'un algorithme de tri, l'ordinateur « voit » tous les éléments à la
    fois et peut donc placer un élément au bon endroit en une seule
    opération.**
  - Un programme ne peut comparer que deux valeurs à la fois. Dans le tri par
    insertion, par exemple, l'élément courant doit être comparé à chaque
    élément à sa gauche jusqu'à ce qu'il soit bien placé. Cela peut demander de
    nombreuses comparaisons.

    Cette conception erronée apparaît lors de l'enseignement des algorithmes de
    tri, quand tout le tableau est visible en même temps pour les élèves.

    On peut la prévenir avec une animation qui cache tous les éléments et ne
    révèle un élément que lorsque l'algorithme le « regarde ». Les ressources
    du NCCE (*National Centre for Computing Education*, au Royaume-Uni)
    contiennent une telle animation.
* - **Les algorithmes classiques ont une seule mise en œuvre correcte.**
  - Les algorithmes classiques sont des concepts. Ils décrivent le principe d'un
    processus, mais la mise en œuvre détaillée d'un algorithme peut varier.

    Par exemple, dans la recherche dichotomique, peu importe si, pour trouver le
    milieu d'une sous-liste contenant un nombre pair d'éléments, on prend
    l'élément de gauche ou celui de droite. Aucun choix n'est le bon, et la mise
    en œuvre est généralement arbitraire.

    Le tri rapide (*quicksort*, vu aux A-levels) répartit les données à
    plusieurs reprises en deux sous-listes, de part et d'autre d'un « pivot ».
    Le choix du pivot est là aussi arbitraire, même si certains manuels
    proposent le premier élément et d'autres l'élément du milieu du tableau.
    Aucun choix n'est plus correct que l'autre.
```

## Architecture des ordinateurs

```{list-table}
:header-rows: 1
:widths: 45 55

* - Conception erronée
  - Réalité
* - **La mémoire virtuelle est un stockage dans le cloud.**
  - La mémoire virtuelle est un espace du disque dur utilisé pour étendre la
    mémoire vive (RAM) disponible.
* - **Mémoire principale = interne, mémoire de masse = externe.**
  - La mémoire principale est toujours interne à l'ordinateur, mais la mémoire
    de masse peut être interne (par exemple le disque HDD/SSD principal) ou
    externe (disque SSD/HDD portable ou clé USB).
* - **Cache = registres.**
  - Le cache est une mémoire à usage général. Les registres sont des mémoires à
    usage spécifique qui ne contiennent que quelques octets chacun ; ils
    comprennent le compteur de programme (PC), le registre d'adresse mémoire
    (MAR), le registre de données mémoire (MDR) et l'accumulateur.

    Remarque : certaines ressources pédagogiques confondent les registres et le
    cache.
* - **Mémoire principale = mémoire volatile.**
  - La mémoire principale comprend la RAM, la ROM et le cache. Ce qui la rend
    « principale », c'est que le processeur peut la lire directement, pendant
    le cycle de recherche, décodage et exécution des instructions. La ROM, bien
    sûr, n'est pas volatile.
* - **Plus de mémoire de masse améliore les performances.**
  - Plus de RAM peut parfois améliorer les performances, mais pas plus de
    mémoire de masse.
* - **Ajouter de la RAM augmente toujours les performances.**
  - Plus de RAM n'augmente pas les performances s'il n'en manquait pas au
    départ. Si la mémoire virtuelle est rarement utilisée, ajouter de la RAM ne
    servira à rien.
* - **La mémoire de masse est utilisée quand la RAM est pleine.**
  - La mémoire de masse n'est pas une extension de la RAM : c'est un stockage
    non volatil à long terme. Elle contient le système d'exploitation et les
    applications.

    La mémoire virtuelle est un cas particulier, et les élèves doivent bien
    comprendre qu'elle ne signifie pas que la mémoire de masse existe pour le
    cas où la RAM est pleine.

    Dans les ordinateurs modernes, seules les instructions de démarrage se
    trouvent dans la ROM ; les autres programmes sont sur la mémoire de masse.
* - **Un smartphone est un système embarqué.**
  - Les smartphones sont des ordinateurs à usage général, car ils exécutent de
    nombreuses applications différentes. Une montre connectée est aussi
    généralement considérée comme un ordinateur à usage général, car elle
    exécute en général des applications.
* - **Un processeur à 3 GHz est plus performant qu'un processeur à 2 GHz.**
  - Trop de facteurs influencent les performances d'un ordinateur pour pouvoir
    l'affirmer. Il faut tenir compte du ou des programmes qui seront exécutés et
    de leur aptitude au multithreading, de la quantité d'entrées-sorties qu'ils
    effectuent, de la mémoire dont ils ont besoin, et de la possibilité de
    confier certains traitements à un coprocesseur comme le processeur
    graphique (GPU). D'autres facteurs comptent aussi : le nombre de cœurs, la
    taille du cache et la quantité de RAM.
* - **RISC est meilleur que CISC (ou l'inverse).**
  - Les processeurs RISC sont en général plus petits et consomment moins
    d'énergie, mais demandent plus de RAM et des logiciels plus complexes. Les
    deux architectures conviennent à des applications différentes : aucune
    n'est meilleure que l'autre dans tous les cas.
```

## Représentation des données

```{list-table}
:header-rows: 1
:widths: 45 55

* - Conception erronée
  - Réalité
* - **Le binaire ne peut représenter que les nombres décimaux jusqu'à 255.**
  - Le binaire est le système de numération en base 2, et comme toute base, il
    peut représenter n'importe quel nombre.

    Cette conception erronée vient du manque de contact avec des nombres plus
    grands que 255, qui occupent plusieurs octets.

    Présentez le binaire dans le contexte des bases de numération. Expliquez
    qu'il existe en tant que base en dehors de l'informatique, et montrez
    comment il peut représenter des nombres supérieurs à 255.
* - **Dans un nombre de huit bits, les valeurs de position commencent à 1 à
    gauche et vont jusqu'à 128 à droite.**
  - Les nombres binaires s'écrivent de droite à gauche par ordre croissant de
    valeur de position, comme dans toute autre base issue de la numération
    arabe. Le bit de poids faible, qui représente les unités, est tout à
    droite.

    Cette conception erronée vient, elle aussi, d'une explication insuffisante
    du binaire comme système de numération positionnel, analogue au décimal.

    De nombreuses comparaisons entre décimal et binaire, des discussions sur la
    valeur de position, beaucoup de démonstrations par l'enseignant·e et un
    tableau de position avec les valeurs écrites au-dessus, disponible pendant
    les premiers exercices, devraient l'éviter.
* - **Le nombre de couleurs possibles dans une image matricielle est égal au
    nombre de bits par pixel : quatre bits donnent donc quatre couleurs.**
  - Le nombre de couleurs possibles se calcule par $2^{\text{profondeur}}$,
    où la profondeur est le nombre de bits par pixel. Quatre bits donnent donc
    $2^4 = 16$ couleurs, et huit bits $2^8 = 256$ couleurs.

    On peut travailler cette conception erronée avec des activités utilisant de
    faibles profondeurs, de un à quatre bits, pour que les élèves voient que le
    nombre de combinaisons de bits, donc de couleurs, double à chaque bit
    ajouté.
* - **Débit binaire = fréquence d'échantillonnage.**
  - En audio numérique, la fréquence d'échantillonnage est le nombre de fois où
    l'on échantillonne un signal analogique pendant une durée donnée,
    généralement mesurée en échantillons par seconde, ou hertz.

    Le débit binaire est la quantité de bits produite pendant une durée donnée,
    généralement une seconde. Il se calcule par **profondeur × fréquence
    d'échantillonnage**. (La profondeur est souvent appelée taille
    d'échantillon : le nombre de bits par échantillon.)
* - **Coder signifie utiliser un code secret pour protéger les données.**
  - Un code est simplement un moyen de transformer une information en données
    numériques. L'ASCII est un code, tout comme le code de couleur RVB. Le
    nombre obtenu peut être stocké et traité par l'ordinateur.

    Les codes ne sont pas des chiffrements : ils sont conçus pour être
    transparents et entièrement réversibles. Les chiffrements servent à rendre
    une information secrète ; il s'agit alors de chiffrement, et non de
    codage.
```

## Logique

```{list-table}
:header-rows: 1
:widths: 45 55

* - Conception erronée
  - Réalité
* - **NON est un opérateur binaire, qui prend deux entrées : on voit par exemple
    l'expression A NON B.**
  - NON est un opérateur unaire : il ne prend qu'un argument. A NON B n'est donc
    pas valide, alors que NON B et A ET NON B le sont.

    Rappelez aux élèves que NON inverse simplement l'entrée : 0 → 1 et 1 → 0. Il
    ne prend donc qu'une seule entrée. Certains sites web font cette erreur ;
    si les élèves trouvent A NON B en ligne, expliquez-leur qu'il s'agit d'une
    erreur.
* - **Les ordinateurs comprennent le binaire.**
  - Les ordinateurs traitent simplement des signaux électriques à l'aide de
    portes logiques. Un agencement soigné de ces portes permet de manipuler des
    nombres binaires.

    Cette conception erronée peut venir des premières explications sur le
    fonctionnement des ordinateurs, qui utilisent la formule « les ordinateurs
    ne comprennent pas les mots, ils ne comprennent que le binaire ».
* - **Confusion entre ET et OU.**
  - ET exige que les deux entrées valent 1 pour que la sortie vaille 1. OU
    exige qu'une seule entrée vaille 1 pour que la sortie vaille 1.

    On peut éviter la confusion entre portes à deux entrées en discutant souvent
    d'expressions booléennes. Il est utile d'employer les mots ET et OU de façon
    explicite, par exemple : la porte ET exige que les entrées A et B soient
    vraies pour que la sortie soit vraie ; la porte OU exige que A ou B soit
    vraie pour que la sortie soit vraie.

    Remarque : aux niveaux GCSE et A-level (examens de fin de scolarité
    obligatoire et de fin du secondaire II en Angleterre), on ne traite que des
    portes à deux entrées, mais il existe des circuits avec des portes à 3, 4 et
    8 entrées.
```

## Logiciels

```{list-table}
:header-rows: 1
:widths: 45 55

* - Conception erronée
  - Réalité
* - **Confusion entre applications et utilitaires, par exemple « le traitement
    de texte est un utilitaire ».**
  - Les traitements de texte, tableurs et bases de données peuvent sembler peu
    passionnants à certains élèves, mais ce sont des applications, pas des
    utilitaires. Les élèves doivent bien comprendre que les utilitaires
    assurent le bon fonctionnement de l'ordinateur, mais n'ont pas d'autre
    usage concret.
* - **Confusion entre fonctions du système d'exploitation et utilitaires, par
    exemple « le gestionnaire de fichiers est un utilitaire ».**
  - La gestion des fichiers est une fonction du système d'exploitation. Les
    principales fonctions d'un système d'exploitation sont l'ordonnancement des
    processus, la gestion de la mémoire, la gestion des fichiers, les
    entrées-sorties, l'interface utilisateur et la sécurité. Les utilitaires
    comprennent la défragmentation, le chiffrement, les sauvegardes et les
    diagnostics.
* - **Le système d'exploitation est stocké dans la ROM, ou confusion entre le
    système d'exploitation et le BIOS.**
  - Dans les ordinateurs de bureau et portables modernes, le système
    d'exploitation se trouve sur la mémoire de masse. Le BIOS est stocké dans
    la ROM ; il contient les instructions qui font charger le système
    d'exploitation depuis la mémoire de masse.

    Remarque : sur les appareils mobiles, le système d'exploitation est
    généralement stocké dans de la mémoire flash, dans une zone appelée « ROM »,
    qui peut être mise à jour. Les fabricants mettent généralement à jour le
    système d'exploitation par une mise à jour à distance (*over-the-air*).
* - **Confusion entre fabricant de l'appareil et système d'exploitation : par
    exemple, Samsung, Google et Apple cités comme systèmes d'exploitation.**
  - Android est un système d'exploitation publié par Google. Google fabrique
    aussi des téléphones.

    Samsung est un fabricant de téléphones, qui vend des téléphones
    préinstallés avec Android.

    Apple est un fabricant de téléphones, qui produit l'iPhone, lequel
    fonctionne avec le système d'exploitation iOS.

    Les élèves utilisent des smartphones, mais confondent parfois le fabricant,
    le modèle, la marque ou même le navigateur.
```

## Réseaux

```{list-table}
:header-rows: 1
:widths: 45 55

* - Conception erronée
  - Réalité
* - **Les réseaux pair à pair ont forcément une topologie maillée ou
    partiellement maillée, comme sur une image de
    [cette page Wikipédia](https://en.wikipedia.org/wiki/Peer-to-peer).**
  - Le modèle de service du réseau (pair à pair ou client-serveur) est
    indépendant de la topologie : un réseau en étoile peut être pair à pair, de
    même qu'un réseau maillé peut suivre un modèle client-serveur.

    Le modèle de service est un concept abstrait, sans lien avec les connexions
    physiques. Utiliser le même type de schéma pour la topologie et pour le
    modèle de service peut donc créer cette confusion.
* - **Le serveur est au centre d'un réseau en étoile, comme sur une image de
    [cette page Wikipédia](https://en.wikipedia.org/wiki/Peer-to-peer).**
  - L'appareil au centre d'un réseau en étoile est un commutateur (*switch*). Le
    serveur n'est qu'un appareil parmi d'autres, sur l'une des « branches » de
    l'étoile.

    En voulant illustrer un concept abstrait, Wikipédia, comme certains
    manuels, a intégré cette conception erronée.
* - **Internet = Web : les termes sont employés l'un pour l'autre, ou le
    mauvais terme est utilisé.**
  - Internet est un réseau mondial de réseaux. Le *World Wide Web* est
    l'ensemble des sites web, applications et services qui utilisent Internet
    pour rendre des services.
* - **Navigateur = moteur de recherche : par exemple, dire « Google » pour
    désigner le navigateur Google Chrome.**
  - Le navigateur est un programme qui lit le HTML et l'affiche à l'écran. Edge,
    Firefox, Safari et Chrome sont des navigateurs. Google désigne le moteur de
    recherche Google, ou l'entreprise qui l'exploite.
* - **Accès à Internet = Wi-Fi.**
  - Le Wi-Fi, ou réseau sans fil, relie simplement un appareil à un réseau local
    (LAN) par un point d'accès sans fil (WAP). Le réseau local peut aussi
    partager une connexion à Internet, mais pas forcément.
* - **Google est la « page d'accueil » du Web, et toute utilisation du Web
    commence par une recherche.**
  - La barre d'adresse « omnibox » des navigateurs les plus courants accepte une
    URL ou un terme de recherche. Mais saisir une URL bien formée ne lance pas
    de recherche : cela ouvre directement une connexion au site web de cette
    URL.

    Cette approche de l'omnibox a probablement favorisé l'idée que toute
    requête vers un site web commence par une recherche.
* - **Les SMS et les appels mobiles utilisent les données Internet.**
  - Les SMS (*Short Message Service*) passent par les réseaux de téléphonie
    cellulaire classiques, appelés GSM (*Global System for Mobile
    Communications*). Le SMS a été lancé en 1992. Les messageries fondées sur le
    protocole Internet (IP), comme iMessage et WhatsApp, sont arrivées bien
    plus tard.
* - **Les réseaux virtuels fournissent un accès à distance sécurisé (confusion
    avec les réseaux privés virtuels, ou VPN).**
  - Un réseau virtuel est un réseau logiciel qui fonctionne sur un réseau
    matériel. Les administrateurs réseau découpent souvent le réseau physique
    en réseaux virtuels pour des raisons de sécurité et de performance. Le
    trafic d'un VLAN n'est pas visible depuis un autre VLAN, même s'ils
    partagent le même matériel.

    Par exemple, le réseau local physique d'une université peut être découpé en
    ordinateurs des étudiant·e·s et ordinateurs du personnel, chacun dans un
    réseau virtuel différent appelé VLAN, alors qu'ils sont tous reliés au même
    réseau physique.

    Une entreprise peut diviser son réseau local en VLAN séparés pour
    l'ingénierie, la finance et les ressources humaines.

    C'est tout à fait différent d'un VPN, qui crée un « tunnel » chiffré à
    travers Internet pour donner un accès sécurisé à un réseau géré depuis un
    lieu distant. Les VPN servent au personnel en télétravail pour accéder au
    réseau local du bureau. Le VPN n'a rien à voir avec le VLAN : ils partagent
    seulement le mot « virtuel ».
```

## Sécurité

```{list-table}
:header-rows: 1
:widths: 45 55

* - Conception erronée
  - Réalité
* - **Une attaque DDoS vole des données.**
  - Une attaque par déni de service distribué (DDoS) vise uniquement la
    disponibilité : un serveur web est mis hors service pour que les vrais
    utilisateurs ne puissent plus s'y connecter. Aucune donnée n'est volée,
    modifiée ou supprimée.
* - **Confusion entre virus, ver et cheval de Troie, ou idée que « tout est un
    virus ».**
  - Le terme « virus informatique » a frappé l'imagination du public il y a des
    décennies ; il est donc utilisé pour tous les logiciels malveillants. Il a
    donné son nom aux logiciels de protection, les antivirus, alors que ces
    programmes protègent contre de nombreux types de logiciels malveillants,
    dont les vers et les chevaux de Troie.
* - **Le piratage est acceptable si l'intention est bonne.**
  - Souvent appelée « l'illusion du hacker », cette idée amène des élèves à
    penser que sonder les défenses d'un site web ou essayer de deviner un mot de
    passe n'est ni contraire à l'éthique ni illégal. Ils doivent savoir que ce
    n'est pas parce qu'une chose est possible, ou qu'on ne veut nuire à
    personne, qu'elle est permise.
* - **Confusion entre test d'intrusion, analyse de vulnérabilités et
    investigation réseau.**
  - Un test d'intrusion est réalisé par un hacker éthique, qui essaie de
    pénétrer dans le système pour déterminer les faiblesses à corriger.

    L'analyse de vulnérabilités consiste à utiliser un outil automatique pour
    détecter des correctifs logiciels manquants ou d'autres failles de
    sécurité. Elle est en général effectuée régulièrement par l'équipe
    informatique.

    L'investigation réseau (*network forensics*) a lieu pendant une attaque :
    elle consiste à analyser les paquets de données transmis sur le réseau pour
    déterminer d'où vient l'attaque, comment elle est menée et quelles données
    ont pu être volées.
* - **Le « cadenas » garantit qu'un site web est digne de confiance.**
  - Le cadenas à côté de la barre d'adresse du navigateur indique qu'une
    connexion sécurisée a été établie entre le navigateur et le serveur web par
    HTTPS. Cela signifie seulement que le trafic est protégé de bout en bout
    contre les attaques passives (écoute) par des tiers. Cela ne dit presque
    rien de la fiabilité du site.

    N'importe quel hébergeur peut acheter un certificat numérique et obtenir
    ainsi le symbole du « cadenas ». Les sites qui diffusent des logiciels
    malveillants utilisent HTTPS aussi souvent que les sites légitimes.

    L'importance du « cadenas » a longtemps été surestimée, sans doute parce
    qu'il y a 20 ans, HTTPS était rare et les sites malveillants ne s'en
    souciaient pas : chercher le cadenas était alors utile.

    Les enseignant·e·s devraient expliquer la portée très limitée du symbole du
    cadenas et préciser qu'il n'est pas un indicateur fiable de confiance.
* - **Le chiffrement empêche l'interception ou la lecture des messages.**
  - Le chiffrement empêche seulement la compréhension des messages. Sur un point
    d'accès sans fil public, par exemple, tous les paquets de données sont
    visibles par toute personne à portée, et un pirate pourrait facilement les
    intercepter. Mais si HTTPS est utilisé, les paquets seront
    incompréhensibles, car les données sont brouillées.
* - **Des portes dérobées dans le chiffrement « réservées aux gentils » sont
    possibles.**
  - Si une porte dérobée était un jour mise en place dans un système de
    chiffrement, elle serait découverte et exploitée par des criminels.

    Le chiffrement est indispensable au commerce en ligne et à la protection de
    la vie privée. Les forces de l'ordre ont plaidé pour des portes dérobées,
    c'est-à-dire un moyen prétendument simple de déchiffrer les messages, connu
    seulement de la police et des services de renseignement, pour lutter contre
    le crime et le terrorisme. Mais les experts techniques s'accordent à dire
    qu'une « porte dérobée réservée aux gentils » ne peut pas exister.
* - **Tous les chiffrements sont des chiffrements par substitution.**
  - Le chiffrement moderne repose sur des modèles mathématiques complexes qui
    évitent la simple substitution, facile à casser par l'analyse des
    fréquences.

    Le chiffre de César est facile à expliquer et même à programmer. Mais il est
    important de présenter d'autres chiffrements, pour que les élèves se
    rendent compte de ce qu'est un chiffrement robuste.
* - **Confusion entre le rôle d'un antivirus et celui d'un pare-feu.**
  - Un antivirus vérifie si un fichier contient des signatures de virus quand il
    est téléchargé ou ouvert.

    Un pare-feu bloque le trafic suspect, mais ne recherche pas de virus. Si un
    utilisateur télécharge volontairement un fichier infecté, le pare-feu le
    laissera passer. Avec un peu de chance, l'antivirus le détectera et
    empêchera son ouverture.
* - **Le *Data Protection Act* ou le RGPD fait du piratage un délit (confusion
    avec le *Computer Misuse Act*).**
  - Le *Data Protection Act* (loi britannique sur la protection des données)
    décrit comment les données personnelles peuvent être collectées, utilisées
    et stockées. Il pose le principe que les données doivent être conservées
    de façon sécurisée, mais ne mentionne pas le piratage.

    Le *Computer Misuse Act* (loi britannique sur l'usage abusif des
    ordinateurs) décrit les infractions de piratage et de diffusion de virus,
    ainsi que les peines associées.

    Les élèves confondent souvent les différentes lois. Des exercices fondés sur
    des scénarios, où on leur demande « Quelle loi a été enfreinte ici ? »,
    peuvent aider.
```

## Enjeux et impacts

```{note}
Les lois citées dans ce tableau et dans la section précédente sont
britanniques. En Suisse, on pensera plutôt à la loi fédérale sur la protection
des données (LPD), au Code pénal (art. 143bis, accès indu à un système
informatique), à la loi sur le droit d'auteur (LDA) et à la loi sur la
transparence (LTrans).
```

```{list-table}
:header-rows: 1
:widths: 45 55

* - Conception erronée
  - Réalité
* - **Le DPA ou le RGPD fait du piratage un délit.**
  - C'est le *Computer Misuse Act* qui fait du piratage (accès non autorisé) un
    délit.
* - **Le DPA fait du piratage d'œuvres un délit.**
  - C'est le *Copyright, Designs and Patents Act* (loi britannique sur le droit
    d'auteur, les dessins et modèles et les brevets) qui fait du piratage
    d'œuvres (copie ou partage sans licence de la propriété intellectuelle) un
    délit.
* - **Confusion entre enjeux éthiques, juridiques, culturels et
    environnementaux.**
  - L'éthique désigne les principes moraux, ou les règles, qui guident les
    attitudes et les comportements d'une personne, par exemple la sécurité du
    public.

    Les enjeux juridiques concernent la légalité des actes, c'est-à-dire s'ils
    sont contraires à la loi ou non, par exemple le respect du DPA.

    Les enjeux culturels sont ceux qui touchent la nature et la culture de la
    société, par exemple la fracture numérique ou les algorithmes biaisés.

    Les enjeux environnementaux sont ceux qui ont un effet sur l'environnement :
    par exemple, le télétravail réduit les trajets, mais les déchets
    électroniques polluent et causent des problèmes de santé dans les pays en
    développement.

    Certains enjeux se recoupent : par exemple, exporter des déchets
    électroniques vers l'Afrique est à la fois illégal et contraire à
    l'éthique.
* - **Des portes dérobées dans le chiffrement « réservées aux gentils » sont
    possibles.**
  - Les experts en sécurité estiment que des portes dérobées seraient vite
    découvertes par des pirates, ce qui rendrait le chiffrement inutile.
* - **Les cookies volent des données ou servent à stocker des mots de passe.**
  - Les cookies ne peuvent pas accéder aux données du disque dur ; ils ne
    peuvent donc rien lire. Ce sont des fichiers en texte brut ; ils ne
    seraient donc jamais utilisés pour des données de sécurité.
* - **Confusion entre partie prenante, actionnaire et consommateur.**
  - Une partie prenante est toute personne concernée par un enjeu, y compris le
    consommateur, le vendeur, l'actionnaire et la société.
* - **Les téléphones jetés libèrent du CO₂.**
  - Les téléphones jetés présentent bien un risque pour l'environnement, car
    des métaux lourds peuvent s'infiltrer dans l'eau locale. Mais l'impact
    carbone vient surtout des combustibles fossiles brûlés pour produire
    l'énergie nécessaire à la fabrication des téléphones de remplacement.
* - **Le FOI permet aux personnes de demander les données qui les
    concernent.**
  - C'est le DPA qui le permet. Le *Freedom of Information Act* (loi britannique
    sur la liberté de l'information) donne aux citoyen·ne·s le droit de
    demander des informations sur les activités des organismes publics.
* - **La fracture numérique comprend les problèmes de compatibilité des
    logiciels.**
  - La fracture numérique concerne l'inégalité d'accès aux technologies, pas la
    compatibilité des logiciels.
* - **L'écart entre jeunes et personnes âgées ne relève pas de la fracture
    numérique.**
  - Les jeunes ont en général un meilleur accès aux technologies, grâce à leur
    familiarité avec elles et par leur travail. L'écart entre jeunes et
    personnes âgées relève donc bien de la fracture numérique.
* - **Les licences Creative Commons ne permettent ni le partage ni les œuvres
    dérivées.**
  - Toutes les licences CC autorisent le partage. Les licences BY-ND et
    BY-NC-ND n'autorisent pas les œuvres dérivées : l'œuvre ne peut pas être
    modifiée.

    (Ces connaissances ne sont exigées que par certains organismes d'examen.)
```

## Sources

- Astolfi, J.-P., & Peterfalvi, B. (1993). Obstacles et construction de
  situations didactiques en sciences expérimentales. *Aster*, *16*, 103–141.
  https://www.persee.fr/doc/aster_0297-9373_1993_num_16_1_1012
- Chi, M. T. H. (2008). Three types of conceptual change: Belief revision,
  mental model transformation, and categorical shift. In S. Vosniadou (Ed.),
  *International handbook of research on conceptual change* (pp. 61–82).
  Routledge.
- du Boulay, B. (1986). Some difficulties of learning to program. *Journal of
  Educational Computing Research*, *2*(1), 57–73.
- du Boulay, B., O'Shea, T., & Monk, J. (1989). The black box inside the glass
  box: Presenting computing concepts to novices. In E. Soloway & J. C. Spohrer
  (Eds.), *Studying the novice programmer* (pp. 431–446). Lawrence Erlbaum.
- Harrison, A. J. (2022). *How to teach computer science: Parable, practice and
  pedagogy*. John Catt Educational.
- Lewis, C. M., Clancy, M. J., & Vahrenhold, J. (2019). Student knowledge and
  misconceptions. In S. A. Fincher & A. V. Robins (Eds.), *The Cambridge
  handbook of computing education research* (pp. 773–800). Cambridge
  University Press. https://doi.org/10.1017/9781108654555.028
- Ma, L., Ferguson, J., Roper, M., & Wood, M. (2011). Investigating and
  improving the models of programming concepts held by novice programmers.
  *Computer Science Education*, *21*(1), 57–80.
  https://doi.org/10.1080/08993408.2011.554722
- Mayer, R. E. (1989). The psychology of how novices learn computer
  programming. In E. Soloway & J. C. Spohrer (Eds.), *Studying the novice
  programmer* (pp. 129–159). Lawrence Erlbaum.
- Pea, R. D. (1986). Language-independent conceptual "bugs" in novice
  programming. *Journal of Educational Computing Research*, *2*(1), 25–36.
- Posner, G. J., Strike, K. A., Hewson, P. W., & Gertzog, W. A. (1982).
  Accommodation of a scientific conception: Toward a theory of conceptual
  change. *Science Education*, *66*(2), 211–227.
  https://doi.org/10.1002/sce.3730660207
- Robins, A. V. (2019). Novice programmers and introductory programming. In
  S. A. Fincher & A. V. Robins (Eds.), *The Cambridge handbook of computing
  education research* (pp. 327–376). Cambridge University Press.
  https://doi.org/10.1017/9781108654555.013
- Sadler, P. M., Sonnert, G., Coyle, H. P., Cook-Smith, N., & Miller, J. L.
  (2013). The influence of teachers' knowledge on student learning in middle
  school physical science classrooms. *American Educational Research Journal*,
  *50*(5), 1020–1049. https://doi.org/10.3102/0002831213477680
- Schulte, C., & Bennedsen, J. (2006). What do teachers teach in introductory
  programming? In *Proceedings of the second international workshop on
  computing education research* (pp. 17–28). ACM.
- Sentance, S., Barendsen, E., & Schulte, C. (Eds.). (2018). *Computer science
  education: Perspectives on teaching and learning in school*. Bloomsbury
  Academic.
- Smith, J. P., diSessa, A. A., & Roschelle, J. (1993). Misconceptions
  reconceived: A constructivist analysis of knowledge in transition. *Journal
  of the Learning Sciences*, *3*(2), 115–163.
  https://doi.org/10.1207/s15327809jls0302_1
- Sorva, J. (2013). Notional machines and introductory programming education.
  *ACM Transactions on Computing Education*, *13*(2), Article 8.
  https://doi.org/10.1145/2483710.2483713
