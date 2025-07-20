interface Props {
  text?: string;

  active?: boolean;

  href?: string;
}

export function Link(props: Props) {
  const { text, active = false, href } = props;

  return (
    <>
      <a href={href} className="max-h-max max-w-max bg-primary -mt-4 mb-6 z-10 rounded-md px-4 shadow-md shadow-black duration-400 ease-in-out hover:bg-popover-foreground">
        <span className="text-secondary">{text}</span>
      </a>
    </>
  );
}
