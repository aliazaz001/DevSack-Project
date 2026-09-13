function YourStackItem({ technology, onRemove }) {
  return (
    <div className="stack-item">

      <div className="stack-item-info">
        <img
          src={technology.icon}
          alt={technology.name}
        />

        <div>
          <h4>{technology.name}</h4>
          <p>{technology.category}</p>
        </div>
      </div>

      <button
        onClick={() => onRemove(technology.id)}
        className="remove-item-button"
      >
        ✕
      </button>

    </div>
  );
}

export default YourStackItem;