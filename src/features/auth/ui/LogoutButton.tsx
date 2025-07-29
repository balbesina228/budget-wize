"use client";

import { useAuth } from "@/shared/model/auth-store";
import { Button } from "@/shared/ui";

export function LogoutButton() {
  const logout = useAuth((s) => s.logout);

  return <Button onClick={logout}>Выйти из профиля</Button>;
}
