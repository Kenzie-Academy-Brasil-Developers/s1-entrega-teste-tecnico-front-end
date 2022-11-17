import { useState } from "react"
import Body from "../components/body"
import Card from "../components/card"
import Inputs from "../components/Inputs"
import QuantityCard from "../components/quantityCard"
import {motion} from "framer-motion"

const Calculate = () => {

    const [resultData, setResultData] = useState("")

return(
    <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:2}}   
    >
       <Body>
        <Card>
            <Inputs setResultData={setResultData} />
            <QuantityCard resultData={resultData} />
        </Card>
        </Body> 
    </motion.div>
    
)

}

export default Calculate