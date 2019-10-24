function st(a,b){
       console.log(a);
       console.log(b);
       
       fdf = document.getElementById("d1");
       r = "<table>";
       
       for(j = 1; j <= a; j++){
              r += "<tr>";
              
                     for(i = 1; i <= b; i++){
                            r += "<td>";
                            r += "</td>";

                     }   

              r += "</tr>";
       }
       
       r += "</table>";
       // console.log(r);
       fdf.innerHTML = r;
       
}
st(30,20);