import "../components/Inputs/style.css"
import Cat from "../animations/cat.gif"
import { useHistory } from 'react-router-dom';
import {motion} from "framer-motion"

const ErrorPage = () => {
const history = useHistory()

    function back(){
        history.push("/")
    }

    return(
        <motion.div
    initial={{opacity:0}}
    animate={{opacity:1}}
    exit={{opacity:0}}
    transition={{duration:2}}  
        >
        <div className="containerdiv-animation">
        <img src={Cat} alt="gatinho animação"></img>
        <button className="button-back" onClick={back}>Voltar</button>
        </div>
        </motion.div>
    )

}

export default ErrorPage