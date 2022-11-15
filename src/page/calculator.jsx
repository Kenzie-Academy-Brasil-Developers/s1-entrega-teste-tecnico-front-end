import Body from "../components/body"
import Card from "../components/card"
import Inputs from "../components/Inputs"
import QuantityCard from "../components/quantityCard"


const Calculator = () =>{

    return(
        <Body>
           <Card>
            <Inputs />
            <QuantityCard />
           </Card>
        </Body>
    )
}

export default Calculator