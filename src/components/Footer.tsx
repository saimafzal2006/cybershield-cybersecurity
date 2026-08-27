import { Shield, Mail, ArrowUpRight, ShieldCheck } from 'lucide-react';
import { Logo } from './Logo';
import { navLinks } from '@/data';

export function Footer() {
  return (
    <footer className="relative mt-20 border-t border-soft bg-soft">
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Logo />
            <p className="mt-4 max-w-xs text-sm text-muted">
              Cybersecurity Awareness. Learn. Think. Protect.
            </p>
            <p className="mt-3 max-w-xs text-sm text-muted">
              Simple cybersecurity knowledge for protecting your accounts, devices, data, and
              digital identity.
            </p>
            <div className="mt-5 inline-flex items-center gap-2 rounded-lg border border-soft px-3 py-1.5 text-xs text-muted">
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden="true" />
              No tracking. No data collection. Runs entirely in your browser.
            </div>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted">
              Explore
            </h3>
            <ul className="mt-4 grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center gap-1 text-sm text-muted transition-colors hover:text-accent"
                  >
                    {link.label}
                    <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-sm font-bold uppercase tracking-wider text-muted">
              About
            </h3>
            <p className="mt-4 text-sm text-muted">
              This website is created for cybersecurity awareness and educational purposes.
              Always use official websites and trusted security channels when responding to
              security incidents.
            </p>
            <div className="mt-4 flex items-center gap-2 text-xs text-muted">
              <Mail className="h-4 w-4" aria-hidden="true" />
              Introduction to Cybersecurity — Week 1 Mini-Task
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-soft pt-6 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-muted">
            © {new Date().getFullYear()} CyberShield. An original educational project. Not
            affiliated with any real cybersecurity organization.
          </p>
          <p className="inline-flex items-center gap-1.5 text-xs text-muted">
            <Shield className="h-3.5 w-3.5 text-accent" aria-hidden="true" />
            Think Before You Click. Stay Safe. Stay Secure.
          </p>
        </div>
      </div>
    </footer>
  );
}
