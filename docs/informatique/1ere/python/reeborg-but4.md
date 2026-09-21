# Reeborg - rentrer à la maison

```{image} images/but4.png
:alt: PBut 4 - Reeborg
:width: 70%
:align: center
```

Reeborg doit rentrer chez lui.

Votre programme doit éviter les répétitions en utilisant `for i in range()` et être le plus clair possible en créant de nouvelles commandes à l'aide de `def nouvelle_commande()`.

Pour trouver le monde, choisir *But 4* dans le menu du milieu.

```{iframe} https://oci.e-apprendre.ch/reeborg-prog-light/reeborg_offline.html?lang=fr&mode=python&menu=worlds%2Fmenus%2Freeborg_intro_fr.json&name=Seul&url=worlds%2Ftutorial_fr%2Fseul.json
:style: height : 1100px; width : 800px;
```

````{solution}
```{exec} python
:when:
# Définition des nouvelles commandes

# Avance de 3 cases
def avance_3_cases(): 
    for _ in range(3): 
        avance() 

# Tourne à droite
def tourne_a_droite(): 
    for i in range(3): 
        tourne_a_gauche() 

# Parcours un L
def avance_en_L(): 
    # Parcours une ligne de 3 cases 
    avance_3_cases() 

    # Tourne vers prochaine ligne 
    tourne_a_gauche() 
  
    # Parcours une ligne de 3 cases 
    avance_3_cases() 

# Se place face au prochain L
def prochain_L(): 
    tourne_a_droite() 
    avance() 
    tourne_a_droite() 

# Programme
 
for i in range(3): 
    avance_en_L() 
    prochain_L() 

avance_en_L() 

# A la fin, il n'y a pas besoin d'aller à la prochain ligne 
```
````
