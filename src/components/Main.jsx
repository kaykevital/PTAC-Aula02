import { useState } from "react"

export default function Main () {
    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");
    
    return(
        <main>
            <form>
                <label><input type="text" name="" id="" onChange={(event) => setNome(event.target.value)}/></label>
                {nome}
                <label><input type="tel" name="" id="" onChange={(event) => setTelefone(event.target.value)}/></label>
                {telefone}
                <button>Enviar</button>
            </form>
        </main>
    )
}