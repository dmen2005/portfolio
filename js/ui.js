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
    addWallText(scene, "", "A short bio about who you are, what you do, and what interests you. Keep it concise and engaging (1-2 short paragraphs).", { x: 79, y: 5, z: 0 }, { x: 0, y: -Math.PI / 2, z: 0 });
    addWallText(scene, "", "contact info).", { x: 64, y: 5, z: 14 }, { x: 0, y: -Math.PI / 4, z: 0 });
}

/*
1. Introduction / About Me
A short bio about who you are, what you do, and what interests you.
Keep it concise and engaging (1-2 short paragraphs).
Example:
"I'm a passionate developer with experience in C#, JavaScript, and game development. I enjoy building interactive applications, solving complex problems, and learning new technologies."
2. Skills
List the languages, tools, and frameworks you're proficient in.
Consider grouping them into categories:
Programming Languages: C#, JavaScript, Python, SQL
Frameworks / Libraries: .NET, Three.js, Unity, React
Tools: Visual Studio Code, Git, MySQL
Other: Game development, Algorithms, Problem-solving
3. Projects (Most Important Part!)
Showcase 3-5 of your best projects, including:
✅ Project Name & Short Description
✅ Technologies Used
✅ Screenshots / GIFs
✅ Link to GitHub repo or a live demo (if available)
✅ A short explanation of challenges & how you solved them

Example: Roulette Game (C# Console)
"A terminal-based Roulette game where players can place bets, spin the wheel, and manage their balance."
Tech Used: C#, .NET, OOP
[GitHub Link] | [Screenshots]

4. Experience / Work (If Any)
If you've done internships, freelance work, or even open-source contributions, include them.

Company Name (or just Freelance / Open Source)
What you worked on
Technologies used
5. Contact Information
Make it easy to reach you!
✅ Email
✅ GitHub / GitLab
✅ LinkedIn (if you use it)
✅ Portfolio site (if applicable)

Bonus (If You Want to Stand Out!)
Blog / Articles (if you write about programming)
Testimonials / Recommendations (if you have them)
A "Fun" Section (hobbies, game jams, personal interests)
*/