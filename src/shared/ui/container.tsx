import { cn } from "@/lib/utils";

interface Props {
  className?: string;

  children?: React.ReactNode;
}

function Container(props: Props) {
  const { className, children } = props;
  return (
    <div className={cn("mx-auto max-w-[1280px]", className)}>{children}</div>
  );
}

export { Container };