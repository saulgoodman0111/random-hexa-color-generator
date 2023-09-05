const bdy = document.body;
const btn = document.getElementById("btn");
const text = document.getElementById("display-code");

function changeColor()
{
    const randomNumber = Math.floor(Math.random()*16777215);
    // multiplication by 1677215 to get hexa number

    const numberToHexCode = "#"+randomNumber.toString(16);
    // 16 inside brackets done to change number into hexa code
    
    bdy.style.backgroundColor = numberToHexCode;
    text.innerText = numberToHexCode;
    
    navigator.clipboard.writeText(numberToHexCode);
    // to copy color code on clipboard which can be pasted anywhere
}



//event call done while click
btn.addEventListener("click", changeColor);

// initial call which puts color on background when page refresh
changeColor();