let inputScreen = document.querySelector("#inputScreen");
let outputScreen = document.querySelector("#outputScreen");
let userInputString;



function calculate(userInputString)
{
    let result = ( eval(userInputString) );

    //if result is integer then directly show the result in outputScreen
    if(result == parseInt(result) )
    {
        outputScreen.innerText = "= " + result;
    }

    //if result is a deciaml number (i.e fractional number), then convert it to only upto 10 digits after decimal point. Then show the result in outputScreen
    else
    {
        result = result.toFixed(10);
        outputScreen.innerText = "= " + result;
    }

    //if mom's phone number is typed on the inputScreen and then equalTo is pressed, then this sentence will be shown in outputScreen 
    if (userInputString==1911176549) outputScreen.innerText="That's mom's number!";
}



function buttonClick(value)
{
    //removing the 0 at the beginning whenever any number is pressed 
    if (inputScreen.innerText == 0 && !isNaN(value) )
    {
        inputScreen.innerText = "" + value;
    }



    else
    {
        //if a number is pressed then 
        if ( !isNaN(value) )
        {
            inputScreen.innerText = inputScreen.innerText + value;
        }

        //if point is pressed then
        if (value==".")
        {
            inputScreen.innerText = inputScreen.innerText + ".";
        }

        //if plus is pressed then
        if (value=="+")
        {
            inputScreen.innerText = inputScreen.innerText + "+";
        }

        //if minus is pressed then
        if (value=="−")
        {
            inputScreen.innerText = inputScreen.innerText + "-";
        }

        //if multiply is pressed then
        if (value=="×")
        {
            inputScreen.innerText = inputScreen.innerText + "*";
        }

        //if divide is pressed then
        if (value=="÷")
        {
            inputScreen.innerText = inputScreen.innerText + "/";
        }



        //clear button working
        else if (value == "Clear")
        {
            inputScreen.innerText = 0;
        }

        //backspace button working
        else if (value == "←")
        {
            let s = inputScreen.innerText;
            if (s.length === 1 || s.length === 0) s = 0;
            else s = s.substring(0 , s.length-1);
            inputScreen.innerText = s;
        }

        //if user clicks on other places insted of buttons then debugged
        else if (value != (!isNaN(value)||value=="."||value=="×"||value=="+"||value=="−"||value=="÷"||value=="Clear"||value=="←"||value=="=") )
        {
            let s = inputScreen.innerText;
            if (s.length === 1 || s.length === 0) s = 0;
            inputScreen.innerText = s;
        }

        //whenever a button is pressed if there is some output on the outputScreen, then the outputScreen will be cleared and only an "=" will be shown there 
        if (value != "=") outputScreen.innerText = "=";

        //Finally when the user presses "=" then calculate function is called
        if (value === "=") 
        {
            userInputString = inputScreen.innerText;
            calculate(userInputString);
        } 
    }
}



function init()
{
    document.querySelector(".allButtons").addEventListener
    (
        "click" , function(event)
        {
            buttonClick(event.target.innerText);
        }
    )
}



let isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
if (isMobile) alert("Thanks for using SFcalculator on your SmartPhone !");
else alert("Thanks for using SFcalculator on your PC !");



init();