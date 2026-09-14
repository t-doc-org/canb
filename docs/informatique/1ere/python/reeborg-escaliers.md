# Reeborg - escaliers

```{image} images/escaliers.png
:alt: Escaliers - Reeborg
:width: 100%
:align: center
```

Reeborg doit montrer (arriver au smiley) puis descendre les escaliers (retourner à son point de départ).

Votre programme doit éviter les répétitions en utilisant `for i in range()` et être le plus clair possible en créant de nouvelles commandes à l'aide de `def nouvelle_commande()`.

Pour charger le monde, ajouter `Monde("https://oci.e-apprendre.ch/reeborg-prog-light/mondes_supp/escaliers_perso.json")` au début du programme.

```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```

````{solution}
```{exec} python
:when:
# Définitions de commandes
def tourne_a_droite(): 
    for _ in range(3): 
        tourne_a_gauche() 

def avance_2_fois(): 
    for _ in range(2): 
        avance() 

def demi_tour(): 
    for _ in range(2): 
        tourne_a_gauche()  

def monte(): 
    tourne_a_gauche() 
    avance() 
    tourne_a_droite() 
    avance_2_fois() 

def descend(): 
    avance_2_fois() 
    tourne_a_gauche() 
    avance() 
    tourne_a_droite() 
     
# Programme

for _ in range(5): 
    monte() 

demi_tour() 

for _ in range(5): 
    descend() 
```
````
