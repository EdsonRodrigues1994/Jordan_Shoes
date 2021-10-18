

let novaImagem = document.querySelectorAll(".imagens img");

novaImagem.addEventListener("click", novoLike);



function novoLike(){
  event.target.classList.remove("/img/deulike.png")
  event.target.classList.remove("/img/coracao.png")
  novaImagem.forEach((item)=>{

  item.addEventListener("click",(event)=>{
    if(event.target.classList.contains("/img/deulike.png")){
      event.target.classList.remove("/img/deulike.png")
      event.target.classList.remove("/img/coracao.png")
      event.target.classList.toggle(event.target.src = "/img/coracao.png");

    }else{
      event.target.classList.toggle(event.target.src= "/img/deulike.png")
      
    }
  })
  })
};



