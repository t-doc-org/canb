% Copyright 2026 Brice Canvel <brccvl@proton.me>
% SPDX-License-Identifier: CC-BY-NC-SA-4.0

# RSA

## Introduction

Nous avons vu durant le cours qu'il est possible, à l'aide de la cryptographie
asymétrique, de chiffrer et signer des messages en utilisant un couple de clés
privée/publique (il n'est possible de déchiffrer qu'avec la clé correspondant à
celle qui a été utilisée pour chiffrer).

KEZAKO : Comment crypte-t-on les données sur internet ?

```{iframe} https://www.youtube.com/embed/PW_x5m08QRQ
:style: height : 400px; width : 700px;
```

Deux possibilités s'offrent à nous avec le chiffrement asymétrique :

- **Chiffrement** : l'expéditeur a besoin de la clé publique du destinataire avec
  laquelle il chiffre le message (ou l'information à envoyer). Le destinataire
  utilise sa clé privée pour déchiffrer le message.

```{image} images/pgp_schema-chiffrement-alice-bob.jpg
:alt: Alice chiffre un message avec la clé publique de Bob, Bob le déchiffre avec sa clé privée
:width: 100%
:align: center
```

*Source : [apprendre-en-ligne.net](http://apprendre-en-ligne.net)*

- **Signature** : l'expéditeur chiffre (signe) le hash du message avec sa clé
  privée. Le destinataire a besoin de la clé publique de l'expéditeur pour
  déchiffrer (vérifier) la signature.

```{image} images/pgp_schema-signature-verification.png
:alt: Schéma de la signature numérique d'un document et de sa vérification
:width: 60%
:align: center
```

*Source : [fr.wikipedia.org](http://fr.wikipedia.org)*

## PGP

PGP -- Pretty Good Privacy -- est une implémentation d'un système de chiffrement
asymétrique.

Vous allez l'utiliser pour vous créer des clés et chiffrer/signer des messages
que vous vous enverrez par email.

Rendez-vous sur le site suivant :

- <https://pgptool.org/> (dead)
- <https://pgp.najm.uk/>

### Génération d'un couple de clés

```{iframe} https://oci.e-apprendre.ch/PGP-main/
:style: height: 1400px;
```

Remplissez les champs situés à gauche (mettez VOTRE nom et VOTRE adresse email) --
la « Passphrase » est un mot de passe utilisé pour protéger votre clé privée --
ne l'oubliez pas :

```{image} images/pgp_formulaire-generation-cles.png
:alt: Formulaire « Generate PGP Keys » rempli avec le nom, l'adresse email et la passphrase
:width: 70%
:align: center
```

Puis cliquez sur Generate Keys ...

Après un moment, vous verrez apparaître vos clés à droite de la fenêtre :

```{image} images/pgp_cles-generees-telechargement.png
:alt: Blocs de clé publique et de clé privée générés, avec les boutons de téléchargement
:width: 60%
:align: center
```

Téléchargez la clé publique et la clé privée. Vous trouverez dans le dossier
Téléchargement vos 2 clés :

```{image} images/pgp_fichiers-cles-sec-pub-asc.png
:alt: Les deux fichiers de clés téléchargés, l'un en -sec.asc et l'autre en -pub.asc
:width: 70%
:align: center
```

Renommez-les en gardant à la fin le `-sec.asc` (sec pour clé secrète) et
`-pub.asc` (pub pour clé publique) mais en y mettant devant votre prénom, votre
nom et votre classe.

Vous aurez donc 2 fichiers :

- `Prénom Nom 2FX-sec.asc`
- `Prénom Nom 2FX-pub.asc`

Déposez le fichier contenant votre clé publique dans le répertoire dont vous trouverez le lien sur Moodle.

## Envoyer des messages chiffrés et signés

```{iframe} https://oci.e-apprendre.ch/PGP-main/
:style: height: 1400px;
```

Allez dans l'onglet Encrypt (+Sign) :

```{image} images/pgp_onglet-encrypt-sign.png
:alt: Onglet « Encrypt (+Sign) » de l'outil PGP avec les champs à remplir
:width: 70%
:align: center
```

Vous allez chiffrer et signer un message pour votre voisin·e.

Vous devez pour cela charger la clé publique du destinataire qui sera utilisée
pour chiffrer le message (Receiver's public key) dans le répertoire dont vous trouverez le lien sur Moodle (le même que celui où vous avez déposé votre fichier de clé publique).

Vous devez également charger votre clé privée pour signer le message (Signer's
private key) et le mot de passe que vous avez utilisé lors de sa création. Si
vous ne mettez pas votre clé privée, alors le message sera uniquement chiffré
mais pas signé.

Si tout se passe bien, quand vous cliquez sur « Encrypt the message », vous
devriez voir un message indiquant que tout s'est bien passé et vous pourrez
télécharger le message chiffré :

```{image} images/pgp_message-chiffre-signe.png
:alt: Message « successfully encrypted and signed » avec le bouton pour télécharger le message chiffré
:width: 70%
:align: center
```

Créez un email pour le destinataire dans lequel vous mettez en pièce-jointe le
message chiffré que vous venez de télécharger.

### Déchiffrer le message et vérifier la signature

```{iframe} https://oci.e-apprendre.ch/PGP-main/
:style: height: 1400px;
```

Quand vous recevez un message, téléchargez-le puis allez dans l'onglet Decrypt
(+Verify) :

```{image} images/pgp_onglet-decrypt-verify.png
:alt: Onglet « Decrypt (+Verify) » de l'outil PGP avec les champs à remplir
:width: 70%
:align: center
```

Je vous laisse réfléchir quelles sont les clés dont vous avez besoin pour
déchiffrer le message et vérifier la signature.

### Et maintenant pour le prof ...

Envoyez-moi un message chiffré et signé à mon adresse edufr.

% ## En pratique

% Il existe des fournisseurs web d'emails qui intègrent directement PGP. Il existe
% également des plugins que l'on peut intégrer aux applications de messagerie qui
% permettent également l'utilisation de PGP.

% Protonmail est un fournisseur qui propose PGP. Allez sur protonmail.com puis
% créez-vous un compte.

% Entrez ensuite vos coordonnées dans ce fichier :

% <https://eduetatfr-my.sharepoint.com/:x:/g/personal/brice_canvel_edufr_ch/ERf36WwpvjdDvSrL1MrfheMBE8qY9bNR7C2ISMjfBQr6lg?e=TuSerC>

% Envoyez un email à plusieurs camarades sur leur adresse protonmail (et votre
% enseignant <brice.canvel@protonmail.ch>).

% Protonmail utilise aussi un jeu de clés publique/privée. Voir cette courte
% vidéo : <http://bit.do/proton-cles>

% Lorsque le destinataire n'a pas protonmail, il est possible de chiffrer l'email
% à l'aide d'un mot de passe. Il faut ensuite transmettre celui-ci au destinataire
% (à l'aide d'une messagerie chiffrée telle que Threema, Signal, etc.).

## Pour en savoir plus

Voici quelques explications supplémentaires sur RSA :

- <https://apprendre-en-ligne.net/crypto/rsa/index.html> (chiffrement)
- <https://apprendre-en-ligne.net/crypto/moderne/integrite.html> (hashage)
- <https://apprendre-en-ligne.net/crypto/moderne/authentification.html> (signature)

Voici un site qui explique l'utilisation du chiffrement et pourquoi celui-ci est
important :

<https://www.hebergementwebs.com/securite-et-attaques-sur-internet/le-chiffrement-cryptage-des-donnees-comment-ca-marche-et-pourquoi-l-utiliser>
