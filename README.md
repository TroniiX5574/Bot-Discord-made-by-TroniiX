# Bot-Discord-made-by-TroniiX
Open Source Bot Discord for manage communtiy

This bot has been coded in French, but only the commands need to be modified!

Présentation
Bienvenue dans le référentiel du projet Discord Bot, un modèle de bot Discord basé sur discord.js et créé par TroniiX. Ce modèle est conçu pour vous aider à démarrer la création de votre propre bot Discord en suivant le guide officiel de discord.js.

🏠 Page d'accueil
Introduction
Le modèle Discord Bot de TroniiX est un modèle de bot open source basé sur discord.js, vous permettant de démarrer un nouveau projet de bot. Il s'agit d'un modèle JavaScript classique qui ne nécessite aucune dépendance externe, contrairement à d'autres frameworks populaires. (Ce n'est pas un framework !)
Vous pouvez développer tout type de projet de bot en utilisant ce modèle, que ce soit basé sur un seul serveur ou sur plusieurs serveurs. Tout dépend de votre créativité !

🛠️ NOUVEAU ! Ce modèle prend désormais en charge le support intégré de la saisie (assistance TypeScript), ce qui signifie que vous bénéficierez d'une assistance similaire à TypeScript en JavaScript classique ! (Testé avec Visual Studio Code, fonctionne à 100% comme prévu)

Fonctionnalités :
Ce modèle propose de nombreuses fonctionnalités utiles et flexibles intégrées, telles que :

• Gestionnaire de commandes dynamique :
Mon modèle est doté d'un gestionnaire de commandes dynamique ! Grâce à celui-ci, vous n'avez pas besoin de modifier les fichiers principaux du bot pour créer vos propres commandes !

Vous pouvez simplement créer des groupes de commandes (catégorisés par dossiers) dans le dossier commands.
Vos commandes JavaScript doivent être placées dans les dossiers de catégorie correspondants. Un exemple de commande est fourni avec la commande warn. Vous pouvez utiliser le même modèle pour toutes les commandes souhaitées !

• Gestionnaire d'événements dynamique :
Tous les événements sont placés dans le dossier events. Vous n'avez pas besoin d'utiliser client.on() dans le fichier principal bot.js pour gérer les événements.
En utilisant un code squelette simple pour les événements, vous pouvez créer autant d'événements que vous le souhaitez dans le dossier des événements en utilisant le gestionnaire d'événements.

• Gestionnaire de déclencheurs dynamique :
Les déclencheurs se produisent lorsqu'une "phrase" spécifique est mentionnée dans le contenu d'un message. Par exemple, si vous souhaitez que votre bot réagisse avec un :heart: lorsque quelqu'un dit bienvenue dans son message, vous pouvez le faire avec ce gestionnaire de déclencheurs !
Le gestionnaire de déclencheurs a la même structure de base que le gestionnaire de commandes. Le gestionnaire de déclencheurs est associé au dossier triggers. Il existe des catégories de déclencheurs, comme le dossier reactions, dans le dossier des déclencheurs.
Un exemple de commande de déclencheur est donné dans le fichier embed.js.

• Gestionnaire de commandes slash dynamique :
Mon modèle est livré avec un gestionnaire de commandes slash dynamique, facile à personnaliser et à créer des commandes slash.
Les commandes, dans le dossier slashCommands, reçoivent un objet CommandInteraction. Vous pouvez consulter la documentation de discord.js pour connaître toutes les propriétés et méthodes disponibles.

IMPORTANT : Dans le modèle, nous envoyons les commandes slash à Discord pour les enregistrer uniquement sur 1 serveur. En effet, il existe 2 types de commandes slash, les commandes de serveur (guild) et les commandes globales (global). Les commandes de serveur sont limitées à 1 serveur, mais dès que vous les mettez à jour, elles prennent immédiatement effet, tandis que les commandes globales peuvent prendre jusqu'à 1 heure pour prendre effet. Utilisez donc les commandes de serveur en développement et les commandes globales en production.

• Gestionnaire d'interactions de boutons dynamiques :
Ce modèle est livré avec un gestionnaire d'interactions de boutons dynamiques pour recevoir et traiter les interactions de boutons.
Les boutons peuvent être classés dans deux dossiers de catégories.

• Gestionnaire d'interactions de modals dynamiques :
Gérez facilement les soumissions de modals entrantes à l'aide du gestionnaire de modals du modèle !
Les modals peuvent être classées dans différents dossiers.

• Gestionnaire de menus contextuels dynamiques :
Les menus contextuels sont une nouvelle addition à l'API de Discord ! Vous pouvez faire un clic droit sur un utilisateur ou un message, puis aller dans "Apps" pour trouver ces options !
Ce modèle enregistrera toutes vos options de menus contextuels et interagira dynamiquement avec elles ! Ça vaut le coup d'essayer.

• [NOUVEAU] Gestionnaire de demandes d'autocomplétion dynamique :
Gérez facilement les demandes d'autocomplétion entrantes à l'aide du gestionnaire de modèle !
Parfaitement dynamique pour tous vos besoins !

• Hautement personnalisable :
L'utilisation du modèle est si facile et amusante, vous le découvrirez par vous-même. Comme le modèle ne dépend d'aucune dépendance externe et est écrit en JavaScript, il est hautement personnalisable. Il n'y a pas de limite à votre créativité !

• Open source et auto-hébergé :
C'est le vôtre, vous avez un contrôle total.

## Install

```sh
npm install
```

## Configuration

- Go to config.json and change the values to your own.

## Run your bot

```sh
npm start
```

Auteur
👤 TroniiX

Twitter : @TroniiX
GitHub : @TroniiX5574
Contributeurs
👤 Only Me ;)

Montrez votre soutien
Donnez une ⭐️ si ce projet vous a aidé ! Votre soutien m'encourage à continuer.
Vous pouvez également sponsoriser le projet et être répertorié en tant que contributeur ! Merci beaucoup.

📝 Licence
Droit d'auteur © 2023 TroniiX.<br />
Ce projet est sous licence Apache-2.0.
