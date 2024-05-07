import {Link} from "react-router-dom"
import whatsapp from "../images/whatsapp.png"

const WhatsApp = () => {
  return (
    <>
    <div className="z-10 right-10 bottom-10 fixed cursor-pointer bg-white rounded-full">
        <Link to="https://web.whatsapp.com/send?phone=5543998068708"><img width="60px" src={whatsapp}/></Link>
    </div>
    </>
  )
}

export default WhatsApp