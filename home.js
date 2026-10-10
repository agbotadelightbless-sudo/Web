
function showDate() {
    const now = new Date();
  
    const days = [   
      "Sun",
      "Mon",
      "Tue",
      "Wed",
      "Thur",
      "Fri",
      "Sat"
      ]  

     const months = [
       "Jan",
       "Feb",
       "Ma",
       "April",
       "May",
       "Jun",
       "Jul",
       "Aug",
       "Sep",
       "Oct",
       "Nob",
       "Dec",
     ]
  const date =
   `${days[now.getDay()]},
    ${now.getDate()}
    ${months[now.getMonth()]}`
    //${now.getFullYear()}`; 
  
document.getElementById("date").innerHTML =
  date;
}
showDate();
setInterval(showDate,1000);



function openYellow() {
  window.location.href = 
    "MTN Portal/mtn.html";
}

function openAT() {
  window.location.href = 
    "AT Portal/at.html";
}

function openTelecel() {
  window.location.href = 
    "Telecel Portal/telecel.html";
}

function changeWidth(){
  
  let box =
document.getElementById("box");
  let content =
document.getElementById("content");

  if(box.style.height === '70%'){
     box.style.height = "15%";
    content.style.display = "none"
   }else{
     box.style.height = "70%";
    content.style.position = "absolute";
    content.style.display = "block";
   }
}