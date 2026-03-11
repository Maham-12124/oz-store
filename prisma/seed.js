// prisma/seed.js
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Seeding database...');

  // Create admin user
  const hashedPassword = await bcrypt.hash('admin123', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'admin@mobileshop.com' },
    update: {},
    create: {
      name: 'Admin User',
      email: 'admin@mobileshop.com',
      password: hashedPassword,
      role: 'ADMIN',
    },
  });

  // Create test user
  const userPassword = await bcrypt.hash('user123', 10);
  await prisma.user.upsert({
    where: { email: 'user@test.com' },
    update: {},
    create: {
      name: 'Test User',
      email: 'user@test.com',
      password: userPassword,
      phone: '03001234567',
    },
  });

  // Create categories
  const phonesCategory = await prisma.category.upsert({
    where: { slug: 'smartphones' },
    update: {},
    create: {
      name: 'Smartphones',
      slug: 'smartphones',
      icon: '📱',
      description: 'Latest smartphones and mobile phones',
    },
  });

  const tabletsCategory = await prisma.category.upsert({
    where: { slug: 'tablets' },
    update: {},
    create: {
      name: 'Tablets',
      slug: 'tablets',
      icon: '📟',
      description: 'Tablets and iPads',
    },
  });

  const accessoriesCategory = await prisma.category.upsert({
    where: { slug: 'accessories' },
    update: {},
    create: {
      name: 'Accessories',
      slug: 'accessories',
      icon: '🎧',
      description: 'Phone cases, chargers, earphones',
    },
  });

  const smartwatchCategory = await prisma.category.upsert({
    where: { slug: 'smartwatches' },
    update: {},
    create: {
      name: 'Smartwatches',
      slug: 'smartwatches',
      icon: '⌚',
      description: 'Smart watches and fitness bands',
    },
  });

  // Create brands
  const apple = await prisma.brand.upsert({
    where: { slug: 'apple' },
    update: {},
    create: { name: 'Apple', slug: 'apple', logo: '/brands/apple.png' },
  });

  const samsung = await prisma.brand.upsert({
    where: { slug: 'samsung' },
    update: {},
    create: { name: 'Samsung', slug: 'samsung', logo: '/brands/samsung.png' },
  });

  const xiaomi = await prisma.brand.upsert({
    where: { slug: 'xiaomi' },
    update: {},
    create: { name: 'Xiaomi', slug: 'xiaomi', logo: '/brands/xiaomi.png' },
  });

  const oppo = await prisma.brand.upsert({
    where: { slug: 'oppo' },
    update: {},
    create: { name: 'OPPO', slug: 'oppo', logo: '/brands/oppo.png' },
  });

  // Create products
  const products = [
    {
      name: 'iPhone 15 Pro Max',
      slug: 'iphone-15-pro-max',
      description: 'Apple iPhone 15 Pro Max with A17 Pro chip, titanium design, and advanced camera system. Features 6.7-inch Super Retina XDR display with ProMotion technology.',
      price: 339999,
      salePrice: 319999,
      stock: 50,
      images: [
        'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=500',
        'https://images.unsplash.com/photo-1695048064166-3e34f26e3088?w=500',
      ],
      isFeatured: true,
      categoryId: phonesCategory.id,
      brandId: apple.id,
      rating: 4.8,
      reviewCount: 245,
      sold: 180,
      specifications: {
        display: '6.7 inch Super Retina XDR',
        processor: 'A17 Pro',
        ram: '8GB',
        storage: '256GB',
        camera: '48MP + 12MP + 12MP',
        battery: '4422mAh',
        os: 'iOS 17',
      },
    },
    {
      name: 'Samsung Galaxy S24 Ultra',
      slug: 'samsung-galaxy-s24-ultra',
      description: 'Samsung Galaxy S24 Ultra with Snapdragon 8 Gen 3, built-in S Pen, and 200MP camera. The ultimate Android flagship.',
      price: 289999,
      salePrice: 269999,
      stock: 35,
      images: [
        'https://propakistani.pk/price/wp-content/uploads/2024/05/Samsung-Galaxy-S24-Ultra-300x300.jpg',

      ],
      isFeatured: true,
      categoryId: phonesCategory.id,
      brandId: samsung.id,
      rating: 4.7,
      reviewCount: 189,
      sold: 145,
      specifications: {
        display: '6.8 inch QHD+ Dynamic AMOLED',
        processor: 'Snapdragon 8 Gen 3',
        ram: '12GB',
        storage: '256GB',
        camera: '200MP + 12MP + 10MP + 50MP',
        battery: '5000mAh',
        os: 'Android 14',
      },
    },
    {
      name: 'Xiaomi 14 Pro',
      slug: 'xiaomi-14-pro',
      description: 'Xiaomi 14 Pro with Snapdragon 8 Gen 3, Leica professional cameras, and 120W HyperCharge. Premium performance at a competitive price.',
      price: 189999,
      salePrice: 169999,
      stock: 60,
      images: [
        'https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500',
      ],
      isFeatured: true,
      categoryId: phonesCategory.id,
      brandId: xiaomi.id,
      rating: 4.6,
      reviewCount: 132,
      sold: 98,
      specifications: {
        display: '6.73 inch LTPO AMOLED',
        processor: 'Snapdragon 8 Gen 3',
        ram: '12GB',
        storage: '256GB',
        camera: '50MP + 50MP + 50MP',
        battery: '4880mAh',
        os: 'Android 14 (HyperOS)',
      },
    },
    {
      name: 'OPPO Find X7 Ultra',
      slug: 'oppo-find-x7-ultra',
      description: 'OPPO Find X7 Ultra with Hasselblad cameras, Snapdragon 8 Gen 3, and stunning design. Professional photography in your pocket.',
      price: 219999,
      stock: 25,
      images: [
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500',
      ],
      isFeatured: false,
      categoryId: phonesCategory.id,
      brandId: oppo.id,
      rating: 4.5,
      reviewCount: 87,
      sold: 62,
      specifications: {
        display: '6.82 inch LTPO AMOLED',
        processor: 'Snapdragon 8 Gen 3',
        ram: '16GB',
        storage: '512GB',
        camera: '50MP + 50MP + 64MP',
        battery: '5000mAh',
        os: 'Android 14',
      },
    },
    {
      name: 'Samsung Galaxy A55',
      slug: 'samsung-galaxy-a55',
      description: 'Samsung Galaxy A55 5G with Exynos 1480, 50MP triple camera, and 5000mAh battery. Perfect mid-range choice.',
      price: 89999,
      salePrice: 79999,
      stock: 100,
      images: [
        'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=500',
      ],
      isFeatured: false,
      categoryId: phonesCategory.id,
      brandId: samsung.id,
      rating: 4.3,
      reviewCount: 215,
      sold: 312,
      specifications: {
        display: '6.6 inch FHD+ Super AMOLED',
        processor: 'Exynos 1480',
        ram: '8GB',
        storage: '128GB',
        camera: '50MP + 12MP + 5MP',
        battery: '5000mAh',
        os: 'Android 14',
      },
    },
    {
      name: 'Xiaomi Redmi Note 13 Pro',
      slug: 'xiaomi-redmi-note-13-pro',
      description: 'Xiaomi Redmi Note 13 Pro with 200MP camera, Snapdragon 7s Gen 2, and 67W fast charging. Best value for money.',
      price: 59999,
      salePrice: 54999,
      stock: 150,
      images: [
        'https://images.unsplash.com/photo-1585060544812-6b45742d762f?w=500',
      ],
      isFeatured: false,
      categoryId: phonesCategory.id,
      brandId: xiaomi.id,
      rating: 4.4,
      reviewCount: 456,
      sold: 589,
      specifications: {
        display: '6.67 inch AMOLED',
        processor: 'Snapdragon 7s Gen 2',
        ram: '8GB',
        storage: '256GB',
        camera: '200MP + 8MP + 2MP',
        battery: '5100mAh',
        os: 'Android 13 (MIUI 14)',
      },
    },
    {
      name: 'Apple iPad Pro 12.9"',
      slug: 'apple-ipad-pro-12-9',
      description: 'Apple iPad Pro with M2 chip, stunning Liquid Retina XDR display, and Apple Pencil support. The ultimate iPad experience.',
      price: 289999,
      stock: 30,
      images: [
        'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500',
      ],
      isFeatured: true,
      categoryId: tabletsCategory.id,
      brandId: apple.id,
      rating: 4.9,
      reviewCount: 98,
      sold: 45,
      specifications: {
        display: '12.9 inch Liquid Retina XDR',
        processor: 'Apple M2',
        ram: '8GB',
        storage: '128GB',
        camera: '12MP + 10MP',
        battery: '40.88Wh',
        os: 'iPadOS 17',
      },
    },
    {
      name: 'Samsung Galaxy Tab S9',
      slug: 'samsung-galaxy-tab-s9',
      description: 'Samsung Galaxy Tab S9 with Snapdragon 8 Gen 2, AMOLED display, S Pen included, and IP68 water resistance.',
      price: 179999,
      salePrice: 159999,
      stock: 40,
      images: [
        'https://images.unsplash.com/photo-1561154464-82e9adf32764?w=500',
      ],
      isFeatured: false,
      categoryId: tabletsCategory.id,
      brandId: samsung.id,
      rating: 4.7,
      reviewCount: 134,
      sold: 89,
      specifications: {
        display: '11 inch Dynamic AMOLED 2X',
        processor: 'Snapdragon 8 Gen 2',
        ram: '8GB',
        storage: '128GB',
        camera: '13MP + 12MP',
        battery: '8400mAh',
        os: 'Android 13',
      },
    },
    {
      name: 'AirPods Pro (2nd Gen)',
      slug: 'airpods-pro-2nd-gen',
      description: 'Apple AirPods Pro 2nd Generation with Active Noise Cancellation, Transparency mode, and Adaptive Audio. Up to 30 hours total listening time.',
      price: 64999,
      salePrice: 59999,
      stock: 80,
      images: [
        'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=500',
      ],
      isFeatured: true,
      categoryId: accessoriesCategory.id,
      brandId: apple.id,
      rating: 4.8,
      reviewCount: 387,
      sold: 445,
      specifications: {
        driver: 'Custom Apple H2 chip',
        anc: 'Active Noise Cancellation',
        battery: '6 hours (30 with case)',
        connectivity: 'Bluetooth 5.3',
        waterResistance: 'IPX4',
      },
    },
    {
      name: 'Samsung Galaxy Watch 6',
      slug: 'samsung-galaxy-watch-6',
      description: 'Samsung Galaxy Watch 6 with advanced health monitoring, sapphire crystal glass, and up to 40 hours battery life.',
      price: 49999,
      salePrice: 44999,
      stock: 65,
      images: [
        'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500',
      ],
      isFeatured: false,
      categoryId: smartwatchCategory.id,
      brandId: samsung.id,
      rating: 4.5,
      reviewCount: 178,
      sold: 234,
      specifications: {
        display: '1.5 inch Super AMOLED',
        processor: 'Exynos W930',
        storage: '16GB',
        battery: '425mAh (40 hours)',
        sensors: 'Heart rate, SpO2, ECG, Body temperature',
        waterResistance: '5ATM + IP68',
      },
    },
    {
      name: 'Xiaomi Mi Band 8',
      slug: 'xiaomi-mi-band-8',
      description: 'Xiaomi Mi Band 8 with AMOLED display, 16-day battery life, 150+ sports modes, and comprehensive health tracking.',
      price: 9999,
      salePrice: 8499,
      stock: 200,
      images: [
        'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500',
      ],
      isFeatured: false,
      categoryId: smartwatchCategory.id,
      brandId: xiaomi.id,
      rating: 4.4,
      reviewCount: 892,
      sold: 1245,
      specifications: {
        display: '1.62 inch AMOLED',
        battery: '190mAh (16 days)',
        sensors: 'Heart rate, SpO2, Stress',
        waterResistance: '5ATM',
        sports: '150+ modes',
      },
    },
    {
      name: 'USB-C Fast Charger 65W',
      slug: 'usb-c-fast-charger-65w',
      description: 'Universal 65W USB-C GaN fast charger compatible with all smartphones and laptops. Compact design with multi-port support.',
      price: 4999,
      salePrice: 3999,
      stock: 500,
      images: [
        'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500',
      ],
      isFeatured: false,
      categoryId: accessoriesCategory.id,
      brandId: null,
      rating: 4.2,
      reviewCount: 654,
      sold: 1890,
      specifications: {
        power: '65W',
        ports: 'USB-C + USB-A',
        compatibility: 'Universal',
        technology: 'GaN (Gallium Nitride)',
      },
    },
  ];

  for (const product of products) {
    await prisma.product.upsert({
      where: { slug: product.slug },
      update: {},
      create: product,
    });
  }

  // Create banners
  await prisma.banner.createMany({
    skipDuplicates: true,
    data: [
      {
        title: 'New iPhone 15 Series',
        subtitle: 'Experience the future of smartphones',
        image: 'https://images.unsplash.com/photo-1695048133142-1a20484d2569?w=1200',
        link: '/shop?category=smartphones&brand=apple',
        isActive: true,
        order: 1,
      },
      {
        title: 'Samsung Galaxy Sale',
        subtitle: 'Up to 30% off on selected models',
        image: 'https://images.unsplash.com/photo-1610945265064-0e34e5519bbf?w=1200',
        link: '/shop?brand=samsung',
        isActive: true,
        order: 2,
      },
      {
        title: 'Best Accessories Deals',
        subtitle: 'Earphones, chargers, and more',
        image: 'https://images.unsplash.com/photo-1603351154351-5e2d0600bb77?w=1200',
        link: '/shop?category=accessories',
        isActive: true,
        order: 3,
      },
    ],
  });

  console.log('✅ Seeding complete!');
  console.log('👤 Admin: admin@mobileshop.com / admin123');
  console.log('👤 User: user@test.com / user123');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
