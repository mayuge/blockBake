import type { Mesh, Scene } from "@babylonjs/core"

export interface I3dObject {
  createCube: (size: number, scene: Scene) => Mesh
}
