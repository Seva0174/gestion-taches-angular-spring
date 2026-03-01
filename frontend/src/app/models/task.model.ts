/**
 * Interface représentant une tâche
 * Correspond au modèle Java côté backend
 */
export interface Task {
  id?: number;        // ? = optionnel (null pour nouvelles tâches)
  title: string;
  completed: boolean;
}
