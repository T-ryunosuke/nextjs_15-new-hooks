"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { LogInIcon, SearchIcon, BellIcon, MailIcon } from "./Icons";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";

export default function Header() {
  return (
    <header className="bg-white dark:bg-gray-800 shadow-md px-4 md:px-6 py-3 flex items-center justify-between">
      <Link href="/" className="flex items-center gap-2" prefetch={false}>
        <LogInIcon className="h-6 w-6 text-primary" />
        <span className="text-lg font-bold text-primary">Next SNS</span>
      </Link>
      <div className="flex items-center gap-4">
        <div className="relative w-full max-w-md">
          <Input
            type="text"
            placeholder="Search..."
            className="pr-10 rounded-full"
          />
          <SearchIcon className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
        <div className="flex items-center gap-4">
          <Link href="#" className="relative" prefetch={false}>
            <BellIcon className="h-6 w-6 text-muted-foreground" />
          </Link>
          <Link href="#" className="relative" prefetch={false}>
            <MailIcon className="h-6 w-6 text-muted-foreground" />
          </Link>

          {/* ログインユーザーのアイコン画像表示とログアウト状態でログインリンク表示 */}
          <div>
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <Link className="w-20 inline-block" href={"/sign-in"}>
                ログイン
              </Link>
            </SignedOut>
          </div>
        </div>
      </div>
    </header>
  );
}
