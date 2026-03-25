import { DataSource } from 'typeorm';
import * as bcrypt from 'bcrypt';

const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5433,
  username: process.env.DB_USERNAME || 'elearning',
  password: process.env.DB_PASSWORD || 'elearning_secret',
  database: process.env.DB_NAME || 'elearning_db',
  synchronize: false,
});

const users = [
  { username: 'admin',      fullName: 'Admin User',       email: 'admin@elearning.com',      role: 'ADMIN',      password: 'Admin@123' },
  { username: 'instructor1',fullName: 'Alice Johnson',    email: 'alice@elearning.com',       role: 'INSTRUCTOR', password: 'Alice@123' },
  { username: 'instructor2',fullName: 'Bob Smith',        email: 'bob@elearning.com',         role: 'INSTRUCTOR', password: 'Bob@12345' },
  { username: 'student1',   fullName: 'Charlie Brown',    email: 'charlie@elearning.com',     role: 'STUDENT',    password: 'Charlie@1' },
  { username: 'student2',   fullName: 'Diana Prince',     email: 'diana@elearning.com',       role: 'STUDENT',    password: 'Diana@123' },
  { username: 'student3',   fullName: 'Edward Norton',    email: 'edward@elearning.com',      role: 'STUDENT',    password: 'Edward@12' },
  { username: 'student4',   fullName: 'Fiona Green',      email: 'fiona@elearning.com',       role: 'STUDENT',    password: 'Fiona@123' },
  { username: 'student5',   fullName: 'George Miles',     email: 'george@elearning.com',      role: 'STUDENT',    password: 'George@12' },
  { username: 'student6',   fullName: 'Hannah White',     email: 'hannah@elearning.com',      role: 'STUDENT',    password: 'Hannah@12' },
  { username: 'student7',   fullName: 'Ivan Drago',       email: 'ivan@elearning.com',        role: 'STUDENT',    password: 'Ivan@1234' },
];

async function seed() {
  console.log('🌱 Connecting to database...');
  await AppDataSource.initialize();
  console.log('✅ Connected.');

  for (const user of users) {
    const existing = await AppDataSource.query(
      `SELECT id FROM users WHERE username = $1 OR email = $2`,
      [user.username, user.email],
    );
    if (existing.length > 0) {
      console.log(`⏭  Skipped (already exists): ${user.username}`);
      continue;
    }

    const hashed = await bcrypt.hash(user.password, 12);
    await AppDataSource.query(
      `INSERT INTO users (id, username, password, "fullName", email, role, "createdAt", "updatedAt")
       VALUES (gen_random_uuid(), $1, $2, $3, $4, $5, NOW(), NOW())`,
      [user.username, hashed, user.fullName, user.email, user.role],
    );
    console.log(`✅ Created: ${user.username} (${user.role}) — password: ${user.password}`);
  }

  await AppDataSource.destroy();
  console.log('\n🎉 Seed complete!');
}

seed().catch((err) => {
  console.error('❌ Seed failed:', err.message);
  process.exit(1);
});
