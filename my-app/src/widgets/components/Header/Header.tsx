"use client";

import { FC, useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Image from "next/image";
import { CgMenu } from "react-icons/cg";
import { BurgerMenu } from "@/entities";

export const Header: FC = (): JSX.Element => {
  const [isActive, setIsActive] = useState<boolean>(false);

  useEffect(() => {
    if (isActive) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }
  }, [isActive]);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <a href="/">
            <Image src="/logo.svg" alt="logo" width={33} height={38} />
          </a>
        </div>
        <nav className={styles.nav}>
          <ul>
            <li>
              <a href="#" style={{ color: "#fff" }}>
                <span>01_</span>ГЛАВНАЯ
              </a>
            </li>
            <li>
              <a href="#">
                <span>02_</span>РОТАЦИИ
              </a>
            </li>
            <li>
              <a href="#">
                <span>03_</span>НАШИ_ЧИТЫ
              </a>
            </li>
            <li>
              <a href="#">
                <span>04_</span>О_НАС
              </a>
            </li>
            <li>
              <a href="#">
                <span>05_</span>ОТЗЫВЫ
              </a>
            </li>
          </ul>
        </nav>
        <CgMenu
          size={35}
          className={styles.burger}
          onClick={() => setIsActive((prev) => !prev)}
        />
      </header>
      <BurgerMenu isActive={isActive} setIsActive={setIsActive} />
    </>
  );
};
