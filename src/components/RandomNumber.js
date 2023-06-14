import { useState } from "react";
import Box from "./Box";
import './Box.css';

const RandomNumber = () => {
    const [RandomNumber, setRandomNumber] = useState()

    const generateRandomNumber = () => {
        const generateNumber = Math.floor(Math.random() * 100);
        setRandomNumber(generateNumber)
    }

    return (
        <Box corFonte={"#fff"}>
            <button className="buttonEdit" onClick={generateRandomNumber}>
                Sortear número aleatório
            </button>
            <h3>O número aleatório é: {RandomNumber}</h3>
        </Box>
    );
}

export default RandomNumber;