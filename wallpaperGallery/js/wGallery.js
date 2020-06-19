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
            let currentImgIndex = bigImg.dataset.index;
            let nextSmallImg = getNextSmallImg(currentImgIndex); 
            changeBigImg(nextSmallImg);
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
      return smallImgList[nextImgIndex];
}

function changeBigImg(smallImg)
{
      removeSelectedBorder();
      bigImg.src = smallImg.src;
      smallImg.classList.add("selectedImg");
      bigImg.dataset.index=smallImg.dataset.index; 
}