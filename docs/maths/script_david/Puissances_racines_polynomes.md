# Puissances, racines et polynômes

**Mathématiques 1ère année**

$$\begin{array}{rcl}
3 &=& \sqrt{9} \\
  &=& \sqrt{1+8} \\
  &=& \sqrt{1+2 \cdot 4} \\
  &=& \sqrt{1+2 \cdot \sqrt{16}} \\
  &=& \sqrt{1+2 \cdot \sqrt{1+15}} \\
  &=& \sqrt{1+2 \cdot \sqrt{1+3 \cdot 5}} \\
  &=& \sqrt{1+2 \cdot \sqrt{1+3 \cdot \sqrt{25}}} \\
  &=& \sqrt{1+2 \cdot \sqrt{1+3 \cdot \sqrt{1+4 \cdot 6}}} \\
  &=& \sqrt{1+2 \cdot \sqrt{1+3 \cdot \sqrt{1+4 \cdot \sqrt{36}}}} \\
  &=& \sqrt{1+2 \cdot \sqrt{1+3 \cdot \sqrt{1+4 \cdot \sqrt{1+5 \cdot 7}}}} \\
  &=& \sqrt{1+2 \cdot \sqrt{1+3 \cdot \sqrt{1+4 \cdot \sqrt{1+5 \cdot \sqrt{49}}}}} \\
  &=& \dots
\end{array}$$

*Le nombre 3 exprimé comme enchaînement infini de racines carrées.*

*David Rueda — 2020/21*

---

## Table des matières

1. [Puissances](#1-puissances)
2. [Racines et exposants rationnels](#2-racines-et-exposants-rationnels)
3. [Polynômes](#3-polynômes)
4. [Factorisation](#4-factorisation)
5. [Applications de la factorisation](#5-applications-de-la-factorisation)
6. [Répétitions](#6-répétitions)

---

# 1. Puissances

## 1.1 Découvrir

À l'école secondaire tu as appris à calculer avec des puissances. Peux-tu déterminer la réponse à ces calculs ?

a) $2^6=$ &ensp; b) $4^2=$ &ensp; c) $(-3)^3=$ &ensp; d) $10^5=$ &ensp; e) $-2^4=$ &ensp; f) $(-2)^4=$ &ensp; g) $1.5^2=$ &ensp; h) $20^0=$

Explique pourquoi les résultats de e) et de f) ne sont pas identiques.

Effectue les deux calculs suivants.

a) $2^7=$ &ensp; b) $2^3 \cdot 2^4=$

Que constates-tu ? Peux-tu établir une formule pour la multiplication de deux puissances ayant la même base ?

$$a^n \cdot a^m =$$

Complète le tableau suivant.

![Tableau des puissances de 2](Bilder/tabelle_hochzahlen.png)

Que peut-on dire des puissances de $2$ avec un exposant nul ou négatif ?

Quelle est la définition générale de $2^{-n}$ ?

$$2^{-n}=$$

---

## 1.2 Théorie

> **Définition**
>
> La ***n*-ième puissance** d'un nombre $a$ est le produit de $n$ facteurs $a$ :
>
> $$a^n = \underbrace{a \cdot a \cdot a \cdot \ldots \cdot a}_{n \text{ facteurs}} \quad \text{avec } a \in \mathbb{R} \text{ et } n \in \mathbb{N}.$$
>
> Le nombre $a$ est appelé **base** et $n$ est appelé **exposant** de la puissance. L'expression $a^n$ se lit « $a$ puissance $n$ ».
>
> De plus
> $$a^0 = 1 \quad \text{pour tout } a \neq 0.$$

> **Remarques**
>
> 1. L'expression $0^0$ n'est pas défini !
> 2. La définition des puissances nous donne le résultat suivant
>    $$(-a)^n = \begin{cases} a^n & \text{si } n \text{ est pair} \\ -a^n & \text{si } n \text{ est impair} \end{cases}$$
> 3. Les puissances sont à calculer avant les multiplications. C'est pour cela que le signe $-$ ne doit pas être pris en considération pour une puissance s'il n'y a pas de parenthèses.
>    $$-a^n = (-1) \cdot a^n$$

**Exemples :**

a) $(-2)^4 = 2^4 = 16$ &ensp; b) $(-3)^3 = -3^3 = -27$ &ensp; c) $-2^4 = -16$

Il est facile de voir que $a^n \cdot a^m = a^{n+m}$, car

$$a^n \cdot a^m = \underbrace{a \cdot \ldots \cdot a}_{n \text{ fois}} \cdot \underbrace{a \cdot \ldots \cdot a}_{m \text{ fois}} = \underbrace{a \cdot \ldots \cdot a \cdot a \cdot \ldots \cdot a}_{n+m \text{ fois}} = a^{n+m}$$

En insérant $-n$ à la place de $m$ comme exposant de la deuxième puissance on obtient

$$a^n \cdot a^{-n} = a^{n+(-n)} = a^0 = 1$$

Grâce à ce résultat il est facile de définir les puissances avec des exposants négatifs.

> **Définition**
>
> Une **puissance avec exposant négatif** $a^{-n}$ est l'inverse de la puissance $a^n$, c'est-à-dire
> $$a^{-n} = \frac{1}{a^n}$$

**Exemples :**

a) $2^{-2} = \dfrac{1}{2^2} = \dfrac{1}{4}$ &ensp; b) $5 \cdot b^{-3} = \dfrac{5}{b^3}$ &ensp; c) $\dfrac{1}{6^{-2}} = 6^2 = 36$

Grâce à ces définitions nous obtenons les règles de calcul suivantes pour les puissances.

> **Théorème — Règles de calcul pour les puissances**
>
> Soient $a, b \in \mathbb{R} \setminus \{0\}$ et $n, m \in \mathbb{Z}$, alors
>
> 1. $a^n \cdot a^m = a^{n+m}$ &ensp;&ensp;&ensp; *Exemple :* $a^3 \cdot a^4 = a^{3+4} = a^7$
>
> 2. $\dfrac{a^n}{a^m} = a^{n-m}$ &ensp;&ensp;&ensp; *Exemple :* $\dfrac{x^6}{x^3} = x^{6-3} = x^3$
>
> 3. $\left(a^n\right)^m = a^{n \cdot m}$ &ensp;&ensp;&ensp; *Exemple :* $\left(b^4\right)^5 = b^{4 \cdot 5} = b^{20}$
>
> 4. $(a \cdot b)^n = a^n \cdot b^n$ &ensp;&ensp;&ensp; *Exemple :* $(x^2 y^3)^5 = x^{10} y^{15}$
>
> 5. $\left(\dfrac{a}{b}\right)^n = \dfrac{a^n}{b^n}$ &ensp;&ensp;&ensp; *Exemple :* $\left(\dfrac{a^4}{b^2}\right)^3 = \dfrac{a^{12}}{b^6}$

Les puissances de $10$ et la notation scientifique pour les nombres sont des outils très importants pour les mathématiques et la physique.

> **Définition**
>
> **Notation scientifique :** Tout nombre $x$ peut être écrit comme le produit d'un nombre $a$ entre $1$ et $10$ (ou entre $-10$ et $-1$ si le nombre $x$ est négatif) et une puissance de $10$, c'est-à-dire
>
> $$x = a \cdot 10^n \quad \text{avec } 1 \leq |a| < 10 \text{ et } n \in \mathbb{Z}$$

---

La notation scientifique est très utile pour le calcul avec de très grands ou très petits nombres. Elle peut aussi être utilisée pour la transformation d'unités.

> **Remarque**
>
> La calculatrice exprime aussi les très grands et très petits nombres à l'aide de la notation scientifique (car l'écran est limité). Sur l'écran s'affiche dans ce cas la lettre $E$ suivi d'un nombre entier qui représente l'exposant de la puissance de $10$.

---

## 1.3 Exercices

**1.** Simplifie à l'aide des règles de calcul pour les puissances et écris le résultat comme une seule puissance.

a) $x^2 \cdot x^6=$ &ensp; b) $b^7 \cdot b^5=$ &ensp; c) $\left(a^{3n}\right)^{-2}=$ &ensp; d) $a^2 \cdot a^5 \cdot a^3=$ &ensp; e) $\left(x^{4n}\right)^{-5}=$ &ensp; f) $\dfrac{a^2}{a^5}=$

g) $(b^6)^3=$ &ensp; h) $\left(\dfrac{6^6}{6^4}\right) \cdot 6^2=$ &ensp; i) $a^{n+1} \cdot a^{n-1}=$ &ensp; j) $x^{3m+3} \cdot x^{-m+2}=$ &ensp; k) $\dfrac{x^4}{x^4}=$ &ensp; l) $c^4 \cdot c^3 \cdot c^{-5}=$

m) $\left((-5)^4\right)^5=$ &ensp; n) $2^n \cdot 5^n=$ &ensp; o) $4^{-2} \cdot a^{-2}=$ &ensp; p) $(-4)^n \cdot (-3)^n=$ &ensp; q) $10^x \cdot 0.5^x=$ &ensp; r) $9^{-n} : 3^{-n}=$

s) $10^m : 5^m=$ &ensp; t) $(4c)^5 : (2c)^5=$ &ensp; u) $\left(\dfrac{x}{2}\right)^4 : \left(\dfrac{x}{6}\right)^4=$

**2.** Transforme pour ne plus avoir d'exposants négatifs.

a) $a^{-3}=$ &ensp; b) $\dfrac{2}{x^{-3}}=$ &ensp; c) $\left(\dfrac{2}{3}\right)^{-1}=$ &ensp; d) $\left(\dfrac{x}{y}\right)^{-4}=$ &ensp; e) $\left(\dfrac{a^2 b^3}{n^4 m}\right)^{-3}=$

**3.** Simplifie le plus possible.

a) $a^4 a^{28}=$ &ensp; b) $x^{-25}x^{14}=$ &ensp; c) $u^{-4}u^{-7}u=$ &ensp; d) $t^{x-4} : t^{x-6}=$ &ensp; e) $\left(-x^6\right)^2=$ &ensp; f) $\left(b^{4n-1}\right)^2 \cdot b^{-n-1}=$

g) $\left(m^x n^y\right)^3=$ &ensp; h) $\left(k^3\right)^5 \cdot k^5=$ &ensp; i) $\left(a^x b\right)^3 \cdot a^x=$ &ensp; j) $\dfrac{h^{-4}}{h^{-7}}=$ &ensp; k) $\dfrac{n^0}{n^{-4}}=$ &ensp; l) $\dfrac{z^5}{z^{3-6n}}=$

m) $\left(\dfrac{\pi}{2}\right)^{-1}=$ &ensp; n) $\dfrac{54a^3 y^2}{18a^{-4}y^8}=$ &ensp; o) $\dfrac{16u^{-3}w^{-2}}{128u^{-5}w^0}=$ &ensp; p) $\dfrac{(-a)^6}{(-a)^3}=$ &ensp; q) $\left(a^{-3}b^5\right)^3=$

r) $\dfrac{\left(x^4 y^3\right)^n}{\left(x^2 y^4\right)^{2n-1}}=$ &ensp; s) $\left(u^5 v^{-8} x\right)^{-4}=$ &ensp; t) $\left(\dfrac{3}{4}\right)^{-5} : \left(\dfrac{3}{4}\right)^{-3}=$ &ensp; u) $\left(\dfrac{-2}{5}\right)^3 : \left(\dfrac{-2}{5}\right)^{-1}=$

---

**4.** Détermine le résultat (sans calculatrice).

a) $(3+6)-5-2(2+1)^2=$ &ensp; b) $\dfrac{1}{5 \cdot 4^0} + \left(\dfrac{15}{14}\right)^{-1} \cdot \dfrac{1}{7}=$ &ensp; c) $\dfrac{1}{12}+ \left(\dfrac{2}{3}\right)^{-1}:(-6)^2=$

d) $1-2^2:\dfrac{3^{-1}+6^{-1}}{2}=$ &ensp; e) $2^2 \cdot (2-4)^5 -2^2 \cdot 4=$ &ensp; f) $3+2 \cdot 2^2 +4 \cdot 3 -(6-1)^2=$

**5.** Résous à l'aide de la notation scientifique et des règles de calcul des puissances. Écris le résultat final en notation scientifique.

a) $0.004 \cdot 500=$ &ensp; b) $60\,000\,000\,000 : 2\,000=$ &ensp; c) $4 \cdot 10^{10} \cdot 4 \cdot 10^{-19}=$ &ensp; d) $6 \cdot 10^1 \cdot 7 \cdot 10^{12} \cdot 4 \cdot 10^{-5}=$

e) $3\,000 \cdot 0.00000005 \cdot 20\,000=$ &ensp; f) $1 \cdot 10^{-5} \cdot 9 \cdot 10^5 \cdot 2=$ &ensp; g) $10 \cdot 10^{-5} \cdot 10^3 \cdot 10^5 \cdot 19=$ &ensp; h) $\left(2 \cdot 10^3\right)^4 \cdot \left(9 \cdot 10^5\right)^2=$

i) $200^4 \cdot 1\,000^2=$ &ensp; j) $0.0003^4 : 0.0001^5=$

**6.** La vitesse de la lumière est $2.998 \cdot 10^8\,m/s$.

a) Combien de temps faut-il aux rayons du soleil pour atteindre la terre ? (distance moyenne entre la terre et le soleil : $1.495 \cdot 10^8\,km$)

b) Vue de la Terre, Sirius est l'étoile la plus brillante du ciel après le Soleil. La lumière de cette étoile voyage pendant 9 ans pour atteindre la terre. Quelle est la distance entre Sirius et la terre ?

c) Le centre de notre Voie Lactée se trouve à une distance de $3 \cdot 10^{17}\,km$ de la terre. Combien de temps ferait une navette spatiale (d'un film de science-fiction) pour atteindre le centre de la Voie Lactée si elle pouvait voyager trois fois plus vite que la lumière ?

**7.** Transforme dans l'unité demandée.

a) $400\,dm^2$ en $mm^2$. &ensp; b) $6\,mm^3$ en $km^3$. &ensp; c) $78\,000\,000$ litres en $km^3$. &ensp; d) $9\,000\,cm^2$ en $m^2$.

**8.** Le corps humain renferme environ 5 litres de sang. Il y a 5 millions de globules rouges et $7\,000$ globules blancs par $mm^3$ de sang.

a) Combien notre corps renferme-t-il de globules rouges ? Combien de globules blancs ?

b) La forme d'un globule rouge est assimilée à celle d'un cylindre de hauteur $3\,\mu m$. Si on empile tous ces globules rouges pour former une colonne, quelle est la hauteur de la colonne obtenue ?

---

## 1.4 Solutions

**1.**

a) $x^8$ &ensp; b) $b^{12}$ &ensp; c) $a^{-6n}$ &ensp; d) $a^{10}$ &ensp; e) $x^{-20n}$ &ensp; f) $a^{-3}$ &ensp; g) $b^{18}$ &ensp; h) $6^4 = 1296$ &ensp; i) $a^{2n}$ &ensp; j) $x^{2m+5}$

k) $1$ &ensp; l) $c^2$ &ensp; m) $5^{20}$ &ensp; n) $10^n$ &ensp; o) $(4a)^{-2}$ &ensp; p) $12^n$ &ensp; q) $5^x$ &ensp; r) $3^{-n}$ &ensp; s) $2^m$ &ensp; t) $2^5 = 32$ &ensp; u) $3^4 = 81$

**2.**

a) $\dfrac{1}{a^3}$ &ensp; b) $2x^3$ &ensp; c) $\dfrac{3}{2}$ &ensp; d) $\dfrac{y^4}{x^4}$ &ensp; e) $\dfrac{n^{12}m^3}{a^6 b^9}$

**3.**

a) $a^{32}$ &ensp; b) $x^{-11}$ &ensp; c) $u^{-10}$ &ensp; d) $t^2$ &ensp; e) $x^{12}$ &ensp; f) $b^{7n-3}$ &ensp; g) $m^{3x}n^{3y}$ &ensp; h) $k^{20}$ &ensp; i) $a^{4x}b^3$ &ensp; j) $h^3$

k) $n^4$ &ensp; l) $z^{2+6n}$ &ensp; m) $\dfrac{2}{\pi}$ &ensp; n) $3a^7 y^{-6}$ &ensp; o) $\dfrac{1}{8}u^2 w^{-2}$ &ensp; p) $-a^3$ &ensp; q) $a^{-9}b^{15}$ &ensp; r) $x^2 y^{-5n+4}$

s) $u^{-20}v^{32}x^{-4}$ &ensp; t) $\dfrac{16}{9}$ &ensp; u) $\dfrac{16}{625}$

**4.**

a) $-14$ &ensp; b) $\dfrac{1}{3}$ &ensp; c) $\dfrac{1}{8}$ &ensp; d) $-15$ &ensp; e) $-144$ &ensp; f) $-2$

**5.**

a) $2$ &ensp; b) $3 \cdot 10^7$ &ensp; c) $1.6 \cdot 10^{-8}$ &ensp; d) $1.68 \cdot 10^{10}$ &ensp; e) $3$ &ensp; f) $1.8 \cdot 10^1$ &ensp; g) $1.9 \cdot 10^5$ &ensp; h) $1.296 \cdot 10^{25}$ &ensp; i) $1.6 \cdot 10^{15}$ &ensp; j) $8.1 \cdot 10^5$

**6.**

a) env. 8 min. 19 sec. &ensp; b) env. $8.5 \cdot 10^{13}\,km$. &ensp; c) env. $10\,577$ années.

**7.**

a) $4\,000\,000\,mm^2$ &ensp; b) $6 \cdot 10^{-18}\,km^3$ &ensp; c) $0.000078\,km^3$ &ensp; d) $0.9\,m^2$

**8.**

a) $25\,000\,000$ millions de globules rouges et $35\,000$ millions de globules blanches.

b) $75\,000\,km$

---

# 2. Racines et exposants rationnels

## 2.1 Découvrir

Les opérations de base de l'arithmétique apprises dans ton parcours scolaire ont toujours une opération réciproque. La réciproque de l'addition est la soustraction et la réciproque de la multiplication est la division. Quelle est l'opération réciproque d'une puissance à exposant entier ? Si par exemple $4^3 = 64$, alors comment peut-on obtenir la base $4$ de la puissance à partir de $64$ ? Décris cette opération réciproque.

Que faut-il rajouter du côté gauche de l'équation pour qu'elle soit juste ?

a) $\square \; a^2 = a$ &ensp; b) $\square \; 4^3 = 4$ &ensp; c) $\square \; x^4 = x$ &ensp; d) $\square \; s^{10} = s$

Peux-tu résoudre ces calculs ?

a) $\sqrt[3]{8}=$ &ensp; b) $\sqrt[3]{-8}=$ &ensp; c) $\sqrt[4]{16}=$ &ensp; d) $\sqrt[4]{-16}=$ &ensp; e) $\sqrt[6]{1}=$ &ensp; f) $\sqrt[6]{-1}=$

Que constates-tu par rapport à ces six calculs ?

Peut-on avoir une fraction dans l'exposant d'une puissance ? Supposons que c'est possible. Quel est le résultat du calcul ci-dessous dans ce cas si on utilise les règles de calcul pour les puissances ?

$$\left(a^{\frac{1}{2}}\right)^2 =$$

Quel est le résultat de ce calcul ?

$$\left(\sqrt{a}\right)^2 =$$

Que constates-tu ?

---

## 2.2 Théorie

Dans ton parcours scolaire, tu as déjà effectué des calculs avec des racines carrées. Le théorème de Pythagore par exemple peut être formulé avec une racine carrée : *« Dans un triangle rectangle l'hypoténuse est égale à la racine carrée de la somme des cathètes au carré. »* Mathématiquement ceci signifie

$$\sqrt{a^2+b^2}=c$$

si $a$ et $b$ sont les cathètes et $c$ l'hypoténuse d'un triangle rectangle.

La racine carrée d'un nombre positif $a$ est définie comme étant le nombre positif $x$, qui élevé au carré donne $a$ :

$$\sqrt{a}=x \Longleftrightarrow x^2=a \quad \text{où } a,x \geq 0$$

> **Remarque**
>
> La racine carrée d'un nombre ne possède qu'**UNE** solution (positive) et ne doit pas être confondue avec les solutions d'une équation du type
> $$x^2 = a$$
> qui elle possède **DEUX** solutions
> $$x_1 = \sqrt{a} \quad \text{et} \quad x_2 = -\sqrt{a}$$

La définition d'une racine quelconque est directement liée à la définition des puissances.

> **Définition**
>
> La **racine *n*-ième** d'un nombre $a \geq 0$ est le nombre $x \geq 0$, qui, élevé à la $n$-ième puissance, donne $a$ :
>
> $$\sqrt[n]{a} = x \Longleftrightarrow x^n = a \quad \text{avec } a, x \geq 0$$
>
> Pour la racine, le nombre $n$ est appelé **indice** et le nombre $a$ est appelé **radical**.

---

**Exemples :**

a) $\sqrt[4]{81} = 3$, car $3^4 = 81$ &ensp; b) $\sqrt[5]{32} = 2$, car $2^5 = 32$ &ensp; c) $\sqrt[6]{x^{12}} = x^2$, car $\left(x^2\right)^6 = x^{12}$

> **Remarques**
>
> 1. Pour la racine carrée l'indice $2$ n'est souvent pas écrit ($\sqrt{\phantom{x}} = \sqrt[2]{\phantom{x}}$).
> 2. Pour effectuer la $n$-ième racine sur ta calculatrice tu insères tout d'abord $n$ suivi de $\sqrt[x]{\phantom{x}}$ se trouvant dans le menu **MATH**.
> 3. Les racines sont les opérations réciproques des puissances qui nous permettent de déterminer les bases (les opérations réciproques nous permettant de déterminer les exposants seront traitées l'année scolaire prochaine).
> 4. La définition ci-dessus se restreint sur les radicaux positifs. Il est possible d'étendre cette définition dans certains cas pour des radicaux négatifs :
>    - Si $n$ est **pair**, alors $\sqrt[n]{\phantom{x}}$ n'est que défini pour des radicaux positifs, car il n'est pas possible d'obtenir un nombre négatif en l'élevant à une puissance paire.
>    - Si $n$ est **impair**, alors $\sqrt[n]{\phantom{x}}$ est défini aussi pour des radicaux négatifs. La racine est, dans ce cas, aussi un nombre négatif.
>
>    **Exemples :**
>
>    a) $\sqrt[4]{-16} = \varnothing$, car aucun nombre élevé à la puissance 4 est négatif.
>
>    b) $\sqrt[5]{-32} = -2$, car $(-2)^5 = -32$.
>
>    c) $\sqrt[3]{-27} = -3$, car $(-3)^3 = -27$.

Il existe des règles de calcul pour les racines :

> **Théorème — Règles de calcul pour les racines**
>
> Soient $a, b \in \mathbb{R} \setminus \{0\}$ et $n, m \in \mathbb{Z}$, alors
>
> 1. $\sqrt[n]{a \cdot b} = \sqrt[n]{a} \cdot \sqrt[n]{b}$ &ensp;&ensp;&ensp; *Exemple :* $\sqrt[3]{a^6 b^3} = \sqrt[3]{a^6} \cdot \sqrt[3]{b^3} = a^2 b$
>
> 2. $\sqrt[n]{\dfrac{a}{b}} = \dfrac{\sqrt[n]{a}}{\sqrt[n]{b}}$ &ensp;&ensp;&ensp; *Exemple :* $\sqrt{\dfrac{16}{25}} = \dfrac{\sqrt{16}}{\sqrt{25}} = \dfrac{4}{5}$
>
> 3. $\sqrt[n]{\sqrt[m]{a}} = \sqrt[n \cdot m]{a}$ &ensp;&ensp;&ensp; *Exemple :* $\sqrt[4]{\sqrt[2]{a^{24}}} = \sqrt[8]{a^{24}} = a^3$
>
> 4. $\sqrt[n]{a^m} = \left(\sqrt[n]{a}\right)^m$ &ensp;&ensp;&ensp; *Exemple :* $\sqrt[3]{8^5} = \left(\sqrt[3]{8}\right)^5 = 2^5 = 32$

---

Dans le chapitre précédent nous avons défini les puissances avec exposant entier. À présent nous allons étendre cette définition pour des exposants rationnels (des fractions). Comme tu as pu le constater dans l'exercice d'introduction, nous obtenons les résultats suivants en utilisant les règles de calcul des puissances et la définition de la racine carrée :

$$\left(a^{\frac{1}{2}}\right)^2 = a \quad \text{et} \quad \left(\sqrt{a}\right)^2 = a$$

Nous obtenons donc une définition pour des puissances avec exposant $\frac{1}{2}$ :

$$a^{\frac{1}{2}} = \sqrt{a}$$

Il est possible de généraliser cette réflexion pour toute racine :

$$a^{\frac{1}{n}} = \sqrt[n]{a}\text{, car } \left(a^{\frac{1}{n}}\right)^n = a$$

Grâce à ce résultat nous pouvons donc définir les puissances à exposants rationnels.

> **Définition**
>
> Pour tout $a > 0$, $m \in \mathbb{Z}$ et $n \in \mathbb{Z}^*$ on a
> $$a^{\frac{m}{n}} = \left(a^m\right)^{\frac{1}{n}} = \sqrt[n]{a^m} \quad \text{ou} \quad a^{\frac{m}{n}} = \left(a^{\frac{1}{n}}\right)^m = \left(\sqrt[n]{a}\right)^m.$$

**Exemples :**

a) $27^{\frac{2}{3}} = \left(\sqrt[3]{27}\right)^2 = 3^2 = 9$

b) $25^{\frac{3}{2}} = \left(\sqrt{25}\right)^3 = 5^3 = 125$

c) $9^{0.5} = 9^{\frac{1}{2}} = \sqrt{9} = 3$

d) $8^{-\frac{1}{3}} = \dfrac{1}{8^{\frac{1}{3}}} = \dfrac{1}{\sqrt[3]{8}} = \dfrac{1}{2}$

Les règles de calcul pour les puissances restent valables pour les puissances à exposants rationnels. C'est pourquoi il est possible de résoudre et simplifier des expressions mathématiques qui contiennent des puissances et des racines. Pour cela il faut transformer les racines en puissances de l'intérieur vers l'extérieur tout en utilisant les règles de calcul des puissances.

---

> **Remarque importante**
>
> En essayant d'étendre la définition des puissances à exposants rationnels pour des bases négatifs, nous tombons sur des contradictions. Par exemple
> $$(-1)^{\frac{1}{3}} = \sqrt[3]{-1} = -1$$
> et
> $$(-1)^{\frac{2}{6}} = \sqrt[6]{(-1)^2} = \sqrt[6]{1} = 1$$
> même si $\frac{1}{3} = \frac{2}{6}$.

---

## 2.3 Exercices

**1.** Calcule et simplifie les expressions suivantes à l'aide des règles de calcul pour les racines et contrôle ensuite ton résultat avec ta calculatrice.

a) $\sqrt{12}\,\sqrt{3}=$ &ensp; b) $\sqrt[3]{2}\,\sqrt[3]{4}=$ &ensp; c) $\sqrt{5}\,\sqrt{\dfrac{1}{35}}=$ &ensp; d) $\sqrt{5^6}=$ &ensp; e) $\sqrt{3^2+4^2}=$ &ensp; f) $\dfrac{3}{\sqrt{15}}\sqrt{\dfrac{5}{6}}=$

g) $\sqrt{\sqrt{16}}=$ &ensp; h) $\sqrt[3]{\sqrt{8}}=$ &ensp; i) $-\sqrt{\dfrac{28}{5}}\,\sqrt{\dfrac{35}{4}}=$

**2.** Effectue les calculs et contrôle ensuite avec ta calculatrice.

a) $9^{-2}=$ &ensp; b) $9^0=$ &ensp; c) $9^{-\frac{1}{2}}=$ &ensp; d) $8^{\frac{2}{3}}=$ &ensp; e) $10^{-5}=$ &ensp; f) $16^{-\frac{3}{2}}=$ &ensp; g) $49^{0.5}=$ &ensp; h) $100^0=$

i) $25^{-\frac{1}{2}}=$ &ensp; j) $4^{2.5}=$ &ensp; k) $81^{0.25}=$ &ensp; l) $27^{-\frac{2}{3}}=$

**3.** Transforme les puissances avec exposants rationnels en racines.

a) $a^{\frac{1}{2}}=$ &ensp; b) $m^{\frac{1}{3}}=$ &ensp; c) $f^{\frac{3}{4}}=$ &ensp; d) $x^{-\frac{1}{5}}=$ &ensp; e) $b^{0.5}=$ &ensp; f) $\left(a^2 b^3\right)^{\frac{3}{4}}=$ &ensp; g) $\left(x^2 y^{\frac{1}{2}}\right)^{\frac{1}{5}}=$ &ensp; h) $\left(s^{-\frac{2}{3}} t^{\frac{1}{3}}\right)^{\frac{5}{6}}=$

**4.** Transforme les racines en puissances.

a) $\sqrt{a}=$ &ensp; b) $\sqrt{a^3}=$ &ensp; c) $\sqrt[4]{a^5}=$ &ensp; d) $\dfrac{1}{\sqrt[3]{a}}=$ &ensp; e) $\sqrt[5]{a}=$ &ensp; f) $\dfrac{1}{\sqrt[3]{a^2}}=$ &ensp; g) $\left(\sqrt[4]{a}\right)^3=$ &ensp; h) $\dfrac{1}{\sqrt{a^7}}=$ &ensp; i) $\sqrt[3]{a^7}=$

**5.** Simplifie en effectuant les racines partiellement.

*Exemple :* $\sqrt{18} = \sqrt{9 \cdot 2} = \sqrt{3^2 \cdot 2} = \sqrt{3^2} \cdot \sqrt{2} = 3\sqrt{2}$

a) $\sqrt{12}=$ &ensp; b) $\sqrt{80}=$ &ensp; c) $\sqrt{27}=$ &ensp; d) $\sqrt{72}=$ &ensp; e) $\sqrt{147}=$ &ensp; f) $\sqrt{216}=$ &ensp; g) $\sqrt{500}=$ &ensp; h) $\sqrt{108}=$

i) $\sqrt{75}=$ &ensp; j) $\sqrt[3]{16}=$ &ensp; k) $\sqrt[3]{54}=$ &ensp; l) $\sqrt[3]{32}=$

---

**6.** Écris le résultat comme une seule puissance ou une seule racine.

a) $\sqrt{a} \cdot a^5 \cdot a^{\frac{3}{4}}$

b) $\sqrt[3]{x^2} \cdot \sqrt{x^5} \cdot x^{\frac{1}{4}}$

c) $\left(\sqrt{b^7}\right)^3 \cdot b^{\frac{2}{7}}$

d) $\dfrac{\sqrt[5]{x}}{\sqrt[3]{x^2}} \cdot x^{\frac{7}{3}}$

e) $\sqrt[5]{a} \cdot \sqrt[4]{a} \cdot \sqrt[3]{a} \cdot \sqrt{a}$

f) $\left(b^{\frac{2}{3}} \cdot b^{\frac{1}{4}} \cdot \sqrt{b^9}\right)^2$

**7.** Écris le résultat comme une seule puissance ou une seule racine.

a) $\sqrt{\sqrt[3]{64}}$ &ensp; b) $\sqrt[7]{\sqrt[5]{a^{14}}}$ &ensp; c) $\sqrt[10]{\sqrt[5]{a^{50}}}$ &ensp; d) $\sqrt[8]{a^{-4}}$ &ensp; e) $\sqrt[3]{a^2 \cdot \sqrt[3]{a^2}}$ &ensp; f) $\sqrt{x^4 \cdot \sqrt[3]{x^{\frac{1}{2}}}}$

**8.** Simplifie le plus possible.

a) $\left(\sqrt[3n]{a^n}\right)^3=$ &ensp; b) $\sqrt[4]{a^3} \cdot \sqrt[3]{a^4}=$ &ensp; c) $\sqrt[6]{a^5} \cdot \sqrt[4]{a^3} \cdot a^{-2}=$ &ensp; d) $\sqrt[3]{\dfrac{27r^6}{s^9}}=$

e) $\dfrac{\sqrt[4]{x^3}}{x^{-2}} \cdot \dfrac{(x^3)^2}{\sqrt{x}} \cdot x^{-\frac{1}{4}}=$ &ensp; f) $\dfrac{\sqrt[3]{v^5} \cdot w^{\frac{2}{5}}}{v^{-1} \cdot \sqrt{w^3}}=$ &ensp; g) $\sqrt{x^3}:\sqrt{x}=$ &ensp; h) $\sqrt{\dfrac{2a^2}{b}} \cdot \sqrt{\dfrac{b^3}{32}}=$

i) $\sqrt{2t} \cdot \sqrt{9t} \cdot \sqrt{8t^2}=$ &ensp; j) $\sqrt{8u} \cdot \sqrt{3v} \cdot \sqrt{6uv}=$ &ensp; k) $\sqrt{\dfrac{2c^2}{d}} : \sqrt{\dfrac{d^3}{32}}=$

**9.** Effectue les calculs sans calculatrice.

a) $\sqrt{3} \cdot \sqrt{7} \cdot \sqrt{21}=$ &ensp; b) $(\sqrt{3})^6=$ &ensp; c) $\sqrt{5}(\sqrt{20}+\sqrt{5})=$ &ensp; d) $\sqrt{45}:\sqrt{5}=$ &ensp; e) $\sqrt{3} \cdot \sqrt{3} \cdot \sqrt{3} \cdot \sqrt{3}=$

f) $(\sqrt{2})^8=$ &ensp; g) $\sqrt{6}\left(\sqrt{\dfrac{1}{3}}+\sqrt{\dfrac{1}{2}}\right)=$ &ensp; h) $\dfrac{\sqrt{3} \cdot \sqrt{32}}{\sqrt{6}}=$ &ensp; i) $\dfrac{\sqrt{2} \cdot \sqrt{12}}{\sqrt{3} \cdot \sqrt{27}} \cdot \sqrt{2 \cdot \dfrac{2}{3}}=$

**10\*.** Simplifie le plus possible.

a) $\sqrt{\dfrac{\sqrt[4]{a^{\frac{1}{3}}} \cdot \sqrt{a^{-8}}}{\sqrt[3]{a^{-5}}}} : \dfrac{\sqrt[6]{a^{\frac{3}{4}}}}{\sqrt[3]{a^2}}=$

b) $\dfrac{\sqrt{\sqrt[3]{\left(\dfrac{1}{b^2}\right)^{-4}} \cdot \sqrt{b \cdot \sqrt[3]{b^2}}}}{b \cdot \sqrt[6]{b\sqrt{b}} \cdot \sqrt{b^{-1} \cdot \sqrt[3]{b^2}}}=$

**11\*.** Peux-tu répondre à cette question en utilisant les règles de calcul apprises ?

$$\text{Est-ce que } \frac{12^{999}+12^{1000}}{2} > 12^{999.5} \quad \text{ou bien} \quad \frac{12^{999}+12^{1000}}{2} < 12^{999.5} \text{ ?}$$

---

## 2.4 Solutions

**1.**

a) $6$ &ensp; b) $2$ &ensp; c) $\dfrac{1}{\sqrt{7}}$ &ensp; d) $125$ &ensp; e) $5$ &ensp; f) $\dfrac{1}{\sqrt{2}}$ &ensp; g) $2$ &ensp; h) $\sqrt{2}$ &ensp; i) $-7$

**2.**

a) $\dfrac{1}{81}$ &ensp; b) $1$ &ensp; c) $\dfrac{1}{3}$ &ensp; d) $4$ &ensp; e) $\dfrac{1}{100\,000}$ &ensp; f) $\dfrac{1}{64}$ &ensp; g) $7$ &ensp; h) $1$ &ensp; i) $\dfrac{1}{5}$ &ensp; j) $32$ &ensp; k) $3$ &ensp; l) $\dfrac{1}{9}$

**3.**

a) $\sqrt{a}$ &ensp; b) $\sqrt[3]{m}$ &ensp; c) $\sqrt[4]{f^3}$ &ensp; d) $\dfrac{1}{\sqrt[5]{x}}$ &ensp; e) $\sqrt{b}$ &ensp; f) $\sqrt[4]{a^6 b^9}$ &ensp; g) $\sqrt[5]{x^2\sqrt{y}}$ &ensp; h) $\sqrt[18]{\dfrac{t^5}{s^{10}}}$

**4.**

a) $a^{\frac{1}{2}}$ &ensp; b) $a^{\frac{3}{2}}$ &ensp; c) $a^{\frac{5}{4}}$ &ensp; d) $a^{-\frac{1}{3}}$ &ensp; e) $a^{\frac{1}{5}}$ &ensp; f) $a^{-\frac{2}{3}}$ &ensp; g) $a^{\frac{3}{4}}$ &ensp; h) $a^{-\frac{7}{2}}$ &ensp; i) $a^{\frac{7}{3}}$

**5.**

a) $2\sqrt{3}$ &ensp; b) $4\sqrt{5}$ &ensp; c) $3\sqrt{3}$ &ensp; d) $6\sqrt{2}$ &ensp; e) $7\sqrt{3}$ &ensp; f) $6\sqrt{6}$ &ensp; g) $10\sqrt{5}$ &ensp; h) $6\sqrt{3}$ &ensp; i) $5\sqrt{3}$ &ensp; j) $2\sqrt[3]{2}$ &ensp; k) $3\sqrt[3]{2}$ &ensp; l) $2\sqrt[3]{4}$

**6.**

a) $a^{\frac{25}{4}} = \sqrt[4]{a^{25}}$ &ensp; b) $x^{\frac{41}{12}} = \sqrt[12]{x^{41}}$ &ensp; c) $b^{\frac{151}{14}} = \sqrt[14]{b^{151}}$ &ensp; d) $x^{\frac{28}{15}} = \sqrt[15]{x^{28}}$ &ensp; e) $a^{\frac{77}{60}} = \sqrt[60]{a^{77}}$ &ensp; f) $b^{\frac{65}{6}} = \sqrt[6]{b^{65}}$

**7.**

a) $\sqrt[6]{64} = 64^{\frac{1}{6}} = 2$ &ensp; b) $\sqrt[5]{a^2} = a^{\frac{2}{5}}$ &ensp; c) $a$ &ensp; d) $a^{-\frac{1}{2}} = \dfrac{1}{\sqrt{a}}$ &ensp; e) $\sqrt[9]{a^8} = a^{\frac{8}{9}}$ &ensp; f) $\sqrt[12]{x^{25}} = x^{\frac{25}{12}}$

**8.**

a) $a$ &ensp; b) $a^{\frac{25}{12}} = \sqrt[12]{a^{25}}$ &ensp; c) $a^{\frac{-5}{12}} = \sqrt[12]{a^{-5}}$ &ensp; d) $\dfrac{3r^2}{s^3}$ &ensp; e) $x^8$ &ensp; f) $\dfrac{v^{\frac{8}{3}}}{w^{\frac{11}{10}}} = \dfrac{\sqrt[3]{v^8}}{\sqrt[10]{w^{11}}}$

g) $x$ &ensp; h) $\dfrac{ab}{4}$ &ensp; i) $12t^2$ &ensp; j) $12uv$ &ensp; k) $\dfrac{8c}{d^2}$

**9.**

a) $21$ &ensp; b) $27$ &ensp; c) $15$ &ensp; d) $3$ &ensp; e) $9$ &ensp; f) $16$ &ensp; g) $\sqrt{2}+\sqrt{3}$ &ensp; h) $4$ &ensp; i) $\dfrac{4\sqrt{2}}{9}$

**10\*.**

a) $a^{-\frac{7}{12}}$ &ensp; b) $b^{\frac{7}{12}}$

**11\*.** $\dfrac{12^{999}+12^{1000}}{2} > 12^{999.5}$, explication pendant le cours.

---

# 3. Polynômes

## 3.1 Découvrir

Effectue :

a) $(ax+3x-3) \cdot (3a-4ax+2)=$

b) $(x^2-y^3) \cdot (2y+4x)=$

c) $(a+b) \cdot (a^2+2) \cdot (3+b)=$

Est-ce que tu te rappelles de la division en colonne avec reste apprise à l'école primaire ? Essaye de résoudre ces calculs avec cette méthode :

a) $1101 : 7=$

b) $22\,495 : 12=$

Explique le produit remarquable $(a+b)^2 = a^2 + 2ab + b^2$.

Connais-tu d'autres produits remarquables ?

---

## 3.2 Théorie

> **Définition**
>
> Un **monôme** est une expression obtenue par multiplication de nombres réels et de lettres avec exposants naturels (entier et positif). Sous sa forme réduite, un monôme se compose de deux parties : son coefficient et sa partie littérale.
>
> Un **polynôme** est un monôme ou une somme de monômes. Les monômes qui composent le polynôme sont les termes du polynôme. On peut réduire un polynôme en additionnant les monômes semblables (de même partie littérale) qui le composent.

**Exemples :**

a) $3x^3 - 2x^2 + 0.2x - 4$ est un polynôme à une variable.

b) $3a^2xy - 2x^2y + 4y$ est un polynôme à plusieurs variables.

c) $\sqrt{a^2-b^2}$, $\dfrac{3}{x}+x^2-4x$ et $3x^{\frac{2}{3}}+x^{0.5}$ ne sont pas des polynômes car les exposants ne sont pas des entiers naturels.

d) Tout nombre, comme par exemple $-10.5$, est un polynôme, appelé polynôme constant.

On ne peut additionner ou soustraire que des monômes semblables.

Le produit de deux polynômes s'obtient en multipliant chaque terme du premier avec chaque terme du deuxième polynôme et en utilisant les règles de calcul pour les puissances. Ensuite on additionne et soustrait encore les monômes semblables.

---

La division polynomiale n'est plus si simple. Il faut bien se rappeler de la division en colonne avec reste, apprise à l'école primaire, pour comprendre par la suite la division polynomiale. Le reste d'une telle division doit toujours être inférieur au diviseur.

La division polynomiale est très semblable à la division en colonne. Dans ce chapitre nous allons nous restreindre à la division polynomiale avec des polynômes à une seule variable, car elle nous sera utile plus tard pour analyser les fonctions polynomiales et rationnelles. Avant d'effectuer une division polynomiale, il faut s'assurer que les deux polynômes (dividende et diviseur) soient ordonnés de la plus grande à la plus petite puissance.

---

> **Définition**
>
> L'exposant le plus élevé d'un polynôme à une variable est appelé **degré** du polynôme.

**Exemples :**

a) $x^3+2x-3$ est un polynôme du 3<sup>ème</sup> degré.

b) $3x^6+4x^4-2x$ est un polynôme du 6<sup>ème</sup> degré.

c) $5$ est un polynôme de degré $0$.

> **Remarques**
>
> 1. Si une division polynomiale possède un reste, alors le degré de celui-ci doit être inférieur au degré du diviseur.
>
> 2. Pour contrôler le résultat d'une division polynomiale il suffit de multiplier le résultat (sans le reste) avec le diviseur et ajouter le reste. On devrait obtenir ainsi le dividende.

À l'école secondaire, tu as appris les produits remarquables. Ils sont souvent utilisés pour effectuer des calculs rapidement, c'est pour cela qu'il faut les connaître par cœur.

> **Définition**
>
> Les trois équations suivantes sont appelées **produits remarquables**.
>
> $$\begin{array}{rcl}
> (a+b)^2 &=& a^2+2ab+b^2 \\
> (a-b)^2 &=& a^2-2ab+b^2 \\
> (a+b)(a-b) &=& a^2-b^2
> \end{array}$$

---

## 3.3 Exercices

**1.** Simplifie.

a) $a^2+b^2-(a^2-b^2+3ab)-(b^2+a^2b)=$

b) $5xy+y^2-(3xy-(-y^2-xy))=$

c) $a+b-c-(-(b-3c))=$

d) $3a^2+a^4-5a^2-3a^4+a^0=$

**2.** Effectue.

a) $(a-x)(b-y)=$ &ensp; b) $(a-x)b-y=$ &ensp; c) $(x-y-z)(2x+3y)=$ &ensp; d) $(4a-5x)(5c+4b)4n=$

e) $\frac{1}{3}(x-3)+(x+3)-\frac{1}{4}(x+4)=$ &ensp; f) $(4y+6x)(3a-5b)-(2x-6y)(2a+3b)=$

g) $(x-5)(3x-1)-(x-6)(x+5)=$ &ensp; h) $(4+9a-3c)d^5-(d^3-6b)9ad^2=$

**3.** Effectue la division polynomiale avec reste.

a) $(6x^3-17x^2+14x-3):(2x-3)=$

b) $(135a^2+77-30a+26a^3):(7-4a+13a^2)=$

c) $(6x^5+5x^4-25x^3+31x^2-12x+5):(2x^2-3x+2)=$

d) $(3m^4+6-2m^2+m^3):(m^2+2m)=$

e) $x^4:(x+1)=$

**4.** Effectue et simplifie.

a) $3a(a^2-1)-4a^2(a+2)-3a+4(a^2-1)=$

b) $-3x^2(x^3-2x^2+4)+4x^3(1-2x)+x(x-1)+2x=$

c) $[x-(x^2+3)]2x^2+3(x-2)+4x^2=$

d) $3x\{x-[2x^2-(-x+4)]+3\}-3x^2(x-2)=$

e) $3a[ab-(b^2+a^2)]-2b\{2a^2-[3ab+b^2]+ab\}=$

**5.** Effectue à l'aide des produits remarquables.

a) $(x-y)^2=$ &ensp; b) $(x-1)^2=$ &ensp; c) $(2c+1)(2c-1)=$ &ensp; d) $(x-2)(x+2)=$ &ensp; e) $(2x+y)^2=$ &ensp; f) $(qr-r)^2=$

g) $(ef^2-f^3)^2=$ &ensp; h) $(z^3-1)(z^3+1)=$ &ensp; i) $(x^3+x^2y)^2=$ &ensp; j) $(5y+z)(5y-z)=$

---

**6.** Détermine le terme manquant pour qu'il s'agisse du résultat d'un produit remarquable.

a) $x^2+8x+\dots$ &ensp; b) $9y^2+6y+\dots$ &ensp; c) $x^2+px+\dots$ &ensp; d) $a^2-2a+\dots$ &ensp; e) $4n^2+12n+\dots$ &ensp; f)* $\frac{1}{4}-2m+\dots$

**7.**

On peut construire une boîte rectangulaire avec couvercle en coupant les parties hachurées d'un carton carré comme dans la figure ci-contre et en pliant ensuite le long des lignes pointillées.

![Boîte en carton](Bilder/schachtel(fr).png)

a) Détermine le polynôme donnant le volume de la boîte si la longueur des côtés du carton vaut $50\,cm$.

b) Quel est le volume de la boîte si $x = 2\,cm$ ?

**8.** Soient les polynômes suivants.

$$A = \frac{1}{2}x^3 - \frac{2}{3}x^2 + 1, \qquad B = x^3 - \frac{4}{5}x, \qquad C = \frac{5}{2}x - \frac{2}{5}$$

Effectue.

a) $P = AB$ &ensp; b) $Q = BC$ &ensp; c) $R = C(A+B)$ &ensp; d) $S = 6A - 5B$

**9.** Effectue la division polynomiale avec reste.

a) $(x^3-8x^2+16x+4):(x-5)=$

b) $(x^5-8x^3+8x^2-7x+6):(x^2+3x-2)=$

c) $(5x^3-2x^2+4x-4):(x-1)=$

d) $(2x^3+7x^2+10x+8):(2x^3+7x)=$

e) $(3x^2-4x+12):(3x^2-4x+1)=$

f) $(x^{12}-1):(x^4-1)=$

g)* $\left(\frac{5}{8}x^2-\frac{7}{12}x-\frac{1}{3}\right):\left(\frac{5}{4}x+\frac{1}{2}\right)=$

h)* $\left(-\frac{1}{3}x^4+2x^2-\frac{1}{2}\right):\left(\frac{3}{2}x^2+\frac{1}{3}\right)=$

**10.** Sur le site suivant tu peux résoudre d'autres divisions polynomiales :
http://www.arndt-bruenner.de/mathe/scripts/polynomdivisionueben.htm

---

## 3.4 Solutions

**1.**

a) $b^2-3ab-a^2b$ &ensp; b) $xy$ &ensp; c) $a+2b-4c$ &ensp; d) $-2a^4-2a^2+1$

**2.**

a) $ab-ay-bx+xy$ &ensp; b) $ab-bx-y$ &ensp; c) $2x^2-3y^2+xy-2xz-3yz$ &ensp; d) $80acn+64abn-100cnx-80bnx$

e) $\frac{13}{12}x+1$ &ensp; f) $-2by-36bx+14ax+24ay$ &ensp; g) $2x^2-15x+35$ &ensp; h) $4d^5-3cd^5+54abd^2$

**3.**

a) $3x^2-4x+1$

b) $2a+11$

c) $3x^3+7x^2-5x+1$ &ensp; reste : $x+3$

d) $3m^2-5m+8$ &ensp; reste : $-16m+6$

e) $x^3-x^2+x-1$ &ensp; reste : $1$

**4.**

a) $-a^3-4a^2-6a-4$

b) $-3x^5-2x^4+4x^3-11x^2+x$

c) $-2x^4+2x^3-2x^2+3x-6$

d) $-9x^3+6x^2+21x$

e) $-3a^3-a^2b+ab^2+2b^3$

**5.**

a) $x^2-2xy+y^2$ &ensp; b) $x^2-2x+1$ &ensp; c) $4c^2-1$ &ensp; d) $x^2-4$ &ensp; e) $4x^2+4xy+y^2$ &ensp; f) $q^2r^2-2qr^2+r^2$

g) $e^2f^4-2ef^5+f^6$ &ensp; h) $z^6-1$ &ensp; i) $x^6+2x^5y+x^4y^2$ &ensp; j) $25y^2-z^2$

**6.**

a) $16$ &ensp; b) $1$ &ensp; c) $\frac{1}{4}p^2$ &ensp; d) $1$ &ensp; e) $9$ &ensp; f) $4m^2$

**7.**

a) $V = 2x^3 - 100x^2 + 1250x$

b) $2116\,cm^3$

**8.**

a) $\frac{1}{2}x^6 - \frac{2}{3}x^5 - \frac{2}{5}x^4 + \frac{23}{15}x^3 - \frac{4}{5}x$

b) $\frac{5}{2}x^4 - \frac{2}{5}x^3 - 2x^2 + \frac{8}{25}x$

c) $\frac{15}{4}x^4 - \frac{34}{15}x^3 - \frac{26}{15}x^2 + \frac{141}{50}x - \frac{2}{5}$

d) $-2x^3 - 4x^2 + 4x + 6$

**9.**

a) $x^2-3x+1$ &ensp; reste : $9$

b) $x^3-3x^2+3x-7$ &ensp; reste : $20x-8$

c) $5x^2+3x+7$ &ensp; reste : $3$

d) $1$ &ensp; reste : $7x^2+3x+8$

e) $1$ &ensp; reste : $11$

f) $x^8+x^4+1$

g) $\frac{1}{2}x-\frac{2}{3}$

h) $-\frac{2}{9}x^2+\frac{112}{81}$ &ensp; reste : $-\frac{467}{486}$

---

# 4. Factorisation

## 4.1 Découvrir

Coche la(les) bonne(s) réponse(s).

a) $5x^4-15x+100x^2 = \begin{cases} x(5x^3-15+100x) & ☐ \\ 5x(x^3-3x+20x) & ☐ \\ 5x(x^3-3+20x) & ☐ \end{cases}$

b) $4x^2-4a^2x+a^4 = \begin{cases} (2x+a^2)^2 & ☐ \\ (2x-2a^2)^2 & ☐ \\ (2x-a^2)^2 & ☐ \end{cases}$

c) $100c^2+40cd+4d^2 = \begin{cases} (10c+2d)^2 & ☐ \\ (10c+4d)^2 & ☐ \\ 4(5c+d)^2 & ☐ \end{cases}$

d) $25n^2-1 = \begin{cases} (5n-1)^2 & ☐ \\ (5n+1)(5n-1) & ☐ \\ (25n+1)(25n-1) & ☐ \end{cases}$

e) $x^2-x-6 = \begin{cases} (x+3)(x-2) & ☐ \\ (x-1)(x+6) & ☐ \\ (x-3)(x+2) & ☐ \end{cases}$

f) $x^2+7x+10 = \begin{cases} x(x+7+10) & ☐ \\ (x+5)(x+2) & ☐ \\ (x+1)(x+6) & ☐ \end{cases}$

g) $2x^2-9x-5 = \begin{cases} (2x+1)(x-5) & ☐ \\ (2x-5)(x+1) & ☐ \\ (2x-4)(x-5) & ☐ \end{cases}$

---

## 4.2 Théorie

La factorisation est l'opération réciproque de la distribution d'un produit de polynômes.

![Schéma factorisation ↔ distribution](Bilder/shema(fr).png)

**Exemples :**

a) $ax^2 - bx + cx^5 = x(ax+b+cx^4)$

b) $7x^2+14x+7 = 7(x^2+2x+1) = 7(x+1)^2$

c) $x^2-5x+6 = (x-3)(x-2)$

> **Remarque**
>
> Pour contrôler si une factorisation est correcte il suffit de distribuer le résultat obtenu et de comparer avec la donnée initiale !

La factorisation de polynômes peut s'avérer utile dans beaucoup de problèmes mathématiques. Nous étudierons ces applications dans le prochain chapitre.

Il existe 3 méthodes importantes pour factoriser des polynômes simples :

**1. La mise en évidence**

Pour la mise en évidence il faut repérer le facteur commun des monômes du polynôme. Ce facteur commun est ensuite écrit devant une parenthèse qui contient le reste du polynôme.

---

**2. Les produits remarquables**

Dans ces cas on applique les produits remarquables « à l'envers ». Pour bien maîtriser cette méthode il faut beaucoup d'entraînement.

**3. Décomposition d'un trinôme du deuxième degré**

Un trinôme est un polynôme qui contient trois monômes. Des trinômes du type $x^2+ax+b$, où $a$ et $b$ sont des nombres entiers, peuvent souvent être factorisés grâce à une simple astuce.

---

> **Remarque**
>
> Par un procédé semblable à la méthode 3 il est possible de factoriser des trinômes dont le coefficient de $x^2$ n'est pas forcément $1$ ou qui n'est pas du deuxième degré. La factorisation peut toujours être contrôlée en distribuant la solution obtenue !

---

## 4.3 Exercices

**1.** Utilise la mise en évidence pour factoriser.

a) $10xy-20x^2y+30xy^2=$ &ensp; b) $9x^3-12x^2-15x=$ &ensp; c) $9xy+6yz+3xz=$ &ensp; d) $24b^3c^5-36bc^2=$

e) $3a^3b^4-12a^2b^5=$ &ensp; f) $4x(x-y)+5y(x-y)=$ &ensp; g) $35x^2y-28xy^2+7xy=$ &ensp; h) $(x+2)^2-5(x+2)=$

i) $14x^5-7x^4+21x^3-35x^2=$

**2.** Factorise à l'aide des produits remarquables.

a) $x^2+2x+1=$ &ensp; b) $x^2-2xy+y^2=$ &ensp; c) $9y^2+6y+1=$ &ensp; d) $4x^2-9y^2=$ &ensp; e) $1-16z^4=$

f) $49x^2-28x+4=$ &ensp; g) $0{,}01x^2-4=$ &ensp; h) $z^2-8z+16=$ &ensp; i) $4x^2y^2-9=$ &ensp; j) $y^4-2y^2+1=$

**3.** Factorise les trinômes suivants.

a) $x^2-7x+6=$ &ensp; b) $x^2+7x+6=$ &ensp; c) $x^2-14x-15=$ &ensp; d) $x^2+8x+15=$ &ensp; e) $x^2-9x+20=$

f) $z^2+7z+12=$ &ensp; g) $z^2-13z+12=$ &ensp; h) $2x^2+14x+20=$ &ensp; i) $44+x^2-15x=$ &ensp; j) $x^4-13x^2+36=$

**4.** Factorise le plus possible.

a) $12uv^3+18u^2v=$ &ensp; b) $9m^4n^2-3m^2n-m^3n^2=$ &ensp; c) $abc^2-ab^3c+a^4bc=$ &ensp; d) $18ab^2c^4-24a^3b^2c=$

e) $x^2-1=$ &ensp; f) $4a^2+4a+1=$ &ensp; g) $9y^2+6y+1=$ &ensp; h) $25z^2+20yz+4y^2=$ &ensp; i) $16t^2-1=$

j) $x^2+6x+8=$ &ensp; k) $m^2-2m-15=$ &ensp; l) $4c^2-14c+10=$ &ensp; m) $3x^2+7x+2=$

---

**5.** Factorise le plus possible en utilisant plusieurs méthodes.

a) $-16x^5+x=$ &ensp; b) $-3z^4+6z^3+24z^2=$ &ensp; c) $3x^3-18x^2+24x=$ &ensp; d) $2a^2x-15abx+18b^2x=$

e) $x^4-x^6=$ &ensp; f) $6x^2+13x+6=$ &ensp; g) $x^4-1=$ &ensp; h) $2x^3y-18xy=$ &ensp; i) $7x^{2n+1}+14x^{n+1}y^n+7xy^{2n}=$

j) $36x^4-13x^2+1=$ &ensp; k) $3x^2+2x-8=$

**6.** Complète le tableau ci-dessous.

| Forme factorisée | Forme développée |
|:---:|:---:|
| | $x^2-64$ |
| $(x+5)(x-5)$ | |
| $(x+1)^2$ | |
| | $x^2+12x+36$ |
| | $x^2+4x+4$ |
| $(x-2)^2$ | |
| | $x^2-6x+9$ |
| | $x^2-169$ |
| | $x^2-100$ |
| $(x+8)^2$ | |
| | $x^2+6x+9$ |
| $(x+9)(x-9)$ | |
| $(x+10)^2$ | |
| | $x^2+10x+25$ |
| | $x^2-49$ |
| $(x+7)^2$ | |

**7.** Complète le tableau ci-dessous.

| Forme factorisée | Forme développée |
|:---:|:---:|
| | $x^2+7x-8$ |
| $(x-9)(x+10)$ | |
| $(x-3)(x+6)$ | |
| | $x^2-x-12$ |
| | $x^2-x-20$ |
| $(x-9)(x-8)$ | |
| | $x^2+14x+45$ |
| | $x^2+3x-28$ |
| | $x^2+3x-10$ |
| $(x-1)(x-2)$ | |
| | $x^2-12x+35$ |
| $(x-4)(x-5)$ | |
| $(x-3)(x+9)$ | |
| | $x^2-11x+24$ |
| | $x^2+10x+16$ |
| $(x-8)(x+5)$ | |

---

## 4.4 Solutions

**1.**

a) $10xy(1-2x+3y)$ &ensp; b) $3x(3x^2-4x-5)$ &ensp; c) $3(3xy+2yz+xz)$ &ensp; d) $12bc^2(2b^2c^3-3)$

e) $3a^2b^4(a-4b)$ &ensp; f) $(x-y)(4x+5y)$ &ensp; g) $7xy(5x-4y+1)$ &ensp; h) $(x+2)(x-3)$ &ensp; i) $7x^2(2x^3-x^2+3x-5)$

**2.**

a) $(x+1)^2$ &ensp; b) $(x-y)^2$ &ensp; c) $(3y+1)^2$ &ensp; d) $(2x-3y)(2x+3y)$ &ensp; e) $(1+4z^2)(1+2z)(1-2z)$

f) $(7x-2)^2$ &ensp; g) $(0{,}1x-2)(0{,}1x+2)$ &ensp; h) $(z-4)^2$ &ensp; i) $(2xy-3)(2xy+3)$ &ensp; j) $(y^2-1)^2 = (y-1)^2(y+1)^2$

**3.**

a) $(x-1)(x-6)$ &ensp; b) $(x+1)(x+6)$ &ensp; c) $(x-15)(x+1)$ &ensp; d) $(x+3)(x+5)$ &ensp; e) $(x-4)(x-5)$

f) $(z+3)(z+4)$ &ensp; g) $(z-1)(z-12)$ &ensp; h) $2(z+2)(z+5)$ &ensp; i) $(x-4)(x-11)$ &ensp; j) $(x-2)(x+2)(x-3)(x+3)$

**4.**

a) $6uv(2v^2+3u)$ &ensp; b) $m^2n(9m^2n-3-mn)$ &ensp; c) $abc(c-b^2+a^3)$ &ensp; d) $6ab^2c(3c^3-4a^2)$ &ensp; e) $(x+1)(x-1)$

f) $(2a+1)^2$ &ensp; g) $(3y+1)^2$ &ensp; h) $(5z+2y)^2$ &ensp; i) $(4t-1)(4t+1)$ &ensp; j) $(x+2)(x+4)$ &ensp; k) $(m-5)(m+3)$

l) $2(2c-5)(c-1)$ &ensp; m) $(3x+1)(x+2)$

**5.**

a) $-x(4x^2+1)(2x+1)(2x-1)$ &ensp; b) $-3z^2(z-4)(z+2)$ &ensp; c) $3x(x-2)(x-4)$ &ensp; d) $x(2a-3b)(a-6b)$

e) $x^4(1+x)(1-x)$ &ensp; f) $(3x+2)(2x+3)$ &ensp; g) $(x^2+1)(x+1)(x-1)$ &ensp; h) $2xy(x-3)(x+3)$

i) $7x(x^n+y^n)^2$ &ensp; j) $(3x+1)(3x-1)(2x+1)(2x-1)$ &ensp; k) $(3x-4)(x+2)$

**6–7.** Compare avec tes collègues de classe !

---

# 5. Applications de la factorisation

## 5.1 Découvrir

Coche la(les) bonne(s) réponse(s).

a) $\dfrac{32a^4bc^5}{48a^2bc^4} = \begin{cases} \dfrac{2}{3}a^2c & ☐ \\[6pt] \dfrac{2a^2c}{3} & ☐ \\[6pt] \dfrac{2}{3a^2c} & ☐ \end{cases}$

b) $\dfrac{(x+1)(x+2)}{(x+2)x} = \begin{cases} \dfrac{x+1}{x} & ☐ \\[6pt] 2 & ☐ \\[6pt] \dfrac{x+2}{x} & ☐ \end{cases}$

c) $\dfrac{1}{a+b}+\dfrac{1}{c} = \begin{cases} \dfrac{1}{abc} & ☐ \\[6pt] \dfrac{1}{(a+b)c} & ☐ \\[6pt] \dfrac{c+a+b}{c(a+b)} & ☐ \end{cases}$

d) $\dfrac{28x-35y}{21} = \begin{cases} \dfrac{4x-35y}{3} & ☐ \\[6pt] \dfrac{4x-5y}{3} & ☐ \\[6pt] \dfrac{4x}{3}-\dfrac{5y}{3} & ☐ \end{cases}$

e) $\dfrac{a^2-2ab+b^2}{a-b} = \begin{cases} a-2+b & ☐ \\ a-b & ☐ \\[6pt] \dfrac{1}{a-b} & ☐ \end{cases}$

f) $\dfrac{ab(ac+bc)}{cb} = \begin{cases} a^2+ab & ☐ \\[6pt] \dfrac{ab^2}{ac^2+bc^2} & ☐ \\ a(a+b) & ☐ \end{cases}$

g) $\dfrac{a(x^2+2x+1)}{(x+1)(ab-a)} = \begin{cases} \dfrac{a}{(x+1)^2} & ☐ \\[6pt] \dfrac{ax^2+2ax+a}{ab-a+x+1} & ☐ \\[6pt] \dfrac{x+1}{b-1} & ☐ \end{cases}$

h) $\dfrac{x^2-5x+6}{x^2-x-2} = \begin{cases} -4x+4 & ☐ \\[6pt] \dfrac{x-3}{x+1} & ☐ \\[6pt] \dfrac{-5x+6}{-x-2} & ☐ \end{cases}$

Résous l'équation ci-dessous.

*Indice : Un produit est nul si un des facteurs est nul !*

$(x-2)(3x+1)(2x+8) = 0$

Résous maintenant les équations suivantes en factorisant convenablement.

a) $x^2-6x = 0$

b) $x^2+2x+1 = 0$

c) $x^2+5x+6 = 0$

d) $x^3+2x^2-3x = 0$

---

## 5.2 Théorie

Dans le dernier chapitre, nous avons appris à factoriser des polynômes. Maintenant nous verrons à quoi peut servir la factorisation dans certaines situations.

**Simplification de fractions**

Nous savons qu'une fraction peut être simplifiée par un facteur commun du numérateur et du dénominateur. Si le numérateur et le dénominateur d'une fraction sont des polynômes alors on peut souvent utiliser la factorisation pour simplifier la fraction.

**Résoudre des équations**

Si on ramène tous les termes sur un côté d'une équation, la factorisation peut souvent permettre de trouver les solutions de cette équation, car un produit ne peut être nul que si un des facteurs est nul !

---

**Trouver le dénominateur commun de fractions rationnelles**

Pour additionner (ou soustraire) des fractions il faut que celles-ci aient le même dénominateur. Pour déterminer le plus petit dénominateur commun il est nécessaire de factoriser les différents dénominateurs.

---

## 5.3 Exercices

**1.** Simplifie les fractions suivantes.

a) $\dfrac{12x-13y}{24x^2-26xy}=$ &ensp; b) $\dfrac{a^2-ab}{4a-4ab}=$ &ensp; c) $\dfrac{4x+10y}{5y+2x}=$ &ensp; d) $\dfrac{x-y}{3y-x}=$

e) $\dfrac{1-x}{1-2x+x^2}=$ &ensp; f) $\dfrac{16x^2-25y^2}{8x-10y}=$ &ensp; g) $\dfrac{x^2-y^2}{x-y}=$ &ensp; h) $\dfrac{x^2+2xy+y^2}{ax+ay}=$

i) $\dfrac{x^2-1}{2x+2}=$ &ensp; j) $\dfrac{36x^3-x}{6x^2-x}=$ &ensp; k) $\dfrac{c^2-ac}{a^2-ac}=$ &ensp; l) $\dfrac{a^2-2ab+b^2}{a^2-b^2}=$

**2.** Simplifie les fractions suivantes.

a) $\dfrac{24a^2b^2c+12b^2}{12ab^3c^2-6b^2}=$ &ensp; b) $\dfrac{1-x^2}{1+x}=$ &ensp; c) $\dfrac{9x^2+12x+4}{3x+2}=$ &ensp; d) $\dfrac{a^2-4}{5ab+10b}=$

e) $\dfrac{25x^2-9y^2}{25x^2-30xy+9y^2}=$ &ensp; f) $\dfrac{x^3-9y^2x}{2x^2-12xy+18y^2}=$

**3.** Écris le résultat comme une seule fraction simplifiée.

a) $\dfrac{3a}{2b} : 2a=$ &ensp; b) $\dfrac{(a+b)^2}{c} \cdot \dfrac{c^2}{a^2-b^2}=$ &ensp; c) $\dfrac{a+b}{a+1} : \dfrac{ca+cb}{2a+2}=$ &ensp; d) $4(a-4) : \dfrac{2a-8}{5}=$

e) $\dfrac{p^2-q^2}{p^2+2pq+q^2} \cdot \dfrac{p+q}{p-q}=$ &ensp; f) $\dfrac{w^2-w-12}{t^2} : \dfrac{w-4}{t^2-t}=$

**4.** Écris le résultat comme une seule fraction simplifiée.

a) $\dfrac{4}{z-1}+\dfrac{z}{z^2-1}=$ &ensp; b) $\dfrac{a}{a^2-4}-\dfrac{a}{a^2-4a+4}=$

c) $\dfrac{2}{2w+1}-\dfrac{2}{4w^2-1}-\dfrac{1}{1-2w}=$ &ensp; d) $\dfrac{1}{x}-\dfrac{1}{x^2+x}-\dfrac{1}{x^2+2x+1}=$

e) $\dfrac{3}{x+y}+\dfrac{2}{x}=$ &ensp; f) $\dfrac{b-a}{6a+2b}-\dfrac{a+b}{3a+b}=$

**5.** Détermine l'ensemble de solutions des équations.

a) $6x^2+12x=0$ &ensp; b) $4x^2-4x+1=0$ &ensp; c) $x^2-9=0$ &ensp; d) $x^5-5x^4=0$

e) $x^2+4x-12=0$ &ensp; f) $x^2+2x=35$ &ensp; g) $x^2+5x=24$ &ensp; h) $5x^2+15x+10=0$

---

**6.** Écris le résultat comme une seule fraction simplifiée.

a) $\dfrac{5x}{2y}-\dfrac{3y}{10x}=$ &ensp; b) $\dfrac{ab-b^2}{a^3+a^2} : \dfrac{a^2b-b^3}{a^2+a}=$ &ensp; c) $\dfrac{a}{2b}-\dfrac{b}{5c}=$ &ensp; d) $\dfrac{18m^2np}{18m^2n^2p+54m^2np^2}=$

e) $(2a-b) \cdot \dfrac{1}{b-2a}=$ &ensp; f) $\dfrac{a^2+6a+9}{4} : (2a+6)=$ &ensp; g) $\dfrac{5}{x-3}-\dfrac{7}{x+5}+\dfrac{3x-40}{x^2+2x-15}=$ &ensp; h) $\dfrac{3(x+4)}{8xy} : \dfrac{x^2-16}{x^2y^2}=$

**7.** Simplifie les fractions suivantes.

a) $\dfrac{x^2-3x-10}{x^2-6x+5}=$ &ensp; b) $\dfrac{x^2-4x-21}{x^2+10x+21}=$ &ensp; c) $\dfrac{x^2-1}{x^2+3x-4}=$ &ensp; d) $\dfrac{x^2+6x-16}{x^2+3x-10}=$

e) $\dfrac{2x^2-2x-12}{3x^2-12x-36}=$ &ensp; f) $\dfrac{5x^2+15x-20}{5x^2+5x-60}=$ &ensp; g) $\dfrac{5x^2-5x}{3x^2-3}=$ &ensp; h) $\dfrac{2x^3-8x^2+8x}{8x^2(x-2)^3}=$

**8.** Écris le résultat comme une seule fraction simplifiée.

a) $\dfrac{\dfrac{a}{a^2-1}}{\dfrac{1}{a+1}-\dfrac{1}{a-1}}=$ &ensp; b) $\dfrac{\dfrac{m-n}{m+n}-\dfrac{m}{m-n}}{\dfrac{m+n}{m-n}-\dfrac{n}{m+n}}=$ &ensp; c) $\dfrac{\dfrac{a}{a+1}-\dfrac{a}{a+2}}{\dfrac{a}{a+2}-\dfrac{2a}{a-1}}=$

---

## 5.4 Solutions

**1.**

a) $\dfrac{1}{2x}$ &ensp; b) $\dfrac{a-b}{4-4b}$ &ensp; c) $2$ &ensp; d) $\dfrac{x-y}{3y-x}$ &ensp; e) $\dfrac{1}{1-x}$ &ensp; f) $\dfrac{4x+5y}{2}$ &ensp; g) $x+y$ &ensp; h) $\dfrac{x+y}{a}$

i) $\dfrac{x-1}{2}$ &ensp; j) $6x+1$ &ensp; k) $\dfrac{-c}{a}$ &ensp; l) $\dfrac{a-b}{a+b}$

**2.**

a) $\dfrac{2(2a^2c+1)}{2abc^2-1}$ &ensp; b) $1-x$ &ensp; c) $3x+2$ &ensp; d) $\dfrac{a-2}{5b}$ &ensp; e) $\dfrac{5x+3y}{5x-3y}$ &ensp; f) $\dfrac{x(x+3y)}{2(x-3y)}$

**3.**

a) $\dfrac{3}{4b}$ &ensp; b) $\dfrac{c(a+b)}{a-b}$ &ensp; c) $\dfrac{2}{c}$ &ensp; d) $10$ &ensp; e) $1$ &ensp; f) $\dfrac{(w+3)(t-1)}{t}$

**4.**

a) $\dfrac{5z+4}{(z-1)(z+1)}$ &ensp; b) $\dfrac{-4a}{(a-2)^2(a+2)}$ &ensp; c) $\dfrac{3}{2w+1}$ &ensp; d) $\dfrac{x}{(x+1)^2}$ &ensp; e) $\dfrac{5x+2y}{x(x+y)}$ &ensp; f) $-\dfrac{1}{2}$

**5.**

a) $L = \{0\,;\,-2\}$ &ensp; b) $L = \left\{\frac{1}{2}\right\}$ &ensp; c) $L = \{-3\,;\,3\}$ &ensp; d) $L = \{0\,;\,5\}$ &ensp; e) $L = \{-6\,;\,2\}$ &ensp; f) $L = \{5\,;\,-7\}$ &ensp; g) $L = \{-8\,;\,3\}$ &ensp; h) $L = \{-1\,;\,-2\}$

**6.**

a) $\dfrac{25x^2-3y^2}{10xy}$ &ensp; b) $\dfrac{1}{a(a+b)}$ &ensp; c) $\dfrac{5ac-2b^2}{10bc}$ &ensp; d) $\dfrac{1}{n+3p}$ &ensp; e) $-1$ &ensp; f) $\dfrac{a+3}{8}$ &ensp; g) $\dfrac{x+6}{(x-3)(x+5)}$ &ensp; h) $\dfrac{3xy}{8(x-4)}$

**7.**

a) $\dfrac{x+2}{x-1}$ &ensp; b) $\dfrac{x-7}{x+7}$ &ensp; c) $\dfrac{x+1}{x+4}$ &ensp; d) $\dfrac{x+8}{x+5}$ &ensp; e) $\dfrac{2(x-3)}{3(x-6)}$ &ensp; f) $\dfrac{x-1}{x-3}$ &ensp; g) $\dfrac{5x}{3(x+1)}$ &ensp; h) $\dfrac{1}{4x(x-2)}$

**8.**

a) $-\dfrac{a}{2}$ &ensp; b) $\dfrac{n^2-3mn}{m^2+mn+2n^2}$ &ensp; c) $\dfrac{1-a}{(a+1)(a+5)}$

---

# 6. Répétitions

## 6.1 Objectifs

- Connaître la définition d'une puissance avec exposant entier et savoir l'appliquer dans des calculs avec des nombres.
- Connaître les règles de calcul pour les puissances et savoir les appliquer.
- Connaître la notation scientifique pour les nombres et savoir l'utiliser pour résoudre des calculs.
- Savoir écrire un nombre quelconque en notation scientifique et vice-versa.
- Connaître la définition des racines et savoir l'appliquer dans des calculs avec des nombres.
- Connaître les règles de calcul pour les racines et savoir les appliquer.
- Savoir résoudre une racine partiellement.
- Savoir noter une racine comme puissance (avec exposants rationnels) et savoir l'appliquer pour simplifier des calculs.
- Savoir ce que sont un monôme et un polynôme.
- Savoir déterminer le degré d'un polynôme.
- Savoir additionner, soustraire, multiplier et diviser des polynômes.
- Connaître les produits remarquables et savoir les appliquer.
- Savoir factoriser des polynômes à l'aide des trois méthodes apprises :
  - Mise en évidence
  - Produits remarquables
  - Décomposition des trinômes (somme et produit)
- Savoir combiner les trois méthodes de factorisation dans le même exercice.
- Savoir simplifier des fractions rationnelles grâce à la factorisation.
- Savoir résoudre des équations à l'aide de la factorisation.
- Savoir trouver le plus petit dénominateur commun de fractions rationnelles pour pouvoir les additionner ou les soustraire.

---

## 6.2 Exercices

**1.** Calcule et simplifie le plus possible les expressions suivantes et écris les réponses sans exposant négatif ni rationnel.

a) $\left(\dfrac{2}{5}\right)^3=$ &ensp; b) $-4^{-2}=$ &ensp; c) $2^{-8} \cdot (2^{-2} \cdot 2 \cdot 2^5)^4=$ &ensp; d) $\dfrac{x^5 \cdot x^{-2}}{(x^3 \cdot x)^2}=$ &ensp; e) $\dfrac{25x^7y^5}{10x^9y}=$

f) $\dfrac{12x^3y^{-1}}{8x^{-2}y}=$ &ensp; g) $\left(\dfrac{3x^{-2}yz^2}{x^4y^{-3}z^2}\right)^3=$ &ensp; h) $\sqrt[3]{x^5} \cdot \sqrt{x^3} \cdot x^{\frac{4}{5}}=$ &ensp; i) $\dfrac{\sqrt[4]{a^7} \cdot b^{\frac{2}{5}}}{a^{\frac{1}{3}} \cdot \sqrt[5]{b}}=$

**2.** Évalue les expressions suivantes.

a) $\sqrt[3]{3} \cdot \sqrt[3]{-9}=$ &ensp; b) $\sqrt[6]{\dfrac{64}{729}}=$ &ensp; c) $\dfrac{\sqrt[3]{32}}{\sqrt[3]{4}}=$ &ensp; d) $\sqrt[3]{\left(\dfrac{3}{4}\right)^6}=$ &ensp; e) $81^{-\frac{1}{4}}=$ &ensp; f) $\left(\dfrac{16}{25}\right)^{-\frac{3}{2}}=$

**3.** Effectue et simplifie.

a) $(x^2-x+1)(x^2+x+1)=$

b) $(a^2-b^2)(2a-3b+5c)+(b-a)(3a^2+4bc-5ac)+(b^2-a^2)(4a-3b+c)=$

c) $(y+2)[y^2-(1-y)]-y(2-y^2)=$

d) $z^3+a^2z-[a^3-(z+a)(z^2+a^2)]=$

e) $[(x^2+1)-3x(x+2)][x-(x^2+1)]=$

**4.**

Une fenêtre est formée d'un demi-cercle et d'un rectangle avec les côtés $a$ et $b$ (voir figure ci-contre).

![Fenêtre](Bilder/fenster.png)

a) Détermine le polynôme qui donne le périmètre de cette fenêtre en fonction de $a$ et $b$.

b) Détermine le polynôme qui donne l'aire de cette fenêtre en fonction de $a$ et $b$.

c) Détermine le périmètre et l'aire de cette fenêtre si $a = 0.9\,m$ et $b = 1.3\,m$.

**5.** Effectue les divisions polynomiales suivantes.

a) $(3x^3-6x^2-x+4):(-3x)=$

b) $(y^3-y^2+y-1):(y-1)=$

c) $(x^3+3x^2+2x-4):(x^2+3x)=$

d) $(6a^4-31a^2+26a-5):(1+2a^2-4a)=$

**6.** Factorise le plus possible.

a) $6x^2+3x=$ &ensp; b) $4u^3v-8u^2v^2+16u^2v=$ &ensp; c) $4(3x-5)+5x(3x-5)=$ &ensp; d) $9x^2-64y^2=$

e) $81x^4-y^4=$ &ensp; f) $x^2-8x+15=$ &ensp; g) $u^2-10u+25=$ &ensp; h) $x^2-16x+64=$ &ensp; i) $4t^8+20t^4+25=$

j) $x^2-17x+60=$ &ensp; k) $u^2+13u+36=$ &ensp; l) $t^2+t-42=$ &ensp; m) $2t^2-11t+15=$

**7.** Factorise et simplifie les fractions suivantes.

a) $\dfrac{3x+9}{x^2-9}=$ &ensp; b) $\dfrac{8-2u}{u^2-u-12}=$ &ensp; c) $\dfrac{x^2-25}{2x^2-8x-10}=$ &ensp; d) $\dfrac{2x^3-x^2-10x}{x^3-2x^2-8x}=$

**8.** Détermine les solutions des équations.

a) $5x^2-10x=0$ &ensp; b) $2x^3-4x^2-16x=0$ &ensp; c) $x^4-81=0$

**9.** Écris les expressions suivantes comme une seule fraction simplifiée en factorisant les dénominateurs.

a) $\dfrac{2}{u^2+3u}+\dfrac{12}{u^3-9u}=$ &ensp; b) $\dfrac{3x+8}{x+2}+\dfrac{16}{3x^2+4x-4}=$

c) $\dfrac{u}{u^2-7u+6}-\dfrac{2u}{u^2-2u-24}=$ &ensp; d) $\dfrac{2}{t-2}+\dfrac{3}{t+1}-\dfrac{t-8}{t^2-t-2}=$

---

## 6.3 Solutions

**1.**

a) $\dfrac{8}{125}$ &ensp; b) $-\dfrac{1}{16}$ &ensp; c) $2^8 = 256$ &ensp; d) $\dfrac{1}{x^5}$ &ensp; e) $\dfrac{5y^4}{2x^2}$ &ensp; f) $\dfrac{3x^5}{2y^2}$ &ensp; g) $\dfrac{27y^{12}}{x^{18}}$ &ensp; h) $\sqrt[30]{x^{119}}$ &ensp; i) $\sqrt[12]{a^{17}}\,\sqrt[5]{b}$

**2.**

a) $-3$ &ensp; b) $\dfrac{2}{3}$ &ensp; c) $2$ &ensp; d) $\dfrac{9}{16}$ &ensp; e) $\dfrac{1}{3}$ &ensp; f) $\dfrac{125}{64}$

**3.**

a) $x^4+x^2+1$

b) $-5a^3+3a^2b+9a^2c+2ab^2-9abc$

c) $2y^3+3y^2-y-2$

d) $2z^3+az^2+2a^2z$

e) $2x^4+4x^3-5x^2+7x-1$

**4.**

a) $P = a+2b+\dfrac{\pi}{2}a$

b) $A = ab+\dfrac{\pi}{8}a^2$

c) $P = 4.91\,m$, $A = 1.49\,m^2$

**5.**

a) $-x^2+2x+\dfrac{1}{3}$ &ensp; reste : $4$

b) $y^2+1$

c) $x$ &ensp; reste : $2x-4$

d) $3a^2+6a-5$

**6.**

a) $3x(2x+1)$ &ensp; b) $4u^2v(u-2v+4)$ &ensp; c) $(3x-5)(4+5x)$ &ensp; d) $(3x-8y)(3x+8y)$

e) $(3x-y)(3x+y)(9x^2+y^2)$ &ensp; f) $(x-3)(x-5)$ &ensp; g) $(u-5)^2$ &ensp; h) $(x-8)^2$ &ensp; i) $(2t^4+5)^2$

j) $(x-5)(x-12)$ &ensp; k) $(u+4)(u+9)$ &ensp; l) $(t-6)(t+7)$ &ensp; m) $(2t-5)(t-3)$

**7.**

a) $\dfrac{3}{x-3}$ &ensp; b) $\dfrac{-2}{u+3}$ &ensp; c) $\dfrac{x+5}{2(x+1)}$ &ensp; d) $\dfrac{2x-5}{x-4}$

**8.**

a) $S = \{0\,;\,2\}$ &ensp; b) $S = \{0\,;\,-2\,;\,4\}$ &ensp; c) $S = \{-3\,;\,3\}$

**9.**

a) $\dfrac{2}{u(u-3)}$ &ensp; b) $\dfrac{9x}{3x-2}$ &ensp; c) $\dfrac{u}{(u-1)(u+4)}$ &ensp; d) $\dfrac{4}{t-2}$

---

## Bibliographie

- Klett und Balmer Verlag (Hs.) 2013 : *Lambacher Schweizer Mathematik 9/10*, Baar.
- ERPI SCIENCES 2017 : *Mise à niveau mathématique*, Josée Hamel.
- GYB : *Vorlesungsskript Mathematik*, Version 2013.
- Gymnase Intercantonal de la Broye 2014 : *Mathématiques. Ecole de maturité*, Payerne.
- www.mathe-trainer.de
- www.wikipedia.org
