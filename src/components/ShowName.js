import { useState } from "react"
import Box from "./Box"

const ShowName = () => {
    const [name, setName] = useState()

    const handleShowName = () => {
        if (name) {
            setName(undefined)
        }else{
            setName("Christian")
        }
    }

    return (
        <Box>
            <button className="buttonEdit" onClick={handleShowName}>
                Mostrar nome
            </button>
            <h3>Seu nome: {name}</h3>         
        </Box>
    )
}

export default ShowName;