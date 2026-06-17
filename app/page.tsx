"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  Timer,
  BadgeCheck,
  TrendingUp,
  MessageSquare,
  Database,
  LayoutGrid,
  ArrowUpCircle,
  Eye,
  BarChart2,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  BrainCircuit,
  Search,
  ShieldAlert,
  LayoutDashboard,
  Ticket,
  Clock,
} from "lucide-react";


interface TeamMember {
  name: string;
  nim: string;
  role: string;
  image: string;
  description: string;
}

interface SolutionItem {
  icon: ReactNode;
  title: string;
  desc: string;
}

interface CapaianItem {
  icon: ReactNode;
  value: string;
  title: string;
  desc: string;
}

interface ArchLayer {
  label: string;
  tags: string[];
  delay: number;
}


const teamMembers: TeamMember[] = [
  {
    name: "Muhammad Rafindran Luthfi",
    nim: "235150200111063",
    role: "Technical Lead & Integrator",
    image: "/team/rifdinar.png",
    description:
      "Mengimplementasikan database, retrieval system, dan integrasi komponen AI.",
  },
  {
    name: "Naufal Prasidha",
    nim: "235150401111026",
    role: "Data & Dashboard Analyst",
    image: "/team/naufal.png",
    description:
      "Mengembangkan logging system, dashboard analitik, dan evaluasi performa chatbot.",
  },
  {
    name: "Muhammad Hadyan",
    nim: "235150407111023",
    role: "Knowledge & Documentation Specialist",
    image: "/team/hidayan.png",
    description:
      "Menyusun knowledge base, kurasi FAQ, serta memastikan kualitas informasi yang digunakan chatbot.",
  },
  {
    name: "Atha Zaydan Shahzada",
    nim: "235150401111023",
    role: "Project Manager & Business Analyst",
    image: "/team/zidan.png",
    description:
      "Mengelola kebutuhan stakeholder, perancangan proses bisnis, workflow n8n, dan strategi implementasi sistem.",
  },
  {
    name: "Muhammad Zaki Anggoro",
    nim: "235150207111004",
    role: "Backend & UI Engineer",
    image: "/team/zaki.png",
    description:
      "Mengembangkan backend service serta integrasi AI model dengan sistem chatbot.",
  },
];

const cardOffsetClass = [
  "lg:mt-0",
  "lg:mt-20",
  "lg:-mt-4",
  "lg:mt-16",
  "lg:mt-0",
];

const latarBelakang: string[] = [
  "Banyak pertanyaan yang sebenarnya sudah memiliki jawaban pada dokumentasi perusahaan.",
  "Pengguna kesulitan menemukan informasi yang relevan melalui pencarian manual.",
  "Tim helpdesk menerima banyak pertanyaan berulang yang menghambat penanganan kasus kompleks.",
  "Belum tersedia mekanisme analitik untuk mengetahui pola masalah yang sering muncul.",
  "Knowledge Base belum berkembang secara adaptif berdasarkan kebutuhan pengguna.",
];

const alurKerja: string[] = [
  "User Mengajukan Pertanyaan",
  "AI Memahami Konteks Pertanyaan",
  "Sistem Mencari Dokumen Relevan",
  "AI Menyusun Jawaban",
  "Confidence Check",
];

const solutions: SolutionItem[] = [
  {
    icon: <MessageSquare className="w-4 h-4 text-blue-600" />,
    title: "Natural Language Chat",
    desc: "Pengguna dapat bertanya menggunakan bahasa sehari-hari tanpa harus memahami istilah teknis.",
  },
  {
    icon: <Database className="w-4 h-4 text-blue-600" />,
    title: "Knowledge Base Search",
    desc: "Sistem mencari informasi paling relevan dari FAQ dan dokumentasi perusahaan menggunakan pendekatan RAG.",
  },
  {
    icon: <LayoutGrid className="w-4 h-4 text-blue-600" />,
    title: "Classification Mechanism",
    desc: "Chatbot meminta klarifikasi ketika pertanyaan tidak cukup jelas.",
  },
  {
    icon: <ArrowUpCircle className="w-4 h-4 text-blue-600" />,
    title: "Smart Escalation",
    desc: "Kasus yang tidak dapat ditangani otomatis akan diarahkan ke helpdesk.",
  },
  {
    icon: <Eye className="w-4 h-4 text-blue-600" />,
    title: "Vision AI",
    desc: "Pengguna dapat mengunggah gambar untuk membantu proses identifikasi masalah teknis.",
  },
  {
    icon: <BarChart2 className="w-4 h-4 text-blue-600" />,
    title: "Analytics Dashboard",
    desc: "Menyediakan insight terkait pertanyaan yang sering muncul, FAQ Gap, dan performa sistem.",
  },
];

const operationalProblems = [
  {
    title: "Operasional Manual & Repetitif",
    desc: "Penanganan keluhan bergantung pada email dan kertas sehingga membebani tim helpdesk.",
  },
  {
    title: "Dokumentasi Sulit Diakses",
    desc: "FAQ statis dan teknis membuat pengguna enggan mencari solusi mandiri.",
  },
  {
    title: "Ketiadaan Data & Analitik",
    desc: "Tidak tersedia statistik seperti response time, SLA, dan volume tiket.",
  },
  {
    title: "Tidak Ada Self-Service yang Efektif",
    desc: "Pengguna lebih memilih bertanya langsung dibanding mencari solusi sendiri.",
  },
  {
    title: "Knowledge Sharing Tidak Berkelanjutan",
    desc: "Pengetahuan masih bergantung pada pengalaman individu.",
  },
];

const smartSolutions: SolutionItem[] = [
  {
    icon: <BrainCircuit className="w-4 h-4 text-blue-600" />,
    title: "AI Multimodal (Gemini Vision)",
    desc: "Chatbot mampu memproses pertanyaan teks dan gambar secara bersamaan.",
  },
  {
    icon: <Search className="w-4 h-4 text-blue-600" />,
    title: "RAG dengan Qdrant Vector DB",
    desc: "Mencari informasi paling relevan dari dokumen internal.",
  },
  {
    icon: <ShieldAlert className="w-4 h-4 text-blue-600" />,
    title: "Mekanisme Fallback & Eskalasi",
    desc: "Kasus dengan confidence rendah dapat diteruskan ke helpdesk.",
  },
  {
    icon: <LayoutDashboard className="w-4 h-4 text-blue-600" />,
    title: "Dashboard Interaktif Admin",
    desc: "Monitoring penggunaan, evaluasi sistem, dan analisis tren masalah.",
  },
  {
    icon: <Ticket className="w-4 h-4 text-blue-600" />,
    title: "Manajemen Tiket Eskalasi",
    desc: "Pembuatan tiket otomatis ketika chatbot tidak mampu menyelesaikan kasus.",
  },
];

const capaianData: CapaianItem[] = [
  {
    icon: <Timer className="w-6 h-6 text-blue-600" />,
    value: "5–7s",
    title: "Respons Cepat",
    desc: "Kecepatan respons sistem memenuhi target FLA (< 5 detik) untuk pengalaman pengguna yang responsif.",
  },
  {
    icon: <BadgeCheck className="w-6 h-6 text-blue-600" />,
    value: "50+",
    title: "Skenario Uji Berhasil",
    desc: "Pengujian mencakup berbagai kasus mulai dari masalah printing quality hingga pertanyaan di luar cakupan.",
  },
  {
    icon: <TrendingUp className="w-6 h-6 text-blue-600" />,
    value: "1",
    title: "Dashboard KPI & FAQ Gap",
    desc: "Memantau KPI layanan, tren masalah, dan FAQ Gap untuk meningkatkan kualitas knowledge base secara berkelanjutan.",
  },
];

const archLayers: ArchLayer[] = [
  {
    label: "Frontend",
    tags: ["Next.js", "React", "Tailwind CSS", "Framer Motion"],
    delay: 0,
  },
  {
    label: "AI & NLP",
    tags: ["Gemini Vision (Multimodal)", "RAG Pipeline", "Qdrant Vector DB"],
    delay: 0.1,
  },
  {
    label: "Backend",
    tags: ["n8n Workflow Automation", "REST API", "Ticket Management"],
    delay: 0.2,
  },
  {
    label: "Knowledge",
    tags: ["FAQ Database", "Document Embeddings", "Knowledge Base Admin"],
    delay: 0.3,
  },
  {
    label: "Analytics",
    tags: [
      "Logging System",
      "FAQ Gap Analysis",
      "KPI Dashboard",
      "SLA Monitoring",
    ],
    delay: 0.4,
  },
];

const collabItems: string[] = [
  "Wawancara kebutuhan sistem",
  "Analisis proses bisnis helpdesk",
  "Observasi mekanisme pelaporan masalah",
  "Validasi kebutuhan pengguna",
  "Evaluasi solusi yang diusulkan",
];


function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("visible");
        });
      },
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}


export default function LandingPage() {
  useReveal();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700&display=swap');

        :root {
          --navy: #081D5A;
          --navy-mid: #0d2a80;
          --blue: #1a6fdb;
          --blue-light: #dbeafe;
          --blue-pale: #eff6ff;
        }

        html { scroll-behavior: smooth; }

        .font-grotesk { font-family: 'Space Grotesk', sans-serif; }

        /* Scroll reveal */
        .reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal.visible { opacity: 1; transform: translateY(0); }

        /* Hero fade-up */
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(48px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeUp { animation: fadeUp 0.9s cubic-bezier(.22,1,.36,1) both; }

        /* Cap card top accent bar */
        .cap-card-accent::before {
          content: '';
          position: absolute; top: 0; left: 0; right: 0; height: 4px;
          background: var(--blue);
          border-radius: 22px 22px 0 0;
        }
      `}</style>

      <main className="bg-white text-slate-900 overflow-x-hidden">

        <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200 h-[68px] flex items-center">
          <div className="max-w-[1200px] mx-auto px-8 w-full flex items-center justify-between">
            <span className="font-grotesk text-[26px] font-bold tracking-tight" style={{ color: "var(--navy)" }}>
              Chat<span style={{ color: "var(--blue)" }}>son</span>
            </span>

            <nav className="hidden md:flex">
              {["tentang", "tim", "arsitektur", "capaian"].map((href) => (
                <a
                  key={href}
                  href={`#${href}`}
                  className="ml-9 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors capitalize"
                >
                  {href}
                </a>
              ))}
            </nav>

            <button
              className="px-5 py-2 rounded-full text-sm font-semibold text-white transition-colors"
              style={{ background: "var(--navy)" }}
              onMouseEnter={(e) => (e.currentTarget.style.background = "var(--navy-mid)")}
              onMouseLeave={(e) => (e.currentTarget.style.background = "var(--navy)")}
            >
              Login
            </button>
          </div>
        </header>

        <section
          id="tentang"
          className="min-h-screen flex items-center justify-center relative overflow-hidden pt-[100px] pb-16 px-8"
          style={{ background: "linear-gradient(135deg, #fff 0%, #f0f6ff 50%, #e8f0fe 100%)" }}
        >
          <div className="absolute top-[-100px] right-[-100px] w-[500px] h-[500px] rounded-full opacity-35 pointer-events-none" style={{ background: "#93c5fd", filter: "blur(80px)" }} />
          <div className="absolute bottom-0 left-[-80px] w-[400px] h-[400px] rounded-full opacity-35 pointer-events-none" style={{ background: "#a5b4fc", filter: "blur(80px)" }} />

          <div className="relative z-10 text-center max-w-[780px] animate-fadeUp">
            <div
              className="w-[88px] h-[88px] rounded-[26px] flex items-center justify-center mx-auto mb-8"
              style={{ background: "var(--navy)", boxShadow: "0 20px 60px rgba(8,29,90,0.25)" }}
            >
              <svg width="40" height="40" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M8 10h8M8 14h4" />
                <path d="M21 15a2 2 0 0 1-2 2H8l-5 5V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
              </svg>
            </div>

            <span
              className="inline-block text-[11px] font-bold tracking-[1.5px] uppercase px-4 py-1.5 rounded-full mb-5 border"
              style={{ background: "var(--blue-pale)", color: "var(--blue)", borderColor: "#bfdbfe" }}
            >
              Capstone Project 2026 · Filkom UB × PT Epson Indonesia
            </span>

            <h1 className="font-grotesk font-bold leading-[1.05] tracking-[-2px]" style={{ fontSize: "clamp(44px,8vw,80px)", color: "var(--navy)" }}>
              Smart Helpdesk<br />
              <em className="not-italic" style={{ color: "var(--blue)" }}>Chatbot</em>
            </h1>

            <p className="mt-6 text-[17px] text-slate-600 leading-[1.75] max-w-[640px] mx-auto">
              Sistem bantuan berbasis AI yang membantu karyawan menemukan solusi teknis dan operasional secara mandiri — melalui percakapan natural, RAG, dan workflow automation.
            </p>

            <button
              className="mt-10 text-[15px] font-semibold text-white px-9 py-3.5 rounded-full transition-all"
              style={{ background: "var(--blue)", boxShadow: "0 8px 30px rgba(26,111,219,0.4)" }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 12px 40px rgba(26,111,219,0.5)"; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 8px 30px rgba(26,111,219,0.4)"; }}
            >
              Lihat Hasil Produk →
            </button>
          </div>
        </section>

        <section id="tim" className="py-28 px-8 bg-slate-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center reveal">
              <p className="text-[11px] font-bold tracking-[2px] uppercase mb-3" style={{ color: "var(--blue)" }}>Fantastic Five</p>
              <h2 className="font-grotesk font-bold tracking-[-1px] leading-[1.15]" style={{ fontSize: "clamp(32px,5vw,48px)", color: "var(--navy)" }}>
                Tim Pengembang
              </h2>
              <p className="mt-4 text-base text-slate-600 max-w-[560px] mx-auto">
                Dikembangkan sebagai bagian dari Capstone Project Fakultas Ilmu Komputer Universitas Brawijaya tahun 2026.
              </p>
            </div>

            <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 items-end">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 80 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.03 }}
                  className={cardOffsetClass[index]}
                >
                  <div className="relative h-[340px]">
                    <div className="absolute inset-0 flex justify-center items-center">
                      <div className="w-40 h-40 rounded-full bg-black/40" style={{ filter: "blur(32px)" }} />
                    </div>
                    <div className="relative h-full z-10">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-contain"
                        style={{ filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.35))" }}
                      />
                    </div>
                  </div>

                  <div
                    className="relative z-20 -mt-6 rounded-[22px] p-4 border"
                    style={{ background: "#fff", boxShadow: "0 8px 32px rgba(8,29,90,0.1)", borderColor: "#e2e8f0" }}
                  >
                    <p className="text-[12px] font-bold text-slate-900 leading-snug">{member.name}</p>
                    <p className="text-[10px] text-slate-400 mt-1">{member.nim}</p>
                    <span
                      className="inline-block mt-2 text-[10px] font-bold px-2.5 py-1 rounded-full leading-none"
                      style={{ background: "var(--blue-pale)", color: "var(--blue)" }}
                    >
                      {member.role}
                    </span>
                    <p className="text-[11px] text-slate-600 mt-2 leading-relaxed">{member.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 px-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center reveal">
              <p className="text-[11px] font-bold tracking-[2px] uppercase mb-3" style={{ color: "var(--blue)" }}>Latar Belakang</p>
              <h2 className="font-grotesk font-bold tracking-[-1px]" style={{ fontSize: "clamp(32px,5vw,48px)", color: "var(--navy)" }}>
                Tentang Proyek
              </h2>
            </div>

            <div className="mt-14 grid lg:grid-cols-2 gap-6">
              <div className="reveal bg-slate-50 border border-slate-200 rounded-[32px] p-10">
                <p className="font-grotesk text-[22px] font-bold mb-1.5" style={{ color: "var(--navy)" }}>Smart Helpdesk Chatbot</p>
                <p className="text-sm font-semibold mb-5" style={{ color: "var(--blue)" }}>Sistem helpdesk berbasis web — Capstone Project UB</p>
                <p className="text-sm text-slate-700 leading-[1.8] mb-4">
                  Smart Helpdesk Chatbot dikembangkan bekerja sama dengan PT Epson Indonesia untuk mengatasi tingginya jumlah pertanyaan repetitif yang membebani tim helpdesk akibat sulitnya pengguna menemukan informasi pada dokumentasi yang tersedia.
                </p>
                <p className="text-sm text-slate-700 leading-[1.8]">
                  Dengan menggabungkan AI, Retrieval-Augmented Generation (RAG), dan n8n Workflow Automation, chatbot mampu memahami pertanyaan dalam bahasa natural, mencari informasi yang relevan, dan memberikan langkah penyelesaian yang mudah dipahami.
                </p>
              </div>

              <div className="reveal bg-slate-50 border border-slate-200 rounded-[32px] p-10" style={{ transitionDelay: "0.15s" }}>
                <p className="font-grotesk text-[22px] font-bold mb-1.5" style={{ color: "var(--navy)" }}>Mitra Kolaborasi</p>
                <p className="text-sm font-semibold mb-5" style={{ color: "var(--blue)" }}>PT Epson Indonesia</p>

                <div className="rounded-[14px] p-5 text-center mb-6" style={{ background: "var(--navy)" }}>
                  <h3 className="font-grotesk text-[36px] font-bold tracking-[2px]" style={{ color: "#60a5fa" }}>EPSON</h3>
                  <p className="text-[11px] tracking-[3px] uppercase mt-1" style={{ color: "#94a3b8" }}>Exceed Your Vision</p>
                </div>

                <p className="text-sm text-slate-700 leading-[1.8] mb-4">
                  Proyek ini berfokus pada digitalisasi proses penanganan masalah teknis dan operasional yang saat ini masih banyak dilakukan secara manual melalui email maupun formulir pelaporan.
                </p>

                <p className="text-[13px] font-bold mb-2" style={{ color: "var(--navy)" }}>Bentuk Kolaborasi</p>
                <ul className="space-y-0 divide-y divide-slate-200">
                  {collabItems.map((item) => (
                    <li key={item} className="flex items-center gap-3 py-2 text-sm text-slate-700">
                      <span className="w-[18px] h-[18px] rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "var(--blue)" }}>
                        <svg viewBox="0 0 10 10" width="10" height="10" fill="none" stroke="white" strokeWidth="2">
                          <polyline points="2,5 4,7 8,3" />
                        </svg>
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-28 px-8 bg-slate-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center reveal">
              <p className="text-[11px] font-bold tracking-[2px] uppercase mb-3" style={{ color: "var(--blue)" }}>Mengapa Chatson?</p>
              <h2 className="font-grotesk font-bold tracking-[-1px]" style={{ fontSize: "clamp(32px,5vw,48px)", color: "var(--navy)" }}>
                Latar Belakang &amp; Solusi
              </h2>
            </div>

            <div className="mt-14 grid lg:grid-cols-[1fr_1.2fr] gap-6 items-center">

              <div className="flex flex-col gap-6">
                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7 }}
                  className="bg-white border border-slate-200 rounded-[32px] p-9"
                >
                  <p className="font-grotesk text-[20px] font-bold mb-6" style={{ color: "var(--navy)" }}>Latar Belakang Proyek</p>
                  <div className="space-y-4">
                    {latarBelakang.map((item, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: i * 0.1 }}
                        className="flex gap-3 items-start"
                      >
                        <span
                          className="w-[26px] h-[26px] rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 text-[11px] font-bold text-white"
                          style={{ background: "var(--blue)" }}
                        >
                          {i + 1}
                        </span>
                        <p className="text-[13px] text-slate-700 leading-[1.7]">{item}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: false }}
                  transition={{ duration: 0.7, delay: 0.15 }}
                  className="bg-white border border-slate-200 rounded-[32px] p-9"
                >
                  <p className="font-grotesk text-[20px] font-bold mb-6 text-center" style={{ color: "var(--navy)" }}>Alur Kerja Sistem</p>
                  <div>
                    {alurKerja.map((step, i) => (
                      <div key={step}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.95 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: false }}
                          transition={{ delay: i * 0.1 }}
                          className="flex items-center gap-3 bg-slate-50 rounded-full px-4 py-3 border border-slate-200"
                        >
                          <span
                            className="w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold flex-shrink-0"
                            style={{ background: "var(--blue-pale)", color: "var(--navy)", border: "2px solid #bfdbfe" }}
                          >
                            {i + 1}
                          </span>
                          <span className="text-[13px] font-medium text-slate-700">{step}</span>
                        </motion.div>
                        {i < alurKerja.length - 1 && (
                          <div className="flex justify-center my-1">
                            <div className="w-0.5 h-4 bg-slate-200" />
                          </div>
                        )}
                      </div>
                    ))}
                    <div className="flex justify-center my-1">
                      <div className="w-0.5 h-4 bg-slate-200" />
                    </div>
                    <div className="grid grid-cols-2 gap-3 mt-1">
                      <div className="rounded-xl p-3 text-center text-[12px] font-semibold" style={{ background: "#f0fdf4", color: "#15803d", border: "1px solid #bbf7d0" }}>
                        ✓ Jawaban Diberikan ke User
                      </div>
                      <div className="rounded-xl p-3 text-center text-[12px] font-semibold" style={{ background: "#fff1f2", color: "#be123c", border: "1px solid #fecdd3" }}>
                        ↗ Eskalasi ke Helpdesk
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.1 }}
                className="bg-white border border-slate-200 rounded-[32px] p-9"
              >
                <p className="font-grotesk text-[20px] font-bold mb-6" style={{ color: "var(--navy)" }}>Solusi yang Ditawarkan</p>
                <div className="grid grid-cols-2 gap-3">
                  {solutions.map((item, i) => (
                    <motion.div
                      key={item.title}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: false }}
                      transition={{ delay: i * 0.08 }}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="bg-slate-50 border border-slate-200 rounded-[14px] p-4 flex flex-col"
                    >
                      <div
                        className="w-[34px] h-[34px] rounded-[8px] flex items-center justify-center mb-2.5 flex-shrink-0"
                        style={{ background: "var(--blue-light)" }}
                      >
                        {item.icon}
                      </div>
                      <p className="text-[11px] font-bold mb-1" style={{ color: "var(--blue)" }}>{item.title}</p>
                      <p className="text-[11px] text-slate-600 leading-[1.65]">{item.desc}</p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section className="py-28 px-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center reveal">
              <p className="text-[11px] font-bold tracking-[2px] uppercase mb-3" style={{ color: "var(--blue)" }}>Transformasi Operasional</p>
              <h2 className="font-grotesk font-bold tracking-[-1px]" style={{ fontSize: "clamp(32px,5vw,48px)", color: "var(--navy)" }}>
                Tantangan &amp; Solusi Operasional
              </h2>
              <p className="mt-4 text-base text-slate-600 max-w-[520px] mx-auto">
                Mentransformasi beban kerja manual menjadi efisiensi otomatis berbasis AI.
              </p>
            </div>

            <div className="mt-14 grid lg:grid-cols-2 gap-6">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
                className="rounded-[32px] p-9 border"
                style={{ background: "#fff9f9", borderColor: "#fecdd3" }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <AlertTriangle className="w-5 h-5 text-red-500" />
                  <span className="text-[11px] font-bold tracking-[1px] uppercase px-3 py-1 rounded-full" style={{ background: "#fecdd3", color: "#be123c" }}>
                    Masalah Operasional
                  </span>
                </div>
                <div className="divide-y divide-black/5">
                  {operationalProblems.map((item) => (
                    <div key={item.title} className="py-3.5">
                      <h4 className="text-[13px] font-bold text-slate-900 mb-1">{item.title}</h4>
                      <p className="text-[12px] text-slate-600 leading-[1.65]">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
                className="rounded-[32px] p-9 border"
                style={{ background: "#f8fbff", borderColor: "#bfdbfe" }}
              >
                <div className="flex items-center gap-3 mb-7">
                  <Lightbulb className="w-5 h-5" style={{ color: "var(--blue)" }} />
                  <span className="text-[11px] font-bold tracking-[1px] uppercase px-3 py-1 rounded-full" style={{ background: "var(--blue-light)", color: "var(--blue)" }}>
                    Solusi Cerdas
                  </span>
                </div>
                <div className="divide-y divide-black/5">
                  {smartSolutions.map((item) => (
                    <div key={item.title} className="flex gap-3.5 items-start py-3.5">
                      <div
                        className="w-9 h-9 rounded-[8px] flex items-center justify-center flex-shrink-0 mt-0.5"
                        style={{ background: "var(--blue-light)" }}
                      >
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-[13px] font-bold text-slate-900 mb-1">{item.title}</h4>
                        <p className="text-[12px] text-slate-600 leading-[1.65]">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <section id="arsitektur" className="py-24 px-8 bg-slate-50">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center reveal">
              <p className="text-[11px] font-bold tracking-[2px] uppercase mb-3" style={{ color: "var(--blue)" }}>Stack Teknologi</p>
              <h2 className="font-grotesk font-bold tracking-[-1px]" style={{ fontSize: "clamp(32px,5vw,48px)", color: "var(--navy)" }}>
                Arsitektur Sistem
              </h2>
              <p className="mt-4 text-base text-slate-600 max-w-[480px] mx-auto">
                Teknologi yang digunakan dalam membangun Smart Helpdesk Chatbot.
              </p>
            </div>

            <div className="mt-12 flex flex-col gap-3">
              {archLayers.map((layer) => (
                <motion.div
                  key={layer.label}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: layer.delay }}
                  className="bg-white border border-slate-200 rounded-[22px] px-7 py-5 flex items-center gap-5"
                >
                  <span
                    className="w-[140px] flex-shrink-0 text-[11px] font-bold tracking-[1.5px] uppercase"
                    style={{ color: "var(--blue)" }}
                  >
                    {layer.label}
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {layer.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[12px] font-semibold px-3.5 py-1.5 rounded-full border"
                        style={{ background: "var(--blue-pale)", borderColor: "#bfdbfe", color: "var(--navy)" }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <section id="capaian" className="py-24 px-8 bg-white">
          <div className="max-w-[1200px] mx-auto">
            <div className="text-center reveal">
              <p className="text-[11px] font-bold tracking-[2px] uppercase mb-3" style={{ color: "var(--blue)" }}>Hasil Pengujian</p>
              <h2 className="font-grotesk font-bold tracking-[-1px]" style={{ fontSize: "clamp(32px,5vw,48px)", color: "var(--navy)" }}>
                Hasil &amp; Capaian Proyek
              </h2>
              <p className="mt-4 text-base text-slate-600">
                Metrik kinerja yang membuktikan efisiensi operasional.
              </p>
            </div>

            <div className="mt-14 grid md:grid-cols-3 gap-6">
              {capaianData.map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false }}
                  transition={{ delay: i * 0.15 }}
                  whileHover={{ y: -8 }}
                  className="cap-card-accent relative bg-white border border-slate-200 rounded-[32px] p-10 text-center overflow-hidden"
                >
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "var(--blue-light)" }}
                  >
                    {item.icon}
                  </div>
                  <p className="font-grotesk font-bold tracking-[-2px]" style={{ fontSize: "48px", color: "var(--navy)" }}>
                    {item.value}
                  </p>
                  <p className="text-[15px] font-bold text-slate-900 mt-2.5">{item.title}</p>
                  <p className="text-[13px] text-slate-600 mt-2.5 leading-[1.7]">{item.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        <footer className="py-12 px-8" style={{ background: "var(--navy)" }}>
          <div className="max-w-[1200px] mx-auto flex flex-col items-center gap-5">
            <span className="font-grotesk text-[24px] font-bold text-white">
              Chat<span style={{ color: "#60a5fa" }}>son</span>
            </span>
            <div className="flex flex-wrap justify-center gap-7">
              {["Universitas Info", "Kebijakan Privasi", "Kontak Tim"].map((label) => (
                <a key={label} href="#" className="text-[13px] text-slate-400 hover:text-white transition-colors no-underline">
                  {label}
                </a>
              ))}
            </div>
            <p className="text-[12px]" style={{ color: "#64748b" }}>
              © 2026 Smart Helpdesk Chatbot Team · Fantastic Five · Filkom UB. All Rights Reserved.
            </p>
          </div>
        </footer>

        <Link
          href="https://chatson.my.id"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-7 right-7 z-50 w-[60px] h-[60px] rounded-full flex items-center justify-center no-underline transition-all"
          style={{ background: "var(--navy)", boxShadow: "0 8px 32px rgba(8,29,90,0.4)" }}
          onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.1)"; e.currentTarget.style.background = "var(--blue)"; }}
          onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.background = "var(--navy)"; }}
          aria-label="Buka Chatson"
        >
          <svg width="24" height="24" fill="none" stroke="white" strokeWidth="2" viewBox="0 0 24 24">
            <path d="M8 10h8M8 14h4" />
            <path d="M21 15a2 2 0 0 1-2 2H8l-5 5V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
          </svg>
        </Link>

      </main>
    </>
  );
}