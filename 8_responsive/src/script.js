import './style.css';
import * as THREE from 'three';

//Scene
const scene = new THREE.Scene();

//Mesh
const geomtery = new THREE.BoxGeometry(0.5, 0.5, 0.5);
const material = new THREE.MeshBasicMaterial({ color: 'purple' });
const mesh = new THREE.Mesh(geomtery, material);

scene.add(mesh);

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

//Resizing
window.addEventListener('resize', () => {
	//New Size
	aspect.width = window.innerWidth;
	aspect.height = window.innerHeight;

	//New Aspect ratio
	camera.aspect = aspect.width / aspect.height;
	camera.updateProjectionMatrix();

	//New Renderer size
	renderer.setSize(aspect.width, aspect.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//Clock Class
const clock = new THREE.Clock();

const animate = () => {
	//GetElapsedTime
	const elapsedTime = clock.getElapsedTime();

	//Renderer
	renderer.render(scene, camera);

	//RequestAnimationFrame
	window.requestAnimationFrame(animate);
};
animate();
