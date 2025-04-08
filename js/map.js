export function createMap(scene) {
    const light = new THREE.DirectionalLight(0xffffff, 1);
    const ambientLight = new THREE.AmbientLight(0x404040, 5);
    scene.add(ambientLight);

    const groundGeometry = new THREE.PlaneGeometry(1000, 1000);
    const groundMaterial = new THREE.MeshStandardMaterial({ color: 0x888888 });
    const ground = new THREE.Mesh(groundGeometry, groundMaterial);
    ground.rotation.x = -Math.PI / 2;
    scene.add(ground);
    
    const roofMaterial = new THREE.MeshStandardMaterial({ color: 0x333333 });
    const roofGeometry = new THREE.BoxGeometry(1000, 1, 1000);
    const roof = new THREE.Mesh(roofGeometry, roofMaterial);
    roof.position.set(0,10,0);
    scene.add(roof);

    createWalls(scene);
}

export function createWalls(scene) {
    const wall1Material = new THREE.MeshStandardMaterial({ color: 0x008CFF });
    const wall2Material = new THREE.MeshStandardMaterial({ color: 0x5D3A9B });
    const wall3Material = new THREE.MeshStandardMaterial({ color: 0x800020 });
    const wall4Material = new THREE.MeshStandardMaterial({ color: 0x2C6B49 });
    const wall5Material = new THREE.MeshStandardMaterial({ color: 0x204D8C });



    const wall1Geometry = new THREE.BoxGeometry(100, 10, 1);
    const wall2Geometry = new THREE.BoxGeometry(50, 10, 1);
    const geometry = new THREE.CylinderGeometry(10, 10, 10, 32); 


    const wall1 = new THREE.Mesh(wall1Geometry, wall1Material); 
    wall1.position.set(53, 5, -50);
    scene.add(wall1);

    const wall2 = new THREE.Mesh(wall1Geometry, wall1Material); 
    wall2.position.set(-53, 5, -50);
    scene.add(wall2);

    const wall3 = new THREE.Mesh(wall1Geometry, wall1Material); 
    wall3.position.set(0, 8, -50);
    scene.add(wall3);

    const circle = new THREE.Mesh(geometry, wall5Material);
    circle.position.set(0, 5, -75);
    circle.rotation.x = -Math.PI / 1; 
    scene.add(circle);


    const wall4 = new THREE.Mesh(wall1Geometry, wall2Material); 
    wall4.position.set(50, 5, -53);
    wall4.rotation.y = Math.PI / 2;
    scene.add(wall4);

    const wall5 = new THREE.Mesh(wall1Geometry, wall2Material); 
    wall5.position.set(50, 5, 53);
    wall5.rotation.y = Math.PI / 2;
    scene.add(wall5);

    const wall6 = new THREE.Mesh(wall1Geometry, wall2Material); 
    wall6.position.set(50, 8, 0);
    wall6.rotation.y = Math.PI / 2;
    scene.add(wall6);

    const wall7 = new THREE.Mesh(wall1Geometry, wall3Material); 
    wall7.position.set(-50, 5, -53);
    wall7.rotation.y = Math.PI / 2;
    scene.add(wall7);

    const wall8 = new THREE.Mesh(wall1Geometry, wall3Material); 
    wall8.position.set(-50, 5, 53);
    wall8.rotation.y = Math.PI / 2;
    scene.add(wall8);

    const wall9 = new THREE.Mesh(wall1Geometry, wall3Material); 
    wall9.position.set(-50, 8, 0);
    wall9.rotation.y = Math.PI / 2;
    scene.add(wall9);

    const wall10 = new THREE.Mesh(wall1Geometry, wall4Material); 
    wall10.position.set(0, 5, 50);
    scene.add(wall10);

    //room1
    const wall11 = new THREE.Mesh(wall1Geometry, wall1Material); 
    wall11.position.set(0, 5, -95);
    scene.add(wall11);

    const wall12 = new THREE.Mesh(wall1Geometry, wall1Material); 
    wall12.position.set(-40, 5, -85);
    wall12.rotation.y = Math.PI / -4;
    scene.add(wall12);

    const wall13 = new THREE.Mesh(wall1Geometry, wall1Material); 
    wall13.position.set(40, 5, -85);
    wall13.rotation.y = Math.PI / 4;
    scene.add(wall13);

    //room2
    const wall14 = new THREE.Mesh(wall1Geometry, wall2Material); 
    wall14.position.set(80, 5, 0);
    wall14.rotation.y = Math.PI / 2;
    scene.add(wall14)    

    const wall15 = new THREE.Mesh(wall1Geometry, wall2Material); 
    wall15.position.set(100, 5, 15);
    scene.add(wall15)   

    const wall16 = new THREE.Mesh(wall1Geometry, wall2Material); 
    wall16.position.set(100, 5, -15);
    scene.add(wall16)
    
    //room3
    const wall17 = new THREE.Mesh(wall1Geometry, wall3Material); 
    wall17.position.set(-80, 5, 0);
    wall17.rotation.y = Math.PI / 2;
    scene.add(wall17)    

    const wall18 = new THREE.Mesh(wall1Geometry, wall3Material); 
    wall18.position.set(-100, 5, 15);
    scene.add(wall18)   

    const wall19 = new THREE.Mesh(wall1Geometry, wall3Material); 
    wall19.position.set(-100, 5, -15);
    scene.add(wall19)


}
