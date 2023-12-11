const items = [
    {
      name: 'STORMTROOPER LIGHTSABER',
      image: '/img/star-wars/trooper-1.webp',
      price: 1799.99,
      category: 'STAR WARS'
    },
    {
      name: 'PIDGEOTTO',
      image: '/img/pokemon/pidgeotto-1.webp',
      price: 1799.99,
      category: 'POKEMON'
    },
    {
      name: 'VULPIX',
      image: '/img/pokemon/vulpix-1.webp',
      price: 1799.99,
      category: 'POKEMON'
    },
    {
        name: 'PIKACHU',
        image: '/img/pokemon/pikachu-1.webp',
        price: 1799.99,
        category: 'POKEMON'
    },
    {
        name: 'DRAGONITE',
        image: '/img/pokemon/dragonite-1.webp',
        price: 1799.99,
        category: 'POKEMON'
    },
    {
        name: 'CHARMANDER',
        image: '/img/pokemon/charmander-1.webp',
        price: 1799.99,
        category: 'POKEMON'
    },
    {
        name: 'BOBBAFETH',
        image: '/img/star-wars/bobbafeth-1.webp',
        price: 1799.99,
        category: 'STAR WARS'
    },
    {
        name: 'LUKE',
        image: '/img/star-wars/luke-1.webp',
        price: 1799.99,
        category: 'STAR WARS'
    },
    {
        name: 'BABY YODA',
        image: '/img/star-wars/baby-yoda-1.webp',
        category: 'STAR WARS'
    },
  ];
  

  function mostrarTienda(req, res) {
    res.render('shop/shop', { items: items });
  }
  
  module.exports = {
    mostrarTienda
  };
  