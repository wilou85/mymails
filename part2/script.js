

var messagesCount =  document.getElementsByClassName('text').length;

console.log(messagesCount);

document.getElementById('count').textContent = messagesCount

/*document.getElementById('count').textContent.replace("0", messagesCount);
Chaine de caractere dans HTML*/


for(i=0; i<document.getElementsByClassName('image2').length;i++){
    document.getElementsByClassName('image2')[i].addEventListener("click",function(){
        this.parentNode.remove();
        var messagesCount =  document.getElementsByClassName('text').length;
        document.getElementById('count').textContent = messagesCount
    }
    );
    
    
}

document.getElementById('bouton').addEventListener("click",function(){
  console.log(document.getElementById('barre').value);
  
  var val = document.getElementById('barre').value;
  var Ajout = document.createElement("h1")                
  document.body.appendChild(Ajout);   

}
)


                                








