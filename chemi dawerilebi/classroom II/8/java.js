function num(a,b){
    f = document.getElementById("d1");
    f.innerHTML += Math.floor(Math.random() * b) + a;
}

num(1,8);