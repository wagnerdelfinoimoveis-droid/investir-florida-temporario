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
  detailRoot.innerHTML = `
    <article class="detail-layout">
      <section class="detail-gallery"><img src="${safeText(selectedProperty.image)}" alt="Imagem do imóvel MLS ${safeText(selectedProperty.mls)}"><p>Imagem principal. Galeria completa em preparação.</p></section>
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
}
