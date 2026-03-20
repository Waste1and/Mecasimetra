/* =================================================
   MECASIMETRA — Kappology Knowledge Graph
   Glossary: animated ancestor transitions
   ================================================= */

(function () {
  'use strict';

  /* ── UTILITY ────────────────────────────────── */
  function esc(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  /* ── DATA ───────────────────────────────────── */
  let TERMS = {};
  let currentTerm = null;
  let history = [];

  /* ── DOM REFS ───────────────────────────────── */
  const searchInput   = document.getElementById('glossary-search');
  const termList      = document.getElementById('term-list');
  const detailPanel   = document.getElementById('term-detail');
  const graphSvg      = document.getElementById('ancestor-graph');
  const breadcrumbs   = document.getElementById('breadcrumbs');
  const loadingEl     = document.getElementById('glossary-loading');

  /* ── FETCH TERMS ────────────────────────────── */
  async function loadTerms() {
    try {
      const base = document.querySelector('meta[name="site-base"]')?.content || '.';
      const res  = await fetch(`${base}/data/terms.json`);
      const data = await res.json();
      data.terms.forEach(t => { TERMS[t.id] = t; });
      renderTermList(data.terms);
      if (loadingEl) loadingEl.style.display = 'none';
      /* auto-open from URL hash */
      const hash = window.location.hash.replace('#/term/', '');
      if (hash && TERMS[hash]) openTerm(hash);
    } catch (err) {
      if (loadingEl) loadingEl.textContent = 'Failed to load terms. Please reload.';
      console.error('Glossary load error:', err);
    }
  }

  /* ── RENDER TERM LIST ───────────────────────── */
  function renderTermList(terms, filter = '') {
    const lower = filter.toLowerCase();
    const filtered = terms.filter(t =>
      t.label.toLowerCase().includes(lower) ||
      t.short.toLowerCase().includes(lower) ||
      (t.symbol && t.symbol.toLowerCase().includes(lower))
    );

    termList.innerHTML = '';
    filtered.forEach((t, idx) => {
      const li = document.createElement('li');
      li.className = 'term-item';
      li.dataset.id = t.id;
      li.style.animationDelay = `${idx * 40}ms`;
      li.innerHTML = `
        <span class="term-symbol" aria-hidden="true">${esc(t.symbol)}</span>
        <span class="term-item-label">${esc(t.label)}</span>
        <span class="term-item-cat tag-cat-${esc(t.category)}">${esc(t.category)}</span>
      `;
      li.addEventListener('click', () => openTerm(t.id));
      li.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') openTerm(t.id); });
      li.setAttribute('tabindex', '0');
      li.setAttribute('role', 'button');
      li.setAttribute('aria-label', `Open term: ${esc(t.label)}`);
      termList.appendChild(li);
    });

    if (filtered.length === 0) {
      termList.innerHTML = `<li class="term-empty">No terms match &ldquo;${esc(filter)}&rdquo;.</li>`;
    }
  }

  /* ── OPEN TERM ──────────────────────────────── */
  function openTerm(id, pushHistory = true) {
    const term = TERMS[id];
    if (!term) return;

    if (pushHistory && currentTerm && currentTerm !== id) {
      history.push(currentTerm);
    }

    currentTerm = id;
    window.location.hash = `/term/${id}`;

    /* highlight active in list */
    termList.querySelectorAll('.term-item').forEach(li => {
      li.classList.toggle('active', li.dataset.id === id);
    });

    renderDetail(term);
    renderBreadcrumbs(id);
    renderGraph(id);
  }

  /* ── RENDER DETAIL PANEL ────────────────────── */
  function renderDetail(term) {
    const parentsHTML = term.parents.length
      ? term.parents.map(pid => {
          const p = TERMS[pid];
          return p
            ? `<button class="ancestor-chip" data-id="${esc(pid)}">${esc(p.symbol)} ${esc(p.label)}</button>`
            : '';
        }).join('')
      : '<span class="no-ancestors">Root concept</span>';

    const relatedHTML = term.related.length
      ? term.related.map(rid => {
          const r = TERMS[rid];
          return r
            ? `<button class="related-chip" data-id="${esc(rid)}">${esc(r.symbol)} ${esc(r.label)}</button>`
            : '';
        }).join('')
      : '';

    detailPanel.innerHTML = `
      <div class="detail-header">
        <div class="detail-symbol">${esc(term.symbol)}</div>
        <div>
          <h2 class="detail-title">${esc(term.label)}</h2>
          <span class="detail-cat tag-cat-${esc(term.category)}">${esc(term.category)}</span>
        </div>
      </div>

      <p class="detail-short">${esc(term.short)}</p>

      <div class="detail-section">
        <h3 class="detail-section-title">Definition</h3>
        <p class="detail-definition">${esc(term.definition)}</p>
      </div>

      ${term.formula ? `
      <div class="detail-section">
        <h3 class="detail-section-title">Formula</h3>
        <code class="detail-formula">${esc(term.formula)}</code>
      </div>` : ''}

      <div class="detail-section">
        <h3 class="detail-section-title">Parent Concepts</h3>
        <div class="ancestor-chips">${parentsHTML}</div>
      </div>

      ${term.related.length ? `
      <div class="detail-section">
        <h3 class="detail-section-title">Related Terms</h3>
        <div class="ancestor-chips">${relatedHTML}</div>
      </div>` : ''}
    `;

    /* Animate in */
    detailPanel.classList.remove('detail-visible');
    void detailPanel.offsetWidth; /* reflow */
    detailPanel.classList.add('detail-visible');

    /* Wire ancestor/related chips */
    detailPanel.querySelectorAll('[data-id]').forEach(btn => {
      btn.addEventListener('click', () => openTerm(btn.dataset.id));
    });
  }

  /* ── BREADCRUMBS ────────────────────────────── */
  function renderBreadcrumbs(id) {
    const chain = buildAncestorChain(id);
    breadcrumbs.innerHTML = '';

    chain.forEach((tid, i) => {
      const t = TERMS[tid];
      if (!t) return;

      const btn = document.createElement('button');
      btn.className = 'breadcrumb-item' + (i === chain.length - 1 ? ' breadcrumb-active' : '');
      btn.textContent = `${t.symbol} ${t.label}`;
      btn.addEventListener('click', () => { if (i < chain.length - 1) openTerm(tid); });

      breadcrumbs.appendChild(btn);

      if (i < chain.length - 1) {
        const sep = document.createElement('span');
        sep.className = 'breadcrumb-sep';
        sep.setAttribute('aria-hidden', 'true');
        sep.textContent = '›';
        breadcrumbs.appendChild(sep);
      }
    });
  }

  /* Build chain from root to current term */
  function buildAncestorChain(id) {
    const chain = [];
    let current = id;
    const visited = new Set();

    while (current && !visited.has(current)) {
      visited.add(current);
      chain.unshift(current);
      const t = TERMS[current];
      if (!t || !t.parents.length) break;
      current = t.parents[0]; /* follow first parent */
    }
    return chain;
  }

  /* ── ANCESTOR GRAPH (SVG) ───────────────────── */
  function renderGraph(rootId) {
    const term = TERMS[rootId];
    if (!term || !graphSvg) return;

    /* Collect nodes: current + all ancestors (up to 3 levels) */
    const nodes = [];
    const edges = [];
    const seen  = new Set();

    function collect(id, depth) {
      if (seen.has(id) || depth > 3) return;
      seen.add(id);
      const t = TERMS[id];
      if (!t) return;
      nodes.push({ id, depth, term: t });
      t.parents.forEach(pid => {
        edges.push({ from: pid, to: id });
        collect(pid, depth + 1);
      });
    }
    collect(rootId, 0);

    /* Layout: group by depth, spread horizontally */
    const W = graphSvg.clientWidth  || 600;
    const H = graphSvg.clientHeight || 300;
    const byDepth = {};
    nodes.forEach(n => {
      byDepth[n.depth] = byDepth[n.depth] || [];
      byDepth[n.depth].push(n);
    });

    const maxDepth = nodes.length > 0 ? Math.max(...nodes.map(n => n.depth), 0) : 0;
    nodes.forEach(n => {
      const cols = byDepth[n.depth];
      const colIdx = cols.indexOf(n);
      const colCount = cols.length;
      /* x: right = shallow (root), left = deepest ancestor */
      const xRatio = (maxDepth - n.depth) / Math.max(maxDepth, 1);
      n.x = 60 + xRatio * (W - 120);
      n.y = 40 + (colIdx + 0.5) * ((H - 80) / colCount);
    });

    const posMap = {};
    nodes.forEach(n => { posMap[n.id] = n; });

    /* Build SVG */
    let svg = '';

    /* Defs: gradient for active node + accessibility title */
    svg += `<title>Ancestor graph for ${esc(TERMS[rootId]?.label || rootId)}</title>
    <defs>
      <radialGradient id="node-glow-active" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(247,0,255,0.4)"/>
        <stop offset="100%" stop-color="rgba(247,0,255,0)"/>
      </radialGradient>
      <radialGradient id="node-glow-parent" cx="50%" cy="50%" r="50%">
        <stop offset="0%" stop-color="rgba(0,232,255,0.3)"/>
        <stop offset="100%" stop-color="rgba(0,232,255,0)"/>
      </radialGradient>
      <filter id="glow-filter">
        <feGaussianBlur stdDeviation="3" result="blur"/>
        <feMerge><feMergeNode in="blur"/><feMergeNode in="SourceGraphic"/></feMerge>
      </filter>
    </defs>`;

    /* Edges */
    edges.forEach(e => {
      const from = posMap[e.from];
      const to   = posMap[e.to];
      if (!from || !to) return;
      const mx = (from.x + to.x) / 2;
      svg += `<path class="graph-edge" d="M${from.x},${from.y} C${mx},${from.y} ${mx},${to.y} ${to.x},${to.y}" />`;
    });

    /* Nodes */
    nodes.forEach(n => {
      const isRoot = n.id === rootId;
      const r = isRoot ? 28 : 20;
      const cls = isRoot ? 'graph-node graph-node-active' : 'graph-node graph-node-parent';
      const glowId = isRoot ? 'node-glow-active' : 'node-glow-parent';

      svg += `
        <circle class="graph-node-glow" cx="${n.x}" cy="${n.y}" r="${r + 16}" fill="url(#${glowId})" />
        <circle class="${cls}" cx="${n.x}" cy="${n.y}" r="${r}" data-id="${n.id}" />
        <text class="graph-label${isRoot ? ' graph-label-active' : ''}" x="${n.x}" y="${n.y + 4}" text-anchor="middle">${esc(n.term.symbol)}</text>
        <text class="graph-sublabel" x="${n.x}" y="${n.y + r + 14}" text-anchor="middle">${esc(n.term.label.split('—')[0].trim())}</text>
      `;
    });

    /* Animate SVG in */
    graphSvg.innerHTML = svg;
    graphSvg.classList.remove('graph-visible');
    void graphSvg.offsetWidth;
    graphSvg.classList.add('graph-visible');

    /* Click nodes to navigate */
    graphSvg.querySelectorAll('[data-id]').forEach(el => {
      el.style.cursor = 'pointer';
      el.addEventListener('click', () => openTerm(el.dataset.id));
    });
  }

  /* ── SEARCH ─────────────────────────────────── */
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      renderTermList(Object.values(TERMS), searchInput.value);
    });
  }

  /* ── BACK NAV ───────────────────────────────── */
  const backBtn = document.getElementById('glossary-back');
  if (backBtn) {
    backBtn.addEventListener('click', () => {
      if (history.length) {
        const prev = history.pop();
        openTerm(prev, false);
      }
    });
  }

  /* ── HASH CHANGE ─────────────────────────────── */
  window.addEventListener('hashchange', () => {
    const id = window.location.hash.replace('#/term/', '');
    if (id && TERMS[id] && id !== currentTerm) openTerm(id);
  });

  /* ── KEYBOARD SHORTCUT (/) TO FOCUS SEARCH ─── */
  document.addEventListener('keydown', e => {
    if (e.key === '/' && document.activeElement !== searchInput) {
      e.preventDefault();
      searchInput && searchInput.focus();
    }
  });

  /* ── INIT ───────────────────────────────────── */
  loadTerms();

})();
