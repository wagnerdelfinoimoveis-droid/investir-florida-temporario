const grid = document.querySelector('#property-grid');
const formatUsd = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'USD',
  maximumFractionDigits: 0
});

const escapeHtml = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;')
  .replaceAll('"', '&quot;')
  .replaceAll("'", '&#039;');

grid.innerHTML = window.PROPERTIES.map((property) => {
  const message = encodeURIComponent(`Olá, tenho interesse no imóvel MLS ${property.mls}.`);
  const specs = property.specs.map((spec) => `<li>${escapeHtml(spec)}</li>`).join('');
  const detailsUrl = `imovel.html?mls=${encodeURIComponent(property.mls)}`;
  const image = property.image
    ? `<img src="${escapeHtml(property.image)}" alt="Imagem do imóvel MLS ${escapeHtml(property.mls)}" loading="lazy">`
    : `<span class="property-photo-placeholder">${escapeHtml(property.photoNote || 'Fotografias em atualização')}</span>`;
  return `
    <article class="property-card" data-category="${escapeHtml(property.category)}">
      <a class="property-image-link" href="${detailsUrl}" aria-label="Ver detalhes do imóvel MLS ${escapeHtml(property.mls)}">
        ${image}
      </a>
      <div class="property-content">
        <div class="property-topline"><span>${escapeHtml(property.status)}</span><small>MLS ${escapeHtml(property.mls)}</small></div>
        <p class="property-type">${escapeHtml(property.type)}</p>
        <h2>${escapeHtml(property.address)}</h2>
        <p class="property-location">${escapeHtml(property.location)}</p>
        <p class="property-price">${formatUsd.format(property.price)} ${property.period ? `<small>${escapeHtml(property.period)}</small>` : ''}</p>
        <ul>${specs}</ul>
        <div class="property-actions">
          <a class="details-link" href="${detailsUrl}">Ver detalhes</a>
          <a href="https://wa.me/5511993633555?text=${message}" target="_blank" rel="noopener">Solicitar informações</a>
        </div>
      </div>
    </article>`;
}).join('');

document.querySelectorAll('.filter-button').forEach((button) => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    document.querySelectorAll('.filter-button').forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('.property-card').forEach((card) => {
      card.hidden = filter !== 'all' && card.dataset.category !== filter;
    });
  });
});
