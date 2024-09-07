import Button from "@shared/ui/Button/ui/button";
import {
  ServiceGroup,
  ServiceGroupPC,
} from "@shared/ui/Card/ui/Service/service-card";
import { Paragraph } from "@shared/ui/Paragraph/ui/paragraph";
import { Fade } from "react-awesome-reveal";
import styles from "./styles.module.scss";
export const ServiceScreen = () => {
  return (
    <>
      <div className={styles.service}>
        <Fade>
          <h2 className={styles.service__heading}>Услуги</h2>
        </Fade>
        <Fade className="w-full flex items-center justify-center">
          <Paragraph margin="mt-4" width="w-3/4" isCentered={true}>
            Мы предлагаем комплексные логистические услуги, оптимизируя ваши
            процессы и обеспечивая своевременную доставку. Доверяйте нам
            организацию всех этапов транспортировки.
          </Paragraph>
        </Fade>
        <ServiceGroup />
        <Button text="Оформить заявку" buttonType="filled" margin="mt-8" />
      </div>
      <div className={styles.service_pc}>
        <Fade className="flex items-center justify-center">
          <h2 className={styles.service_pc__heading}>Услуги</h2>
        </Fade>
        <Fade className="w-full flex items-center justify-center">
          <Paragraph margin="mt-4" width="w-[50%]" isCentered={true}>
            Мы предлагаем комплексные логистические услуги, оптимизируя ваши
            процессы и обеспечивая своевременную доставку. Доверяйте нам
            организацию всех этапов транспортировки.
          </Paragraph>
        </Fade>
        <ServiceGroupPC />
        <Button text="Оформить заявку" buttonType="filled" margin="mt-8" />
      </div>
    </>
  );
};
