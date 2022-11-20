import React from 'react'

export default function Usuario() {
    const[nameusu, setnameusu] = React.useState("Catana")
    const[foto,setfoto]=React.useState("assets/catanacomics 1.svg")
    function Trocarfoto(){
        setfoto(prompt("Coloque a Url da sua Foto"))
    }
    function Trocarnome(){
        setnameusu(prompt("Escreva seu Nome"))
    }

    return (
        <div className="sb-01">
          <img onClick={Trocarfoto} alt="imagem" src={foto} />
          <div>
            <p>catanacomics</p>
            <div className='nomeusuario'>
            <h2>{nameusu}</h2>
            <ion-icon onClick={Trocarnome} name="pencil-outline"></ion-icon>
            </div>
            
          </div>
        </div> 
    )
}