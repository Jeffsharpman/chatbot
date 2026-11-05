import "./SharpmanAiTwo.css";

const SharpmanAiTwo = () => {
  return (
    <main className="app-shell" data-theme="dark">
      <aside className="sidebar hidden md:flex">
        <div className="flex items-center gap-3 px-2">
          <div className="brand-mark">
            <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M13.2 2.8 5.8 13h5.1l-.8 8.2L18.4 10h-5.2l.0-7.2Z"
                fill="currentColor"
              />
            </svg>
          </div>
          <span className="text-lg font-semibold tracking-tight">
            sharpman<span className="text-primary">.</span>
          </span>
        </div>

        <button className="new-chat-button mt-9" type="button">
          <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 5v14M5 12h14"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <span>New chat</span>
          <span className="shortcut">⌘ K</span>
        </button>

        <div className="mt-9">
          <p className="sidebar-label">WORKSPACE</p>
          <nav className="mt-3 space-y-1" aria-label="Workspace">
            <a className="side-link active" href="#chat">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M4 5.8A2.8 2.8 0 0 1 6.8 3h10.4A2.8 2.8 0 0 1 20 5.8v7.4a2.8 2.8 0 0 1-2.8 2.8H9l-5 4V5.8Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Chat</span>
            </a>
            <a className="side-link" href="#discover">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle
                  cx="12"
                  cy="12"
                  r="8.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="m15.5 8.5-2.2 4.8-4.8 2.2 2.2-4.8 4.8-2.2Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Discover</span>
            </a>
            <a className="side-link" href="#library">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M5 4.5h10.5A2.5 2.5 0 0 1 18 7v13H7a2 2 0 0 1-2-2V4.5Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M8 8h6M8 11.5h6M18 17H7a2 2 0 0 0 0 4h11v-4Z"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinejoin="round"
                />
              </svg>
              <span>Library</span>
            </a>
          </nav>
        </div>

        <div className="mt-9">
          <div className="flex items-center justify-between px-3">
            <p className="sidebar-label">RECENT</p>
            <span className="text-xs text-muted-foreground">•••</span>
          </div>
          <div className="mt-3 space-y-1">
            <a href="#recent-1" className="recent-link">
              Landing page inspiration
            </a>
            <a href="#recent-2" className="recent-link">
              React component patterns
            </a>
            <a href="#recent-3" className="recent-link">
              Ideas for a side project
            </a>
          </div>
        </div>

        <div className="sidebar-bottom">
          <div className="upgrade-card">
            <div className="upgrade-icon">✦</div>
            <p className="font-medium text-sm">Make more with Sharpman</p>
            <p className="mt-1 text-xs leading-5 text-muted-foreground">
              Your ideas deserve room to grow.
            </p>
            <div className="upgrade-link">
              Explore plans <span>↗</span>
            </div>
          </div>
          <div className="profile-row">
            <div className="avatar avatar-user">J</div>
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-medium">Joshua</p>
              <p className="text-xs text-muted-foreground">Free workspace</p>
            </div>
            <svg
              className="h-4 w-4 text-muted-foreground"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
            >
              <circle cx="5" cy="12" r="1" fill="currentColor" />
              <circle cx="12" cy="12" r="1" fill="currentColor" />
              <circle cx="19" cy="12" r="1" fill="currentColor" />
            </svg>
          </div>
        </div>
      </aside>

      <section className="chat-panel" id="chat">
        <header className="topbar">
          <div className="flex items-center gap-3">
            <div className="brand-mark brand-mark-small md:hidden">
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M13.2 2.8 5.8 13h5.1l-.8 8.2L18.4 10h-5.2l.0-7.2Z"
                  fill="currentColor"
                />
              </svg>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-tight">
                Sharpman AI
              </p>
              <p className="text-xs text-muted-foreground">
                Your creative thinking partner
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="status-pill">
              <span className="status-dot"></span> All systems normal
            </span>
            <button
              className="icon-button"
              type="button"
              aria-label="Switch theme (visual only)"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <circle
                  cx="12"
                  cy="12"
                  r="3.5"
                  stroke="currentColor"
                  strokeWidth="1.6"
                />
                <path
                  d="M12 2.5v2M12 19.5v2M4.1 4.1l1.4 1.4m13 13 1.4 1.4M2.5 12h2m15 0h2M4.1 19.9l1.4-1.4m13-13 1.4-1.4"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <button
              className="icon-button"
              type="button"
              aria-label="More options (visual only)"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <circle cx="5" cy="12" r="1.5" />
                <circle cx="12" cy="12" r="1.5" />
                <circle cx="19" cy="12" r="1.5" />
              </svg>
            </button>
          </div>
        </header>

        <div className="conversation-scroll">
          <div className="conversation">
            <div className="date-divider">
              <span>Today, 9:24 PM</span>
            </div>

            <div className="message-row user-row">
              <div className="message-content">
                <div className="message-meta">
                  <span>You</span>
                  <span>9:24 PM</span>
                </div>
                <div className="user-bubble">Hi Sharpman 👋</div>
              </div>
              <div className="avatar avatar-user">J</div>
            </div>

            <div className="message-row assistant-row">
              <div className="avatar avatar-ai">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M13.2 2.8 5.8 13h5.1l-.8 8.2L18.4 10h-5.2l.0-7.2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="message-content">
                <div className="message-meta">
                  <span>
                    Sharpman AI <span className="ai-badge">AI</span>
                  </span>
                  <span>9:24 PM</span>
                </div>
                <div className="assistant-copy">
                  <p>Hey Joshua! 👋</p>
                  <p>
                    I’m Sharpman — a space to think clearly, create boldly, and
                    turn your ideas into something real.
                  </p>
                  <p>What are we working on today?</p>
                </div>
                <div className="message-actions">
                  <button type="button" aria-label="Copy response">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect
                        x="8"
                        y="8"
                        width="11"
                        height="12"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M16 8V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </button>
                  <button type="button" aria-label="Give positive feedback">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M7 10v10H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3Zm0 0 5-7c2 0 2 2 1 4l-1 3h6a2 2 0 0 1 2 2l-1.5 6a2 2 0 0 1-2 2H7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                  <button type="button" aria-label="Give negative feedback">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M7 14V4H4a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h3Zm0 0 5 7c2 0 2-2 1-4l-1-3h6a2 2 0 0 0 2-2l-1.5-6a2 2 0 0 0-2-2H7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="message-row user-row">
              <div className="message-content">
                <div className="message-meta">
                  <span>You</span>
                  <span>9:25 PM</span>
                </div>
                <div className="user-bubble">What can you help me with?</div>
              </div>
              <div className="avatar avatar-user">J</div>
            </div>

            <div className="message-row assistant-row">
              <div className="avatar avatar-ai">
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M13.2 2.8 5.8 13h5.1l-.8 8.2L18.4 10h-5.2l.0-7.2Z"
                    fill="currentColor"
                  />
                </svg>
              </div>
              <div className="message-content">
                <div className="message-meta">
                  <span>
                    Sharpman AI <span className="ai-badge">AI</span>
                  </span>
                  <span>9:25 PM</span>
                </div>
                <div className="assistant-copy">
                  <p>
                    Quite a lot. Think of me as your extra brain for the things
                    you want to make happen.
                  </p>
                </div>
                <div className="capability-grid">
                  <div className="capability-card">
                    <span className="capability-icon coral">✳</span>
                    <div>
                      <p>Build & code</p>
                      <span>Debug React, shape ideas, solve problems.</span>
                    </div>
                  </div>
                  <div className="capability-card">
                    <span className="capability-icon blue">⌘</span>
                    <div>
                      <p>Write & create</p>
                      <span>Draft content, names, stories, and plans.</span>
                    </div>
                  </div>
                  <div className="capability-card">
                    <span className="capability-icon purple">◈</span>
                    <div>
                      <p>Learn & explore</p>
                      <span>Break complex topics into clear steps.</span>
                    </div>
                  </div>
                  <div className="capability-card">
                    <span className="capability-icon green">↗</span>
                    <div>
                      <p>Think strategically</p>
                      <span>Compare options and test your assumptions.</span>
                    </div>
                  </div>
                </div>
                <p className="assistant-footnote">
                  Bring the rough idea. We’ll figure out the next step together.
                </p>
                <div className="message-actions">
                  <button type="button" aria-label="Copy response">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <rect
                        x="8"
                        y="8"
                        width="11"
                        height="12"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                      <path
                        d="M16 8V5a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h2"
                        stroke="currentColor"
                        strokeWidth="1.6"
                      />
                    </svg>
                  </button>
                  <button type="button" aria-label="Give positive feedback">
                    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path
                        d="M7 10v10H4a1 1 0 0 1-1-1v-8a1 1 0 0 1 1-1h3Zm0 0 5-7c2 0 2 2 1 4l-1 3h6a2 2 0 0 1 2 2l-1.5 6a2 2 0 0 1-2 2H7"
                        stroke="currentColor"
                        strokeWidth="1.6"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            <div className="suggestion-row">
              <span className="suggestion-label">TRY ASKING</span>
              <span className="suggestion-chip">
                Help me plan a project <span>↗</span>
              </span>
              <span className="suggestion-chip">
                Explain a React concept <span>↗</span>
              </span>
              <span className="suggestion-chip">
                Brainstorm something new <span>↗</span>
              </span>
            </div>
          </div>
        </div>

        <footer className="composer-area">
          <div className="composer">
            <button
              className="composer-tool"
              type="button"
              aria-label="Attach file (visual only)"
            >
              <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="m8.5 12.5 6.7-6.7a3 3 0 0 1 4.2 4.2l-8.8 8.8a5 5 0 0 1-7.1-7.1l8.1-8.1"
                  stroke="currentColor"
                  strokeWidth="1.7"
                  strokeLinecap="round"
                />
              </svg>
            </button>
            <div className="composer-placeholder">
              Ask anything, or start with an idea...
            </div>
            <div className="composer-bottom">
              <div className="flex items-center gap-2">
                <span className="model-pill">
                  <span className="model-spark">✦</span> Sharpman 1.0{" "}
                  <span className="chevron">⌄</span>
                </span>
                <span className="composer-hint hidden sm:inline">
                  AI can make mistakes. Check important info.
                </span>
              </div>
              <button
                className="send-button"
                type="button"
                aria-label="Send message (visual only)"
              >
                <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M12 19V5m-6 6 6-6 6 6"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <p className="mobile-disclaimer sm:hidden">
            Sharpman can make mistakes. Verify important details.
          </p>
        </footer>
      </section>
    </main>
  );
};

export default SharpmanAiTwo;
