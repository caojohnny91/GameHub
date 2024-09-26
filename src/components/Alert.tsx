import { ReactNode } from "react";

// using interface Prop to set the Prop data types and model
interface Props {
  children: ReactNode; // using children instead of text to mak eit easier in app.tsx
}
export const Alert = ({ children }: Props) => {
  return <div className="alert alert-primary">{children}</div>;
};
