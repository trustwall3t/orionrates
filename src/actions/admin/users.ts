import { db } from '@/lib/db';
import type { User } from '@/generated/prisma/client';
import { revalidatePath } from 'next/cache';
import { unstable_noStore as noStore } from 'next/cache';

export const getAllUsers = async () => {
	noStore();
	try {
		const users = await db.user.findMany({
			select: {
				id: true,
				name: true,
				email: true,
				phone: true,
				walletBalance: true,
				refcode: true,
				isVerified: true,
				createdAt: true,
				profitBalance: true,
				investmentBalance: true,
			},
		});
		return users;
	} catch (error) {
		console.error('Error fetching users:', error);
		throw error;
	}
};

export const getUserById = async (id: string): Promise<User | null> => {
	const user = await db.user.findUnique({ where: { id } });
	console.log(user);
	return user;
};

export const deleteUser = async (id: string) => {
	await db.session.deleteMany({ where: { userId: id } });
	const user = await db.user.delete({ where: { id } });
	revalidatePath('/admin/users');
	return user;
};
