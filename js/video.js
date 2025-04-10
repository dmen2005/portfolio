export function addVideoScreen(scene, videoSrc, position, rotation) {
    const video = document.createElement('video');
    video.src = videoSrc;
    video.load();
    video.play();
    video.loop = true;
    video.muted = true;
    video.playsInline = true;

    const videoTexture = new THREE.VideoTexture(video);
    const material = new THREE.MeshBasicMaterial({ map: videoTexture, side: THREE.DoubleSide });

    const geometry = new THREE.PlaneGeometry(16, 9);
    const screen = new THREE.Mesh(geometry, material);
    position = position || { x: 10000, y: 5, z: 0 };
    rotation = rotation || { x: 0, y: 0, z: 0 };

    screen.position.set(position.x, position.y, position.z);
    screen.rotation.set(rotation.x, rotation.y, rotation.z);

    scene.add(screen);
    
    video.play().catch((e) => {
        console.warn("Autoplay blocked:", e);
    });

    document.body.addEventListener('click', () => {
        video.play().catch((e) => {
            console.warn("Play failed on click:", e);
        });
    });
}

export function addAllScreens(scene) {
    addVideoScreen(scene, 'video/platformer.mp4', { x: 10, y: 5, z: -56 }, { x: 0, y: 5 *Math.PI / 4, z: 0 });
    addVideoScreen(scene, 'video/RapidRush.mp4', { x:  30, y: 5, z: -76 }, { x: 0, y: 5 *Math.PI / 4, z: 0 });
    addVideoScreen(scene, 'video/blackjack.mp4', { x:  50, y: 5, z: -96 }, { x: 0, y: 5 *Math.PI / 4, z: 0 });

    addVideoScreen(scene, 'video/comingsoon.mp4', { x:  -20, y: 5, z: -66 }, { x: 0, y: 5 *Math.PI / -4, z: 0 });
    addVideoScreen(scene, 'video/comingsoon.mp4', { x:  -40, y: 5, z: -86 }, { x: 0, y: 5 *Math.PI / -4, z: 0 });
    addVideoScreen(scene, 'video/comingsoon.mp4', { x:  -60, y: 5, z: -106 }, { x: 0, y: 5 *Math.PI / -4, z: 0 });


    addVideoScreen(scene, 'video/roulet.mp4', { x:  55, y: 5, z: -114 }, { x: 0, y: 0, z: 0 });
    addVideoScreen(scene, 'https://raw.githubusercontent.com/dmen2005/portfolio/master/video/race.mp4', { x: 25, y: 5, z: -114 }, { x: 0, y: 0, z: 0 });
    addVideoScreen(scene, 'https://raw.githubusercontent.com/dmen2005/portfolio/master/video/story.mp4', { x: -5, y: 5, z: -114 }, { x: 0, y: 0, z: 0 });
    addVideoScreen(scene, 'video/comingsoon.mp4', { x:  -35, y: 5, z: -114 }, { x: 0, y: 0, z: 0 });


}

