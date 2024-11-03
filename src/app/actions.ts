"use server";

import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export const generateNewApiKeyAction = async () => {
	"use server";

	const key = await prisma.apiKey.create({
		data: {},
	});

	if (!key) {
		return {
			success: false,
			message: "Failed to create new API Key",
		};
	}

	revalidatePath("/");

	return {
		success: true,
		key,
	};
};

export async function deleteKeyAction(key: string) {
	if (!key || key.length <= 0 || key.length > 64) {
		return {
			success: false,
			message: "Invalid key",
		};
	}

	const deleted = await prisma.apiKey.delete({
		where: {
			key,
		},
	});

	if (!deleted) {
		return {
			success: false,
			message: "Failed to delete key",
		};
	}

	revalidatePath("/");

	return {
		success: true,
		message: "Key deleted successfully",
	};
}
