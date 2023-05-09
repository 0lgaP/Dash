
const ProjectFilter = ({onClick, filtersList, currentFilter}) => {

  return (
    <div className="project-filter">
      <nav>
        {filtersList.map((f) => (
          <button key={f} 
          className={currentFilter === f ? 'active': ''}
          onClick={() => onClick(f)}>
            {f}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default ProjectFilter;
