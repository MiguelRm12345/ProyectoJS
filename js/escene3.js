//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color(0xA21EE3)

//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.CylinderGeometry( 10, 10, 20, 5 );
const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load("../img/hola3.jpg");
const material =new THREE.MeshMatcapMaterial();

material.matcap = matcap;
material.flatShading = true;

const cylinder = new THREE.Mesh( geometry, material );
scene.add( cylinder );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: "blue" } ) );
scene.add( line );

camera.position.z = 50;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    cylinder.rotation.x += 0.01;
    cylinder.rotation.y += 0.01;
	renderer.render( scene, camera );
	line.rotation.x += 0.01;
	line.rotation.y += 0.01;
}
animate();
