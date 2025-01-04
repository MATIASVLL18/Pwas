document.getElementById("tulipButton").addEventListener("click", () => {
    const flowerContainer = document.getElementById("flowerContainer");
  
    for (let i = 0; i < 20; i++) {
      const tulip = document.createElement("div");
      tulip.className = "tulip";
      tulip.style.left = Math.random() * 100 + "%";
      tulip.style.animationDuration = Math.random() * 2 + 3 + "s";
  
      flowerContainer.appendChild(tulip);
  
      // Remove the tulip after animation to avoid overflow
      setTimeout(() => {
        flowerContainer.removeChild(tulip);
      }, 5000);
    }
  });
  