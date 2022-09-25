//escenario
const scene=new THREE.Scene();
scene.background = new THREE.Color(0xA21EE3)

scene.fog=new THREE.Fog(0xfffffff, 25, 8)


let loader = new THREE.TextureLoader()
loader.load('../img/joseverde.jpg',function(texture){
    scene.background = texture
})

//camara
const camera = new THREE.PerspectiveCamera( 75, 
window.innerWidth / window.innerHeight, 0.1, 1000 );

//render
const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );


//Geometria 

const geometry = new THREE.CapsuleGeometry( 7, 10, 1, 10 );

const textureLoader = new THREE.TextureLoader();
const matcap = textureLoader.load("../img/hola4.jpg");
const material =new THREE.MeshMatcapMaterial();

material.matcap = matcap;
material.flatShading = true;


const capsule = new THREE.Mesh( geometry, material );
scene.add( capsule );

const edges = new THREE.EdgesGeometry( geometry );
const line = new THREE.LineSegments( edges, new THREE.LineBasicMaterial( { color: "red" } ) );
scene.add( line );

camera.position.z = 20;


//Funcion
function animate() {
	requestAnimationFrame( animate );
    capsule.rotation.x += 0.01;
    capsule.rotation.y += 0.01;
	renderer.render( scene, camera );
    line.rotation.x += 0.01;
    line.rotation.y += 0.01;
}
animate();