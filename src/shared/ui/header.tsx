import { BadgeRussianRuble } from "lucide-react";
import { Container } from "./container";

export function Header() {
  return (
    <Container>
      <div className="justify-between items-center flex bg-primary text-secondary border rounded-md p-8">
        <div className="flex items-center">
          <BadgeRussianRuble size={50} />
          <div className="p-2 px-8 flex flex-col">
            <span className="text-7xl">Budget Wize</span>
            <span className="">лучший трекер Ваших финансов</span>
          </div>
        </div>
        <div>RIGHT PART</div>
      </div>
    </Container>
  );
}
