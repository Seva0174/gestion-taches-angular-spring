# 🎨 Frontend Angular - Application To-Do

Application Angular simple pour apprendre les concepts de base.

## 📦 Prérequis

- Node.js 18+ 
- npm 9+
- Angular CLI 17+

## 📥 Installation

```bash
npm install
```

## ▶️ Démarrer l'application

```bash
npm start
# ou
ng serve
```

L'application sera disponible sur **http://localhost:4200**

⚠️ **Important** : Assurez-vous que le backend est démarré sur le port 8080 !

## 📚 Structure du projet

```
frontend/
├── src/
│   ├── app/
│   │   ├── models/
│   │   │   └── task.model.ts        # Interface TypeScript
│   │   ├── services/
│   │   │   └── task.service.ts      # Service HTTP
│   │   ├── app.component.ts         # Logique du composant
│   │   ├── app.component.html       # Template HTML
│   │   ├── app.component.css        # Styles CSS
│   │   └── app.module.ts            # Module racine
│   ├── index.html                   # Page HTML principale
│   ├── main.ts                      # Point d'entrée
│   └── styles.css                   # Styles globaux
├── angular.json                     # Configuration Angular
├── package.json                     # Dépendances npm
└── tsconfig.json                    # Configuration TypeScript
```

## 🎯 Concepts Angular dans le projet

### 1️⃣ Directives structurelles

```html
<!-- ngFor : boucler sur un tableau -->
<li *ngFor="let task of filteredTasks">{{ task.title }}</li>

<!-- ngIf : affichage conditionnel -->
<div *ngIf="tasks.length === 0">Aucune tâche</div>
```

### 2️⃣ Data Binding

```html
<!-- Property Binding : [] -->
<div [class.active]="isActive"></div>

<!-- Event Binding : () -->
<button (click)="deleteTask()">Supprimer</button>

<!-- Two-way Binding : [()] -->
<input [(ngModel)]="newTaskTitle" />

<!-- Interpolation : {{ }} -->
<span>{{ task.title }}</span>
```

### 3️⃣ Services et Injection de Dépendances

```typescript
// Service injectable
@Injectable({ providedIn: 'root' })
export class TaskService {
  constructor(private http: HttpClient) { }
}

// Injection dans un composant
constructor(private taskService: TaskService) { }
```

### 4️⃣ Appels HTTP avec HttpClient

```typescript
// GET
this.http.get<Task[]>(url).subscribe(tasks => { ... });

// POST
this.http.post<Task>(url, data).subscribe(task => { ... });

// PUT
this.http.put<Task>(url, data).subscribe(task => { ... });

// DELETE
this.http.delete<void>(url).subscribe(() => { ... });
```

### 5️⃣ Observables et RxJS

```typescript
// Observable = flux de données asynchrone
getTasks(): Observable<Task[]> {
  return this.http.get<Task[]>(this.apiUrl);
}

// Souscription avec gestion d'erreur
this.taskService.getTasks().subscribe({
  next: (data) => console.log(data),
  error: (err) => console.error(err)
});
```

## 🔧 Fonctionnalités implémentées

- ✅ Afficher la liste des tâches
- ✅ Ajouter une nouvelle tâche
- ✅ Marquer une tâche comme terminée
- ✅ Supprimer une tâche
- ✅ Filtrer par statut (toutes/actives/terminées)
- ✅ Compter les tâches restantes

## 💡 Exercices pour progresser

### Niveau Débutant
1. Changer les couleurs du thème
2. Ajouter un bouton "Tout supprimer"
3. Afficher l'heure de création

### Niveau Intermédiaire
4. Implémenter l'édition d'une tâche (double-clic)
5. Ajouter une date limite avec validation
6. Créer un composant séparé pour TaskItem
7. Sauvegarder le filtre dans localStorage

### Niveau Avancé
8. Ajouter des animations Angular
9. Implémenter le drag & drop pour réorganiser
10. Créer un système de catégories/tags
11. Ajouter une recherche/filtrage par texte
12. Implémenter la pagination

## 🐛 Dépannage

### Erreur CORS
Si vous voyez une erreur CORS, vérifiez que :
- Le backend est démarré sur le port 8080
- `@CrossOrigin` est bien configuré dans le contrôleur Java

### Module 'FormsModule' manquant
Si ngModel ne fonctionne pas :
- Vérifiez que `FormsModule` est importé dans `app.module.ts`

### Erreur de connexion à l'API
```
ERROR HttpErrorResponse: 0 Unknown Error
```
→ Le backend n'est pas démarré ou n'est pas accessible

## 📖 Ressources pour apprendre

- [Documentation officielle Angular](https://angular.dev)
- [Angular Tutorial (Tour of Heroes)](https://angular.dev/tutorial)
- [RxJS Documentation](https://rxjs.dev)

## 🚀 Build pour production

```bash
ng build --configuration production
```

Les fichiers seront générés dans `dist/todo-app/`
