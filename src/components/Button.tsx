interface Props {
  children: string; // using children instead of text to make it easier in app.tsx
  onClick: () => void;
  color?: "primary" | "secondary" | "success" | "danger" | "warning"; // telling TS that color is optional with ? and setting options that we can type in on the color with one of these colors in app.tsx that match with bootstrap css
}
export const Button = ({ children, onClick, color = "primary" }: Props) => {
  return (
    <div>
      {/* setting default color as primary and making it dynamic below in className*/}
      <button type="button" className={"btn btn-" + color} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};
