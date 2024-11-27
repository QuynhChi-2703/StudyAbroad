const menuBar = document.querySelector(".header-top>i")
const closeBtn = document.querySelector(".header-top ul i")
menuBar.addEventListener("click",function(){
    document.querySelector(".header-top ul").style.transform = "translateX(0%)"
    document.querySelector(".header-top ul").style.opacity = "1"
})

closeBtn.addEventListener("click",function(){
    document.querySelector(".header-top ul").style.transform = "translateX(100%)"
    document.querySelector(".header-top ul").style.opacity = "0"
})



const next = document.querySelector('.next')
const prev = document.querySelector('.prev')
const comment = document.querySelector('#list-comment')
const commentItem = document.querySelectorAll('#list-comment .item')
var translateY = 0
var count = commentItem.length

next.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 1) {
    // Xem hết bình luận
    return false
  }
  translateY += -400
  comment.style.transform = `translateY(${translateY}px)`
  count--
})

prev.addEventListener('click', function (event) {
  event.preventDefault()
  if (count == 3) {
    // Xem hết bình luận
    return false
  }
  translateY += 400
  comment.style.transform = `translateY(${translateY}px)`
  count++
})