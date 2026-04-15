import Link from "next/link";
import { ExternalLink, Globe, Mail, Calendar } from "lucide-react";

const footerLinks = [
  { href: "/projects", label: "Projects" },
  { href: "/achievements", label: "Achievements" },
  { href: "/blog", label: "Blog" },
  { href: "/skills", label: "Skills" },
  { href: "/certifications", label: "Certifications" },
  { href: "/artifacts", label: "Artifacts" },
  { href: "/testimonials", label: "Testimonials" },
  { href: "/contact", label: "Contact" },
  { href: "/resume", label: "Resume" },
];

const socialLinks = [
  { href: "https://linkedin.com/in/", icon: ExternalLink, label: "LinkedIn" },
  { href: "https://github.com/", icon: Globe, label: "GitHub" },
  { href: "mailto:hello@rituraj.dev", icon: Mail, label: "Email" },
  { href: "https://cal.com/", icon: Calendar, label: "Schedule a chat" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-background)]">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="flex flex-col md:flex-row items-start justify-between gap-10">
          {/* Brand */}
          <div>
            <Link
              href="/"
              className="text-lg font-black tracking-tighter uppercase"
              style={{ color: "var(--color-primary)" }}
            >
              Rituraj Singh
            </Link>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)] max-w-xs leading-relaxed">
              © 2024 Rituraj Singh. <br /> Industrial PM Strategy & Delivery.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex gap-12">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[10px] font-black uppercase tracking-widest text-[var(--color-primary)] hover:text-[var(--color-accent)] transition-colors"
              >
                {social.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#10B981]"></span>
            <span className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-muted)]">
              Available for projects
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
