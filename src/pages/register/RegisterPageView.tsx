
import { RegisterForm } from "@/features/auth";
import { Container } from "@/shared/ui";

export function RegisterPageView() {
  return (
    <Container className="w-max min-w-110">
      <div className="bg-primary min-h-100 rounded-md shadow-md shadow-black p-8 text-secondary gap-16 items-center justify-center flex">
        <RegisterForm />
      </div>
    </Container>
  );
}
