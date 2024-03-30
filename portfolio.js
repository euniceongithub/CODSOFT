const sentences = [
    "Hello, World!",
    "I'm Eunice Akligo,",
    "and I'm a Full-Stack Developer."
  ];
  
  let currentSentenceIndex = 0;
  let currentCharIndex = 0;
  const typingSpeed = 70;
  const eraseSpeed = 30;
  
  function typeWriter() {
    const sentence = sentences[currentSentenceIndex];
  
    if (currentCharIndex < sentence.length) {
      document.getElementById("typewriter").textContent += sentence.charAt(currentCharIndex);
      currentCharIndex++;
      setTimeout(typeWriter, typingSpeed);
    } else {
      setTimeout(eraseWriter, 2000);
    }
  }
  
  function eraseWriter() {
    const sentence = sentences[currentSentenceIndex];
  
    if (currentCharIndex >= 0) {
      document.getElementById("typewriter").textContent = sentence.substring(0, currentCharIndex - 1);
      currentCharIndex--;
      setTimeout(eraseWriter, eraseSpeed);
    } else {
      currentSentenceIndex++;
      if (currentSentenceIndex >= sentences.length) {
        currentSentenceIndex = 0;
      }
      setTimeout(typeWriter, 1000); 
    }
  }
  
  typeWriter();