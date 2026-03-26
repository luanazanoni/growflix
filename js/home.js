// ============================================================
// GROWFLIX - home.js
// Estrutura de card idêntica ao site original:
// .col-movie > .item-hover > img.img-fluid + p.detail-movie
// ============================================================

/**
 * Abre o modal com o vídeo selecionado
 */
function openMovie(el) {
  const link = el.getAttribute("data-link");
  const iframe = document.getElementById('modal-iframe');
  iframe.src = link + '?autoplay=1&rel=0';
  const modal = new bootstrap.Modal(document.getElementById('videoModal'));
  modal.show();
  document.getElementById('videoModal').addEventListener('hidden.bs.modal', function () {
    iframe.src = '';
  }, { once: true });
}

/**
 * Cria o HTML de um card — estrutura idêntica ao original:
 * <div class="col-12 col-sm-6 col-md-3 col-movie">
 *   <div class="item-hover">
 *     <img class="img-fluid" src="..." alt="">
 *     <p class="detail-movie" data-link="..." onclick="openMovie(this)">
 *       <svg>play icon</svg>
 *       <span>Título</span>
 *     </p>
 *   </div>
 * </div>
 */
function createVideoCard(movie) {
  return `
    <div class="col-12 col-sm-6 col-md-3 col-movie">
      <div class="item-hover">
        <img class="img-fluid" src="${movie.img}" alt="${movie.title}" />
        <p class="detail-movie" data-link="${movie.link}" onclick="openMovie(this)">
          <svg class="bi bi-play-circle" xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
          </svg>
          <span>${movie.title}</span>
        </p>
      </div>
    </div>
  `;
}

/**
 * Renderiza os vídeos de uma categoria em um container
 */
function renderCategory(category, containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const filtered = movies.filter((m) => m.category === category);

  if (filtered.length === 0) {
    container.innerHTML = '<p class="text-white-50 small">Nenhum vídeo disponível.</p>';
    return;
  }

  container.innerHTML = filtered.map(createVideoCard).join('');
}

/**
 * Efeito de navbar ao rolar
 */
function handleNavbarScroll() {
  const navbar = document.querySelector('.home-navbar');
  if (!navbar) return;
  window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ── Inicialização ────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderCategory('growcast', 'growcast-container');
  renderCategory('webinar', 'webinar-container');
  renderCategory('uxui', 'uxui-container');
  renderCategory('geral', 'geral-container');
  handleNavbarScroll();
});
