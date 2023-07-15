"use client";

import { Dispatch, FC, SetStateAction } from "react";
import styles from "./BurgerMenu.module.scss";
import Image from "next/image";
import { TiSocialYoutube } from "react-icons/ti";
import { FaVk } from "react-icons/fa";
import { IoLogoDiscord } from "react-icons/io5";
import Link from "next/link";
import { MdClose } from "react-icons/md";

interface Props {
  isActive: boolean;
  setIsActive: Dispatch<SetStateAction<boolean>>;
}

export const BurgerMenu: FC<Props> = ({
  isActive,
  setIsActive,
}): JSX.Element => {
  return (
    <div className={`${styles.menu} ${isActive && styles.active}`}>
      <MdClose
        className={styles.close}
        size={40}
        color="#fff"
        onClick={() => setIsActive((prev) => !prev)}
      />
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
      <div className={styles.social}>
        <Link href="youtube.com">
          <TiSocialYoutube size={40} color="#FF0000" />
        </Link>
        <Link href="vk.com">
          <FaVk size={40} color="#4c75a3" />
        </Link>
        <Link href="discord.com">
          <IoLogoDiscord size={32} color="#7289DA" />
        </Link>
      </div>
    </div>
  );
};
