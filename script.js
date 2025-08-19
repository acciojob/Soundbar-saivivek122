//your JS code here. If required.
const sounds = ["applause", "boo", "gasp","tada","victory","wrong"];

const buttonsDiv = document.getElementById("buttons");

sounds.forEach(sound => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound;

  btn.addEventListener("click", () => {
    stopSounds();
    const audio = document.getElementById(sound);
    audio.play();
  });

  buttonsDiv.appendChild(btn);

 const audio = document.createElement("audio");
  audio.src = `sounds/${sound}.mp3`;
  audio.id = sound;
  document.body.appendChild(audio);
});	

const stopBtn = document.createElement("button");
stopBtn.classList.add("stop");
stopBtn.innerText = "Stop";
stopBtn.addEventListener("click", stopSounds);
buttonsDiv.appendChild(stopBtn);

function stopSounds() {
  sounds.forEach(sound => {
    const audio = document.getElementById(sound);
    audio.pause();
    audio.currentTime = 0;
  });
}