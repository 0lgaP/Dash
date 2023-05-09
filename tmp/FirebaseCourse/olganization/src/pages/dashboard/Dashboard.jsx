import { useCollection } from "../../hooks/useCollection";
// styles
import "./Dashboard.css";
// components
import List from "../../components/list/List";
import ProjectFilter from "./ProjectFilter";

const Dashboard = () => {
  const { doc, error } = useCollection("projects");
  console.log("dash",doc)
  return (
    <div>
      <h2 className="page-title">Dashboard</h2>

      {error && <p className="error">{error}</p>}
      {doc && <ProjectFilter/>}
      {doc && <List projects={doc} />}
    </div>
  );
};

export default Dashboard;
