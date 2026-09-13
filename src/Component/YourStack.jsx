import YourStackItem from "./YourStackItem";

function YourStack({ stack, onRemove, onRemoveAll }) {
  const hasItems = stack.length > 0;

  return (
    <aside className="your-stack">

      <h3>Your Stack</h3>

      <p className="stack-count">
        {hasItems
          ? `${stack.length} Technology Selected`
          : "No technologies selected yet."}
      </p>

      {hasItems ? (
        <div className="stack-list">

          {stack.map((technology) => (
            <YourStackItem
              key={technology.id}
              technology={technology}
              onRemove={onRemove}
            />
          ))}

          <button
            className="remove-all-button"
            onClick={onRemoveAll}
          >
            Remove All
          </button>

        </div>
      ) : (
        <div className="empty-stack">
          Your stack is empty.
        </div>
      )}

    </aside>
  );
}

export default YourStack;