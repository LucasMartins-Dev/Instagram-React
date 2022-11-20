import React from 'react'




export default function Post (props){
  const [saved, setSave] = React.useState(props.save)
    function Save(){
        
        setSave("bookmark")
}

  let [numlikes, setnumLikes] = React.useState(props.likenum)
  const [like, setlike] = React.useState(<ion-icon name="heart-outline" onClick={inserirCurtida}></ion-icon>)
  function inserirCurtida(){
      
      setlike(<ion-icon color="danger"  name="heart" onClick={tirarCurtida}></ion-icon>)
      setnumLikes(numlikes+1);
}
  function tirarCurtida(){
      setlike(<ion-icon name="heart-outline" onClick={inserirCurtida}></ion-icon>)
      setnumLikes(numlikes);
  }

 
    return(
      
        <div className="post-01">
          <div className="post-inicio">
            <div className="post-titulo">
              <img alt= "imagem" src={props.icon} />
              <p>{props.name}</p>
            </div>
            <div>
              <img alt= "imagem" className="pontos" src="assets/ellipsis-horizontal-outline.svg"/>
            </div>
         
        </div>
         <div className="post-foto">
              <img onClick={inserirCurtida} alt= "imagem" src={props.image}/>
          </div>
          <div>
              <div className="post-fim">
                  <div className="post-bot">
                    {like}
                    <img alt= "imagem" src="assets/chatbubble-outline.svg" />
                    <img alt= "imagem" src="assets/paper-plane-outline.svg" />
                    
                  </div>
                  <div>
                  <ion-icon  className="pontos2" name={saved} onClick={Save}></ion-icon>
                  </div>
                  
              </div>
              <div className="post-ultimo">
                  <img alt= "imagem" src="assets/respondeai 1.svg" />
                  <p>Curtido por <b>respondeai</b> e <b>outras {numlikes} pessoas</b></p>
                </div>
          </div>
          <div>

          </div>
        </div>
    )
}