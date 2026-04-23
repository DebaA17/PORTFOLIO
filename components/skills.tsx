import { Badge } from "@/components/ui/badge"

type TechItem = {
  name: string
  icon?: string
  note?: string
}

type TechGroup = {
  id: string
  title: string
  emoji: string
  description?: string
  emphasis: "primary" | "secondary" | "tertiary"
  items: TechItem[]
}

function TechPill({ item, size }: { item: TechItem; size: "sm" | "md" }) {
  return (
    <Badge
      variant="secondary"
      className={
        size === "sm"
          ? "gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1 text-foreground transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
          : "gap-2 rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-foreground transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10"
      }
    >
      {item.icon ? (
        <img
          src={`https://cdn.simpleicons.org/${item.icon}`}
          alt={item.name}
          className="h-4 w-4"
          loading="lazy"
        />
      ) : null}
      <span className="text-xs sm:text-sm">{item.name}</span>
    </Badge>
  )
}

function TechTile({ item }: { item: TechItem }) {
  return (
    <div className="rounded-md border border-white/10 bg-white/5 p-3 transition hover:-translate-y-0.5 hover:border-white/20 hover:bg-white/10">
      <div className="flex items-center gap-2">
        {item.icon ? (
          <img
            src={`https://cdn.simpleicons.org/${item.icon}`}
            alt={item.name}
            className="h-4 w-4"
            loading="lazy"
          />
        ) : null}
        <div className="text-sm font-semibold text-gray-100">{item.name}</div>
      </div>
      {item.note ? (
        <p className="mt-1 text-xs leading-relaxed text-gray-200">{item.note}</p>
      ) : null}
    </div>
  )
}

export default function Skills() {
  const groups: TechGroup[] = [
    {
      id: "infra",
      title: "Infrastructure & Operations",
      emoji: "🧱",
      emphasis: "primary",
      description:
        "Experienced in managing production-like systems: host hardening, networking fundamentals, and reliable edge routing.",
      items: [
        { name: "Debian", icon: "debian", note: "Production servers & daily driver" },
        { name: "Ubuntu", icon: "ubuntu", note: "Production deployments & tooling" },
        { name: "RHEL/Fedora", icon: "redhat", note: "Enterprise Linux familiarity" },
        {
          name: "FreeBSD",
          icon: "freebsd",
          note: "Performance tuning, rc.conf/rc.d service management, networking",
        },
        { name: "Nginx", icon: "nginx", note: "Reverse proxy, routing, TLS termination" },
        { name: "Caddy", icon: "caddy", note: "Automatic HTTPS, simple reverse proxy" },
        { name: "Cloudflare", icon: "cloudflare", note: "DNS/CDN/WAF at the edge" },
      ],
    },
    {
      id: "devops",
      title: "DevOps & Delivery",
      emoji: "⚙️",
      emphasis: "primary",
      description:
        "Automate build → test → deploy. Prefer repeatable infrastructure and clear runbooks over hero debugging.",
      items: [
        { name: "Docker", icon: "docker", note: "Containerized apps & reproducible environments" },
        { name: "CI/CD", icon: "githubactions", note: "Automated pipelines (build, test, deploy)" },
        { name: "Ansible", icon: "ansible", note: "Idempotent provisioning & configuration" },
      ],
    },
    {
      id: "security",
      title: "Security & Hardening",
      emoji: "🛡️",
      emphasis: "primary",
      description:
        "Security is operational: least privilege, sensible defaults, patching discipline, and tight exposure at the edge.",
      items: [
        { name: "Kali Linux", icon: "kalilinux", note: "Security testing environment (not a production OS)" },
        { name: "Host Hardening", note: "SSH, firewalling, service isolation, least privilege" },
        { name: "TLS & Secrets", note: "Certificates, secure headers, safe secret handling" },
        { name: "Web Security", note: "OWASP-minded reviews and defensive configs" },
      ],
    },
    {
      id: "backend",
      title: "Backend & Data",
      emoji: "🔧",
      emphasis: "secondary",
      description:
        "Build APIs and automation that behave well in production: logging, sane defaults, and predictable deployments.",
      items: [
        { name: "Node.js", icon: "nodedotjs", note: "APIs and backend services" },
        { name: "Python", icon: "python", note: "Automation, scripting, tooling" },
        { name: "SQL (MySQL/MariaDB)", icon: "mysql", note: "Relational modeling and query fundamentals" },
        { name: "MongoDB", icon: "mongodb", note: "Document data when it fits" },
        { name: "Google Cloud", icon: "googlecloud", note: "Compute/services basics" },
      ],
    },
    {
      id: "frontend",
      title: "Frontend (supporting role)",
      emoji: "🧩",
      emphasis: "tertiary",
      items: [
        { name: "React", icon: "react" },
        { name: "Next.js", icon: "nextdotjs" },
        { name: "Vite", icon: "vite" },
        { name: "JavaScript", icon: "javascript" },
        { name: "HTML5", icon: "html5" },
        { name: "CSS3", icon: "css" },
      ],
    },
  ]

  return (
    <section id="skills" className="py-14 sm:py-20 bg-[#0c0c1a]">
      <div className="container mx-auto px-2 sm:px-4">
        <div className="text-center mb-10 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
            Tech Stack <span className="text-blue-500">&amp; Tools</span>
          </h2>
          <p className="mx-auto max-w-3xl text-sm sm:text-base leading-relaxed text-gray-200">
            Proof over buzzwords: I deploy, secure, and operate systems — automate delivery, harden hosts, and keep
            services reliable in real environments.
          </p>
          <div className="mt-4 w-16 sm:w-24 h-1 bg-blue-500 mx-auto" />
        </div>

        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8">
          {groups.map((group) => {
            const containerClassName =
              group.emphasis === "primary"
                ? "rounded-lg border border-white/10 bg-[#111827] p-4 sm:p-6 transition-colors hover:border-white/20"
                : group.emphasis === "secondary"
                  ? "rounded-lg border border-white/10 bg-[#111827]/80 p-4 sm:p-6 transition-colors hover:border-white/20"
                  : "rounded-lg border border-white/10 bg-[#111827]/60 p-4 transition-colors hover:border-white/20"

            const titleClassName =
              group.emphasis === "tertiary"
                ? "text-sm sm:text-base font-semibold"
                : "text-base sm:text-lg font-semibold"

            return (
              <div key={group.id} className={containerClassName}>
                <div className="mb-3 flex items-center gap-2">
                  <span className="text-base" aria-hidden="true">
                    {group.emoji}
                  </span>
                  <h3 className={titleClassName}>{group.title}</h3>
                </div>

                {group.description ? (
                  <p className="mb-4 text-sm leading-relaxed text-gray-200">{group.description}</p>
                ) : null}

                {group.emphasis === "tertiary" ? (
                  <div className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <TechPill key={item.name} item={item} size="sm" />
                    ))}
                  </div>
                ) : (
                  <div className="grid gap-3 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {group.items.map((item) => (
                      <TechTile key={item.name} item={item} />
                    ))}
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
