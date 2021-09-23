let score = 0;

function getSadInterval()
{
    return Date.now() + 1000;
}



function getGoneInterval()
{
    return Date.now() + Math.floor( Math.random() * 18000 + 2000 );
}



function getHungryInterval()
{
    return Date.now() + Math.floor( Math.random() * 3000 + 2000 );
    // return Date.now() + 1000;
}



function getKingStatus()
{
    return Math.random() < 15/100;
}



const moles =
[
    {
        status: "sad" ,
        next: getSadInterval() ,
        king: false ,
        node: document.querySelector("#hole-0") , 
    }  
    ,
    {
        status: "sad" ,
        next: getSadInterval() ,
        king: false ,
        node: document.querySelector("#hole-1") , 
    }
    ,
    {
        status: "sad" ,
        next: getSadInterval() ,
        king: false ,
        node: document.querySelector("#hole-2") , 
    }
    ,
    {
        status: "sad" ,
        next: getSadInterval() ,
        king: false ,
        node: document.querySelector("#hole-3") , 
    }
    ,
    {
        status: "sad" ,
        next: getSadInterval() ,
        king: false ,
        node: document.querySelector("#hole-4") , 
    }
    ,
    {
        status: "sad" ,
        next: getSadInterval() ,
        king: false ,
        node: document.querySelector("#hole-5") , 
    }
    ,
    {
        status: "sad" ,
        next: getSadInterval() ,
        king: false ,
        node: document.querySelector("#hole-6") , 
    }
    ,
    {
        status: "sad" ,
        next: getSadInterval() ,
        king: false ,
        node: document.querySelector("#hole-7") , 
    }
    ,
    {
        status: "sad" ,
        next: getSadInterval() ,
        king: false ,
        node: document.querySelector("#hole-8") , 
    }
    ,
    {
        status: "sad" ,
        next: getSadInterval() ,
        king: false ,
        node: document.querySelector("#hole-9") , 
    }
];



function getNextStatus(mole)
{
    switch(mole.status)
    {
        case "sad":
        case "fed":
            mole.next = getSadInterval();
            mole.status = "leaving";
            mole.node.children[0].src = "img/mole-leaving.png";
            if (mole.king) mole.node.children[0].src = "img/king-mole-leaving.png";
            break;
        
        case "leaving":
            mole.next = getGoneInterval();
            mole.status = "gone";
            mole.node.children[0].classList.add("gone");
            break;

        case "gone":
            mole.status = "hungry";
            mole.king = getKingStatus();
            mole.next = getHungryInterval();
            mole.node.children[0].classList.add("hungry");
            mole.node.children[0].classList.remove("gone");
            mole.node.children[0].src = "img/mole-hungry.png";
            if (mole.king) mole.node.children[0].src = "img/king-mole-hungry.png";
            break;

        case "hungry":
            mole.status = "sad";
            mole.next = getSadInterval();
            mole.node.children[0].classList.remove("hungry");
            mole.node.children[0].src = "img/mole-sad.png";
            if (mole.king) mole.node.children[0].src = "img/king-mole-sad.png";
            break;
    }
}



let runAgainAt = Date.now();
const initialTime = Date.now();
let time = 0;


requestAnimationFrame(rafCounter); 

function rafCounter() 
{
    if (Date.now() > runAgainAt) 
    {
        //Animation starts here
        for (let i=0; i<=moles.length-1; i++)
        {
            if ( moles[i].next <= Date.now() )
            {
                getNextStatus( moles[i] );
            }
        }

        time++;
        document.querySelector(".timer").innerHTML = time; 
        //Animation ends here


        runAgainAt = Date.now() + 1000;
    }


    if (initialTime + 60*1000 <= Date.now() )
    {
        cancelAnimationFrame(rafCounter);
    }

    else 
    {
        requestAnimationFrame(rafCounter);
    }
}



document.querySelector(".bg").addEventListener("click" , feed);


function feed(event)
{
    if (!event.target.classList.contains("hungry") )
    {
        return; 
    }

    const mole = moles[ parseInt(event.target.dataset.index) ]; 

    mole.status = "fed";
    mole.next = getSadInterval();

    if (mole.king) 
    {
        mole.node.children[0].src = "img/king-mole-fed.png";
        score=score+2;
    }

    else
    {
        mole.node.children[0].src = "img/mole-fed.png";
        score++;
    }

    document.querySelector(".worm-container").style.width = `${10*score}%`;

    mole.node.children[0].classList.remove("hungry");

    if (score >= 10)
    {
        win();
    }
}



function win()
{
    document.querySelector(".bg").classList.add("hide");
    document.querySelector(".win").classList.remove("hide");
}