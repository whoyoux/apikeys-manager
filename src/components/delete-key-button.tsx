"use client";

import { Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import { useState } from "react";
import { deleteKeyAction } from "@/app/actions";

type Props = {
	apikey: string;
};

export function DeleteKeyButton({ apikey }: Props) {
	const [isPending, setIsPending] = useState(false);

	return (
		<Button
			size="icon"
			variant="destructive"
			disabled={isPending}
			onClick={async () => {
				try {
					setIsPending(true);
					const result = await deleteKeyAction(apikey);
					alert(result.message);
				} catch (err) {
					if (err instanceof Error) {
						console.error(err);
					}
				} finally {
					setIsPending(false);
				}
			}}
		>
			<Trash2 />
		</Button>
	);
}
