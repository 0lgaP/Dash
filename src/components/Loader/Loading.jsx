import "./Loading.css"
import Logo from "../../assets/dash.png"

export const Loading = () => {

  return (
    <div className="modal-background">
    <img className="modal-img" src={Logo} alt="Loading"/>
    </div>
  )
}
