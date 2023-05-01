import { OrbitControls, Stage } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import React, { Suspense, useRef } from 'react';

import Model from '@/components/Model/Model';

export default function Viewer() {
  const ref = useRef();
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ fov: 10 }}>
      <Suspense fallback={null}>
        <Stage
          controls={ref}
          preset='rembrandt'
          intensity={1}
          environment='city'
        >
          false
          <Model />
          false
        </Stage>
      </Suspense>
      <OrbitControls ref={ref} autoRotate />
    </Canvas>
  );
}
