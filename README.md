# Aplication de Tache Angular et SpringBoot
* Frontend -> Angular
* Backend -> Spring Boot
* Stockage -> en memoire
## Architecture du projet

projet_todo_list/ <br>
│<br>
├── backend/   -> API REST Spring Boot <br>
└── frontend/  -> Application Angular <br>

## Backend
### Technologies utilisées
* Java 17+
* Spring Boot
* Maven
* API REST
### Lancer le backend
1. faire ``./mvnw spring-boot:run`` dans le repertoire ``backend``
2. Aller sur : ``http://localhost:8080``
### Endpoints disponibles
| Méthode | URL               | Description                 |
| ------- | ----------------- | --------------------------- |
| GET     | `/api/tasks`      | Récupérer toutes les tâches |
| GET     | `/api/tasks/{id}` | Récupérer une tâche         |
| POST    | `/api/tasks`      | Créer une tâche             |
| PUT     | `/api/tasks/{id}` | Modifier une tâche          |
| DELETE  | `/api/tasks/{id}` | Supprimer une tâche         |

## Frontend
### Technologies utilisées

* Angular
* TypeScript
* HttpClient
* FormsModule

## Lancer Frontend
1. faire ``npm install`` puis ``npm start``
2. Aller sur ``http://localhost:4200`` pour utiliser l'aplication

## Configuaration CORS 
Le backend autorise les requêtes provenant de :
```
http://localhost:4200
http://127.0.0.1:4200
```

## Objectif du projet
* Decouvrir Angular et SpringBoot
* Comprendre l’architecture REST
* Apprendre la communication Angular <-> Spring Boot
* Manipuler les services Angular (HttpClient)
* Comprendre le CORS
* Structurer un projet fullstack

## Amelioration  futur
* Sauvegarde des tâches dans une base de données
* Ajout d’un système d’authentification
* Date d’échéance pour les tâches
