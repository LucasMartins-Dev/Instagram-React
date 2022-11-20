
import Corpo from "./corpo.js"
import Topo from "./topo.js"
import Bottom from "./bottom.js"

export default function App() {
    return (
      <div className="nav">
        <Topo/>
        <div className="borda-menu"></div>
        <Corpo/>
        <div className="borda-menu1"></div>
        <Bottom/>
      </div>
    )
}