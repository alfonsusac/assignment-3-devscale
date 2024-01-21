import confetti from "canvas-confetti"

const heartShape = confetti.shapeFromText({ text: "❤", color: "#fff", scalar: 100 })
const heartShape2 = confetti.shapeFromPath({
  path: "m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412q-.975 1.313-2.625 2.963T13.45 19.7z"

})
const fgCanvas = document.getElementById('mycanvasfg')
export const myConfetti = confetti.create(fgCanvas, {
  resize: true
})

export function spawnHeartAtMouse(e) {
  myConfetti({
    shapes: [heartShape2],
    startVelocity: 5,
    gravity: -0.3,
    spread: 1000,
    colors: ["#fff"],
    scalar: 3,
    decay: 0.95,
    particleCount: 1,
    ticks: 144,
    flat: true,
    origin: {
      x: e.x / window.innerWidth,
      y: e.pageY / document.body.clientHeight,
    }
  })
}