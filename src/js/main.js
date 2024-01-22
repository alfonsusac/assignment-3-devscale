import { myConfetti, spawnHeartAtMouse } from "./confetti"
import { addCountAndUpdateCount, updateLikeCount } from "./like-counter"


const likebtn = document.getElementById('likebtn')
const heartOutlineSvg = document.getElementById('heart-outline')
const heartFillSvg = document.getElementById('heart-fill')

let liked = false
let extraLiked = 0
let firstTen = true
likebtn.addEventListener("click", (e) => {
  if (!liked) {
    heartOutlineSvg.classList.add('hidden')
    heartFillSvg.classList.remove('hidden')
    liked = true
  } else {
    if (extraLiked === 10) {
      firstTen = false
      addCountAndUpdateCount()
      heartFillSvg.style.scale = 1;
      extraLiked = 0
      let count = 0
      const interval = setInterval(() => {
        if (++count < 10) {
          spawnHeartAtMouse(e)
          myConfetti({
            spread: 90,
            origin: {
              x: e.x / window.innerWidth,
              y: e.pageY / document.body.clientHeight,
            }
          })
        } else {
          clearInterval(interval)
        }
      }, 100)
    }
    // <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="currentColor" d="m12 21l-1.45-1.3q-2.525-2.275-4.175-3.925T3.75 12.812Q2.775 11.5 2.388 10.4T2 8.15Q2 5.8 3.575 4.225T7.5 2.65q1.3 0 2.475.55T12 4.75q.85-1 2.025-1.55t2.475-.55q2.35 0 3.925 1.575T22 8.15q0 1.15-.387 2.25t-1.363 2.412q-.975 1.313-2.625 2.963T13.45 19.7z" /></svg>
    heartFillSvg.style.scale = 1 + (++extraLiked) / 10
  }
  if (firstTen) {
    addCountAndUpdateCount()
  }
  spawnHeartAtMouse(e)
})


updateLikeCount()