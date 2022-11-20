import Usuario from "./usuario.js"
import Sujestoes from "./sujestoes.js"

export default function Sidebar() {
    return (
        <div className="sidebar">
        <Usuario/>
        <Sujestoes/>
        <div className="copy">
            <p>Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade •
                Termos • Localizações • Contas mais relevantes • Hashtags • 
                Idioma</p>
                <p>© 2021 INSTAGRAM DO FACEBOOK</p>
          </div>
      </div>
    )
}