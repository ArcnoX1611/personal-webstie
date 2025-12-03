import './style.css';
import { initScene } from './src/js/scene.js';
import { initAnimations } from './src/js/animations.js';

document.addEventListener('DOMContentLoaded', () => {
    initScene();
    initAnimations();
});
