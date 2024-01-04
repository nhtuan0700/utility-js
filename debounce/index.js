

window.addEventListener('DOMContentLoaded', function () {
  const button = document.querySelector('button')
  
  button.addEventListener('click', debounce(clickOrder, 2000))
  // button.addEventListener('click', throttle(clickOrder, 2000))
})


const clickOrder = () => console.log('Start call api')
  
const debounce = (fn, delay) => {
  delay = delay || 0
  let timeId
  return () => {
    console.log('timeId', timeId)
    if (timeId) {
      clearTimeout(timeId)
    }
    timeId = setTimeout(fn, delay)
  }
}

const throttle = (fn, delay) => {
  delay = delay || 0
  let last = 0
  return () => {
    const now = new Date().getTime()
    console.log(last, now)
    if (now - last < delay) {
      return
    }
    last = now
    fn()
  }
}
