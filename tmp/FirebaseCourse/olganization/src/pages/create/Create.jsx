import { useState } from "react"
// styles
import "./Create.css"
// components
import FormCard from "../../components/Cards/FormCard"
import Input from "../../components/input/Input"
import TextBox from "../../components/input/TextBox"

const Create = () => {
const [name, setName] = useState("")
const [details, setDetails] = useState("")
const [dueDate, setDueDate] = useState("")
const [category, setCategory] = useState("")
const [assignedUsers, setAssignedUsers] = useState([])

  const handleSumbit = (e) => {
    e.preventDefault()
    console.log("log")
  }
  return (
    <FormCard onSubmit={handleSumbit} title="Create a new project">
<Input
 onChange={(e) => setName(e.target.value)}
 value={name}
 type="text"
 inputLabel="Project name"
/>
<TextBox 
onChange={(e) => setDetails(e.target.value)}
value={details}
type="text"
inputLabel="Project Details"
/>

    </FormCard>
  )
}

export default Create
