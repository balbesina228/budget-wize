"use client";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/shared/ui/card";
import { Input } from "@/shared/ui/input";
import { Label } from "@/shared/ui/label";
import { useAuth } from "@/shared/model/auth-store";
import { Button } from "@/shared/ui";
import { useEffect, useState } from "react";
import Link from "next/link";
import { redirect } from "next/navigation";

export function LoginForm() {
  const [email, setEmail] = useState<string>("");
  const login = useAuth((state) => state.login);
  const { user } = useAuth();

  useEffect(() => {
    if (user) redirect("/dashboard");
  }, [user]);

  return (
    <>
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Вход в профиль</CardTitle>
          <CardDescription>
            Войдите, чтобы получить доступ ко всем функциям
          </CardDescription>
          <CardAction>
            <Button variant="link">
              <Link href="/register">Регистрация</Link>
            </Button>
          </CardAction>
        </CardHeader>
        <CardContent>
          <form id="login-form">
            <div className="flex flex-col gap-6">
              <div className="grid gap-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  type="email"
                  placeholder="m@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="grid gap-2">
                <div className="flex items-center">
                  <Label htmlFor="password">Пароль</Label>
                  <Link
                    href="#"
                    className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                  >
                    Забыли пароль?
                  </Link>
                </div>
                <Input id="password" type="password" />
              </div>
            </div>
          </form>
        </CardContent>
        <CardFooter className="flex-col gap-2">
          <Button
            onClick={() => {
              login(email);
            }}
          >
            Войти
          </Button>
        </CardFooter>
      </Card>
    </>
  );
}
