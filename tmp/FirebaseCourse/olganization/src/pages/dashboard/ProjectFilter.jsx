import { useState } from "react";
const filtersList = ["all", "mine", "development", "design", "marketing", "sales"];

const ProjectFilter = () => {
  const [currentFilter, setCurrentFilter] = useState("all");
  const handleClick = (newFilter) => {
    console.log(newFilter);
    setCurrentFilter(newFilter);
  };
  return (
    <div className="project-filter">
      <nav>
        {filtersList.map((f) => (
          <button key={f} 
          className={currentFilter === f ? 'active': ''}
          onClick={() => handleClick(f)}>
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProjectFilter;
