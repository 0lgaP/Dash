import "./FormCard.css"

const DashCard = ({children, addClass}) => {
  return (
    <div className={`dash-card ${addClass}`}>{children}</div>
  )
}

export default DashCard