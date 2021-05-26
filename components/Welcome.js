import { useEffect, useState, useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { useGLTF } from '@react-three/drei'

export default function Welcome(props) {
  const group = useRef()
  const { nodes, materials } = useGLTF('/assets/models/welcome.glb')
  
  const [scrollTop, setScrollTop] = useState(undefined);

  useEffect(() => {
      if(typeof window !== 'undefined'){
          
          function handleScroll() {
              setScrollTop(window.scrollY);
          }

          window.addEventListener("scroll", handleScroll);
          
          handleScroll();

          return () => window.removeEventListener("scroll", handleScroll);
      }
  })

  useFrame(() => {
      //group.current.rotation.y = clock.elapsedTime * 0.7;
      group.current.rotation.x = scrollTop * -0.001;
  })
  return (
    <group ref={group} {...props} dispose={null}>
        <mesh
            castShadow
            receiveShadow
            geometry={nodes.Curve.geometry}
            material={materials['Metallic.002']}
            position={[-0.33, -0.11, 0]}
            rotation={[Math.PI / 2, 0, 0]}
            scale={[5, 5, 5]}
        />
    </group>
  )
}

useGLTF.preload('/assets/models/welcome.glb')
