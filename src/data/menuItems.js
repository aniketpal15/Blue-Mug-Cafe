// ============================================================
// Blue Mug Cafe — Complete Menu Data
// Categories & items sourced from official Blue Mug Cafe menu PDF
// Images: Unsplash CDN (royalty-free, no auth needed)
// ============================================================

export const menuCategories = [
  'All',
  'Bestseller',
  'Chef Special',
  'Hot Coffee',
  'Cold Coffee',
  'Tea',
  'Shakes & Smoothies',
  'Ice Tea',
  'Mocktail',
  'Soft Drinks',
  'Breakfast',
  'Toast',
  'Burger',
  'Sandwich',
  'Pani Sandwich',
  'Quesadilla',
  'Soup',
  'Appetizer',
  'Salad',
  'Appetizer Fish & Prawns',
  'Appetizer Meat',
  'Pizza',
  'Pasta',
  'Veg',
  'Fish',
  'Meat',
  'Main Course',
  'Dessert',
  'Birthday Cake',
];


export const menuItems = [

  // ─── HOT COFFEE ────────────────────────────────────────────
  { id: 'hc-1', category: 'Hot Coffee', name: 'Espresso', description: 'Bold single-shot espresso, rich crema on top.', price: 100, rating: 4.7, reviews: 210, tags: ['Veg'], prepTime: '3 min', image: '/images/menu/hc-1.webp' },
  { id: 'hc-2', category: 'Hot Coffee', name: 'Double Espresso', description: 'Two rich shots of premium Arabica espresso.', price: 130, rating: 4.7, reviews: 180, tags: ['Veg'], prepTime: '3 min', image: '/images/menu/hc-2.webp' },
  { id: 'hc-3', category: 'Hot Coffee', name: 'Americano', description: 'Espresso diluted with hot water for a smooth, clean finish.', price: 130, rating: 4.6, reviews: 160, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/hc-3.webp' },
  { id: 'hc-4', category: 'Hot Coffee', name: 'Cappuccino', description: 'Classic espresso with equal parts steamed and frothed milk.', price: 160, rating: 4.8, reviews: 320, tags: ['Veg', 'Bestseller'], prepTime: '5 min', image: '/images/menu/hc-4.webp' },
  { id: 'hc-5', category: 'Hot Coffee', name: 'Latte', description: 'Smooth espresso with steamed milk and a light foam layer.', price: 170, rating: 4.8, reviews: 290, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/hc-5.webp' },
  { id: 'hc-6', category: 'Hot Coffee', name: 'Flat White', description: 'Double ristretto with velvety micro-foam, stronger than a latte.', price: 180, rating: 4.7, reviews: 140, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/hc-6.webp' },
  { id: 'hc-7', category: 'Hot Coffee', name: 'Mocha', description: 'Espresso, dark Belgian chocolate, and steamed milk topped with cocoa.', price: 190, rating: 4.8, reviews: 260, tags: ['Veg'], prepTime: '6 min', image: '/images/menu/hc-7.webp' },
  { id: 'hc-8', category: 'Hot Coffee', name: 'Caramel Latte', description: 'Espresso with steamed milk swirled with house caramel sauce.', price: 190, rating: 4.8, reviews: 220, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/hc-8.webp' },
  { id: 'hc-9', category: 'Hot Coffee', name: 'Hazelnut Latte', description: 'Smooth espresso and steamed milk with rich hazelnut syrup.', price: 190, rating: 4.7, reviews: 180, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/hc-9.webp' },
  { id: 'hc-10', category: 'Hot Coffee', name: 'Blue Mug Special Coffee', description: 'Our signature house blend — espresso with secret spiced syrup and velvety foam.', price: 200, rating: 4.9, reviews: 450, tags: ['Bestseller', 'Veg', 'Chef Special'], prepTime: '6 min', image: '/images/menu/hc-10.webp' },

  // ─── COLD COFFEE ───────────────────────────────────────────
  { id: 'cc-1', category: 'Cold Coffee', name: 'Classic Cold Coffee', description: 'Chilled espresso blended with milk and sugar over ice.', price: 160, rating: 4.7, reviews: 310, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/cc-1.webp' },
  { id: 'cc-2', category: 'Cold Coffee', name: 'Cold Coffee with Ice Cream', description: 'Cold coffee blended with a scoop of vanilla ice cream.', price: 190, rating: 4.8, reviews: 280, tags: ['Veg', 'Bestseller'], prepTime: '5 min', image: '/images/menu/cc-2.webp' },
  { id: 'cc-3', category: 'Cold Coffee', name: 'Iced Latte', description: 'Double espresso poured over ice with cold fresh milk.', price: 180, rating: 4.7, reviews: 210, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/cc-3.webp' },
  { id: 'cc-4', category: 'Cold Coffee', name: 'Iced Cappuccino', description: 'Espresso shots over ice with frothy cold milk foam.', price: 180, rating: 4.7, reviews: 195, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/cc-4.webp' },
  { id: 'cc-5', category: 'Cold Coffee', name: 'Iced Mocha', description: 'Chilled espresso, chocolate syrup and milk poured over ice.', price: 200, rating: 4.8, reviews: 170, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/cc-5.webp' },
  { id: 'cc-6', category: 'Cold Coffee', name: 'Caramel Frappe', description: 'Blended espresso, caramel, cream and crushed ice topped with whipped cream.', price: 220, rating: 4.9, reviews: 340, tags: ['Bestseller', 'Veg'], prepTime: '6 min', image: '/images/menu/cc-6.webp' },
  { id: 'cc-7', category: 'Cold Coffee', name: 'Java Chip Frappe', description: 'Espresso, chocolate chips, blended with milk and ice, whipped cream topping.', price: 230, rating: 4.8, reviews: 255, tags: ['Veg', 'Chef Special'], prepTime: '6 min', image: '/images/menu/cc-7.webp' },
  { id: 'cc-8', category: 'Cold Coffee', name: 'Cold Brew', description: '18-hour slow-steeped Arabica, served over ice — smooth and naturally sweet.', price: 210, rating: 4.8, reviews: 190, tags: ['Veg'], prepTime: '3 min', image: '/images/menu/cc-8.webp' },

  // ─── TEA ───────────────────────────────────────────────────
  { id: 't-1', category: 'Tea', name: 'Darjeeling Tea', description: 'Premium first-flush Darjeeling tea served with strainer and side milk.', price: 80, rating: 4.7, reviews: 180, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/t-1.webp' },
  { id: 't-2', category: 'Tea', name: 'Assam Tea', description: 'Strong malty Assam CTC brewed fresh, served with milk and sugar.', price: 70, rating: 4.6, reviews: 150, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/t-2.webp' },
  { id: 't-3', category: 'Tea', name: 'Masala Chai', description: 'Aromatic spiced Indian chai with ginger, cardamom, and cinnamon.', price: 80, rating: 4.8, reviews: 290, tags: ['Veg', 'Bestseller'], prepTime: '6 min', image: '/images/menu/t-3.webp' },
  { id: 't-4', category: 'Tea', name: 'Green Tea', description: 'Light, refreshing Japanese Sencha green tea, served hot.', price: 90, rating: 4.6, reviews: 130, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/t-4.webp' },
  { id: 't-5', category: 'Tea', name: 'Lemongrass Green Tea', description: 'Green tea infused with fresh lemongrass for a citrus herbal note.', price: 100, rating: 4.7, reviews: 160, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/t-5.webp' },
  { id: 't-6', category: 'Tea', name: 'Chamomile Tea', description: 'Soothing floral chamomile blossoms steeped in hot water.', price: 100, rating: 4.6, reviews: 110, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/t-6.webp' },
  { id: 't-7', category: 'Tea', name: 'Earl Grey', description: 'Classic black tea with bergamot citrus oil — a British favourite.', price: 100, rating: 4.7, reviews: 140, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/t-7.webp' },

  // ─── SHAKES & SMOOTHIES ────────────────────────────────────
  { id: 'ss-1', category: 'Shakes & Smoothies', name: 'Classic Vanilla Milkshake', description: 'Thick, creamy vanilla bean milkshake with whipped cream.', price: 180, rating: 4.7, reviews: 220, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/ss-1.webp' },
  { id: 'ss-2', category: 'Shakes & Smoothies', name: 'Chocolate Milkshake', description: 'Rich Belgian chocolate shake blended with premium vanilla ice cream.', price: 190, rating: 4.8, reviews: 310, tags: ['Veg', 'Bestseller'], prepTime: '5 min', image: '/images/menu/ss-2.webp' },
  { id: 'ss-3', category: 'Shakes & Smoothies', name: 'Strawberry Milkshake', description: 'Fresh strawberry purée blended with creamy vanilla ice cream and milk.', price: 190, rating: 4.7, reviews: 200, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/ss-3.webp' },
  { id: 'ss-4', category: 'Shakes & Smoothies', name: 'Mango Milkshake', description: 'Alphonso mango pulp blended with chilled milk and sugar.', price: 190, rating: 4.8, reviews: 270, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/ss-4.webp' },
  { id: 'ss-5', category: 'Shakes & Smoothies', name: 'Oreo Shake', description: 'Crushed Oreo cookies blended with vanilla ice cream and cold milk.', price: 210, rating: 4.9, reviews: 340, tags: ['Veg', 'Bestseller'], prepTime: '5 min', image: '/images/menu/ss-5.webp' },
  { id: 'ss-6', category: 'Shakes & Smoothies', name: 'Nutella Banana Shake', description: 'Nutella and ripe banana blended with chilled milk and ice cream.', price: 220, rating: 4.8, reviews: 240, tags: ['Veg', 'Chef Special'], prepTime: '5 min', image: '/images/menu/ss-6.webp' },
  { id: 'ss-7', category: 'Shakes & Smoothies', name: 'Green Smoothie', description: 'Spinach, banana, green apple, honey, and coconut water blended fresh.', price: 200, rating: 4.6, reviews: 140, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/ss-7.webp' },
  { id: 'ss-8', category: 'Shakes & Smoothies', name: 'Berry Blast Smoothie', description: 'Mixed berries, Greek yogurt, honey, and chia seeds blended together.', price: 210, rating: 4.7, reviews: 160, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/ss-8.webp' },
  { id: 'ss-9', category: 'Shakes & Smoothies', name: 'Mango Lassi', description: 'Chilled Alphonso mango blended with thick yogurt and a pinch of cardamom.', price: 170, rating: 4.8, reviews: 280, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/ss-9.webp' },

  // ─── ICE TEA ───────────────────────────────────────────────
  { id: 'it-1', category: 'Ice Tea', name: 'Lemon Ice Tea', description: 'Chilled black tea with fresh lemon juice, sugar, and ice.', price: 130, rating: 4.7, reviews: 240, tags: ['Veg', 'Bestseller'], prepTime: '4 min', image: '/images/menu/it-1.webp' },
  { id: 'it-2', category: 'Ice Tea', name: 'Peach Ice Tea', description: 'Sweet peach-infused black tea served over crushed ice.', price: 140, rating: 4.7, reviews: 200, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/it-2.webp' },
  { id: 'it-3', category: 'Ice Tea', name: 'Mint Ice Tea', description: 'Refreshing green tea with muddled mint leaves and lemon slice.', price: 130, rating: 4.6, reviews: 170, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/it-3.webp' },
  { id: 'it-4', category: 'Ice Tea', name: 'Raspberry Ice Tea', description: 'Tangy raspberry puree blended with chilled black tea.', price: 150, rating: 4.7, reviews: 155, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/it-4.webp' },
  { id: 'it-5', category: 'Ice Tea', name: 'Green Ice Tea', description: 'Japanese Sencha cold brewed and served over ice with lemon.', price: 140, rating: 4.6, reviews: 130, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/it-5.webp' },

  // ─── MOCKTAIL ──────────────────────────────────────────────
  { id: 'mk-1', category: 'Mocktail', name: 'Electric Blue Lagoon', description: 'Blue curacao, crushed mint, kaffir lime, and sparkling soda.', price: 220, rating: 4.9, reviews: 410, tags: ['Bestseller', 'Veg'], prepTime: '4 min', image: '/images/menu/mk-1.webp' },
  { id: 'mk-2', category: 'Mocktail', name: 'Virgin Mojito', description: 'Muddled fresh mint, lime wedges, sugar syrup, and club soda.', price: 180, rating: 4.8, reviews: 350, tags: ['Veg', 'Bestseller'], prepTime: '4 min', image: '/images/menu/mk-2.webp' },
  { id: 'mk-3', category: 'Mocktail', name: 'Watermelon Slush', description: 'Fresh watermelon crushed with mint leaves and lemon juice.', price: 190, rating: 4.7, reviews: 230, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/mk-3.webp' },
  { id: 'mk-4', category: 'Mocktail', name: 'Mango Tango', description: 'Alphonso mango, passion fruit, lime, and sparkling water.', price: 200, rating: 4.8, reviews: 260, tags: ['Veg', 'Chef Special'], prepTime: '4 min', image: '/images/menu/mk-4.webp' },
  { id: 'mk-5', category: 'Mocktail', name: 'Strawberry Lemonade', description: 'Fresh strawberry puree with freshly squeezed lemon and soda.', price: 190, rating: 4.7, reviews: 215, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/mk-5.webp' },
  { id: 'mk-6', category: 'Mocktail', name: 'Green Apple Mint Cooler', description: 'Crisp green apple juice with muddled spearmint and crushed ice.', price: 200, rating: 4.7, reviews: 180, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/mk-6.webp' },
  { id: 'mk-7', category: 'Mocktail', name: 'Cucumber Mint Cooler', description: 'Fresh cucumber, mint, lime, and chilled tonic water.', price: 180, rating: 4.6, reviews: 160, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/mk-7.webp' },
  { id: 'mk-8', category: 'Mocktail', name: 'Passion Fruit Fizz', description: 'Passion fruit syrup, lemon, sugar, and refreshing soda water.', price: 210, rating: 4.7, reviews: 195, tags: ['Veg'], prepTime: '4 min', image: '/images/menu/mk-8.webp' },

  // ─── SOFT DRINKS ───────────────────────────────────────────
  { id: 'sd-1', category: 'Soft Drinks', name: 'Coca-Cola', description: 'Chilled classic Coca-Cola, served with ice.', price: 60, rating: 4.5, reviews: 200, tags: ['Veg'], prepTime: '1 min', image: '/images/menu/sd-1.webp' },
  { id: 'sd-2', category: 'Soft Drinks', name: 'Pepsi', description: 'Chilled Pepsi cola served with ice.', price: 60, rating: 4.5, reviews: 180, tags: ['Veg'], prepTime: '1 min', image: '/images/menu/sd-2.webp' },
  { id: 'sd-3', category: 'Soft Drinks', name: 'Sprite / 7UP', description: 'Refreshing lemon-lime sparkling soda served chilled.', price: 60, rating: 4.5, reviews: 160, tags: ['Veg'], prepTime: '1 min', image: '/images/menu/sd-3.webp' },
  { id: 'sd-4', category: 'Soft Drinks', name: 'Fanta Orange', description: 'Bubbly sweet orange flavoured fizzy drink.', price: 60, rating: 4.4, reviews: 130, tags: ['Veg'], prepTime: '1 min', image: '/images/menu/sd-4.webp' },
  { id: 'sd-5', category: 'Soft Drinks', name: 'Limca', description: 'Sweet lime and lemon flavour Indian classic fizzy drink.', price: 60, rating: 4.4, reviews: 110, tags: ['Veg'], prepTime: '1 min', image: '/images/menu/sd-5.webp' },
  { id: 'sd-6', category: 'Soft Drinks', name: 'Soda Water', description: 'Plain chilled carbonated water, served with lemon wedge.', price: 40, rating: 4.3, reviews: 90, tags: ['Veg'], prepTime: '1 min', image: '/images/menu/sd-6.webp' },
  { id: 'sd-7', category: 'Soft Drinks', name: 'Mineral Water (500ml)', description: 'Packaged sealed mineral water bottle.', price: 30, rating: 4.5, reviews: 200, tags: ['Veg'], prepTime: '1 min', image: '/images/menu/sd-7.webp' },

  // ─── BREAKFAST ─────────────────────────────────────────────
  { id: 'br-1', category: 'Breakfast', name: 'English Breakfast', description: 'Scrambled eggs, grilled sausage, baked beans, toast, and grilled tomato.', price: 280, rating: 4.8, reviews: 240, tags: ['Non-Veg', 'Bestseller'], prepTime: '15 min', image: '/images/menu/br-1.webp' },
  { id: 'br-2', category: 'Breakfast', name: 'Egg Benedict', description: 'Poached eggs on toasted English muffin with hollandaise sauce.', price: 260, rating: 4.7, reviews: 185, tags: ['Non-Veg', 'Chef Special'], prepTime: '12 min', image: '/images/menu/br-2.webp' },
  { id: 'br-3', category: 'Breakfast', name: 'Scrambled Eggs on Toast', description: 'Fluffy butter-scrambled eggs on toasted multigrain bread.', price: 180, rating: 4.7, reviews: 200, tags: ['Non-Veg'], prepTime: '8 min', image: '/images/menu/br-3.webp' },
  { id: 'br-4', category: 'Breakfast', name: 'Omelette', description: 'Three-egg omelette with onion, tomato, green chilli, and cheese.', price: 160, rating: 4.7, reviews: 215, tags: ['Non-Veg'], prepTime: '8 min', image: '/images/menu/br-4.webp' },
  { id: 'br-5', category: 'Breakfast', name: 'Cheese Omelette', description: 'Fluffy three-egg omelette filled with melted processed cheese.', price: 180, rating: 4.8, reviews: 230, tags: ['Non-Veg'], prepTime: '8 min', image: '/images/menu/br-5.webp' },
  { id: 'br-6', category: 'Breakfast', name: 'Pancakes (Stack of 3)', description: 'Fluffy buttermilk pancakes served with maple syrup and butter.', price: 220, rating: 4.8, reviews: 270, tags: ['Veg', 'Bestseller'], prepTime: '12 min', image: '/images/menu/br-6.webp' },
  { id: 'br-7', category: 'Breakfast', name: 'Banana Nutella Pancakes', description: 'Fluffy pancakes topped with Nutella spread and sliced banana.', price: 250, rating: 4.9, reviews: 310, tags: ['Veg', 'Chef Special'], prepTime: '12 min', image: '/images/menu/br-7.webp' },
  { id: 'br-8', category: 'Breakfast', name: 'Fruit & Granola Bowl', description: 'Greek yogurt with crunchy granola, seasonal fresh fruit, and honey drizzle.', price: 200, rating: 4.7, reviews: 160, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/br-8.webp' },

  // ─── TOAST ─────────────────────────────────────────────────
  { id: 'to-1', category: 'Toast', name: 'Garlic Bread', description: 'Toasted baguette slices with garlic butter and parsley.', price: 120, rating: 4.7, reviews: 240, tags: ['Veg', 'Bestseller'], prepTime: '6 min', image: '/images/menu/to-1.webp' },
  { id: 'to-2', category: 'Toast', name: 'Cheese Garlic Toast', description: 'Garlic butter toast topped with generous melted mozzarella.', price: 150, rating: 4.8, reviews: 280, tags: ['Veg'], prepTime: '7 min', image: '/images/menu/to-2.webp' },
  { id: 'to-3', category: 'Toast', name: 'Avocado Toast', description: 'Smashed avocado on multigrain toast with chilli flakes and lemon.', price: 200, rating: 4.7, reviews: 180, tags: ['Veg', 'Chef Special'], prepTime: '7 min', image: '/images/menu/to-3.webp' },
  { id: 'to-4', category: 'Toast', name: 'French Toast', description: 'Egg-dipped bread slices fried in butter, served with maple syrup.', price: 160, rating: 4.7, reviews: 200, tags: ['Non-Veg'], prepTime: '8 min', image: '/images/menu/to-4.webp' },
  { id: 'to-5', category: 'Toast', name: 'Mushroom on Toast', description: 'Sautéed garlic butter mushrooms on thick toasted sourdough.', price: 180, rating: 4.7, reviews: 160, tags: ['Veg'], prepTime: '8 min', image: '/images/menu/to-5.webp' },
  { id: 'to-6', category: 'Toast', name: 'Egg on Toast', description: 'Sunny side up fried egg over buttered toast with seasoning.', price: 120, rating: 4.6, reviews: 175, tags: ['Non-Veg'], prepTime: '6 min', image: '/images/menu/to-6.webp' },

  // ─── BURGER ────────────────────────────────────────────────
  { id: 'bu-1', category: 'Burger', name: 'Classic Chicken Burger', description: 'Crispy fried chicken fillet with lettuce, tomato and mayo on a sesame bun.', price: 220, rating: 4.8, reviews: 380, tags: ['Non-Veg', 'Bestseller'], prepTime: '12 min', image: '/images/menu/bu-1.webp' },
  { id: 'bu-2', category: 'Burger', name: 'Double Smash Burger', description: 'Twin flame-seared patties, molten cheddar, caramelized onions on brioche.', price: 280, rating: 4.9, reviews: 520, tags: ['Non-Veg', 'Bestseller'], prepTime: '15 min', image: '/images/menu/bu-2.webp' },
  { id: 'bu-3', category: 'Burger', name: 'Chicken Cheese Burger', description: 'Juicy grilled chicken with melted cheese, onion rings and chipotle sauce.', price: 250, rating: 4.8, reviews: 310, tags: ['Non-Veg'], prepTime: '12 min', image: '/images/menu/bu-3.webp' },
  { id: 'bu-4', category: 'Burger', name: 'Spicy Chicken Burger', description: 'Fiery crispy chicken with jalapeños, pepper sauce and coleslaw.', price: 260, rating: 4.8, reviews: 285, tags: ['Non-Veg', 'Chef Special'], prepTime: '12 min', image: '/images/menu/bu-4.webp' },
  { id: 'bu-5', category: 'Burger', name: 'Veg Burger', description: 'Spiced veggie patty, lettuce, tomato, onion and mint mayo on a soft bun.', price: 180, rating: 4.6, reviews: 210, tags: ['Veg'], prepTime: '10 min', image: '/images/menu/bu-5.webp' },
  { id: 'bu-6', category: 'Burger', name: 'Paneer Burger', description: 'Grilled spiced paneer steak with garlic aioli and crunchy slaw on brioche.', price: 220, rating: 4.7, reviews: 240, tags: ['Veg', 'Chef Special'], prepTime: '12 min', image: '/images/menu/bu-6.webp' },
  { id: 'bu-7', category: 'Burger', name: 'BBQ Chicken Burger', description: 'Smoky BBQ chicken fillet with caramelized onions and crispy onion rings.', price: 270, rating: 4.8, reviews: 295, tags: ['Non-Veg'], prepTime: '14 min', image: '/images/menu/bu-7.webp' },

  // ─── SANDWICH ──────────────────────────────────────────────
  { id: 'sw-1', category: 'Sandwich', name: 'Classic Veg Sandwich', description: 'Fresh vegetables with cheese and mint chutney on toasted bread.', price: 120, rating: 4.5, reviews: 190, tags: ['Veg'], prepTime: '7 min', image: '/images/menu/sw-1.webp' },
  { id: 'sw-2', category: 'Sandwich', name: 'Chicken Mayonnaise Sandwich', description: 'Shredded chicken mixed with creamy mayo on toasted white bread.', price: 160, rating: 4.8, reviews: 290, tags: ['Non-Veg', 'Bestseller'], prepTime: '8 min', image: '/images/menu/sw-2.webp' },
  { id: 'sw-3', category: 'Sandwich', name: 'Chicken Club Sandwich', description: 'Triple-decker with chicken, egg, lettuce, tomato, and cheese.', price: 200, rating: 4.8, reviews: 255, tags: ['Non-Veg', 'Chef Special'], prepTime: '10 min', image: '/images/menu/sw-3.webp' },
  { id: 'sw-4', category: 'Sandwich', name: 'Cheese Grilled Sandwich', description: 'Buttery grilled bread filled with melted processed cheese.', price: 130, rating: 4.6, reviews: 220, tags: ['Veg'], prepTime: '7 min', image: '/images/menu/sw-4.webp' },
  { id: 'sw-5', category: 'Sandwich', name: 'Veg Grilled Sandwich', description: 'Vegetables and cheese grilled to golden perfection in butter.', price: 140, rating: 4.7, reviews: 210, tags: ['Veg'], prepTime: '8 min', image: '/images/menu/sw-5.webp' },
  { id: 'sw-6', category: 'Sandwich', name: 'Chicken Salami Sandwich', description: 'Chicken salami slices with cream cheese and mustard on rye toast.', price: 180, rating: 4.7, reviews: 200, tags: ['Non-Veg'], prepTime: '8 min', image: '/images/menu/sw-6.webp' },
  { id: 'sw-7', category: 'Sandwich', name: 'Egg Sandwich', description: 'Egg bhurji or fried egg with veggie and cheese on toasted bread.', price: 130, rating: 4.6, reviews: 180, tags: ['Non-Veg'], prepTime: '8 min', image: '/images/menu/sw-7.webp' },
  { id: 'sw-8', category: 'Sandwich', name: 'BLT Sandwich', description: 'Bacon, lettuce, and tomato on toasted bread with mayo.', price: 180, rating: 4.7, reviews: 165, tags: ['Non-Veg'], prepTime: '8 min', image: '/images/menu/sw-8.webp' },

  // ─── PANI SANDWICH ─────────────────────────────────────────
  { id: 'ps-1', category: 'Pani Sandwich', name: 'Veg Pani Sandwich', description: 'Kolkata-style bread sandwich dipped in spiced green pani chutney.', price: 80, rating: 4.6, reviews: 280, tags: ['Veg', 'Bestseller'], prepTime: '5 min', image: '/images/menu/ps-1.webp' },
  { id: 'ps-2', category: 'Pani Sandwich', name: 'Cheese Pani Sandwich', description: 'Cheese-filled bread dunked in tangy pani with tamarind chutney.', price: 100, rating: 4.7, reviews: 240, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/ps-2.webp' },
  { id: 'ps-3', category: 'Pani Sandwich', name: 'Chicken Pani Sandwich', description: 'Chicken-filled bread dipped in spicy green chutney pani.', price: 120, rating: 4.7, reviews: 210, tags: ['Non-Veg'], prepTime: '6 min', image: '/images/menu/ps-3.webp' },
  { id: 'ps-4', category: 'Pani Sandwich', name: 'Egg Pani Sandwich', description: 'Egg and onion-filled bread dipped in tangy masala pani.', price: 100, rating: 4.6, reviews: 195, tags: ['Non-Veg'], prepTime: '6 min', image: '/images/menu/ps-4.webp' },

  // ─── QUESADILLA ────────────────────────────────────────────
  { id: 'qu-1', category: 'Quesadilla', name: 'Cheese Quesadilla', description: 'Crispy flour tortilla filled with melted three-cheese blend.', price: 180, rating: 4.7, reviews: 200, tags: ['Veg'], prepTime: '8 min', image: '/images/menu/qu-1.webp' },
  { id: 'qu-2', category: 'Quesadilla', name: 'Chicken Quesadilla', description: 'Spiced grilled chicken and cheese in crispy toasted tortilla.', price: 220, rating: 4.8, reviews: 260, tags: ['Non-Veg', 'Bestseller'], prepTime: '10 min', image: '/images/menu/qu-2.webp' },
  { id: 'qu-3', category: 'Quesadilla', name: 'Veg & Cheese Quesadilla', description: 'Mixed bell peppers, corn, onion and cheese in golden tortilla.', price: 190, rating: 4.7, reviews: 215, tags: ['Veg', 'Chef Special'], prepTime: '9 min', image: '/images/menu/qu-3.webp' },
  { id: 'qu-4', category: 'Quesadilla', name: 'Mushroom Quesadilla', description: 'Sautéed garlic mushrooms and mozzarella in crispy quesadilla.', price: 200, rating: 4.7, reviews: 180, tags: ['Veg'], prepTime: '9 min', image: '/images/menu/qu-4.webp' },

  // ─── SOUP ──────────────────────────────────────────────────
  { id: 'so-1', category: 'Soup', name: 'Tomato Basil Soup', description: 'Roasted fresh tomatoes blended with aromatic basil and cream.', price: 140, rating: 4.7, reviews: 240, tags: ['Veg', 'Bestseller'], prepTime: '8 min', image: '/images/menu/so-1.webp' },
  { id: 'so-2', category: 'Soup', name: 'Cream of Mushroom Soup', description: 'Thick creamy mushroom soup with thyme and a swirl of cream.', price: 150, rating: 4.8, reviews: 220, tags: ['Veg', 'Chef Special'], prepTime: '8 min', image: '/images/menu/so-2.webp' },
  { id: 'so-3', category: 'Soup', name: 'Sweet Corn Vegetable Soup', description: 'Indo-Chinese style sweet corn soup with mixed vegetables.', price: 130, rating: 4.6, reviews: 180, tags: ['Veg'], prepTime: '7 min', image: '/images/menu/so-3.webp' },
  { id: 'so-4', category: 'Soup', name: 'Chicken Sweet Corn Soup', description: 'Classic shredded chicken and sweet corn Indo-Chinese soup.', price: 150, rating: 4.7, reviews: 210, tags: ['Non-Veg'], prepTime: '8 min', image: '/images/menu/so-4.webp' },
  { id: 'so-5', category: 'Soup', name: 'Hot and Sour Soup', description: 'Tangy vinegar-based Chinese soup with tofu, mushrooms and vegetables.', price: 140, rating: 4.7, reviews: 200, tags: ['Veg'], prepTime: '7 min', image: '/images/menu/so-5.webp' },
  { id: 'so-6', category: 'Soup', name: 'Lemon Coriander Soup', description: 'Light vegetable broth with fresh coriander and lemon.', price: 130, rating: 4.6, reviews: 160, tags: ['Veg'], prepTime: '7 min', image: '/images/menu/so-6.webp' },

  // ─── APPETIZER (VEG) ───────────────────────────────────────
  { id: 'ap-1', category: 'Appetizer', name: 'Crispy Veg Spring Rolls', description: 'Golden fried vegetable spring rolls served with sweet chilli sauce.', price: 150, rating: 4.7, reviews: 290, tags: ['Veg', 'Bestseller'], prepTime: '8 min', image: '/images/menu/ap-1.webp' },
  { id: 'ap-2', category: 'Appetizer', name: 'Chilli Paneer', description: 'Crispy fried paneer tossed in Indo-Chinese chilli garlic sauce.', price: 200, rating: 4.8, reviews: 350, tags: ['Veg', 'Bestseller'], prepTime: '10 min', image: '/images/menu/ap-2.webp' },
  { id: 'ap-3', category: 'Appetizer', name: 'Nachos with Salsa & Cheese', description: 'Corn tortilla chips with house salsa, sour cream and jalapeño cheese dip.', price: 180, rating: 4.7, reviews: 240, tags: ['Veg'], prepTime: '6 min', image: '/images/menu/ap-3.webp' },
  { id: 'ap-4', category: 'Appetizer', name: 'Veg Momos', description: 'Steamed mixed vegetable dumplings served with spicy red chutney.', price: 140, rating: 4.7, reviews: 310, tags: ['Veg'], prepTime: '10 min', image: '/images/menu/ap-4.webp' },
  { id: 'ap-5', category: 'Appetizer', name: 'Fried Corn', description: 'Crispy golden sweet corn tossed with lime, chilli, and butter.', price: 130, rating: 4.6, reviews: 200, tags: ['Veg'], prepTime: '7 min', image: '/images/menu/ap-5.webp' },
  { id: 'ap-6', category: 'Appetizer', name: 'Mushroom Garlic Sauté', description: 'Sautéed button mushrooms with garlic, herbs, and lemon butter.', price: 170, rating: 4.7, reviews: 185, tags: ['Veg', 'Chef Special'], prepTime: '8 min', image: '/images/menu/ap-6.webp' },

  // ─── SALAD ─────────────────────────────────────────────────
  { id: 'sl-1', category: 'Salad', name: 'Caesar Salad', description: 'Romaine lettuce, croutons, parmesan with classic Caesar dressing.', price: 200, rating: 4.7, reviews: 210, tags: ['Veg'], prepTime: '7 min', image: '/images/menu/sl-1.webp' },
  { id: 'sl-2', category: 'Salad', name: 'Chicken Caesar Salad', description: 'Grilled chicken over crisp romaine, croutons and Caesar dressing.', price: 240, rating: 4.8, reviews: 255, tags: ['Non-Veg', 'Bestseller'], prepTime: '10 min', image: '/images/menu/sl-2.webp' },
  { id: 'sl-3', category: 'Salad', name: 'Greek Salad', description: 'Tomato, cucumber, olives, red onion, feta cheese with oregano dressing.', price: 210, rating: 4.7, reviews: 185, tags: ['Veg', 'Chef Special'], prepTime: '7 min', image: '/images/menu/sl-3.webp' },
  { id: 'sl-4', category: 'Salad', name: 'Caprese Salad', description: 'Fresh mozzarella, vine tomatoes, basil with extra virgin olive oil.', price: 220, rating: 4.7, reviews: 170, tags: ['Veg'], prepTime: '6 min', image: '/images/menu/sl-4.webp' },
  { id: 'sl-5', category: 'Salad', name: 'Mixed Garden Salad', description: 'Fresh seasonal greens, cherry tomatoes, cucumber, with house vinaigrette.', price: 160, rating: 4.6, reviews: 160, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/sl-5.webp' },

  // ─── APPETIZER FISH & PRAWNS ───────────────────────────────
  { id: 'fp-1', category: 'Appetizer Fish & Prawns', name: 'Fish Fingers', description: 'Crispy breadcrumb-coated fish fillets, served with tartar sauce.', price: 220, rating: 4.7, reviews: 240, tags: ['Non-Veg', 'Bestseller'], prepTime: '10 min', image: '/images/menu/fp-1.webp' },
  { id: 'fp-2', category: 'Appetizer Fish & Prawns', name: 'Prawn Tempura', description: 'Japanese-style light battered king prawns with sweet chilli dipping sauce.', price: 280, rating: 4.8, reviews: 210, tags: ['Non-Veg', 'Chef Special'], prepTime: '12 min', image: '/images/menu/fp-2.webp' },
  { id: 'fp-3', category: 'Appetizer Fish & Prawns', name: 'Chilli Prawn', description: 'Jumbo prawns tossed in Indo-Chinese spicy chilli garlic sauce.', price: 300, rating: 4.8, reviews: 230, tags: ['Non-Veg', 'Bestseller'], prepTime: '12 min', image: '/images/menu/fp-3.webp' },
  { id: 'fp-4', category: 'Appetizer Fish & Prawns', name: 'Garlic Butter Prawn', description: 'Sautéed prawns in garlic herb butter with lemon and parsley.', price: 290, rating: 4.8, reviews: 195, tags: ['Non-Veg', 'Chef Special'], prepTime: '10 min', image: '/images/menu/fp-4.webp' },
  { id: 'fp-5', category: 'Appetizer Fish & Prawns', name: 'Fish Tikka', description: 'Marinated fish chunks grilled in tandoor with mint chutney.', price: 260, rating: 4.7, reviews: 185, tags: ['Non-Veg'], prepTime: '12 min', image: '/images/menu/fp-5.webp' },
  { id: 'fp-6', category: 'Appetizer Fish & Prawns', name: 'Crispy Fried Prawn', description: 'Golden batter-fried whole prawns served with cocktail sauce.', price: 280, rating: 4.7, reviews: 175, tags: ['Non-Veg'], prepTime: '12 min', image: '/images/menu/fp-6.webp' },

  // ─── APPETIZER MEAT ────────────────────────────────────────
  { id: 'am-1', category: 'Appetizer Meat', name: 'Chicken Momos', description: 'Juicy minced chicken dumplings, steamed and served with spicy sauce.', price: 160, rating: 4.8, reviews: 340, tags: ['Non-Veg', 'Bestseller'], prepTime: '10 min', image: '/images/menu/am-1.webp' },
  { id: 'am-2', category: 'Appetizer Meat', name: 'Chilli Chicken', description: 'Classic Indo-Chinese crispy chicken tossed in spicy chilli garlic sauce.', price: 220, rating: 4.8, reviews: 380, tags: ['Non-Veg', 'Bestseller'], prepTime: '12 min', image: '/images/menu/am-2.webp' },
  { id: 'am-3', category: 'Appetizer Meat', name: 'Chicken Lollipop', description: 'Six crispy marinated chicken winglets served with sriracha dip.', price: 240, rating: 4.8, reviews: 310, tags: ['Non-Veg', 'Chef Special'], prepTime: '12 min', image: '/images/menu/am-3.webp' },
  { id: 'am-4', category: 'Appetizer Meat', name: 'Mutton Seekh Kebab', description: 'Spiced minced mutton skewers charcoal-grilled, served with raita.', price: 280, rating: 4.8, reviews: 265, tags: ['Non-Veg', 'Chef Special'], prepTime: '15 min', image: '/images/menu/am-4.webp' },
  { id: 'am-5', category: 'Appetizer Meat', name: 'Chicken Tikka', description: 'Boneless chicken marinated in spiced yogurt, grilled to perfection.', price: 260, rating: 4.8, reviews: 295, tags: ['Non-Veg', 'Bestseller'], prepTime: '15 min', image: '/images/menu/am-5.webp' },
  { id: 'am-6', category: 'Appetizer Meat', name: 'Crispy Chicken Wings', description: 'Six glazed chicken wings with choice of BBQ or buffalo sauce.', price: 250, rating: 4.7, reviews: 275, tags: ['Non-Veg'], prepTime: '12 min', image: '/images/menu/am-6.webp' },
  { id: 'am-7', category: 'Appetizer Meat', name: 'Sausage on Pan', description: 'Pan-seared chicken and pork sausages with mustard and onion relish.', price: 220, rating: 4.6, reviews: 190, tags: ['Non-Veg'], prepTime: '8 min', image: '/images/menu/am-7.webp' },

  // ─── PIZZA ─────────────────────────────────────────────────
  { id: 'pz-1', category: 'Pizza', name: 'Margherita Pizza', description: 'Classic San Marzano tomato sauce, fresh mozzarella, and basil.', price: 280, rating: 4.8, reviews: 380, tags: ['Veg', 'Bestseller'], prepTime: '15 min', image: '/images/menu/pz-1.webp' },
  { id: 'pz-2', category: 'Pizza', name: 'Cheese Pizza', description: 'Rich four-cheese blend — mozzarella, cheddar, parmesan, and gouda.', price: 320, rating: 4.8, reviews: 310, tags: ['Veg'], prepTime: '15 min', image: '/images/menu/pz-2.webp' },
  { id: 'pz-3', category: 'Pizza', name: 'Veg Supreme Pizza', description: 'Loaded with bell peppers, mushrooms, olives, onion, and corn.', price: 340, rating: 4.7, reviews: 270, tags: ['Veg'], prepTime: '16 min', image: '/images/menu/pz-3.webp' },
  { id: 'pz-4', category: 'Pizza', name: 'Paneer Tikka Pizza', description: 'Spiced paneer tikka chunks on a herbed tomato base with mozzarella.', price: 360, rating: 4.8, reviews: 295, tags: ['Veg', 'Chef Special'], prepTime: '16 min', image: '/images/menu/pz-4.webp' },
  { id: 'pz-5', category: 'Pizza', name: 'Chicken Salami Pizza', description: 'Sliced chicken salami, mozzarella, jalapenos on thin sourdough crust.', price: 380, rating: 4.8, reviews: 330, tags: ['Non-Veg', 'Bestseller'], prepTime: '16 min', image: '/images/menu/pz-5.webp' },
  { id: 'pz-6', category: 'Pizza', name: 'BBQ Chicken Pizza', description: 'Smoky BBQ chicken, red onion, peppers and mozzarella on thin crust.', price: 390, rating: 4.8, reviews: 310, tags: ['Non-Veg', 'Chef Special'], prepTime: '16 min', image: '/images/menu/pz-6.webp' },
  { id: 'pz-7', category: 'Pizza', name: 'Mushroom Truffle Pizza', description: 'Wild mushrooms, truffle oil, rosemary and mozzarella on white pizza.', price: 380, rating: 4.8, reviews: 240, tags: ['Veg', 'Chef Special'], prepTime: '15 min', image: '/images/menu/pz-7.webp' },
  { id: 'pz-8', category: 'Pizza', name: 'Peri Peri Chicken Pizza', description: 'Peri peri spiced chicken, peppers and cheese on thin crust.', price: 390, rating: 4.8, reviews: 275, tags: ['Non-Veg'], prepTime: '16 min', image: '/images/menu/pz-8.webp' },

  // ─── PASTA ─────────────────────────────────────────────────
  { id: 'pa-1', category: 'Pasta', name: 'Penne Arrabbiata', description: 'Penne pasta in fiery San Marzano chilli tomato sauce with basil.', price: 240, rating: 4.7, reviews: 240, tags: ['Veg'], prepTime: '12 min', image: '/images/menu/pa-1.webp' },
  { id: 'pa-2', category: 'Pasta', name: 'Spaghetti Aglio e Olio', description: 'Classic Italian spaghetti with garlic, olive oil, chilli, and parsley.', price: 250, rating: 4.7, reviews: 210, tags: ['Veg'], prepTime: '10 min', image: '/images/menu/pa-2.webp' },
  { id: 'pa-3', category: 'Pasta', name: 'Pasta Alfredo', description: 'Fettuccine in rich parmesan cream sauce with garlic and herbs.', price: 260, rating: 4.8, reviews: 290, tags: ['Veg', 'Bestseller'], prepTime: '12 min', image: '/images/menu/pa-3.webp' },
  { id: 'pa-4', category: 'Pasta', name: 'Chicken Alfredo Pasta', description: 'Fettuccine with grilled chicken strips in creamy parmesan sauce.', price: 300, rating: 4.9, reviews: 380, tags: ['Non-Veg', 'Bestseller', 'Chef Special'], prepTime: '14 min', image: '/images/menu/pa-4.webp' },
  { id: 'pa-5', category: 'Pasta', name: 'Pink Sauce Pasta', description: 'Penne in creamy tomato-basil pink sauce with a touch of cream.', price: 260, rating: 4.8, reviews: 270, tags: ['Veg', 'Chef Special'], prepTime: '12 min', image: '/images/menu/pa-5.webp' },
  { id: 'pa-6', category: 'Pasta', name: 'Chicken Pesto Pasta', description: 'Penne tossed with grilled chicken in house basil-pine nut pesto.', price: 310, rating: 4.8, reviews: 240, tags: ['Non-Veg'], prepTime: '14 min', image: '/images/menu/pa-6.webp' },
  { id: 'pa-7', category: 'Pasta', name: 'Mushroom & Spinach Pasta', description: 'Creamy pasta with sautéed wild mushrooms and fresh spinach.', price: 270, rating: 4.7, reviews: 210, tags: ['Veg'], prepTime: '12 min', image: '/images/menu/pa-7.webp' },
  { id: 'pa-8', category: 'Pasta', name: 'Egg Hakka Noodles', description: 'Indo-Chinese wok-tossed noodles with egg, vegetables and soy sauce.', price: 180, rating: 4.7, reviews: 310, tags: ['Non-Veg', 'Bestseller'], prepTime: '10 min', image: '/images/menu/pa-8.webp' },

  // ─── VEG (MAIN) ────────────────────────────────────────────
  { id: 'vm-1', category: 'Veg', name: 'Paneer Butter Masala', description: 'Soft paneer cubes in rich tomato-cashew butter masala gravy.', price: 240, rating: 4.8, reviews: 310, tags: ['Veg', 'Bestseller'], prepTime: '15 min', image: '/images/menu/vm-1.webp' },
  { id: 'vm-2', category: 'Veg', name: 'Kadai Paneer', description: 'Paneer and bell peppers in aromatic kadai masala with fresh cream.', price: 250, rating: 4.7, reviews: 270, tags: ['Veg'], prepTime: '15 min', image: '/images/menu/vm-2.webp' },
  { id: 'vm-3', category: 'Veg', name: 'Shahi Paneer', description: 'Paneer in rich royal Mughlai cashew-cream and saffron gravy.', price: 260, rating: 4.7, reviews: 240, tags: ['Veg', 'Chef Special'], prepTime: '15 min', image: '/images/menu/vm-3.webp' },
  { id: 'vm-4', category: 'Veg', name: 'Dal Makhani', description: 'Slow-cooked black lentils in butter and cream with spices.', price: 200, rating: 4.7, reviews: 280, tags: ['Veg', 'Bestseller'], prepTime: '15 min', image: '/images/menu/vm-4.webp' },
  { id: 'vm-5', category: 'Veg', name: 'Veg Fried Rice', description: 'Wok-tossed basmati rice with seasonal vegetables and soy sauce.', price: 160, rating: 4.6, reviews: 240, tags: ['Veg'], prepTime: '10 min', image: '/images/menu/vm-5.webp' },
  { id: 'vm-6', category: 'Veg', name: 'Veg Biryani', description: 'Fragrant basmati rice layered with spiced vegetables and saffron.', price: 220, rating: 4.7, reviews: 265, tags: ['Veg'], prepTime: '20 min', image: '/images/menu/vm-6.webp' },
  { id: 'vm-7', category: 'Veg', name: 'Mushroom Masala', description: 'Button mushrooms in thick spiced tomato-onion gravy.', price: 210, rating: 4.6, reviews: 180, tags: ['Veg'], prepTime: '12 min', image: '/images/menu/vm-7.webp' },

  // ─── FISH ──────────────────────────────────────────────────
  { id: 'fi-1', category: 'Fish', name: 'Fish Curry', description: 'Fresh Rohu fish pieces in spiced Bengali-style mustard curry.', price: 260, rating: 4.8, reviews: 290, tags: ['Non-Veg', 'Bestseller'], prepTime: '18 min', image: '/images/menu/fi-1.webp' },
  { id: 'fi-2', category: 'Fish', name: 'Fish Fry', description: 'Crispy pan-fried fish fillet with spiced batter and lemon wedge.', price: 250, rating: 4.7, reviews: 265, tags: ['Non-Veg'], prepTime: '12 min', image: '/images/menu/fi-2.webp' },
  { id: 'fi-3', category: 'Fish', name: 'Grilled Fish', description: 'Herb-marinated fish fillet grilled with butter and lemon butter sauce.', price: 280, rating: 4.7, reviews: 210, tags: ['Non-Veg', 'Chef Special'], prepTime: '15 min', image: '/images/menu/fi-3.webp' },
  { id: 'fi-4', category: 'Fish', name: 'Prawn Curry', description: 'Juicy prawns in rich coconut and tomato spiced curry.', price: 300, rating: 4.8, reviews: 240, tags: ['Non-Veg', 'Chef Special'], prepTime: '18 min', image: '/images/menu/fi-4.webp' },
  { id: 'fi-5', category: 'Fish', name: 'Fish with Chips', description: 'Beer-battered fish fillet with crispy fries and tartar sauce.', price: 290, rating: 4.7, reviews: 200, tags: ['Non-Veg'], prepTime: '14 min', image: '/images/menu/fi-5.webp' },

  // ─── MEAT ──────────────────────────────────────────────────
  { id: 'me-1', category: 'Meat', name: 'Chicken Butter Masala', description: 'Tender chicken in velvety tomato-cashew-cream masala gravy.', price: 260, rating: 4.8, reviews: 340, tags: ['Non-Veg', 'Bestseller'], prepTime: '18 min', image: '/images/menu/me-1.webp' },
  { id: 'me-2', category: 'Meat', name: 'Chicken Biryani', description: 'Aromatic basmati rice layered with spiced chicken and saffron.', price: 280, rating: 4.9, reviews: 420, tags: ['Non-Veg', 'Bestseller'], prepTime: '20 min', image: '/images/menu/me-2.webp' },
  { id: 'me-3', category: 'Meat', name: 'Chicken Fried Rice', description: 'Wok-tossed basmati rice with egg, shredded chicken, and soy sauce.', price: 200, rating: 4.7, reviews: 310, tags: ['Non-Veg', 'Bestseller'], prepTime: '10 min', image: '/images/menu/me-3.webp' },
  { id: 'me-4', category: 'Meat', name: 'Mutton Curry', description: 'Tender slow-cooked mutton in rich Bengal-style spiced gravy.', price: 320, rating: 4.8, reviews: 280, tags: ['Non-Veg', 'Chef Special'], prepTime: '25 min', image: '/images/menu/me-4.webp' },
  { id: 'me-5', category: 'Meat', name: 'Mutton Biryani', description: 'Kolkata-style fragrant biryani with slow-cooked mutton pieces.', price: 340, rating: 4.9, reviews: 360, tags: ['Non-Veg', 'Bestseller', 'Chef Special'], prepTime: '25 min', image: '/images/menu/me-5.webp' },
  { id: 'me-6', category: 'Meat', name: 'Chicken Stir Fry', description: 'Wok-seared chicken strips with seasonal vegetables in garlic sauce.', price: 250, rating: 4.7, reviews: 210, tags: ['Non-Veg'], prepTime: '12 min', image: '/images/menu/me-6.webp' },

  // ─── MAIN COURSE ───────────────────────────────────────────
  { id: 'mc-1', category: 'Main Course', name: 'Gourmet Chicken Steak Sizzler', description: 'Flame-grilled chicken steak on cast-iron with mushroom pepper sauce, veggies and wedges.', price: 380, rating: 4.9, reviews: 1150, tags: ['Bestseller', 'Chef Special', 'Non-Veg'], prepTime: '15 min', image: '/images/menu/mc-1.webp' },
  { id: 'mc-2', category: 'Main Course', name: 'Fish Steak Sizzler', description: 'Grilled fish steak on sizzling platter with lemon butter sauce and vegetables.', price: 360, rating: 4.7, reviews: 230, tags: ['Non-Veg', 'Chef Special'], prepTime: '15 min', image: '/images/menu/mc-2.webp' },
  { id: 'mc-3', category: 'Main Course', name: 'Veg Sizzler', description: 'Grilled paneer and vegetables on sizzling cast iron with pepper corn sauce.', price: 300, rating: 4.6, reviews: 200, tags: ['Veg'], prepTime: '14 min', image: '/images/menu/mc-3.webp' },
  { id: 'mc-4', category: 'Main Course', name: 'Chilli Chicken Sizzler', description: 'Sizzling platter with fried rice, wok-tossed spicy chilli chicken, onion rings.', price: 370, rating: 4.8, reviews: 310, tags: ['Non-Veg', 'Chef Special'], prepTime: '18 min', image: '/images/menu/mc-4.webp' },
  { id: 'mc-5', category: 'Main Course', name: 'Mutton Sizzler', description: 'Tender mutton cutlets on a hot sizzling iron with peppercorn sauce and mash.', price: 400, rating: 4.8, reviews: 245, tags: ['Non-Veg', 'Chef Special'], prepTime: '20 min', image: '/images/menu/mc-5.webp' },
  { id: 'mc-6', category: 'Main Course', name: 'Steamed Rice', description: 'Plain steamed long-grain basmati rice, served alongside curries.', price: 80, rating: 4.5, reviews: 200, tags: ['Veg'], prepTime: '10 min', image: '/images/menu/mc-6.webp' },
  { id: 'mc-7', category: 'Main Course', name: 'Naan', description: 'Soft butter naan baked fresh, served with any main course.', price: 50, rating: 4.6, reviews: 280, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/mc-7.webp' },
  { id: 'mc-8', category: 'Main Course', name: 'Garlic Naan', description: 'Freshly baked naan topped with garlic butter and coriander.', price: 70, rating: 4.7, reviews: 260, tags: ['Veg'], prepTime: '5 min', image: '/images/menu/mc-8.webp' },

  // ─── DESSERT ───────────────────────────────────────────────
  { id: 'de-1', category: 'Dessert', name: 'Chocolate Lava Cake', description: 'Warm dark chocolate fondant with molten center, vanilla ice cream.', price: 220, rating: 4.9, reviews: 480, tags: ['Veg', 'Bestseller'], prepTime: '10 min', image: '/images/menu/de-1.webp' },
  { id: 'de-2', category: 'Dessert', name: 'Cheesecake', description: 'Classic New York-style baked cheesecake with seasonal berry compote.', price: 200, rating: 4.8, reviews: 370, tags: ['Veg', 'Chef Special'], prepTime: '5 min', image: '/images/menu/de-2.webp' },
  { id: 'de-3', category: 'Dessert', name: 'Brownie with Ice Cream', description: 'Warm fudgy chocolate brownie served with a scoop of vanilla ice cream.', price: 190, rating: 4.9, reviews: 420, tags: ['Veg', 'Bestseller'], prepTime: '6 min', image: '/images/menu/de-3.webp' },
  { id: 'de-4', category: 'Dessert', name: 'Tiramisu', description: 'Classic Italian tiramisu with espresso-soaked ladyfingers and mascarpone.', price: 220, rating: 4.8, reviews: 310, tags: ['Veg', 'Chef Special'], prepTime: '5 min', image: '/images/menu/de-4.webp' },
  { id: 'de-5', category: 'Dessert', name: 'Waffles with Nutella', description: 'Crispy Belgian waffles with Nutella spread, banana, and whipped cream.', price: 220, rating: 4.8, reviews: 345, tags: ['Veg', 'Bestseller'], prepTime: '8 min', image: '/images/menu/de-5.webp' },
  { id: 'de-6', category: 'Dessert', name: 'Ice Cream (2 Scoops)', description: 'Choice of two scoops: Vanilla, Chocolate, Strawberry, or Mango.', price: 140, rating: 4.7, reviews: 290, tags: ['Veg'], prepTime: '3 min', image: '/images/menu/de-6.webp' },
  { id: 'de-7', category: 'Dessert', name: 'Gulab Jamun', description: 'Two warm rose-scented khoya dumplings soaked in cardamom syrup.', price: 100, rating: 4.7, reviews: 260, tags: ['Veg'], prepTime: '3 min', image: '/images/menu/de-7.webp' },
  { id: 'de-8', category: 'Dessert', name: 'Mango Kulfi', description: 'Authentic Alphonso mango kulfi on a stick with dry fruit sprinkle.', price: 130, rating: 4.7, reviews: 220, tags: ['Veg'], prepTime: '3 min', image: '/images/menu/de-8.webp' },

  // ─── BIRTHDAY CAKE ─────────────────────────────────────────
  { id: 'bc-1', category: 'Birthday Cake', name: 'Classic Vanilla Birthday Cake', description: 'Layers of moist vanilla sponge with buttercream frosting and sprinkles. Pre-order required.', price: 800, rating: 4.9, reviews: 180, tags: ['Veg', 'Pre-order'], prepTime: 'Pre-order', image: '/images/menu/bc-1.webp' },
  { id: 'bc-2', category: 'Birthday Cake', name: 'Chocolate Truffle Cake', description: 'Rich dark chocolate layers with truffle ganache and chocolate curls. Pre-order required.', price: 900, rating: 4.9, reviews: 210, tags: ['Veg', 'Bestseller', 'Pre-order'], prepTime: 'Pre-order', image: '/images/menu/bc-2.webp' },
  { id: 'bc-3', category: 'Birthday Cake', name: 'Strawberry Cream Cake', description: 'Fresh strawberry and cream layered sponge cake with berry topping.', price: 850, rating: 4.8, reviews: 170, tags: ['Veg', 'Pre-order'], prepTime: 'Pre-order', image: '/images/menu/bc-3.webp' },
  { id: 'bc-4', category: 'Birthday Cake', name: 'Black Forest Cake', description: 'Classic German Black Forest with cherries, cream and chocolate shavings.', price: 900, rating: 4.9, reviews: 195, tags: ['Veg', 'Bestseller', 'Pre-order'], prepTime: 'Pre-order', image: '/images/menu/bc-4.webp' },
  { id: 'bc-5', category: 'Birthday Cake', name: 'Butterscotch Cake', description: 'Soft sponge layers filled with butterscotch cream and praline topping.', price: 800, rating: 4.8, reviews: 160, tags: ['Veg', 'Pre-order'], prepTime: 'Pre-order', image: '/images/menu/bc-5.webp' },
  { id: 'bc-6', category: 'Birthday Cake', name: 'Red Velvet Cake', description: 'Classic red velvet layers with smooth cream cheese frosting.', price: 950, rating: 4.9, reviews: 225, tags: ['Veg', 'Chef Special', 'Pre-order'], prepTime: 'Pre-order', image: '/images/menu/bc-6.webp' },
];

export default menuItems;
