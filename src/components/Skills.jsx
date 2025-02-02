import { SKILLS } from "../constants";

function Skills() {
  return (
    <section className="sm:p-12 lg:p-24" id="skills">
      <div className="px-4">
        <h2 className="mt-8 mb-6 text-center text-3xl font-medium lg:text-4xl">
          Skills
        </h2>
        <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
          {SKILLS.map((skill) => (
            <div
              key={skill.id || skill.name}
              className="skill-item flex flex-col items-center text-center"
            >
              <div className="mb-4">{skill.icon}</div>
              <h3 className="mb-2 text-lg font-medium lg:text-xl">
                {skill.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Skills;
