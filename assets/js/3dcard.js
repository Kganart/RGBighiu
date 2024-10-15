bigChange=document.getElementById('changeSize')
trackNum=0

//bigChange.addEventListener("animationend", () => bigChange.classList.remove('card-expand'));

//switchFunction = () => bigChange.classList.add('card-expand'); //add the class to play animation

function switchFunction() {
  if (trackNum==0) {
    bigChange.classList.remove("card-an");
    bigChange.classList.add("card-expand");
    trackNum=1;
    return
  }
  if (trackNum==1) {
    bigChange.classList.remove("card-expand");
    bigChange.classList.add("card-close");
    trackNum=2;
    return
  }
  else if (trackNum==2) {
    bigChange.classList.remove("card-close");
    bigChange.classList.add("card-expand");
    trackNum=1;
    
    return
  }

}
