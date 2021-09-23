//declaring variables
let x;
let a;
let b;
let A=[];


function takeInputs()
{
    x = document.getElementById("x").value;
    a = document.getElementById("a").value;
    b = document.getElementById("b").value;

    x = parseFloat(x);
    a = parseInt(a);
    b = parseInt(b);
}


function calculation()
{
    for (let i=a; i<=b; i++)
    {
        A.push(" " + x + "×" + i + "=" + (x*i) + " ");
    }
}


function buttonClick()
{
    takeInputs();
    calculation();
    document.querySelector(".outputs").innerText = A; 
    A = [];
}


function init()
{
    document.querySelector("button").addEventListener
    (
        "click" , function(event)
        {
            buttonClick();
        }
    )
}


init();