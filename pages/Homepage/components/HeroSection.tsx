"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import Typography from "@/components/atoms/Typography";

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(titleRef.current, {
      y: 180,
      opacity: 0,
    }).from(
      paraRef.current,
      {
        opacity: 0,
      },
      "-=0.1",
    );
  });
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-1 bg-[radial-gradient(circle,rgba(255,255,255,0)_0%,rgba(0,0,0,0.1)_60%,rgba(0,0,0,0.8)_100%)]" />
      <div className="absolute inset-0 z-1 bg-linear-to-b from-transparent to-background" />
      <video
        autoPlay
        loop
        muted
        className="w-full h-screen absolute top-0 z-0 object-cover"
      >
        <source src="/bg.mp4" type="video/mp4" />
      </video>

      <div className="z-2 text-center space-y-8 mt-20 flex flex-col items-center justify-center px-4 overflow-hidden">
        <div className="overflow-hidden">
          <Typography
            tag="h1"
            fontWeight="bold"
            fontType="title1"
            ref={titleRef}
          >
            Hello I&apos;m <br />
            <span className="text-primary">Modit Tuladhar</span>
          </Typography>
        </div>
        <Typography fontWeight="semibold" ref={paraRef}>
          A UI/UX designer and frontend developer focused on creating
          thoughtful, functional, and visually engaging digital products.
        </Typography>
      </div>
    </section>
  );
};

export default HeroSection;
