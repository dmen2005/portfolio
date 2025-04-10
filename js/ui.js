export function addWallText(scene, header, body, position, rotation) {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 512;
    canvas.height = 256;
    
    const lineHeight = 40;
    const maxLineWidth = canvas.width - 20;

    if (body === "") {
        context.font = "60px Arial";
    } else {
        context.font = "20px 'Courier New'";
    }
    context.fillStyle = "black";
    
    const lines = splitTextIntoLines(body || header, context, maxLineWidth);

    context.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < lines.length; i++) {
        context.fillText(lines[i], 10, 40 + i * lineHeight);
    }

    const texture = new THREE.CanvasTexture(canvas);
    const geometry = new THREE.PlaneGeometry(20, 10);
    const material = new THREE.MeshBasicMaterial({
        map: texture,
        side: THREE.DoubleSide,
        transparent: true,
    });

    const textMesh = new THREE.Mesh(geometry, material);
    textMesh.position.set(position.x, position.y, position.z);
    textMesh.rotation.set(rotation.x, rotation.y, rotation.z);

    scene.add(textMesh);
}

function splitTextIntoLines(text, context, maxLineWidth) {
    let lines = [];
    let line = '';

    text.split(' ').forEach(word => {
        const testLine = line + word + ' ';
        const testWidth = context.measureText(testLine).width;
        if (testWidth > maxLineWidth) {
            lines.push(line);
            line = word + ' ';
        } else {
            line = testLine;
        }
    });

    lines.push(line);
    return lines;
}

export function addAlltext(scene) {
    console.log("Adding all text...");
    addWallText(scene, "Skills", "", { x: -49, y: 4, z: -5 }, { x: 0, y: Math.PI / 2, z: 0 });
    addWallText(scene, "About me", "", { x: 49, y: 4, z: 5 }, { x: 0, y: -Math.PI / 2, z: 0 });
    addWallText(scene, "projects", "", { x: 3, y: 4, z: -49 }, { x: 0, y: 0, z: 0 });
    addWallText(scene, "", "Hey, I'm Damian. I'm a software developer who wants to learning new things and exploring different tech. up for a challenge and curious about what's next!", { x: 79, y: 5, z: 0 }, { x: 0, y: -Math.PI / 2, z: 0 });
    addWallText(scene, "", "contact info               drentdamian@gmail.com  press M          linkdin press L                       github press G", { x: 59, y: 4, z: 14 }, { x: 0, y: -Math.PI / 1, z: 0 });
    addWallText(scene, "", "Outside of coding, I’m passionate about gaming. I love exploring new games, diving into different genres, and challenging myself with relaxing gameplay.", { x: 64, y: 4, z: -14 }, { x: 0, y: -Math.PI * 2, z: 0 });
    addWallText(scene, "", " Programming Languages                  C#          |xxxxx-----              c++         |xx--------              javascript  |xxx-------              html        |x---------", { x: -79, y: 5, z: 0 }, { x: 0, y: -Math.PI * 1.5, z: 0 });
    addWallText(scene, "", "I work mostly with C# and Unity to build games, but I also dived into JavaScript and Three.js for this project also i did some basic stuf with html and C++.", { x: -64, y: 4, z: -14 }, { x: 0, y: -Math.PI * 2, z: 0 });
    addWallText(scene, "", "Tools & Framework                   unity                                three.js                               git                                   node", { x: -64, y: 4, z: 14 }, { x: 0, y: -Math.PI /1, z: 0 });


    //vid
    addWallText(scene, "", "SlimeAtk: My first                project. I was playing a                parkour game with a                  grappling hook and wanted               to make something similar,           but with enemies to fight.", { x: 17, y: 5, z: -63 }, { x: 0, y: 5 *Math.PI / 4, z: 0 });

    addWallText(scene, "", "RapidRush: My second              project — a racing game.                I learned how to use                  wheel colliders and                    improve my AI.", { x: 37, y: 5, z: -83 }, { x: 0, y: 5 *Math.PI / 4, z: 0 });
    
    addWallText(scene, "", "Blackjack: My first               bigger assignment using                 OOP. It helped me learn              the basics and I was            really happy with how it turned               out.", { x: 57, y: 5, z: -103 }, { x: 0, y: 5 *Math.PI / 4, z: 0 });
    
    addWallText(scene, "", "Something else (tbd)", { x: -53, y: 5, z: -99 }, { x: 0, y: 5 * Math.PI / -4, z: 0 });
    
    addWallText(scene, "", "DDNet-Client: An                  open-source game.                       I wanted to make my own                client with                             unique features.", { x: -33, y: 5, z: -79 }, { x: 0, y: 5 * Math.PI / -4, z: 0 });
    
    addWallText(scene, "", "ZombsAtk: A project I             started at home and                     later used for a school                assignment. I applied OOP               principles and really               improved them through this.", { x: -13, y: 5, z: -59 }, { x: 0, y: 5 * Math.PI / -4, z: 0 });
    
    addWallText(scene, "", "Roulette: A C# OOP                assignment. I really                    enjoyed making it and it               helped me learn a lot                   about object-oriented                   programming.", { x: 45, y: 5, z: -114 }, { x: 0, y: 0, z: 0 });
    
    addWallText(scene, "", "DeepDive Race: A racing           game I made with 4 others.", { x: 15, y: 5, z: -114 }, { x: 0, y: 0, z: 0 });
    
    addWallText(scene, "", "DeepDive Story A                 story-driven game                     made with a team of 4.                  It won                               'Best Fit in Theme'                     (there talking video muted)", { x: -15, y: 5, z: -114 }, { x: 0, y: 0, z: 0 });
    
    addWallText(scene, "", "DeepDive Drunk: A VR                 game about working and                  driving drunk. It won                  'Class Favorite Game'.", { x: -45, y: 5, z: -114 }, { x: 0, y: 0, z: 0 });
    }