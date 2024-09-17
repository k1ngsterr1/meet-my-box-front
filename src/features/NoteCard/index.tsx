import styles from "./styles.module.scss";
import Button from "@shared/ui/Button/ui/button";
import { BorderInput } from "@shared/ui/Input/BorderInput/border-input";
export const NoteCard = ({ onNoteClick, setter }: any) => {
  const handleClick = () => {
    onNoteClick();
  };
  return (
    <div className={styles.card}>
      <h3 className={styles.heading}>Примечание</h3>
      <input
        placeholder="Длина"
        onChange={(e) => {
          setter(e.target.value), console.log(e.target.value);
        }}
        className={styles.input}
      />
      <Button
        text="Далее"
        buttonType="filled"
        onClick={handleClick}
        margin="mt-4"
      />
    </div>
  );
};
