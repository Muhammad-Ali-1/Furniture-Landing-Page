document.addEventListener("DOMContentLoaded", function () {
  const items = document.querySelectorAll(".item");
  console.log(items);

  const allBtn = document.getElementById("allBtn");
  const bedBtn = document.getElementById("bedBtn");
  const sofaBtn = document.getElementById("sofaBtn");
  const chairBtn = document.getElementById("chairBtn");
  const lightBtn = document.getElementById("lightBtn");
  allBtn.style.color = "#3D3D3F";

  allBtn.onclick = () => {
    allBtn.style.color = "#3D3D3F";
    bedBtn.style.color = "#A9A7A6";
    sofaBtn.style.color = "#A9A7A6";
    chairBtn.style.color = "#A9A7A6";
    lightBtn.style.color = "#A9A7A6";
    items.forEach((item) => {
      item.style.display = "block";
    });
  };
  bedBtn.onclick = () => {
    allBtn.style.color = "#A9A7A6";
    bedBtn.style.color = "#3D3D3F";
    sofaBtn.style.color = "#A9A7A6";
    chairBtn.style.color = "#A9A7A6";
    lightBtn.style.color = "#A9A7A6";
    items.forEach((item) => {
      if (item.classList.contains("bed")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };
  sofaBtn.onclick = () => {
    allBtn.style.color = "#A9A7A6";
    bedBtn.style.color = "#A9A7A6";
    sofaBtn.style.color = "#3D3D3F";
    chairBtn.style.color = "#A9A7A6";
    lightBtn.style.color = "#A9A7A6";
    items.forEach((item) => {
      if (item.classList.contains("sofa")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };
  chairBtn.onclick = () => {
    allBtn.style.color = "#A9A7A6";
    bedBtn.style.color = "#A9A7A6";
    sofaBtn.style.color = "#A9A7A6";
    chairBtn.style.color = "#3D3D3F";
    lightBtn.style.color = "#A9A7A6";
    items.forEach((item) => {
      if (item.classList.contains("chair")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };
  lightBtn.onclick = () => {
    allBtn.style.color = "#A9A7A6";
    bedBtn.style.color = "#A9A7A6";
    sofaBtn.style.color = "#A9A7A6";
    chairBtn.style.color = "#A9A7A6";
    lightBtn.style.color = "#3D3D3F";
    items.forEach((item) => {
      if (item.classList.contains("light")) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  };

  const leftBtn = document.getElementById("leftBtn");
  const rightBtn = document.getElementById("rightBtn");
  let index = 0;
  const msgs = document.querySelectorAll(".text");
  const cNames = document.querySelectorAll(".customer-name");
  const dates = document.querySelectorAll(".date");
  setMsgs();
  setButtons()
  const length = msgs.length;

  function setMsgs() {
    for (let i = 0; i < msgs.length; i++) {
      if (i == index) {
        msgs[i].style.display = "block";
        cNames[i].style.display = "block";
        dates[i].style.display = "block";
      } else {
        msgs[i].style.display = "none";
        cNames[i].style.display = "none";
        dates[i].style.display = "none";
      }
      console.log(`Index: ${index}`)
    }
  }
function setButtons(){

    if(index==0){
        leftBtn.style.backgroundColor = "#E9E9E9"
        leftBtn.style.cursor = "default"
    }
    else if(index > 0 && index<msgs.length-1){
        leftBtn.style.backgroundColor = "#fff"
        leftBtn.style.cursor = "pointer"
        rightBtn.style.backgroundColor = "#fff"
        rightBtn.style.cursor = "pointer"

    }
    else if(index==msgs.length-1){
        rightBtn.style.backgroundColor = "#E9E9E9"
        rightBtn.style.cursor = "default"
    }
}

  rightBtn.onclick = () => {
      if (index < length-1) {
          index++;
        setMsgs();
        setButtons()
    }
};
leftBtn.onclick = () => {
    if (index > 0) {
        index--;
        setMsgs();
        setButtons()
    }
  };
});
