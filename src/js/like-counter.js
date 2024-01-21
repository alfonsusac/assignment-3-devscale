export function updateLikeCount() {
  const likeCount = document.getElementById("like-count")
  fetch('https://portfolio-backend-sigma-ashen.vercel.app/like-count')
    .then((res) => res.json())
    .then(json => {
      const count = json.likes
      if (count === undefined) throw new Error('Count failed to be fetched')
      likeCount.innerText = parseInt(count)
    })
}

export function addCountAndUpdateCount() {
  const likeCount = document.getElementById("like-count")
  fetch('https://portfolio-backend-sigma-ashen.vercel.app/like-count', {
    method: "POST"
  })
    .then((res) => res.json())
    .then(json => {
      const count = json.likes
      if (count === undefined) throw new Error('Count failed to be fetched after added')
      likeCount.innerText = parseInt(count)
    })
}