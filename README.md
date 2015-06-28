# monCV (doc) - page web Statique

## Outils utilis�s

   - Notepad++: �diteur de texte.
   - GitHub: est un service web d'h�bergement et de gestion de d�veloppement de logiciels, 
   - Git Shell - command line
   - Node.js : est une plate-forme pour facilement construire des applications.
   - npm : g�re les d�pendances javascript.
   - yeoman - g�n�rateur yeoman : permet de g�n�rer une structure pour notre application (weApp)
   - grunt: est un op�rateur de t�ches.
   - bower: permet de g�rer les d�pendances web.
   
## Les diff�rentes �tapes
Tout d'abord, dans un dossier nomm� MonCv, cr�er un fichier .html pour le contenu et un fichier .css pour la mise en forme. Eventuellement int�grer le fichier .css de Bootstrap dans le projet (<a href="http://getbootstrap.com/">http://getbootstrap.com</a>).

### Etape 1
T�l�charger et installer Node.js  (<a href="https://nodejs.org/">https://nodejs.org</a>) ce qui permet d'avoir le npm.
Ensuite avec le CommandLine (cmd), installer les outils yeoman, bower et grunt gr�ce � la commande: $ npm install -g yo bower grunt-cli. 

### Etape 2
Avec le CommandLine, cr�er un repertoir "monCV" : $ mkdir monCV.
En parall�le,tT�l�charger et installer GitHub sur notre machine (<a href="https://windows.github.com/">https://windows.github.com</a>)
S'enregistrer �galement (en ligne) pour le serveur github (<a href="https://github.com/">https://github.com</a>) qui �bergera notre application statique.
Ouvrir le Git Shell, se positionner sur notre repertoir ($ cd monCV) et lancer g�n�rateur yeoman avec la commande $ yo webapp. Ceci permettra de faire une nouvelle structure pour l'application.
Rem: Dans le repertoir de l'application, plusieurs fichiers et dossier y sont automatiquement cr�es.

### Etape 3
Faire un apper�u de l'application dans un navigateur (Google chrome, IE, Mozilla). Pour voir si la page statique cr�e correspond � celle souhait�e.
Dans le Git Shell, utiliser la commande: grunt serve, cela affichera la page statique dans le navigateur.
grunt restera alors en attente ce qui nous permettra de visualiser, de mani�re instantan�e toutes les modification port�es sur notre repertoir. pour stropper le grunt, faire la commande : ctrl+c.
Ensuite faire une compressions des documents de l'application dans le dist, ceci ce fait avec la commande grunt build dans le Git Shell.
Avant de compresser les documents, ne pas oublier de supprimer la ligne 387 ('test) dans le fichier "Gruntfile.js" qui se trouve dans le repertoire de l'application.

### Etape 4
Sur le compte gitHub en ligne, cr�er un nouveau repertoring.
Depuis GitHub en local, faire un clone du repertoring et y copier le dist (compr�ss�) de l'application statique.
Ce dist sera alors charger sur l'application GitHub en local.
Il suffit de selectionner tous les �l�ments charg�s, mettre une description et appuyer sur commit pour valider les changements.
Enfin appuyer sur Publish et synch. pour envoyer le dist au serveur GitHub, pour que notre application puisse �tre consultable sur le Web.

