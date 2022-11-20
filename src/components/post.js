import React from 'react'




export default function Post (props){
  const [saved, setSave] = React.useState(<ion-icon data-test="save-post" className="pontos2" name="bookmark-outline" onClick={Save}></ion-icon>);
    function Save(){
        
        setSave(<ion-icon data-test="save-post" className="pontos2" name="bookmark" onClick={Notsave}></ion-icon>);
}
  function Notsave(){
    setSave(<ion-icon data-test="save-post" className="pontos2" name="bookmark-outline" onClick={Save}></ion-icon>);
  }

  let [numlikes, setnumLikes] = React.useState(props.likenum)
  const [like, setlike] = React.useState(<ion-icon data-test="like-post" name="heart-outline" onClick={inserirCurtida}></ion-icon>)
  function inserirCurtida(){
      
      setlike(<ion-icon data-test="like-post"color="danger"  name="heart" onClick={tirarCurtida}></ion-icon>)
      setnumLikes(numlikes+1);
}
  function tirarCurtida(){
      setlike(<ion-icon data-test="like-post"name="heart-outline" onClick={inserirCurtida}></ion-icon>)
      setnumLikes(numlikes);
  }

 
    return(
      
        <div data-test="post" className="post-01">
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
              <img data-test="post-image" onClick={inserirCurtida} alt= "imagem" src={props.image}/>
          </div>
          <div>
              <div className="post-fim">
                  <div className="post-bot">
                    {like}
                    <img alt= "imagem" src="assets/chatbubble-outline.svg" />
                    <img alt= "imagem" src="assets/paper-plane-outline.svg" />
                    
                  </div>
                  <div>
                  {saved}
                  </div>
                  
              </div>
              <div className="post-ultimo">
                  <img alt= "imagem" src="assets/respondeai 1.svg" />
                  <p data-test="likes-number">Curtido por <b>respondeai</b> e <b>outras {numlikes} pessoas</b></p>
                </div>
          </div>
          <div>

          </div>
        </div>
    )
}