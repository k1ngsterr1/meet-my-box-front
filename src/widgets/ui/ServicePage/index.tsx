import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import styles from "./styles.module.scss";
import { ServiceList } from "@entities/ServiceList";
import bg_face from "@assets/bg_face.svg";
export const ServicePage = () => {
  return (
    <div className={styles.service}>
      <img src={bg_face.src} alt="" className={styles.service__img} />
      <h2 className={styles.service__heading}>Услуги</h2>
      <Paragraph margin="mt-4" width="w-3/4" isCentered={true}>
        Мы предлагаем комплексные логистические услуги, оптимизируя ваши
        процессы и обеспечивая своевременную доставку. Доверяйте нам организацию
        всех этапов транспортировки.
      </Paragraph>
      <ServiceList />
    </div>
  );
};
