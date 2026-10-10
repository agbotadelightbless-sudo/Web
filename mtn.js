function changeWidth(){
  
  let box =
document.getElementById("box");
  let content =
document.getElementById("content");

  if(box.style.height === '70%'){
     box.style.height = "20%";
    content.style.display = "none"
   }else{
     box.style.height = "70%";
    content.style.position = "absolute"
    content.style.display = "block";
   }
}


function showOrders(){
  const drop =
    document.getElementById("drop");
  const ordernetwork =
    document.getElementById("ordernetwork");

   //showOrders.preventDefault();
   ordernetwork.classList.toggle("show");
  
  if(drop.style.height === "40%"){
    
    ordernetwork.style.display = "none";
  }else{
    drop.style.height = "40%";
    ordernetwork.style.position = "absolute";
    ordernetwork.style.display = "block";
  }
}

const dataform =
  document.getElementById("M_dataForm");
const voiceform =
  document.getElementById("M_voiceForm");
const airform =
  document.getElementById("M_airForm");

const popup = 
  document.getElementById("confirmPopup");
const confirmBtn = 
  document.getElementById("confirmBtn");
const cancelBtn = 
  document.getElementById("cancelBtn");

const dataBtn = 
  document.getElementById("M_dataBtn");
const voiceBtn = 
  document.getElementById("M_voiceBtn");
const airBtn = 
  document.getElementById("M_airBtn");

dataBtn.addEventListener("click",
      function() {
        popup.style.display = "flex";
        
      });

//dataform.addEventListener("submit",
   //  function(event) {
       event.preventDefault();
       popup.style.display = "flex";
          });

cancelBtn.addEventListener("click", 
     function() {
       popup.style.display = "none";  
});
  
confirmBtn.addEventListener("click", 
    function() {
      popup.style.display = "none";
      dataform.submit();
    });