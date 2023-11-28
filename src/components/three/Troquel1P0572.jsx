import React, { useRef, Suspense } from "react";
import { ContactShadows, OrbitControls, useGLTF } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'

export function Dav(props) {
  const { nodes, materials } = useGLTF("/gltf/Troquel1P0572.gltf");
  return (
    <group {...props} dispose={null} scale={1.5}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom"].geometry}
        material={materials.TQ_ARD_front}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom_1"].geometry}
        material={materials.TQ_ARD_back}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom_2"].geometry}
        material={materials.TQ_ARD_edge}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom_3"].geometry}
        material={materials["TQ_ARD_front.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom_4"].geometry}
        material={materials["TQ_ARD_back.001"]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes["TQ_ARD-geom_5"].geometry}
        material={materials["TQ_ARD_edge.001"]}
      />
    </group>
  );
}

useGLTF.preload("/Troquel1P0572.gltf");


const Troquel1g0102 = ({}) => {
	return (

			<Canvas
				style={{  }}
				camera={{
					view: {
						enabled: true,
						fullWidth: 100,
						fullHeight: 100,
						offsetX: 0,
						offsetY: -30,
						width: 100,
						height: 100
					},
					focus: 10,
					fov: 80,
					zoom: 2.5
          ,
					position: [0, 1, 1.5]
				}} >
				<ambientLight intensity={2} />
				{/* <pointLight position={[10, 10, 2]} /> */}
				<Suspense fallback={null}>

					<Dav/>

				</Suspense>
				<OrbitControls autoRotate autoRotateSpeed={1} />
				<ContactShadows resolution={512} scale={1} position={[0, -0.03, 0]} blur={2} opacity={0.6} far={1} color='#202020' />
			</Canvas>
	)
}
export default Troquel1g0102
