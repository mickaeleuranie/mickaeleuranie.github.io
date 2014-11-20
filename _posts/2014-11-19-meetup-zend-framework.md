---
layout: post
title:  "Premier Meetup Zend Framework"
date:   2014-11-19 23:24:42
categories: PHP Meetup Zend Framework Zend-Framework
summary: Compte-rendu du premier meetup Zend Framework
comments: true
shortUrl: http://goo.gl/TibqYx
share: true
---

Le lundi 17 novembre 2014 a eu lieu le premier meetup du groupe centré sur Zend Framework, dans des locaux pretés par Inovia ( [@inoviateam](http://twitter.com/inoviateam) ). Le programme était composé de deux présentations :

1. L'avenir de `Zend Framework`
2. 6 breaking points : débogage dans Zend Framework 2


## L'avenir de Zend Framework

Le ton est donné dès le début de cette présentation faite par Sophie Beaupuis ( [@so_php_ie](https://twitter.com/so_php_ie) ) armée de plusieurs elephpants : malgré de futurs changements radicaux, il n'est pas question pour le moment de la sortie d'une version 3 de Zend Framework, nous allons plutôt parler d'une version ZF2++.
Tout ce qui suit n'est pas officiel. Comme l'a dit Sophie : _C'est un peu raconter la fin de la saison avant qu'elle ne commence_. La philosophie est donc d'apporter des changements radicaux sans changer de version. La roadmap n'est pas encore établie.

### Idées reçues

Avant toute chose, il nous est rappelé que Zend est tout sauf une entreprise et ne gagne pas d'argent directement mais plutôt par le biais de formations, certifications et du consulting. De fait le framework n'est pas développé à des fin lucratives, son développement est donc moins actif que certains autres ayant un business plan différent.
Pour mettre à jour ce `framework` utilisé par des millions de développeurs, deux personnes seulement sont allouées à plein temps uniquement pendant leurs heures de travail : Matthew Weier O'Phinney ( [@mwop](http://twitter.com/mwop) ) et Enrico Zimuel ( [@ezimuel](http://twiter.com/ezimuel) ). A eux deux s'ajoute la communauté et les contributeurs qui sont un puissant moteur de l'évolution de ce framework.

### ZF3 oui ... Mais dans longtemps

L'arrivée de ZF2 a créé ce qu'on appelle un effet "big bang" qui a eu un impact néfaste pour le framework qu'ils ne souhaitent pas reproduire. Il n'y a aucune raison logique de vouloir sortir une nouvelle version alors que la deuxième n'est pas arrivée à maturation. A ce constat s'ajoute celui de la présence encore massive d'application ZF1. L'apparition d'une troisème version ne peut que ralentir le nombre de migration vers la dernière en date.
L'idée retenue est de faire évoluer la version 2 sans refondre entièrement l'existant. Ajouter sans modifier.

### Full-stack vers composants

La tendance d'application composée de multiples composant se ressent de plus en plus et la mode des solutions full-stack est progressivement remplacée par l'utilisation de composants indépendant les uns des autres. C'est également le cas de ZF2. Il sera donc possible de passer du modèle "évolutions synchronisées sur une release" avec un manque d'agilité vers - par exemple - la déléguation de contribution à des gestionnaires de sources dédiés.
ZF3 sera ce qu'était l'idée initiale de ce framework par Andi Gutmans ( [@andigutmans](http://twitter.com/andigutmans) ) : il permettra de n'ajouter que les librairies et autres éléments dont on a besoin.
Voyons plus en détail la structure visée.

### Architecture orientée middleware

Un workflow va être mis en place, tout le monde va pouvoir interagir sans se connaître car ils auront tous la même interface (à travers des requètes HTTP, avec une réponse qui se construit au fur et à mesure).
En effet, l'application se découpera en éléments qui reçoivent une requète et qui contribuent à un objet de réponse. L'API de message entre les différents éléments du workflow sera basée sur PSR-7 rédigé par Matthew Weier O'Phinney.
Ces évolutions vont finalement entraîner la disparition du workflow MVC actuel car chaque composant pourront communiquer sans se connaître, et pourront avoir plusieurs origines comme ZF2, Symfony, etc.
L'utilisation de workflow issus d'autres frameworks (tels que ZF1) permettra de favoriser l'interopérabilité. Tout ceci permettra de créer des éléments de middleware ZF1 et donc probablement à terme de ne plus avoir besoin de migrer vers ZF2. ZF1 et ZF2 pourront cohabiter grâce à la^même interface.

### Questions posées

Beaucoup de questions ont été posées suite à cette conférence et traduisent le malaise issu de l'annonce de l'absence d'une roadman claire et la relative fragilité de l'évolution du framework.

**- ZF2 va évoluer vers un micro framework ?**

Non ça va évoluer sans framework, le micro framework est le pire du framework. Si l'on veut construire son application il faut commencer par faire son workflow. Il reste possible de faire le routeur avec symfony et faire le reste avec Zend. En terme de classe ZF2 est découplé mais par en terme de dépendances.

**- Au niveau des composants y a des roadmap ? Pour par ex reproduire le comportement MVC**

Ca ne changera rien à ce qui existe aujourd'hui : l'idée est de ne rien casser, il sera juste possible de se passer du MVC pour n'utiliser que ce que l'on souhaite. L'idée est de pouvoir faire des choses nouvelles.

**- Est ce qu'il y aura encore tous les élements actuels (routeurs, etc)**

On ne sait pas encore, Matthew est encore en train d'y réfléchir

**- Est-ce que Zend va commencer à faire ce qu'à fait Symfony, utiliser des composants : Monolog excellent composant, pourquoi réécrire un Zend_Log qui sera moins abouti?**

Y a la politique de ne pas vouloir violenter les utilisateurs (Zend_Form, Zend_Log ...). L'idée est de se dire qu'il existe de supers choses à côté, il faut pouvoir s'en servir. C'est dans ce sens que va ZF2.

**- Quel moyen va mettre en oeuvre Zend pour arriver vers Zend 2++**

Le même qu'aujourd'hui (Matthew, Enrico). Les ressources sont déjà prises sur d'autres projets de R&D et sur Apigility. Donc les contributeurs sont les bienvenus. Entre le foot le dimanche et le framework ... Autant choisir le framework !

**- Ca ne reste donc pas stratégique chez zend comparé avec sensiolab (symfony)**

Non

**- On se dit que finalement chez Zend ça ne tien pas à grand chose du coup car symfony = structure, communauté qui bouge encore plus => c'est plus rassurant en tant que décideur de choisir autre chose**

Ce n'est pas la premiere fois que c'est entendu, c'est un problème connu. Zend est fait aux US, Symfony à clichy. Aux US Zend fonctionne très bien. Si vous prenez Symfony, ils vont tenter de vous vendre tous leurs produits [troll], Zend ça continue de bouger mais moins vite.

**- Comment appréhender les évolutions ? Faut-il migrer en ZF2 ? Attendre ? Est-ce que les composants ZF2 vont bientot fonctionner sur ZF1 ?**

Une appli évolue, si à un moment l'appli arrive à bout de souffle, il faut voir pour migrer, mais sinon il ne faut pas se décider à migrer. Il faut le faire seulement si à un moment ZF1 pose problème (décision de l'arrêter (pas prévu pour le moment), problèmes de performances, marketing (nous on est sur ZF2)...). La position de zend est qu'on ne migre pas juste pour migrer, même si - ok - la maintenabilité est meilleure sur ZF2. La migration n'est pas un problème en tant que tel, c'est la conséquence de l'évolution de l'application.

**- ZF2++ horison 18 mois ?**

Pas de décitions encore, il va y avoir un premier document qui va tout expliquer, il y aura de noveaux modules qui vont arriver progressibement, on va ajouter du code on ne va pas le modifier. Quand il y aura l'envie de virer les dinosaures y aura la v3.

**- Pourquoi pas faire de roadmap claire ?**

Car ce n'est pas écrit. Là c'est du non officiel.

**- A partir du moment ou la road map est claire y a pas de problème pour l'attente**

On sait mais là je vous annonce la fin de la saison avant qu'elle ne commence, y a pas de date, y a pas de roadmap.

///////////////////////////////////////////////////////////////////////////////////////////////////////////


## 6 breaking points : débogage dans Zend Framework 2

Corentin Larose ( [@Corentinlarose](http://twitter.com/@Corentinlarose) ) de chez [Qapa](http://qapa.fr) et contributeur open-source nous a ensuite présenté une méthode efficace pour cibler un bug à l'aide de points d'arrêts.
Il a tout d'abord fait un rappel sur la structure de ZF2 et expliqué l'intérêt d'avoir une certification. Une certification ne sert pas à dire que l'on est bon/mauvais mais que l'on a fait le tour du framework. Il invite d'ailleurs tout le monde à faire les tests Zend Certified pour que chacun se rende compte de ce qu'il sait ou pas de Zend.

### ZF2

Il faut avant tout savoir que ZF2 est event-driven, c'est à dire que des évènements sont envoyés, qu'un listener écoute et se dit qu'il doit faire quelque chose. Ceci est une très bonne méthode pour faire de l'héritage. Mais rend vite le débug compliqué.
Par exemple le ZF2 skeleton Hello World utilise 35 évènements pour l'afficher. Apigility en utilise 76 (!!!).

### MVC et évènements

Rappel de la structure MVC de ZF2 :

* Bootstrap (`\Zend\Mvc\MvcEvent::EVENT_BOOTSTRAP`) : config (Bonne recommandation : mettre cette config en cache)
* Route (`\Zend\Mvc\MvcEvent::EVENT_ROUTE`) : permet d'associer une URL (ou les arguments du CLI) à une classe dispatchable
* Dispatch (`\Zend\Mvc\MvcEvent::EVENT_DISPATCH`) : appel une méthode de cet objet
* Render (`\Zend\Mvc\MvcEvent::EVENT_RENDER`) : fait le rendu de la vue
* Finish (`\Zend\Mvc\MvcEvent::EVENT_FINISH`) : envoi de la réponse

### Ordre d'appel des évènements

Ces différents éléments sont appelés dans l'ordre suivant :

* \Zend\Mvc\Application::init() => bootstrap
* \Zend\Mvc\Application::run() => route, dispatch
* \Zend\Mvc\Application::completeRequest() => render, finish

Si un profilage est fait, on peut se rendre compte, environ 400 fichiers chargés, ce qui est un cauchemard à déboguer.

### 5 breakpoints

La solution proposée consiste dans un premier temps de localiser les appels à `$events->trigger(MvcEvent::EVENT_*)` et d'ajouter un point d'arrêt sur l'un desévènements cités plus haut en fonction du bug recherché (page introuvable, etc.).
Cette méthode peut être très longue car la stack d'appel peut vite paraêtre interminable. La subtilité réside dans l'utilisation d'un sixième point d'arrêt.

### Le 6e élém... Point d'arrêt

Ce point d'arrêt est à mettre dans la fonction `\Zend\EventManager\EventManager::triggerListeners()` qui propage l'évènement en question aux listeners. Il suffit de localiser `$responses->push(call_user_func($listenerCallback, $e));` et d'y placer le point d'arrêt. `$listenerCallback` est un tableau contenant les valeurs qui nous intéressent ici. En regardant dedans on sait qui il appelle.
L'astuce est d'activer/désactiver ce point d'arrêt lorsque l'on entre dans la zone de code qui nous intéresse.

**Remarque :**
Lors de sa démo il a utilisé `php -S 0.0.0.0:8888 -t public public/index.php` qui permet d'évaluer quelque chose en exécutant un petit serveur.

### Questions

Aucune question n'a été posée.

## Conclusion

Un seul mot d'ordre : contribuez ! Plus il y aura du monde pour faire avancer le framework, plus il évoluera. Le comparer avec Symfony est une erreur de base.
Il ne faut également pas toujours penser migration. Il ne faut migrer que si c'est nécessaire, pas uniquement pour passer à la dernière version.
Le déboguage pas-à-pas est un excellent moyen de cibler un bug.