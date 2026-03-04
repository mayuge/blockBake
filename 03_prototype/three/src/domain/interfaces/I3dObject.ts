import * as THREE from "three"

export interface I3dObject {
  createCube: (size: number) => THREE.Mesh
}
