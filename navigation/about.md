# About Me

## Introduction
Hi, I'm Saaras! I'm a high schooler passionate about computer science and physics. I enjoy exploring new technologies and working on projects that challenge my skills.

## My Interests
- **Coding**: I love creating web applications and exploring new programming languages.
- **Physics**: Understanding the laws of nature and how the universe works fascinates me.
- **Food**: I'm a big fan of Thai cuisine and enjoy trying new dishes.

## My Projects
Here are some of the projects I've worked on:

- **Project 1**: [Portfolio Website](https://github.com/saaraas-kodali/portfolio_2025)  
  A personal portfolio website that showcases my projects and skills.
  
- **Project 2**: **Physics Simulation**  
  A simulation of basic physics principles using JavaScript.

## Ideation Process in Jupyter Notebooks

### Step 1: HTML Structure
I started by creating a basic HTML structure with a container element to hold my content. This allowed me to organize my thoughts and plan how the page would look.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Me</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            background-color: #f4f4f4;
            color: #333;
            margin: 0;
            padding: 0;
        }
        .container {
            margin: 0 auto;
            max-width: 800px;
            padding: 20px;
            background-color: #fff;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        h1 {
            color: #333;
        }
        #dynamicContent {
            color: #007BFF;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>About Me</h1>
        <p id="intro">Hi, I'm Saaras! I'm a high schooler passionate about computer science and physics.</p>
        <button onclick="updateContent()">Click me to learn more!</button>
        <p id="dynamicContent"></p>
    </div>
    <script>
        function updateContent() {
            document.getElementById('dynamicContent').textContent = "I am excited to share my projects and interests with you!";
        }
    </script>
</body>
</html>
