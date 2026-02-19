import Link from 'next/link'
import { Mail, Github, Linkedin } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contact" className="max-w-5xl mx-auto px-6 py-20">
      <div className="space-y-16">
        <div className="space-y-2">
          <h2 className="text-3xl md:text-4xl font-bold text-primary">Let's work together</h2>
          <p className="text-secondary text-lg">I'm always open to new opportunities and conversations</p>
        </div>

        <div className="space-y-8">
          <p className="text-secondary leading-relaxed text-lg max-w-2xl">
            Have a project in mind or just want to chat? Feel free to reach out. Whether it's about open-source contributions, collaboration opportunities, or just tech talk, I'd love to hear from you.
          </p>

          <a
            href="mailto:mdabdullahalaminkhan@gmail.com"
            className="inline-flex items-center gap-2 px-8 py-3 bg-accent text-background font-medium hover:opacity-90 transition-opacity rounded"
          >
            <Mail size={18} />
            Send me an email
          </a>

          <div className="flex gap-6 pt-8">
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary/10 text-secondary hover:text-primary hover:bg-secondary/20 transition-colors rounded-lg"
              aria-label="GitHub"
            >
              <Github size={24} />
            </Link>
            <Link
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-secondary/10 text-secondary hover:text-primary hover:bg-secondary/20 transition-colors rounded-lg"
              aria-label="LinkedIn"
            >
              <Linkedin size={24} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
