package com.example.todo_api.service;

import com.example.todo_api.model.Task;
import org.springframework.stereotype.Service;

import java.util.concurrent.ConcurrentHashMap;
import java.util.concurrent.atomic.AtomicLong;
import java.util.*;

@Service
public class TaskService {
    private final Map<Long, Task> store = new ConcurrentHashMap<>();
    private final AtomicLong seq = new AtomicLong(1);

    public List<Task> getAllTasks() {
        return new ArrayList<>(store.values());
    }

    public Task addTask(Task newTask) {
        long id = seq.getAndIncrement();
        Task saved = new Task(id, newTask.getTitle(), newTask.getDescription(), newTask.getDueDate(), false);
        store.put(id, saved);
        return saved;
    }

    public Optional<Task> markCompleted(long id, boolean completed) {
        Task task = store.get(id);
        if (task == null) return Optional.empty();
        task.setCompleted(completed);
        return Optional.of(task);
    }

    public boolean deleteTask(long id) {
        return store.remove(id) != null;
    }
}
