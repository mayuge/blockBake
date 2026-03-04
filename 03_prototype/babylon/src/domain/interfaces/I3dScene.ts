import type { Scene } from "@babylonjs/core"

export interface I3dScene {
  createScene: (containerId: string) => Scene | null
  disposeScene: () => void
}
