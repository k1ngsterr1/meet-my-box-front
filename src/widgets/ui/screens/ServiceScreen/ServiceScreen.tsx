import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import styles from "./styles.module.scss";
import Button from "@shared/ui/Button/ui/button";
import { ServiceGroup } from "@shared/ui/Card/ui/service-card";
export const ServiceScreen = () => {
  return (
    <div className={styles.service}>
      <h2 className={styles.service__heading}>Услуги</h2>
      <Paragraph margin="mt-4" width="w-3/4" isCentered={true}>
        Мы предлагаем комплексные логистические услуги, оптимизируя ваши
        процессы и обеспечивая своевременную доставку. Доверяйте нам организацию
        всех этапов транспортировки.
      </Paragraph>
      <ServiceGroup />
      <Button text="Оформить заявку" buttonType="filled" margin="mt-8" />
    </div>
  );
};
