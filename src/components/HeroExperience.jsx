import { OrbitControls, Sparkles } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { Me } from '../../public/models/Me'

const HeroExperience = () => {
  return (
    <Canvas>
      <ambientLight />
      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#ffffff"} />
      <directionalLight position={[-2, 0, 3]} intensity={3} color={"#ffffff"} />

      <Sparkles count={100} size={2} speed={0.5} color={'#ffffff'} scale={[10, 10, 2]} />
      <Me scale={9} position={[0, -15, 0]} />
      {/* <Macbook /> */}
    </Canvas>

    // <Canvas>
    //   <ambientLight intensity={0.5} />
    //   <directionalLight position={[2, 2, 2]} />
    //   <Macbook />
    //   <OrbitControls />
    // </Canvas>



  )
}

export default HeroExperience
