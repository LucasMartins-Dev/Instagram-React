import React from 'react'

export default function Usuario() {
    const[nameusu, setnameusu] = React.useState("Catana")
    const[foto,setfoto]=React.useState("assets/catanacomics 1.svg")
    function Trocarfoto(){
       let aux = prompt("Coloque a Url da sua Foto");
       if (aux === ""){
        setfoto(foto);
       }else{
        setfoto(aux);
       }
        
    }
    function Trocarnome(){
        let aux = prompt("Escreva seu Nome");
        if (aux === ""){
            setnameusu(nameusu);
        }else{
            setnameusu(aux);
        }
       
    }

    return (
        <div data-test="user" className="sb-01">
          <img data-test="profile-image" onClick={Trocarfoto} alt="imagem" src={foto} />
          <div>
            <p>catanacomics</p>
            <div className='nomeusuario'>
            <h2 data-test="name">{nameusu}</h2>
            <ion-icon data-test="edit-name" onClick={Trocarnome} name="pencil-outline"></ion-icon>
            </div>
            
          </div>
        </div> 
    )
}