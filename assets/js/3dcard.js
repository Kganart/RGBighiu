bigChange=document.getElementById('changeSize');
trackNum= -1;
setTimeout(function(){
  trackNum=0;
}, 2000);
//bigChange.addEventListener("animationend", () => bigChange.classList.remove('card-expand'));

//switchFunction = () => bigChange.classList.add('card-expand'); //add the class to play animation

function switchFunction() {
  if (trackNum==0) {
    bigChange.classList.remove("card-an");
    bigChange.classList.add("card-expand");
    setTimeout(function(){
      trackNum=1;
    }, 1000);
    return
  }
  if (trackNum==1) {
    bigChange.classList.remove("card-expand");
    bigChange.classList.add("card-close");
    setTimeout(function(){
      trackNum=2;
    }, 1000);
    return
  }
  else if (trackNum==2) {
    bigChange.classList.remove("card-close");
    bigChange.classList.add("card-expand");
    setTimeout(function(){
      trackNum=1;
    }, 1000);
    return
  }

}
