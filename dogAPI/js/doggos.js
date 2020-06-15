const allBreedsListURL = "https://dog.ceo/api/breeds/list/all";
const breedsSelect = document.querySelector(".breedsSelect");
const dogEmoji = document.querySelector(".dogEmoji");
const dogImg = document.querySelector(".dogImg");


dogImg.src="http://placecorgi.com/260/180";
dogImg.classList.remove("show");
dogEmoji.classList.add("show");


init();

function init()
{
    fetch(allBreedsListURL)
    .then
    (
        function(response)
        {
            return response.json();
        }
    )
    
    .then
    (
        function(data)
        {
            const breedsObject = data.message;
            const breedsArray = Object.keys(breedsObject);

            for (let i=0; i<=breedsArray.length-1; i++)
            {
                const option = document.createElement("option");
                option.value = breedsArray[i];
                option.innerText = breedsArray[i];
                breedsSelect.appendChild(option);
            }
        }
    );

    

    breedsSelect.addEventListener
    (
        "change" , function(event)
        {
            const breedName = event.target.value;
            const imageURL = `https://dog.ceo/api/breed/${breedName}/images/random`;
            showImg(imageURL); 
        }
    );
}



//****************************************************************************




function showImg(imageURL)
{
    dogImg.classList.remove("show");
    dogEmoji.classList.add("show");
    fetch(imageURL)
    .then
    (
        function(response)
        {
            return response.json();
        }
    )

    .then
    (
        function(data)
        {
            dogImg.src = data.message;
        }
    );
}
    
    
    dogImg.addEventListener
    (
        "load" , function()
        {
            dogEmoji.classList.remove("show");
            dogImg.classList.add("show");
        }
    );
    


