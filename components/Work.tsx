import { ExternalLink } from 'lucide-react'

export default function Work() {
  const projects = [
    {
      title: 'Project One',
      description: 'A full-stack web application built with Next.js and React, featuring real-time data synchronization and beautiful UI.',
      tags: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
      link: '#',
    },
    {
      title: 'Project Two',
      description: 'Open-source contribution improving documentation and code quality. Enhanced clarity of complex API endpoints.',
      tags: ['Documentation', 'Code Quality', 'Open Source'],
      link: '#',
    },
    {
      title: 'Project Three',
      description: 'Backend API service with robust error handling, authentication, and comprehensive test coverage.',
      tags: ['Node.js', 'Express', 'MongoDB', 'API Design'],
      link: '#',
    },
  ]

  return (
    <section id="work" className="max-w-5xl mx-auto px-6 py-20">
      <div className="space-y-16">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Selected Work</h2>
          <p className="text-secondary text-lg">Projects and contributions I'm proud of</p>
        </div>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <article
              key={index}
              className="space-y-4 pb-12 border-b border-secondary/20 last:border-b-0 last:pb-0"
            >
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-primary">{project.title}</h3>
                <p className="text-secondary leading-relaxed">{project.description}</p>
              </div>

              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-medium px-3 py-1 bg-secondary/10 text-secondary rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <a
                href={project.link}
                className="inline-flex items-center gap-2 text-accent font-medium hover:gap-3 transition-all"
              >
                Learn more
                <ExternalLink size={16} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
