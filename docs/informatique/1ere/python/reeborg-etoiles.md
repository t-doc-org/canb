# Reeborg - étoiles

```{image} images/etoiles.png
:alt: Etoiles - Reeborg
:width: 100%
:align: center
```

Reeborg doit arriver à l'emplacement 30 en montant en haut de chaque tour d'étoiles.

Votre programme doit éviter les répétitions en utilisant `for i in range()` et être le plus clair possible en créant de nouvelles commandes à l'aide de `def nouvelle_commande()`.

Pour trouver le monde, choisir *Tâches supplémentaires* dans le menu de gauche puis *Les étoiles* dans le menu du milieu.

```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```

````{solution}
```{exec} python
:when:
# Définitions de commandes
def avance_2_fois(): 
    for _ in range(2): 
        avance() 

def avance_3_fois(): 
    for _ in range(3): 
        avance() 

def avance_4_fois(): 
    for _ in range(4): 
        avance() 

def monter(): 
    for _ in range(9): 
        avance() 

def descendre(): 
    for _ in range(9): 
        avance() 

def demi_tour(): 
    for _ in range(2): 
        tourne_a_gauche() 

def monter_et_descendre(): 
    tourne_a_gauche() 
    monter() 
    demi_tour() 
    descendre() 
    tourne_a_gauche() 
    
# Programme

avance_3_fois() 

for _ in range(6): 
    monter_et_descendre() 
    avance_4_fois() 

monter_et_descendre() 

avance_2_fois() 
```
````
