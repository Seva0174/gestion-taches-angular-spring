package com.todo.app.repository;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.concurrent.atomic.AtomicLong;

import org.springframework.stereotype.Repository;

import com.todo.app.model.Task;

/**
 * Repository simple en mémoire (sans base de données)
 * Parfait pour apprendre sans configuration complexe
 */
@Repository
public class TaskRepository {
    
    // Stockage en mémoire
    private final List<Task> tasks = new ArrayList<>();
    private final AtomicLong idCounter = new AtomicLong(1);
    
    // Initialisation avec quelques tâches d'exemple
    public TaskRepository() {
        tasks.add(new Task(idCounter.getAndIncrement(), "Apprendre Angular", false));
        tasks.add(new Task(idCounter.getAndIncrement(), "Créer une API REST", true));
        tasks.add(new Task(idCounter.getAndIncrement(), "Maîtriser les Services", false));
    }
    
    /**
     * Récupère toutes les tâches
     */
    public List<Task> findAll() {
        return new ArrayList<>(tasks);
    }
    
    /**
     * Trouve une tâche par son ID
     */
    public Optional<Task> findById(Long id) {
        return tasks.stream().filter(task -> task.getId().equals(id)).findFirst();
    }
    
    /**
     * Crée une nouvelle tâche
     */
    public Task save(Task task) {
        if (task.getId() == null) {
            // Nouvelle tâche
            task.setId(idCounter.getAndIncrement());
            tasks.add(task);
        } else {
            // Mise à jour d'une tâche existante
            Optional<Task> existing = findById(task.getId());
            existing.ifPresent(t -> {
                t.setTitle(task.getTitle());
                t.setCompleted(task.isCompleted());
            });
        }
        return task;
    }
    
    /**
     * Supprime une tâche
     */
    public boolean deleteById(Long id) {
        return tasks.removeIf(task -> task.getId().equals(id));
    }
}
