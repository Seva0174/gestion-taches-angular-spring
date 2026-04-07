import { Component, OnInit } from '@angular/core';
import { TaskService } from './services/task.service';
import { Task } from './models/task.model';

/**
 * Composant principal de l'application
 * 
 * @Component décore la classe pour en faire un composant Angular
 */
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  // Propriétés du composant (state)
  tasks: Task[] = [];              // Liste de toutes les tâches
  filteredTasks: Task[] = [];      // Liste filtrée affichée
  newTaskTitle: string = '';       // Titre de la nouvelle tâche
  currentFilter: string = 'all';   // Filtre actuel: 'all', 'active', 'completed'
  
  /**
   * Injection du service TaskService
   * Angular fournit automatiquement l'instance
   */
  constructor(private taskService: TaskService) { }
  
  /**
   * Lifecycle hook appelé à l'initialisation du composant
   * Parfait pour charger les données initiales
   */
  ngOnInit(): void {
    this.loadTasks();
  }
  
  /**
   * Charge toutes les tâches depuis l'API
   */
  loadTasks(): void {
    // subscribe() = écouter l'Observable retourné par le service
    this.taskService.getTasks().subscribe({
      next: (tasks) => {
        this.tasks = tasks;
        this.applyFilter();  // Appliquer le filtre actuel
      },
      error: (error) => {
        console.error('Erreur lors du chargement des tâches:', error);
        alert('Impossible de charger les tâches. L\'API est-elle démarrée ?');
      }
    });
  }
  
  /**
   * Ajoute une nouvelle tâche
   */
  addTask(): void {
    // Validation
    if (!this.newTaskTitle.trim()) {
      alert('Le titre ne peut pas être vide');
      return;
    }
    
    // Créer l'objet tâche
    const newTask: Task = {
      title: this.newTaskTitle.trim(),
      completed: false
    };
    
    // Appel API
    this.taskService.createTask(newTask).subscribe({
      next: (task) => {
        this.tasks.push(task);      // Ajouter à la liste
        this.newTaskTitle = '';      // Réinitialiser le champ
        this.applyFilter();          // Rafraîchir l'affichage
      },
      error: (error) => {
        console.error('Erreur lors de la création:', error);
        alert('Impossible de créer la tâche');
      }
    });
  }
  
  /**
   * Bascule l'état terminé/non terminé d'une tâche
   */
  toggleTask(task: Task): void {
    const updatedTask = { ...task, completed: !task.completed };
    
    this.taskService.updateTask(updatedTask).subscribe({
      next: (updated) => {
        // Mettre à jour dans la liste locale
        const index = this.tasks.findIndex(t => t.id === updated.id);
        if (index !== -1) {
          this.tasks[index] = updated;
          this.applyFilter();
        }
      },
      error: (error) => {
        console.error('Erreur lors de la mise à jour:', error);
        alert('Impossible de mettre à jour la tâche');
      }
    });
  }
  
  /**
   * Supprime une tâche
   */
  deleteTask(id: number | undefined): void {
    if (!id) return;
    
    if (confirm('Supprimer cette tâche ?')) {
      this.taskService.deleteTask(id).subscribe({
        next: () => {
          // Retirer de la liste locale
          this.tasks = this.tasks.filter(t => t.id !== id);
          this.applyFilter();
        },
        error: (error) => {
          console.error('Erreur lors de la suppression:', error);
          alert('Impossible de supprimer la tâche');
        }
      });
    }
  }
  
  /**
   * Change le filtre actif
   */
  setFilter(filter: string): void {
    this.currentFilter = filter;
    this.applyFilter();
  }
  
  /**
   * Applique le filtre actuel sur les tâches
   */
  applyFilter(): void {
    switch (this.currentFilter) {
      case 'active':
        this.filteredTasks = this.tasks.filter(t => !t.completed);
        break;
      case 'completed':
        this.filteredTasks = this.tasks.filter(t => t.completed);
        break;
      default:
        this.filteredTasks = [...this.tasks];
    }
  }
  
  /**
   * Compteurs pour l'affichage
   */
  get remainingCount(): number {
    return this.tasks.filter(t => !t.completed).length;
  }
  
  get completedCount(): number {
    return this.tasks.filter(t => t.completed).length;
  }
}
