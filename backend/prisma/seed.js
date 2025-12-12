import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function main() {
  console.log('🌱 Starting database seeding...');

  // Create an admin user
  const adminPassword = await bcrypt.hash('SuperAdmin@2024', 10);
  const admin = await prisma.user.upsert({
    where: { email: 'sophia.anderson@ratemaster.com' },
    update: {},
    create: {
      name: 'Sophia Anderson',
      email: 'sophia.anderson@ratemaster.com',
      password: adminPassword,
      address: '1250 Broadway Avenue, Manhattan, New York, NY 10001',
      role: 'ADMIN'
    }
  });

  console.log('✅ Created admin user:', admin.email);

  // Create some store owners with their stores
  const store1Password = await bcrypt.hash('Luxury@2024', 10);
  const store1Owner = await prisma.user.upsert({
    where: { email: 'michael.chen@luxuryemporium.com' },
    update: {},
    create: {
      name: 'Michael Chen',
      email: 'michael.chen@luxuryemporium.com',
      password: store1Password,
      address: '888 Rodeo Drive, Beverly Hills, CA 90210',
      role: 'STORE_OWNER',
      store: {
        create: {
          name: 'Luxury Emporium',
          email: 'michael.chen@luxuryemporium.com',
          address: '888 Rodeo Drive, Beverly Hills, CA 90210'
        }
      }
    }
  });

  console.log('✅ Created store owner 1:', store1Owner.email);

  const store2Password = await bcrypt.hash('Organic@2024', 10);
  const store2Owner = await prisma.user.upsert({
    where: { email: 'emma.rodriguez@greenmarket.com' },
    update: {},
    create: {
      name: 'Emma Rodriguez',
      email: 'emma.rodriguez@greenmarket.com',
      password: store2Password,
      address: '2450 Market Street, San Francisco, CA 94114',
      role: 'STORE_OWNER',
      store: {
        create: {
          name: 'Green Market Organics',
          email: 'emma.rodriguez@greenmarket.com',
          address: '2450 Market Street, San Francisco, CA 94114'
        }
      }
    }
  });

  console.log('✅ Created store owner 2:', store2Owner.email);

  const store3Password = await bcrypt.hash('Coffee@2024', 10);
  const store3Owner = await prisma.user.upsert({
    where: { email: 'david.kim@artisancafe.com' },
    update: {},
    create: {
      name: 'David Kim',
      email: 'david.kim@artisancafe.com',
      password: store3Password,
      address: '567 Pike Place, Seattle, WA 98101',
      role: 'STORE_OWNER',
      store: {
        create: {
          name: 'Artisan Coffee House',
          email: 'david.kim@artisancafe.com',
          address: '567 Pike Place, Seattle, WA 98101'
        }
      }
    }
  });

  console.log('✅ Created store owner 3:', store3Owner.email);

  // Create some regular users
  const user1Password = await bcrypt.hash('Welcome@123', 10);
  const user1 = await prisma.user.upsert({
    where: { email: 'olivia.martinez@gmail.com' },
    update: {},
    create: {
      name: 'Olivia Martinez',
      email: 'olivia.martinez@gmail.com',
      password: user1Password,
      address: '3421 Ocean Boulevard, Miami Beach, FL 33139',
      role: 'USER'
    }
  });

  console.log('✅ Created regular user 1:', user1.email);

  const user2Password = await bcrypt.hash('Welcome@456', 10);
  const user2 = await prisma.user.upsert({
    where: { email: 'james.wilson@outlook.com' },
    update: {},
    create: {
      name: 'James Wilson',
      email: 'james.wilson@outlook.com',
      password: user2Password,
      address: '1875 Michigan Avenue, Chicago, IL 60611',
      role: 'USER'
    }
  });

  console.log('✅ Created regular user 2:', user2.email);

  // Create some sample ratings
  const stores = await prisma.store.findMany();

  if (stores.length > 0) {
    // User 1 rates all stores
    await prisma.rating.create({
      data: {
        rating: 5,
        userId: user1.id,
        storeId: stores[0].id
      }
    });

    if (stores.length > 1) {
      await prisma.rating.create({
        data: {
          rating: 4,
          userId: user1.id,
          storeId: stores[1].id
        }
      });
    }

    if (stores.length > 2) {
      await prisma.rating.create({
        data: {
          rating: 3,
          userId: user1.id,
          storeId: stores[2].id
        }
      });
    }

    // User 2 rates some stores
    await prisma.rating.create({
      data: {
        rating: 4,
        userId: user2.id,
        storeId: stores[0].id
      }
    });

    if (stores.length > 1) {
      await prisma.rating.create({
        data: {
          rating: 5,
          userId: user2.id,
          storeId: stores[1].id
        }
      });
    }

    console.log('Created sample ratings');
  }

  console.log('\n🎉 Database seeding completed successfully!\n');
  console.log('═══════════════════════════════════════════════════════════');
  console.log('                    LOGIN CREDENTIALS                      ');
  console.log('═══════════════════════════════════════════════════════════\n');
  console.log('👑 ADMIN ACCOUNT:');
  console.log('   Name: Sophia Anderson');
  console.log('   Email: sophia.anderson@ratemaster.com');
  console.log('   Password: SuperAdmin@2024\n');
  console.log('───────────────────────────────────────────────────────────\n');
  console.log('🏪 STORE OWNER ACCOUNTS:\n');
  console.log('   1️⃣  Luxury Emporium');
  console.log('      Owner: Michael Chen');
  console.log('      Email: michael.chen@luxuryemporium.com');
  console.log('      Password: Luxury@2024\n');
  console.log('   2️⃣  Green Market Organics');
  console.log('      Owner: Emma Rodriguez');
  console.log('      Email: emma.rodriguez@greenmarket.com');
  console.log('      Password: Organic@2024\n');
  console.log('   3️⃣  Artisan Coffee House');
  console.log('      Owner: David Kim');
  console.log('      Email: david.kim@artisancafe.com');
  console.log('      Password: Coffee@2024\n');
  console.log('───────────────────────────────────────────────────────────\n');
  console.log('👤 CUSTOMER ACCOUNTS:\n');
  console.log('   1️⃣  Olivia Martinez');
  console.log('      Email: olivia.martinez@gmail.com');
  console.log('      Password: Welcome@123\n');
  console.log('   2️⃣  James Wilson');
  console.log('      Email: james.wilson@outlook.com');
  console.log('      Password: Welcome@456\n');
  console.log('═══════════════════════════════════════════════════════════');
}
  
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
