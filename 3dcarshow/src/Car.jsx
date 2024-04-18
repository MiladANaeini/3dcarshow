import { useFrame, useLoader } from '@react-three/fiber';
import React, { useEffect } from 'react';
import { GLTFLoader } from 'three/examples/jsm/Addons.js';
import { Mesh } from "three";

export function Car() {
    const gltf = useLoader(
        GLTFLoader,
       "models/car/scene.gltf"
    );

  useEffect(()=> {
    gltf.scene.scale.set(1, 1, 1);
    gltf.scene.position.set(0, -0.035, 0);
    gltf.scene.traverse((object) => {
        if (object instanceof Mesh) {
            object.castShadow = true;
            object.receiveShadow = true;
            object.material.envMapIntensity = 20;
        }
    })
  }, [gltf])

  useFrame((state, delta)=> {
    let t = state.clock.getElapsedTime();

    let group = gltf.scene.children[0].children[0].children[0].children[3];
    group.children[0].rotation.x = t * 2;
    group.children[1].rotation.x = t * 2;
    group.children[2].rotation.x = t * 2;
    group.children[3].rotation.x = t * 2;
  })
  console.log("gltf.scene",gltf.scene.children[0].children[0].children[0].children[3])
  return <primitive object={gltf.scene}/>
  
}
