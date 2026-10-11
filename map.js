(function () {
  const el = document.querySelector('#property-map');
  if (!el || !window.L || !window.PROPERTIES) return;

  const escapeHtml = (value) => String(value)
    .replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;').replaceAll("'", '&#039;');
  const usd = new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'USD', maximumFractionDigits: 0 });
  const decimal = (value) => value.toLocaleString('pt-BR', { maximumFractionDigits: 1 });
  const shortPrice = (property) => {
    if (property.period) return `US$ ${property.price.toLocaleString('pt-BR')}/mês`;
    if (property.price >= 1000000) return `US$ ${decimal(property.price / 1000000)} mi`;
    return `US$ ${Math.round(property.price / 1000)} mil`;
  };

  const map = L.map(el, { scrollWheelZoom: false, zoomControl: true });
  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright" target="_blank" rel="noopener">OpenStreetMap</a>'
  }).addTo(map);
  map.on('click', () => map.scrollWheelZoom.enable());
  el.addEventListener('mouseleave', () => map.scrollWheelZoom.disable());

  const cluster = L.markerClusterGroup({
    showCoverageOnHover: false,
    maxClusterRadius: 46,
    iconCreateFunction: (group) => L.divIcon({
      className: 'map-cluster',
      html: `<span>${group.getChildCount()}</span>`,
      iconSize: [42, 42]
    })
  });
  map.addLayer(cluster);

  const markers = window.PROPERTIES.filter((property) => property.coords).map((property) => {
    const detailsUrl = `imovel.html?mls=${encodeURIComponent(property.mls)}`;
    const marker = L.marker(property.coords, {
      title: property.address,
      icon: L.divIcon({
        className: 'map-price-wrap',
        html: `<span class="map-price map-price-${escapeHtml(property.category)}">${escapeHtml(shortPrice(property))}</span>`,
        iconSize: null
      })
    });
    marker.bindPopup(`<a class="map-popup" href="${detailsUrl}">${property.image ? `<img src="${escapeHtml(property.image)}" alt="" loading="lazy">` : ''}<span class="map-popup-status">${escapeHtml(property.status)} · MLS ${escapeHtml(property.mls)}</span><strong>${escapeHtml(property.address)}</strong><span class="map-popup-price">${usd.format(property.price)}${property.period ? ` <small>${escapeHtml(property.period)}</small>` : ''}</span><span class="map-popup-link">Ver detalhes</span></a>`, { minWidth: 220, maxWidth: 240 });
    marker.category = property.category;
    return marker;
  });

  const show = (filter) => {
    const visible = markers.filter((marker) => filter === 'all' || marker.category === filter);
    cluster.clearLayers();
    cluster.addLayers(visible);
    if (visible.length) {
      map.fitBounds(L.latLngBounds(visible.map((marker) => marker.getLatLng())), { padding: [45, 45], maxZoom: 13 });
    }
  };

  document.querySelectorAll('.filter-button').forEach((button) => {
    button.addEventListener('click', () => show(button.dataset.filter));
  });
  show('all');
})();
