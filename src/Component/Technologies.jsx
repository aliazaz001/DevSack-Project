import { useEffect, useState } from "react";
import TechnologyCard from "./TechnologyCard";
import YourStack from "./YourStack";
import "./Technologies.css";

function Technologies() {
  const [technologies, setTechnologies] = useState([]);
  const [stack, setStack] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadTechnologies = async () => {
      try {
        setIsLoading(true);

        const response = await fetch("/data.json");
        const data = await response.json();

        setTechnologies(data);
      } catch (error) {
        console.error("Failed to load technology data", error);
      } finally {
        setIsLoading(false);
      }
    };

    loadTechnologies();
  }, []);

  const handleAddToStack = (technology) => {
    const alreadyAdded = stack.some(
      (item) => item.id === technology.id
    );

    if (alreadyAdded) {
      return;
    }

    setStack((prev) => [...prev, technology]);
  };

  const handleRemove = (id) => {
    setStack((prev) =>
      prev.filter((item) => item.id !== id)
    );
  };

  const handleRemoveAll = () => {
    setStack([]);
  };

  return (
    <section className="technologies" id="technologies">

      <div className="technologies-heading">
        <h2>
          Explore the <span>Technologies</span>
        </h2>

        <p>
          Pick one technology per category to build your ideal stack.
        </p>
      </div>

      {isLoading ? (
        <p>Loading technologies...</p>
      ) : (
        <div className="technologies-content">

          <div className="technology-grid">
            {technologies.map((technology) => (
              <TechnologyCard
                key={technology.id}
                technology={technology}
                isAdded={stack.some(
                  (item) => item.id === technology.id
                )}
                onAddToStack={handleAddToStack}
              />
            ))}
          </div>

          <YourStack
            stack={stack}
            onRemove={handleRemove}
            onRemoveAll={handleRemoveAll}
          />

        </div>
      )}

    </section>
  );
}

export default Technologies;