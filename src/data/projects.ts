export interface Project {
  id: string;
  title: string;
  tagline: string;
  problem: string;
  solution: string;
  process: string;
  tech: string[];
  challenges: { title: string; solution: string }[];
  results: string[];
  github?: string;
  live?: string;
  color: string;
  icon: string;
  category: string; // primary domain
}

export const projects: Project[] = [
  {
    id: "upi-sentinel",
    title: "UPI Sentinel",
    tagline: "Contextual fraud detection — because one bad transaction isn't fraud, but five in a row is.",
    problem:
      "Traditional fraud systems evaluate transactions in isolation, missing the behavioral patterns that define real fraud — like rapid account draining across multiple transfers.",
    solution:
      "A CNN + BiLSTM + Attention deep learning pipeline that analyzes sliding-window transaction sequences to detect fraud from behavioral context, not just individual signals.",
    process:
      "Ran three distinct experiments — random undersampling (F1: 0.23), class weights (F1: 0.57), and finally CNN+BiLSTM+Attention (F1: 0.83) — systematically isolating what actually moved the needle on a severely imbalanced dataset.",
    tech: ["Python", "TensorFlow/Keras", "FastAPI", "Streamlit", "Scikit-learn", "Docker", "Hugging Face Spaces"],
    challenges: [
      {
        title: "Extreme class imbalance",
        solution:
          "Tested undersampling, SMOTE, and class weights iteratively. Class weights + sequence modeling together pushed Precision from 0.13 to 0.91 without sacrificing meaningful Recall.",
      },
      {
        title: "Contextual inference in real-time",
        solution:
          "Built a per-user sliding-window transaction buffer in the FastAPI layer so each prediction carries the last N transactions as context — stateful inference without a stateful model.",
      },
    ],
    results: [
      "ROC-AUC of 0.99, F1 of 0.83 on held-out test set",
      "Deployed live on Hugging Face Spaces — publicly accessible",
      "Precision improved from 0.13 (baseline) to 0.91 through systematic experimentation",
    ],
    github: "https://github.com/DeemonDuck",
    live: "https://deemonduck-upi-sentinel.hf.space",
    color: "#6c63ff",
    icon: "🚨",
    category: "Deep Learning",
  },
  {
    id: "carbonlens",
    title: "CarbonLens",
    tagline: "A carbon calculator that respects you — answer once, understand your impact through story.",
    problem:
      "Carbon footprint tools either bury users in daily logging until they quit, or spit out raw numbers like '437 kg CO₂' that mean nothing to anyone not already a climate researcher.",
    solution:
      "A layered pipeline that turns a single honest questionnaire into a relatable story: real emission factors, category breakdowns, and equivalents like 'that's 4 Delhi–Jaipur road trips' — never a guilt trip.",
    process:
      "Designed the system in four clean layers (Input → Calculation → Awareness → Tips) with typed Pydantic contracts between each. The LLM personalization layer (Claude) degrades gracefully to rule-based fallbacks if no API key is configured.",
    tech: ["Python", "Streamlit", "Pydantic", "Anthropic Claude API", "Pytest", "mypy", "ruff", "GitHub Actions"],
    challenges: [
      {
        title: "Making numbers feel real without being preachy",
        solution:
          "Built an 'Awareness Translator' layer that converts kg CO₂ into relatable equivalents tied to the user's dominant category — the narrative is grounded in their data, not generic climate facts.",
      },
      {
        title: "Accessibility as a first-class concern in Streamlit",
        solution:
          "Every widget carries visible labels, help tooltips, and stable keys. Color contrast verified against WCAG 2.1 AA (lowest pair: 7.2:1). Section captions provide context before inputs — all within Streamlit's supported API.",
      },
    ],
    results: [
      "56 tests across all 4 layers including headless UI flow via Streamlit AppTest",
      "CI enforces lint (ruff) + type-check (mypy) + tests on every push",
      "Live on Streamlit Community Cloud — zero-setup deployment",
    ],
    github: "https://github.com/DeemonDuck/CarbonLens",
    live: "https://carbon-lens-1.streamlit.app/",
    color: "#00d4aa",
    icon: "🌍",
    category: "AI / Python",
  },
  {
    id: "redrob-ranker",
    title: "Redrob Ranker",
    tagline: "100,000 candidates → top 100 with reasoning. In under 5 minutes, CPU only, zero network calls.",
    problem:
      "Hackathon challenge: rank 100K candidate profiles for a Senior ML Engineer role and return the top 100 with one-sentence reasoning per candidate — fast, deterministic, no external APIs.",
    solution:
      "A five-layer sequential pipeline: honeypot detection → hard disqualifiers → JD-fit scoring → location/availability → platform signals → ranked output with fact-grounded reasoning.",
    process:
      "Designed each layer to be independently testable and configurable. Layer 2's SIGNAL_WEIGHTS, Layer 3's city tiers, and Layer 4's formula weights are all single-file changes — swapping to a different target role is a config edit, not a rewrite.",
    tech: ["Python", "Pandas", "NumPy", "Streamlit", "PyYAML"],
    challenges: [
      {
        title: "Honeypot detection without false positives",
        solution:
          "Three deterministic checks: impossible tenure (role predates company), expert skills with zero usage evidence, and career history vs claimed XP mismatch. A fourth Jaccard-based duplicate check was implemented but disabled after finding 36K legitimate candidates triggered it.",
      },
      {
        title: "Reasoning without an LLM",
        solution:
          "Layer 5 generates reasoning from real candidate facts: current title, matched JD dimensions, verified skills, and honest concerns (notice period, passive status). No hallucination possible — it can only state what's in the data.",
      },
    ],
    results: [
      "Processes 100K profiles in under 5 minutes on CPU",
      "Hackathon submission with official validator passing all checks",
      "Pipeline is fully modular — changing target role requires editing constants only",
    ],
    github: "https://github.com/DeemonDuck",
    live: "https://redrobe-candidate-ranker.streamlit.app/",
    color: "#f59e0b",
    icon: "🏆",
    category: "ML Pipeline",
  },
  {
    id: "job-tracker",
    title: "Job Tracker",
    tagline: "A recruiter calls. You already know exactly what you applied for and what they asked.",
    problem:
      "Applying to 50+ jobs across LinkedIn, Naukri, Internshala, and company portals — then a callback arrives and you can't remember the role, the criteria, or even the company. A spreadsheet you forget to update doesn't fix this.",
    solution:
      "A full-stack pipeline: FastAPI backend + React kanban dashboard + Chrome/Edge browser extension that one-click captures applications while you apply, auto-filling company/role/platform from the page.",
    process:
      "Built in deliberate layers — backend first (tested), then dashboard (visual pipeline), then extension (zero extra effort to log). The extension and dashboard are both 'clients' of the same API; adding the extension never required touching dashboard code.",
    tech: ["FastAPI", "React", "SQLite", "SQLAlchemy", "Pydantic", "Chrome Extensions API", "PWA / Service Worker"],
    challenges: [
      {
        title: "Browser extension message-passing architecture",
        solution:
          "Content scripts read page DOM but can't call the backend (browser security). Popup script handles API calls. The flow: content script reads page → popup requests data via chrome.tabs.sendMessage → popup pre-fills form → user confirms → fetch to backend.",
      },
      {
        title: "iPad access without cloud deployment",
        solution:
          "PWA manifest + Apple meta tags make it installable as a home-screen app. Works on local WiFi with --host 0.0.0.0 on the backend. Offline support deferred — service workers require HTTPS, which makes more sense post-deployment.",
      },
    ],
    results: [
      "Full-stack system: API + kanban UI + browser extension working in concert",
      "Auto-capture on LinkedIn, Naukri, Internshala, Indeed — manual fallback on any site",
      "Installable as iPad PWA on local network",
    ],
    github: "https://github.com/DeemonDuck",
    color: "#ff6584",
    icon: "📋",
    category: "Full-Stack",
  },
  {
    id: "guestflow-ai",
    title: "GuestFlow AI",
    tagline: "Event-driven hospitality automation — from booking confirmation to post-stay follow-up.",
    problem:
      "Hotel guest workflows are manual and reactive: check-ins trigger emails by hand, complaints get lost in queues, and VIP escalations depend on whoever happens to be watching.",
    solution:
      "A multi-agent orchestration platform where webhook events are routed to specialized agents (pre-stay, in-stay, post-stay) with RAG-powered guest support using local LLM inference — no cloud API required.",
    process:
      "Built with a clean separation between the orchestrator (routing logic), agents (domain-specific workflow), tools (email/CRM/ticket), and the RAG layer (FAQ retrieval). Local Ollama + Phi-3 means the whole system runs offline.",
    tech: ["Python", "FastAPI", "Streamlit", "SQLite", "LangChain Architecture", "Ollama + Phi-3", "RAG"],
    challenges: [
      {
        title: "VIP escalation and urgency detection without hardcoded rules",
        solution:
          "The orchestrator uses keyword and sentiment signals to detect escalation triggers (refund, complaint, urgent), then routes to a priority workflow with CRM history context injected into the LLM prompt.",
      },
      {
        title: "Local LLM inference that actually works offline",
        solution:
          "Ollama + Phi-3 runs entirely on the local machine. The RAG layer retrieves relevant FAQ chunks before each LLM call, keeping responses grounded and reducing hallucination without internet.",
      },
    ],
    results: [
      "End-to-end event-driven workflow: booking → in-stay support → post-stay follow-up",
      "VIP escalation, urgency detection, and CRM persistence all working",
      "Fully offline capable — no cloud API dependencies",
    ],
    github: "https://github.com/DeemonDuck/guestflow-ai",
    color: "#8b5cf6",
    icon: "🏨",
    category: "AI Agents",
  },
  {
    id: "ipo-sentinel",
    title: "IPO Sentinel",
    tagline: "Can pre-listing subscription data predict whether an IPO is worth applying to?",
    problem:
      "Retail investors apply to IPOs based on GMP gossip and gut feel. The question is whether structured, pre-listing signals — subscription demand, institutional interest, market sentiment — contain real predictive power.",
    solution:
      "A multi-model ML pipeline trained on Indian mainboard IPOs (2010–2025) using engineered features like Demand_Gap (institutional vs retail imbalance) and Nifty_Return_7d. Binary target: listing gain > 10%.",
    process:
      "Strict no-leakage discipline — only pre-listing, publicly available data. Stratified K-Fold cross-validation across 7 model families (Logistic Regression → CatBoost). Consistent ROC-AUC of 0.90–0.93 across all models confirmed signal strength, not overfitting.",
    tech: ["Python", "Scikit-learn", "XGBoost", "LightGBM", "CatBoost", "Pandas", "yfinance", "Jupyter"],
    challenges: [
      {
        title: "No-leakage feature discipline",
        solution:
          "Explicitly excluded Grey Market Premium (post-listing signal) and any feature derived from listing price. Every feature must be knowable before the IPO closes — this constraint is what makes the results credible.",
      },
      {
        title: "Consistent signal across 7 diverse model families",
        solution:
          "ROC-AUC of 0.90–0.93 across Logistic Regression, SVM, Random Forest, XGBoost, LightGBM, and CatBoost confirmed the signal is in the features (especially Demand_Gap), not model complexity.",
      },
    ],
    results: [
      "CatBoost best performer: ROC-AUC 0.927",
      "Consistent 0.90–0.93 AUC range across all 7 models",
      "Demand_Gap feature alone is highly informative — feature > model complexity",
    ],
    github: "https://github.com/DeemonDuck",
    color: "#10b981",
    icon: "📈",
    category: "ML / Finance",
  },
  {
    id: "ai-job-assist",
    title: "AI Job Assist",
    tagline: "Automated job discovery pipeline — because searching five tabs for the same keywords is broken.",
    problem:
      "Job hunting means repeating the same keyword searches across Internshala, LinkedIn, Naukri — scrolling, copy-pasting into spreadsheets, missing listings that expired last week.",
    solution:
      "A Playwright-based dynamic discovery pipeline that navigates job platforms like a human would (handling popups, pagination, dynamic URLs), normalizes listings, and stores them with full category metadata for future AI matching.",
    process:
      "Phase 1 deliberately focused on getting the data pipeline solid: Playwright over static requests (JS-heavy sites block naive scrapers), structured DB over flat files (schema supports future analytics), category metadata on every job (enables personalization downstream).",
    tech: ["Python", "Playwright", "FastAPI", "SQLAlchemy", "SQLite", "Pydantic"],
    challenges: [
      {
        title: "Resilience to site structure changes",
        solution:
          "Instead of hardcoded URLs, the collector navigates dynamically — opens search, dismisses popups, types category name, submits — capturing the generated URL. Structure changes break brittle scrapers; this adapts like a user would.",
      },
      {
        title: "Natural language freshness parsing",
        solution:
          "Job timestamps come as 'Just Now', 'Few Hours Ago', '3 Weeks Ago'. Built a parser that converts these to day-based values for threshold filtering — critical for keeping the DB from going stale.",
      },
    ],
    results: [
      "131 Internshala categories extracted and stored automatically",
      "Dynamic navigation — no hardcoded URLs, resilient to site changes",
      "Full pipeline: discovery → normalization → deduplication → persistence",
    ],
    github: "https://github.com/DeemonDuck",
    color: "#f97316",
    icon: "🤖",
    category: "Automation",
  },
  {
    id: "taskflow",
    title: "TaskFlow Team Manager",
    tagline: "Full-stack project management with JWT auth, RBAC, and Railway deployment.",
    problem:
      "Teams need a simple but properly engineered project + task management system — with real authentication, role-based permissions, and something actually deployed, not just running on localhost.",
    solution:
      "A full-stack app: FastAPI backend with JWT auth and RBAC (Admin vs Member), React-style vanilla JS frontend, deployed independently on Railway with separate backend and frontend services.",
    process:
      "Built as a complete vertical slice — auth → projects → tasks → dashboard stats — with clean API contracts between frontend and backend. Deployed both services to Railway to prove it works beyond localhost.",
    tech: ["FastAPI", "SQLAlchemy", "SQLite", "JWT", "HTML/CSS/JS", "Bootstrap 5", "Railway"],
    challenges: [
      {
        title: "Role-based access that actually blocks, not just hides",
        solution:
          "RBAC enforced at the API layer (not just the frontend). Members attempting POST /projects or POST /tasks get 403 Forbidden regardless of what the UI shows — no client-side trust.",
      },
    ],
    results: [
      "Live backend: taskflow-team-manager-production-b89e.up.railway.app",
      "Live frontend: taskflow-team-manager-production-60f2.up.railway.app",
      "Full auth flow: register → login → JWT → protected routes",
    ],
    github: "https://github.com/DeemonDuck",
    live: "https://taskflow-team-manager-production-60f2.up.railway.app/login.html",
    color: "#3b82f6",
    icon: "📌",
    category: "Full-Stack",
  },
];
