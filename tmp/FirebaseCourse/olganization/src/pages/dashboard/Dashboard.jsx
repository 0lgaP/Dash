import { useCollection } from "../../hooks/useCollection";
import { useState } from "react";


// styles
import "./Dashboard.css";
// components
import List from "../../components/list/List";
import ProjectFilter from "./ProjectFilter";

// hardcoded vals
const filtersList = ["all", "mine", "development", "design", "marketing", "sales"];


const Dashboard = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const { doc, error } = useCollection("projects");
  console.log("dash",doc)

  const handleFilter = (newFilter) => {
    console.log(newFilter);
    setCurrentFilter(newFilter);
  };

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>

      {error && <p className="error">{error}</p>}
      {doc && <ProjectFilter onClick={handleFilter} filtersList={filtersList} currentFilter={currentFilter}/>}
      {doc && <List projects={doc} />}
    </div>
  );
};

export default Dashboard;
