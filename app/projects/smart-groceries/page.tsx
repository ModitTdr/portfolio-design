"use client";
import { useRef, useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Check, ChevronLeft, ChevronRight, X } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

import Typography from "@/components/atoms/Typography";
import LenisScroll from "@/components/LenisScroll";
import Navbar from "@/components/Navbar";

const wireframes = [
  {
    title: "Register / Sign Up",
    src: "/projects/smart-groceries/(Wireframe)Register.png",
    elements: [
      "Name input field",
      "Email verification",
      "Password validation",
      "Sign up action",
    ],
    desc: "Initial onboarding and account creation screen designed for quick access.",
  },
  {
    title: "Password Setup",
    src: "/projects/smart-groceries/(Wireframe)Password.png",
    elements: [
      "Password confirmation",
      "Strength requirements",
      "Security validation",
    ],
    desc: "A secure verification step ensuring account credentials meet security standards.",
  },
  {
    title: "Email Confirmation",
    src: "/projects/smart-groceries/(Wireframe)Email Confirmation.png",
    elements: [
      "Verification code boxes",
      "Resend link helper",
      "Onboarding transition",
    ],
    desc: "Verification check validating the user's email address before accessing the app.",
  },
  {
    title: "Dashboard",
    src: "/projects/smart-groceries/(Wireframe)Dashboard.png",
    elements: [
      "Header Banner status",
      "Circle Budget progress bar",
      "Quick stats blocks",
      "Active shopping link",
    ],
    desc: "The primary workspace showing overall monthly status and primary actions at a glance.",
  },
  {
    title: "Grocery List Planner",
    src: "/projects/smart-groceries/(Wireframe)Dashboard-CreateList.png",
    elements: [
      "Checklist columns",
      "Estimated cost calculation",
      "Live budget subtraction",
      "Log items button",
    ],
    desc: "Planning mode enabling users to build lists, estimate total costs, and see the budget impact before shopping.",
  },
  {
    title: "Purchase History",
    src: "/projects/smart-groceries/(Wireframe)Dashboard-History.png",
    elements: [
      "Historical logs grid",
      "Previous trip receipts",
      "Calendar date filtering",
      "Item rebuild shortcuts",
    ],
    desc: "Audit area tracking all previous spending lists to analyze shopping trends and replicate past carts.",
  },
  {
    title: "Profile & Budget Settings",
    src: "/projects/smart-groceries/(Wireframe)Dashboard-Profile.png",
    elements: [
      "Budget threshold slider",
      "Alert toggle switches",
      "Currency preferences",
      "Session controls",
    ],
    desc: "Global preferences to configure spending limits, warning indicators, and account configurations.",
  },
];
const finalUI = [
  {
    title: "Landing Page",
    src: "/projects/smart-groceries/ui/1.png",
  },
  {
    title: "Landing Page",
    src: "/projects/smart-groceries/ui/2.png",
  },
  {
    title: "Landing Page",
    src: "/projects/smart-groceries/ui/3.png",
  },
  {
    title: "Create Account",
    src: "/projects/smart-groceries/ui/4.png",
  },
  {
    title: "OTP Verification",
    src: "/projects/smart-groceries/ui/5.png",
  },
  {
    title: "Password Setup",
    src: "/projects/smart-groceries/ui/6.png",
  },
  {
    title: "Budget Setup",
    src: "/projects/smart-groceries/ui/7.png",
  },
  {
    title: "Dashboard Home",
    src: "/projects/smart-groceries/ui/8.png",
  },
  {
    title: "Grocery Listings",
    src: "/projects/smart-groceries/ui/9.png",
  },
  {
    title: "Shopping History",
    src: "/projects/smart-groceries/ui/10.png",
  },
  {
    title: "Profile Settings - Profile",
    src: "/projects/smart-groceries/ui/11.png",
  },
  {
    title: "Profile Setting - Password",
    src: "/projects/smart-groceries/ui/12.png",
  },
  {
    title: "Profile Settings - Notifications",
    src: "/projects/smart-groceries/ui/13.png",
  },
];

export default function SmartGroceriesCaseStudy() {
  const heroTitleRef = useRef<HTMLHeadingElement>(null);
  const heroMetaRef = useRef<HTMLDivElement>(null);
  const appWindowRef = useRef<HTMLDivElement>(null);

  const [activeIdx, setActiveIdx] = useState(0);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);
  const [activeFinalIdx, setActiveFinalIdx] = useState(0);
  const [isFinalLightboxOpen, setIsFinalLightboxOpen] = useState(false);

  useEffect(() => {
    if (!isLightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        setActiveIdx((prev) => (prev === 0 ? wireframes.length - 1 : prev - 1));
      }

      if (e.key === "ArrowRight") {
        setActiveIdx((prev) => (prev === wireframes.length - 1 ? 0 : prev + 1));
      }

      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isLightboxOpen]);

  useGSAP(() => {
    const tl = gsap.timeline();
    tl.from(heroTitleRef.current, {
      y: 80,
      opacity: 0,
      duration: 0.8,
      ease: "power3.out",
    })
      .from(
        heroMetaRef.current,
        {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4",
      )
      .from(
        appWindowRef.current,
        {
          scale: 0.95,
          opacity: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.3",
      );
  });

  return (
    <LenisScroll>
      <Navbar />

      <main className="min-h-screen bg-background text-foreground font-sans selection:bg-[#47C44C]/30 select-text overflow-hidden">
        {/* ==================== HERO ==================== */}
        <header className="relative w-full min-h-screen pt-48 pb-20 px-6 sm:px-12 flex flex-col justify-between items-center overflow-hidden">
          <div className="w-full max-w-7xl mx-auto flex-1 flex flex-col justify-center items-center text-center z-10 px-4">
            <Typography
              tag="h1"
              fontType="title1"
              fontWeight="bold"
              ref={heroTitleRef}
              className="uppercase tracking-tight text-white"
            >
              Smart<span className="text-[#47C44C]">Groceries</span>
            </Typography>

            <Typography
              tag="p"
              fontType="p1"
              className="text-xl sm:text-2xl text-neutral-400 tracking-wider mt-4 max-w-2xl font-light"
            >
              Plan smarter. Shop intentionally.
            </Typography>

            <Typography
              tag="p"
              fontType="p1"
              className="text-neutral-400 mt-6 max-w-2xl mx-auto"
            >
              A grocery planning and budgeting experience designed to help
              people organize their shopping, understand their spending, and
              make more intentional purchasing decisions.
            </Typography>

            {/* Project Metadata */}
            <div
              ref={heroMetaRef}
              className="grid grid-cols-2 md:grid-cols-3 gap-8 max-w-4xl w-full border-t border-b border-foreground/10 py-8 mt-12 text-center"
            >
              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block">
                  Role
                </span>

                <Typography
                  tag="span"
                  fontType="p2"
                  fontWeight="semibold"
                  className="text-sm text-white"
                >
                  Solo UI/UX Designer
                </Typography>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block">
                  Tools
                </span>

                <Typography
                  tag="span"
                  fontType="p2"
                  fontWeight="semibold"
                  className="text-sm text-white font-mono"
                >
                  Figma · FigJam
                </Typography>
              </div>

              <div className="space-y-1">
                <span className="text-[10px] uppercase font-mono tracking-wider text-neutral-500 block">
                  Platform
                </span>

                <Typography
                  tag="span"
                  fontType="p2"
                  fontWeight="semibold"
                  className="text-sm text-white"
                >
                  Web Application
                </Typography>
              </div>
            </div>
          </div>

          <div
            ref={appWindowRef}
            className="w-full max-w-6xl mx-auto mt-16 z-10 hover:scale-[1.01] transition-transform duration-500 ease-out"
          >
            <div className="relative aspect-video w-full overflow-hidden border border-foreground/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)]">
              <Image
                src="/projects/smart-groceries/hero.webp"
                alt="SmartGroceries Premium Interface mockup"
                fill
                priority
                className="object-cover"
              />
            </div>
          </div>
        </header>

        {/* ==================== 01 — OVERVIEW ==================== */}
        <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-foreground/5">
          <div className="flex flex-col gap-6 items-start">
            <Typography
              tag="h2"
              fontType="title2"
              fontWeight="bold"
              className="leading-tight uppercase text-white"
            >
              Overview
            </Typography>

            <div className="space-y-4">
              <Typography
                tag="h3"
                fontType="title4"
                fontWeight="bold"
                className="leading-tight text-white"
              >
                Making grocery spending easier to understand
              </Typography>

              <div className="space-y-4 max-w-3xl">
                <Typography tag="p" fontType="p1" className="text-neutral-400">
                  Grocery shopping involves more than simply deciding what to
                  buy. People need to plan their purchases, estimate costs, stay
                  within a budget, and understand where their money goes over
                  time. When these activities happen separately, it becomes
                  difficult to maintain a clear picture of spending.
                </Typography>

                <Typography tag="p" fontType="p1" className="text-neutral-400">
                  SmartGroceries brings budgeting, grocery planning, shopping,
                  and purchase history into one experience.
                </Typography>

                <Typography tag="p" fontType="p1" className="text-neutral-400">
                  The project was created as a self directed UI/UX practice
                  project to explore an end to end product design process from
                  problem definition and user understanding to information
                  architecture, interface design, and design systems.
                </Typography>
              </div>
            </div>
          </div>

          <div className="mt-20 py-16 border-t border-b border-foreground/5 text-center flex flex-col justify-center items-center px-4">
            <Typography
              tag="h3"
              fontType="title3"
              fontWeight="light"
              className="text-white leading-snug max-w-5xl"
            >
              “People don&apos;t necessarily need to plan more. They need to{" "}
              <span className="text-[#47C44C] font-semibold underline decoration-wavy decoration-[#47C44C]/30 underline-offset-8">
                see their spending
              </span>{" "}
              more clearly.”
            </Typography>
          </div>
        </section>

        {/* ==================== 02 — THE PROBLEM ==================== */}
        <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
          <div className="flex flex-col gap-6 items-start">
            <Typography
              tag="h2"
              fontType="title2"
              fontWeight="bold"
              className="leading-tight uppercase text-white"
            >
              The Problem
            </Typography>

            <div className="space-y-4">
              <Typography
                tag="h3"
                fontType="title4"
                fontWeight="bold"
                className="leading-tight text-white"
              >
                Grocery shopping is more than making a list.
              </Typography>

              <Typography tag="p" fontType="p1">
                A shopping list can tell you what to buy, but it doesn&apos;t
                necessarily help you understand:
              </Typography>

              <ul className="space-y-2 pl-2">
                {[
                  "How much you can afford to spend",
                  "How much you've already spent",
                  "Whether you're staying within your budget",
                  "What you purchased previously",
                  "Where your grocery money goes over time",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-sm">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#47C44C]" />
                    <Typography tag="p" fontType="p2">
                      {item}
                    </Typography>
                  </li>
                ))}
              </ul>

              <Typography tag="p" fontType="p2">
                This can make everyday shopping harder to manage, especially for
                people working with a limited budget or those who simply want
                better visibility into their spending.
              </Typography>
            </div>
          </div>

          <div className="mt-20 py-16 border-t border-b border-foreground/5 text-center flex flex-col justify-center items-center px-4 space-y-4">
            <Typography
              tag="h3"
              fontType="title3"
              fontWeight="bold"
              className="leading-tight text-white"
            >
              The Design Challenge
            </Typography>

            <Typography
              tag="p"
              fontType="p1"
              className="leading-tight text-neutral-400"
            >
              How might we make grocery planning and spending easier to
              understand and manage in one place?
            </Typography>
          </div>
        </section>

        {/* ==================== 03 — UNDERSTANDING THE USER ==================== */}
        <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto">
          <div className="space-y-6">
            <Typography
              tag="h2"
              fontType="title2"
              fontWeight="bold"
              className="leading-tight text-white"
            >
              Understanding the user
            </Typography>

            <div className="space-y-4">
              <Typography
                tag="h3"
                fontType="title4"
                fontWeight="bold"
                className="text-white"
              >
                Looking beyond the shopping list
              </Typography>

              <Typography tag="p" fontType="p1" className="text-neutral-400">
                To explore the problem space, I created three hypothetical user
                personas representing different grocery-shopping behaviors and
                constraints.
              </Typography>
            </div>
          </div>

          {/* User Persona Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
            {[
              {
                id: "01",
                name: "The Impulse Shopper",
                profile: "25 · Middle income · Weekly shopping",
                frustration:
                  "Impulse purchases make it difficult to stay within budget",
                desc: "Attracted by discounts or new packaging, they often purchase non-essential groceries, finding it hard to monitor items added mid-trip.",
              },
              {
                id: "02",
                name: "The Budget Guardian",
                profile: "22 · Low-middle income · Weekly shopping",
                frustration:
                  "Food prices fluctuate and make budgeting difficult",
                desc: "Calculates every item to stay exactly on target. Price hikes create constant anxiety without instant remaining allowance updates.",
              },
              {
                id: "03",
                name: "The Efficiency Seeker",
                profile: "35 · Higher income · Biweekly shopping",
                frustration:
                  "Wants a quick spending overview without repetitive planning",
                desc: "Seeks to review past purchases easily to replicate lists, saving time on planning and shopping trips while ensuring budget visibility.",
              },
            ].map((user, idx) => (
              <div
                key={idx}
                className="bg-neutral-900/30 border border-neutral-800 rounded-xl p-6 space-y-4 hover:border-neutral-700 transition-all flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <Typography
                    tag="p"
                    fontType="p2"
                    className="text-neutral-500"
                  >
                    User - {user.id}
                  </Typography>

                  <Typography
                    tag="h4"
                    fontType="p1"
                    fontWeight="bold"
                    className="text-white"
                  >
                    {user.name}
                  </Typography>
                  <Typography
                    tag="p"
                    fontType="p2"
                    className="text-neutral-500"
                  >
                    {user.profile}
                  </Typography>
                </div>

                <div className="pt-4 border-t border-neutral-850/60 space-y-2">
                  <span className="text-[10px] font-mono uppercase text-neutral-500 block">
                    Core Frustration
                  </span>

                  <Typography
                    tag="p"
                    fontType="p2"
                    fontWeight="semibold"
                    className="text-neutral-300"
                  >
                    {user.frustration}
                  </Typography>

                  <Typography
                    tag="p"
                    fontType="p2"
                    className="text-neutral-500 pt-1"
                  >
                    {user.desc}
                  </Typography>
                </div>
              </div>
            ))}
          </div>

          {/* Key Insight */}
          <div className="mt-12 bg-neutral-900/20 border border-neutral-800 rounded-2xl p-8 md:p-12 space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_2fr] gap-8">
              <Typography
                tag="h4"
                fontType="title3"
                fontWeight="bold"
                className="text-white uppercase"
              >
                Key <br />
                Insight
              </Typography>

              <div className="space-y-4">
                <Typography
                  tag="p"
                  fontType="p1"
                  fontWeight="semibold"
                  className="text-neutral-300"
                >
                  Although the personas have different motivations, they share a
                  common problem:
                </Typography>

                <Typography
                  tag="p"
                  fontType="p1"
                  fontWeight="bold"
                  className="text-[#47C44C]"
                >
                  They don&apos;t necessarily need to plan more. They need to
                  see their spending more clearly.
                </Typography>

                <Typography tag="p" fontType="p2" className="text-neutral-500">
                  This shifted the design direction from simply building a
                  better grocery list toward creating visibility around
                  budgeting and purchase history.
                </Typography>
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 04 — PRODUCT THINKING ==================== */}
        <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-foreground/5">
          <div className="space-y-6">
            <Typography
              tag="h2"
              fontType="title2"
              fontWeight="bold"
              className="leading-tight text-white"
            >
              Product Thinking
            </Typography>

            <div className="space-y-4">
              <Typography
                tag="h3"
                fontType="title4"
                fontWeight="bold"
                className="leading-tight text-white"
              >
                From planning to purchase to reflection
              </Typography>

              <Typography tag="p" fontType="p1" className="text-neutral-400">
                Based on the problem space, I focused the core experience around
                a simple loop that connects budgeting, preparation, shopping,
                and analysis seamlessly.
              </Typography>
            </div>
          </div>

          {/* Core Loop */}
          <div className="bg-neutral-950 p-6 md:p-10 mb-12 shadow-inner mt-12 space-y-6">
            <Typography
              tag="h3"
              fontType="title4"
              fontWeight="bold"
              className="leading-tight text-center text-white"
            >
              Core Loop Process
            </Typography>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 relative">
              {[
                { step: "01", name: "Set Budget", desc: "Define limit" },
                { step: "02", name: "Create List", desc: "Plan items & costs" },
                { step: "03", name: "Shop", desc: "Track cart live" },
                { step: "04", name: "Complete", desc: "Purchase total" },
                { step: "05", name: "Review", desc: "Evaluate trends" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="bg-neutral-900 border border-neutral-800 p-4 text-center hover:border-[#47C44C]/30 transition-all group cursor-default space-y-1"
                >
                  <Typography
                    tag="p"
                    fontType="p2"
                    className="text-neutral-600"
                  >
                    {item.step}
                  </Typography>

                  <Typography
                    tag="p"
                    fontType="p2"
                    fontWeight="bold"
                    className="text-white"
                  >
                    {item.name}
                  </Typography>

                  <Typography
                    tag="p"
                    fontType="p2"
                    className="text-neutral-500"
                  >
                    {item.desc}
                  </Typography>
                </div>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* MVP Focus */}
            <div className="bg-neutral-900/35 border border-neutral-800 rounded-2xl p-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#47C44C]" />

                <Typography
                  tag="h4"
                  fontType="p1"
                  fontWeight="bold"
                  className="text-white uppercase tracking-wider font-mono"
                >
                  MVP focus
                </Typography>
              </div>

              <div className="space-y-4">
                {[
                  {
                    title: "Budget",
                    items: [
                      "Set monthly grocery budget",
                      "See remaining budget",
                      "Track spending",
                    ],
                  },
                  {
                    title: "Planning",
                    items: [
                      "Create grocery lists",
                      "Add items and quantities",
                      "Estimate shopping costs",
                    ],
                  },
                  {
                    title: "Shopping",
                    items: [
                      "Use the list while shopping",
                      "Mark shopping session completed",
                    ],
                  },
                  {
                    title: "Review",
                    items: [
                      "View previous purchases",
                      "Understand previous spending",
                      "Revisit previous lists",
                    ],
                  },
                ].map((sec, idx) => (
                  <div key={idx} className="space-y-1.5">
                    <span className="text-xs font-semibold text-neutral-300 font-mono uppercase">
                      {sec.title}
                    </span>

                    <ul className="grid grid-cols-1 gap-1 pl-2">
                      {sec.items.map((it, i) => (
                        <li
                          key={i}
                          className="text-xs text-neutral-500 flex items-center gap-2"
                        >
                          <Check className="w-3 h-3 text-[#47C44C] shrink-0" />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>

            {/* Future Possibilities */}
            <div className="bg-neutral-900/10 border border-dashed border-neutral-800 rounded-2xl p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />

                  <Typography
                    tag="h4"
                    fontType="p1"
                    fontWeight="bold"
                    className="text-neutral-400 uppercase tracking-wider font-mono"
                  >
                    Future Possibilities
                  </Typography>
                </div>

                <Typography tag="p" fontType="p2" className="text-neutral-500">
                  Features such as receipt scanning, spending charts, price
                  trends, and smart recommendations were intentionally kept
                  outside the core experience.
                </Typography>

                <div className="space-y-4">
                  {[
                    "Receipt Scanning & Automatic Logging",
                    "Predictive Grocery Price Analytics",
                    "Smart Recommendations Based on Usage",
                    "Spending Trends Visualizations",
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-3 text-neutral-400 text-xs font-mono"
                    >
                      <span className="w-1.5 h-1.5 bg-neutral-700 rounded-full" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-neutral-950/40 border border-neutral-850 rounded-xl text-neutral-500 text-[11px] leading-relaxed">
                The goal was to first establish a useful budgeting and history
                loop before introducing features that depend on larger amounts
                of historical data.
              </div>
            </div>
          </div>
        </section>

        {/* ==================== 05 — USER FLOW ==================== */}
        <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-foreground/5">
          <div className="space-y-6">
            <Typography
              tag="h2"
              fontType="title2"
              fontWeight="bold"
              className="leading-tight text-white"
            >
              User Flow
            </Typography>

            <div className="space-y-4">
              <Typography
                tag="h3"
                fontType="title4"
                fontWeight="bold"
                className="leading-tight text-white"
              >
                A simple path through the product
              </Typography>

              <Typography tag="p" fontType="p1" className="text-neutral-400">
                The primary user journey moves from initial setup into active
                shopping and finally into reflection. Profile and account
                management are treated as global destinations rather than steps
                in the shopping journey.
              </Typography>
            </div>
          </div>

          <div className="w-full mx-auto mt-16 z-10 hover:scale-[1.01] transition-transform duration-500 ease-out">
            <div className="relative w-full overflow-hidden">
              <Image
                src="/projects/smart-groceries/userflow.png"
                alt="SmartGroceries user flow"
                width={1920}
                height={1080}
                priority
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </section>

        {/* ==================== 06 — WIREFRAMES ==================== */}
        <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-foreground/5">
          <div className="space-y-6">
            <Typography
              tag="h2"
              fontType="title2"
              fontWeight="bold"
              className="leading-tight text-white"
            >
              Wireframes
            </Typography>

            <div className="space-y-4">
              <Typography
                tag="h3"
                fontType="title4"
                fontWeight="bold"
                className="leading-tight text-white"
              >
                Starting with structure
              </Typography>

              <Typography tag="p" fontType="p1" className="text-neutral-400">
                Before developing the visual language, I mapped the core screens
                and information hierarchy through wireframes. At this stage, the
                focus was structure and task flow rather than visual polish.
              </Typography>
            </div>
          </div>

          {/* Wireframe Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {wireframes.map((wf, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setActiveIdx(idx);
                  setIsLightboxOpen(true);
                }}
                className="group text-left cursor-pointer focus:outline-none"
              >
                {/* Image */}
                <div className="relative w-full aspect-[4/3] bg-neutral-950 border border-neutral-900 overflow-hidden rounded-none">
                  <Image
                    src={wf.src}
                    alt={wf.title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>

                {/* Title */}
                <div className="pt-4">
                  <span className="text-sm font-mono text-neutral-300 group-hover:text-white transition-colors">
                    {wf.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Image Preview Modal */}
          {isLightboxOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
              onClick={() => setIsLightboxOpen(false)}
            >
              {/* Close */}
              <button
                type="button"
                onClick={() => setIsLightboxOpen(false)}
                className="absolute top-5 right-5 z-10 w-10 h-10 border border-neutral-800 hover:border-neutral-600 bg-black/50 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Previous */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx((prev) =>
                    prev === 0 ? wireframes.length - 1 : prev - 1,
                  );
                }}
                className="absolute left-3 sm:left-6 z-10 w-10 h-10 sm:w-12 sm:h-12 border border-neutral-800 hover:border-neutral-600 bg-black/50 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Image */}
              <div
                className="relative w-full h-full max-w-6xl max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={wireframes[activeIdx].src}
                  alt={wireframes[activeIdx].title}
                  fill
                  priority
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              {/* Next */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIdx((prev) =>
                    prev === wireframes.length - 1 ? 0 : prev + 1,
                  );
                }}
                className="absolute right-3 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 border border-neutral-800 hover:border-neutral-600 bg-black/50 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              {/* Title + Counter */}
              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
                <p className="text-sm font-mono text-white">
                  {wireframes[activeIdx].title}
                </p>

                <p className="text-[10px] font-mono text-neutral-500 mt-1">
                  {activeIdx + 1} / {wireframes.length}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* ==================== FINAL DESIGN ==================== */}
        <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-foreground/5">
          <div className="space-y-6 mb-12">
            <Typography
              tag="h2"
              fontType="title2"
              fontWeight="bold"
              className="leading-tight uppercase text-white"
            >
              Final UI
            </Typography>

            <Typography tag="p" fontType="p1" className="text-neutral-400">
              From onboarding to the daily dashboard experience — the finished
              interface across desktop and mobile.
            </Typography>
          </div>

          {/* Masonry Gallery */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 [&>*]:mb-6 [&>*]:break-inside-avoid">
            {finalUI.map((screen, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => {
                  setActiveFinalIdx(idx);
                  setIsFinalLightboxOpen(true);
                }}
                className="group block w-full text-left cursor-pointer focus:outline-none"
              >
                <div className="relative w-full bg-neutral-950 border border-neutral-900 overflow-hidden">
                  <Image
                    src={screen.src}
                    alt={screen.title}
                    width={1200}
                    height={900}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="w-full h-auto object-contain transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>

                <div className="pt-3">
                  <span className="text-xs font-mono text-neutral-400 group-hover:text-white transition-colors">
                    {screen.title}
                  </span>
                </div>
              </button>
            ))}
          </div>

          {/* Lightbox */}
          {isFinalLightboxOpen && (
            <div
              className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-8"
              onClick={() => setIsFinalLightboxOpen(false)}
            >
              <button
                type="button"
                onClick={() => setIsFinalLightboxOpen(false)}
                className="absolute top-5 right-5 z-10 w-10 h-10 border border-neutral-800 hover:border-neutral-600 bg-black/50 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Close preview"
              >
                <X className="w-5 h-5" />
              </button>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveFinalIdx((prev) =>
                    prev === 0 ? finalUI.length - 1 : prev - 1,
                  );
                }}
                className="absolute left-3 sm:left-6 z-10 w-10 h-10 sm:w-12 sm:h-12 border border-neutral-800 hover:border-neutral-600 bg-black/50 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Previous image"
              >
                <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div
                className="relative w-full h-full max-w-5xl max-h-[85vh]"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={finalUI[activeFinalIdx].src}
                  alt={finalUI[activeFinalIdx].title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                />
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveFinalIdx((prev) =>
                    prev === finalUI.length - 1 ? 0 : prev + 1,
                  );
                }}
                className="absolute right-3 sm:right-6 z-10 w-10 h-10 sm:w-12 sm:h-12 border border-neutral-800 hover:border-neutral-600 bg-black/50 flex items-center justify-center text-neutral-400 hover:text-white transition-colors"
                aria-label="Next image"
              >
                <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
              </button>

              <div className="absolute bottom-5 left-1/2 -translate-x-1/2 text-center">
                <p className="text-sm font-mono text-white">
                  {finalUI[activeFinalIdx].title}
                </p>
                <p className="text-[10px] font-mono text-neutral-500 mt-1">
                  {activeFinalIdx + 1} / {finalUI.length}
                </p>
              </div>
            </div>
          )}
        </section>

        {/* ==================== REFLECTION & NEXT STEPS ==================== */}
        <section className="py-24 px-6 sm:px-12 max-w-7xl mx-auto border-t border-foreground/5">
          <div className="space-y-6 mb-16">
            <Typography
              tag="h2"
              fontType="title2"
              fontWeight="bold"
              className="leading-tight uppercase text-white"
            >
              Reflection & Next Steps
            </Typography>

            <Typography
              tag="p"
              fontType="p1"
              className="text-neutral-400 max-w-2xl"
            >
              This project pushed me to think about the product as a connected
              system rather than a set of screens —{" "}
              <span className="text-[#47C44C] font-semibold">
                visibility over more planning
              </span>{" "}
              became the lens for every decision that followed.
            </Typography>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Lessons Learned */}
            <div className="bg-neutral-900/30 border border-neutral-800 p-8 space-y-6">
              <div className="flex items-center gap-3">
                <span className="w-2.5 h-2.5 rounded-full bg-[#47C44C]" />
                <Typography
                  tag="h4"
                  fontType="p1"
                  fontWeight="bold"
                  className="text-white uppercase tracking-wider font-mono"
                >
                  Lessons Learned
                </Typography>
              </div>

              <div className="space-y-5">
                {[
                  {
                    id: "01",
                    text: "A problem statement quietly shapes every feature decision that follows it.",
                  },
                  {
                    id: "02",
                    text: "It's easy to default to a feature-heavy solution — narrowing to visibility kept the MVP honest.",
                  },
                  {
                    id: "03",
                    text: "Designing the system behind the screen matters as much as the screen itself.",
                  },
                ].map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <span className="text-xs font-mono text-neutral-600 pt-0.5 shrink-0">
                      {item.id}
                    </span>
                    <Typography
                      tag="p"
                      fontType="p2"
                      className="text-neutral-400"
                    >
                      {item.text}
                    </Typography>
                  </div>
                ))}
              </div>
            </div>

            {/* What I Would Test Next */}
            <div className="bg-neutral-900/10 border border-dashed border-neutral-800 p-8 space-y-6 flex flex-col justify-between">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <span className="w-2.5 h-2.5 rounded-full bg-neutral-600" />
                  <Typography
                    tag="h4"
                    fontType="p1"
                    fontWeight="bold"
                    className="text-neutral-400 uppercase tracking-wider font-mono"
                  >
                    What I&apos;d Test Next
                  </Typography>
                </div>

                <div className="space-y-5">
                  {[
                    "Does the dashboard communicate budget status fast enough?",
                    "Is the shopping flow efficient mid-trip?",
                    "Does history reduce spending analysis, or add to it?",
                    "Is the visual hierarchy clear and trustworthy?",
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4 text-xs font-mono">
                      <span className="text-neutral-700 shrink-0">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-neutral-400">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="p-4 bg-neutral-950/40 border border-neutral-850 text-neutral-500 text-[11px] leading-relaxed">
                Personas and research were hypothetical — the next step is
                validating with real users.
              </div>
            </div>
          </div>
        </section>

        {/* ==================== FINAL SECTION ==================== */}
        <section className="py-28 px-6 sm:px-12 text-center max-w-4xl mx-auto space-y-12 border-t border-foreground/5">
          <Typography
            tag="p"
            fontType="title4"
            fontWeight="light"
            className="text-white leading-relaxed tracking-wide"
          >
            SmartGroceries explores how thoughtful information architecture,
            visual hierarchy, and a consistent design system can turn an
            everyday task into a clearer digital experience.
          </Typography>

          <div className="pt-6">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-400 hover:text-white transition-colors cursor-pointer group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1.5 transition-transform" />
              <span>Back to selected work</span>
            </Link>
          </div>
        </section>
      </main>
    </LenisScroll>
  );
}
