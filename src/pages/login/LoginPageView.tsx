import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button, Container } from "@/shared/ui";

export function LoginPageView() {
  return (
    <Container className="w-max min-w-110">
      <div className="bg-primary min-h-100 rounded-md shadow-md shadow-black p-8 text-secondary gap-16 items-center justify-center flex">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Вход в профиль</CardTitle>
            <CardDescription>
              Войдите, чтобы получить доступ ко всем функциям
            </CardDescription>
            <CardAction>
              <Button variant="link"><a href="register">Регистрация</a></Button>
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
                    <a
                      href="#"
                      className="ml-auto inline-block text-sm underline-offset-4 hover:underline"
                    >
                      Забыли пароль?
                    </a>
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
      </div>
    </Container>
  );
}
