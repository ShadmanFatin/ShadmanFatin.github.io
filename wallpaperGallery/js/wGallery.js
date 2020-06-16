const list = document.querySelector(".list");

for (let i=1; i<=16; i++)
{
      const img = document.createElement("img");
      list.appendChild(img);
      img.src = `img/${i}.jpg`;
      img.classList.add("smallImg");
}  

const smallImgList = document.querySelectorAll(".smallImg");
const bigImg = document.querySelector(".bigImg");

for (let i=0; i<=smallImgList.length-1; i++)
{
      smallImgList[i].addEventListener
      (
            "click" , function changeBigImg()
            {
                  removeSelectedBorder();
                  bigImg.src = event.target.src;
                  event.target.classList.add("selectedImg");
            }
      )
}

function removeSelectedBorder()
{
      for (let i=0; i<=smallImgList.length-1; i++)
      {
            smallImgList[i].classList.remove("selectedImg");
      }
}