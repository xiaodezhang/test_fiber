import { Canvas, useLoader } from '@react-three/fiber'
import { useGLTF
  , useTexture, Decal
  , Text, RenderTexture, PerspectiveCamera
  , Environment, OrbitControls, RandomizedLight, AccumulativeShadows } from '@react-three/drei'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { suspend } from 'suspend-react'

export default function HeadShow() { 
  return (
  <Canvas shadows camera={{ position: [2, 2, 10], fov: 20 }}>
    <ambientLight intensity={1} />
    <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
    <group position={[0.25, -1, 0]}>
      <Bun />
      <AccumulativeShadows temporal frames={100} scale={12} alphaTest={0.85} position={[0, 0.04, 0]}>
        <RandomizedLight amount={8} radius={10} ambient={0.5} position={[2.5, 5, -5]} bias={0.001} />
      </AccumulativeShadows>
    </group>
    <Environment files="/potsdamer_platz_1k.hdr" background blur={0.7} />
    <OrbitControls makeDefault />
  </Canvas>
  )
}

useGLTF.preload('/scene-transformed.glb')

function Bun(props) {

  const { nodes, materials } = useGLTF('/scene-transformed.glb')
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Object_4.geometry} material={materials.PaletteMaterial001} position={[0, 2.715, 0]} >

 <meshStandardMaterial color="black" roughness={0} metalness={0.5} />
      <Decal position={[-0.13, -0.20, -0.75]} rotation={[0, Math.PI, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[-0.13, -0.11, -0.75]} rotation={[0, Math.PI, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[-0.39, -0.18, -0.75]} rotation={[0, Math.PI, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[-0.39, -0.27, -0.75]} rotation={[0, Math.PI, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[-0.39, -0.36, -0.75]} rotation={[0, Math.PI, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[0.13, -0.18, -0.75]} rotation={[0, Math.PI, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[0.13, -0.27, -0.75]} rotation={[0, Math.PI, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[0.13, -0.36, -0.75]} rotation={[0, Math.PI, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[-0.37, -0.20, 0.75]} rotation={[0, 0, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[-0.37, -0.30, 0.75]} rotation={[0, 0, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[-0.37, -0.40, 0.75]} rotation={[0, 0, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[0.22, -0.20, 0.75]} rotation={[0, 0, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[0.22, -0.30, 0.75]} rotation={[0, 0, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[0.22, -0.40, 0.75]} rotation={[0, 0, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[-0.08, -0.13, 0.75]} rotation={[0, 0, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>
      <Decal position={[-0.08, -0.22, 0.75]} rotation={[0, 0, 0]} scale={[0.23, 0.08, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={5} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal  position={[-1, 0, 0.2]} rotation={[0, -Math.PI*0.5, 0]} scale={[0.15, 0.15, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={4} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>
      <Decal position={[-1, 0, 0.0]} rotation={[0, -Math.PI*0.5, 0]} scale={[0.15, 0.15, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={4} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>
      <Decal position={[-1, 0, -0.2]} rotation={[0, -Math.PI*0.5, 0]} scale={[0.15, 0.15, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={4} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[1, 0, 0.2]} rotation={[0, Math.PI*0.5, 0]} scale={[0.15, 0.15, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={4} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>
      <Decal position={[1, 0, 0.0]} rotation={[0, Math.PI*0.5, 0]} scale={[0.15, 0.15, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={4} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>
      <Decal position={[1, 0, -0.2]} rotation={[0, Math.PI*0.5, 0]} scale={[0.15, 0.15, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={4} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[1, -0.5, -0.1]} rotation={[0, Math.PI*0.5, 0]} scale={[0.15, 0.15, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={4} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      <Decal position={[1, -0.5, 0.1]} rotation={[0, Math.PI*0.5, 0]} scale={[0.15, 0.15, 1]}>
        <meshStandardMaterial roughness={0.6} polygonOffset polygonOffsetFactor={-10}>
          <RenderTexture attach="map" anisotropy={16}>
            <PerspectiveCamera  makeDefault manual aspect={0.9 / 0.25} position={[0, 0, 5]} />
            <color attach="background" args={['#af2040']} />
            <ambientLight  intensity={0.5} />
            <directionalLight  position={[10, 10, 5]} />
            <Text  rotation={[0, 0, 0]} fontSize={4} color="white">
                2000
            </Text>
          </RenderTexture>
        </meshStandardMaterial>
      </Decal>

      </mesh>
    </group>
  )
}
