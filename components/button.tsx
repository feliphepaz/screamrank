interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  buttonType: "primary" | "secondary";
  children: React.ReactNode;
}

export default function Button({
  buttonType,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className={`btn ${buttonType === "secondary" ? "btn-secondary" : ""}`}
    >
      {children}
    </button>
  );
}
