"use client";
import { useState } from "react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

export default function TestKey() {
	const [apiKey, setApiKey] = useState("");
	const [isPending, setIsPending] = useState(false);
	const [result, setResult] = useState({});

	const testKey = async () => {
		if (!apiKey) {
			alert("Please enter an API Key.");
			return;
		}

		try {
			setIsPending(true);
			const result = await fetch("/api/test", {
				headers: {
					"x-api-key": apiKey,
				},
			});
			const data = await result.json();
			setResult(data);
		} catch (err) {
			if (err instanceof Error)
				setResult({
					error: String(err?.message ? err.message : "Server error."),
				});
		} finally {
			setIsPending(false);
		}
	};

	return (
		<section className="row-span-2 col-start-3 h-full">
			<h2>Test your key</h2>
			<div className="flex flex-col gap-2">
				<Input
					placeholder="Your new Api Key"
					className="font-mono"
					value={apiKey}
					onChange={(e) => setApiKey(e.target.value)}
				/>
				<Button disabled={isPending} onClick={testKey}>
					Create new API Key
				</Button>
				<pre className="p-2 font-mono rounded-md border text-wrap">
					{JSON.stringify({ "x-api-key": apiKey }, null, 2)}
				</pre>
				<div className="mt-2">
					<h3>Result:</h3>
					<pre className="p-2 font-mono rounded-md border">
						{JSON.stringify({ result }, null, 2)}
					</pre>
				</div>
			</div>
		</section>
	);
}
