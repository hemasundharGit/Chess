import Link from 'next/link';
import { Swords, Phone, Mail } from 'lucide-react';

export function Footer() {
  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/courses', label: 'Courses' },
    { href: '/schedule', label: 'Schedule' },
    { href: '/contact', label: 'Contact' },
  ];

  const coachPhoneNumber = '911234567890';
  const coachEmail = 'coach@vardhanchessacademy.com';

  return (
    <footer className="bg-primary/10 border-t">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Swords className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold font-headline text-primary">
                Vardhan Chess Academy
              </span>
            </Link>
            <p className="text-foreground/70">
              Elevating chess skills from beginner to master.
            </p>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-foreground/80 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-headline text-lg font-semibold text-primary mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-foreground/80">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 XXXXXXXXXX</span>
              </li>
              <li className="flex items-center gap-2 text-foreground/80">
                <Mail className="h-4 w-4 text-primary" />
                <a href={`mailto:${coachEmail}`} className="hover:text-primary transition-colors">
                  {coachEmail}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t text-center text-foreground/60">
          <p>&copy; {new Date().getFullYear()} Vardhan Chess Academy. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
