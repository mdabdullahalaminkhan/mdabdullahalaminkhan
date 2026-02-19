export default function About() {
  const skills = [
    { category: 'Languages', items: ['JavaScript', 'TypeScript', 'Python', 'SQL'] },
    { category: 'Frontend', items: ['React', 'Next.js', 'Tailwind CSS', 'Redux'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'Django', 'MongoDB'] },
    { category: 'Tools', items: ['Git', 'Docker', 'GitHub Actions', 'Postman'] },
  ]

  return (
    <section id="about" className="max-w-5xl mx-auto px-6 py-20">
      <div className="space-y-16">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">About</h2>
          <p className="text-secondary text-lg">A bit about me and my skills</p>
        </div>

        <div className="space-y-12">
          <div className="prose prose-invert max-w-none space-y-4">
            <p className="text-secondary leading-relaxed text-lg">
              I'm a passionate software developer with expertise in full-stack web development. I love crafting clean, maintainable code and building products that users enjoy. My journey in tech is driven by curiosity and a commitment to continuous learning.
            </p>
            <p className="text-secondary leading-relaxed text-lg">
              I'm particularly interested in contributing to open-source projects, improving documentation, and strengthening the quality of existing codebases. Whether it's fixing bugs, writing tests, or refactoring code, I find fulfillment in making meaningful contributions.
            </p>
            <p className="text-secondary leading-relaxed text-lg">
              When I'm not coding, you can find me exploring new technologies, reading about best practices, or collaborating with the developer community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="space-y-3">
                <h3 className="font-bold text-primary">{skillGroup.category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill) => (
                    <span
                      key={skill}
                      className="text-sm px-3 py-1 bg-secondary/10 text-secondary rounded-full"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
