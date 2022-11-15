import "./style.css";

const QuantityCard = () =>{
    return(
        
            <div className="quantity-container">
                <div className="container-text">
            <h4 className="title-quantity">Você receberá:</h4>
            <div className="line"></div>
            <p className="quantity-p">Amanhã: <b>R$ 0,00</b></p>
            <p className="quantity-p">Em 15 dias: <b>R$ 0,00</b></p>
            <p className="quantity-p">Em 30 dias: <b>R$ 0,00</b></p>
            <p className="quantity-p">Em 90 dias: <b>R$ 0,00</b></p>
            </div>
            </div>
        
    )
}

export default QuantityCard