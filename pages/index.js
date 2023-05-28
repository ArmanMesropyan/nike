import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import Image from "next/image";
import PageWrapper from "@/components/PageWrapper";

const Landing = () => {
  const videoRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const videoTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: videoRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    videoTimeline
      .to(videoRef.current, { yPercent: -50, duration: 1, ease: "none" })
      .to(videoRef.current, { opacity: 0, duration: 1, ease: "none" }, "-=0.5");

    const textTimeline = gsap.timeline({
      scrollTrigger: {
        trigger: textRef.current,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });

    textTimeline.to(textRef.current, {
      yPercent: -100,
      duration: 1,
      ease: "none",
    });

    return () => {
      videoTimeline.kill();
      textTimeline.kill();
    };
  }, []);

  return (
    <div className="bg-zinc-950 text-white overflow-x-hidden">
      <h2 className="text-white-[0.8] font-bold leading-[190px] text-6xl text-center">
        Welcome to Nike
      </h2>
      <div className="relative pt-[300px]">
        <video
          ref={videoRef}
          src="/video/landing.webm"
          autoPlay
          loop
          muted
          className="w-full h-auto"
          style={{ position: "fixed", top: "0", left: "0" }}
        ></video>
        {/* <div className="bg-black/[0.4] absolute w-full h-full"></div> */}
      </div>
      <PageWrapper>
        <div className="py-16">
          <div
            className="text-[200px] text-white-[0.8] font-bold text-animation"
            ref={textRef}
          >
            <h2 className="text-4xl md:text-6xl mb-6 text-animation">
              Our Mission
            </h2>
            <span className="block text-white/[0.8] font-bold leading-[190px] text-animation">
              BRING
            </span>
            <span className="block text-white/[0.8] font-bold leading">
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
        <div>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit vel ea possimus in dolorum distinctio quia aspernatur rerum. Fugit sint nobis odio repellat! Doloribus nemo provident maxime iste, quia repellendus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo delectus ut corrupti quia itaque! Asperiores voluptas dolorem in soluta aliquam architecto veniam adipisci delectus minima, iure cumque labore tempore cupiditate amet, expedita quia maxime totam iste nam doloribus esse. Iste voluptatum odio ratione, laborum in suscipit voluptatibus minus non aliquam maxime error delectus culpa rem distinctio. At iure, quidem nulla expedita vitae alias. Eos quos dicta numquam quod, voluptate officiis similique, animi reprehenderit sunt quibusdam sapiente suscipit ab odit repellat! Nam molestiae magni atque, repudiandae vel quam ad quos ullam excepturi officiis voluptas. Illum atque adipisci animi vero quaerat, doloremque unde aspernatur facere reiciendis, hic nobis. Accusantium recusandae deserunt dolor quaerat cumque magnam sint nobis temporibus molestias placeat obcaecati natus accusamus pariatur quia, nisi delectus ducimus tempore repudiandae sit iste quam ullam a alias. Natus dicta ab cum molestiae, minima saepe dolorem necessitatibus delectus? Ratione maiores eius placeat libero, reprehenderit sit facere atque, ipsam aliquam itaque odio, doloribus quae quia voluptatum est temporibus porro aliquid saepe suscipit dolores quaerat reiciendis expedita? Optio id recusandae, quas ut perspiciatis atque tempora impedit animi perferendis doloremque vero voluptatibus suscipit repellat? Facere quam, quia in architecto aliquam debitis mollitia, libero veniam recusandae molestias modi soluta ducimus quaerat consequuntur eaque aperiam. In, recusandae reiciendis eos inventore ea quo quod culpa modi animi minus, facilis maiores libero laborum laudantium possimus expedita! Sint beatae cum laudantium itaque iste error, nisi commodi est repudiandae consectetur. Reprehenderit enim eaque id corrupti, obcaecati aliquam cupiditate vel quibusdam nulla provident voluptate perferendis veritatis totam laudantium deleniti, neque temporibus! Odit quidem fugiat error libero doloribus, ab harum veniam corrupti nam magni quae! Non reiciendis, accusamus quidem dolore dolor repudiandae, expedita suscipit repellat assumenda deserunt eius laudantium dignissimos nobis illum odit quia corporis eos voluptate nostrum in inventore, sequi beatae atque! Assumenda vel, magni rem nihil recusandae beatae. Perspiciatis, optio. Vero commodi quas est, asperiores, fugiat quo inventore consequuntur vitae quaerat exercitationem, beatae dolores laudantium! Facilis eveniet ipsam, atque, illo harum debitis praesentium minus explicabo natus perspiciatis suscipit dolorem sit, dignissimos iste. Distinctio alias aut accusamus, rerum doloribus qui fugiat, placeat assumenda delectus ipsum, dolorem perferendis quisquam natus repudiandae repellendus aspernatur laborum possimus. Pariatur aut quia voluptas amet in, quaerat, corporis voluptates, autem vel molestias ipsum quis rem vitae at dolorem necessitatibus consequuntur nostrum. Voluptatum aperiam ab enim mollitia aut rerum facere reprehenderit provident, dolor molestias. Fugiat doloremque sint dolor consequatur fuga aut!
        </div>
      </PageWrapper>
       
    </div>
  );
};

export default Landing;
