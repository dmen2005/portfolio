import * as THREE from 'https://cdn.jsdelivr.net/npm/three@0.128.0/build/three.module.js';
import { setupControls, updateControls } from './controls.js';
import { createMap,  } from './map.js';
import { addAlltext } from './ui.js';
import { addAllScreens, addVideoScreen } from './video.js';






const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const playerGeometry = new THREE.BoxGeometry(1, 2, 1);
const playerMaterial = new THREE.MeshStandardMaterial({ color: 0x44aa88 });
const player = new THREE.Mesh(playerGeometry, playerMaterial);
player.position.set(0, 1, 0);
scene.add(player);

addVideoScreen(scene);
addAllScreens(scene);
addAlltext(scene);
createMap(scene);
setupControls(player, camera);

function animate() {
    requestAnimationFrame(animate);
    updateControls(); 
    renderer.render(scene, camera);
}

animate();

renderer.setSize(window.innerWidth,window.innerHeight);
window.addEventListener('resize', () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
});
