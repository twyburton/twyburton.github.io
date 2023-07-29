

function display(){
    const start = new Date("2023-07-06");
    const now = new Date();

    let differenceS = (now - start)/1000;

    let differenceDays = differenceS/ (60*60*24);

    document.getElementById("time").innerText = `${Math.floor(differenceDays).toFixed(0)} Days since 6th July`;
}

display();