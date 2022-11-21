

export default function Sujestoes() {
  const sujestoes = [
    {name:"bad.vibes.memes",image:"assets/badvibesmemes 1.svg", status:"Segue você"},
    {name:"chibirdart",image:"assets/chibirdart 1.svg", status:"Segue você"},
    {name:"razoesparaacreditar",image:"assets/razoesparaacreditar 1.svg", status:"Novo no Instagram"},
    {name:"adorable_animals",image:"assets/adorableanimals 1.svg", status:"Segue você"},
    {name:"smallcutecats",image:"assets/smallcutecats 1.svg", status:"Segue você"}
  ]
    return (
        <div>
        <div className="sb-02 espaçamento">
          <h2>Sugestões para você</h2>
          <p>Ver tudo</p>
        </div>
        {sujestoes.map((s)=>
        <div className="sb-03">
          <img alt="imagem" src={s.image} />
          <div>
            <p>{s.name}</p>
            <h2>{s.status}</h2>
          </div>
          <div><h3>Seguir</h3></div>
        </div>
         )}
        </div>
    )
}