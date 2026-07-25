(() => {
  'use strict';

  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)');

  function initTheme() {
    const root = document.documentElement;
    const toggle = document.getElementById('theme-toggle');
    const icon = document.getElementById('theme-icon');
    if (!toggle || !icon) return;

    const moonPath = 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z';
    const sunPaths = '<circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>';

    function applyTheme(theme) {
      root.setAttribute('data-theme', theme);
      icon.innerHTML = theme === 'dark' ? moonPath : sunPaths;
      toggle.setAttribute('aria-pressed', theme === 'dark' ? 'true' : 'false');
    }

    const stored = root.getAttribute('data-theme');
    if (stored === 'light' || stored === 'dark') {
      applyTheme(stored);
    } else {
      applyTheme(prefersDark.matches ? 'dark' : 'light');
    }

    toggle.addEventListener('click', () => {
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      applyTheme(next);
    });

    prefersDark.addEventListener('change', (e) => {
      applyTheme(e.matches ? 'dark' : 'light');
    });
  }

  function initCurrentYear() {
    const yearEl = document.getElementById('year');
    if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  }

  function setSupportMessage(id, supported, actionText) {
    const el = document.getElementById(id);
    if (!el) return;
    el.textContent = supported
      ? `Available in this browser. ${actionText || ''}`
      : 'Available in supported browsers only.';
  }

  function initAiSummary() {
    const trigger = document.getElementById('ai-summary-trigger');
    const support = document.getElementById('ai-summary-support');
    const sandbox = document.getElementById('ai-summary-sandbox');
    const status = document.getElementById('ai-summary-status');
    if (!trigger || !support || !sandbox || !status) return;

    const textToSummarize = 'The high-throughput game server mesh is a Rust and Tokio service that uses gossip-based cluster membership, ordered event sourcing, and Redis-backed presence to route players across regions with minimal latency and no single point of failure.';

    let api = null;

    async function detect() {
      try {
        if (window.ai && window.ai.summarizer && window.ai.summarizer.create) {
          api = window.ai.summarizer;
          return true;
        }
        if (window.ai && window.ai.languageModel && window.ai.languageModel.create) {
          api = window.ai.languageModel;
          return true;
        }
      } catch {
        return false;
      }
      return false;
    }

    detect().then((supported) => {
      setSupportMessage('ai-summary-support', supported, 'Click Try demo to summarize a project blurb locally.');
      trigger.hidden = !supported;
    });

    trigger.addEventListener('click', async () => {
      sandbox.classList.add('is-active');
      status.textContent = 'Summarizing…';
      try {
        let summary = '';
        if (api && api === window.ai.summarizer) {
          const summarizer = await api.create({ type: 'key-points', format: 'plain-text', length: 'short' });
          summary = await summarizer.summarize(textToSummarize);
          summarizer.destroy();
        } else if (api && api === window.ai.languageModel) {
          const session = await api.create({ systemPrompt: 'Summarize the following text in one sentence.' });
          summary = await session.prompt(`Summarize: ${textToSummarize}`);
          session.destroy();
        }
        status.textContent = summary || 'No summary returned.';
      } catch (err) {
        status.textContent = `Demo error: ${err.message}`;
      }
    });
  }

  function initDocumentPip() {
    const trigger = document.getElementById('document-pip-trigger');
    const support = document.getElementById('document-pip-support');
    const sandbox = document.getElementById('document-pip-sandbox');
    if (!trigger || !support || !sandbox) return;

    const supported = 'documentPictureInPicture' in window;
    setSupportMessage('document-pip-support', supported, 'Click to open the status panel in a floating window.');
    trigger.hidden = !supported;

    trigger.addEventListener('click', async () => {
      sandbox.classList.add('is-active');
      try {
        const pipWindow = await window.documentPictureInPicture.requestWindow({
          width: 320,
          height: 220,
        });
        pipWindow.document.title = 'Build status panel';
        const style = pipWindow.document.createElement('style');
        style.textContent = `
          body { margin:0; font-family: ui-sans-serif, system-ui, sans-serif; background:#0b0f14; color:#f9fafb; padding:16px; }
          .metric { display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(255,255,255,0.1); font-size:14px; }
          .metric:last-child { border-bottom:0; }
          .label { color:#9ca3af; }
          .value { font-weight:500; color:#60a5fa; }
        `;
        pipWindow.document.head.appendChild(style);
        const panel = pipWindow.document.createElement('div');
        panel.innerHTML = `
          <div class="metric"><span class="label">Build</span><span class="value">passing</span></div>
          <div class="metric"><span class="label">Latency</span><span class="value">24 ms</span></div>
          <div class="metric"><span class="label">Region</span><span class="value">eu-west-1</span></div>
        `;
        pipWindow.document.body.appendChild(panel);
      } catch (err) {
        support.textContent = `Could not open PiP: ${err.message}`;
      }
    });
  }

  function initSearchReveal() {
    const trigger = document.getElementById('search-reveal-trigger');
    const support = document.getElementById('search-reveal-support');
    const sandbox = document.getElementById('search-reveal-sandbox');
    const target = document.getElementById('search-reveal-target');
    const log = document.getElementById('search-reveal-log');
    if (!trigger || !support || !sandbox || !target || !log) return;

    const supported = typeof HTMLElement !== 'undefined' && 'onbeforematch' in document.body;
    setSupportMessage('search-reveal-support', supported, 'Click to reveal the sandbox, then use find-in-page.');
    trigger.hidden = !supported;

    trigger.addEventListener('click', () => {
      sandbox.classList.add('is-active');
      log.textContent = 'Sandbox active. Press Ctrl+F / Cmd+F and search for "reveal".';
    });

    target.addEventListener('beforematch', () => {
      log.textContent = 'beforematch fired: hidden content was revealed by find-in-page.';
    });
  }

  function initViewTransition() {
    const support = document.getElementById('view-transition-support');
    const sandbox = document.getElementById('view-transition-sandbox');
    const stateA = document.getElementById('vt-state-a');
    const stateB = document.getElementById('vt-state-b');
    const toggleBtn = document.getElementById('vt-toggle');
    if (!support || !sandbox || !stateA || !stateB || !toggleBtn) return;

    const supported = 'startViewTransition' in document;
    setSupportMessage('view-transition-support', supported, supported ? 'Use the toggle to animate between states.' : 'Fallback: instant state toggle.');
    sandbox.classList.add('is-active');

    let showingA = true;

    toggleBtn.addEventListener('click', () => {
      const swap = () => {
        stateA.classList.toggle('is-hidden');
        stateB.classList.toggle('is-hidden');
        showingA = !showingA;
      };

      if (supported) {
        document.startViewTransition(swap);
      } else {
        swap();
      }
    });
  }

  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', (e) => {
        const targetId = link.getAttribute('href');
        if (targetId === '#') return;
        const target = document.querySelector(targetId);
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    initCurrentYear();
    initSmoothScroll();
    initAiSummary();
    initDocumentPip();
    initSearchReveal();
    initViewTransition();
  });
})();
