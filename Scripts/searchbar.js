document.getElementById('search-icon').addEventListener('click', toggleSearchOn);

var isItOn = "no"

function toggleSearchOn() { 
    if (isItOn == "no") {
        document.getElementById('slide').style.bottom = "3px";
        document.getElementById('slide').style.opacity = "1";
        document.getElementById('search-container').style.border = "1px solid rgba(177, 175, 175, 1)";
        isItOn = "yes";
    } else if (isItOn == "yes") {
        document.getElementById('slide').style.bottom = "20px";
        document.getElementById('slide').style.opacity = "0";
        document.getElementById('search-container').style.border = "1px solid rgba(177, 175, 175, 0)";
        isItOn = "no";
    }
}



