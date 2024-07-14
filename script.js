let slideIndex = 0;
let num =1;
let images = [
    1,2,3,4,5,6,7,8,9
];
const primeIMG =[['ea7bce0351ae14129a1a3c93c7b00b7922bc3d1ebd2f1fe439b991c0d832ff2a._AC_SL1584_.jpg','Farzi'],
    ['prime-video-mirzapur.png','Mirzapur'],['prime-video-dahaadpng.jpg','Dahaad']
]
let index = 0
let image = [1, 2, 3, 4, 5, 6, 7, 8]
let prev = images.length - 1
let next = index + 1

let click = ["left", "right"]

function imgReturn(num){
    return 'hero_image'+num+'.jpg';
}

function indexReturn(index){
    return (index < images.length)? index:index - images.length ;
}
function result(num){
    return (num >= images.length) ?0 :(num >= 0)? num : images.length - 1;
}
let boxes = document.querySelectorAll(".slide");
function changeImage(direction) {
if (click[direction] == "left"){
    prev -= 1
    index -= 1
    next -= 1
}
else{
    prev += 1
    index += 1
    next += 1
}
prev = result(prev)
next = result(next)
index = result(index)
let prevIndex = indexReturn(prev)
let nextIndex = indexReturn(next)
let currentIndex = indexReturn(index)
let currentImage = imgReturn(currentIndex + 1)
let prevImage = imgReturn(prevIndex + 1)
let nextImage = imgReturn(nextIndex + 1)
boxes[0].style.backgroundImage =`url(${currentImage})`;
boxes[3].style.backgroundImage =`url(${prevImage})`;
boxes[1].style.backgroundImage =`url(${nextImage})`;
}

function primeSlide() {
    let slide = document.getElementById('prime-video-img');
    let text = document.getElementById('seriesName');
    
    num += 1;
    num = (num>primeImage.length)?0:num;
    console.log(num);
    slide.style.backgroundImage = `url(${primeIMG[num-1][0]})`;
    text.textContent = primeIMG[num-1][1]+' - Season 1'; 
    console.log(primeIMG[num-1][0])
}
setInterval(primeSlide, 3000);
setInterval(changeImage,5000)



