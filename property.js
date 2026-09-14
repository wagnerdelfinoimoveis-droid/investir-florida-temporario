const detailRoot = document.querySelector('#property-detail');
const detailParams = new URLSearchParams(window.location.search);
const selectedMls = detailParams.get('mls');
const selectedProperty = window.PROPERTIES.find((item) => item.mls === selectedMls);
const detailCurrency = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
const safeText = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');

if (!selectedProperty) {
  detailRoot.innerHTML = '<section class="detail-empty"><h1>Imóvel não encontrado</h1><p>Este imóvel pode ter sido atualizado ou retirado da seleção.</p><a class="button" href="imoveis.html">Ver imóveis disponíveis</a></section>';
} else {
  document.title = `${selectedProperty.address} | Investir Flórida`;
  const message = encodeURIComponent(`Olá, tenho interesse no imóvel MLS ${selectedProperty.mls}.`);
  const details = selectedProperty.specs.length ? selectedProperty.specs.map((spec) => `<li>${safeText(spec)}</li>`).join('') : '<li>Detalhes adicionais sob consulta</li>';
  const images = selectedProperty.images || [];
  const galleryMarkup = images.length
    ? `<div class="gallery-stage">
        <button class="gallery-arrow gallery-prev" type="button" aria-label="Foto anterior">‹</button>
        <img id="gallery-main" src="${safeText(images[0])}" alt="Foto 1 do imóvel MLS ${safeText(selectedProperty.mls)}">
        <button class="gallery-arrow gallery-next" type="button" aria-label="Próxima foto">›</button>
      </div>
      <div class="gallery-meta"><span id="gallery-counter">1 de ${images.length}</span><span>MLS ${safeText(selectedProperty.mls)}</span></div>
      <div class="gallery-thumbnails" aria-label="Miniaturas da galeria">
        ${images.map((image, index) => `<button type="button" class="gallery-thumbnail${index === 0 ? ' active' : ''}" data-index="${index}" aria-label="Abrir foto ${index + 1}"><img src="${safeText(image)}" alt="" loading="lazy"></button>`).join('')}
      </div>`
    : `<div class="detail-photo-placeholder">${safeText(selectedProperty.photoNote || 'Fotografias em atualização')}</div>`;
  detailRoot.innerHTML = `
    <article class="detail-layout">
      <section class="detail-gallery">${galleryMarkup}</section>
      <section class="detail-content">
        <div class="property-topline"><span>${safeText(selectedProperty.status)}</span><small>MLS ${safeText(selectedProperty.mls)}</small></div>
        <p class="property-type">${safeText(selectedProperty.type)}</p>
        <h1>${safeText(selectedProperty.address)}</h1>
        <p class="property-location">${safeText(selectedProperty.location)}</p>
        <p class="detail-price">${detailCurrency.format(selectedProperty.price)} ${selectedProperty.period ? `<small>${safeText(selectedProperty.period)}</small>` : ''}</p>
        <h2>Informações básicas</h2>
        <ul class="detail-specs">${details}</ul>
        <p class="detail-note">Disponibilidade, valor e informações sujeitos a confirmação no atendimento.</p>
        <a class="button detail-contact" href="https://wa.me/5511993633555?text=${message}" target="_blank" rel="noopener">Solicitar informações</a>
      </section>
    </article>`;

  if (images.length) {
    let currentIndex = 0;
    const mainImage = document.querySelector('#gallery-main');
    const counter = document.querySelector('#gallery-counter');
    const thumbnails = [...document.querySelectorAll('.gallery-thumbnail')];
    const showImage = (index) => {
      currentIndex = (index + images.length) % images.length;
      mainImage.src = images[currentIndex];
      mainImage.alt = `Foto ${currentIndex + 1} do imóvel MLS ${selectedProperty.mls}`;
      counter.textContent = `${currentIndex + 1} de ${images.length}`;
      thumbnails.forEach((thumbnail, thumbnailIndex) => thumbnail.classList.toggle('active', thumbnailIndex === currentIndex));
      thumbnails[currentIndex].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
    };
    document.querySelector('.gallery-prev').addEventListener('click', () => showImage(currentIndex - 1));
    document.querySelector('.gallery-next').addEventListener('click', () => showImage(currentIndex + 1));
    thumbnails.forEach((thumbnail) => thumbnail.addEventListener('click', () => showImage(Number(thumbnail.dataset.index))));
    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowLeft') showImage(currentIndex - 1);
      if (event.key === 'ArrowRight') showImage(currentIndex + 1);
    });
  }
}
