import type { I3dObject } from "@/domain/interfaces/I3dObject"
import type { Scene } from "@babylonjs/core"
import { MeshBuilder } from "@babylonjs/core"

/**
 * 3Dオブジェクトの生成に関する処理をまとめる
 * 基本的な図形の生成
 */
const use3dObject = (): I3dObject => {
  const createCube = (size: number, scene: Scene) => {
    const cube = MeshBuilder.CreateBox("cube", { size }, scene)
    return cube
  }
  return {
    createCube,
  }
}

export default use3dObject
