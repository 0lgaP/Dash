import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
// hooks
import { useCollection } from "../../hooks/useCollection";
import { timestamp } from "../../firebase/config";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useFirestore } from "../../hooks/useFirestore";
// styles
import "./Create.css";
// components
import FormCard from "../../components/Cards/FormCard";
import Input from "../../components/input/Input";
import TextBox from "../../components/input/TextBox";
import SelectInput from "../../components/input/SelectInput";
import DashCard from "../../components/Cards/DashCard";

const Create = () => {
  // hooks
  const { addDocument, response } = useFirestore("projects");
  const [users, setUsers] = useState([]);
  const { doc } = useCollection("users");
  const { user } = useAuthContext();
  const navigate = useNavigate();

  // form field vals
  const [name, setName] = useState("");
  const [details, setDetails] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [category, setCategory] = useState({});
  const [assignedUsers, setAssignedUsers] = useState([]);
  const [formError, setFormError] = useState(null);

  const handleSumbit = async (e) => {
    e.preventDefault();
    setFormError(null);
    // checks
    // category
    if (!category) {
      setFormError("Category is required");
      return;
    }
    // assigned user
    if (assignedUsers.length < 1) {
      setFormError("Please assign project to at least one user");
      return;
    }
    // creator/user information
    const createdBy = {
      displayName: user.displayName,
      photoURL: user.photoURL,
      id: user.uid,
    };
    // assigned users list
    const assignedUsersList =
      assignedUsers &&
      assignedUsers.map((u) => {
        return {
          displayName: u.value.displayName,
          photoUrl: u.value.photoURL,
          id: u.value.id,
        };
      });

    // document for firestore
    const project = {
      name,
      details,
      category: category.value,
      dueDate: timestamp.fromDate(new Date(dueDate)),
      comments: [],
      createdBy,
      assignedUsersList,
    };

    // async submition
    await addDocument(project);
    if (!response.error) {
      navigate("/");
    }
  };

  //my useEffect
  useEffect(() => {
    if (users.length === 0) {
      doc &&
        doc.map((user) => {
          setUsers((prev) => [
            ...prev,
            { label: user.displayName, value: user },
          ]);
        });
    }
    [doc];
  });

  return (
    <DashCard>
    <FormCard
      onSubmit={handleSumbit}
      title="Create a new project"
      buttonLabel="Add Project"
    >
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
      <Input
        onChange={(e) => setDueDate(e.target.value)}
        value={dueDate}
        type="date"
        inputLabel="Due Date"
      />

      <SelectInput onChange={(option) => setCategory(option)} />
      <SelectInput
        label={"Assign to"}
        onChange={(option) => setAssignedUsers(option)}
        options={users}
        isMulti={true}
      />
      {formError && <div className="error">{formError}</div>}
    </FormCard>
    </DashCard>
  );
};

export default Create;
