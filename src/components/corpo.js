
import Sidebar from "./sidebar.js"
import Posts from "./posts.js"
import Stories from "./stories.js"

export default function Corpo() {
    return (
        <div className="conteudo">
        <div className="esquerda">
          <Stories/>
          <Posts/>
        </div>
        <div className="direita">
          <Sidebar/>
        </div>
        </div>
    )
}