const products = [
  {
    id: 'shashlik-lamb',
    category: 'Shashlik',
    name: { uz: 'kuskavoy shashlik', ru: 'Кусковой шашлык', en: 'Diced kebab' },
    desc: { uz: 'Cho‘g‘da pishirilgan, yumshoq go‘sht', ru: 'На углях, мягкое мясо', en: 'Charcoal grilled, tender meat' },
    price: 48000,
    img: './images/kuskavoy.jpg',
  },
  {
    id: 'shashlik-beef',
    category: 'Shashlik',
    name: { uz: 'kavkaz shashlik', ru: 'кавказский шашлык', en: 'kavkaz shashlik' },
    desc: { uz: 'Yengil ziravorli, to‘yingan ta’m', ru: 'Легкие специи, насыщенный вкус', en: 'Light spices, rich taste' },
    price: 50000,
    img: './Images/kavkaz.jpg',
  },
  {
    id: 'shashlik-liver',
    category: 'Shashlik',
    name: { uz: 'Jigar shashlik', ru: 'Печеночный шашлык', en: 'Liver shashlik' },
    desc: { uz: 'Yengil marinad, yumshoq jigar', ru: 'Нежный маринад, мягкая печень', en: 'Gentle marinade, soft liver' },
    price: 44000,
    img: './Images/jigar.jpg',
  },
  {
    id: 'shashlik-lyulya',
    category: 'Shashlik',
    name: { uz: 'Qiyma shashlik', ru: 'Люля-кебаб', en: 'Lyulya kebab' },
    desc: { uz: 'Sharbatdor, do‘lchopon bilan', ru: 'Сочный, с укропом', en: 'Juicy minced kebab with herbs' },
    price: 44000,
    img: './Images/qiyma-shashlik.jpg',
  },
  {
    id: 'lagman',
    category: 'Milliy taomlar',
    name: { uz: 'Lag‘mon', ru: 'Лагман', en: 'Lagman' },
    desc: { uz: 'Qo‘l tortma ugra, go‘sht va sabzavot', ru: 'Домашняя лапша, мясо и овощи', en: 'Hand-pulled noodles with beef and veggies' },
    price: 30000,
    img: './images/lagmon.jpg',
  },
  {
    id: 'plov',
    category: 'Milliy taomlar',
    name: { uz: 'Osh (palov)', ru: 'Плов', en: 'Plov' },
    desc: { uz: 'An’anaviy palov, mol go‘shti va ziravorlar', ru: 'Традиционный плов с говядиной', en: 'Classic plov with beef and spices' },
    price: 30000,
    img: './images/osh.jpg',
  },
  {
    id: 'manti',
    category: 'Milliy taomlar',
    name: { uz: 'Manti', ru: 'Манты', en: 'Manti' },
    desc: { uz: 'Bug‘da pishgan qo‘y go‘shti va piyoz', ru: 'На пару с бараниной и луком', en: 'Steamed dumplings with lamb and onion' },
    price: 25000,
    img: './images/manti.jpg',
  },
  {
    id: 'shurva',
    category: 'Sho‘rva',
    name: { uz: 'Sho‘rva', ru: 'Шурпа', en: 'Shurpa' },
    desc: { uz: 'Sershira sho‘rva, sabzavotlar bilan', ru: 'Насыщенная шурпа с овощами', en: 'Rich broth with tender meat and veggies' },
    price: 28000,
    img: './images/shurva.jpg',
  },
  {
    id: 'salad-fresh',
    category: 'Salat',
    name: { uz: 'Yangi sabzavot salati', ru: 'Свежий салат', en: 'Fresh veggie salad' },
    desc: { uz: 'Pomidor, bodring, ko‘katlar', ru: 'Помидор, огурец, зелень', en: 'Tomato, cucumber, herbs' },
    price: 18000,
    img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=1000&q=80',
  },
  {
    id: 'salad-greek',
    category: 'Salat',
    name: { uz: 'chiroqchi salat', ru: 'Чиракчинский салат', en: 'Chirakchi salad' },
    desc: { uz: 'Feta, zaytun, sabzavotlar', ru: 'Фета, оливки, овощи', en: 'Feta, olives, crisp veggies' },
    price: 22000,
    img: './Images/chiroqchi.jpg',
  },
  {
    id: 'drink-tea',
    category: 'Ichimlik',
    name: { uz: 'Ko‘k choy', ru: 'Зеленый чай', en: 'Green tea' },
    desc: { uz: 'Qo‘zichog‘lik piyola', ru: 'Подача в пиале', en: 'Served hot in a piala' },
    price: 5000,
    img: './images/kuk.jpg',
  },
  {
    id: 'drink-kompot',
    category: 'Ichimlik',
    name: { uz: 'Mevali kompot', ru: 'Компот', en: 'Fruit compote' },
    desc: { uz: 'Tabiiy mevalardan', ru: 'Из натуральных фруктов', en: 'Made with seasonal fruits' },
    price: 10000,
    img: './images/mevali.jpg',
  },
];

const translations = {
  uz: {
    brand: 'Muhammad aka choyxonasi',
    tagline: 'Mazali – Halol – Hamyonbop',
    navHome: 'Bosh sahifa',
    navMenu: 'Menyu',
    navAbout: 'Biz haqimizda',
    navContact: 'Aloqa',
    navAdmin: 'Admin',
    cart: 'Savat',
    heroEyebrow: 'Muhammad aka choyxonasi',
    heroTitle: 'Mazali – Halol – Hamyonbop',
    heroDesc: 'Shashlik, lag‘mon, osh, manti va yana ko‘plab milliy taomlar — barcha ta’m talablar uchun.',
    heroMenu: 'Menyuni ko‘rish',
    heroOrder: 'Buyurtma berish',
    badgeFresh: 'Yangi mahsulotlar',
    badgeHalal: '100% halol go‘sht',
    badgeFast: 'Tez yetkazib berish',
    addToCart: 'Savatga qo‘shish',
    paymentLabel: 'To‘lov usuli',
    paymentCash: 'Naqd',
    paymentCard: 'Karta terminal',
    adminEyebrow: 'Admin panel',
    adminTitle: 'Buyurtmalarni ko‘rish',
    adminSub: 'Mahalliy (localStorage) ma’lumotlar, demo maqsadida. Parol: 1111',
    adminEnter: 'Kirish',
    adminEmpty: 'Hozircha buyurtma yo‘q.',
    menuEyebrow: 'Menyu',
    menuTitle: 'Taomlarimizni tanlang',
    menuSub: 'Shashlik, milliy taomlar, salatlar va ichimliklar — hammasi bir joyda.',
    aboutEyebrow: 'Biz haqimizda',
    aboutTitle: 'Mazali va halol taomlar',
    aboutText: 'Muhammad aka choyxonasida har bir taom sevgi va mahorat bilan tayyorlanadi. Yangi mahsulotlar, halol go‘sht va an’anaviy retseptlar asosida sizga chinakam ta’m tajribasini taqdim etamiz.',
    aboutPoint1: 'Cho‘g‘da pishirilgan shashliklar',
    aboutPoint2: 'Halol va yangi mahsulotlar',
    aboutPoint3: 'Tez va qulay xizmat',
    aboutNote: 'Milliy taomlarimizdan bahramand bo‘ling',
    contactEyebrow: 'Aloqa',
    contactTitle: 'Biz bilan bog‘laning',
    contactSub: 'Telefon orqali buyurtma qiling yoki manzilimizga tashrif buyuring.',
    phoneLabel: 'Telefon',
    addressLabel: 'Manzil',
    hoursLabel: 'Ish vaqti',
    addressValue: 'Qashqadaryo viloyati, Ko‘kdala tumani',
    hoursValue: 'Har kuni 10:00 – 23:00',
    cartTitle: 'Savat',
    cartSubtitle: 'Tanlangan ovqatlar',
    total: 'Jami',
    checkout: 'Buyurtma berish',
    orderTitle: 'Buyurtma',
    orderSubtitle: 'Malumotlarni kiriting',
    nameLabel: 'Ism',
    phoneLabel2: 'Telefon',
    addressLabel2: 'Manzil',
    mapHint: 'Xaritada joylashuvingizni belgilang (faqat Ko\'kdala tumani hududi)',
    minOrderAmount: 'Kamida 30,000 so\'m lik buyurtma berishingiz kerak',
    orderSummary: 'Buyurtma tarkibi',
    confirmOrder: 'Buyurtmani yuborish',
    emptyCart: 'Savat bo‘sh',
    added: 'Savatga qo‘shildi',
    updated: 'Yangilandi',
    orderPlaced: 'Buyurtma qabul qilindi',
    paymentTitle: 'To\'lov',
    paymentSubtitle: 'To\'lov usulini tanlang',
    paymeDesc: 'Karta orqali to\'lov',
    clickDesc: 'Karta orqali to\'lov',
    cardInfo: 'Karta ma\'lumotlari:',
    proceedToPayment: 'To\'lov qilish',
    paymentNote: '⚠️ Buyurtma berishdan oldin to\'lov qilishingiz kerak',
    paymentNoteInfo: '⚠️ Agar muammo yoki boshqa kamchilik bo\'lsa, <a href="tel:+998931155646">+998 93 115 56 46</a> raqamiga qo\'ng\'iroq qiling.',
    paymentSuccess: 'To\'lov muvaffaqiyatli amalga oshirildi',
    paymentRequired: 'Iltimos, to\'lov qiling',
    orderSent: 'Buyurtma Telegram\'ga yuborildi',
  },
  ru: {
    brand: 'Чайхона «Мухаммад ака»',
    tagline: 'Вкусно – Халал – Доступно',
    navHome: 'Главная',
    navMenu: 'Меню',
    navAbout: 'О нас',
    navContact: 'Контакты',
    navAdmin: 'Админ',
    cart: 'Корзина',
    heroEyebrow: 'Чайхона «Мухаммад ака»',
    heroTitle: 'Вкусно – Халал – Доступно',
    heroDesc: 'Шашлык, лагман, плов, манты и другие блюда для любого вкуса.',
    heroMenu: 'Смотреть меню',
    heroOrder: 'Оформить заказ',
    badgeFresh: 'Свежие продукты',
    badgeHalal: '100% халяль',
    badgeFast: 'Быстрая доставка',
    addToCart: 'Добавить в корзину',
    paymentLabel: 'Способ оплаты',
    paymentCash: 'Наличные',
    paymentCard: 'Терминал',
    adminEyebrow: 'Админ-панель',
    adminTitle: 'Просмотр заказов',
    adminSub: 'Локальные данные (demo). Пароль: 1111',
    adminEnter: 'Войти',
    adminEmpty: 'Пока нет заказов.',
    menuEyebrow: 'Меню',
    menuTitle: 'Выберите блюда',
    menuSub: 'Шашлык, национальные блюда, салаты и напитки — всё рядом.',
    aboutEyebrow: 'О нас',
    aboutTitle: 'Вкусно и халяль',
    aboutText: 'В чайхоне «Мухаммад ака» каждое блюдо готовится с любовью. Свежие продукты, халяльное мясо и традиционные рецепты дарят настоящий вкус.',
    aboutPoint1: 'Шашлык на углях',
    aboutPoint2: 'Свежие халяль продукты',
    aboutPoint3: 'Быстро и удобно',
    aboutNote: 'Насладитесь нашими блюдами',
    contactEyebrow: 'Контакты',
    contactTitle: 'Свяжитесь с нами',
    contactSub: 'Звоните или приходите по адресу.',
    phoneLabel: 'Телефон',
    addressLabel: 'Адрес',
    hoursLabel: 'Время работы',
    addressValue: 'Кашкадарья, Кукдала район',
    hoursValue: 'Ежедневно 10:00 – 23:00',
    cartTitle: 'Корзина',
    cartSubtitle: 'Выбранные блюда',
    total: 'Итого',
    checkout: 'Оформить',
    orderTitle: 'Заказ',
    orderSubtitle: 'Введите данные',
    nameLabel: 'Имя',
    phoneLabel2: 'Телефон',
    addressLabel2: 'Адрес',
    mapHint: 'Укажите ваше местоположение на карте (только район Кокдала)',
    minOrderAmount: 'Минимальная сумма заказа 30,000 сум',
    orderSummary: 'Состав заказа',
    confirmOrder: 'Отправить заказ',
    emptyCart: 'Корзина пуста',
    added: 'Добавлено в корзину',
    updated: 'Обновлено',
    orderPlaced: 'Заказ принят',
    paymentTitle: 'Оплата',
    paymentSubtitle: 'Выберите способ оплаты',
    paymeDesc: 'Оплата картой',
    clickDesc: 'Оплата картой',
    cardInfo: 'Данные карты:',
    proceedToPayment: 'Оплатить',
    paymentNote: '⚠️ Перед оформлением заказа необходимо оплатить',
    paymentNoteInfo: '⚠️ Если возникнут проблемы или вопросы, звоните по номеру <a href="tel:+998931155646">+998 93 115 56 46</a>.',
    paymentSuccess: 'Оплата успешно выполнена',
    paymentRequired: 'Пожалуйста, произведите оплату',
    orderSent: 'Заказ отправлен в Telegram',
  },
  en: {
    brand: 'Muhammad Aka Teahouse',
    tagline: 'Tasty – Halal – Affordable',
    navHome: 'Home',
    navMenu: 'Menu',
    navAbout: 'About',
    navContact: 'Contact',
    navAdmin: 'Admin',
    cart: 'Cart',
    heroEyebrow: 'Muhammad Aka Teahouse',
    heroTitle: 'Tasty – Halal – Affordable',
    heroDesc: 'Shashlik, lagman, plov, manti and more — made for every taste.',
    heroMenu: 'View menu',
    heroOrder: 'Place order',
    badgeFresh: 'Fresh ingredients',
    badgeHalal: '100% halal meat',
    badgeFast: 'Fast delivery',
    addToCart: 'Add to cart',
    paymentLabel: 'Payment method',
    paymentCash: 'Cash',
    paymentCard: 'Card terminal',
    adminEyebrow: 'Admin panel',
    adminTitle: 'View orders',
    adminSub: 'LocalStorage demo. Password: 1111',
    adminEnter: 'Enter',
    adminEmpty: 'No orders yet.',
    menuEyebrow: 'Menu',
    menuTitle: 'Choose your dishes',
    menuSub: 'Shashlik, national dishes, salads and drinks — all in one place.',
    aboutEyebrow: 'About',
    aboutTitle: 'Delicious and halal',
    aboutText: 'At Muhammad Aka, every dish is made with care. Fresh ingredients, halal meat, and traditional recipes bring you authentic flavor.',
    aboutPoint1: 'Charcoal-grilled shashlik',
    aboutPoint2: 'Fresh halal produce',
    aboutPoint3: 'Fast and easy service',
    aboutNote: 'Enjoy our national dishes',
    contactEyebrow: 'Contact',
    contactTitle: 'Get in touch',
    contactSub: 'Call us or visit our address.',
    phoneLabel: 'Phone',
    addressLabel: 'Address',
    hoursLabel: 'Hours',
    addressValue: 'Kashkadarya, Kukdala district',
    hoursValue: 'Daily 10:00 – 23:00',
    cartTitle: 'Cart',
    cartSubtitle: 'Selected items',
    total: 'Total',
    checkout: 'Checkout',
    orderTitle: 'Order',
    orderSubtitle: 'Enter your details',
    nameLabel: 'Name',
    phoneLabel2: 'Phone',
    addressLabel2: 'Address',
    mapHint: 'Select your location on the map (Kukdala district only)',
    minOrderAmount: 'Minimum order amount is 30,000 soums',
    orderSummary: 'Order summary',
    confirmOrder: 'Submit order',
    emptyCart: 'Cart is empty',
    added: 'Added to cart',
    updated: 'Updated',
    orderPlaced: 'Order received',
    paymentTitle: 'Payment',
    paymentSubtitle: 'Choose payment method',
    paymeDesc: 'Pay by card',
    clickDesc: 'Pay by card',
    cardInfo: 'Card details:',
    proceedToPayment: 'Proceed to payment',
    paymentNote: '⚠️ Payment required before placing order',
    paymentNoteInfo: '⚠️ If you have any problems or issues, please call <a href="tel:+998931155646">+998 93 115 56 46</a>.',
    paymentSuccess: 'Payment successful',
    paymentRequired: 'Please complete payment',
    orderSent: 'Order sent to Telegram',
  },
};

const TELEGRAM_BOT_TOKEN = '7740544193:AAHzt3wy9Jod6Jsg_duIg0GzB-QLRE0jX6I';
const TELEGRAM_CHAT_ID = '5832603281'; // Buyurtmalar shu ID ga yuboriladi


let currentLang = localStorage.getItem('lang') || 'uz';
let cart = JSON.parse(localStorage.getItem('cart') || '[]');
let pendingOrder = null; // To'lov qilingan buyurtma

let map = null;
let marker = null;
let selectedLocation = null;

const menuGrid = document.getElementById('menuGrid');
const filtersEl = document.getElementById('filters');
const cartPanel = document.getElementById('cartPanel');
const cartItemsEl = document.getElementById('cartItems');
const cartCountEl = document.getElementById('cartCount');
const cartTotalEl = document.getElementById('cartTotal');
const orderModal = document.getElementById('orderModal');
const orderList = document.getElementById('orderList');
const orderTotal = document.getElementById('orderTotal');
const toast = document.getElementById('toast');
const paymentModal = document.getElementById('paymentModal');
const closePaymentModalBtn = document.getElementById('closePaymentModal');
const paymeBtn = document.getElementById('paymeBtn');
const clickBtn = document.getElementById('clickBtn');
const proceedToPaymentBtn = document.getElementById('proceedToPayment');
const paymentMethodInput = document.getElementById('paymentMethod');
const paymentProofInput = document.getElementById('paymentProof');

const formatPrice = (value) => `${value.toLocaleString('uz-UZ')} so‘m`;

const renderFilters = () => {
  const categories = ['All', ...new Set(products.map(p => p.category))];
  filtersEl.innerHTML = '';
  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.className = `filter-btn ${cat === 'All' ? 'active' : ''}`;
    btn.dataset.category = cat;
    btn.textContent = translateCategory(cat);
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      renderMenu(cat);
    });
    filtersEl.appendChild(btn);
  });
};

const translateCategory = (cat) => {
  const map = {
    All: { uz: 'Hammasi', ru: 'Все', en: 'All' },
    Shashlik: { uz: 'Shashlik', ru: 'Шашлык', en: 'Shashlik' },
    'Milliy taomlar': { uz: 'Milliy taomlar', ru: 'Нац. блюда', en: 'National' },
    'Ichimlik': { uz: 'Ichimliklar', ru: 'Напитки', en: 'Drinks' },
    'Salat': { uz: 'Salatlar', ru: 'Салаты', en: 'Salads' },
    'Sho‘rva': { uz: 'Sho‘rva', ru: 'Шурпа', en: 'Shurpa' },
  };
  return (map[cat] && map[cat][currentLang]) || cat;
};

const renderMenu = (category = 'All') => {
  menuGrid.innerHTML = '';
  const filtered = category === 'All' ? products : products.filter(p => p.category === category);
  filtered.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'card';
    card.innerHTML = `
      <img src="${item.img}" alt="${item.name[currentLang]}">
      <div class="card-body">
        <h3>${item.name[currentLang]}</h3>
        <p>${item.desc[currentLang]}</p>
        <div class="card-footer">
          <span class="price">${formatPrice(item.price)}</span>
          <button class="btn primary add-btn" data-id="${item.id}">${t('addToCart')}</button>
        </div>
      </div>
    `;
    menuGrid.appendChild(card);
  });
  observeCards();
  attachAddEvents();
};

const attachAddEvents = () => {
  document.querySelectorAll('.add-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const existing = cart.find(c => c.id === id);
      if (existing) {
        existing.qty += 1;
        showToast(t('updated'));
      } else {
        cart.push({ id, qty: 1 });
        showToast(t('added'));
      }
      persistCart();
      renderCart();
    });
  });
};

const renderCart = () => {
  cartItemsEl.innerHTML = '';
  if (!cart.length) {
    cartItemsEl.innerHTML = `<p style="color:#9fb7aa">${t('emptyCart')}</p>`;
    cartTotalEl.textContent = formatPrice(0);
    cartCountEl.textContent = '0';
    return;
  }
  let total = 0;
  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;
    total += product.price * item.qty;
    const el = document.createElement('div');
    el.className = 'cart-item';
    el.innerHTML = `
      <img src="${product.img}" alt="${product.name[currentLang]}">
      <div>
        <h4>${product.name[currentLang]}</h4>
        <div class="price">${formatPrice(product.price)}</div>
        <div class="qty">
          <button data-id="${item.id}" data-action="dec">–</button>
          <span>${item.qty}</span>
          <button data-id="${item.id}" data-action="inc">+</button>
        </div>
      </div>
      <button class="remove-btn" data-id="${item.id}">✕</button>
    `;
    cartItemsEl.appendChild(el);
  });
  cartTotalEl.textContent = formatPrice(total);
  cartCountEl.textContent = cart.reduce((s, i) => s + i.qty, 0);
  bindCartActions();
};

const bindCartActions = () => {
  cartItemsEl.querySelectorAll('.qty button').forEach(btn => {
    btn.addEventListener('click', () => {
      const id = btn.dataset.id;
      const action = btn.dataset.action;
      const item = cart.find(i => i.id === id);
      if (!item) return;
      if (action === 'inc') item.qty += 1;
      if (action === 'dec') item.qty = Math.max(1, item.qty - 1);
      persistCart();
      renderCart();
    });
  });
  cartItemsEl.querySelectorAll('.remove-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      cart = cart.filter(c => c.id !== btn.dataset.id);
      persistCart();
      renderCart();
    });
  });
};

const persistCart = () => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const openCart = () => cartPanel.classList.add('open');
const closeCart = () => cartPanel.classList.remove('open');

const openModal = () => {
  updateOrderSummary();
  orderModal.classList.add('open');
  // Xaritani yangilash
  setTimeout(() => {
    initMap();
  }, 100);
};
const closeModal = () => {
  orderModal.classList.remove('open');
  if (map) {
    map.remove();
    map = null;
    marker = null;
  }
};

// Ko'kdala tumani chegaralari (Qashqadaryo viloyati)
const KUKDALA_BOUNDS = L.latLngBounds(
  [38.75, 65.50], // Janubi-g'arbiy burchak
  [38.95, 65.75]  // Shimoli-sharqiy burchak
);

// Xarita o'rnatish
const initMap = () => {
  if (map) {
    map.remove();
  }
  
  // Ko'kdala tumani markazi
  const defaultLat = 38.8421;
  const defaultLng = 65.6217;
  
  map = L.map('map', {
    maxBounds: KUKDALA_BOUNDS,
    maxBoundsViscosity: 1.0 // Chegaradan chiqib ketishni to'liq taqiqlash
  }).setView([defaultLat, defaultLng], 12);
  
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 16,
    minZoom: 11
  }).addTo(map);
  
  // Xarita chegaralarini ko'rsatish
  L.rectangle(KUKDALA_BOUNDS, {
    color: '#d4a017',
    weight: 2,
    fillOpacity: 0.1,
    fillColor: '#d4a017'
  }).addTo(map);
  
  // Marker qo'yish
  marker = L.marker([defaultLat, defaultLng], {
    draggable: true
  }).addTo(map);
  
  selectedLocation = { lat: defaultLat, lng: defaultLng };
  updateAddressFromCoordinates(defaultLat, defaultLng);
  
  // Marker harakatlanganda - chegaralarni tekshirish
  marker.on('dragend', function(e) {
    const position = marker.getLatLng();
    // Chegaralarni tekshirish
    if (KUKDALA_BOUNDS.contains(position)) {
      selectedLocation = { lat: position.lat, lng: position.lng };
      updateAddressFromCoordinates(position.lat, position.lng);
    } else {
      // Chegaradan tashqarida bo'lsa, eng yaqin nuqtaga qaytarish
      const boundedLat = Math.max(KUKDALA_BOUNDS.getSouth(), Math.min(KUKDALA_BOUNDS.getNorth(), position.lat));
      const boundedLng = Math.max(KUKDALA_BOUNDS.getWest(), Math.min(KUKDALA_BOUNDS.getEast(), position.lng));
      marker.setLatLng([boundedLat, boundedLng]);
      selectedLocation = { lat: boundedLat, lng: boundedLng };
      updateAddressFromCoordinates(boundedLat, boundedLng);
      showToast('Faqat Ko\'kdala tumani hududida joylashuv belgilash mumkin');
    }
  });
  
  // Xaritaga bosilganda marker qo'yish - chegaralarni tekshirish
  map.on('click', function(e) {
    const { lat, lng } = e.latlng;
    if (KUKDALA_BOUNDS.contains([lat, lng])) {
      marker.setLatLng([lat, lng]);
      selectedLocation = { lat, lng };
      updateAddressFromCoordinates(lat, lng);
    } else {
      showToast('Faqat Ko\'kdala tumani hududida joylashuv belgilash mumkin');
    }
  });
  
  // Geolocation - faqat Ko'kdala tumanida bo'lsa ishlatish
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        if (KUKDALA_BOUNDS.contains([latitude, longitude])) {
          map.setView([latitude, longitude], 14);
          marker.setLatLng([latitude, longitude]);
          selectedLocation = { lat: latitude, lng: longitude };
          updateAddressFromCoordinates(latitude, longitude);
        } else {
          // Geolocation Ko'kdala tumanidan tashqarida bo'lsa, default markazga qaytish
          showToast('Sizning joylashuvingiz Ko\'kdala tumani hududidan tashqarida');
        }
      },
      (error) => {
        console.log('Geolocation xatosi:', error);
      }
    );
  }
};

// Koordinatalardan manzil olish (Reverse Geocoding)
const updateAddressFromCoordinates = async (lat, lng) => {
  document.getElementById('customerLat').value = lat;
  document.getElementById('customerLng').value = lng;
  
  try {
    const response = await fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}&zoom=18&addressdetails=1`);
    const data = await response.json();
    
    if (data && data.address) {
      const address = data.address;
      let addressString = '';
      
      if (address.road) addressString += address.road + ', ';
      if (address.house_number) addressString += address.house_number + ', ';
      if (address.suburb || address.neighbourhood) addressString += (address.suburb || address.neighbourhood) + ', ';
      if (address.city || address.town || address.village) addressString += (address.city || address.town || address.village) + ', ';
      if (address.state) addressString += address.state;
      
      if (!addressString) {
        addressString = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
      }
      
      document.getElementById('customerAddress').value = addressString.trim();
    } else {
      document.getElementById('customerAddress').value = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
    }
  } catch (error) {
    console.error('Reverse geocoding xatosi:', error);
    document.getElementById('customerAddress').value = `${lat.toFixed(6)}, ${lng.toFixed(6)}`;
  }
};

const updateOrderSummary = () => {
  orderList.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    const product = products.find(p => p.id === item.id);
    if (!product) return;
    total += product.price * item.qty;
    const row = document.createElement('div');
    row.className = 'order-summary-item';
    row.innerHTML = `<span>${product.name[currentLang]} x${item.qty}</span><span>${formatPrice(product.price * item.qty)}</span>`;
    orderList.appendChild(row);
  });
  orderTotal.textContent = formatPrice(total);
};

const t = (key) => translations[currentLang][key] || key;

const applyTranslations = () => {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.dataset.i18n;
    if (translations[currentLang][key]) {
      // Agar HTML taglar bo'lsa (masalan, <a>), innerHTML ishlatamiz
      if (translations[currentLang][key].includes('<')) {
        el.innerHTML = translations[currentLang][key];
      } else {
        el.textContent = translations[currentLang][key];
      }
    }
  });
  document.querySelectorAll('.filter-btn').forEach(btn => {
    const cat = btn.dataset.category;
    btn.textContent = translateCategory(cat);
  });
  renderMenu(document.querySelector('.filter-btn.active')?.dataset.category || 'All');
  renderCart();
};

const setLanguage = (lang) => {
  currentLang = lang;
  localStorage.setItem('lang', lang);
  document.documentElement.lang = lang;
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
  applyTranslations();
};

const showToast = (msg) => {
  toast.textContent = msg;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 1800);
};

const observeCards = () => {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.2 });
  document.querySelectorAll('.card').forEach(card => obs.observe(card));
};

// Event bindings
document.getElementById('openCart').addEventListener('click', openCart);
document.getElementById('closeCart').addEventListener('click', closeCart);
document.getElementById('checkoutBtn').addEventListener('click', () => {
  if (!cart.length) {
    showToast(t('emptyCart'));
    return;
  }
  openModal();
});
document.getElementById('closeModal').addEventListener('click', closeModal);
document.getElementById('heroOrder').addEventListener('click', openCart);

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

// To'lov modalini ochish
const openPaymentModal = () => {
  if (!pendingOrder) {
    const name = document.getElementById('customerName').value.trim();
    const phone = document.getElementById('customerPhone').value.trim();
    const address = document.getElementById('customerAddress').value.trim();
    const lat = document.getElementById('customerLat').value;
    const lng = document.getElementById('customerLng').value;
    
    if (!name || !phone || !address || !lat || !lng) {
      showToast('Iltimos, barcha maydonlarni to\'ldiring va joylashuvni belgilang');
      return;
    }
    
    const orderItems = cart.map(item => {
      const p = products.find(pr => pr.id === item.id);
      return { title: p?.name?.[currentLang] || item.id, qty: item.qty, price: p?.price || 0 };
    });
    const totalVal = orderItems.reduce((s, i) => s + i.price * i.qty, 0);
    
    pendingOrder = {
      id: Date.now(),
      name,
      phone,
      address,
      lat: parseFloat(lat),
      lng: parseFloat(lng),
      items: orderItems,
      total: totalVal,
      date: new Date().toLocaleString(),
    };
  }
  paymentModal.classList.add('open');
};

const closePaymentModal = () => {
  paymentModal.classList.remove('open');
};

// To'lov qilish
const processPayment = async (method) => {
  if (!pendingOrder) return;
  
  // To'lov haqiqiy amalga oshiriladi (Payme yoki Click API)
  // Demo versiyada biz faqat tasdiqlaymiz
  paymentMethodInput.value = method;
  paymentProofInput.value = `proof_${Date.now()}`;
  
  pendingOrder.payment = method;
  pendingOrder.paymentProof = paymentProofInput.value;
  
  showToast(t('paymentSuccess'));
  closePaymentModal();
  
  // Telegram'ga yuborish
  await sendOrderToTelegram(pendingOrder);
  
  // To'lovdan keyin eslatma ko'rsatish
  setTimeout(() => {
    showToast('Agar muammo bo\'lsa, +998 93 115 56 46 ga qo\'ng\'iroq qiling');
  }, 2000);
  
  // Buyurtmani yakunlash
  cart = [];
  persistCart();
  renderCart();
  closeModal();
  closeCart();
  document.getElementById('orderForm').reset();
  pendingOrder = null;
};

// Telegram'ga buyurtma yuborish
const sendOrderToTelegram = async (order) => {
  const mapLink = `https://www.google.com/maps?q=${order.lat},${order.lng}`;
  const orderText = `
🍽️ <b>Yangi buyurtma</b>

👤 <b>Ism:</b> ${order.name}
📞 <b>Telefon:</b> ${order.phone}
📍 <b>Manzil:</b> ${order.address}
🗺️ <b>Xarita:</b> <a href="${mapLink}">Joylashuvni ko'rish</a>
📌 <b>Koordinatalar:</b> ${order.lat.toFixed(6)}, ${order.lng.toFixed(6)}
💳 <b>To'lov:</b> ${order.payment === 'payme' ? 'Payme' : 'Click'}
🔐 <b>To'lov tasdiqi:</b> ${order.paymentProof}

📋 <b>Buyurtma:</b>
${order.items.map(item => `• ${item.title} x${item.qty} - ${formatPrice(item.price * item.qty)}`).join('\n')}

💰 <b>Jami:</b> ${formatPrice(order.total)}
📅 <b>Vaqt:</b> ${order.date}
  `.trim();
  
  try {
    const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
    const response = await fetch(url, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        chat_id: TELEGRAM_CHAT_ID,
        text: orderText,
        parse_mode: 'HTML'
      })
    });
    
    if (response.ok) {
      showToast(t('orderSent'));
    } else {
      const error = await response.json();
      console.error('Telegram xatosi:', error);
      showToast('Xatolik yuz berdi, qayta urinib ko\'ring');
    }
  } catch (error) {
    console.error('Telegram so\'rov xatosi:', error);
    showToast('Internet aloqasini tekshiring');
  }
};

if (proceedToPaymentBtn) {
  proceedToPaymentBtn.addEventListener('click', openPaymentModal);
}

if (closePaymentModalBtn) {
  closePaymentModalBtn.addEventListener('click', closePaymentModal);
}

if (paymeBtn) {
  paymeBtn.addEventListener('click', () => processPayment('payme'));
}

if (clickBtn) {
  clickBtn.addEventListener('click', () => processPayment('click'));
}

if (paymentModal) {
  paymentModal.addEventListener('click', (e) => {
    if (e.target === paymentModal) closePaymentModal();
  });
}

// Init
renderFilters();
setLanguage(currentLang);
renderCart();
