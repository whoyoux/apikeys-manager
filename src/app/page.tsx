import ApiKeyCreator from "@/components/apikey-creator";
import { ApiKeysTable } from "@/components/apikeys-table";
import TestKey from "@/components/test-key";

export default async function Home() {
	return (
		<div className="px-4 pt-6 grid grid-cols-3 grid-rows-4 gap-4 w-full min-h-[50dvh] font-sans">
			<ApiKeysTable />
			<TestKey />
			<ApiKeyCreator />
		</div>
	);
}
