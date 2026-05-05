// 渲染周报页面 - W17 版本
(function () {
  const data = window.REPORT_DATA;
  const app = document.getElementById('app');

  // ── 侧边栏折叠（挂到 window，供 HTML inline onclick 调用）──
  window.toggleSidebar = function() {
    const sidebar = document.getElementById('sidebar');
    const btn = document.getElementById('sidebar-toggle');
    const collapsed = document.body.classList.toggle('sidebar-collapsed');
    sidebar.classList.toggle('collapsed', collapsed);
    btn.textContent = collapsed ? '›' : '‹';
    btn.title = collapsed ? '展开目录' : '折叠目录';
  };

  // ── 左侧目录渲染 ──────────────────────────────────────
  const REPORTS = [
    { week: '2026 W17', range: '4.21 — 4.27', file: 'report-W17.html', active: true },
    { week: '2026 W16', range: '4.14 — 4.19', file: 'report-W16.html', active: false },
    { week: '2026 W15', range: '4.6 — 4.13', file: 'index.html', active: false },
  ];

  const SECTIONS = [
    { label: '本周头条', anchor: 'section-headlines', color: '#86868b' },
    { label: '行业综合', anchor: 'section-industry', color: '#0071E3' },
    ...data.companies.map(co => ({ label: co.name, anchor: `section-${co.id}`, color: co.color })),
  ];

  // 平滑滚动（纯 JS 控制，不改 URL hash，防止二次触发）
  window.smoothTo = function(id, el) {
    const target = document.getElementById(id);
    if (!target) return;
    const offset = 68;  // 导航栏高度
    const top = target.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top, behavior: 'smooth' });
    document.querySelectorAll('.sidebar-anchor').forEach(a => a.classList.remove('current'));
    if (el) el.classList.add('current');
  };

  // 用 week 字符串生成稳定的 key（去掉空格）
  function weekKey(week) { return week.replace(/\s/g, ''); }

  const sidebarNav = document.getElementById('sidebar-nav');
  if (sidebarNav) {
    sidebarNav.innerHTML = REPORTS.map(r => {
      const key = weekKey(r.week);
      const sectionsHtml = r.active ? `
        <div class="sidebar-sections" id="sidebar-sections-${key}">
          ${SECTIONS.map(s => `
            <span class="sidebar-anchor" onclick="smoothTo('${s.anchor}', this)">
              <span class="sidebar-anchor-dot" style="background:${s.color}"></span>
              ${s.label}
            </span>`).join('')}
        </div>` : '';

      const clickAttr = r.active
        ? `onclick="toggleSections('${key}', this)"`
        : `onclick="location.href='${r.file}'"`;

      return `
        <div class="sidebar-report">
          <div class="sidebar-item${r.active ? ' active expanded' : ''}" ${clickAttr}>
            <span class="sidebar-item-week">${r.week}</span>
            <span class="sidebar-item-sub">${r.range}</span>
          </div>
          ${sectionsHtml}
        </div>`;
    }).join('');
  }

  window.toggleSections = function(key) {
    const el = document.getElementById(`sidebar-sections-${key}`);
    const header = el && el.previousElementSibling;
    if (!el) return;
    const isOpen = el.style.display !== 'none';
    el.style.display = isOpen ? 'none' : '';
    if (header) header.classList.toggle('expanded', !isOpen);
  };

  // 滚动监听：高亮当前区域
  setTimeout(() => {
    const anchors = SECTIONS.map(s => document.getElementById(s.anchor)).filter(Boolean);
    window.addEventListener('scroll', () => {
      const scrollY = window.scrollY + 80;
      let current = null;
      anchors.forEach(el => { if (el.offsetTop <= scrollY) current = el.id; });
      document.querySelectorAll('.sidebar-anchor').forEach(a => {
        const id = a.getAttribute('onclick')?.match(/'([^']+)'/)?.[1];
        a.classList.toggle('current', id === current);
      });
    }, { passive: true });
  }, 300);

  // ── 工具函数 ──────────────────────────────────────────
  function renderContent(content) {
    if (Array.isArray(content)) {
      return `<ul>${content.map(item => `<li>${item}</li>`).join('')}</ul>`;
    }
    return `<p>${content}</p>`;
  }

  function renderSources(sources) {
    if (!sources || sources.length === 0) return '';
    const links = sources.map(s =>
      `<a href="${s.url}" target="_blank" rel="noopener" class="source-link">📎 ${s.name}</a>`
    ).join('');
    return `<div class="sources">${links}</div>`;
  }

  // 所有 section（包括启示）统一用品牌色标签背景，文字为黑色
  function renderSection(title, sectionData, brandColor) {
    const isInsight = sectionData.isInsight;
    const titleStyle = `background:${brandColor}18; border:1px solid ${brandColor}38`;
    return `
      <div class="card-section${isInsight ? ' insight' : ''}">
        <p class="card-section-title" style="${titleStyle}">${title}</p>
        <div class="card-section-content">
          ${renderContent(sectionData.content)}
          ${renderSources(sectionData.sources)}
        </div>
      </div>`;
  }

  // ── Hero ──────────────────────────────────────────────
  app.innerHTML = `
    <section class="hero">
      <div class="hero-left">
        <h1 class="hero-title">雇主品牌行业监测周报</h1>
        <p class="hero-week">${data.week} &nbsp;·&nbsp; ${data.range}</p>
      </div>
      <div class="hero-right">
        <span class="hero-badge">Weekly Report</span>
        <p class="hero-meta">${data.meta}</p>
      </div>
    </section>`;

  // ── 公司快捷导航（放在头条上方）────────────────────────
  const navBtns = [
    { label: '行业综合', color: '#0071E3', anchor: 'section-industry' },
    ...data.companies.map(co => ({ label: co.name, color: co.color, anchor: `section-${co.id}` })),
  ].map(btn => {
    const hex = btn.color;
    return `<a href="javascript:void(0)" class="company-nav-btn"
      onclick="smoothTo('${btn.anchor}', null)"
      onmouseenter="this.style.color='${hex}';this.style.borderColor='${hex}';this.style.background='${hex}18'"
      onmouseleave="this.style.color='';this.style.borderColor='';this.style.background=''">
      <span class="company-nav-dot" style="background:${hex}"></span>${btn.label}
    </a>`;
  }).join('');

  app.innerHTML += `
    <div class="block">
      <div class="company-nav">${navBtns}</div>
    </div>`;

  // ── 本周头条 ──────────────────────────────────────────
  const headlineHtml = data.headlines.map(h => `
    <a class="headline-item" href="${h.url}" target="_blank" rel="noopener">
      <span class="headline-rank">${h.rank}</span>
      <div class="headline-body">
        <span class="headline-text">${h.title}</span>
        <span class="headline-summary">${h.summary}</span>
      </div>
      <span class="headline-tag tag-${h.tag}">${h.tag}</span>
    </a>`).join('');

  app.innerHTML += `
    <div class="block" id="section-headlines">
      <p class="section-label">本周头条</p>
      <div class="headlines">${headlineHtml}</div>
    </div>`;

  // ── 行业综合资讯 ──────────────────────────────────────
  const industrySectionsHtml = Object.entries(data.industry.sections)
    .map(([title, sec]) => renderSection(title, sec, '#0071E3'))
    .join('');

  app.innerHTML += `
    <div class="block">
      <p class="section-label">行业综合资讯</p>
      <div class="company-card industry-card" id="section-industry">
        <div class="card-header" style="border-left-color:#0071E3">
          <span class="card-name">行业综合资讯</span>
          <span class="card-summary">跨平台汇总 · 行业热点 + 技术趋势 + 对快手启示</span>
        </div>
        <div class="card-body">${industrySectionsHtml}</div>
      </div>
    </div>`;

  // ── 各大厂动态 ────────────────────────────────────────
  app.innerHTML += `
    <div class="block">
      <p class="section-label">各大厂动态</p>
      <div class="companies-grid" id="companies-grid"></div>
    </div>`;
  const grid = document.getElementById('companies-grid');

  data.companies.forEach(co => {
    const sectionsHtml = Object.entries(co.sections)
      .map(([title, sec]) => renderSection(title, sec, co.color))
      .join('');

    const card = document.createElement('div');
    card.className = 'company-card';
    card.id = `section-${co.id}`;
    card.innerHTML = `
      <div class="card-header" style="border-left-color:${co.color}">
        <span class="card-name">${co.name}</span>
        <span class="card-summary">${co.summary}</span>
      </div>
      <div class="card-body">${sectionsHtml}</div>`;
    grid.appendChild(card);
  });

  // ── 底部 ──────────────────────────────────────────────
  const now = new Date();
  app.innerHTML += `
    <div class="footer">
      <p>生成时间：${now.toLocaleDateString('zh-CN')}</p>
      <p>快手雇主品牌团队 · 丁丁</p>
    </div>`;
})();
