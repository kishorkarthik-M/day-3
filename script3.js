var request = new XMLHttpRequest();
request.open("Get", "https://restcountries.com/v2/all"); 
request.send();
request.onload = function() {
    var result = JSON.parse(request.response)
         for (var i=0; i<result.length; i++){
            console.log(i,result[i].name)
            console.log(i,result[i].region)
            console.log(i,result[i].subregion)
            console.log(i,result[i].population)

         }
   };