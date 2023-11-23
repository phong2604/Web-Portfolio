const cloud1 = document.getElementById("cloud-1")
const cloud2 = document.getElementById("cloud-2")
const cloud3 = document.getElementById("cloud-3")
const cloud4 = document.getElementById("cloud-4")
const cloud5 = document.getElementById("cloud-5")
const cloud6 = document.getElementById("cloud-6")
const cloud7 = document.getElementById("cloud-7")

window.addEventListener("scroll", () => {
    let value = window.scrollY



    cloud3.style.marginTop = value * 0.5 + 'px';


    //near cloud
    cloud1.style.marginTop = value * -0.3 + 'px';
    cloud4.style.marginTop = value * -0.5 + 'px';
    cloud6.style.marginTop = value * -0.3 + 'px';
    //back cloud
    cloud2.style.marginTop = value * 0.6 + 'px';

    cloud5.style.marginTop = value * 0.4 + 'px';
})



/* const up = document.getElementById("up");
const wrapper = document.querySelector(".class");

up.addEventListener("click", () => {
    wrapper.scroll({top:0,behavior:'smooth'})
}); */
/* function scroll(){
    var top = document.getElementsByClassName("wrapper").scrollIntoView({behavior: 'smooth'}, true);
} */

