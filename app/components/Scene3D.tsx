"use client";

import { useRef, useState } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Icosahedron, Float, Stars, Sparkles } from "@react-three/drei";
import * as THREE from "three";

function NeuralCore() {
    const meshRef = useRef<THREE.Mesh>(null!);
    const [hovered, setHover] = useState(false);
    const { mouse, viewport } = useThree();

    useFrame((state, delta) => {
        if (meshRef.current) {
            // Very slow auto-rotation
            meshRef.current.rotation.x += delta * 0.05;
            meshRef.current.rotation.y += delta * 0.05;

            // Subtle interactive tilt based on mouse
            // We use lerp for smooth transition
            const targetX = (mouse.y * viewport.height) / 100; // Divided by 100 for subtle effect
            const targetY = (mouse.x * viewport.width) / 100;

            meshRef.current.rotation.x += targetX * 0.05;
            meshRef.current.rotation.y += targetY * 0.05;
        }
    });

    return (
        <Floatspeed speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
            <Icosahedron
                ref={meshRef}
                args={[2.5, 1]} // Radius, Detail
                scale={viewport.width < 7 ? 0.6 : 1} // Scale down on smaller screens
                onPointerOver={() => setHover(true)}
                onPointerOut={() => setHover(false)}
            >
                <meshBasicMaterial
                    color={hovered ? "#06b6d4" : "#3b82f6"} // Cyan on hover, Blue default
                    wireframe
                    transparent
                    opacity={0.3}
                />
            </Icosahedron>

            {/* Stars/Sparks inside the component */}
            <Sparkles
                count={100}
                scale={3}
                size={2}
                speed={0.4}
                opacity={0.7}
                color="#ffffff"
            />
        </Floatspeed>
    );
}

// Custom wrapper for Float since types might mismatch in strict mode
function Floatspeed({ children, speed, rotationIntensity, floatIntensity }: any) {
    return (
        <Float speed={speed} rotationIntensity={rotationIntensity} floatIntensity={floatIntensity}>
            {children}
        </Float>
    )
}

export default function Scene3D() {
    return (
        <div className="absolute inset-0 w-full h-full -z-0">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }} gl={{ alpha: true }}>
                <fog attach="fog" args={["#050505", 5, 15]} />
                <ambientLight intensity={0.2} />
                <pointLight position={[10, 10, 10]} intensity={1.5} color="#3b82f6" />
                <pointLight position={[-10, -10, -10]} intensity={0.5} color="#8b5cf6" />

                <NeuralCore />

                {/* Subtle background stars instead of heavy particles */}
                <Stars radius={100} depth={50} count={1000} factor={4} saturation={0} fade speed={1} />
            </Canvas>
        </div>
    );
}
