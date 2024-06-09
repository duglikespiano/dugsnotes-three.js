import './style.css';
import * as THREE from 'three';

// Scene
const scene = new THREE.Scene();

// Mesh
const geomtery = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({color: 'purple'});
const mesh = new THREE.Mesh(geomtery, material);

scene.add(mesh);

// Camera
const aspect = {
	width: window.innerWidth,
	height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height);
camera.position.z = 3;

scene.add(camera);

// Renderer
const canvas = document.querySelector('.draw');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width, aspect.height);

// Clock Class
const clock = new THREE.Clock();

const animate = () => {
	// GetElapsedTime
	const elapsedTime = clock.getElapsedTime();

	// Linear Function
	mesh.position.x = Math.sin(elapsedTime * 0.2);
	mesh.position.y = Math.cos(elapsedTime * 0.2);

	// Mesh Rotation Y
	mesh.rotation.y = elapsedTime * 0.25;

	// Renderer
	renderer.render(scene, camera);

	// RequestAnimationFrame
	window.requestAnimationFrame(animate);
};
animate();
