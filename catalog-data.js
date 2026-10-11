const gallery = (mls, count) => Array.from(
  { length: count },
  (_, index) => `https://investir-florida-previa.housecenterimoveis.chatgpt.site/assets/galleries/${mls}/${mls}_${String(index + 1).padStart(2, '0')}.jpg`
);

const galleryWithCover = (mls, count, coverNumber) => {
  const images = gallery(mls, count);
  const cover = images.splice(coverNumber - 1, 1)[0];
  return cover ? [cover, ...images] : images;
};

const localGallery = (mls, count) => Array.from(
  { length: count },
  (_, index) => `assets/galleries/${mls}/${mls}_${String(index + 1).padStart(2, '0')}.jpg`
);

window.PROPERTIES = [
  { mls: 'O6432344', category: 'locacao', status: 'Para locação', type: 'Imóvel residencial', address: '7270 Westpointe Blvd, unidade 910', location: 'Condado de Orange, Flórida', price: 2000, period: 'por mês', specs: ['3 quartos', '2 banheiros', '132,20 m² (1.423 sqft)', 'Piscina do condomínio', 'Construído em 1994'], images: localGallery('O6417361', 26) },
  { mls: 'O6431425', category: 'comercial', status: 'Locação comercial', type: 'Imóvel comercial', address: '7901 Kingspointe Pkwy', location: 'Condado de Orange, Flórida', price: 9325, period: 'por mês', specs: ['Construído em 2005'], images: gallery('O6431425', 16) },
  { mls: 'O6424993', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '5383 Vista Lago Dr', location: 'Condado de Orange, Flórida', price: 419000, period: '', specs: ['4 quartos', '3 banheiros', '135,45 m² (1.458 sqft)', 'Construído em 2026'], images: gallery('O6424993', 37) },
  { mls: 'O6424751', category: 'locacao', status: 'Para locação', type: 'Imóvel residencial', address: '5347 Vista Lago Dr', location: 'Condado de Orange, Flórida', price: 2750, period: 'por mês', specs: ['4 quartos', '3 banheiros (2 completos e 1 lavabo)', '135,45 m² (1.458 sqft)', 'Garagem para 1 veículo', 'Construído em 2026'], images: localGallery('O6424751', 39) },
  { mls: 'O6424750', category: 'locacao', status: 'Para locação', type: 'Imóvel residencial', address: '5341 Vista Lago Dr', location: 'Condado de Orange, Flórida', price: 2750, period: 'por mês', specs: ['4 quartos', '3 banheiros', '135,45 m² (1.458 sqft)', 'Construído em 2026'], images: gallery('O6424993', 37) },
  { mls: 'O6422812', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '8192 Ludington Cir', location: 'Condado de Orange, Flórida', price: 2200000, period: '', specs: ['6 dormitórios', '4 banheiros', '400,51 m² (4.311 sqft)', 'Piscina privativa', 'Garagem para 3 veículos', 'Construído em 2018'], images: [
    ...gallery('O6422812', 18),
    'assets/galleries/O6422812/O6422812_19.jpg',
    'assets/galleries/O6422812/O6422812_20.jpg',
    'assets/galleries/O6422812/O6422812_21.jpg',
    'assets/galleries/O6422812/O6422812_22.jpg',
    'assets/galleries/O6422812/O6422812_23.jpg',
    'assets/galleries/O6422812/O6422812_24.jpg'
  ] },
  { mls: 'O6422241', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '4642 River Gem Ave', location: 'Condado de Orange, Flórida', price: 798000, period: '', specs: ['5 quartos', '5 banheiros', '313,36 m² (3.373 sqft)', 'Piscina do condomínio', 'Construído em 2006'], images: gallery('O6422241', 52) },
  { mls: 'O6421698', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '11750 Chateaubriand Ave', location: 'Condado de Orange, Flórida', price: 1145000, period: '', specs: ['5 quartos', '6 banheiros', '305,84 m² (3.292 sqft)', 'Piscina privativa', 'Construído em 2012'], images: gallery('O6421698', 44) },
  { mls: 'O6417364', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '6466 Cava Alta Dr, unidade 2', location: 'Condado de Orange, Flórida', price: 194000, period: '', specs: ['3 quartos', '2 banheiros', '115,85 m² (1.247 sqft)', 'Piscina do condomínio', 'Construído em 2005'], images: galleryWithCover('O6417364', 25, 4) },
  { mls: 'O6417366', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '2106 Stillington St', location: 'Condado de Orange, Flórida', price: 1245000, period: '', specs: ['4 quartos', '356,47 m² (3.837 sqft)', 'Piscina privativa', 'Construído em 1998'], images: galleryWithCover('O6417366', 72, 6) },
  { mls: 'O6417361', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '7270 Westpointe Blvd, unidade 910', location: 'Condado de Orange, Flórida', price: 225000, period: '', specs: ['3 quartos', '2 banheiros', '132,20 m² (1.423 sqft)', 'Garagem para 1 veículo', 'Piscina do condomínio', 'Construído em 1994'], images: localGallery('O6417361', 26) },
  { mls: 'O6415369', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '2484 San Tecla St, unidade 4', location: 'Condado de Orange, Flórida', price: 230000, period: '', specs: ['3 quartos', '2 banheiros', '115,85 m² (1.247 sqft)', 'Piscina do condomínio', 'Construído em 2005'], images: gallery('O6415369', 34) },
  { mls: 'O6409623', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '6380 Contessa Dr, unidade 3', location: 'Condado de Orange, Flórida', price: 254900, period: '', specs: ['2 quartos', '130,81 m² (1.408 sqft)', 'Piscina do condomínio', 'Construído em 2005'], images: gallery('O6409623', 20) },
  { mls: 'O6406846', category: 'venda', status: 'Terreno à venda', type: 'Terreno', address: '4512 S Hiawassee Rd', location: 'Condado de Orange, Flórida', price: 1800000, period: '', specs: ['17.321 m² (4,28 acres)'], images: [3, 2, 4, 5, 6, 7, 8, 1].map((number) => `assets/galleries/O6406846/O6406846_${String(number).padStart(2, '0')}.jpg`) },
  { mls: 'O6403354', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '7181 Ryedale Ct', location: 'Condado de Sarasota, Flórida', price: 1076000, period: '', specs: ['3 quartos', '269,79 m² (2.904 sqft)', 'Piscina privativa', 'Construído em 2019'], images: gallery('O6403354', 4) },
  { mls: 'O6403348', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '4512 S Hiawassee Rd', location: 'Condado de Orange, Flórida', price: 1800000, period: '', specs: ['3 quartos', '3 banheiros', '231,33 m² (2.490 sqft)', 'Piscina privativa', 'Construído em 1981'], images: gallery('O6403348', 7) },
  { mls: 'O6388479', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '118 Dahlia Village Cir', location: 'Condado de Orange, Flórida', price: 248000, period: '', specs: ['3 quartos', '2 banheiros', '137,50 m² (1.480 sqft)', 'Construído em 1983'], images: gallery('O6388479', 6) },
  { mls: 'O6387411', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '734 Creeping Fig St', location: 'Condado de Orange, Flórida', price: 654900, period: '', specs: ['4 quartos', '4 banheiros (3 completos e 1 lavabo)', '256,97 m² (2.766 sqft)', 'Garagem para 2 veículos', 'Construído em 2024'], images: [2, 1, ...Array.from({ length: 80 }, (_, index) => index + 3)].map((number) => `assets/galleries/O6387411/O6387411_${String(number).padStart(2, '0')}.jpg`) },
  { mls: 'O6383422', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '225 Southern Pecan Cir', location: 'Condado de Orange, Flórida', price: 269000, period: '', specs: ['2 quartos', '2 banheiros', '117,43 m² (1.264 sqft)', 'Piscina do condomínio', 'Construído em 2005'], images: galleryWithCover('O6383422', 16, 16) },
  { mls: 'O6369048', category: 'venda', status: 'Terreno à venda', type: 'Terreno', address: '1001 Druid Rd E', location: 'Condado de Pinellas, Flórida', price: 199000, period: '', specs: ['Até 1.011,71 m² (1/4 acre)'], images: gallery('O6369048', 5) },
  { mls: 'O6353267', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '2548 Grassy Point Dr, unidade 202', location: 'Condado de Seminole, Flórida', price: 177000, period: '', specs: ['3 quartos', '2 banheiros', '102,19 m² (1.100 sqft)', 'Piscina do condomínio', 'Construído em 1991'], images: localGallery('O6353267', 19) },
  { mls: 'O6326872', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '6434 Cava Alta Dr, unidade 2', location: 'Condado de Orange, Flórida', price: 275000, period: '', specs: ['3 quartos', '2 banheiros', '131,18 m² (1.412 sqft)', 'Piscina do condomínio', 'Construído em 2005'], images: gallery('O6326872', 26) },
  { mls: 'O6305521', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '4731 Clock Tower Dr, unidade 104', location: 'Condado de Osceola, Flórida', price: 275000, period: '', specs: ['2 quartos', '2 banheiros', '104,61 m² (1.126 sqft)', 'Piscina do condomínio', 'Construído em 2017'], images: localGallery('O6305521', 17) },
  { mls: 'O6291660', category: 'venda', status: 'À venda', type: 'Imóvel residencial', address: '2277 Crossbow St', location: 'Condado de Lake, Flórida', price: 625000, period: '', specs: ['5 quartos', '3 banheiros', '248,98 m² (2.680 sqft)', 'Garagem para 2 veículos', 'Construído em 2023'], images: localGallery('O6291660', 31) },
  { mls: 'O6284664', category: 'venda', status: 'Terreno à venda', type: 'Terreno', address: 'Lot 2 Mercado Ct', location: 'Condado de Lake, Flórida', price: 369000, period: '', specs: ['17.644 m² (4,36 acres)'], images: localGallery('O6284664', 14) }
].map((property) => ({ ...property, image: property.images[0] || '' }));
