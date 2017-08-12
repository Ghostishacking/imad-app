
var button = document.getElementById("counter");
button.onclick = function(){
    var request = new XMLHttpRequest();
    
    request.onreadystatechange = function(){
        if (request.readyState ===XMLHttpRequest.DONE){
            if (request.status === 200) {
                var span = document.getElementById('count');
                span.innerHtml = counter.toString();
            }
        }
    };
   request.open("GET",'http://coco98.imad.hasura-app.to/counter',true) 
   request.send(null)
};
    
    
    
    
