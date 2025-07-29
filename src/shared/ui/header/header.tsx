"use client";
import { BadgeRussianRuble, UserIcon } from "lucide-react";
import { Container } from "../container";
import { useEffect, useState } from "react";
import { useAuth, User } from "@/shared/model/auth-store";
import { LogoutButton } from "@/features/auth";
import Link from "next/link";
import { LinkComponent } from "./link";

export function Header() {
  const [authorized, setAuthorized] = useState<User | null>(null);
  const { user } = useAuth()

  useEffect(() => {
    if (user) {
      setAuthorized(user);
    }
  }, [user]);

  return (
    <Container>
      <div className="justify-between items-center flex bg-primary text-secondary rounded-md p-8 shadow-md shadow-black">
        <Link href="/" className="flex items-center">
          <BadgeRussianRuble size={50} />
          <div className="p-2 px-8 flex flex-col">
            <span className="text-7xl">Budget Wize</span>
            <span className="">Лучший трекер Ваших финансов</span>
          </div>
        </Link>
        {user ? (
          <LogoutButton />
        ) : (
          <div className="flex flex-col items-center">
            <Link href="/login" className="flex items-center">
              <UserIcon />
              <span>Profile</span>
            </Link>
          </div>
        )}
      </div>
      <div className="flex mx-2 gap-5">
        <LinkComponent text="Сводка" href="/dashboard" active={true} />
        <LinkComponent text="sample text" href="/" />
        <LinkComponent text="tab 3" href="/" />
      </div>
    </Container>
  );
}
