// =============================================================
// FINANCIAL LITERACY SESSIONS — Content Store
// 10 Interactive Sessions for School Students
// =============================================================

export type Activity = {
  id: string;
  name: string;
  objective: string;
  how: string;
  participation: string;
  result: string;
  tribeReflection: string;
  studentReaction: string;
  accent: "sky" | "lavender" | "coral" | "yellow";
};

export const activities: Activity[] = [
  {
    id: "intro-tribe-finance",
    name: "Intro to Tribe & Finance",
    objective: "Demystify money myths and introduce basic economic literacy for schools.",
    how: "Interactive open forum discussing everyday financial choices, inflation, and mindset.",
    participation: "Students openly shared their earliest perceptions of money and savings.",
    result: "Established an approachable, doubt-friendly classroom environment.",
    tribeReflection: "Seeing students realize finance is a daily life skill was remarkable.",
    studentReaction: "“I finally understood why money isn't just about saving in a piggy bank.”",
    accent: "sky",
  },
  {
    id: "smart-budgeting",
    name: "Smart Budgeting & Saving, Credit Cards & Digital Payments",
    objective: "Master cashflow budgeting and avoid impulse credit card traps.",
    how: "Simulated monthly expenses, 50/30/20 allocation drills, and UPI traps breakdown.",
    participation: "Teams audited mock teen monthly budgets and spotted wasteful leaks.",
    result: "Every student built a personalized monthly budget with an emergency fund.",
    tribeReflection: "Teenagers grasped the danger of revolving credit interest immediately.",
    studentReaction: "“The credit card minimum-due trap was an eye-opener!”",
    accent: "coral",
  },
  {
    id: "basics-insurance",
    name: "Basics of Insurance",
    objective: "Understand risk transfer and why insurance is not an investment.",
    how: "Examining real crisis scenarios where lack of insurance wiped out family savings.",
    participation: "Students debated term vs endowment policies and health coverage limits.",
    result: "Clear understanding of safeguarding health, life, and assets against catastrophic risk.",
    tribeReflection: "Students asked practical questions about protecting their families.",
    studentReaction: "“Now I understand insurance is protection, not a money-multiplying scheme.”",
    accent: "yellow",
  },
  {
    id: "online-scams",
    name: "Online Scams & Fraud Safety",
    objective: "Spot digital fraud, phishing, fake tip telegram groups, and Ponzi schemes.",
    how: "Audited genuine scam screenshots and dissected fraudsters' psychological tricks.",
    participation: "Teams identified red flags in suspicious job offers and crypto schemes.",
    result: "Equipped students with a high defense reflex against get-rich-quick lures.",
    tribeReflection: "Financial self-defense is just as critical as earning money.",
    studentReaction: "“I showed these scam screenshots to my parents so they don't get tricked.”",
    accent: "coral",
  },
  {
    id: "intro-stocks",
    name: "Intro to Stocks & Markets",
    objective: "Understand equity ownership, stock exchange mechanics, and price discovery.",
    how: "Deconstructing familiar consumer brands and tracing how shares are traded.",
    participation: "Students explored how companies raise capital and what makes stock prices move.",
    result: "Replaced speculative gambling notions with sound equity ownership principles.",
    tribeReflection: "Demystifying market mechanics gave them a completely new outlook on businesses.",
    studentReaction: "“Owning a share means owning a real piece of a company's future profits.”",
    accent: "sky",
  },
  {
    id: "compounding-growth",
    name: "Power of Compounding & Growth",
    objective: "Visualize exponential mathematical growth and starting early.",
    how: "Simulating 10, 20, and 30-year systematic investment trajectories.",
    participation: "Students compared starting at age 18 vs age 28 with modest amounts.",
    result: "Discovered that time in the market consistently beats timing the market.",
    tribeReflection: "The visual compounding graph caused an unforgettable 'aha!' moment.",
    studentReaction: "“Starting with just ₹500 today beats waiting until I have a big salary.”",
    accent: "lavender",
  },
  {
    id: "taxes-earning",
    name: "Basics of Taxes & Earning",
    objective: "Demystify direct vs indirect taxes, GST, and reading payslips.",
    how: "Walking through simple income tax brackets, deductions, and consumer bills.",
    participation: "Students calculated GST on everyday restaurant and store bills.",
    result: "Understood where taxes go and how to plan deductions legally.",
    tribeReflection: "Taxes ceased being scary once broken down into simple percentages.",
    studentReaction: "“I now know how to read the tax breakdown on any store receipt.”",
    accent: "yellow",
  },
  {
    id: "startup-vc",
    name: "Startup Investments & VC",
    objective: "Learn how modern businesses raise venture capital and scale.",
    how: "Analyzing real startup pitch decks, unit economics, and competitive moats.",
    participation: "Student teams acted as angel investors picking between business models.",
    result: "Gained an understanding of entrepreneurial risk, burn rates, and valuation.",
    tribeReflection: "Their instincts for identifying sustainable business models were sharp.",
    studentReaction: "“It made me want to build my own startup with healthy unit economics!”",
    accent: "coral",
  },
  {
    id: "future-planning",
    name: "Financial Planning for the Future",
    objective: "Formulate a personalized multi-year financial independence roadmap.",
    how: "Goal-based planning: education, emergency funds, retirement, and diversification.",
    participation: "Each student mapped out 5-year and 10-year milestones.",
    result: "A cohesive, actionable roadmap to guide lifelong financial choices.",
    tribeReflection: "Synthesizing all 10 topics into one personal plan cemented their learning.",
    studentReaction: "“I feel prepared and in control of my future finances.”",
    accent: "sky",
  },
];

export type StudentQuote = {
  id: string;
  quote: string;
  author: string;
  school: string;
  session: string;
  accent: "sky" | "lavender" | "coral" | "yellow";
};

export const studentQuotes: StudentQuote[] = [
  {
    id: "q1",
    quote: "Afan's intro session made me realize finance isn't dry formulas—it's about making smart everyday decisions.",
    author: "Rohan S.",
    school: "School Student",
    session: "Intro to Tribe & Finance",
    accent: "sky",
  },
  {
    id: "q2",
    quote: "Jeevan showed us how credit cards make money from high interest. I'll always clear my balance in full.",
    author: "Ananya M.",
    school: "School Student",
    session: "Smart Budgeting & Credit Cards",
    accent: "coral",
  },
  {
    id: "q3",
    quote: "Chirag explained insurance as risk protection rather than investment. That completely flipped my view.",
    author: "Aditya K.",
    school: "School Student",
    session: "Basics of Insurance",
    accent: "yellow",
  },
  {
    id: "q4",
    quote: "Manoj's breakdown of online scam techniques gave me exact tools to protect my grandparents from cyber fraud.",
    author: "Sneha P.",
    school: "School Student",
    session: "Online Scams & Safety",
    accent: "coral",
  },
  {
    id: "q5",
    quote: "Chaitra simplified taxes so clearly. I finally understand the difference between direct taxes and GST.",
    author: "Karthik R.",
    school: "School Student",
    session: "Basics of Taxes",
    accent: "yellow",
  },
  {
    id: "q6",
    quote: "Seeing the compounding graph was mind-blowing. Starting an SIP at 18 gives you an unbeatable head start.",
    author: "Divya N.",
    school: "School Student",
    session: "Power of Compounding",
    accent: "lavender",
  },
];

export type Feedback = {
  id: string;
  quote: string;
  theme: "Learning" | "Confidence" | "Engagement" | "Finance" | "Technology" | "Activities";
  author: string;
};

export const feedback: Feedback[] = [
  {
    id: "f1",
    quote: "The interactive exercises made complicated concepts like compounding and insurance feel intuitive.",
    theme: "Finance",
    author: "Student",
  },
  {
    id: "f2",
    quote: "I felt comfortable asking any doubt without fear of being judged.",
    theme: "Confidence",
    author: "Student",
  },
  {
    id: "f3",
    quote: "The sessions were vibrant and full of discussions. Time flew by so fast!",
    theme: "Engagement",
    author: "Student",
  },
  {
    id: "f4",
    quote: "I now know the difference between risk management and pure speculation.",
    theme: "Learning",
    author: "Student",
  },
  {
    id: "f5",
    quote: "The budgeting simulation was practical and fun. I already made my first budget spreadsheet.",
    theme: "Activities",
    author: "Student",
  },
  {
    id: "f6",
    quote: "Understanding digital payment fraud helps me browse the internet much more safely.",
    theme: "Technology",
    author: "Student",
  },
];

export type TimelineStop = {
  id: string;
  time: string;
  title: string;
  description: string;
};

export const timeline: TimelineStop[] = [
  {
    id: "t1",
    time: "Session 1",
    title: "Intro to Tribe & Finance",
    description: "Setting the foundation and debunking common financial myths with Afan.",
  },
  {
    id: "t2",
    time: "Session 2",
    title: "Smart Budgeting & Saving, Credit Cards & Digital Payments",
    description: "Constructing budgets and dissecting digital payment traps with Jeevan.",
  },
  {
    id: "t3",
    time: "Session 3 & 4",
    title: "Credit Discipline & Basics of Insurance",
    description: "Understanding risk transfer, life vs health covers, and managing debt with Chirag.",
  },
  {
    id: "t4",
    time: "Session 5",
    title: "Online Scams & Fraud Safety",
    description: "Auditing phishing lures and social media trading scams with Manoj.",
  },
  {
    id: "t5",
    time: "Session 6 & 7",
    title: "Stocks, Markets & The Power of Compounding",
    description: "Demystifying equity ownership and long-term exponential growth.",
  },
  {
    id: "t6",
    time: "Session 8",
    title: "Basics of Taxes & Earning",
    description: "Direct vs indirect taxes, deductions, and payslip breakdowns with Chaitra.",
  },
  {
    id: "t7",
    time: "Session 9 & 10",
    title: "Startup Investments, VC & Future Financial Planning",
    description: "Analyzing venture investments and formulating a lifelong financial roadmap with Afan.",
  },
];

export type ImpactStat = {
  id: string;
  value: number;
  suffix: string;
  label: string;
};

export const impactStats: ImpactStat[] = [
  { id: "s1", value: 10, suffix: "", label: "Interactive Sessions" },
  { id: "s2", value: 100, suffix: "%", label: "Practical Scenarios" },
  { id: "s3", value: 100, suffix: "+", label: "Students Reached" },
  { id: "s4", value: 11, suffix: "", label: "Classroom Photos Documented" },
  { id: "s5", value: 250, suffix: "+", label: "Student Questions Answered" },
  { id: "s6", value: 0, suffix: "", label: "Dry Textbook Formulas" },
];

export const rippleNodes = [
  "Curiosity",
  "Smart Budgeting",
  "Risk Awareness",
  "Compound Investing",
  "Scam Defense",
  "Financial Independence",
];

export const behindScenes = [
  {
    id: "b1",
    title: "Curriculum Tailoring",
    text: "Designing 10 relatable financial topics specifically calibrated for high school students.",
  },
  {
    id: "b2",
    title: "Hands-on Materials",
    text: "Preparing real bill breakdowns, budget worksheets, and scam case studies.",
  },
  {
    id: "b3",
    title: "Photo Documentation",
    text: "Capturing high-resolution classroom moments across Afan, Jeevan, and Chirag's sessions.",
  },
  {
    id: "b4",
    title: "Open Questioning Space",
    text: "Creating an atmosphere where students freely ask about pocket money, credit cards, and investments.",
  },
  {
    id: "b5",
    title: "Lifelong Habit Building",
    text: "Empowering teenagers with financial defense and investment intuition to last decades.",
  },
];
