import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { Stats } from '@/components/Stats';
import { Footer } from '@/components/Footer';
import { BackToTop } from '@/components/BackToTop';
import { Threats } from '@/components/sections/Threats';
import { Habits } from '@/components/sections/Habits';
import { PasswordSafety } from '@/components/sections/PasswordSafety';
import { Phishing } from '@/components/sections/Phishing';
import { SocialMedia } from '@/components/sections/SocialMedia';
import { AccountRecovery } from '@/components/sections/AccountRecovery';
import { SecurityCheckup } from '@/components/sections/SecurityCheckup';
import { Checklist } from '@/components/sections/Checklist';
import { useTheme } from '@/hooks/useTheme';

function App() {
  const { theme, toggle } = useTheme();

  return (
    <div className="min-h-screen bg-bg">
      <a
        href="#home"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-sky-500 focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-[#04121f]"
      >
        Skip to content
      </a>
      <Navbar theme={theme} onToggleTheme={toggle} />
      <main>
        <Hero />
        <Stats />
        <Threats />
        <Habits />
        <PasswordSafety />
        <Phishing />
        <SocialMedia />
        <AccountRecovery />
        <SecurityCheckup />
        <Checklist />
      </main>
      <Footer />
      <BackToTop />
    </div>
  );
}

export default App;
