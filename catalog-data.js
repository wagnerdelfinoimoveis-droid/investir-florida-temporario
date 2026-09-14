const gallery = (mls, count) => Array.from(
  { length: count },
  (_, index) => `https://investir-florida-previa.housecenterimoveis.chatgpt.site/assets/galleries/${mls}/${mls}_${String(index + 1).padStart(2, '0')}.jpg`
);

const galleryWithCover = (mls, count, coverNumber) => {
  const images = gallery(mls, count);
  const cover = images.splice(coverNumber - 1, 1)[0];
  return cover ? [cover, ...images] : images;
};

window.PROPERTIES = [
  { mls: 'O6433319', category: 'comercial', status: 'Locação comercial', type: 'Imóvel comercial', address: '7901 Kingspointe Pkwy', location: 'Condado de Orange, Flórida', price: 4622, period: 'por mês', specs: ['1.650 pés²', 'Construído em 2005'], images: gallery('O6433319', 19) },
  { mls: 'O6431425', category: 'comercial', status: 'Locação comercial', type: 'Imóvel comercial', address: '7901 Kingspointe Pkwy', location: 'Condado de Orange, Flórida', price: 9325, period: 'por mês', specs: ['Construído em 2005'], images: gallery('O6431425', 16) },
  { mls: 'O6424993', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '5383 Vista Lago Dr', location: 'Condado de Orange, Flórida', price: 419000, period: '', specs: ['4 quartos', '3 banheiros', '1.458 pés²', 'Construído em 2026'], images: gallery('O6424993', 37) },
  { mls: 'O6424750', category: 'locacao', status: 'Para locação', type: 'Imóvel residencial', address: '5341 Vista Lago Dr', location: 'Condado de Orange, Flórida', price: 2950, period: 'por mês', specs: ['4 quartos', '3 banheiros', '1.458 pés²', 'Construído em 2026'], images: gallery('O6424993', 37) },
  { mls: 'O6422812', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '8192 Ludington Cir', location: 'Condado de Orange, Flórida', price: 2200000, period: '', specs: ['4 quartos', '4.311 pés²', 'Piscina privativa', 'Construído em 2018'], images: gallery('O6422812', 21) },
  { mls: 'O6422241', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '4642 River Gem Ave', location: 'Condado de Orange, Flórida', price: 798000, period: '', specs: ['5 quartos', '5 banheiros', '3.373 pés²', 'Piscina do condomínio', 'Construído em 2006'], images: gallery('O6422241', 52) },
  { mls: 'O6421698', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '11750 Chateaubriand Ave', location: 'Condado de Orange, Flórida', price: 1150000, period: '', specs: ['5 quartos', '6 banheiros', '3.292 pés²', 'Piscina privativa', 'Construído em 2012'], images: gallery('O6421698', 44) },
  { mls: 'O6417364', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '6466 Cava Alta Dr, unidade 2', location: 'Condado de Orange, Flórida', price: 194000, period: '', specs: ['3 quartos', '2 banheiros', '1.247 pés²', 'Piscina do condomínio', 'Construído em 2005'], images: galleryWithCover('O6417364', 25, 4) },
  { mls: 'O6417366', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '2106 Stillington St', location: 'Condado de Orange, Flórida', price: 1295000, period: '', specs: ['4 quartos', '3.837 pés²', 'Piscina privativa', 'Construído em 1998'], images: galleryWithCover('O6417366', 72, 6) },
  { mls: 'O6415369', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '2484 San Tecla St, unidade 4', location: 'Condado de Orange, Flórida', price: 230000, period: '', specs: ['3 quartos', '2 banheiros', '1.247 pés²', 'Piscina do condomínio', 'Construído em 2005'], images: gallery('O6415369', 34) },
  { mls: 'O6412462', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '2484 San Tecla St, unidade 2', location: 'Condado de Orange, Flórida', price: 194900, period: '', specs: ['3 quartos', '2 banheiros', '1.447 pés²', 'Piscina do condomínio', 'Construído em 2005'], images: gallery('O6412462', 22) },
  { mls: 'O6409623', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '6380 Contessa Dr, unidade 3', location: 'Condado de Orange, Flórida', price: 254900, period: '', specs: ['2 quartos', '1.408 pés²', 'Piscina do condomínio', 'Construído em 2005'], images: gallery('O6409623', 20) },
  { mls: 'O6403354', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '7181 Ryedale Ct', location: 'Condado de Sarasota, Flórida', price: 1076000, period: '', specs: ['3 quartos', '2.904 pés²', 'Piscina privativa', 'Construído em 2019'], images: gallery('O6403354', 4) },
  { mls: 'O6403348', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '4512 S Hiawassee Rd', location: 'Condado de Orange, Flórida', price: 1800000, period: '', specs: ['3 quartos', '3 banheiros', '2.490 pés²', 'Piscina privativa', 'Construído em 1981'], images: gallery('O6403348', 7) },
  { mls: 'O6388479', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '118 Dahlia Village Cir', location: 'Condado de Orange, Flórida', price: 248000, period: '', specs: ['3 quartos', '2 banheiros', '1.480 pés²', 'Construído em 1983'], images: gallery('O6388479', 6) },
  { mls: 'O6383422', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '225 Southern Pecan Cir', location: 'Condado de Orange, Flórida', price: 279900, period: '', specs: ['2 quartos', '2 banheiros', '1.264 pés²', 'Piscina do condomínio', 'Construído em 2005'], images: galleryWithCover('O6383422', 16, 16) },
  { mls: 'O6369048', category: 'venda', status: 'Terreno à venda', type: 'Terreno', address: '1001 Druid Rd E', location: 'Condado de Pinellas, Flórida', price: 199000, period: '', specs: ['Até 1/4 de acre'], images: gallery('O6369048', 5) },
  { mls: 'O6326872', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '6434 Cava Alta Dr, unidade 2', location: 'Condado de Orange, Flórida', price: 275000, period: '', specs: ['3 quartos', '2 banheiros', '1.412 pés²', 'Piscina do condomínio', 'Construído em 2005'], images: gallery('O6326872', 26) }
].map((property) => ({ ...property, image: property.images[0] || '' }));
