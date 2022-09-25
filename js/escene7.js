//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color("aquamarine")



//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const geometry = new THREE.TorusKnotGeometry( 10, 3,64, 8,10,16 );
const material = new THREE.MeshStandardMaterial();
material.metalness = 1;
material.roughess = 0;

const torus = new THREE.Mesh( geometry, material );
scene.add( torus );
//const ambientlight = new THREE.AmbientLight(0x3F68D9,1);
//scene.add(ambientlight);

//material.color.set("white")

/* 
const pointlight = new THREE.PointLight(0x3F68D9,17);
scene.add (pointlight);
pointlight.position.set(10,100, 10)
 */
const DirectionalLight = new THREE.DirectionalLight(0x3f68D9, 5);
DirectionalLight.position.set(1,6,1);
scene.add(DirectionalLight);


/* const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: 0xC642FA } ) );
scene.add( line ); */

camera.position.z = 35;


//Funcion
function animate() {
	requestAnimationFrame( animate );
  torus.rotation.x += 0.1;
	torus.rotation.y += 0.1;
	renderer.render( scene, camera );
/* 	line.rotation.x += 0.03;
	line.rotation.y += 0.03; */
}
animate();
