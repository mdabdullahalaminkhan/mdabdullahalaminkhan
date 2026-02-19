import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20 md:py-32">
      <div className="space-y-8">
        <div className="space-y-4">
          <p className="text-sm font-medium text-secondary uppercase tracking-wide">Hello, I'm</p>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-balance leading-tight text-primary">
            Abdullah Alam Khan
          </h1>
          <p className="text-xl md:text-2xl text-secondary font-light leading-relaxed">
            Full-stack developer passionate about building elegant, performant web applications and contributing to open source.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 pt-8">
          <Link
            href="#work"
            className="inline-flex items-center gap-2 px-8 py-3 bg-primary text-background font-medium hover:opacity-90 transition-opacity rounded"
          >
            View my work
            <ArrowRight size={18} />
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 border border-secondary/30 text-primary font-medium hover:border-primary transition-colors rounded"
          >
            Get in touch
          </Link>
        </div>
      </div>
    </section>
  )
}
