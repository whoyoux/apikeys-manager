"use client";

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { generateNewApiKeyAction } from "@/app/actions";

export default function ApiKeyCreator() {
	const [apiKey, setApiKey] = useState("");
	const [isPending, setIsPending] = useState(false);
	return (
		<section className="row-span-2 col-start-3 row-start-3 h-full">
			<h2>API Key Creator</h2>
			<div className="flex flex-col gap-2">
				<Input
					placeholder="Your new Api Key"
					className="font-mono"
					value={apiKey}
					readOnly
				/>
				<Button
					disabled={isPending}
					onClick={async () => {
						setIsPending(true);
						const result = await generateNewApiKeyAction();
						if (result.success && result.key) {
							setApiKey(result.key.key);
						} else {
							alert(result.message);
						}

						setIsPending(false);
					}}
				>
					Create new API Key
				</Button>
			</div>
		</section>
	);
}
