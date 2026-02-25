import * as THREE from "three"

export interface I3dScene {
  createScene: () => THREE.Scene
}
