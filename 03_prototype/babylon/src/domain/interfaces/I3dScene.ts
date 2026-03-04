import type { AbstractEngine, Scene } from "@babylonjs/core"

export interface I3dScene {
  createScene: (engine: AbstractEngine) => Scene
}
