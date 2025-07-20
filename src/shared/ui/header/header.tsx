import { BadgeRussianRuble, User } from "lucide-react";
import { Container } from "../container";
import { Link } from "./link";

export function Header() {
  return (
    <Container>
      <div className="justify-between items-center flex bg-primary text-secondary rounded-md p-8 shadow-md shadow-black">
        
        <a href="/" className="flex items-center">
          <BadgeRussianRuble size={50} />
          <div className="p-2 px-8 flex flex-col">
            <span className="text-7xl">Budget Wize</span>
            <span className="">Лучший трекер Ваших финансов</span>
          </div>
        </a>

        <div className="flex flex-col items-center">
          <a href="/profile" className="flex items-center">
            <User />
            <span>Profile</span>
          </a>
        </div>

      </div>
      <div className="flex mx-2 gap-5">
        <Link text="Сводка" href="/" active={true} />
        <Link text="sample text" href="/" />
        <Link text="tab 3" href="/" />
      </div>
    </Container>
  );
}
