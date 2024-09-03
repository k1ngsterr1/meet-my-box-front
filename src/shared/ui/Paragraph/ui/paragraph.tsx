import styles from "./styles.module.scss";

interface IParagraph {
  children: React.ReactNode;
  isCentered?: boolean;
  margin?: string;
  width?: string;
}

export const Paragraph: React.FC<IParagraph> = ({
  children,
  isCentered,
  margin,
  width,
}) => {
  return (
    <p
      className={`${styles.paragraph} ${isCentered ? "text-center" : ""} ${margin} ${width}`}
    >
      {children}
    </p>
  );
};
