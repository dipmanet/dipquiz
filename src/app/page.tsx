import { Button } from "@/components/ui/button";
import { getAuthSession } from "@/lib/nextauth";

export default function Home() {
	return (
		<main className="flex flex-col items-center justify-between p-24">
			<Button>Hello world</Button>
			<p>{JSON.stringify(async () => await getAuthSession().then((session) => session))}</p>
		</main>
	);
}
