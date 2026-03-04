import { I3dScene } from "@/domain/interfaces/I3dScene"
import { Scene } from "@babylonjs/core"
import type { AbstractEngine } from "@babylonjs/core"

/**
 * オブジェクトの生成以外の3Dシーンの生成に関する処理をまとめる
 * カメラやライトの生成など
 */
const use3dScene = (): I3dScene => {
  const createScene = (engine: AbstractEngine) => {
    const scene = new Scene(engine)
    return scene
  }
  return {
    createScene,
  }
}

export default use3dScene
