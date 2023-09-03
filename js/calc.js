let hasDoneOperation = false;

function rootOf()
{
    let inputText = document.getElementById("input").innerText;
    
    
    document.getElementById("input").innerText = Math.sqrt(Number(inputText));
    document.getElementById("previous").innerText = "rootOf(" + inputText + ")";

    hasDoneOperation = true;
}

function x2()
{
    let inputText = document.getElementById("input").innerText;
    
    
    document.getElementById("input").innerText = inputText * inputText;
    document.getElementById("previous").innerText = "sqr(" + inputText + ")";

    hasDoneOperation = true;
}

function Equals()
{
    let inputText = document.getElementById("input").innerText;
    let previousText = document.getElementById("previous").innerText;

    if(hasDoneOperation == false)
    {
        let o = previousText.substring(previousText.length -1,previousText.length);
        let sum = 0;
        switch (o)
        {
            case "+":
                previousText = previousText.substring(0,previousText.length -2);
                sum = Number(inputText) + Number(previousText);
                document.getElementById("previous").innerText = previousText + " + " + inputText + " = " + sum;
                hasDoneOperation = true;
                break;
            case "-":
                previousText = previousText.substring(0,previousText.length -2);
                sum = Number(inputText) - Number(previousText);
                document.getElementById("previous").innerText = previousText + " - " + inputText + " = " + sum;
                hasDoneOperation = true;
                break;
            case "x":
                previousText = previousText.substring(0,previousText.length -2);
                sum = Number(inputText) * Number(previousText);
                document.getElementById("previous").innerText = previousText + " x " + inputText + " = " + sum;
                hasDoneOperation = true;
                break;
            case "/":
                previousText = previousText.substring(0,previousText.length -2);
                sum = Number(previousText) / Number(inputText);
                document.getElementById("previous").innerText = previousText + " / " + inputText + " = " + sum;
                hasDoneOperation = true;
                break;
                
        }
    }
}

function Divide()
{
    let inputText = document.getElementById("input").innerText;
    let previousText = document.getElementById("previous").innerText;

    if (previousText.includes("="))
    {
        document.getElementById("previous").innerText = inputText + " /";
        return;
    }

    previousText = previousText.substring(0,previousText.length -2);
    document.getElementById("input").innerText = Number(previousText) / Number(inputText);
    document.getElementById("previous").innerText = inputText + " /";

    hasDoneOperation = true;
}

function Multiply()
{
    let inputText = document.getElementById("input").innerText;
    let previousText = document.getElementById("previous").innerText;

    if (previousText.includes("="))
    {
        document.getElementById("previous").innerText = inputText + " x";
        return;
    }
    
    previousText = previousText.substring(0,previousText.length -2);
    document.getElementById("input").innerText = Number(inputText) * Number(previousText);
    document.getElementById("previous").innerText = inputText + " x";

    hasDoneOperation = true;
}

function Subtract()
{
    let inputText = document.getElementById("input").innerText;
    let previousText = document.getElementById("previous").innerText;

    if (previousText.includes("="))
    {
        document.getElementById("previous").innerText = inputText + " -";
        return;
    }
    
    previousText = previousText.substring(0,previousText.length -2);
    document.getElementById("input").innerText = Number(inputText) - Number(previousText);
    document.getElementById("previous").innerText = inputText + " -";

    hasDoneOperation = true;
}
function Add()
{
    let inputText = document.getElementById("input").innerText;
    let previousText = document.getElementById("previous").innerText;

    if (previousText.includes("="))
    {
        document.getElementById("previous").innerText = inputText + " +";
        return;
    }

    previousText = previousText.substring(0,previousText.length -2);
    document.getElementById("input").innerText = Number(inputText) + Number(previousText);
    document.getElementById("previous").innerText = inputText + " +";

    hasDoneOperation = true;
}

function Coma()
{
    let inputText = document.getElementById("input").innerText;

    if(inputText.includes("."))
    {
        return;
    }
    else
    {
        inputText += ".";
    }

    document.getElementById("input").innerText = inputText;
}

function Del()
{
    let inputText = document.getElementById("input").innerText;

    if(inputText == "0")
    {
        return;
    }

    else if(inputText.length == 1)
    {
        document.getElementById("input").innerText = 0;
    }
    else 
    {
        document.getElementById("input").innerText = inputText.substring(0, inputText.length - 1);
    }
}

function C()
{
    document.getElementById("input").innerText = "0";
    document.getElementById("previous").innerText = "";
}

function Input0()
{
    let inputText = document.getElementById("input").innerText;
    if (inputText == "0" || inputText.length >= 11)
    {
        return;
    }
    else if(hasDoneOperation == true)
    {
        inputText = 0;
        hasDoneOperation = false;
    }
    else
    {
        inputText += 0;
    }
    document.getElementById("input").innerText = inputText;
}

function Input1()
{
    let inputText = document.getElementById("input").innerText;
    
    if (inputText.length >= 11)
    {
        return;
    }

    if(inputText == "0" || hasDoneOperation == true)
    {
        inputText = 1;
        hasDoneOperation = false;
    }
    else if(hasDoneOperation == true)
    {
        document.getElementById("input").innerText = 1;
        hasDoneOperation = false;
        return;
    }
    else{
        inputText += 1;
    }
    
    document.getElementById("input").innerText = inputText;
}

function Input2()
{
    let inputText = document.getElementById("input").innerText;
    
    if (inputText.length >= 11)
    {
        return;
    }

    if(inputText == "0" || hasDoneOperation == true)
    {
        inputText = 2;
        hasDoneOperation = false;
    }

    else{
        inputText += 2;
    }
    
    document.getElementById("input").innerText = inputText;
}

function Input3()
{
    let inputText = document.getElementById("input").innerText;
    
    if (inputText.length >= 11)
    {
        return;
    }
    
    if(inputText == "0" || hasDoneOperation == true)
    {
        inputText = 3;
        hasDoneOperation = false;
    }
    else{
        inputText += 3;
    }
    
    document.getElementById("input").innerText = inputText;
}

function Input4()
{
    let inputText = document.getElementById("input").innerText;
    
    if (inputText.length >= 11)
    {
        return;
    }
    
    if(inputText == "0" || hasDoneOperation == true)
    {
        inputText = 2;
        hasDoneOperation = false;
    }

    else{
        inputText += 4;
    }
    
    document.getElementById("input").innerText = inputText;
}

function Input5()
{
    let inputText = document.getElementById("input").innerText;
    
    if (inputText.length >= 11)
    {
        return;
    }
    
    if(inputText == "0" || hasDoneOperation == true)
    {
        inputText = 5;
        hasDoneOperation = false;
    }

    else{
        inputText += 5;
    }
    
    document.getElementById("input").innerText = inputText;
}

function Input6()
{
    let inputText = document.getElementById("input").innerText;
    
    if (inputText.length >= 11)
    {
        return;
    }
    
    if(inputText == "0" || hasDoneOperation == true)
    {
        inputText = 6;
        hasDoneOperation = false;
    }

    else{
        inputText += 6;
    }
    
    document.getElementById("input").innerText = inputText;
}

function Input7()
{
    let inputText = document.getElementById("input").innerText;
    
    if (inputText.length >= 11)
    {
        return;
    }
    
    if(inputText == "0" || hasDoneOperation == true)
    {
        inputText = 7;
        hasDoneOperation = false;
    }


    else{
        inputText += 7;
    }
    
    document.getElementById("input").innerText = inputText;
}

function Input8()
{
    let inputText = document.getElementById("input").innerText;
    
    if (inputText.length >= 11)
    {
        return;
    }
    
    if(inputText == "0" || hasDoneOperation == true)
    {
        inputText = 8;
        hasDoneOperation = false;
    }


    else{
        inputText += 8;
    }
    
    document.getElementById("input").innerText = inputText;
}

function Input9()
{
    let inputText = document.getElementById("input").innerText;
    
    if (inputText.length >= 11)
    {
        return;
    }
    
    if(inputText == "0" || hasDoneOperation == true)
    {
        inputText = 9;
        hasDoneOperation = false;
    }


    else{
        inputText += 9;
    }
    
    document.getElementById("input").innerText = inputText;
}
