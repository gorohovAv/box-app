//import { useRef } from "react";
import { useRef } from "react";
import * as THREE from "three";

const Scene = () => {
  const ref = useRef<THREE.Mesh>(null);

  // Создаем вершинные данные для куба
  const vertices = new Float32Array([
    -1.0, -1.0, 1.0, 1.0, -1.0, 1.0, 1.0, 1.0, 1.0, -1.0, 1.0, 1.0, -1.0, -1.0,
    -1.0, 1.0, -1.0, -1.0, 1.0, 1.0, -1.0, -1.0, 1.0, -1.0,
  ]);

  // Индексы треугольников, образующих шестигранник куба

  const indices = new Uint16Array([
    0,
    1,
    2,
    2,
    3,
    0, // передняя грань
    4,
    5,
    6,
    6,
    7,
    4, // задняя грань
    0,
    3,
    7,
    7,
    4,
    0, // левая грань
    1,
    2,
    6,
    6,
    5,
    1, // правая грань
    3,
    2,
    6,
    6,
    7,
    3, // верхняя грань
    0,
    1,
    5,
    5,
    4,
    0, // нижняя грань
  ]);

  return (
    <mesh ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          array={vertices}
          itemSize={3}
          count={8}
        />

        <bufferAttribute
          attach="index"
          array={indices}
          count={indices.length}
        />
      </bufferGeometry>
      <meshBasicMaterial color="orange" />
    </mesh>
  );
};

export default Scene;
