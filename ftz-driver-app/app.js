// FTZ Chaufførvejledning - App Logic

const state = {
  currentView: 'home',
  currentCategory: null,
  currentArticle: null,
  favorites: JSON.parse(localStorage.getItem('ftz_favorites') || '[]'),
  searchOpen: false,
};

// ===== INIT =====
document.addEventListener('DOMContentLoaded', () => {
  renderCategories();
  bindNav();
  bindSearch();
  bindQuickActions();
  bindBackButtons();
});

// ===== RENDER CATEGORIES =====
function renderCategories() {
  const grid = document.getElementById('categoryGrid');
  grid.innerHTML = categories.map(cat => {
    const articleCount = cat.articles.length;
    const hasImportant = cat.articles.some(id => articles[id]?.important);
    return `
      <div class="category-card" data-category="${cat.id}">
        <span class="category-emoji">${cat.emoji}</span>
        <span class="category-name">${cat.name}</span>
        <span class="category-count">${articleCount} vejledning${articleCount !== 1 ? 'er' : ''}</span>
        ${hasImportant ? '<span class="category-badge">Vigtigt</span>' : ''}
      </div>`;
  }).join('');

  grid.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      showCategory(card.dataset.category);
    });
  });
}

// ===== SHOW CATEGORY =====
function showCategory(categoryId) {
  const cat = categories.find(c => c.id === categoryId);
  if (!cat) return;
  state.currentCategory = categoryId;

  const header = document.getElementById('categoryHeader');
  header.innerHTML = `
    <div class="cat-header">
      <div class="cat-header-top">
        <span class="cat-header-emoji">${cat.emoji}</span>
        <span class="cat-header-title">${cat.name}</span>
      </div>
      <p class="cat-header-desc">${cat.desc}</p>
    </div>`;

  const list = document.getElementById('articleList');
  list.innerHTML = cat.articles.map(id => {
    const art = articles[id];
    if (!art) return '';
    const isFav = state.favorites.includes(id);
    return `
      <div class="article-card ${art.important ? 'important' : ''}" data-article="${art.id}">
        <span class="article-icon">${art.icon}</span>
        <div class="article-info">
          <div class="article-title">${art.title}</div>
          <div class="article-preview">${art.preview}</div>
          ${art.tags ? `<div class="article-tags">${art.tags.map(t => `<span class="tag ${art.important ? 'red' : ''}">${t}</span>`).join('')}</div>` : ''}
        </div>
        <svg class="article-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </div>`;
  }).join('');

  list.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', () => showArticle(card.dataset.article));
  });

  switchView('categoryView');
}

// ===== SHOW ARTICLE =====
function showArticle(articleId) {
  const art = articles[articleId];
  if (!art) return;
  state.currentArticle = articleId;

  const isFav = state.favorites.includes(articleId);
  const container = document.getElementById('articleContent');
  container.innerHTML = `
    ${art.content}
    <button class="fav-btn ${isFav ? 'active' : ''}" id="favBtn" data-id="${articleId}">
      ${isFav ? '❤️ Fjern fra favoritter' : '🤍 Gem som favorit'}
    </button>`;

  document.getElementById('favBtn').addEventListener('click', toggleFavorite);

  switchView('articleView');
  window.scrollTo(0, 0);
}

// ===== TOGGLE FAVORITE =====
function toggleFavorite(e) {
  const id = e.currentTarget.dataset.id;
  if (state.favorites.includes(id)) {
    state.favorites = state.favorites.filter(f => f !== id);
    e.currentTarget.classList.remove('active');
    e.currentTarget.textContent = '🤍 Gem som favorit';
  } else {
    state.favorites.push(id);
    e.currentTarget.classList.add('active');
    e.currentTarget.textContent = '❤️ Fjern fra favoritter';
  }
  localStorage.setItem('ftz_favorites', JSON.stringify(state.favorites));
}

// ===== SWITCH VIEW =====
function switchView(viewName) {
  ['homeView', 'categoryView', 'articleView', 'searchView'].forEach(v => {
    document.getElementById(v).classList.add('hidden');
  });
  document.getElementById(viewName).classList.remove('hidden');
  state.currentView = viewName;
  window.scrollTo(0, 0);

  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  if (viewName === 'homeView') {
    document.querySelector('[data-view="home"]').classList.add('active');
  } else if (viewName === 'categoryView' || viewName === 'articleView') {
    document.querySelector('[data-view="categories"]').classList.add('active');
  }
}

// ===== BACK BUTTONS =====
function bindBackButtons() {
  document.getElementById('backBtn').addEventListener('click', () => {
    switchView('homeView');
  });
  document.getElementById('backToCategory').addEventListener('click', () => {
    if (state.currentCategory) {
      showCategory(state.currentCategory);
    } else {
      switchView('homeView');
    }
  });
}

// ===== BOTTOM NAV =====
function bindNav() {
  document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
      const view = item.dataset.view;
      if (view === 'home') {
        switchView('homeView');
      } else if (view === 'categories') {
        switchView('homeView');
        setTimeout(() => {
          document.querySelector('.categories-section')?.scrollIntoView({ behavior: 'smooth' });
        }, 50);
      } else if (view === 'favoritter') {
        showFavorites();
      } else if (view === 'kontakt') {
        showContact();
      }
      document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
      item.classList.add('active');
    });
  });
}

// ===== QUICK ACTIONS =====
function bindQuickActions() {
  document.querySelectorAll('.quick-btn[data-category]').forEach(btn => {
    btn.addEventListener('click', () => showCategory(btn.dataset.category));
  });
}

// ===== SEARCH =====
function bindSearch() {
  const toggle = document.getElementById('searchToggle');
  const bar = document.getElementById('searchBar');
  const input = document.getElementById('searchInput');
  const clear = document.getElementById('searchClear');

  toggle.addEventListener('click', () => {
    state.searchOpen = !state.searchOpen;
    bar.classList.toggle('open', state.searchOpen);
    if (state.searchOpen) {
      setTimeout(() => input.focus(), 150);
    } else {
      input.value = '';
      if (state.currentView === 'searchView') switchView('homeView');
    }
  });

  clear.addEventListener('click', () => {
    input.value = '';
    input.focus();
    if (state.currentView === 'searchView') switchView('homeView');
  });

  input.addEventListener('input', (e) => {
    const query = e.target.value.trim();
    if (query.length < 2) {
      if (state.currentView === 'searchView') switchView('homeView');
      return;
    }
    performSearch(query);
  });
}

function performSearch(query) {
  const q = query.toLowerCase();
  const results = Object.values(articles).filter(art => {
    return (
      art.title.toLowerCase().includes(q) ||
      art.preview.toLowerCase().includes(q) ||
      (art.tags && art.tags.some(t => t.toLowerCase().includes(q))) ||
      art.content.toLowerCase().includes(q)
    );
  });

  const title = document.getElementById('searchResultTitle');
  const list = document.getElementById('searchResults');

  title.textContent = results.length > 0
    ? `${results.length} resultat${results.length !== 1 ? 'er' : ''} for "${query}"`
    : `Ingen resultater for "${query}"`;

  if (results.length === 0) {
    list.innerHTML = `<div class="no-results">🔍 Prøv andre søgeord<br/>fx "batteri", "løft", "tromle"</div>`;
  } else {
    list.innerHTML = results.map(art => `
      <div class="article-card ${art.important ? 'important' : ''}" data-article="${art.id}">
        <span class="article-icon">${art.icon}</span>
        <div class="article-info">
          <div class="article-title">${art.title}</div>
          <div class="article-preview">${art.preview}</div>
        </div>
        <svg class="article-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
          <polyline points="9 18 15 12 9 6"/>
        </svg>
      </div>`).join('');

    list.querySelectorAll('.article-card').forEach(card => {
      card.addEventListener('click', () => {
        state.currentCategory = articles[card.dataset.article]?.category || null;
        showArticle(card.dataset.article);
      });
    });
  }

  switchView('searchView');
}

// ===== FAVORITES VIEW =====
function showFavorites() {
  const homeView = document.getElementById('homeView');
  const cats = document.querySelector('.categories-section');
  const quickAct = document.querySelector('.quick-actions');
  const hero = document.querySelector('.hero');

  ['homeView', 'categoryView', 'articleView', 'searchView'].forEach(v => {
    document.getElementById(v).classList.add('hidden');
  });

  // Reuse homeView with overridden content
  homeView.classList.remove('hidden');
  hero.style.display = 'none';
  quickAct.style.display = 'none';
  cats.style.display = 'none';

  let favSection = document.getElementById('favSection');
  if (!favSection) {
    favSection = document.createElement('div');
    favSection.id = 'favSection';
    homeView.appendChild(favSection);
  }

  if (state.favorites.length === 0) {
    favSection.innerHTML = `
      <button class="back-btn" id="backFromFav">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        Tilbage
      </button>
      <div class="fav-empty">
        <div class="fav-empty-icon">🤍</div>
        <h3>Ingen favoritter endnu</h3>
        <p>Åbn en vejledning og tryk "Gem som favorit" for at gemme den her.</p>
      </div>`;
  } else {
    const favArticles = state.favorites.map(id => articles[id]).filter(Boolean);
    favSection.innerHTML = `
      <button class="back-btn" id="backFromFav">
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
        Tilbage
      </button>
      <h2 class="section-title">Mine favoritter</h2>
      <div class="article-list">
        ${favArticles.map(art => `
          <div class="article-card ${art.important ? 'important' : ''}" data-article="${art.id}">
            <span class="article-icon">${art.icon}</span>
            <div class="article-info">
              <div class="article-title">${art.title}</div>
              <div class="article-preview">${art.preview}</div>
            </div>
            <svg class="article-arrow" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="9 18 15 12 9 6"/>
            </svg>
          </div>`).join('')}
      </div>`;
  }

  favSection.style.display = 'block';
  document.getElementById('backFromFav').addEventListener('click', restoreHome);
  favSection.querySelectorAll('.article-card').forEach(card => {
    card.addEventListener('click', () => {
      state.currentCategory = articles[card.dataset.article]?.category || null;
      showArticle(card.dataset.article);
    });
  });

  state.currentView = 'favView';
  window.scrollTo(0, 0);
}

// ===== CONTACT VIEW =====
function showContact() {
  const homeView = document.getElementById('homeView');
  ['homeView', 'categoryView', 'articleView', 'searchView'].forEach(v => {
    document.getElementById(v).classList.add('hidden');
  });
  homeView.classList.remove('hidden');

  document.querySelector('.hero').style.display = 'none';
  document.querySelector('.quick-actions').style.display = 'none';
  document.querySelector('.categories-section').style.display = 'none';

  let contactSection = document.getElementById('contactSection');
  if (!contactSection) {
    contactSection = document.createElement('div');
    contactSection.id = 'contactSection';
    homeView.appendChild(contactSection);
  }

  contactSection.innerHTML = `
    <button class="back-btn" id="backFromContact">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"/></svg>
      Tilbage
    </button>
    <div class="contact-view">
      <div class="contact-hero">
        <h2>Kontakt & Support</h2>
        <p>Vigtige kontakter til din hverdag som FTZ-chauffør</p>
      </div>

      <div class="contact-card">
        <div class="contact-card-icon">🚨</div>
        <div class="contact-card-body">
          <h3>Nødopkald</h3>
          <p>Politi, brand og ambulance</p>
          <a class="phone-link" href="tel:112">112</a>
        </div>
      </div>

      <div class="contact-card">
        <div class="contact-card-icon">👮</div>
        <div class="contact-card-body">
          <h3>Politi (ikke-nødssituation)</h3>
          <p>Anmeldelse, tyveri, trafikulykker</p>
          <a class="phone-link" href="tel:114">114</a>
        </div>
      </div>

      <div class="contact-card">
        <div class="contact-card-icon">☠️</div>
        <div class="contact-card-body">
          <h3>Giftlinjen</h3>
          <p>Kemisk eksponering – batterisyre, olie</p>
          <a class="phone-link" href="tel:82121212">82 12 12 12</a>
        </div>
      </div>

      <div class="contact-card">
        <div class="contact-card-icon">🏢</div>
        <div class="contact-card-body">
          <h3>FTZ Afdelingen</h3>
          <p>Din nærmeste afdeling – se velkomstkortet i bilen</p>
          <p style="margin-top:6px;font-size:0.78rem;color:#6B6B6B;">Nummeret er individuelt per afdeling</p>
        </div>
      </div>

      <div class="contact-card">
        <div class="contact-card-icon">🌐</div>
        <div class="contact-card-body">
          <h3>FTZ Website</h3>
          <p>Vejledninger og information</p>
          <a class="phone-link" href="https://www.ftz.dk/vejledninger" target="_blank" rel="noopener">ftz.dk/vejledninger</a>
        </div>
      </div>

      <div class="contact-card">
        <div class="contact-card-icon">🚗</div>
        <div class="contact-card-body">
          <h3>Falck / Vejhjælp</h3>
          <p>Se forsikringskortet i varevognen</p>
        </div>
      </div>
    </div>`;

  contactSection.style.display = 'block';
  document.getElementById('backFromContact').addEventListener('click', restoreHome);
  state.currentView = 'contactView';
  window.scrollTo(0, 0);
}

// ===== RESTORE HOME =====
function restoreHome() {
  document.querySelector('.hero').style.display = '';
  document.querySelector('.quick-actions').style.display = '';
  document.querySelector('.categories-section').style.display = '';

  const favSection = document.getElementById('favSection');
  if (favSection) favSection.style.display = 'none';
  const contactSection = document.getElementById('contactSection');
  if (contactSection) contactSection.style.display = 'none';

  switchView('homeView');
  document.querySelector('[data-view="home"]').classList.add('active');
  document.querySelectorAll('.nav-item').forEach(n => {
    if (n.dataset.view !== 'home') n.classList.remove('active');
  });
}
