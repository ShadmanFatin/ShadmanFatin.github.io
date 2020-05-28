const newGame_page = document.querySelector(".newGame_page");
const duringGame_page = document.querySelector(".duringGame_page");
const endGame_page = document.querySelector(".endGame_page");


const worm = document.querySelector(".worm");
const wormContainer = document.querySelector(".wormContainer");


document.querySelector(".playAgain").addEventListener
(
    "click" , function()
    {
        location.reload("index.html");
    }
)



let point = 0;

const container1 = document.querySelector(".container1");
const container2 = document.querySelector(".container2");
const container3 = document.querySelector(".container3");
const container4 = document.querySelector(".container4");
const container5 = document.querySelector(".container5");
const container6 = document.querySelector(".container6");
const container7 = document.querySelector(".container7");
const container8 = document.querySelector(".container8");
const container9 = document.querySelector(".container9");
const container10 = document.querySelector(".container10");


//cont1 ***************
const king_mole_fedc1 = document.createElement("img");
const king_mole_hungryc1 = document.createElement("img");
const king_mole_leavingc1 = document.createElement("img");
const king_mole_sadc1 = document.createElement("img");
const mole_fedc1 = document.createElement("img");
const mole_hungryc1 = document.createElement("img");
const mole_leavingc1 = document.createElement("img");
const mole_sadc1 = document.createElement("img");


king_mole_fedc1.classList.add("moleImg");
king_mole_hungryc1.classList.add("moleImg");
king_mole_leavingc1.classList.add("moleImg");
king_mole_sadc1.classList.add("moleImg");
mole_fedc1.classList.add("moleImg");
mole_hungryc1.classList.add("moleImg");
mole_leavingc1.classList.add("moleImg");
mole_sadc1.classList.add("moleImg");


king_mole_fedc1.src = "img/king-mole-fed.png";
king_mole_hungryc1.src = "img/king-mole-hungry.png";
king_mole_leavingc1.src = "img/king-mole-leaving.png";
king_mole_sadc1.src = "img/king-mole-sad.png";
mole_fedc1.src = "img/mole-fed.png";
mole_hungryc1.src = "img/mole-hungry.png";
mole_leavingc1.src ="img/mole-leaving.png";
mole_sadc1.src = "img/mole-sad.png";


//cont2 **************
const king_mole_fedc2 = document.createElement("img");
const king_mole_hungryc2 = document.createElement("img");
const king_mole_leavingc2 = document.createElement("img");
const king_mole_sadc2 = document.createElement("img");
const mole_fedc2 = document.createElement("img");
const mole_hungryc2 = document.createElement("img");
const mole_leavingc2 = document.createElement("img");
const mole_sadc2 = document.createElement("img");


king_mole_fedc2.classList.add("moleImg");
king_mole_hungryc2.classList.add("moleImg");
king_mole_leavingc2.classList.add("moleImg");
king_mole_sadc2.classList.add("moleImg");
mole_fedc2.classList.add("moleImg");
mole_hungryc2.classList.add("moleImg");
mole_leavingc2.classList.add("moleImg");
mole_sadc2.classList.add("moleImg");


king_mole_fedc2.src = "img/king-mole-fed.png";
king_mole_hungryc2.src = "img/king-mole-hungry.png";
king_mole_leavingc2.src = "img/king-mole-leaving.png";
king_mole_sadc2.src = "img/king-mole-sad.png";
mole_fedc2.src = "img/mole-fed.png";
mole_hungryc2.src = "img/mole-hungry.png";
mole_leavingc2.src ="img/mole-leaving.png";
mole_sadc2.src = "img/mole-sad.png";


//cont3 **************
const king_mole_fedc3 = document.createElement("img");
const king_mole_hungryc3 = document.createElement("img");
const king_mole_leavingc3 = document.createElement("img");
const king_mole_sadc3 = document.createElement("img");
const mole_fedc3 = document.createElement("img");
const mole_hungryc3 = document.createElement("img");
const mole_leavingc3 = document.createElement("img");
const mole_sadc3 = document.createElement("img");


king_mole_fedc3.classList.add("moleImg");
king_mole_hungryc3.classList.add("moleImg");
king_mole_leavingc3.classList.add("moleImg");
king_mole_sadc3.classList.add("moleImg");
mole_fedc3.classList.add("moleImg");
mole_hungryc3.classList.add("moleImg");
mole_leavingc3.classList.add("moleImg");
mole_sadc3.classList.add("moleImg");


king_mole_fedc3.src = "img/king-mole-fed.png";
king_mole_hungryc3.src = "img/king-mole-hungry.png";
king_mole_leavingc3.src = "img/king-mole-leaving.png";
king_mole_sadc3.src = "img/king-mole-sad.png";
mole_fedc3.src = "img/mole-fed.png";
mole_hungryc3.src = "img/mole-hungry.png";
mole_leavingc3.src ="img/mole-leaving.png";
mole_sadc3.src = "img/mole-sad.png";



const timer = document.querySelector(".timer");


let counter = 0;
let runAgainAt = Date.now();
const initialTime = Date.now();

document.querySelector(".play").addEventListener
(
    "click" , function()
    {
        requestAnimationFrame(rafCounter);
        newGame_page.style.display = "none";
        duringGame_page.style.display = "block";
        endGame_page.style.display = "none"

         container1_ON = false;
         container2_ON = false;
         container3_ON = false;
         container4_ON = false;
         container5_ON = false;
         container6_ON = false;
         container7_ON = false;
         container8_ON = false;
         container9_ON = false;
         container10_ON = false;

         container1Counter = 0;
         container2Counter = 0;
         container3Counter = 0;
         container4Counter = 0;
         container5Counter = 0;
         container6Counter = 0;
         container7Counter = 0;
         container8Counter = 0;
         container9Counter = 0;
         container10Counter = 0;
    }
)




let container1_ON = false;
let container2_ON = false;
let container3_ON = false;
let container4_ON = false;
let container5_ON = false;
let container6_ON = false;
let container7_ON = false;
let container8_ON = false;
let container9_ON = false;
let container10_ON = false;

let container1Counter = 0;
let container2Counter = 0;
let container3Counter = 0;
let container4Counter = 0;
let container5Counter = 0;
let container6Counter = 0;
let container7Counter = 0;
let container8Counter = 0;
let container9Counter = 0;
let container10Counter = 0;



function rafCounter() 
{
    if (Date.now() > runAgainAt) 
    {
        //Animation
        if (Math.random()<1/10 && !container1_ON) container1_ON = true;
        if (Math.random()<1/10 && !container2_ON) container2_ON = true;
        if (Math.random()<1/10 && !container3_ON) container3_ON = true;
        if (Math.random()<1/10 && !container4_ON) container4_ON = true;
        if (Math.random()<1/10 && !container5_ON) container5_ON = true;
        if (Math.random()<1/10 && !container6_ON) container6_ON = true;
        if (Math.random()<1/10 && !container7_ON) container7_ON = true;
        if (Math.random()<1/10 && !container8_ON) container8_ON = true;
        if (Math.random()<1/10 && !container9_ON) container9_ON = true;
        if (Math.random()<1/10 && !container10_ON) container10_ON=true;



        if (container1_ON || container1Counter!=0)
        {
            if (container1Counter===0) 
            {
                container1.appendChild(mole_hungryc1); 
            }

            if (container1Counter===1) 
            {
                container1.removeChild(mole_hungryc1);

                if ( !container1.hasChildNodes("mole_fedc1") )
                container1.appendChild(mole_sadc1);
            }

            if (container1Counter===2) 
            {
                if ( !container1.hasChildNodes("mole_fedc1") ) container1.removeChild(mole_sadc1);

                if ( container1.hasChildNodes("mole_fedc1") ) container1.removeChild(mole_fedc1);

                container1.appendChild(mole_leavingc1);
            }

            if (container1Counter===3) 
            {
                container1.removeChild(mole_leavingc1);
                container1_ON = false;
                container1Counter = 0;
            }

            else container1Counter++;
        }
        

        if (container2_ON || container2Counter!=0)
        {
            if (container2Counter==0) 
            {
                container2.appendChild(mole_hungryc2);  
            }

            if (container2Counter==1) 
            {
                container2.removeChild(mole_hungryc2);

                if ( !container2.hasChildNodes("mole_fedc2") )
                container2.appendChild(mole_sadc2);
            }

            if (container2Counter==2) 
            {
                if ( !container2.hasChildNodes("mole_fedc2") ) container2.removeChild(mole_sadc2);

                if ( container2.hasChildNodes("mole_fedc2") ) container2.removeChild(mole_fedc2);

                container2.appendChild(mole_leavingc2);
            }

            if (container2Counter==3) 
            {
                container2.removeChild(mole_leavingc2);
                container2_ON = false;
                container2Counter = 0;
            }

            else container2Counter++;
        }


        if (container3_ON || container3Counter!=0)
        {
            if (container3Counter==0) 
            {
                container3.appendChild(mole_hungryc3); 
            }

            if (container3Counter==1) 
            {
                container3.removeChild(mole_hungryc3);

                if ( !container3.hasChildNodes("mole_fedc3") )
                container3.appendChild(mole_sadc3);
            }

            if (container3Counter==2) 
            {
                if ( !container3.hasChildNodes("mole_fedc3") ) container3.removeChild(mole_sadc3);

                if ( container3.hasChildNodes("mole_fedc3") ) container3.removeChild(mole_fedc3);

                container3.appendChild(mole_leavingc3);
            }

            if (container3Counter==3) 
            {
                container3.removeChild(mole_leavingc3);
                container3_ON = false;
                container3Counter = 0;
            }

            else container3Counter++;
        }




        

        runAgainAt = Date.now() + 1000;
        //for checking with "counter"
        counter++;
        timer.innerHTML = counter;
    }


    if (initialTime + 15*1000 <= Date.now() )
    {
        cancelAnimationFrame(rafCounter);
        duringGame_page.style.display = "none";
        endGame_page.style.display = "block";


        document.querySelector(".score").innerHTML = `Score: ${point}`; 


        
        document.querySelector(".play").addEventListener
        (
            "click" , function()
            {
                newGame_page.style.display = "none";
                duringGame_page.style.display = "block";
                endGame_page.style.display = "none"
            }
        )
    }

    else 
    {
        requestAnimationFrame(rafCounter);
    }
}




mole_hungryc1.addEventListener
(
    "click" , function()
    {
        point++;
        wormContainer.style.width = `${point*20}%`;
        console.log(point);
        container1.appendChild(mole_fedc1);
    }
)

mole_hungryc2.addEventListener
(
    "click" , function()
    {
        point++;
        wormContainer.style.width = `${point*20}%`;
        console.log(point);
        container2.appendChild(mole_fedc2);
    }
)

mole_hungryc3.addEventListener
(
    "click" , function()
    {
        point++;
        wormContainer.style.width = `${point*20}%`;
        console.log(point);
        container3.appendChild(mole_fedc3);
    }
)