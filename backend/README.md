# 🚀 Backend Spring Boot - API REST

API REST simple pour l'application To-Do.

## 📦 Prérequis

- Java 17 ou supérieur
- Maven 3.6+

## ▶️ Démarrer l'API

### Avec Maven Wrapper (recommandé)

```bash
./mvnw spring-boot:run
```

### Avec Maven installé

```bash
mvn spring-boot:run
```

L'API sera disponible sur **http://localhost:8080**

## 🔌 Endpoints disponibles

| Méthode | URL | Description |
|---------|-----|-------------|
| GET | `/api/tasks` | Récupère toutes les tâches |
| GET | `/api/tasks/{id}` | Récupère une tâche spécifique |
| POST | `/api/tasks` | Crée une nouvelle tâche |
| PUT | `/api/tasks/{id}` | Met à jour une tâche |
| DELETE | `/api/tasks/{id}` | Supprime une tâche |

## 📝 Format JSON

### Task Object

```json
{
  "id": 1,
  "title": "Apprendre Angular",
  "completed": false
}
```

## 🧪 Tester l'API

### Avec curl

```bash
# Récupérer toutes les tâches
curl http://localhost:8080/api/tasks

# Créer une nouvelle tâche
curl -X POST http://localhost:8080/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Ma nouvelle tâche","completed":false}'

# Marquer une tâche comme terminée
curl -X PUT http://localhost:8080/api/tasks/1 \
  -H "Content-Type: application/json" \
  -d '{"title":"Apprendre Angular","completed":true}'

# Supprimer une tâche
curl -X DELETE http://localhost:8080/api/tasks/1
```

## 🏗️ Architecture

```
backend/
├── src/main/java/com/todo/app/
│   ├── TodoApplication.java      # Point d'entrée
│   ├── controller/
│   │   └── TaskController.java   # Endpoints REST
│   ├── service/
│   │   └── TaskService.java      # Logique métier
│   ├── repository/
│   │   └── TaskRepository.java   # Accès aux données
│   └── model/
│       └── Task.java             # Modèle de données
└── pom.xml                       # Configuration Maven
```

## 📚 Concepts Java/Spring utilisés

- **@RestController** - Contrôleur REST
- **@Service** - Composant de service
- **@Repository** - Composant d'accès aux données
- **Injection de dépendances** - Via constructeur
- **ResponseEntity** - Réponses HTTP typées
- **@CrossOrigin** - Configuration CORS pour Angular

## 💾 Stockage des données

Les données sont stockées **en mémoire** (pas de base de données). 
Elles sont perdues au redémarrage de l'application.

Parfait pour l'apprentissage sans configuration complexe !

## 🔧 Personnalisation

Pour changer le port, modifiez `application.properties` :

```properties
server.port=9090
```
