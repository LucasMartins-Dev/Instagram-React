
export default function Story(){
  const itens = [
    {name:"9gag" , image:"assets/9gag 1.svg"},
    {name:"meowed" , image:"assets/meowed 1.svg"},
    {name:"barked" , image:"assets/barked 1.svg"},
    {name:"nathanwpyle..." , image:"assets/nathanwpylestrangeplanet 1.svg"},
    {name:"wawawiwac..." , image:"assets/wawawiwacomicsa 1.svg"},
    {name:"respondeai" , image:"assets/respondeai 1.svg"},
    {name:"filomoderna" , image:"assets/filomoderna 1.svg"},
    {name:"memeriagourmet" , image:"assets/memeriagourmet 1.svg"}
  ]

    return(
      <div className="stories">
      <div className="botao-story"><img alt="pao" src="assets/Vector.svg"/></div>
      {itens.map((item)=>
        <div className="story">
        <img alt="pao" className="story-01" src={item.image} />
        <img alt="pao" className="story-10" src="assets/stories_background.jpg" />
        <p>{item.name}</p>
      </div> )}
      <div className="botao-story"> <img alt="pao" src="assets/botao-story.svg"/></div>
      </div>   
    )
}