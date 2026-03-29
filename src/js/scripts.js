var secaoGrowcast = document.getElementById("growcast-items");
var secaoWebinar = document.getElementById("webinar-items");
var secaoUxUi = document.getElementById("ux-ui-items");
var secaoGeral = document.getElementById("geral-items");
var areaDoVideo = document.getElementById("area-do-video");

var modalDeVideo = new bootstrap.Modal("#modal-video", {
  keyboard: false,
});

var videosGrowcast = movies.filter(function (video) {
  return video.category === "growcast";
});

var videosWebinar = movies.filter(function (video) {
  return video.category === "webinar";
});

var videosUxUi = movies.filter(function (video) {
  return video.category === "ux-ui";
});

var videosGeral = movies.filter(function (video) {
  return video.category === "geral";
});

function renderizarSecao(elementoDestino, listaDeVideos) {

  var nomeCategoria = listaDeVideos[0].category;

  elementoDestino.innerHTML += `
    <div class="col-12 pt-2">
      <p class="fw-bold mb-0 fs-1">
        <a href="#" class="link-growdev text-uppercase">
          ${nomeCategoria}
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
            class="bi bi-caret-right-fill" viewBox="0 0 16 16">
            <path d="m12.14 8.753-5.482 4.796c-.646.566-1.658.106-1.658-.753V3.204a1 1 0 0 1 1.659-.753l5.48 4.796a1 1 0 0 1 0 1.506z"/>
          </svg>
        </a>
      </p>
    </div>
  `;

  listaDeVideos.forEach(function (video) {
    elementoDestino.innerHTML += `
      <div class="col-12 col-sm-6 col-md-3 col-movie">
        <div class="item-hover">
          <!-- Imagem do thumbnail do vídeo -->
          <img src="${video.img}" class="img-fluid" alt="${video.title}" />

          <!-- Área clicável com o ícone de play e o título -->
          <p class="detail-movie" data-link="${video.link}" onclick="abrirVideo(this)">

            <!-- Ícone de play (SVG) -->
            <svg xmlns="http://www.w3.org/2000/svg" width="45" height="45" fill="white"
              class="bi bi-play-circle" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M6.271 5.055a.5.5 0 0 1 .52.038l3.5 2.5a.5.5 0 0 1 0 .814l-3.5 2.5A.5.5 0 0 1 6 10.5v-5a.5.5 0 0 1 .271-.445z"/>
            </svg>

            <!-- Título do vídeo -->
            <span>${video.title}</span>
          </p>
        </div>
      </div>
    `;
  });
}

function abrirVideo(elementoClicado) {
  var linkDoVideo = elementoClicado.getAttribute("data-link");

  areaDoVideo.innerHTML = `
    <iframe
      id="iframe-video"
      src="${linkDoVideo}"
      title="YouTube video player"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  `;

  modalDeVideo.show();
}

function pararVideo() {
  var iframe = document.getElementById("iframe-video");

  if (iframe) {
    iframe.src = "";
  }
}

renderizarSecao(secaoGrowcast, videosGrowcast);
renderizarSecao(secaoWebinar, videosWebinar);
renderizarSecao(secaoUxUi, videosUxUi);
renderizarSecao(secaoGeral, videosGeral);