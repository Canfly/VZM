import { useTexture } from "@react-three/drei"

export default function Room() {
  const floorTexture = useTexture("/placeholder.svg?height=1024&width=1024")
  const artTexture1 = useTexture("/placeholder.svg?height=512&width=512")
  const artTexture2 = useTexture("/placeholder.svg?height=512&width=512")
  const artTexture3 = useTexture("/placeholder.svg?height=512&width=512")

  return (
    <group>
      {/* Floor */}
      <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, 0, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial map={floorTexture} />
      </mesh>

      {/* Ceiling */}
      <mesh rotation={[Math.PI / 2, 0, 0]} position={[0, 4, 0]}>
        <planeGeometry args={[10, 10]} />
        <meshStandardMaterial color="#ffffff" />
      </mesh>

      {/* Walls */}
      <Wall position={[0, 2, -5]} rotation={[0, 0, 0]} />
      <Wall position={[0, 2, 5]} rotation={[0, Math.PI, 0]} />
      <Wall position={[-5, 2, 0]} rotation={[0, Math.PI / 2, 0]} />
      <Wall position={[5, 2, 0]} rotation={[0, -Math.PI / 2, 0]} />

      {/* Artwork */}
      <Artwork position={[0, 2, -4.9]} texture={artTexture1} />
      <Artwork position={[-4.9, 2, 0]} rotation={[0, Math.PI / 2, 0]} texture={artTexture2} />
      <Artwork position={[4.9, 2, 0]} rotation={[0, -Math.PI / 2, 0]} texture={artTexture3} />
    </group>
  )
}

function Wall({ position, rotation }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[10, 4]} />
      <meshStandardMaterial color="#e0e0e0" />
    </mesh>
  )
}

function Artwork({ position, rotation = [0, 0, 0], texture }) {
  return (
    <mesh position={position} rotation={rotation}>
      <planeGeometry args={[2, 2]} />
      <meshStandardMaterial map={texture} />
    </mesh>
  )
}

