import { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import './index.css'
import { OrbitControls, PerspectiveCamera } from '@react-three/drei'
import { Ground } from './Ground'

function ShowCar() {
  return (
    <>
    <OrbitControls target={[0, 0.35, 0]} maxPolarAngle={1.45}/>
    <PerspectiveCamera makeDefault fov={50} position={[3, 2, 5]}/>

    <color args={[0,0,0]} attach={"background"}/>
  
     <spotLight
     color={[1, 0.25, 0,7]}
     intensity={20}
     angle={0.6}
     penumbra={0.5}
     position={[5, 5, 0]}
     castShadow
     shadowBias={-0.0001}
     />
     <spotLight
       color={[0.14, 0.5, 1]}
       intensity={200}
       angle={0.6}
       penumbra={0.5}
       position={[5, 5, 0]}
       castShadow
       shadowBias={-0.0001}
       />
       <Ground/>
    </>
  )
}


function App() {
  return (
    <Suspense fallback={null}>
     <Canvas shadows>
      <ShowCar/>
     </Canvas>
    </Suspense>
  )
}

export default App
