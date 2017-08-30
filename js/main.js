var imagenes=[
"images/cat.jpg",
"images/puppy.jpg",
"images/kuoka1.jpg",
"images/cat.jpg",
"images/puppy.jpg",
"images/kuoka1.jpg"];

var container=document.getElementsByClassName('game')[0];
container.addEventListener("click",memory);
var contClick= 0;
var imgBefore;
var imgID;

function memory(evento){
  var img = evento.target.children[0];
  var idImg = img.id;
  if(img.nodeName == "IMG"){
    img.className = "mostrar";
    contClick++;
    console.log(contClick);
    if(contClick == 1){
      imgBefore= img.src;
      imgID= img.id;
      console.log(contClick);
    }
    else if (contClick == 2) {
      if(imgBefore == img.src){
        console.log("iguales");
      }
      else {
        setTimeout(function(){
          $( "#"+ imgID).removeAttr( "class" ).attr('class', 'ocultar');
          $( "#"+ idImg).removeAttr( "class" ).attr('class', 'ocultar');
        }, 600)
      }
      contClick=0;
    }
  }
}
