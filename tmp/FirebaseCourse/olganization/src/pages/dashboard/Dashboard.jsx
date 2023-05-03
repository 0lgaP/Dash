import { useCollection } from "../../hooks/useCollection";
// styles
import "./Dashboard.css";
// components
import List from "../../components/list/List";

const Dashboard = () => {
  const { doc, error } = useCollection("projects");
  return (
    <div>
      <h2 className="page-title">Dashboard</h2>

      {error && <p className="error">{error}</p>}
      {doc && <List projects={doc} />}
    </div>
  );
};

export default Dashboard;
