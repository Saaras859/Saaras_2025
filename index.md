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
    position: relative; /* For cursor positioning */
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
    right: -0.015em; /* Adjust to align the cursor with text */
    border-right: .015em solid orange;
    height: 1.2em; /* Adjust to match font size */
    animation: blink-caret .75s step-end infinite;
  }

  h2 {
    color: #0099cc;
  }

  @keyframes typing {
    from { width: 0 }
    to { width: 100% }
  }

  @keyframes deleting {
    from { width: 100% }
    to { width: 0 }
  }

  @keyframes continuousTypingDeleting {
    0%, 100% {
      width: 0;
      visibility: hidden;
    }
    50% {
      width: 100%;
      visibility: visible;
    }
  }

  /* Slower blinking animation */
  @keyframes blink-caret {
    from, to {
      opacity: 0;
    }
    25%, 75% {
      opacity: 1;
    }
  }
</style>


<div class="typewriter">
  <h1>Saaras's Page</h1>
</div>

Go to my [Github account](https://github.com/Saaras859) !!

<iframe width="560" height="315" src="https://www.youtube.com/embed/_uk_6vfqwTA" frameborder="0" allowfullscreen></iframe>


## Overview of Hacks, Study and Tangibles
Blogging in GitHub pages is a way to learn and code at the same time. 

-👋 Hi, I’m Saaras Kodali i'm a 10th grader at Del Norte.  
-👀 I’m interested in Quantum Computing and Machine Learning.  
-🌱 I’m currently learning Markdown, how Quantum Computers work.  
-💞️ I’m looking to collaborate on Open Source all though im building my skills right now.  
-📫 How to reach me kodalisaaras@gmail.com, 8587890950.  
-💀 I am currently looking to learn more about git and anyways I can contribute to developing software 