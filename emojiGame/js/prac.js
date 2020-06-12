//blackFace controlling 

const blackFace = document.querySelector(".blackFace");

document.addEventListener
(
    "keydown" , function(event)
    {
        let x = event.keyCode;
        if (x==37) left();
        if (x==38) up();
        if (x==39) right();
        if (x==40) down();
    }
)

let bl = blackFace.style.left;
let bt = blackFace.style.top;

function left()
{
    bl = parseInt(bl);

    if (bl>1)
    {
        bl=bl-5;
        blackFace.style.left = bl+"rem";
    }
}

function up()
{
    bt = parseInt(bt);

    if (bt>0)
    {
        bt=bt-5;
        blackFace.style.top = bt+"rem";
    }
}

function right()
{
    bl = parseInt(bl);

    if (bl<75)
    {
        bl=bl+5;
        blackFace.style.left = bl+"rem";
    }
}

function down()
{
    bt = parseInt(bt);

    if (bt<32)
    {
        bt=bt+5;
        blackFace.style.top = bt+"rem";
    }
}

//*************************************************************************
//whiteFace auto movement

const whiteFace = document.querySelector(".whiteFace");
let timer = 0;

const interval = setInterval(init , 100);

function init()
{
    if (Math.random()<0.5) wleft();
    if (Math.random()<0.5) wup();
    if (Math.random()<0.5) wright();
    if (Math.random()<0.5) wdown();
    timer++;
    console.log(timer);
}

let wl = whiteFace.style.left;
let wt = whiteFace.style.top;

function wleft()
{
    wl = parseInt(wl);

    if (wl>11)
    {
        wl=wl-10;
        whiteFace.style.left = wl+"rem";
    }
}

function wup()
{
    wt = parseInt(wt);

    if (wt>10)
    {
        wt=wt-10;
        whiteFace.style.top = wt+"rem";
    }
}

function wright()
{
    wl = parseInt(wl);

    if (wl<75)
    {
        wl=wl+10;
        whiteFace.style.left = wl+"rem";
    }
}

function wdown()
{
    wt = parseInt(wt);

    if (wt<32)
    {
        wt=wt+10;
        whiteFace.style.top = wt+"rem";
    }
}

//******************************************************************
//win game

// wl = parseInt(wl);
// wt = parseInt(wt);
// bl = parseInt(bl);
// bt = parseInt(bt);

function go()
{
    if ( (wl == bl) && (wt==bt) ) 
    {
        clearInterval(interval);
        blackFace.innerHTML = "♥";
        whiteFace.innerHTML = "♥";
    }
}

document.addEventListener
(
    "keyup" , function()
    {
        go();
    }
)

document.querySelector("button").addEventListener
(
    "click" , function()
    {
        clearInterval(interval);
    }
)