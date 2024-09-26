import { ReactNode } from "react";

// using interface Prop to set the Prop data types and model
interface Props {
  children: ReactNode; // using children instead of text to mak eit easier in app.tsx
  onClose: () => void; // create prop and set to void so that we can creat functionality on app,tsx
}
export const Alert = ({ children, onClose }: Props) => {
  return (
    // add className and button from bootstrap
    <div className="alert alert-primary alert-dismissible">
      {children}
      <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button>
      {/* call the onClose funcitonality when the close button is clicked */}
    </div>
  );
};
