export function addVideoScreen(scene) {
    const video = document.createElement('video');
    video.src = 'video/platformer.mp4';
    video.load();
    video.play();
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    const videoTexture = new THREE.VideoTexture(video);
    const material = new THREE.MeshBasicMaterial({ map: videoTexture, side: THREE.DoubleSide });

    const geometry = new THREE.PlaneGeometry(16, 9);
    const screen = new THREE.Mesh(geometry, material);
    screen.position.set(0, 5, -94); 

    scene.add(screen);
}
