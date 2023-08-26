import { getAuthSession } from "@/lib/nextauth";
import Link from "next/link";
import React from "react";
import SigninButton from "./SigninButton";
import UserAccountNav from "./UserAccountNav";

const Navbar = async () => {
	const session = await getAuthSession();
	console.log("session", session?.user);

	// if (session?.user) {
	// 	return <pre>{JSON.stringify(session.user)}</pre>;
	// }
	return (
		<div className="fixed inset-x-0 top-0 h-[5rem] z-10 g-white dark:bg-gray-950 border-b border-zinc-300 shadow-2xl shadow-gray-400 ">
			<div className="flex items-center justify-between h-full w-full gap-2 px-[9%] max-w-7xl mx-auto ">
				{/* Logo */}
				<Link href={"/"}>
					<p className="rounded-lg border-2 px-5 py-2 ">DipQuiz</p>
				</Link>

				<div className="flex items-center">{session?.user ? <UserAccountNav user={session.user} /> : <SigninButton text={"Sign In"} />}</div>
			</div>
		</div>
	);
};

export default Navbar;
