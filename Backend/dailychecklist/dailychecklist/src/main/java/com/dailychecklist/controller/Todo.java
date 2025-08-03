package com.dailychecklist.controller;


enum TodoStatus{
  Todo,
  InProgress,
  Blocker,
  Completed,
}

enum TodoDifficulty {
  Easy,
  Medium,
  Hard,
}

enum TodoPriority {
  P0,
  P1,
  P2,
}

public class Todo {
  private Integer id;
  private String title;
  private String description;
  private TodoStatus status;
  private String dueDate;
  private TodoDifficulty difficulty;
  private TodoPriority priority;

  public Todo(Integer id, String title, String description, TodoStatus status, String dueDate, TodoDifficulty difficulty, TodoPriority priority) {
    this.id = id;
    this.title = title;
    this.description = description;
    this.status = status;
    this.dueDate = dueDate;
    this.difficulty = difficulty;
    this.priority = priority;
  }

  public Integer getId() {
    return id;
  }
  public void setId(Integer id) {
    this.id = id;
  }
  public String getTitle() {
    return title;
  }
  public void setTitle(String title) {
    this.title = title;
  }
  public String getDescription() {
    return description;
  }
  public void setDescription(String description) {
    this.description = description;
  }
  public TodoStatus getStatus() {
    return status;
  }
  public void setStatus(TodoStatus status) {
    this.status = status;
  }
  public String getDueDate() {
    return dueDate;
  }
  public void setDueDate(String dueDate) {
    this.dueDate = dueDate;
  }
  public TodoDifficulty getDifficulty() {
    return difficulty;
  }
  public void setDifficulty(TodoDifficulty difficulty) {
    this.difficulty = difficulty;
  }
  public TodoPriority getPriority() {
    return priority;
  }
  public void setPriority(TodoPriority priority) {
    this.priority = priority;
  }
}
