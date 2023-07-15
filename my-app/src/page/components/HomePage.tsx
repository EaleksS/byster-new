import { Button } from "@/shared";
import { Title } from "@/widgets";
import Image from "next/image";
import { FC } from "react";

export const HomePage: FC = (): JSX.Element => {
  return (
    <main>
      <div className="bg">
        <Image src={"/giphy.gif"} alt="bg" width={1920} height={822} />

        <div className="blur"></div>
      </div>
      {/* <Button type="primary">ПОПРОБОВАТЬ</Button> */}
      <Title />
    </main>
  );
};
