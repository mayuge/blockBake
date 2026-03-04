import type { I3dObject } from "@/domain/interfaces/I3dObject"
import * as THREE from "three"

/**
 * 3Dオブジェクトの生成に関する処理をまとめる
 * 基本的な図形の生成
 */
const use3dObject = (): I3dObject => {
  const createCube = (size: number) => {
    const geometry = new THREE.BoxGeometry(size, size, size)
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 })
    const cube = new THREE.Mesh(geometry, material)
    return cube
  }
  return {
    createCube,
  }
}

export default use3dObject
