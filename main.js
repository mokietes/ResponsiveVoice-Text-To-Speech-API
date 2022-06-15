document.querySelector("span").addEventListener("click", (e) => {
  responsiveVoice.speak(document.querySelector("input").value);
});
