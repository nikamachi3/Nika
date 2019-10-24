function nm(m,n){
       p = document.getElementById("d2");
       if(m<n){
              for(i = m; i <= n; i++){
                     p.innerHTML += i + "</br>";
       
              }
       }  
       else {
              for(i = m; i >= n; i--){
                     p.innerHTML += i + "</br>";
       
              }
       }
          
}
nm(25, 20);
