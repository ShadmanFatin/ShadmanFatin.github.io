const list = document.querySelector(".list");

for (let i=0; i<=15; i++)
{
      const img = document.createElement("img");
      list.appendChild(img);
      img.src = `img/${i}.jpg`;
      img.classList.add("smallImg");
      if (i==0) img.classList.add("selectedImg");
      img.dataset.index=i;
}  

//********************************************************

const smallImgList = document.querySelectorAll(".smallImg");
const bigImg = document.querySelector(".bigImg");

for (let i=0; i<=smallImgList.length-1; i++)
{
      smallImgList[i].addEventListener
      (
            "click" , function(event)
            {
                  changeBigImg(event.target);
            }
      )
}

//********************************************************

function removeSelectedBorder()
{
      for (let i=0; i<=smallImgList.length-1; i++)
      {
            if ( smallImgList[i].classList.contains("selectedImg") )
            smallImgList[i].classList.remove("selectedImg");
      }
}

//********************************************************

setTimeout
(
      function startAnimationAfter()
      { 
            requestAnimationFrame(rafCounter); 
      }
      
      , 
      
      3000
      );
      
//**********************************************************

      let runAgainAt = Date.now();
      let initialTime = Date.now();
      

      function rafCounter() 
      {
            if (Date.now() > runAgainAt) 
            {
            // Start animation from here...
            goToNextImg();
            // Finish animation upto here...


            runAgainAt = Date.now() + 3000;
      }


      if (initialTime + 100*1000 <= Date.now() )
      {
            cancelAnimationFrame(rafCounter);
      }

      else 
      {
            requestAnimationFrame(rafCounter);
      }
}

//********************************************************

function getNextSmallImg(currentImgIndex)
{     
      let nextImgIndex = parseInt(currentImgIndex)+1;
      if (nextImgIndex==16) nextImgIndex=0;
      if (nextImgIndex==-1) nextImgIndex=15;
      return smallImgList[nextImgIndex];
}

function changeBigImg(smallImg)
{
      removeSelectedBorder();
      bigImg.src = smallImg.src;
      smallImg.classList.add("selectedImg");
      bigImg.dataset.index=smallImg.dataset.index; 
}

function goToNextImg()
{
      let currentImgIndex = bigImg.dataset.index;
      let nextSmallImg = getNextSmallImg(currentImgIndex); 
      changeBigImg(nextSmallImg);
}

function goToPrevImg()
{
      let currentImgIndex = bigImg.dataset.index-2;
      let nextSmallImg = getNextSmallImg(currentImgIndex); 
      changeBigImg(nextSmallImg);
}

const nextButton = document.querySelector(".nextButton");
const prevButton = document.querySelector(".prevButton");

nextButton.addEventListener
(
      "click" , function(event)
      {
            goToNextImg();
      }
)

prevButton.addEventListener
(
      "click" , function(event)
      {
            goToPrevImg();
      }
)