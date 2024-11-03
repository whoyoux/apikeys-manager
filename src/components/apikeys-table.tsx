import { prisma } from "@/lib/prisma";
import {
	Table,
	TableHeader,
	TableBody,
	TableRow,
	TableHead,
	TableCell,
} from "@/components/ui/table";
import { DeleteKeyButton } from "./delete-key-button";

export async function ApiKeysTable() {
	const keys = await prisma.apiKey.findMany();

	return (
		<section className="col-span-2 row-span-4 h-full">
			<Table className="w-full text-left">
				<TableHeader>
					<TableRow>
						<TableHead>Key</TableHead>
						<TableHead>Date Created</TableHead>
						<TableHead className="text-right">Actions</TableHead>
					</TableRow>
				</TableHeader>
				<TableBody>
					{keys.map((apikey) => (
						<TableRow key={apikey.id}>
							<TableCell>{apikey.key}</TableCell>
							<TableCell>{apikey.createdAt.toDateString()}</TableCell>
							<TableCell className="text-right">
								<DeleteKeyButton apikey={apikey.key} />
							</TableCell>
						</TableRow>
					))}
				</TableBody>
			</Table>
		</section>
	);
}
