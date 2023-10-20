import '/src/css/main.css'
import * as THREE from 'three';
import {GLTFLoader} from "three/addons/loaders/GLTFLoader.js";
import {gsap} from "gsap";

// Global settings
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(50, window.innerWidth / window.innerHeight, 0.1, 150);
const renderer = new THREE.WebGLRenderer({canvas: document.querySelector('#bg'), antialias: true});
renderer.shadowMap.type = THREE.PCFSoftShadowMap;

scene.background = new THREE.Color( 0x202023 );

// Camera start settings
const OriginX = 0.5;
const OriginY = 1.55;
const OriginZ = 0.40;
const OriginXRotation = 0;
const OriginYRotation = 1.5708;
const OriginZRotation = 0;
camera.position.set(OriginX,OriginY,OriginZ)
camera.rotation.y = OriginY;

// Canva take all page
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
console.log(window.innerWidth)
// Light
const light = new THREE.PointLight(0xeeeeee, 15)
scene.add(light)
light.position.set(10, 5, 10)


//Cube temp
const geometry = new THREE.BoxGeometry( 55, 0.20, 55 );
const material = new THREE.MeshBasicMaterial( {color: 0x00ff00} );
const cube = new THREE.Mesh( geometry, material );
cube.position.set(0,-1,0)
scene.add( cube );

// Chargement de la scene blender
const loader = new GLTFLoader();
// Load a glTF resource
loader.load(
    // resource URL
    '/src/models/scene.gltf',
    // called when the resource is loaded
    function ( gltf ) {

        scene.add( gltf.scene );

        gltf.animations; // Array<THREE.AnimationClip>
        gltf.scene; // THREE.Group
        gltf.scenes; // Array<THREE.Group>
        gltf.cameras; // Array<THREE.Camera>
        gltf.asset; // Object

    },
    // called while loading is progressing
    function ( xhr ) {
        console.log( ( xhr.loaded / xhr.total * 100 ) + '% loaded' );
    },
    // called when loading has errors
    function () {
        console.log( 'An error happened' );
    }
);

// Animation
function animate() {
    requestAnimationFrame(animate)
    renderer.render(scene, camera)
}
animate();

// Animation de caméra
window.addEventListener("scroll", () => {
    var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);
    console.log(scrollPercentage)
    // Contact
    if (scrollPercentage >= 0.90) {
        gsap.to(camera.position, {
            x: 4,
            y: 3,
            z: 6,
            duration: 1.5,
            ease: "back.out(0.3)",
        })
        gsap.to(camera.rotation, {
            y: 0.78,
            x: -0.30,
            z: 0.20,
            duration: 1.5,
            ease: "back.out(0.3)",
        })
    } else
        // Passions
    if (scrollPercentage >= 0.70) {
        gsap.to(camera.position, {
            x: 0.20,
            y: 1.60,
            z: 0.20,
            duration: 1.5,
            ease: "back.out(0.3)",
        })
        gsap.to(camera.rotation, {
            y: 0.78,
            x: 0,
            z: 0,
            duration: 1.5,
            ease: "back.out(0.3)",
        })
    } else
        // Software
    if (scrollPercentage >= 0.55) {
        gsap.to(camera.position, {
            x: 0.65,
            y: 3.25,
            z: 0,
            duration: 1.5,
            ease: "back.out(0.5)",
        })
        gsap.to(camera.rotation, {
            y: -0,
            duration: 1.5,
            ease: "back.out(0.5)",
        })
    } else
        //Framework
    if (scrollPercentage >= 0.37) {
        gsap.to(camera.position, {
            x: -0.55,
            y: 2.55,
            z: 0,
            duration: 1.5,
            ease: "back.out(0.5)",
        })
        gsap.to(camera.rotation, {
            y: -0,
            duration: 1.5,
            ease: "back.out(0.5)",
        })
    } else
        // Skils
    if (scrollPercentage >= 0.23) {
        gsap.to(camera.position, {
            x: 0.65,
            y: 1.80,
            z: 0,
            duration: 1.5,
            ease: "back.out(0.5)",
        })
        gsap.to(camera.rotation, {
            y: -0,
            duration: 1.5,
            ease: "back.out(0.5)",
        })
    } else
        // Desk
     if (scrollPercentage <= 0.11) {
        gsap.to(camera.position, {
            x: OriginX,
            y: OriginY,
            z: OriginZ,
            duration: 1.5,
            ease: "back.out(0.3)",
        })
        gsap.to(camera.rotation, {
            x: OriginXRotation,
            y: OriginYRotation,
            z: OriginZRotation,
            duration: 1.5,
            ease: "back.out(0.3)",
        })
    }
})

