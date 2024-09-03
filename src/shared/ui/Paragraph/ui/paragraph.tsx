import styles from "./styles.module.scss";

interface IParagraph {
  children: React.ReactNode;
  isCentered?: boolean;
  margin?: string;
}

export const Paragraph: React.FC<IParagraph> = ({
  children,
  isCentered,
  margin,
}) => {
  return (
    <p
      className={`${styles.paragraph} ${isCentered ? "text-center" : ""} ${margin}`}
    >
      {children}
    </p>
  );
};
