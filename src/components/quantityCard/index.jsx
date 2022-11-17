import "./style.css";

const QuantityCard = ({resultData}) =>{
   
    return(
        
            <div className="quantity-container">
                <div className="container-text">
            <h4 className="title-quantity">Você receberá:</h4>
            <div className="line"></div>
            {resultData === "" ? <><p className="quantity-p">Amanhã: <b>R$ 00,00</b></p>
            <p className="quantity-p">Em 15 dias: <b>R$ 00,00</b></p>
            <p className="quantity-p">Em 30 dias: <b>R$ 00,00</b></p>
            <p className="quantity-p">Em 90 dias: <b>R$ 00,00</b></p></> : 
            <><p className="quantity-p">Amanhã: <b>R$ {resultData["1"]}</b></p>
            <p className="quantity-p">Em 15 dias: <b>R$ {resultData["15"]}</b></p>
            <p className="quantity-p">Em 30 dias: <b>R$ {resultData["30"]}</b></p>
            <p className="quantity-p">Em 90 dias: <b>R$ {resultData["90"]}</b></p></>}
            
            </div>
            </div>
        
    )
}

export default QuantityCard