const mpHands = window;
const drawingUtils = window;
const controls = window;
const controls3d = window;

const videoElement = document.getElementsByClassName('input_video')[0];
const canvasElement = document.getElementsByClassName('output_canvas')[0];
const controlsElement = document.getElementsByClassName('control-panel')[0];

const canvasCtx = canvasElement.getContext('2d');

const config = { locateFile: (file) => {
    return
   `https://cdn.jsdelivr.net/npm/@mediapipe/hands@${mpHands.VERSION}/${file}`;

} };

const fpsControl = new controls.FPS();

function onResults(results) {
}