let scene = new THREE.Scene();
let camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
let renderer = new THREE.WebGLRenderer({ antialias: true });
let ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
let pointLight = new THREE.PointLight(0xffffff, 1, 100);
let geometry = new THREE.BoxGeometry();
let material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
let cube = new THREE.Mesh(geometry, material);

function animate() {
    requestAnimationFrame(animate);
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
    renderer.render(scene, camera);
}

function main(){
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.body.appendChild(renderer.domElement);
    scene.add(ambientLight);
    pointLight.position.set(10, 10, 10);
    scene.add(pointLight);
    scene.add(cube);
    animate();
}

function stars() {
    const count = 800;
    const section = document.querySelector('.starlight');
    var i = 0;


    while (i < count) {
        const star = document.createElement('i');
        const x = Math.floor(Math.random() * window.innerWidth)
        const y = Math.floor(Math.random() * window.innerHeight)


        const size = Math.random() * 4;
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px';

        const duration = Math.random() * 2;
        star.style.animationDuration = 2 + duration + 's';
        star.style.animationDelay = duration + 's';


        section.appendChild(star);
        i++
    }
}

stars();