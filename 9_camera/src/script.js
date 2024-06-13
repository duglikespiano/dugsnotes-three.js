import './style.css';
import * as THREE from 'three';

//Scene
const scene = new THREE.Scene();

//Resizing
window.addEventListener('resize', () => {
	//Update Size
	aspect.width = window.innerWidth;
	aspect.height = window.innerHeight;

	//New Aspect Ratio
	camera.aspect = aspect.width / aspect.height;
	camera.updateProjectionMatrix();

	//New RendererSize
	renderer.setSize(aspect.width, aspect.height);
	renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
});

//Mesh
const geomtery = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 'purple' });
const mesh = new THREE.Mesh(geomtery, material);
scene.add(mesh);

//Camera
const aspect = {
	width: window.innerWidth,
	height: window.innerHeight,
};
// const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0.1, 1000);
camera.position.X = 2;
camera.position.y = 2;
camera.position.z = 2;
camera.lookAt(mesh.position);
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

	//rotate Mesh on Y
	// mesh.rotation.y = elapsedTime;

	//Renderer
	renderer.render(scene, camera);

	//RequestAnimationFrame
	window.requestAnimationFrame(animate);
};
animate();
