---
layout: base
title: Student Home 
description: Home Page
hide: true
---

<!-- Parallax Scrolling Background -->
<style>
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    color: white;
    background: url('https://source.unsplash.com/random/1920x1080') no-repeat center center fixed;
    background-size: cover;
  }

  .parallax {
    height: 100vh;
    background-attachment: fixed;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
  }

  .content {
    padding: 20px;
    background: rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    text-align: center;
    margin: 50px auto;
    width: 80%;
    max-width: 600px;
  }

  button, a {
    padding: 10px 20px;
    margin: 10px;
    font-size: 1.2em;
    color: white;
    background-color: #2e7d32; /* Dark Green Color */
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: transform 0.3s ease, background-color 0.3s ease;
  }

  button:hover, a:hover {
    transform: scale(1.1);
    background-color: #1b5e20; /* Darker Green on Hover */
  }
</style>

<!-- Dynamic Greeting Based on Time of Day -->
<div class="content">
  <h1 id="greeting"></h1>
</div>

<!-- Fun Fact Pop-up -->
<div class="content">
  <button onclick="showFunFact()">Click me for a fun fact!</button>
</div>

<script>
  // Dynamic Greeting Based on Time of Day
  function updateGreeting() {
    const hour = new Date().getHours();
    let greeting;

    if (hour < 12) {
      greeting = "Good Morning, Welcome to Saaras's Page!";
    } else if (hour < 18) {
      greeting = "Good Afternoon, Hope you're having a great day!";
    } else {
      greeting = "Good Evening, Relax and enjoy your time here!";
    }

    document.getElementById('greeting').innerText = greeting;
  }
  updateGreeting();

  // Fun Fact Pop-up
  function showFunFact() {
    const facts = [
      "Did you know? Quantum computing could revolutionize medicine by designing more efficient drugs.",
      "Fun Fact: A single qubit can represent both 0 and 1 simultaneously in quantum computing.",
      "Interesting: The first computer virus was created in 1983 and was called 'Elk Cloner'.",
      "Did you know? The human brain operates on about 20 watts of power, roughly the same as a light bulb.",
      "Surprising: The first email was sent by Ray Tomlinson to himself in 1971."
    ];
    const randomFact = facts[Math.floor(Math.random() * facts.length)];
    alert(randomFact);
  }
</script>
[About Me](navigation/about.md)
[Plan vs reality](navigation/planvsreality.md.md)
