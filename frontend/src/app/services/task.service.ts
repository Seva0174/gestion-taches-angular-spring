import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Task } from '../models/task.model';

/**
 * Service Angular pour gérer les appels API
 * 
 * @Injectable permet l'injection de dépendances
 * providedIn: 'root' = singleton partagé dans toute l'application
 */
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  
  // URL de l'API backend
  private apiUrl = 'http://localhost:8080/api/tasks';
  
  /**
   * Injection du HttpClient Angular
   * HttpClient permet de faire des requêtes HTTP
   */
  constructor(private http: HttpClient) { }
  
  /**
   * GET /api/tasks
   * Récupère toutes les tâches
   * 
   * Observable = flux de données asynchrone (comme une Promise améliorée)
   */
  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.apiUrl);
  }
  
  /**
   * POST /api/tasks
   * Crée une nouvelle tâche
   */
  createTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.apiUrl, task);
  }
  
  /**
   * PUT /api/tasks/{id}
   * Met à jour une tâche existante
   */
  updateTask(task: Task): Observable<Task> {
    return this.http.put<Task>(`${this.apiUrl}/${task.id}`, task);
  }
  
  /**
   * DELETE /api/tasks/{id}
   * Supprime une tâche
   */
  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
