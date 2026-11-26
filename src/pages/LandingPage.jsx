
import {
  ArrowRight,
  ArrowUpRight,
  ShieldCheck,
  BrainCircuit,
  CheckCircle2,
  LayoutDashboard,
  ListTodo,
  Users,
  FileText,
  Bell,
  MessageSquare,
  BarChart3,
  LockKeyhole,
  Sparkles,
  Zap,
  Clock3,
  Activity,
  Menu,
  X,
  Search,
  Plus,
  MoreHorizontal,
  TrendingUp,
  FolderKanban,
  Bot,
  ChevronRight
} from "lucide-react";

import { useState } from "react";
import { Link } from "react-router-dom";
import "../App.css";

const features = [
  {
    icon: ListTodo,
    title: "Smart Task Management",
    description:
      "Create, assign, organize and track tasks with priorities, deadlines and real-time progress updates.",
    color: "purple"
  },
  {
    icon: LayoutDashboard,
    title: "Dashboard & Analytics",
    description:
      "Get a centralized overview of projects, team performance, pending tasks and completed activities.",
    color: "blue"
  },
  {
    icon: ShieldCheck,
    title: "Secure Authentication",
    description:
      "Protect your workspace with secure login, session management and role-based access control.",
    color: "green"
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description:
      "Bring your team together with shared workspaces, task assignments and collaborative workflows.",
    color: "orange"
  },
  {
    icon: FileText,
    title: "File Management",
    description:
      "Upload, organize and access important documents associated with projects and tasks.",
    color: "blue"
  },
  {
    icon: BrainCircuit,
    title: "AI Task Summarization",
    description:
      "Convert lengthy task descriptions and updates into clear, actionable summaries using AI.",
    color: "purple"
  },
  {
    icon: Bot,
    title: "AI Document Assistant",
    description:
      "Ask questions about uploaded documents and extract useful information through AI-powered assistance.",
    color: "cyan"
  },
  {
    icon: Activity,
    title: "Real-Time Activity Feed",
    description:
      "Stay informed about workspace changes, task updates and team activities without refreshing.",
    color: "green"
  },
  {
    icon: MessageSquare,
    title: "Chat & Notifications",
    description:
      "Communicate with colleagues and receive instant notifications about important updates.",
    color: "orange"
  },
  {
    icon: LockKeyhole,
    title: "Audit Logs",
    description:
      "Maintain visibility into important security events, administrative actions and workspace activities.",
    color: "blue"
  }
];

const highlights = [
  { icon: BrainCircuit, title: "AI-Powered", subtitle: "Intelligent assistance" },
  { icon: ShieldCheck, title: "Secure", subtitle: "Enterprise protection" },
  { icon: Activity, title: "Real-Time", subtitle: "Live collaboration" },
  { icon: BarChart3, title: "Insightful", subtitle: "Data-driven decisions" }
];

function Logo() {
  return (
    <Link to="/" className="logo">
      <div className="logo-icon">
        <Activity size={23} strokeWidth={2.5} />
      </div>
      <span>Pulse<span className="logo-highlight">Works</span></span>
      <span className="logo-ai">AI</span>
    </Link>
  );
}

function DashboardPreview() {
  return (
    <div className="dashboard-preview">
      <div className="dashboard-window">

        <div className="dash-topbar">
          <div className="window-dots">
            <span></span><span></span><span></span>
          </div>
          <div className="dash-search">
            <Search size={13} />
            Search workspace...
          </div>
          <Bell size={17} className="dash-bell" />
          <div className="avatar">YS</div>
        </div>

        <div className="dash-content">
          <aside className="dash-sidebar">
            <div className="dash-side-logo">
              <LayoutDashboard size={16} />
            </div>
            <div className="dash-side-item active">
              <LayoutDashboard size={16} />
            </div>
            <div className="dash-side-item">
              <ListTodo size={16} />
            </div>
            <div className="dash-side-item">
              <FolderKanban size={16} />
            </div>
            <div className="dash-side-item">
              <Users size={16} />
            </div>
            <div className="dash-side-item">
              <MessageSquare size={16} />
            </div>
          </aside>

          <div className="dash-main">
            <div className="dash-heading">
              <div>
                <span className="dash-welcome">WORKSPACE OVERVIEW</span>
                <h3>Good morning, Yaswanth 👋</h3>
                <p>Here's what's happening with your team today.</p>
              </div>
              <button className="dash-add">
                <Plus size={14} /> New Task
              </button>
            </div>

            <div className="stat-grid">
              <div className="stat-card">
                <div className="stat-label">Total Tasks</div>
                <div className="stat-number">128</div>
                <span className="stat-change"><TrendingUp size={11}/> +12.5%</span>
              </div>
              <div className="stat-card">
                <div className="stat-label">In Progress</div>
                <div className="stat-number">42</div>
                <span className="stat-neutral">Active tasks</span>
              </div>
              <div className="stat-card">
                <div className="stat-label">Completed</div>
                <div className="stat-number">76</div>
                <span className="stat-change"><TrendingUp size={11}/> +8.2%</span>
              </div>
            </div>

            <div className="dash-bottom">
              <div className="dash-task-panel">
                <div className="dash-panel-heading">
                  <strong>Recent Tasks</strong>
                  <MoreHorizontal size={17} />
                </div>

                <div className="task-row">
                  <div className="task-icon purple-bg"><FileText size={14}/></div>
                  <div className="task-info">
                    <strong>Website Redesign</strong>
                    <span>Sarah Johnson</span>
                  </div>
                  <span className="task-status progress">Progress</span>
                </div>

                <div className="task-row">
                  <div className="task-icon blue-bg"><BrainCircuit size={14}/></div>
                  <div className="task-info">
                    <strong>AI Integration</strong>
                    <span>Michael Chen</span>
                  </div>
                  <span className="task-status review">Review</span>
                </div>

                <div className="task-row">
                  <div className="task-icon green-bg"><CheckCircle2 size={14}/></div>
                  <div className="task-info">
                    <strong>Database Setup</strong>
                    <span>Alex Morgan</span>
                  </div>
                  <span className="task-status completed">Done</span>
                </div>
              </div>

              <div className="dash-ai-panel">
                <div className="ai-panel-icon">
                  <Sparkles size={17}/>
                </div>
                <strong>Pulse AI Assistant</strong>
                <p>Your team completed 76 tasks this week. Project efficiency is improving!</p>
                <span>AI GENERATED INSIGHT</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="floating-card float-ai">
        <div className="float-icon"><Sparkles size={17}/></div>
        <div>
          <strong>AI Assistant</strong>
          <span>Ready to help you</span>
        </div>
        <span className="online-dot"></span>
      </div>

      <div className="floating-card float-secure">
        <ShieldCheck size={20} color="#10B981"/>
        <div>
          <strong>Workspace secured</strong>
          <span>All systems protected</span>
        </div>
      </div>
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="app">

      {/* NAVBAR */}
      <header className="navbar">
        <div className="nav-container">
          <Logo />

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <a href="#home" onClick={closeMenu}>Home</a>
            <a href="#features" onClick={closeMenu}>Features</a>
            <a href="#about" onClick={closeMenu}>About</a>
            <a href="#security" onClick={closeMenu}>Security</a>

            <div className="mobile-actions">
              <Link to="/login" className="login-link">Log in</Link>
              <Link to="/register" className="btn btn-primary">Get Started <ArrowRight size={16}/></Link>
            </div>
          </nav>

          <div className="nav-actions">
            <Link to="/login" className="login-link">Log in</Link>
            <Link to="/register" className="btn btn-primary nav-cta">
              Get Started <ArrowUpRight size={16}/>
            </Link>
          </div>

          <button
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation"
          >
            {menuOpen ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>

        {/* HERO SECTION */}
        <section className="hero" id="home">
          <div className="hero-bg-glow"></div>

          <div className="hero-container">
            <div className="hero-content">

              <div className="announcement">
                <span className="announcement-dot"></span>
                <Sparkles size={14}/>
                Introducing intelligent workspace management
                <ArrowRight size={13}/>
              </div>

              <h1>
                Work Smarter.<br/>
                Collaborate Better.<br/>
                <span className="gradient-text">Achieve More.</span>
              </h1>

              <p className="hero-description">
                Your organization's work, connected and intelligent.
                Manage projects, empower teams and accelerate productivity
                with AI-powered enterprise workspace management.
              </p>

              <div className="hero-buttons">
                <Link to="/register" className="btn btn-primary btn-large">
                  Get Started for Free <ArrowRight size={18}/>
                </Link>
                <a href="#features" className="btn btn-outline btn-large">
                  Explore Features <ArrowUpRight size={17}/>
                </a>
              </div>

              <div className="hero-trust">
                <div className="trust-check">
                  <CheckCircle2 size={16}/>
                  Secure workspace
                </div>
                <div className="trust-check">
                  <CheckCircle2 size={16}/>
                  AI-powered productivity
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <DashboardPreview />
            </div>
          </div>

          <div className="hero-bottom">
            <span>ONE PLATFORM. COMPLETE CONTROL.</span>
            <div className="hero-bottom-line"></div>
          </div>
        </section>

        {/* HIGHLIGHTS */}
        <section className="highlights">
          <div className="highlights-container">
            {highlights.map((item, index) => {
              const Icon = item.icon;
              return (
                <div className="highlight-item" key={index}>
                  <div className="highlight-icon">
                    <Icon size={22}/>
                  </div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.subtitle}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* FEATURES */}
        <section className="features-section section-padding" id="features">
          <div className="section-container">

            <div className="section-heading">
              <span className="section-label">
                <Zap size={14}/> POWERFUL CAPABILITIES
              </span>
              <h2>
                Everything your team needs.<br/>
                <span className="gradient-text">All in one workspace.</span>
              </h2>
              <p>
                A complete ecosystem designed to simplify work,
                improve collaboration and bring intelligence to
                your organization's daily operations.
              </p>
            </div>

            <div className="features-grid">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div className="feature-card" key={index}>
                    <div className={`feature-icon ${feature.color}`}>
                      <Icon size={23}/>
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                    <div className="feature-number">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* AI SECTION */}
        <section className="ai-section section-padding" id="about">
          <div className="ai-container">
            <div className="ai-visual">
              <div className="ai-card">
                <div className="ai-card-header">
                  <div className="ai-logo">
                    <BrainCircuit size={21}/>
                  </div>
                  <div>
                    <strong>Pulse AI</strong>
                    <span>DOCUMENT ASSISTANT</span>
                  </div>
                  <span className="ai-live">● ONLINE</span>
                </div>

                <div className="ai-chat">
                  <div className="chat-question">
                    Summarize the project requirements document.
                  </div>
                  <div className="chat-answer">
                    <div className="chat-answer-heading">
                      <Sparkles size={15}/> AI Summary
                    </div>
                    <p>
                      The project focuses on improving team productivity
                      through centralized task management, secure
                      collaboration and intelligent automation.
                    </p>
                    <div className="ai-result-item">
                      <CheckCircle2 size={14}/> 3 major objectives identified
                    </div>
                    <div className="ai-result-item">
                      <CheckCircle2 size={14}/> 5 key requirements extracted
                    </div>
                    <div className="ai-result-item">
                      <CheckCircle2 size={14}/> Action items generated
                    </div>
                  </div>
                </div>

                <div className="ai-input">
                  <span>Ask anything about your documents...</span>
                  <div><ArrowRight size={16}/></div>
                </div>
              </div>
            </div>

            <div className="ai-content">
              <span className="section-label">
                <Sparkles size={14}/> INTELLIGENCE BUILT IN
              </span>
              <h2>
                Meet your new<br/>
                <span className="gradient-text">AI-powered workspace.</span>
              </h2>
              <p>
                Stop spending hours reading lengthy documents and
                organizing information manually. Let PulseWorks AI
                handle the repetitive work while your team focuses
                on what matters.
              </p>

              <div className="ai-benefit">
                <div><CheckCircle2 size={18}/></div>
                <section>
                  <strong>Intelligent Task Summaries</strong>
                  <p>Turn complex task descriptions into clear summaries.</p>
                </section>
              </div>

              <div className="ai-benefit">
                <div><CheckCircle2 size={18}/></div>
                <section>
                  <strong>Document Question Answering</strong>
                  <p>Get relevant answers directly from uploaded documents.</p>
                </section>
              </div>

              <div className="ai-benefit">
                <div><CheckCircle2 size={18}/></div>
                <section>
                  <strong>Actionable Insights</strong>
                  <p>Extract meaningful information to support better decisions.</p>
                </section>
              </div>

              <Link to="/register" className="btn btn-primary ai-cta">
                Experience AI Assistance <ArrowRight size={17}/>
              </Link>
            </div>
          </div>
        </section>

        {/* SECURITY */}
        <section className="security-section section-padding" id="security">
          <div className="section-container">
            <div className="security-content">
              <div className="security-icon">
                <ShieldCheck size={34}/>
              </div>
              <span className="section-label">SECURITY FIRST</span>
              <h2>
                Your workspace.<br/>
                <span className="gradient-text">Your data. Your control.</span>
              </h2>
              <p>
                Enterprise-focused access control and activity
                monitoring help protect your organization's
                information and maintain accountability.
              </p>

              <div className="security-grid">
                <div className="security-card">
                  <LockKeyhole size={21}/>
                  <strong>Secure Authentication</strong>
                  <span>Protected account access</span>
                </div>
                <div className="security-card">
                  <Users size={21}/>
                  <strong>Role-Based Access</strong>
                  <span>Controlled user permissions</span>
                </div>
                <div className="security-card">
                  <Activity size={21}/>
                  <strong>Audit Monitoring</strong>
                  <span>Track important activities</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* HOW IT WORKS */}
        <section className="workflow-section section-padding">
          <div className="section-container">
            <div className="section-heading">
              <span className="section-label">SIMPLE WORKFLOW</span>
              <h2>
                From planning to progress.<br/>
                <span className="gradient-text">Everything connected.</span>
              </h2>
              <p>Bring your entire team into one organized workspace in three simple steps.</p>
            </div>

            <div className="workflow-grid">
              <div className="workflow-card">
                <div className="workflow-number">01</div>
                <div className="workflow-icon"><Users size={25}/></div>
                <h3>Create Your Workspace</h3>
                <p>Set up your organization and invite your team members to collaborate.</p>
                <ArrowRight className="workflow-arrow" size={19}/>
              </div>

              <div className="workflow-card">
                <div className="workflow-number">02</div>
                <div className="workflow-icon"><FolderKanban size={25}/></div>
                <h3>Manage Your Projects</h3>
                <p>Create projects, assign tasks, share documents and monitor progress.</p>
                <ArrowRight className="workflow-arrow" size={19}/>
              </div>

              <div className="workflow-card">
                <div className="workflow-number">03</div>
                <div className="workflow-icon"><BrainCircuit size={25}/></div>
                <h3>Accelerate With AI</h3>
                <p>Use AI assistance and analytics to improve your team's productivity.</p>
                <CheckCircle2 className="workflow-arrow" size={19}/>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="cta-section">
          <div className="cta-glow"></div>
          <div className="cta-content">
            <div className="cta-label">
              <Sparkles size={15}/> THE FUTURE OF WORK STARTS HERE
            </div>
            <h2>
              Ready to transform<br/>
              the way your team works?
            </h2>
            <p>
              Bring projects, people and intelligent productivity
              together with PulseWorks AI.
            </p>
            <Link to="/register" className="btn cta-button">
              Get Started Today <ArrowRight size={18}/>
            </Link>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-main">
            <div>
              <Logo/>
              <p>
                Intelligent collaboration.<br/>
                Secure workspace management.<br/>
                Better productivity.
              </p>
            </div>

            <div className="footer-links">
              <div>
                <strong>Platform</strong>
                <a href="#features">Features</a>
                <a href="#about">AI Assistant</a>
                <a href="#security">Security</a>
              </div>
              <div>
                <strong>Account</strong>
                <Link to="/login">Login</Link>
                <Link to="/register">Get Started</Link>
              </div>
              <div>
                <strong>Explore</strong>
                <a href="#home">Home</a>
                <a href="#about">About Us</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} PulseWorks AI. All rights reserved.</span>
            <span>Built for smarter teamwork <Sparkles size={13}/></span>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
