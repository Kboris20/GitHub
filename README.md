# monCV (doc) - page web Statique

## Outils utilisés

   - Notepad++: éditeur de texte.
   - GitHub: est un service web d'hébergement et de gestion de développement de logiciels, 
   - Git Shell - command line
   - Node.js : est une plate-forme pour facilement construire des applications.
   - npm : gère les dépendances javascript.
   - yeoman - générateur yeoman : permet de générer une structure pour notre application (weApp)
   - grunt: est un opérateur de tâches.
   - bower: permet de gérer les dépendances web.
   
## Les différentes étapes
Tout d'abord, dans un dossier nommé MonCv, créer un fichier .html pour le contenu et un fichier .css pour la mise en forme. Eventuellement intégrer le fichier .css de Bootstrap dans le projet (<a href="http://getbootstrap.com/">http://getbootstrap.com</a>).

### Etape 1
Télécharger et installer Node.js  (<a href="https://nodejs.org/">https://nodejs.org</a>) ce qui permet d'avoir le npm.
Ensuite avec le CommandLine (cmd), installer les outils yeoman, bower et grunt grâce à la commande: $ npm install -g yo bower grunt-cli. 

### Etape 2
Avec le CommandLine, créer un repertoir "monCV" : $ mkdir monCV.
En parallèle,tTélécharger et installer GitHub sur notre machine (<a href="https://windows.github.com/">https://windows.github.com</a>)
S'enregistrer également (en ligne) pour le serveur github (<a href="https://github.com/">https://github.com</a>) qui ébergera notre application statique.
Ouvrir le Git Shell, se positionner sur notre repertoir ($ cd monCV) et lancer générateur yeoman avec la commande $ yo webapp. Ceci permettra de faire une nouvelle structure pour l'application.
Rem: Dans le repertoir de l'application, plusieurs fichiers et dossier y sont automatiquement crées.

### Etape 3
Faire un apperçu de l'application dans un navigateur (Google chrome, IE, Mozilla). Pour voir si la page statique crée correspond à celle souhaitée.
Dans le Git Shell, utiliser la commande: grunt serve, cela affichera la page statique dans le navigateur.
grunt restera alors en attente ce qui nous permettra de visualiser, de manière instantanée toutes les modification portées sur notre repertoir. pour stropper le grunt, faire la commande : ctrl+c.
Ensuite faire une compressions des documents de l'application dans le dist, ceci ce fait avec la commande grunt build dans le Git Shell.
Avant de compresser les documents, ne pas oublier de supprimer la ligne 387 ('test) dans le fichier "Gruntfile.js" qui se trouve dans le repertoire de l'application.

### Etape 4
Sur le compte gitHub en ligne, créer un nouveau repertoring.
Depuis GitHub en local, faire un clone du repertoring et y copier le dist (compréssé) de l'application statique.
Ce dist sera alors charger sur l'application GitHub en local.
Il suffit de selectionner tous les éléments chargés, mettre une description et appuyer sur commit pour valider les changements.
Enfin appuyer sur Publish et synch. pour envoyer le dist au serveur GitHub, pour que notre application puisse être consultable sur le Web.

