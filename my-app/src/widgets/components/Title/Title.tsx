import { FC } from "react";
import styles from "./Title.module.scss";
import { Button, Text } from "@/shared";

export const Title: FC = (): JSX.Element => {
  return (
    <section className={styles.title}>
      <Text type="p" center>
        Многофункциональный бот, который имеет большое количество функций
      </Text>
      <Text type="title" color="#fff" up mt="-20px">
        byster
      </Text>
      <Button type="primary" mt="20px">
        ПОПРОБОВАТЬ
      </Button>
    </section>
  );
};
