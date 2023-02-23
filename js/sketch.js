/** TODO:
 * screen-record video of you playing it
 * github page it
 */
// let bass = new Tone.Player("sounds/bass-loop.wav");

let sounds = new Tone.Players({
  "bass": "sounds/bass-loop.wav",
  "808": "sounds/808-hit.wav",
  "drums": "sounds/drumloop.wav",
  "guitar": "sounds/guitar-power-chord-E.wav"
})
let soundNames = ["bass", "808", "drums", "guitar"];
let buttons = [];
let dSlider, fSlider;
const delay = new Tone.FeedbackDelay("8n", 0.5);

function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination(); //load sounds

  // create each button, name them, and add their sounds
  soundNames.forEach((soundName, i) => {
    buttons[i] = createButton(soundName);
    buttons[i].position(i, i*50);
    buttons[i].mousePressed( () => buttonSound(soundName) )
  })

  // dSlider = createSlider(0., 1., 0.5, 0.05);
  // dSlider.mouseReleased( () => {
  //   delay.delayTime.value = dSlider.value();
  // })

  fSlider = createSlider(0., 1., 0.5, 0.05);
  fSlider.mouseReleased( () => {
    delay.feedback.value = fSlider.value();
  })
}

function draw() { //don't put sound.start in the draw function!
  background(220);
  text("press the buttons for sound", 0, 190);
  text("slide the slider to change the feedback", 0, 205);
}

// function keyPressed() {
//   sound1.playbackRate = (mouseY / 200) + 0.05;
//   sound1.start(); //plays sound
// }

function buttonSound(sound) {
  sounds.player(sound).start();
}