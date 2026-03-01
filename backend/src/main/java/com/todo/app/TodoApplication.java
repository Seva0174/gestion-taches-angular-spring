package com.todo.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

/**
 * Classe principale de l'application Spring Boot
 * L'annotation @SpringBootApplication active la configuration automatique
 */
@SpringBootApplication
public class TodoApplication {
    
    public static void main(String[] args) {
        SpringApplication.run(TodoApplication.class, args);
        System.out.println("\n API Spring Boot démarrée sur http://localhost:8080");
        System.out.println("Endpoints disponibles:");
        System.out.println("   GET    http://localhost:8080/api/tasks");
        System.out.println("   POST   http://localhost:8080/api/tasks");
        System.out.println("   PUT    http://localhost:8080/api/tasks/{id}");
        System.out.println("   DELETE http://localhost:8080/api/tasks/{id}\n");
    }
}
