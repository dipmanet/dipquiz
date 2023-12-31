"use client";
import { User } from "next-auth";
import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import UserAvatar from "./UserAvatar";
import Link from "next/link";
import { signOut } from "next-auth/react";
import { LogOut } from "lucide-react";

type Props = {
	user: Pick<User, "name" | "image" | "email">;
};

const UserAccountNav = ({ user }: Props) => {
	return (
		<DropdownMenu>
			<DropdownMenuTrigger>
				<UserAvatar user={user} />
			</DropdownMenuTrigger>
			<DropdownMenuContent className="bg-white" align="end">
				<div className="flex flex-col space-y-1 justify-start gap-2 p-2 leading-none">
					{user.name && <p className="font-medium">{user.name}</p>}
					{user.email && <p className="w-[200px] truncate text-sm text-zinc-700">{user.email}</p>}
				</div>

				<DropdownMenuSeparator />
				<DropdownMenuItem asChild>
					<Link href={"/dashboard"}>Dashboard</Link>
				</DropdownMenuItem>

				<DropdownMenuSeparator />
				<DropdownMenuItem
					onClick={(e) => {
						e.preventDefault();
						signOut().catch(console.error);
					}}>
					Sign Out
					<LogOut className="h-4 w-4 ml-8" />
				</DropdownMenuItem>
			</DropdownMenuContent>
		</DropdownMenu>
	);
};

export default UserAccountNav;
