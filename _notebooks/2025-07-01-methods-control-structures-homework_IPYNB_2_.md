---
layout: post
title: Homework
categories: ['AP CSA']
menu: nav/CSA_Units/frqs/methods_per3.html
permalink: /methods_per3/homework
---

# Team Teach Homework

# **Maze Solver Problem**

## **Instructions**


Your task is to write a method `solveMaze(char[][] maze, int startX, int startY)` that determines whether a path exists from a starting point `(startX, startY)` in a 2D maze to the exit marked as `'E'`. Use recursion to explore the maze.

---

## **Requirements**

### **Input**


- A 2D array of characters (`char[][] maze`) representing the maze.  


- An integer `startX` indicating the row index of the starting point.  


- An integer `startY` indicating the column index of the starting point.

### **Output**


- Return `true` if there is a path from `(startX, startY)` to `'E'`.  


- Return `false` if no such path exists.



### **Maze Rules**


- `' '` represents an open path (you can move here).  


- `'#'` represents a wall (you cannot move here).  


- `'E'` represents the exit (this is the destination).  

### **Movement**


- You can move **up**, **down**, **left**, or **right** to adjacent cells.  


- You cannot move diagonally or leave the bounds of the maze.  


### **Marking Visited Cells**


- To avoid revisiting the same cells, mark visited cells as `'#'` temporarily during recursion. Restore them to `' '` after backtracking.

---

## **Steps to Solve**


1. Check if the current position is valid:


   - Is it within the bounds of the maze?


   - Is it an open path or the exit?


2. Check if the current position is `'E'`. If yes, return `true`.


3. Mark the current cell as visited (change it to `'#'`).


4. Recursively explore all possible directions (up, down, left, right).


5. If any direction leads to the exit, return `true`.


6. Restore the cell to `' '` after exploring (backtracking).


7. If no paths lead to the exit, return `false`.

---


```Java
Test Case 2: Starting at the Exit


char[][] maze = {
    {'#', '#', '#', '#', '#'},
    {'#', ' ', ' ', '#', 'E'},
    {'#', ' ', '#', ' ', '#'},
    {'#', ' ', ' ', ' ', '#'},
    {'#', '#', '#', '#', '#'}
};

System.out.println(solveMaze(maze, 1, 4)); // Output: true
```


```Java
public class MazeSolver {
    public static boolean solveMaze(char[][] maze, int startX, int startY) {
        // Check if the current position is out of bounds or invalid
        if (startX < 0 || startX >= maze.length || startY < 0 || startY >= maze[0].length || maze[startX][startY] == '#') {
            return false;
        }

        // Check if the current position is the exit
        if (maze[startX][startY] == 'E') {
            return true;
        }

        // Mark the current cell as visited
        maze[startX][startY] = '#';

        // Explore all possible directions: up, down, left, right
        if (solveMaze(maze, startX - 1, startY) ||  // Move up
            solveMaze(maze, startX + 1, startY) ||  // Move down
            solveMaze(maze, startX, startY - 1) ||  // Move left
            solveMaze(maze, startX, startY + 1)) {  // Move right
            return true;
        }

        // Restore the cell to its original state for backtracking
        maze[startX][startY] = ' ';

        return false; // No valid path found
    }
}

```


```Java
// Test Case 1
char[][] maze1 = {
    {'#', '#', '#', '#', '#'},
    {'#', ' ', '#', '#', 'E'},
    {'#', ' ', '#', '#', '#'},
    {'#', ' ', ' ', ' ', '#'},
    {'#', '#', '#', '#', '#'}
};
System.out.println(MazeSolver.solveMaze(maze1, 3, 1)); // Expected Output: false

```

    false



```Java
// Test Case 2
char[][] maze2 = {
    {'#', '#', '#', '#', '#'},
    {'#', ' ', ' ', ' ', 'E'},
    {'#', ' ', '#', ' ', '#'},
    {'#', ' ', ' ', ' ', '#'},
    {'#', '#', '#', '#', '#'}
};
System.out.println(MazeSolver.solveMaze(maze2, 1, 1)); // Expected Output: true

```

    true



```Java
//Test Case 3: Starting at the Exit


char[][] maze = {
    {'#', '#', '#', '#', '#'},
    {'#', ' ', ' ', '#', 'E'},
    {'#', ' ', '#', ' ', '#'},
    {'#', ' ', ' ', ' ', '#'},
    {'#', '#', '#', '#', '#'}
};

System.out.println(MazeSolver.solveMaze(maze2, 1, 1)); // Output: True(but we talked in class and false was agreed on)
```

    false

