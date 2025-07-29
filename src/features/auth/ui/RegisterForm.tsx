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
import { Button } from "@/shared/ui";
import Link from "next/link";
import { useAuth } from "@/shared/model/auth-store";
import { useEffect } from "react";
import { redirect } from "next/navigation";

export function RegisterForm() {
  const { user } = useAuth();

  useEffect(() => {
    if (user) redirect("/dashboard");
  }, [user]);
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Регистрация</CardTitle>
        <CardDescription>
          Зарегистрируйтесь, чтобы получить доступ ко всем функциям
        </CardDescription>
        <CardAction>
          <Button variant="link">
            <Link href="login">Вход</Link>
          </Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <form>
          <div className="flex flex-col gap-6">
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="m@example.com"
                required
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
              <Input id="password" type="password" required />
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex-col gap-2">
        <Button type="submit" className="w-full">
          Войти
        </Button>
      </CardFooter>
    </Card>
  );
}
