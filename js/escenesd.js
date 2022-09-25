//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color(0x0000000)



//camara
const camera = new THREE.PerspectiveCamera(75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

//geometry dash

const geometry = new THREE.BoxGeometry( 10, 10, 10 );
const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load("../img/selene.png");
const material =new THREE.MeshMatcapMaterial();

material.matcap = matcap;
material.flatShading = true;

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );
cube.position.x = -30;

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xC642FA } ) );
scene.add( line );
line.position.x = -30;

//geometry 2
const geometry2 = new THREE.TorusKnotGeometry(5, 2, 150, 2 );

const textureLoader2 = new THREE.TextureLoader();
const matcap2 = textureLoader2.load("../img/hola1.jpg");
const material2 =new THREE.MeshMatcapMaterial();

material2.matcap = matcap2;
material2.flatShading = true;

const TorusKnot = new THREE.Mesh( geometry2, material2 );
scene.add( TorusKnot );
TorusKnot.position.x = -8;

const edges2 = new THREE.EdgesGeometry( geometry2 );
const line2 = new THREE.LineSegments( edges2, new THREE.LineBasicMaterial( { color: 0xC642FA } ) );
scene.add( line2 );
line2.position.x = -8;


//geometry 3

const geometry3 = new THREE.CylinderGeometry( 7, 7, 10, 5 );
const textureLoader3 = new THREE.TextureLoader();
const matcap3 = textureLoader3.load("../img/hola3.jpg");
const material3 =new THREE.MeshMatcapMaterial();

material3.matcap = matcap3;
material3.flatShading = true;

const cylinder = new THREE.Mesh( geometry3, material3 );
scene.add( cylinder );
cylinder.position.x = 10;

const edges3 = new THREE.EdgesGeometry( geometry3 );
const line3 = new THREE.LineSegments( edges3, new THREE.LineBasicMaterial( { color: "blue" } ) );
scene.add( line3 );
line3.position.x = 10;

//geometry 4
const geometry4 = new THREE.PlaneGeometry( 15, 15 );
const textureLoade4r = new THREE.TextureLoader();
const matcap4 = textureLoader.load("../img/hola6.jpg");
const material4 =new THREE.MeshMatcapMaterial();

material4.matcap = matcap4;
material4.flatShading = true;
const plane = new THREE.Mesh( geometry4, material4 );
scene.add(plane);
plane.position.x = 30;


const edges4 = new THREE.EdgesGeometry( geometry4 );
const line4 = new THREE.LineSegments( edges4, new THREE.LineBasicMaterial( { color: 0xC642FA } ) );
scene.add( line4 );
line4.position.x = 30;


//camara
camera.position.z = 30;

/* Orbit control */

/* var control = new THREE.OrbitControls( camera, renderer.domElement );
control.minDistance = 3;
control.maxDistance = 40; */

/* Pointer lock control */
/* const control = new THREE.PointerLockControls( camera, renderer.domElement );
document.getElementById("btnplay").onclick = () => {
control.lock();
} */

/* Drag control */
let geometrias = [cube, line, TorusKnot, line2, cylinder, line3, plane, line4]
const controls = new THREE.DragControls( geometrias, camera, renderer.domElement );

// add event listener to highlight dragged objects



//Funcion
function animate() {
	requestAnimationFrame( animate );
  cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;
	renderer.render( scene, camera );
	line.rotation.x += 0.01;
	line.rotation.y += 0.01;
	TorusKnot.rotation.x += 0.01;
	TorusKnot.rotation.y += 0.01;
	line2.rotation.x += 0.01;
	line2.rotation.y += 0.01;
	cylinder.rotation.x += 0.01;
	cylinder.rotation.y += 0.01;
	line3.rotation.x += 0.01;
	line3.rotation.y += 0.01;
	plane.rotation.x += 0.01;
	plane.rotation.y += 0.01;
	line4.rotation.x += 0.01;
	line4.rotation.y += 0.01;
}
animate();