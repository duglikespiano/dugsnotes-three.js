import './style.css';
import * as THREE from 'three';

//Scene
const scene = new THREE.Scene();

//Mesh
const geomtery = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshBasicMaterial({ color: 'purple' });
const purpleMesh = new THREE.Mesh(geomtery, material);
purpleMesh.position.x = 1;

//Mesh Two
const geomtery2 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material2 = new THREE.MeshBasicMaterial({ color: 'yellow' });
const yellowMesh = new THREE.Mesh(geomtery2, material2);
yellowMesh.position.x = -1;

//Mesh Three
const geomtery3 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material3 = new THREE.MeshBasicMaterial({ color: 'green' });
const greenMesh = new THREE.Mesh(geomtery3, material3);

//Mesh Four
const geomtery4 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material4 = new THREE.MeshBasicMaterial({ color: 'white' });
const whiteMesh = new THREE.Mesh(geomtery4, material4);
whiteMesh.position.set(1, 1, 0);

//Mesh Five
const geomtery5 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material5 = new THREE.MeshBasicMaterial({ color: 'pink' });
const pinkMesh = new THREE.Mesh(geomtery5, material5);
pinkMesh.position.set(-1, 1, 0);

//Mesh Six
const geomtery6 = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material6 = new THREE.MeshBasicMaterial({ color: 'blue' });
const blueMesh = new THREE.Mesh(geomtery6, material6);
blueMesh.position.y = 1;

scene.add(purpleMesh, yellowMesh, greenMesh, whiteMesh, pinkMesh, blueMesh);

//Mouse Listener
const cursor = {
	x: 0,
	y: 0,
};

window.addEventListener('mousemove', (event) => {
	cursor.x = event.clientX / window.innerWidth - 0.5;
	cursor.y = event.clientY / window.innerHeight - 0.5;
});

//Camera
const aspect = {
	width: window.innerWidth,
	height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 2.5;

scene.add(camera);

//Renderer
const canvas = document.querySelector('.draw');
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

//Clock Class
const clock = new THREE.Clock();

const animate = () => {
	//GetElapsedTime
	const elapsedTime = clock.getElapsedTime();

	//Look at
	greenMesh.lookAt(new THREE.Vector3(cursor.x, -cursor.y, 1));

	//Renderer
	renderer.render(scene, camera);

	//RequestAnimationFrame
	window.requestAnimationFrame(animate);
};
animate();
