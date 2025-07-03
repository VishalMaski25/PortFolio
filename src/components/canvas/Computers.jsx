import React from 'react'
import { Suspense,useEffect,useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls,Preload,useGLTF } from '@react-three/drei'
import Loader from '../Loader'


const Computers = ({ isMobile }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");
  
    return (
      <mesh>
        {/* <hemisphereLight intensity={0.9} groundColor='black' /> */}
        <hemisphereLight intensity={1.2} groundColor='gray' />
        {/* <spotLight
          position={[-20, 50, 10]}
          angle={0.12}
          penumbra={1}
          intensity={1}
          castShadow
          shadow-mapSize={1024}
        /> */}
        <spotLight
        position={[-20, 50, 30]}  // Moved slightly to brighten more of the scene
        angle={0.15}  // Increased angle for wider coverage
        penumbra={0.9}  // Softened shadows a bit
        intensity={1.5}  // Increased intensity to make it brighter
        castShadow
        shadow-mapSize={2048}  // Increased shadow resolution for crisper shadows
      />
        {/* <pointLight intensity={1} /> */}
        <pointLight intensity={1.2} position={[10, 10, 10]} />
        <primitive
          object={computer.scene}
          scale={isMobile ? 0.7 : 0.75}
          position={isMobile ? [0, -3, -2.2] : [0, -3.25, -1.5]}
          rotation={[-0.01, -0.2, -0.1]}
        />
      </mesh>
    );
  };
const ComputersCanvas = () =>{
    const [isMobile, setIsMobile] = useState(false)
    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);
        const handleMediaQueryChange =(event)=>{
          setIsMobile(event.matches);
        }
        mediaQuery.addEventListener('change',handleMediaQueryChange); 
        return()=>{
            mediaQuery.removeEventListener('change',handleMediaQueryChange);
        }
    }, [])
    
    return (
        <Canvas 
        frameloop='demand' 
        shadows
        camera={{position:[20,3,5], fov:25}}
        gl={{preserveDrawingBuffer:true}}
        >
            {/* todo load convasloader from Loader */}
        <Suspense fallback={<Loader></Loader>}> 
           <OrbitControls
            enableZoom ={false}
            maxPolarAngle={Math.PI/2}
            minPolarAngle={Math.PI/2}
            ></OrbitControls>
            <Computers isMobile={isMobile}></Computers>
        </Suspense>
        
        </Canvas>
    )
}

export default ComputersCanvas;
