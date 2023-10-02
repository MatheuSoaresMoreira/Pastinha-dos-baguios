import "./index.css"
import { useState } from "react"

import { List, X } from "@phosphor-icons/react"

function Header() {
    const [abrirFechar, setAbrirFechar] = useState (false)

    function handleAbrirFecharMenu() {
        if(abrirFechar){
            setAbrirFechar(false)
            return
        }

        setAbrirFechar(true)
    }

  return (
    <header>
        <div className="menu-mobile">
            <div className="botao-menu">
                <button onClick={handleAbrirFecharMenu}>{abrirFechar==true ? <X size={25} /> : <List size={25} />}</button>
            </div>

            <div className={`menu ${abrirFechar==true ? "" : "close"}`}>
                <nav>
                    <a href="">Configurações</a>
                    <a href="">Login</a>
                    <a href="">Sobre</a>
                </nav>
            </div>
        </div>
        
        <div className="menu-desktop">
            <h1>Acessa ai</h1>
        </div>
        <nav>
                    <a href="">Configurações</a>
                    <a href="">Login</a>
                    <a href="">Sobre</a>
        </nav>
    </header>
  )
}

export default Header