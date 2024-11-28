//mobile ver

//status-bar clock 
function updateTime(){
  const timeElement = document.getElementById("time")
  const currentTime = new Date()
  const hours = currentTime.getHours().toString().padStart(2, "0")
  const minutes = currentTime.getMinutes().toString().padStart(2, "0")
  const timeString = hours+':'+minutes

  timeElement.textContent = timeString
}

setInterval(updateTime, 1000)
updateTime()




/* nav menu slider */
var swiper = new Swiper(".navSwiper", {
  slidesPerView: "auto",
  spaceBetween: 14,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});


/* s3 menu slider */
var swiper2 = new Swiper(".s3Swiper", {
  slidesPerView: "auto",
  spaceBetween: 50,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});



/* contact 클릭 */

const $contact_btn = document.querySelector('.footerDown li:last-child a')
const $body = document.querySelector('body')
const $close_btn = document.querySelector('.closeBtn')

$contact_btn.addEventListener('click',function(e){
  e.preventDefault()
  $body.classList.add('open')
})

$close_btn.addEventListener('click',function(e){
  e.preventDefault()
  $body.classList.remove('open')
  $body.removeAttribute('class')
})


/* nav contact me 클릭 */
const $nav_contact = document.querySelector('.nav > div > div > a:last-child')
$nav_contact.addEventListener('click',function(e){
  e.preventDefault()
  $body.classList.add('open')
})

/* nav menu 클릭 시 해당 섹션으로 이동*/

const menuItems = document.querySelectorAll('.nav > div > div > a')

let num = 0

menuItems.forEach(function(item,idx){
  item.onclick = function(e){
    e.preventDefault()

    let targetName = item.dataset.target
    console.log(targetName)
    document.querySelector(targetName).scrollIntoView({
      behavior:"smooth"
    })

    num = idx
  }
})


/* pc상태일때만 애니메이션 작동 */

const $mockupWrapper = document.querySelector('.mockup_wrapper')

window.onresize=function(){

  let winSize = window.innerWidth
  
  if(winSize<834){
    $mockupWrapper.classList.remove('animate__animated', 'animate__bounceInUp', 'animate__delay-1s')
  } else { $mockupWrapper.classList.add('animate__animated', 'animate__bounceInUp', 'animate__delay-1s') }
}

