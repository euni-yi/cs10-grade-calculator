// CS-10 Grade Calculator

// Button Event Listener

document.getElementById("btn").addEventListener("click", btnClicked)

function btnClicked(){

// Input
    let first= +document.getElementById("1").value;
    let second= +document.getElementById("2").value;
    let third= +document.getElementById("3").value;
    let fourth= +document.getElementById("4").value;
    let fifth= +document.getElementById("5").value;

// Process
    let total = (first + second + third + fourth + fifth) / 5 ;

// Output
    document.getElementById("finalgrade").innerHTML = total

}

