import { useCollection } from "../../hooks/useCollection";
import { useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

// styles
import "./Dashboard.css";
// components
import List from "../../components/list/List";
import ProjectFilter from "./ProjectFilter";

// hardcoded vals
const filtersList = [
  "all",
  "mine",
  "development",
  "design",
  "marketing",
  "sales",
];

const Dashboard = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const { doc, error } = useCollection("projects");
  const { user } = useAuthContext();

  const handleFilter = (newFilter) => {
    setCurrentFilter(newFilter);
  };

  const filteredList =
    doc &&
    doc.filter((each) => {
      switch (currentFilter) {
        case "all":
          return true;
        case "mine": {
          let assignedToMe = false;
          each.assignedUsersList.forEach((u) => {
            if (user.uid === u.id) {
              assignedToMe = true;
            }
          });
          return assignedToMe;
        }
        default: {
          return each.category === currentFilter;
        }
      }
    });

  return (
    <div>
      <h2 className="page-title">Dashboard</h2>
      {error && <p className="error">{error}</p>}
      {doc && (
        <ProjectFilter
          onClick={handleFilter}
          filtersList={filtersList}
          currentFilter={currentFilter}
        />
      )}
      {filteredList && <List projects={filteredList} />}
    </div>
  );
};

export default Dashboard;
