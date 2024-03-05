console.log("BinaryBridgeNetwork.API0029266164910.success.fully.connected");

const button = document.getElementById("animated-button");

button.addEventListener("click", () => {
  button.style.transform = "scale(0.8)";
  
  setTimeout(() => {
    button.style.transform = "scale(1)";
  }, 300); // This should match the transition duration in the CSS
});

