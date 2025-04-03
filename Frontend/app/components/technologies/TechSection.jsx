import TechnologyGroup from "./TechnologyGroup";

async function TechSection() {
  // Fetch data from API
  const fetchTechnologies = async () => {
    try {
      const res = await fetch(`${process.env.BACKEND_URL}/api/technologies?populate=*`, {
        cache: "no-store", // Ensures fresh data
      });
      if (!res.ok) throw new Error("Failed to fetch technologies");

      const data = await res.json();

      // Extract categories and their technologies
      const categoriesMap = new Map();

      data.data.forEach((tech) => {
        const category = tech.Category;
        const technologies = tech.Technologies;

        if (category && Array.isArray(technologies)) {
          if (!categoriesMap.has(category)) {
            categoriesMap.set(category, []);
          }

          technologies.forEach((techItem) => {
            if (techItem.url) {
              categoriesMap.get(category).push(`${process.env.BACKEND_URL}${techItem.url}`);
            }
          });
        }
      });

      // Convert Map to an array for rendering
      return Array.from(categoriesMap, ([category, technologies]) => ({
        category,
        technologies,
      }));
    } catch (error) {
      console.error("Error fetching technologies:", error);
      return [];
    }
  };

  const techCategories = await fetchTechnologies();

  return (
    <section id="technologies" className="py-20 px-4 bg-[#111827]">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-2xl md:text-3xl font-extrabold text-white">
          My <span className="text-primary">Tech Stack</span>
        </h1>
        <p className="text-lg text-gray-400 mt-2">
          Technologies I work with on a daily basis.
        </p>

        {/* Tech Grid */}
        <div className="mt-10 flex flex-col gap-6">
          {techCategories.length > 0 ? (
            techCategories.map((group, index) => (
              <TechnologyGroup key={index} category={group.category} technologies={group.technologies} />
            ))
          ) : (
            <p className="text-gray-400 col-span-full">No technologies found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default TechSection;
