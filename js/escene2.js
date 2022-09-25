//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color(0xA21333)

scene.fog=new THREE.Fog(0xfffffff, 25, 8)

//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//Geometria 

const geometry = new THREE.BoxGeometry( 10, 10, 10 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load("../img/hola2.jpg");
const material =new THREE.MeshMatcapMaterial();

material.matcap = matcap;
material.flatShading = true;

const cube = new THREE.Mesh( geometry, material );
scene.add( cube );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: "blue" } ) );
scene.add( line );

camera.position.z = 20;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;
	renderer.render( scene, camera );
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
}
animate();
