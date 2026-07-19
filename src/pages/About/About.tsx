import { FaGithub, FaLinkedin, FaEnvelope, FaGlobe } from "react-icons/fa";
import "./About.css";


const author = {
  name:     "Vedant Vartak",
  role:     "Full Stack AI Developer",
  email:    "vedant.vartak500@gmail.com",
  linkedin: "https://www.linkedin.com/in/vedant-vartak-10790b237/",
  github:   "https://github.com/vedant250702",
//   website:  "https://yourportfolio.com",
  bio:      "I built this system as part of my M.Sc. thesis at Symbiosis Institute of Geoinformatics, exploring how conversational AI can detect its own unreliable, ungrounded, or contextually inconsistent responses — without relying on expensive LLM-based verification calls.",
};

const techStack = [
  { label: "Python",          desc: "Core pipeline & model training"        },
  { label: "PyTorch",         desc: "Custom self-attention transformer"     },
  { label: "LangChain",       desc: "RAG orchestration"                     },
  { label: "Mistral (API)",   desc: "LLM response generation"               },
  { label: "FAISS + BM25",    desc: "Hybrid retrieval (semantic + lexical)" },
  { label: "sentence-transformers", desc: "e5-base-v2 embeddings"           },
  { label: "XGBoost",         desc: "Baseline classification model"        },
  { label: "Cosine / NLI",    desc: "Feature engineering for fallback signals" },
];

const features = [
  {
    icon: "◈",
    title: "Hybrid RAG Pipeline",
    desc: "Combines BM25 and cosine similarity retrieval to fetch the most relevant context chunks (up to 6) before generating a response.",
  },
  {
    icon: "⚡",
    title: "Conversation-Aware Fallback Detection",
    desc: "A custom self-attention classifier analyzes the query, response, retrieved context, and full conversation history to flag ungrounded or inconsistent answers — not just the current turn.",
  },
  {
    icon: "📊",
    title: "Live Analysis Panel",
    desc: "Every response surfaces its fallback verdict and confidence score alongside the chat, so you can see exactly why a response was trusted or flagged.",
  },
  {
    icon: "🧠",
    title: "History-Grounded Classification",
    desc: "Unlike single-turn hallucination detectors, the model weighs prior queries and responses, catching failures caused by lost conversational continuity.",
  },
];

const pipelineSteps = [
  {
    num: "01",
    title: "Query + History Received",
    desc: "Your message and the ongoing conversation history are passed into the system together.",
  },
  {
    num: "02",
    title: "Hybrid Context Retrieval",
    desc: "BM25 and cosine similarity jointly retrieve the top relevant chunks from the knowledge base.",
  },
  {
    num: "03",
    title: "Response Generated",
    desc: "The LLM generates a response grounded in the retrieved context and conversation history.",
  },
  {
    num: "04",
    title: "Fallback Classifier Check",
    desc: "The self-attention model scores the response for grounding and conversational consistency.",
  },
  {
    num: "05",
    title: "Return or Trigger Fallback",
    desc: "If flagged, the system triggers a retry, regeneration, or hands off for human review instead of returning an unreliable answer.",
  },
];

/* ── Sub-components ─────────────────────────────────────────── */

interface SocialLinkProps {
  href:  string;
  icon:  React.ReactNode;
  label: string;
}
const SocialLink: React.FC<SocialLinkProps> = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="about-social-link"
  >
    <span className="about-social-icon">{icon}</span>
    <span className="about-social-label">{label}</span>
  </a>
);


interface TechBadgeProps { label: string; desc: string }
const TechBadge: React.FC<TechBadgeProps> = ({ label, desc }) => (
  <div className="about-tech-badge">
    <span className="about-tech-label">{label}</span>
    <span className="about-tech-desc">{desc}</span>
  </div>
);


interface FeatureCardProps { icon: string; title: string; desc: string }
const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, desc }) => (
  <div className="about-feature-card">
    <div className="about-feature-icon-wrap">
      <span className="about-feature-icon">{icon}</span>
    </div>
    <div className="about-feature-body">
      <h4 className="about-feature-title">{title}</h4>
      <p className="about-feature-desc">{desc}</p>
    </div>
  </div>
);


interface PipelineStepProps { num: string; title: string; desc: string; last?: boolean }
const PipelineStep: React.FC<PipelineStepProps> = ({ num, title, desc, last }) => (
  <>
    <div className="about-pipeline-step">
      <div className="about-pipeline-num">{num}</div>
      <div className="about-pipeline-content">
        <h4 className="about-pipeline-title">{title}</h4>
        <p className="about-pipeline-desc">{desc}</p>
      </div>
    </div>
    {!last && <div className="about-pipeline-connector" />}
  </>
);


/* ── Main Component ─────────────────────────────────────────── */

export default function About() {
  return (
    <div className="about-main">

      {/* ══ HERO ══ */}
      <section className="about-hero">
        <div className="about-hero-orb">
          <span className="about-hero-orb-icon">◈</span>
        </div>
        <div className="about-hero-text">
          <h1 className="about-hero-title">About Conversation-Aware Fallback Detection</h1>
          <p className="about-hero-subtitle">
            An intelligent Retrieval-Augmented Generation system with
            real-time fallback detection, built for accuracy and transparency.
          </p>
        </div>
        <div className="about-hero-badge">
          <span className="about-hero-badge-dot" />
          <span className="about-hero-badge-text">v2.1</span>
        </div>
      </section>

      <div className="about-divider" />

      {/* ══ AUTHOR ══ */}
      <section className="about-author-section">
        <div className="about-author-avatar">
          <span className="about-author-avatar-initials">
            {author.name.split(" ").map((w) => w[0]).join("").slice(0, 2)}
          </span>
        </div>
        <div className="about-author-info">
          <div className="about-author-name-row">
            <h2 className="about-author-name">{author.name}</h2>
            <span className="about-author-role">{author.role}</span>
          </div>
          <p className="about-author-bio">{author.bio}</p>
          <div className="about-social-links">
            <SocialLink href={`mailto:${author.email}`} icon={<FaEnvelope />} label={author.email} />
            <SocialLink href={author.linkedin}          icon={<FaLinkedin />} label="LinkedIn"      />
            <SocialLink href={author.github}            icon={<FaGithub />}   label="GitHub"        />
            {/* <SocialLink href={author.website}           icon={<FaGlobe />}    label="Portfolio"     /> */}
          </div>
        </div>
      </section>

      <div className="about-divider" />

      {/* ══ OVERVIEW ══ */}
    <section className="about-section">
        <span className="about-section-label">Overview</span>
        <h2 className="about-section-title">What is Conversation-Aware Fallback Detection?</h2>
        <p className="about-section-body">
          A career-guidance RAG assistant that doesn't just trust every answer it generates.
          Each response is checked by a custom fallback detection layer to see if it's actually
          grounded in the retrieved context and consistent with the conversation — not just
          the current turn.
        </p>
        <p className="about-section-body">
          The analysis panel alongside the chat shows the retrieved context, fallback verdict,
          and confidence score — so you can see whether a response was grounded, admitted
          uncertainty, or drifted and got flagged.
        </p>
      </section>

    <div className="about-divider" />

      <section className="about-section">
        <span className="about-section-label">Why It Matters</span>
        <h2 className="about-section-title">The Hidden Cost of LLM-Based Verification</h2>
        <p className="about-section-body">
          Checking a RAG response with a second LLM call typically costs{" "}
          <strong>3,000–4,000 tokens</strong> per query (context + history + reasoning). At{" "}
          <strong>10,000 users</strong> sending just 5 queries/day, that's{" "}
          <strong>~175M tokens/day</strong> spent purely on verification — before generating a
          single real answer.
        </p>
        <p className="about-section-body">
          This project replaces that expensive call with a lightweight classifier that runs in
          milliseconds, using the same inputs (query, response, context, history) to directly
          output a fallback verdict — no extra API round-trip, no added token cost per turn.
        </p>
      </section>

      <div className="about-divider" />

      <section className="about-section">
        <span className="about-section-label">Impact</span>
        <h2 className="about-section-title">Business Value</h2>
        <p className="about-section-body">
          Trust-checking that doesn't scale with user volume.
        </p>
        <p className="about-section-body">
          No second LLM round-trip slowing down responses.
        </p>
        <p className="about-section-body">
          Unreliable answers flagged before they ever reach the user.
        </p>
        <p className="about-section-body">
          A check cheap enough to run on every single conversation turn in production.
        </p>
      </section>

      <div className="about-divider" />

      {/* ══ FEATURES ══ */}
      <section className="about-section">
        <span className="about-section-label">Capabilities</span>
        <h2 className="about-section-title">Core Features</h2>
        <div className="about-features-grid">
          {features.map((f) => (
            <FeatureCard key={f.title} {...f} />
          ))}
        </div>
      </section>

      <div className="about-divider" />

      {/* ══ TECH STACK ══ */}
      <section className="about-section">
        <span className="about-section-label">Built With</span>
        <h2 className="about-section-title">Tech Stack</h2>
        <div className="about-tech-grid">
          {techStack.map((t) => (
            <TechBadge key={t.label} {...t} />
          ))}
        </div>
      </section>

      <div className="about-divider" />

      {/* ══ PIPELINE ══ */}
      <section className="about-section">
        <span className="about-section-label">Pipeline</span>
        <h2 className="about-section-title">How It Works</h2>
        <div className="about-pipeline">
          {pipelineSteps.map((step, i) => (
            <PipelineStep
              key={step.num}
              {...step}
              last={i === pipelineSteps.length - 1}
            />
          ))}
        </div>
      </section>

      <div className="about-divider" />

      {/* ══ FOOTER ══ */}
      <footer className="about-footer">
        <span className="about-footer-dot" />
        <span className="about-footer-text">
          Built with precision · Running locally · Always transparent
        </span>
      </footer>

    </div>
  );
}