package com.todo.app.service;

import com.todo.app.model.Task;
import com.todo.app.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

/**
 * Service contenant la logique métier
 */
@Service
public class TaskService {
    
    private final TaskRepository taskRepository;
    
    // Injection de dépendances via constructeur
    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
    }
    
    /**
     * Récupère toutes les tâches
     */
    public List<Task> getAllTasks() {
        return taskRepository.findAll();
    }
    
    /**
     * Récupère une tâche par ID
     */
    public Optional<Task> getTaskById(Long id) {
        return taskRepository.findById(id);
    }
    
    /**
     * Crée une nouvelle tâche
     */
    public Task createTask(Task task) {
        task.setId(null); // S'assurer que c'est une nouvelle tâche
        return taskRepository.save(task);
    }
    
    /**
     * Met à jour une tâche existante
     */
    public Optional<Task> updateTask(Long id, Task taskDetails) {
        Optional<Task> task = taskRepository.findById(id);
        if (task.isPresent()) {
            Task existingTask = task.get();
            existingTask.setTitle(taskDetails.getTitle());
            existingTask.setCompleted(taskDetails.isCompleted());
            return Optional.of(taskRepository.save(existingTask));
        }
        return Optional.empty();
    }
    
    /**
     * Supprime une tâche
     */
    public boolean deleteTask(Long id) {
        return taskRepository.deleteById(id);
    }
}
