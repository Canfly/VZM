"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Environment } from "@react-three/drei"
import Room from "./Room"

export default function RoomGallery() {
  return (
    <div className="w-full h-screen">
      <Canvas camera={{ position: [0, 1.5, 5], fov: 75 }}>
        <Environment preset="apartment" background />
        <Room />
        <OrbitControls target={[0, 1, 0]} maxPolarAngle={Math.PI / 2} />
      </Canvas>
    </div>
  )
}

