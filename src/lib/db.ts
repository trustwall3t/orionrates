import { PrismaClient } from '@/generated/prisma/client';
import { PrismaPg } from '@prisma/adapter-pg';

const prismaClientSingleton = () => {
	if (!process.env.DATABASE_URL) {
		throw new Error(
			'DATABASE_URL environment variable is not set. ' +
				'Please set DATABASE_URL in your environment variables. ' +
				'If deploying to Cloudflare, add it in your Cloudflare dashboard under Environment Variables.',
		);
	}

	const adapter = new PrismaPg({
		connectionString: process.env.DATABASE_URL,
	});

	return new PrismaClient({
		adapter,
		log: ['query'],
	});
};

type PrismaClientSingleton = ReturnType<typeof prismaClientSingleton>;

const globalForPrisma = globalThis as unknown as {
	prisma: PrismaClientSingleton | undefined;
};

export const db = globalForPrisma.prisma ?? prismaClientSingleton();

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db;
