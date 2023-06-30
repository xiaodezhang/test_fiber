/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.5 scene.gltf --transform
Author: Aconear (https://sketchfab.com/Aconear)
License: CC-BY-4.0 (http://creativecommons.org/licenses/by/4.0/)
Source: https://sketchfab.com/3d-models/female-head-sculpt-ae24c33594a046519014fdc78758a8ec
Title: Female Head Sculpt
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[0, 2.715, 0]} />
    </group>
  )
}

useGLTF.preload('/scene-transformed.glb')
