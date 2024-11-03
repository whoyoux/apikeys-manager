import { prisma } from "@/lib/prisma";
import { headers } from "next/headers";

export async function GET() {
	const headersObj = await headers();
	const apiKey = headersObj.get("x-api-key");

	if (!apiKey) {
		return Response.json({ error: "No API Key provided." }, { status: 401 });
	}

	const isFound = await prisma.apiKey.findFirst({
		where: {
			key: apiKey,
		},
	});

	if (!isFound) {
		return Response.json({ error: "Invalid API Key." }, { status: 401 });
	}

	return Response.json({ message: "Hello World" });
}
