function ass(n){
       f = document.getElementById("div1");
       if (n<1){
              f.innerHTML = "ricxvi ar aris sworad shetanili";
       }
       else {
              for(i = 1; i <= n; i++){
                     f.innerHTML += i + "</br>";
                     console.log(i);

              }
       }


}

ass(5);