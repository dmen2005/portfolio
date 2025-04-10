let yaw = 0;
let pitch = 0;
const speed = 0.2;
const sensitivity = 0.002;
const keys = {};
let player, camera;
let playerHead;

export function setupControls(p, cam) {
    player = p;
    camera = cam;

    playerHead = new THREE.Object3D();
    playerHead.position.set(0, 1, 0);
    player.add(playerHead);
    playerHead.add(camera);

    document.addEventListener('keydown', (event) => keys[event.key] = true);
    document.addEventListener('keyup', (event) => keys[event.key] = false);

    document.addEventListener('click', () => {
        if (document.pointerLockElement !== document.body) {
            document.body.requestPointerLock();
        }
    });
    
    document.addEventListener('pointerlockchange', () => {
        if (document.pointerLockElement !== document.body) {
            console.log("Pointer unlocked. Click to lock again.");
        }
    });
    

    document.addEventListener('mousemove', (event) => {
        if (document.pointerLockElement === document.body) {
            yaw -= event.movementX * sensitivity;
            pitch -= event.movementY * sensitivity;

            //incase it breaks again
            pitch = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, pitch));
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'm') {
            window.open('mailto:drentdamian@gmail.com', '_blank');
        }
    
        if (event.key === 'l') {
            window.open('https://www.linkedin.com/in/damian-drent-6106982a2/', '_blank');
        }
    
        if (event.key === 'g') {
            window.open('https://github.com/dmen2005', '_blank');
        }
    });
}

export function updateControls() {
    const direction = new THREE.Vector3(0, 0, -1).applyEuler(new THREE.Euler(0, yaw, 0));
    const rightDirection = new THREE.Vector3(1, 0, 0).applyEuler(new THREE.Euler(0, yaw, 0));

    if (keys['w']) player.position.addScaledVector(direction, speed);
    if (keys['s']) player.position.addScaledVector(direction, -speed);
    if (keys['a']) player.position.addScaledVector(rightDirection, -speed);
    if (keys['d']) player.position.addScaledVector(rightDirection, speed);

    player.rotation.y = yaw;
    playerHead.rotation.set(pitch, 0, 0);
}
