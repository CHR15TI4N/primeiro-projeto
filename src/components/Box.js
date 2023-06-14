import "./Box.css";

const Box = ({children, corFonte}) => {
    return (
        <div className="boxContainer" style={{color: corFonte}}>
            {children}
        </div>
    )
}

export default Box;