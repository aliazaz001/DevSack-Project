function TechnologyCard({ technology, isAdded, onAddToStack }) {
  const {
    name,
    category,
    description,
    icon,
    rating,
    difficulty,
    badge,
  } = technology;

  return (
    <div className="technology-card">

      <div className="technology-card-top">
        <img
          src={icon}
          alt={`${name} icon`}
          className="technology-icon"
        />

        <span className="technology-badge">
          {badge}
        </span>
      </div>

      <h3>{name}</h3>

      <p className="technology-description">
        {description}
      </p>

      <div className="technology-info">
        <span>{category}</span>
        <span>{difficulty}</span>
        <span>⭐ {rating}</span>
      </div>

      <button
        className="add-stack-button"
        onClick={() => onAddToStack(technology)}
        disabled={isAdded}
      >
        {isAdded ? "✓  Added to Stack" : "Add to Stack"}
      </button>

    </div>
  );
}

export default TechnologyCard;