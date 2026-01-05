export default function Home() {
  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black">
      {/* Header/Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-black/[.08] bg-white/80 backdrop-blur-sm dark:border-white/[.145] dark:bg-black/80">
        <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 sm:px-8">
          <div className="text-xl font-semibold text-black dark:text-zinc-50">
            Portfolio
          </div>
          <ul className="flex gap-6 text-sm font-medium">
            <li>
              <a
                href="#about"
                className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                Projects
              </a>
            </li>
            <li>
              <a
                href="#skills"
                className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                Skills
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="mx-auto max-w-6xl px-6 pt-24 sm:px-8">
        {/* Hero Section */}
        <section
          id="about"
          className="flex min-h-[calc(100vh-6rem)] flex-col items-center justify-center py-20 text-center sm:items-start sm:text-left"
        >
          <div className="max-w-3xl">
            <h1 className="text-5xl font-semibold leading-tight tracking-tight text-black dark:text-zinc-50 sm:text-6xl">
              Hi, I&apos;m a Full Stack Developer
            </h1>
            <p className="mt-6 text-xl leading-8 text-zinc-600 dark:text-zinc-400">
              I build modern web applications with a focus on performance,
              accessibility, and user experience. Specializing in React,
              Next.js, and TypeScript.
            </p>
            <div className="mt-10 flex flex-col gap-4 text-base font-medium sm:flex-row">
              <a
                href="#projects"
                className="flex h-12 w-full items-center justify-center gap-2 rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc] sm:w-auto"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="flex h-12 w-full items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a] sm:w-auto"
              >
                Contact Me
              </a>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-20">
          <h2 className="mb-12 text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Featured Projects
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {/* Project 1 */}
            <div className="group rounded-2xl border border-black/[.08] bg-white p-6 transition-all hover:border-black/[.15] dark:border-white/[.145] dark:bg-zinc-900 dark:hover:border-white/[.25]">
              <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-zinc-50">
                Project One
              </h3>
              <p className="mb-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                A full-stack application built with Next.js, React, and
                TypeScript. Features modern UI/UX and responsive design.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  Next.js
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  TypeScript
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  Tailwind
                </span>
              </div>
            </div>

            {/* Project 2 */}
            <div className="group rounded-2xl border border-black/[.08] bg-white p-6 transition-all hover:border-black/[.15] dark:border-white/[.145] dark:bg-zinc-900 dark:hover:border-white/[.25]">
              <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <span className="text-4xl">💼</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-zinc-50">
                Project Two
              </h3>
              <p className="mb-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                An enterprise dashboard with real-time data visualization,
                authentication, and complex state management.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  React
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  Node.js
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  PostgreSQL
                </span>
              </div>
            </div>

            {/* Project 3 */}
            <div className="group rounded-2xl border border-black/[.08] bg-white p-6 transition-all hover:border-black/[.15] dark:border-white/[.145] dark:bg-zinc-900 dark:hover:border-white/[.25]">
              <div className="mb-4 flex h-48 items-center justify-center rounded-lg bg-zinc-100 dark:bg-zinc-800">
                <span className="text-4xl">🎨</span>
              </div>
              <h3 className="mb-2 text-xl font-semibold text-black dark:text-zinc-50">
                Project Three
              </h3>
              <p className="mb-4 text-sm leading-6 text-zinc-600 dark:text-zinc-400">
                A creative portfolio showcase with smooth animations, optimized
                images, and excellent performance metrics.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  Next.js
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  Framer Motion
                </span>
                <span className="rounded-full bg-zinc-100 px-3 py-1 text-xs font-medium text-zinc-700 dark:bg-zinc-800 dark:text-zinc-300">
                  Vercel
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="mb-12 text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
            Skills & Expertise
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Frontend */}
            <div className="rounded-2xl border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-zinc-900">
              <h3 className="mb-4 text-lg font-semibold text-black dark:text-zinc-50">
                Frontend
              </h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>React & Next.js</li>
                <li>TypeScript</li>
                <li>Tailwind CSS</li>
                <li>HTML5 & CSS3</li>
              </ul>
            </div>

            {/* Backend */}
            <div className="rounded-2xl border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-zinc-900">
              <h3 className="mb-4 text-lg font-semibold text-black dark:text-zinc-50">
                Backend
              </h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>Node.js</li>
                <li>Express</li>
                <li>REST APIs</li>
                <li>GraphQL</li>
              </ul>
            </div>

            {/* Database */}
            <div className="rounded-2xl border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-zinc-900">
              <h3 className="mb-4 text-lg font-semibold text-black dark:text-zinc-50">
                Database
              </h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>PostgreSQL</li>
                <li>MongoDB</li>
                <li>Redis</li>
                <li>Prisma ORM</li>
              </ul>
            </div>

            {/* Tools */}
            <div className="rounded-2xl border border-black/[.08] bg-white p-6 dark:border-white/[.145] dark:bg-zinc-900">
              <h3 className="mb-4 text-lg font-semibold text-black dark:text-zinc-50">
                Tools
              </h3>
              <ul className="space-y-2 text-sm text-zinc-600 dark:text-zinc-400">
                <li>Git & GitHub</li>
                <li>Docker</li>
                <li>Vercel</li>
                <li>VS Code</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-4xl font-semibold tracking-tight text-black dark:text-zinc-50">
              Let&apos;s Work Together
            </h2>
            <p className="mb-10 text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              I&apos;m currently available for freelance projects and full-time
              opportunities. Let&apos;s create something amazing together.
            </p>
            <div className="flex flex-col gap-4 text-base font-medium sm:flex-row sm:justify-center">
              <a
                href="mailto:contact@example.com"
                className="flex h-12 items-center justify-center gap-2 rounded-full bg-foreground px-6 text-background transition-colors hover:bg-[#383838] dark:hover:bg-[#ccc]"
              >
                Send Email
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-12 items-center justify-center rounded-full border border-solid border-black/[.08] px-6 transition-colors hover:border-transparent hover:bg-black/[.04] dark:border-white/[.145] dark:hover:bg-[#1a1a1a]"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-black/[.08] dark:border-white/[.145]">
        <div className="mx-auto max-w-6xl px-6 py-12 sm:px-8">
          <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              © {new Date().getFullYear()} Portfolio. All rights reserved.
            </div>
            <div className="flex gap-6">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                GitHub
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                LinkedIn
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-zinc-600 transition-colors hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
