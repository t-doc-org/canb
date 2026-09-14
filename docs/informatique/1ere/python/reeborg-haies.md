# Reeborg - parcours de haies

```{image} images/haies.png
:alt: Parcours de haies - Reeborg
:width: 100%
:align: center
```

Reeborg fait une course de saut à la haie et doit atteindre le drapeau.

Votre programme doit éviter les répétitions en utilisant `for i in range()` et être le plus clair possible en créant de nouvelles commandes à l'aide de `def nouvelle_commande()`.

```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```

Choisir le monde `Haies 1`.

````{solution}
```{exec} python
:when:
# Définitions de commandes
def tourne_a_droite(): 
    for _ in range(3): 
        tourne_a_gauche() 

def avance_et_tourne_a_gauche():
    avance() 
    tourne_a_gauche()
    
def avance_et_tourne_a_droite():
    avance()
    tourne_a_droite()
    
def saute(): 
    avance_et_tourne_a_gauche()
    for _ in range(2):
        avance_et_tourne_a_droite()
    avance_et_tourne_a_gauche() 

# Programme

for _ in range(6):     
    saute() 
```
````
