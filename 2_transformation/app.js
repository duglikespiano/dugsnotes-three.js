import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/0.165.0/three.module.js';

// 1. Scene
const scene = new THREE.Scene();

// 2. Mesh
const group = new THREE.Group();
const geometry1 = new THREE.BoxGeometry(1, 1, 1);
const material1 = new THREE.MeshBasicMaterial({color: 'purple'});
const mesh1 = new THREE.Mesh(geometry1, material1);

const geometry2 = new THREE.BoxGeometry(1, 1, 1);
const material2 = new THREE.MeshBasicMaterial({color: 'green'});
const mesh2 = new THREE.Mesh(geometry2, material2);

mesh1.position.x = 4;
mesh1.position.y = 2;
mesh1.position.z = 3;
mesh1.scale.x = 2;
mesh1.scale.y = 0.3;
mesh1.rotation.x = Math.PI * 0.25;
mesh1.rotation.y = Math.PI * -0.25;

group.add(mesh1, mesh2);
group.position.x = 1;

scene.add(group);

// 3. Camera
const aspect = {
	width: window.innerWidth,
	height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(75, aspect.width / aspect.height, 1, 2000);
camera.position.z = 6;
camera.position.x = 3;
camera.position.y = 1;

const axesHelper = new THREE.AxesHelper(4);
scene.add(axesHelper);
scene.add(camera);

// 4. Renderer
const canvas = document.querySelector('#canvas');
const renderer = new THREE.WebGLRenderer({canvas});
renderer.setSize(aspect.width, aspect.height);
renderer.render(scene, camera);
