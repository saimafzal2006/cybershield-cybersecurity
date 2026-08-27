import {
  Fish,
  Bug,
  Lock,
  KeyRound,
  Users,
  ShieldCheck,
  Smartphone,
  RefreshCw,
  MousePointerClick,
  DatabaseBackup,
  type LucideIcon,
} from 'lucide-react';

export type Threat = {
  num: string;
  title: string;
  icon: LucideIcon;
  description: string;
  whatItIs: string;
  howItWorks: string;
  prevention: string;
  risk: 'High' | 'Critical' | 'Severe' | 'Elevated';
  tip: string;
};

export const threats: Threat[] = [
  {
    num: '01',
    title: 'Phishing',
    icon: Fish,
    description:
      'Attackers impersonate a trusted person or organization to trick you into clicking a malicious link, opening an attachment, or revealing sensitive information.',
    whatItIs:
      'Phishing is a social attack that targets humans rather than technology. The attacker pretends to be someone you trust — a bank, a delivery service, a coworker — to manipulate you into acting before you think.',
    howItWorks:
      'You receive a message that looks legitimate but contains a link to a fake website, a harmful attachment, or a request for sensitive details. The sense of urgency pushes you to act quickly and lower your guard.',
    prevention:
      'Slow down. Verify the sender through an official channel, hover over links to check their real destination, and never enter credentials after clicking a link in a message.',
    risk: 'Critical',
    tip: 'If a message creates urgency or fear, treat it as suspicious until you can verify it independently.',
  },
  {
    num: '02',
    title: 'Malware',
    icon: Bug,
    description:
      'Malicious software designed to damage devices, steal information, spy on users, or gain unauthorized access to systems.',
    whatItIs:
      'Malware is a broad term for any software written with malicious intent. Common types include viruses that spread and damage files, trojans that disguise themselves as useful programs, and spyware that secretly monitors your activity.',
    howItWorks:
      'Malware usually arrives through infected attachments, compromised websites, pirated software, or malicious links. Once installed, it can steal data, lock files, record keystrokes, or give an attacker remote control of your device.',
    prevention:
      'Install apps only from official sources, keep your operating system and software updated, run reputable security tools, and never open unexpected attachments.',
    risk: 'Severe',
    tip: 'If an app asks for permissions it does not need, that is a warning sign — deny it.',
  },
  {
    num: '03',
    title: 'Ransomware',
    icon: Lock,
    description:
      'A type of malware that locks or encrypts your files and demands payment before giving access back — with no guarantee it ever will.',
    whatItIs:
      'Ransomware is a specific form of malware that denies you access to your own data. It encrypts your files or locks your screen, then displays a ransom demand, often in cryptocurrency.',
    howItWorks:
      'Ransomware typically enters through a malicious email attachment, a compromised download, or an unpatched vulnerability. Once it runs, it rapidly encrypts documents, photos, and backups it can reach, then demands payment for a decryption key.',
    prevention:
      'Keep regular offline backups, install security updates promptly, avoid suspicious attachments and downloads, and use reputable security software. Backups are your strongest defense — if you can restore your files, the ransom loses its power.',
    risk: 'Critical',
    tip: 'Paying a ransom does not guarantee you will get your files back. Backups do.',
  },
  {
    num: '04',
    title: 'Password Attacks',
    icon: KeyRound,
    description:
      'Techniques that try to guess, crack, or reuse passwords to break into your accounts.',
    whatItIs:
      'Password attacks include brute force (trying many combinations automatically), password guessing (using personal information), and credential stuffing (testing username and password pairs stolen from other breaches).',
    howItWorks:
      'Attackers use automated tools and leaked databases. If you reuse a password, a single breach can give attackers the key to every account that shares it. Short or obvious passwords fall to brute force in seconds.',
    prevention:
      'Use a long, unique password or passphrase for every important account. Enable multi-factor authentication so a stolen password alone is not enough to get in.',
    risk: 'High',
    tip: 'A different password for every important account stops one breach from becoming many.',
  },
  {
    num: '05',
    title: 'Social Engineering',
    icon: Users,
    description:
      'Manipulating people — not technology — to gain access, information, or trust.',
    whatItIs:
      'Social engineering attacks exploit human behavior rather than software flaws. An attacker may act friendly, authoritative, or distressed to convince you to bypass normal security procedures.',
    howItWorks:
      'Example: someone calls pretending to be from IT support, says there is a problem with your account, and asks for your password or a verification code to "fix" it. The request sounds reasonable, but legitimate support will never ask for your password.',
    prevention:
      'Verify identity through an official channel before sharing anything sensitive. Be skeptical of any request that pressures you to bypass normal procedures or share credentials and codes.',
    risk: 'Elevated',
    tip: 'Legitimate organizations never ask for your password or verification codes. Anyone who does is an attacker.',
  },
];

export type Habit = {
  num: string;
  title: string;
  icon: LucideIcon;
  description: string;
};

export const habits: Habit[] = [
  {
    num: '01',
    title: 'Use Strong & Unique Passwords',
    icon: KeyRound,
    description:
      'Use long, unique passwords or passphrases for every important account. Never reuse the same password across multiple services — one breach should never unlock your whole digital life.',
  },
  {
    num: '02',
    title: 'Enable MFA',
    icon: ShieldCheck,
    description:
      'Turn on multi-factor authentication wherever it is available. Even if your password is stolen, MFA blocks most sign-in attempts by requiring a second step only you can provide.',
  },
  {
    num: '03',
    title: 'Keep Software Updated',
    icon: RefreshCw,
    description:
      'Install security updates for your operating system, apps, and devices as soon as they arrive. Updates fix vulnerabilities that attackers are already learning to exploit.',
  },
  {
    num: '04',
    title: 'Think Before You Click',
    icon: MousePointerClick,
    description:
      'Pause before interacting with unexpected links, attachments, or requests. A few seconds of skepticism is the single most effective security habit you can build.',
  },
  {
    num: '05',
    title: 'Back Up Important Data',
    icon: DatabaseBackup,
    description:
      'Keep copies of important files in a secure, separate location. If your device is lost, stolen, or hit by ransomware, a recent backup turns a disaster into a minor inconvenience.',
  },
];

export type PhishingSign = {
  title: string;
  description: string;
};

export const phishingSigns: PhishingSign[] = [
  {
    title: 'Unexpected messages',
    description:
      'You receive a message you were not expecting about an account, package, payment, or prize.',
  },
  {
    title: 'Urgent or threatening language',
    description:
      'The message pressures you to act immediately or warns of a penalty, suspension, or loss.',
  },
  {
    title: 'Suspicious sender addresses',
    description:
      'The sender address looks almost right but contains extra characters or a wrong domain.',
  },
  {
    title: 'Strange or shortened URLs',
    description:
      'Links use URL shorteners or odd domains that do not match the organization they claim to be.',
  },
  {
    title: 'Requests for passwords or sensitive data',
    description:
      'You are asked for a password, verification code, or personal information no legitimate service would request.',
  },
  {
    title: 'Unexpected attachments',
    description:
      'An attachment arrives from an unfamiliar or slightly off sender, especially invoices or "documents".',
  },
  {
    title: 'Too-good-to-be-true offers',
    description:
      'You have won a prize, inherited money, or been offered a deal that seems impossibly generous.',
  },
  {
    title: 'Spelling and grammar mistakes',
    description:
      'Professional organizations rarely send messages full of obvious spelling and grammar errors.',
  },
  {
    title: 'Requests to bypass normal procedures',
    description:
      'You are asked to skip a usual step, pay outside normal channels, or keep something secret.',
  },
  {
    title: 'Links that do not match the claimed site',
    description:
      'The visible link text says one website, but the real destination is a different, unrelated address.',
  },
];

export type PhishingScenario = {
  id: number;
  scenario: string;
  answer: 'phishing' | 'safe';
  explanation: string;
  tip: string;
};

export const phishingScenarios: PhishingScenario[] = [
  {
    id: 1,
    scenario:
      'Your bank sends an unexpected message asking you to click a link immediately to prevent your account from being suspended.',
    answer: 'phishing',
    explanation:
      'Banks rarely suspend accounts without prior notice and never ask you to act through a link in an unsolicited message. The urgency is designed to make you act before you think.',
    tip: 'If an account warning seems real, open your bank app or type the official website yourself — never use the link in the message.',
  },
  {
    id: 2,
    scenario:
      'A coworker emails you from their usual address asking you to review a shared document you were already expecting for a project you are both working on.',
    answer: 'safe',
    explanation:
      'This fits a normal work pattern: a known sender, a known address, and a document you were expecting. Still, it is good practice to confirm the link destination before clicking.',
    tip: 'Even expected requests deserve a quick check. Hover over links to confirm they point where they claim.',
  },
  {
    id: 3,
    scenario:
      'You receive a text claiming you have won a smartphone in a contest you never entered, and you must pay a small "shipping fee" to claim it.',
    answer: 'phishing',
    explanation:
      'You cannot win a contest you never entered, and legitimate prizes do not require upfront fees. This is a classic too-good-to-be-true lure designed to collect your payment details.',
    tip: 'If you did not enter, you did not win. Never pay a fee to claim a prize.',
  },
  {
    id: 4,
    scenario:
      'A streaming service emails you to confirm a password change that you just made yourself a few minutes earlier.',
    answer: 'safe',
    explanation:
      'This is a legitimate confirmation triggered by your own action. It is actually a healthy security feature — if you had not made the change, this email would be your warning.',
    tip: 'Treat unexpected password-change emails as a red flag. If one arrives and you did not change your password, secure the account immediately.',
  },
  {
    id: 5,
    scenario:
      'Someone calls claiming to be from IT support, says your account shows suspicious activity, and asks for your password and a verification code to "secure" it.',
    answer: 'phishing',
    explanation:
      'Legitimate IT support will never ask for your password or a verification code. This is social engineering — the caller uses authority and urgency to make a bad request sound reasonable.',
    tip: 'Hang up and contact your organization through its official support channel. Real support never needs your password.',
  },
];

export type SocialPractice = {
  title: string;
  description: string;
};

export const socialPractices: SocialPractice[] = [
  {
    title: 'Keep personal information private',
    description:
      'Share as little personal detail publicly as possible. Birthdays, addresses, and family names can be used to impersonate you or reset your accounts.',
  },
  {
    title: 'Review privacy settings',
    description:
      'Check who can see your posts, friend list, and contact details. Limit visibility to people you actually know.',
  },
  {
    title: 'Be careful with unknown requests',
    description:
      'Treat friend or follow requests from strangers with suspicion. Fake profiles are a common starting point for scams.',
  },
  {
    title: 'Avoid sharing sensitive information',
    description:
      'Never post details like your full address, daily routine, travel plans, or financial information.',
  },
  {
    title: 'Avoid suspicious links',
    description:
      'Even on social media, links can lead to phishing sites or malware. Verify before you click.',
  },
  {
    title: 'Watch for fake profiles',
    description:
      'Look for new accounts with few posts, stock photos, or profiles that mimic someone you know. When in doubt, verify another way.',
  },
  {
    title: 'Think before posting',
    description:
      'Once something is online, it is hard to take back. Consider how a post could be misused now or in the future.',
  },
  {
    title: 'Never share passwords',
    description:
      'No legitimate person or service will ever ask for your password. Sharing it ends your control over that account.',
  },
  {
    title: 'Never share verification codes',
    description:
      'A verification code is a one-time key to your account. Anyone who asks for it is trying to get in.',
  },
  {
    title: 'Be careful sharing your location',
    description:
      'Posting your live location tells strangers where you are. Share location details after the fact, not in real time.',
  },
  {
    title: 'Report suspicious accounts',
    description:
      'Use the platform report tools for fake profiles, scams, or abusive behavior. Reporting protects others too.',
  },
];

export type RecoveryStep = {
  num: string;
  title: string;
  description: string;
};

export const recoverySteps: RecoveryStep[] = [
  {
    num: '01',
    title: 'Secure the Account',
    description:
      'Change the password immediately if you still have access. Choose a long, unique password you have never used anywhere else.',
  },
  {
    num: '02',
    title: 'Sign Out Other Sessions',
    description:
      'Remove unfamiliar devices and active sessions from the account security settings so the attacker loses access.',
  },
  {
    num: '03',
    title: 'Enable MFA',
    description:
      'Turn on multi-factor authentication so future sign-in attempts require a second step only you can provide.',
  },
  {
    num: '04',
    title: 'Check Recovery Information',
    description:
      'Verify the recovery email addresses and phone numbers on the account. Remove any contact details the attacker may have added.',
  },
  {
    num: '05',
    title: 'Check Account Activity',
    description:
      'Look for unauthorized posts, messages, purchases, or settings changes. Note anything unfamiliar for your records.',
  },
  {
    num: '06',
    title: 'Contact the Platform',
    description:
      'Use the platform official account recovery or security process if you have lost access or need help reverting changes.',
  },
  {
    num: '07',
    title: 'Secure Other Accounts',
    description:
      'If the compromised password was reused elsewhere, change those passwords too. One breach should not cascade into many.',
  },
  {
    num: '08',
    title: 'Warn Your Contacts',
    description:
      'Let your contacts know your account may have sent suspicious messages so they do not fall for the same trick.',
  },
];

export type QuizQuestion = {
  id: number;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    question: 'Which password is the strongest choice?',
    options: [
      'password123',
      'your birth date',
      'correct-horse-battery-style-passphrase',
      'qwerty',
    ],
    correctIndex: 2,
    explanation:
      'Long passphrases made of unrelated words are far harder to crack than short or predictable passwords.',
  },
  {
    id: 2,
    question: 'What does MFA (multi-factor authentication) do?',
    options: [
      'Stores all your passwords in one place',
      'Adds a second verification step beyond your password',
      'Speeds up your login by skipping the password',
      'Encrypts your internet connection',
    ],
    correctIndex: 1,
    explanation:
      'MFA requires a second step, like a code or approval, so a stolen password alone is not enough to get in.',
  },
  {
    id: 3,
    question: 'An email says your account will be suspended unless you click a link right now. What is the safest response?',
    options: [
      'Click the link immediately to fix it',
      'Forward it to all your contacts',
      'Ignore the link and check your account through the official website or app',
      'Reply with your password to confirm your identity',
    ],
    correctIndex: 2,
    explanation:
      'Urgency is a classic phishing signal. Go to the official site yourself instead of using the link.',
  },
  {
    id: 4,
    question: 'Why are software updates important for security?',
    options: [
      'They make the screen brighter',
      'They fix vulnerabilities that attackers could exploit',
      'They are required to use social media',
      'They automatically back up your files',
    ],
    correctIndex: 1,
    explanation:
      'Updates patch security flaws. Delaying them leaves known vulnerabilities open to attackers.',
  },
  {
    id: 5,
    question: 'Which is the best social-media privacy practice?',
    options: [
      'Share your full address publicly so friends can find you',
      'Keep personal details private and review your privacy settings',
      'Accept every friend request to grow your network',
      'Post your daily routine so people know you are active',
    ],
    correctIndex: 1,
    explanation:
      'Limiting what you share and reviewing settings reduces what attackers and strangers can learn about you.',
  },
  {
    id: 6,
    question: 'How often should you back up important files?',
    options: [
      'Never — nothing bad will happen',
      'Only after you lose data once',
      'Regularly, and keep at least one backup separate from your device',
      'Once every few years',
    ],
    correctIndex: 2,
    explanation:
      'Regular, separate backups mean a lost device or ransomware attack becomes an inconvenience, not a disaster.',
  },
  {
    id: 7,
    question: 'A link claims to be your bank but the URL does not match the bank real website. What should you do?',
    options: [
      'Enter your login to check if it is real',
      'Do not click and report it as suspicious',
      'Share it with friends to see if it works for them',
      'Save it for later',
    ],
    correctIndex: 1,
    explanation:
      'A mismatched URL is a strong phishing sign. Never enter credentials — report and avoid it.',
  },
  {
    id: 8,
    question: 'You realize your email account was hacked. What is the first step?',
    options: [
      'Wait a few days to see if it resolves itself',
      'Change the password immediately if you still have access',
      'Post about it on social media',
      'Do nothing — the platform will fix it',
    ],
    correctIndex: 1,
    explanation:
      'If you still have access, change the password right away to lock the attacker out as fast as possible.',
  },
  {
    id: 9,
    question: 'Using public Wi-Fi, which action is safest for sensitive tasks?',
    options: [
      'Log in to your bank freely — it is fine',
      'Avoid sensitive logins, or use a trusted VPN',
      'Turn off your device firewall',
      'Share your screen so others can help',
    ],
    correctIndex: 1,
    explanation:
      'Public Wi-Fi can be monitored. Avoid sensitive logins on it, or protect your connection with a trusted VPN.',
  },
  {
    id: 10,
    question: 'Someone contacts you unexpectedly asking for a verification code. What should you do?',
    options: [
      'Share it — they probably need it',
      'Never share it; verify the request through an official channel',
      'Post the code online so they can find it',
      'Send it to a few friends first',
    ],
    correctIndex: 1,
    explanation:
      'Verification codes are one-time keys. Anyone who asks for one unexpectedly is trying to access your account.',
  },
];

export type ChecklistItem = {
  title: string;
  description: string;
};

export const checklistItems: ChecklistItem[] = [
  { title: 'Use unique passwords', description: 'A different long password for every important account.' },
  { title: 'Enable MFA', description: 'Turn on multi-factor authentication wherever it is offered.' },
  { title: 'Update software', description: 'Install security updates for your devices and apps.' },
  { title: 'Check suspicious links', description: 'Hover and verify the real destination before clicking.' },
  { title: 'Backup important files', description: 'Keep a separate, recent copy of what matters most.' },
  { title: 'Review privacy settings', description: 'Limit what strangers can see on your accounts.' },
  { title: 'Never share verification codes', description: 'Codes are one-time keys — no one legitimate asks for them.' },
  { title: 'Report suspicious activity', description: 'Use official report tools to protect yourself and others.' },
];

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Threats', href: '#threats' },
  { label: 'Cyber Habits', href: '#habits' },
  { label: 'Password Safety', href: '#passwords' },
  { label: 'Phishing', href: '#phishing' },
  { label: 'Social Media', href: '#social' },
  { label: 'Account Recovery', href: '#recovery' },
  { label: 'Security Checkup', href: '#checkup' },
];

export const securityTips = [
  'Pause before clicking unexpected links.',
  'Use a different password for every important account.',
  'Never share a verification code with someone who contacts you unexpectedly.',
  'Updates are not annoyances — they are patched security holes.',
  'If it creates urgency, verify it through an official channel first.',
];
