---
layout: base
title: Student Home 
description: Home Page
hide: true
---

<style>
  body {
    background-color: #171515;
    color: #00ffcc;
    animation: fadeInAnimation ease 3s;
    animation-iteration-count: 1;
    animation-fill-mode: forwards;
  }

  .typewriter h1 {
    position: relative;
    font-family: Monospace;
    white-space: nowrap;
    margin: 0 auto;
    letter-spacing: 0.015em;
    color: #0099cc; 
    overflow: hidden;
  }

  .typewriter h1::after {
    content: '';
    position: absolute;
    bottom: 0;
    right: -0.015em;
    border-right: .015em solid orange;
    height: 1.2em;
    animation: blink-caret .75s step-end infinite;
  }

  @keyframes blink-caret {
    from, to { opacity: 0; }
    25%, 75% { opacity: 1; }
  }

  h2 {
    color: #0099cc;
  }

  .animated-button {
    font-family: Monospace;
    padding: 10px 20px;
    margin: 20px 0;
    background-color: #0099cc;
    color: #ffffff;
    border: none;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .animated-button::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 300%;
    height: 300%;
    background: radial-gradient(circle, #00ffcc, #0099cc);
    transition: all 0.5s ease;
    transform: translate(-50%, -50%) scale(0);
    z-index: 0;
  }

  .animated-button:hover::before {
    transform: translate(-50%, -50%) scale(1);
  }

  .animated-button span {
    position: relative;
    z-index: 1;
  }

  .fade-in-text {
    opacity: 0;
    animation: fadeInText 2s forwards;
  }

  @keyframes fadeInText {
    to { opacity: 1; }
  }
</style>

<div class="typewriter">
  <h1>Saaras's Page</h1>
</div>

<button class="animated-button"><span>Click Me</span></button>

<div id="content">
  <h2 class="fade-in-text">Welcome to my page!</h2>
</div>

Go to my [Github account](https://github.com/Saaras859) !!

<iframe width="560" height="315" src="https://www.youtube.com/embed/_uk_6vfqwTA" frameborder="0" allowfullscreen></iframe>

<script>
  document.querySelector('.animated-button').addEventListener('click', function() {
    alert('Button Clicked!');
  });
</script>

## Overview of Hacks, Study and Tangibles
Blogging in GitHub pages is a way to learn and code at the same time. 

-👋 Hi, I’m Saaras Kodali i'm a 10th grader at Del Norte.  
-👀 I’m interested in Quantum Computing and Machine Learning.  
-🌱 I’m currently learning Markdown, how Quantum Computers work.  
-💞️ I’m looking to collaborate on Open Source all though im building my skills right now.  
-📫 How to reach me kodalisaaras@gmail.com, 8587890950.  
-💀 I am currently looking to learn more about git and anyways I can contribute to developing software 
