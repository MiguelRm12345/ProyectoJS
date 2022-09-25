//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color(0x0000000)



//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


const geometry = new THREE.PlaneGeometry( 15, 15 );
const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load("../img/hola6.jpg");
const material =new THREE.MeshMatcapMaterial();

material.matcap = matcap;
material.flatShading = true;
const plane = new THREE.Mesh( geometry, material );
scene.add(plane);


const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xC642FA } ) );
scene.add( line );

camera.position.z = 20;


//Funcion
function animate() {
	requestAnimationFrame( animate );
  plane.rotation.x += 0.03;
	plane.rotation.y += 0.03;
	renderer.render( scene, camera );
	line.rotation.x += 0.03;
	line.rotation.y += 0.03;
}
animate();