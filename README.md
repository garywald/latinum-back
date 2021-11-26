# LOREM BACKEND

[![Commitizen friendly](https://img.shields.io/badge/commitizen-friendly-brightgreen.svg)](http://commitizen.github.io/cz-cli/)


## Instructions
Pour pouvoir réussir à faire ingérer à Kube le password, vous devrez performer une github action qui vous permettra de générer une image docker et la push dans votre repo dockerHub. Ceci fait, vous enverrez à votre partner in crime le chemin de votre image distante pour qu'il puisse préparer le logiciel d'ingestion.

### STEPS
* Récupérer le projet
* Faire le manifest de votre image docker et optimisez là pour qu'elle soit la plus fine possible.
* Réaliser une github action sur votre projet qui se lancera à la demande:
    * buildera votre image docker
    * enverra votre image sur votre repository
* Envoyez le lien à votre formateur ainsi que le mot de passe COMPLET qu'il doit retrouver
