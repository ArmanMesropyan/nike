import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";
import useTextScroll from "@/hook/useTextScroll/useTextScroll";

const Landing = () => {
  const { scrollPosition } = useTextScroll();
  const [fixedClassName, setFixedClassName] = useState("static");
  const [hiddenClassName, setHiddenClassName] = useState("");

  useEffect(() => {
    if (scrollPosition > 150 && scrollPosition < 1433) {
      setFixedClassName("fixed");
    } else {
      setFixedClassName("static");
      setHiddenClassName("hidden");
    }

    console.log(fixedClassName);
  }, [scrollPosition]);

  return (
    <div className="bg-zinc-950 text-white overflow-x-hidden" style={{ overflow: "scroll" }}>
      <h2 className="text-white-[0.8] font-bold leading-[190px] text-6xl text-center">
        Welcome to Nike
      </h2>

      <div className="relative w-full" >
        <video
          src="/video/landing.webm"
          autoPlay
          loop
          muted
          className={`${fixedClassName} left-0 top-0`}
        ></video>
        <div className="bg-black/[0.4] absolute top-0 left-0 w-full h-full"></div>
      </div>
      <PageWrapper>
        <div
          className={`py-16 ${
            fixedClassName === "fixed" ? "absolute left-10 top-40" : "hidden"
          } ${hiddenClassName}`}
        >
          <div className="text-[200px] text-white-[0.8] font-bold text-animation">
            <h2 className="text-4xl md:text-6xl mb-6 text-animation">
              Our Mission
            </h2>
            <span className="block text-white/[0.8] font-bold leading-[190px] text-animation">
              BRING
            </span>
            <span className="block text-white/[0.8] font-bold leading-[190px] text-animation">
              INSPIRATION
            </span>
            <span className="block text-white/[0.8] font-bold leading-[190px] text-animation">
              AND
            </span>
            <span className="block text-white/[0.8] font-bold leading-[190px] text-animation">
              INNOVATION
            </span>
            <span className="block text-white/[0.8] font-bold leading-[190px] text-animation">
              TO
            </span>
            <span className="block text-white/[0.8] font-bold leading-[190px] text-animation">
              EVERY
            </span>
            <span className="block text-white/[0.8] font-bold leading-[190px] text-animation">
              ATHLETE*
            </span>
            <span className="block text-white/[0.8] font-bold leading-[190px] text-animation">
              IN THE
            </span>
            <span className="block text-white/[0.8] font-bold leading-[190px] text-animation">
              WORLD
            </span>
            <p className="text-xl mt-6 text-animation">
              *If you have a body, you are an athlete
            </p>
          </div>
        </div>
        <div className={`bg-black text-white ${fixedClassName && 'pt-300'}`}>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Est aliquid,
          earum aut a tempora nihil ex voluptate eum ullam illo? Totam amet
          officia saepe voluptatum voluptates. Culpa rem saepe est, quae nam
          temporibus possimus quam vitae iusto unde, quasi aliquam laboriosam
          quos cum ullam aspernatur, accusantium corrupti beatae porro voluptas
          eos expedita sed ut similique? Harum culpa nulla, asperiores eum illum
          molestias deserunt maiores dolor consequatur blanditiis a quam
          aspernatur pariatur voluptates, neque tenetur rerum voluptatibus sit
          suscipit non reprehenderit nesciunt distinctio quae! Sit,
          reprehenderit tempora suscipit provident ducimus esse perferendis
          officiis adipisci dolorem architecto aspernatur explicabo accusantium
          tempore alias velit quae? Deleniti quibusdam in, alias obcaecati
          reprehenderit reiciendis, possimus atque eveniet rem animi ullam
          voluptates veniam assumenda voluptate maxime impedit voluptatibus
          molestiae repellat. Vel aperiam nihil odit placeat maxime, omnis
          quaerat provident corporis adipisci! Provident nemo neque inventore
          suscipit veritatis eum quis quos optio ullam culpa ipsum, magni
          excepturi ab eveniet reiciendis dolorem mollitia dolor quaerat odit
          soluta quisquam enim eaque assumenda possimus. Omnis quo quasi tempora
          tempore perferendis, vel, magni saepe error ullam amet eum neque
          delectus. Quis, totam nostrum? Facere vel veritatis sequi ex quidem
          iure sit asperiores consequatur necessitatibus, animi nihil officiis
          iste ab quas mollitia et itaque nobis provident beatae reprehenderit.
          Optio exercitationem commodi impedit unde harum perferendis
          consequatur culpa nihil veniam labore iure sint pariatur, porro
          tenetur excepturi itaque mollitia velit, laudantium, dolore vel!
          Impedit officiis voluptate cum magnam nobis, aut deserunt commodi,
          assumenda quo velit quidem quaerat quos reprehenderit, mollitia dicta
          debitis explicabo eveniet corrupti esse blanditiis. Dolores,
          asperiores ipsa, adipisci dolorum numquam facere excepturi culpa
          beatae eveniet quisquam aliquid rerum quam delectus, veritatis ullam
          debitis fugit quis. Mollitia minima necessitatibus optio, quod vitae
          doloribus minus consequatur recusandae, earum repellendus explicabo
          animi modi molestias ullam laboriosam veniam cupiditate aut! Soluta
          quos quibusdam doloribus laudantium. Explicabo atque nulla ea non eius
          vitae? Atque doloremque nostrum cupiditate debitis ut. Est quas
          pariatur fugiat ducimus assumenda nulla eum nesciunt eligendi
          temporibus blanditiis eius debitis minima, consectetur qui alias
          eveniet hic possimus et natus odit culpa! Quam reprehenderit nulla
          accusamus qui ipsa quasi ea repellendus voluptatibus necessitatibus
          delectus dolores commodi officiis aliquam distinctio odit quia,
          praesentium atque explicabo sunt rerum sit molestiae vitae facilis
          esse. Quaerat voluptatibus, alias minus ratione accusamus maxime
          necessitatibus voluptas cumque pariatur odio autem a enim repellat
          eligendi magni blanditiis earum harum reprehenderit, tempora
          exercitationem ex assumenda dolorum nostrum. Accusantium magni
          doloremque consequatur.
        </div>
      </PageWrapper>
    </div>
  );
};

export default Landing;
