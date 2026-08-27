# CyberShield — Cybersecurity Awareness

An original, premium cybersecurity awareness website built as a university assignment. It teaches everyday users how to protect their accounts, devices, data, and digital identity through clear explanations, interactive demos, and quizzes — all running entirely in the browser.

## Course

Introduction to Cybersecurity

## Assignment

Week 1 Mini-Task — 10%

## Description

CyberShield is a single-page educational website covering five common cyber threats, five personal cybersecurity habits, password safety, phishing warning signs, safe social-media practices, an account-hacked emergency response guide, an interactive password strength demo, a phishing quiz, and a 10-question security checkup. Every interactive feature runs locally in the browser — no data is sent to or stored on any server.

## Features

- Sticky navigation with active-section highlighting and mobile hamburger menu
- Hero section with an animated shield/network visual
- Quick overview stats (educational, not real-world statistics)
- Five common cyber threats with risk indicators and prevention tips
- Five personal cybersecurity habits presented as a timeline
- Password Safety 101 with weak vs. strong password comparison
- Interactive password strength demo (runs locally, never transmitted or stored)
- Phishing warning signs (10 cards)
- Interactive "Phishing or Safe?" quiz with 5 fictional scenarios
- Safe social-media practices (11 cards)
- Account-hacked emergency response timeline (8 steps)
- 10-question security checkup quiz with dynamic scoring and retake
- 60-second security checklist
- Security tip cards throughout the site
- Scroll-reveal animations, back-to-top button, and dark/light theme toggle
- Fully responsive (1920px down to 375px) with no horizontal overflow
- Accessibility: semantic HTML, keyboard navigation, visible focus states, ARIA labels, reduced-motion support
- No login, no tracking, no data collection, no AI/platform branding

## Technologies

- **React** + **TypeScript** — component-based UI
- **Vite** — build tool and dev server
- **Tailwind CSS** — styling
- **lucide-react** — open-source icons
- Google Fonts: **Space Grotesk** and **Inter** (SIL Open Font License)

No backend or database is used. All interactivity runs client-side.

## How to Run

1. Install dependencies:
   ```
   npm install
   ```
2. Start the development server:
   ```
   npm run dev
   ```
3. Open the local URL shown in the terminal (typically `http://localhost:5173`).

To create a production build:
```
npm run build
```
The output is generated in the `dist/` folder and can be opened with any static file server.

## GitHub Pages Deployment

1. Create a new repository on GitHub and push the project files to it.
2. Run `npm run build` to produce the `dist/` folder.
3. Use the `dist/` folder as the publishing source:
   - Go to the repository **Settings → Pages**.
   - Under **Build and deployment**, choose **Deploy from a branch**.
   - Select the branch and the `dist` folder (or use a GitHub Action that builds and deploys).
4. Alternatively, install `gh-pages` and add a deploy script:
   ```
   npm install --save-dev gh-pages
   ```
   Add to `package.json`:
   ```
   "homepage": "https://<your-username>.github.io/<repo-name>",
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```
   Then run `npm run deploy`.

> Note: If deploying to a subpath (like a GitHub project page), set Vite's `base` option in `vite.config.ts` to `'/<repo-name>/'`.

## Third-Party Resources

| Resource | Purpose | License / Source |
| --- | --- | --- |
| React | UI framework | MIT License |
| Vite | Build tool | MIT License |
| TypeScript | Type system | Apache 2.0 License |
| Tailwind CSS | Styling | MIT License |
| lucide-react | Icons | ISC License |
| Space Grotesk (Google Fonts) | Display font | SIL Open Font License 1.1 |
| Inter (Google Fonts) | Body font | SIL Open Font License 1.1 |

All visual graphics are created with CSS and inline SVG. No copyrighted images are used.

## Privacy

All interactive demos — the password strength demo, the phishing quiz, and the security checkup quiz — process input **locally in the browser**. No passwords, quiz answers, or personal data are sent to a server, logged, stored, or collected. There is no login system, no tracking, and no external submission of any kind.

## Project Structure

```
├── index.html              # HTML entry point
├── public/
│   └── shield.svg          # Favicon / logo mark
├── src/
│   ├── main.tsx            # App bootstrap
│   ├── App.tsx             # Page composition
│   ├── index.css           # Global styles + theme tokens
│   ├── data.ts             # All educational content (threats, habits, quizzes, etc.)
│   ├── hooks/
│   │   ├── useReveal.ts        # Scroll-reveal animation
│   │   ├── useActiveSection.ts # Active nav highlighting
│   │   └── useTheme.ts         # Dark/light theme toggle
│   └── components/
│       ├── Navbar.tsx
│       ├── Hero.tsx
│       ├── Stats.tsx
│       ├── Footer.tsx
│       ├── BackToTop.tsx
│       ├── Logo.tsx
│       ├── SectionHeading.tsx
│       ├── SecurityTip.tsx
│       └── sections/
│           ├── Threats.tsx
│           ├── Habits.tsx
│           ├── PasswordSafety.tsx
│           ├── Phishing.tsx
│           ├── SocialMedia.tsx
│           ├── AccountRecovery.tsx
│           ├── SecurityCheckup.tsx
│           └── Checklist.tsx
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

## Educational Disclaimer

This website is created for cybersecurity awareness and educational purposes only. Always use official websites and trusted security channels when responding to real security incidents. This project is not affiliated with any real cybersecurity organization.
