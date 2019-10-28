function num(){
    f = document.getElementById("d1");
    console.log(Math.random());
    f.innerHTML += Math.random().toFixed(3);
}

num();