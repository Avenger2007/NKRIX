import CommandCenter from '@/components/CommandCenter';

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0a0a0a] font-sans text-[#e8e8e8]">
      {/* Command Bar Navigation */}
      <header className="fixed top-0 z-50 w-full border-b border-[#6b7c59]/30 bg-[#0a0a0a]/95 backdrop-blur-sm">
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center border border-[#d4af37] bg-[#d4af37]/10">
              <span className="font-mono text-lg font-bold text-[#d4af37]">★</span>
            </div>
            <div>
              <div className="font-mono text-xs uppercase tracking-wider text-[#6b7c59]">
                Call Sign
              </div>
              <div className="text-sm font-semibold uppercase tracking-wide text-[#e8e8e8]">
                TACTICAL DEV
              </div>
            </div>
          </div>
          <ul className="hidden gap-8 font-mono text-sm uppercase tracking-wider md:flex">
            <li>
              <a
                href="#dossier"
                className="transition-colors hover:text-[#d4af37]"
              >
                [Dossier]
              </a>
            </li>
            <li>
              <a
                href="#operations"
                className="transition-colors hover:text-[#d4af37]"
              >
                [Operations]
              </a>
            </li>
            <li>
              <a
                href="#arsenal"
                className="transition-colors hover:text-[#d4af37]"
              >
                [Arsenal]
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="transition-colors hover:text-[#d4af37]"
              >
                [Contact]
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-2 rounded border border-[#4a5c3a] bg-[#4a5c3a]/20 px-3 py-1">
            <span className="font-mono text-xs uppercase tracking-wide text-[#c3b091]">
              Rank
            </span>
            <span className="font-mono text-xs font-bold text-[#d4af37]">
              LVL 85
            </span>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="relative z-10 mx-auto max-w-7xl px-6 pt-32 lg:px-8">
        {/* Personnel Dossier - Hero Section */}
        <section
          id="dossier"
          className="scanline relative mb-32 border border-[#6b7c59]/30 bg-[#0a0a0a]/50 p-8 lg:p-12"
        >
          <div className="mb-4 inline-block border border-[#c1440e] bg-[#c1440e]/10 px-3 py-1">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#c1440e]">
              ● CLASSIFIED - PERSONNEL DOSSIER
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <div className="mb-6">
                <div className="mb-2 flex items-center gap-2">
                  <span className="text-2xl text-[#d4af37]">★★★</span>
                </div>
                <h1 className="mb-4 font-mono text-5xl font-bold uppercase leading-tight tracking-tight text-[#e8e8e8] lg:text-6xl">
                  FULL STACK
                  <br />
                  DEVELOPER
                </h1>
              </div>

              <div className="mb-8 space-y-3 font-mono text-sm">
                <div className="flex gap-3">
                  <span className="w-32 text-[#6b7c59]">RANK:</span>
                  <span className="font-semibold text-[#d4af37]">
                    Senior Developer
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="w-32 text-[#6b7c59]">CLEARANCE:</span>
                  <span className="text-[#e8e8e8]">Full Stack Architecture</span>
                </div>
                <div className="flex gap-3">
                  <span className="w-32 text-[#6b7c59]">STATUS:</span>
                  <span className="status-pulse flex items-center gap-2 text-[#39ff14]">
                    <span className="inline-block h-2 w-2 rounded-full bg-[#39ff14]"></span>
                    Available for Missions
                  </span>
                </div>
                <div className="flex gap-3">
                  <span className="w-32 text-[#6b7c59]">DEPLOYMENT:</span>
                  <span className="text-[#e8e8e8]">Global Operations</span>
                </div>
              </div>

              <div className="mb-8 border-l-2 border-[#4a5c3a] pl-4">
                <h2 className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-[#6b7c59]">
                  Mission Statement
                </h2>
                <p className="text-base leading-relaxed text-[#c3b091]">
                  Executing precision web development operations with strategic
                  planning and tactical implementation. Specialized in React
                  operations, Node.js deployments, and full-stack mission
                  success with 99.9% operational uptime.
                </p>
              </div>

              <div className="flex flex-col gap-4 sm:flex-row">
                <a
                  href="#operations"
                  className="group flex items-center justify-center gap-2 border border-[#d4af37] bg-[#d4af37]/20 px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide text-[#d4af37] transition-all hover:bg-[#d4af37] hover:text-[#0a0a0a]"
                >
                  <span>▶</span> View Operations
                </a>
                <a
                  href="#contact"
                  className="flex items-center justify-center gap-2 border border-[#6b7c59] bg-transparent px-6 py-3 font-mono text-sm font-bold uppercase tracking-wide text-[#e8e8e8] transition-all hover:border-[#c3b091] hover:bg-[#4a5c3a]/20"
                >
                  📋 Request Briefing
                </a>
              </div>
            </div>

            <div className="flex items-center justify-center">
              <div className="relative">
                <div className="tactical-border flex h-64 w-64 items-center justify-center bg-[#4a5c3a]/10 lg:h-80 lg:w-80">
                  <div className="text-center">
                    <div className="mb-4 text-6xl">🎖️</div>
                    <div className="font-mono text-xs uppercase tracking-wider text-[#6b7c59]">
                      Profile Image
                    </div>
                    <div className="font-mono text-xs text-[#8b8b8b]">
                      Replace with photo
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 border border-[#d4af37] bg-[#0a0a0a] px-4 py-2">
                  <div className="font-mono text-xs text-[#6b7c59]">ID</div>
                  <div className="font-mono text-sm font-bold text-[#d4af37]">
                    DEV-2024-001
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Operations Section - Projects */}
        <section id="operations" className="mb-32">
          <div className="mb-12">
            <div className="mb-4 inline-block border-b-2 border-[#d4af37]">
              <h2 className="font-mono text-3xl font-bold uppercase tracking-tight text-[#e8e8e8]">
                ⚔️ Mission Log
              </h2>
            </div>
            <p className="font-mono text-sm text-[#6b7c59]">
              Completed and ongoing tactical operations
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {/* Operation 1 */}
            <div className="group tactical-border bg-[#0a0a0a]/50 p-6 transition-all hover:bg-[#4a5c3a]/10">
              <div className="mb-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-[#6b7c59]">
                    Mission ID
                  </span>
                  <span className="font-mono text-xs font-bold text-[#d4af37]">
                    OP-2024-001
                  </span>
                </div>
                <h3 className="mb-2 font-mono text-xl font-bold uppercase text-[#e8e8e8]">
                  E-COMMERCE ASSAULT
                </h3>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#39ff14]"></span>
                  <span className="font-mono text-xs uppercase text-[#39ff14]">
                    ✓ Completed
                  </span>
                </div>
              </div>

              <div className="mb-4 flex h-32 items-center justify-center border border-[#6b7c59]/20 bg-[#4a5c3a]/5">
                <span className="text-4xl">🚀</span>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 font-mono text-xs font-bold uppercase tracking-wide text-[#6b7c59]">
                  Objective
                </h4>
                <p className="text-sm leading-relaxed text-[#c3b091]">
                  Deploy high-performance e-commerce platform with real-time
                  inventory management and secure payment processing.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 font-mono text-xs font-bold uppercase tracking-wide text-[#6b7c59]">
                  Arsenal Deployed
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-[#4a5c3a] bg-[#4a5c3a]/20 px-2 py-1 font-mono text-xs text-[#c3b091]">
                    Next.js
                  </span>
                  <span className="border border-[#4a5c3a] bg-[#4a5c3a]/20 px-2 py-1 font-mono text-xs text-[#c3b091]">
                    TypeScript
                  </span>
                  <span className="border border-[#4a5c3a] bg-[#4a5c3a]/20 px-2 py-1 font-mono text-xs text-[#c3b091]">
                    PostgreSQL
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href="#"
                  className="flex-1 border border-[#6b7c59] bg-transparent px-3 py-2 text-center font-mono text-xs uppercase transition-colors hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                >
                  🔗 Deploy
                </a>
                <a
                  href="#"
                  className="flex-1 border border-[#6b7c59] bg-transparent px-3 py-2 text-center font-mono text-xs uppercase transition-colors hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                >
                  📊 Intel
                </a>
              </div>
            </div>

            {/* Operation 2 */}
            <div className="group tactical-border bg-[#0a0a0a]/50 p-6 transition-all hover:bg-[#4a5c3a]/10">
              <div className="mb-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-[#6b7c59]">
                    Mission ID
                  </span>
                  <span className="font-mono text-xs font-bold text-[#d4af37]">
                    OP-2024-002
                  </span>
                </div>
                <h3 className="mb-2 font-mono text-xl font-bold uppercase text-[#e8e8e8]">
                  DASHBOARD RECON
                </h3>
                <div className="flex items-center gap-2">
                  <span className="status-pulse inline-block h-2 w-2 rounded-full bg-[#d4af37]"></span>
                  <span className="font-mono text-xs uppercase text-[#d4af37]">
                    ◐ In Progress
                  </span>
                </div>
              </div>

              <div className="mb-4 flex h-32 items-center justify-center border border-[#6b7c59]/20 bg-[#4a5c3a]/5">
                <span className="text-4xl">💼</span>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 font-mono text-xs font-bold uppercase tracking-wide text-[#6b7c59]">
                  Objective
                </h4>
                <p className="text-sm leading-relaxed text-[#c3b091]">
                  Build enterprise analytics dashboard with real-time data
                  visualization and advanced reporting capabilities.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 font-mono text-xs font-bold uppercase tracking-wide text-[#6b7c59]">
                  Arsenal Deployed
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-[#4a5c3a] bg-[#4a5c3a]/20 px-2 py-1 font-mono text-xs text-[#c3b091]">
                    React
                  </span>
                  <span className="border border-[#4a5c3a] bg-[#4a5c3a]/20 px-2 py-1 font-mono text-xs text-[#c3b091]">
                    Node.js
                  </span>
                  <span className="border border-[#4a5c3a] bg-[#4a5c3a]/20 px-2 py-1 font-mono text-xs text-[#c3b091]">
                    MongoDB
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href="#"
                  className="flex-1 border border-[#6b7c59] bg-transparent px-3 py-2 text-center font-mono text-xs uppercase transition-colors hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                >
                  🔗 Deploy
                </a>
                <a
                  href="#"
                  className="flex-1 border border-[#6b7c59] bg-transparent px-3 py-2 text-center font-mono text-xs uppercase transition-colors hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                >
                  📊 Intel
                </a>
              </div>
            </div>

            {/* Operation 3 */}
            <div className="group tactical-border bg-[#0a0a0a]/50 p-6 transition-all hover:bg-[#4a5c3a]/10">
              <div className="mb-4">
                <div className="mb-2 flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-[#6b7c59]">
                    Mission ID
                  </span>
                  <span className="font-mono text-xs font-bold text-[#d4af37]">
                    OP-2023-015
                  </span>
                </div>
                <h3 className="mb-2 font-mono text-xl font-bold uppercase text-[#e8e8e8]">
                  API FORTRESS
                </h3>
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#39ff14]"></span>
                  <span className="font-mono text-xs uppercase text-[#39ff14]">
                    ✓ Completed
                  </span>
                </div>
              </div>

              <div className="mb-4 flex h-32 items-center justify-center border border-[#6b7c59]/20 bg-[#4a5c3a]/5">
                <span className="text-4xl">🎨</span>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 font-mono text-xs font-bold uppercase tracking-wide text-[#6b7c59]">
                  Objective
                </h4>
                <p className="text-sm leading-relaxed text-[#c3b091]">
                  Develop scalable RESTful API with microservices architecture
                  and comprehensive authentication system.
                </p>
              </div>

              <div className="mb-4">
                <h4 className="mb-2 font-mono text-xs font-bold uppercase tracking-wide text-[#6b7c59]">
                  Arsenal Deployed
                </h4>
                <div className="flex flex-wrap gap-2">
                  <span className="border border-[#4a5c3a] bg-[#4a5c3a]/20 px-2 py-1 font-mono text-xs text-[#c3b091]">
                    Express
                  </span>
                  <span className="border border-[#4a5c3a] bg-[#4a5c3a]/20 px-2 py-1 font-mono text-xs text-[#c3b091]">
                    JWT
                  </span>
                  <span className="border border-[#4a5c3a] bg-[#4a5c3a]/20 px-2 py-1 font-mono text-xs text-[#c3b091]">
                    Docker
                  </span>
                </div>
              </div>

              <div className="flex gap-2">
                <a
                  href="#"
                  className="flex-1 border border-[#6b7c59] bg-transparent px-3 py-2 text-center font-mono text-xs uppercase transition-colors hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                >
                  🔗 Deploy
                </a>
                <a
                  href="#"
                  className="flex-1 border border-[#6b7c59] bg-transparent px-3 py-2 text-center font-mono text-xs uppercase transition-colors hover:border-[#d4af37] hover:bg-[#d4af37]/10 hover:text-[#d4af37]"
                >
                  📊 Intel
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Arsenal Section - Skills */}
        <section id="arsenal" className="mb-32">
          <div className="mb-12">
            <div className="mb-4 inline-block border-b-2 border-[#d4af37]">
              <h2 className="font-mono text-3xl font-bold uppercase tracking-tight text-[#e8e8e8]">
                🎯 Arsenal & Capabilities
              </h2>
            </div>
            <p className="font-mono text-sm text-[#6b7c59]">
              Tactical equipment and specialized training
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Frontend Division */}
            <div className="tactical-border bg-[#0a0a0a]/50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-[#d4af37] bg-[#d4af37]/10">
                  <span className="text-2xl">🎯</span>
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold uppercase text-[#e8e8e8]">
                    Frontend
                  </h3>
                  <div className="font-mono text-xs text-[#6b7c59]">
                    Division
                  </div>
                </div>
              </div>
              <ul className="mb-4 space-y-2 font-mono text-sm text-[#c3b091]">
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> React & Next.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> TypeScript
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> Tailwind CSS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> HTML5 & CSS3
                </li>
              </ul>
              <div className="border-t border-[#6b7c59]/30 pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-[#6b7c59]">
                    Level
                  </span>
                  <span className="font-mono text-sm font-bold text-[#d4af37]">
                    85
                  </span>
                </div>
                <div className="mt-2 h-2 w-full bg-[#4a5c3a]/20">
                  <div className="h-full w-[85%] bg-[#d4af37]"></div>
                </div>
              </div>
            </div>

            {/* Backend Division */}
            <div className="tactical-border bg-[#0a0a0a]/50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-[#d4af37] bg-[#d4af37]/10">
                  <span className="text-2xl">⚙️</span>
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold uppercase text-[#e8e8e8]">
                    Backend
                  </h3>
                  <div className="font-mono text-xs text-[#6b7c59]">
                    Division
                  </div>
                </div>
              </div>
              <ul className="mb-4 space-y-2 font-mono text-sm text-[#c3b091]">
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> Node.js
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> Express
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> REST APIs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> GraphQL
                </li>
              </ul>
              <div className="border-t border-[#6b7c59]/30 pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-[#6b7c59]">
                    Level
                  </span>
                  <span className="font-mono text-sm font-bold text-[#d4af37]">
                    78
                  </span>
                </div>
                <div className="mt-2 h-2 w-full bg-[#4a5c3a]/20">
                  <div className="h-full w-[78%] bg-[#d4af37]"></div>
                </div>
              </div>
            </div>

            {/* Database Division */}
            <div className="tactical-border bg-[#0a0a0a]/50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-[#d4af37] bg-[#d4af37]/10">
                  <span className="text-2xl">🗄️</span>
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold uppercase text-[#e8e8e8]">
                    Database
                  </h3>
                  <div className="font-mono text-xs text-[#6b7c59]">
                    Division
                  </div>
                </div>
              </div>
              <ul className="mb-4 space-y-2 font-mono text-sm text-[#c3b091]">
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> PostgreSQL
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> MongoDB
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> Redis
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> Prisma ORM
                </li>
              </ul>
              <div className="border-t border-[#6b7c59]/30 pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-[#6b7c59]">
                    Level
                  </span>
                  <span className="font-mono text-sm font-bold text-[#d4af37]">
                    72
                  </span>
                </div>
                <div className="mt-2 h-2 w-full bg-[#4a5c3a]/20">
                  <div className="h-full w-[72%] bg-[#d4af37]"></div>
                </div>
              </div>
            </div>

            {/* DevOps Division */}
            <div className="tactical-border bg-[#0a0a0a]/50 p-6">
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-[#d4af37] bg-[#d4af37]/10">
                  <span className="text-2xl">🛠️</span>
                </div>
                <div>
                  <h3 className="font-mono text-lg font-bold uppercase text-[#e8e8e8]">
                    DevOps
                  </h3>
                  <div className="font-mono text-xs text-[#6b7c59]">
                    Division
                  </div>
                </div>
              </div>
              <ul className="mb-4 space-y-2 font-mono text-sm text-[#c3b091]">
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> Docker
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> AWS
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> CI/CD
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-[#d4af37]">▸</span> Git
                </li>
              </ul>
              <div className="border-t border-[#6b7c59]/30 pt-3">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs uppercase text-[#6b7c59]">
                    Level
                  </span>
                  <span className="font-mono text-sm font-bold text-[#d4af37]">
                    68
                  </span>
                </div>
                <div className="mt-2 h-2 w-full bg-[#4a5c3a]/20">
                  <div className="h-full w-[68%] bg-[#d4af37]"></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="mb-32">
          <div className="tactical-border scanline bg-[#0a0a0a]/50 p-8 text-center lg:p-12">
            <div className="mb-6 inline-block border border-[#c1440e] bg-[#c1440e]/10 px-3 py-1">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#c1440e]">
                🎯 INITIATE CONTACT PROTOCOL
              </span>
            </div>

            <h2 className="mb-4 font-mono text-4xl font-bold uppercase tracking-tight text-[#e8e8e8]">
              Request Mission Briefing
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-[#c3b091]">
              Ready to deploy on your next operation? Send an encrypted message
              and let&apos;s discuss tactical objectives. Response time: &lt;24
              hours. Current status: Available for new missions.
            </p>

            <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
              <a
                href="mailto:contact@example.com"
                className="group flex items-center justify-center gap-2 border border-[#d4af37] bg-[#d4af37]/20 px-8 py-4 font-mono text-sm font-bold uppercase tracking-wide text-[#d4af37] transition-all hover:bg-[#d4af37] hover:text-[#0a0a0a]"
              >
                <span>📧</span> Send Encrypted Message
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 border border-[#6b7c59] bg-transparent px-8 py-4 font-mono text-sm font-bold uppercase tracking-wide text-[#e8e8e8] transition-all hover:border-[#c3b091] hover:bg-[#4a5c3a]/20"
              >
                <span>🐙</span> GitHub Armory
              </a>
            </div>

            <div className="grid gap-4 sm:grid-cols-3">
              <div className="border border-[#6b7c59]/30 bg-[#4a5c3a]/5 p-4">
                <div className="mb-2 font-mono text-xs uppercase text-[#6b7c59]">
                  Response Time
                </div>
                <div className="font-mono text-lg font-bold text-[#d4af37]">
                  &lt;24 Hours
                </div>
              </div>
              <div className="border border-[#6b7c59]/30 bg-[#4a5c3a]/5 p-4">
                <div className="mb-2 font-mono text-xs uppercase text-[#6b7c59]">
                  Availability
                </div>
                <div className="status-pulse font-mono text-lg font-bold text-[#39ff14]">
                  ✓ Active
                </div>
              </div>
              <div className="border border-[#6b7c59]/30 bg-[#4a5c3a]/5 p-4">
                <div className="mb-2 font-mono text-xs uppercase text-[#6b7c59]">
                  Location
                </div>
                <div className="font-mono text-lg font-bold text-[#e8e8e8]">
                  Global
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer - Command Center */}
      <footer className="relative z-10 border-t border-[#6b7c59]/30 bg-[#0a0a0a]/95">
        <div className="mx-auto max-w-7xl px-6 py-12 lg:px-8">
          <div className="mb-8 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            <div>
              <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-[#6b7c59]">
                Command Center
              </h3>
              <p className="text-sm text-[#c3b091]">
                Full Stack Developer specializing in tactical web operations and
                mission-critical applications.
              </p>
            </div>
            <div>
              <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-[#6b7c59]">
                Quick Links
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="#dossier"
                    className="text-[#c3b091] transition-colors hover:text-[#d4af37]"
                  >
                    Personnel Dossier
                  </a>
                </li>
                <li>
                  <a
                    href="#operations"
                    className="text-[#c3b091] transition-colors hover:text-[#d4af37]"
                  >
                    Mission Log
                  </a>
                </li>
                <li>
                  <a
                    href="#arsenal"
                    className="text-[#c3b091] transition-colors hover:text-[#d4af37]"
                  >
                    Arsenal
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-[#6b7c59]">
                Connect
              </h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c3b091] transition-colors hover:text-[#d4af37]"
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c3b091] transition-colors hover:text-[#d4af37]"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c3b091] transition-colors hover:text-[#d4af37]"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-3 font-mono text-xs font-bold uppercase tracking-widest text-[#6b7c59]">
                Status
              </h3>
              <div className="space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-[#39ff14]"></span>
                  <span className="text-[#c3b091]">All Systems Operational</span>
                </div>
                <div className="text-[#6b7c59]">
                  Last Updated: {new Date().getFullYear()}
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-[#6b7c59]/30 pt-8">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="font-mono text-xs uppercase text-[#6b7c59]">
                CLASSIFIED - FOR OFFICIAL USE ONLY
              </div>
              <div className="text-sm text-[#8b8b8b]">
                © {new Date().getFullYear()} Tactical Dev Ops. All rights
                reserved.
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Commander ATLAS - Interactive Assistant */}
      <CommandCenter />
    </div>
  );
}
