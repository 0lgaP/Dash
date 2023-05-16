import "./Loading.css"
import Logo from "../../assets/Logo.svg"

export const Loading = () => {

  return (
    <div className="modal-background">
    <img className="modal-img" src={Logo} alt="Loading"/>
    </div>
  )
}
