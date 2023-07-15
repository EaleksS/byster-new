"use client";

import { FC, ReactNode } from "react";
import styles from "./Button.module.scss";
import { Text } from "../Text/Text";

interface Props {
  type?: "default" | "primary" | "new";
  children?: ReactNode;
  onClick?: () => void;
  mt?: string;
  isActive?: boolean | undefined;
  color?: string;
  bgc?: string;
  radius?: string;
}

export const Button: FC<Props> = ({
  type = "default",
  children = "BUTTON",
  mt = "0",
  onClick,
  isActive = undefined,
  color = "#333",
  bgc,
  radius = "0",
}): JSX.Element => {
  switch (type) {
    case "primary":
      return (
        <button
          className={`${styles.btn} ${styles.primary}`}
          style={{
            marginTop: mt,
            color: color,
            backgroundColor: bgc,
            borderRadius: radius,
          }}
          onClick={onClick}
        >
          <div className={styles.content}>
            <h2>{children}</h2>
          </div>
        </button>
      );

    default:
      return (
        <button
          className={`${styles.btn} ${styles.default}`}
          style={{
            marginTop: mt,
            color: color,
            backgroundColor: bgc,
            borderRadius: radius,
          }}
          onClick={onClick}
        >
          <Text type="h3">{children}</Text>
        </button>
      );
  }
};
