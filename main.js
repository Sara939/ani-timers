
// setinterval:///////////////////////////////////////////////////
// 1:
// function mytimer(){
//     setInterval(()=>{
//         document.write("timer"); 
//     },5000)
// }
// mytimer();

// 2:
// var mycount= setInterval(mycounte,6000);
// var i=0;
// function mycounte(){
//     document.write(i);
//      i++;
// }

// 3:
// var stopid= setInterval(love, 5000);
// function love (){
//     document.write("i love timers");
// }
// clearInterval(stopid);

// 4:
// function printhour(){
//     var mytime= new Date();
//     document.write(mytime);
// }
// setInterval(printhour,1000);
// 5:////////////////////////////////////////////////////

// var setid= setInterval(getminuts,5000);
// function getminuts(){
//     var numinput= document.getElementById("myinput").value;
//     document.write(numinput);
//     numinput--;
// }

// function stopbutton(){
//     var mystopbut= document.getElementById("mybutton");
//     mystopbut.onclick= clearInterval(setid);
// }

// settimeout://///////////////////////////////////////////
// 1:
// var idtimeout= setTimeout( printname, 7000);
// function printname(){
//     document.getElementById("h1Id").innerText = "sara";
// }
// 2:
// setTimeout(() => {
//     document.getElementById("h1Id").innerText = "hello";
// }, 5000);
// document.getElementById("h1Id").innerText= "bye";

// 3:
// setTimeout(()=>{
//     document.getElementById("h1Id").innerText= new Date();
// },90000);

// 4:
// var timoutId;
// timoutId= setTimeout(()=>{
//     document.getElementById("h1Id").innerText= "i love timers";
// },5000)

// document.getElementById("mybtn").onclick= function myclear(){
//   clearTimeout(timoutId);  
// }

// animation:
// 1-4:
// var size =30;
// var tostop;
// var myelemet= document.getElementById("mydiv");
// function startfunction(){
// tostop= setInterval(()=>{
//     size +=1;
//     myelemet.style.width= size+"vw";
// },3000)
// }

// function stopbtn(){
//     clearInterval(tostop);
// }
// var deletenter= document.getElementById("myenter");
// deletenter.removeEventListener("click",startfunction);
// deletenter.removeEventListener("click",stopbtn);

// var btnclick= document.getElementById("mybutton");
// var btnclick2 = document.getElementById("mybutton2");
// btnclick.addEventListener("click",startfunction);
// btnclick2.addEventListener("click",stopbtn);

// 5:
var mycolor= ["red", "yellow", "green"];
var myelem= document.getElementById("mydivelement");
myelem.onclick= function changcolors(){
    setInterval(()=>{
        for(var i=0; i<mycolor.length;i++){
          myelem.style.backgroundColor=mycolor[i];   
        }
    },4000)
}
