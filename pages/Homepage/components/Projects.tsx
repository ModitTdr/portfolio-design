"use client";

import { useRef } from "react";
import Badge from "@/components/atoms/Badge";
import Button from "@/components/atoms/Button";
import Typography from "@/components/atoms/Typography";
import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const Projects = () => {
  const container = useRef<HTMLDivElement>(null);

  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);
  const sidebarRefs = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      gsap.set(sidebarRefs.current, {
        opacity: 0.3,
      });

      gsap.set(sidebarRefs.current[0], {
        opacity: 1,
      });

      projectRefs.current.forEach((project, index) => {
        if (!project) return;

        ScrollTrigger.create({
          trigger: project,
          start: "top center",
          end: "bottom center",

          onEnter: () => {
            gsap.to(sidebarRefs.current, {
              opacity: 0.3,
              duration: 0.25,
            });

            gsap.to(sidebarRefs.current[index], {
              opacity: 1,
              duration: 0.25,
            });
          },

          onEnterBack: () => {
            gsap.to(sidebarRefs.current, {
              opacity: 0.3,
              duration: 0.25,
            });

            gsap.to(sidebarRefs.current[index], {
              opacity: 1,
              duration: 0.25,
            });
          },
        });
      });
    },
    { scope: container },
  );

  return (
    <section ref={container} className="min-h-screen px-8 pt-8 space-y-8">
      <Typography
        tag="h2"
        fontType="title1"
        fontWeight="bold"
        className="uppercase"
      >
        Projects
      </Typography>

      <div className="flex relative">
        {/* Left Sidebar */}
        <div className="space-y-4 py-6 pr-4 sticky left-0 top-0 self-start w-[40vw] h-fit">
          {projects.map((project, index) => (
            <div
              key={index}
              ref={(el) => {
                sidebarRefs.current[index] = el;
              }}
              className="pl-4 text-sm font-medium text-foreground"
            >
              {project.title}
            </div>
          ))}
        </div>

        {/* Projects */}
        <div className="border-l border-foreground/10 space-y-32">
          {projects.map((project, index) => (
            <div
              key={project.title}
              ref={(el) => {
                projectRefs.current[index] = el;
              }}
            >
              <div className="p-6 grid grid-cols-1 lg:grid-cols-[1.7fr_2fr_1.4fr_2fr] gap-4">
                <div className="space-y-4 lg:space-y-6">
                  <Typography tag="h3" fontType="title3">
                    {project.title}
                  </Typography>

                  {project.link && (
                    <Link href={project.link} target="_blank">
                      <Button>View Project</Button>
                    </Link>
                  )}
                </div>

                <div className="space-y-2 lg:space-y-4">
                  <Typography tag="h4">About</Typography>

                  <Typography fontType="p2" fontWeight="semibold">
                    {project.description}
                  </Typography>
                </div>

                <div className="space-y-2 lg:space-y-4 max-w-sm">
                  <Typography tag="h4">Stack</Typography>

                  <div className="flex flex-wrap gap-2">
                    {project.tools.map((tool, i) => (
                      <Badge key={i}>
                        <Typography fontType="p2" fontWeight="light">
                          {tool}
                        </Typography>
                      </Badge>
                    ))}
                  </div>
                </div>

                <div className="space-y-2 lg:space-y-4">
                  <Typography tag="h4">Problem Solved</Typography>

                  <Typography fontType="p2" fontWeight="semibold">
                    {project.problemSolved}
                  </Typography>
                </div>
              </div>

              <div className="grid grid-cols-2">
                {project.images?.map((img, i) => (
                  <div
                    key={i}
                    className={`
                      relative aspect-square overflow-hidden bg-muted
                      ${i >= 2 ? "" : "border-b border-foreground/10"}
                      ${i % 2 === 0 ? "border-r border-foreground/10" : ""}
                    `}
                  >
                    <Image
                      src={img}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
