"use client";

import Image from "next/image";
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
} from "lucide-react";

const teamMembers = [
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
    description: "Menyusun knowledge base, kurasi FAQ, serta memastikan kualitas informasi yang digunakan chatbot.",
  },
  {
    name: "Atha Zaydan Shahzada",
    nim: "235150401111023",
    role: "Project Manager & Business Analyst",
    image: "/team/zidan.png",
    description: "Mengelola kebutuhan stakeholder, perancangan proses bisnis, workflow n8n, dan strategi implementasi sistem.",
  },
  {
    name: "Muhammad Zaki Anggoro",
    nim: "235150207111004",
    role: "Frontend & UI Engineer",
    image: "/team/zaki.png",
    description: "Mengembangkan backend service serta integrasi AI model dengan sistem chatbot.",
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

const smartSolutions = [
  {
    icon: <BrainCircuit className="w-5 h-5 text-blue-600" />,
    title: "AI Multimodal (Gemini Vision)",
    desc: "Chatbot mampu memproses pertanyaan teks dan gambar secara bersamaan.",
  },
  {
    icon: <Search className="w-5 h-5 text-blue-600" />,
    title: "RAG dengan Qdrant Vector DB",
    desc: "Mencari informasi paling relevan dari dokumen internal.",
  },
  {
    icon: <ShieldAlert className="w-5 h-5 text-blue-600" />,
    title: "Mekanisme Fallback & Eskalasi",
    desc: "Kasus dengan confidence rendah dapat diteruskan ke helpdesk.",
  },
  {
    icon: <LayoutDashboard className="w-5 h-5 text-blue-600" />,
    title: "Dashboard Interaktif Admin",
    desc: "Monitoring penggunaan, evaluasi sistem, dan analisis tren masalah.",
  },
  {
    icon: <Ticket className="w-5 h-5 text-blue-600" />,
    title: "Manajemen Tiket Eskalasi",
    desc: "Pembuatan tiket otomatis ketika chatbot tidak mampu menyelesaikan kasus.",
  },
];

const solutions = [
  {
    icon: <MessageSquare className="w-5 h-5 text-blue-600" />,
    title: "Natural Language Chat",
    desc: "Pengguna dapat bertanya menggunakan bahasa sehari-hari tanpa harus memahami istilah teknis.",
  },
  {
    icon: <Database className="w-5 h-5 text-blue-600" />,
    title: "Knowledge Base Search",
    desc: "Sistem mencari informasi paling relevan dari FAQ dan dokumentasi perusahaan menggunakan pendekatan RAG.",
  },
  {
    icon: <LayoutGrid className="w-5 h-5 text-blue-600" />,
    title: "Clasification Mechanism",
    desc: "Chatbot meminta klarifikasi ketika pertanyaan tidak cukup jelas.",
  },
  {
    icon: <ArrowUpCircle className="w-5 h-5 text-blue-600" />,
    title: "Smart Escalation",
    desc: "Kasus yang tidak dapat ditangani otomatis akan diarahkan ke helpdesk.",
  },
  {
    icon: <Eye className="w-5 h-5 text-blue-600" />,
    title: "Vision AI",
    desc: "Pengguna dapat mengunggah gambar untuk membantu proses identifikasi masalah teknis.",
  },
  {
    icon: <BarChart2 className="w-5 h-5 text-blue-600" />,
    title: "Analytics Dashboard",
    desc: "Menyediakan insight terkait pertanyaan yang sering muncul, FAQ Gap, dan performa sistem.",
  },
];

const cardOffset = [
  "lg:mt-0",
  "lg:mt-20",
  "lg:-mt-4",
  "lg:mt-16",
  "lg:mt-0",
];

const capaianData = [
  {
    icon: <Timer className="w-6 h-6 text-blue-600" />,
    value: "5-7s",
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
    value: "1 Dashboard",
    title: "Monitoring KPI dan FAQ Gap",
    desc: "Memantau KPI layanan, tren masalah, dan FAQ Gap untuk meningkatkan kualitas knowledge base secara berkelanjutan.",
  },
];

const latarBelakang = [
  "Banyak pertanyaan yang sebenarnya sudah memiliki jawaban pada dokumentasi perusahaan.",
  "Pengguna kesulitan menemukan informasi yang relevan melalui pencarian manual.",
  "Tim helpdesk menerima banyak pertanyaan berulang yang menghambat penanganan kasus kompleks.",
  "Belum tersedia mekanisme analitik untuk mengetahui pola masalah yang sering muncul.",
  "Knowledge Base belum berkembang secara adaptif berdasarkan kebutuhan pengguna.",
];

const alurKerja = [
  "User Mengajukan Pertanyaan",
  "AI Memahami Konteks Pertanyaan",
  "Sistem Mencari Dokumen Relevan",
  "AI Menyusun Jawaban",
  "Confidence Check",
];

export default function LandingPage() {
  return (
    <main className="bg-slate-50 text-slate-900 overflow-hidden">
      {/* ================= NAVBAR ================= */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/30 bg-white/70 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <h1 className="text-3xl font-extrabold text-[#081D5A]">Chatson</h1>

          <nav className="hidden md:flex gap-10 text-sm">
            <a href="#tentang">Tentang</a>
            <a href="#tim">Tim</a>
            <a href="#arsitektur">Arsitektur</a>
            <a href="#capaian">Capaian</a>
          </nav>

          <button className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium">
            Login
          </button>
        </div>
      </header>

      {/* ================= HERO ================= */}
      <section
        id="tentang"
        className="relative min-h-screen flex items-center justify-center"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white via-slate-100 to-blue-100" />
        <div className="absolute top-20 right-10 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl" />
        <div className="absolute bottom-10 left-10 w-80 h-80 rounded-full bg-indigo-400/20 blur-3xl" />

        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl"
        >
          <div className="w-28 h-28 rounded-[28px] bg-[#081D5A] flex items-center justify-center mx-auto shadow-2xl">
            <svg
              width="50"
              height="50"
              fill="none"
              stroke="white"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path d="M8 10h8M8 14h4" />
              <path d="M21 15a2 2 0 0 1-2 2H8l-5 5V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
          </div>

          <h2 className="mt-10 text-4xl md:text-5xl font-bold">
            Smart Helpdesk
          </h2>

          <h1 className="text-6xl md:text-8xl font-black text-blue-600">
            Chatbot
          </h1>

          <p className="mt-8 text-slate-600 leading-relaxed max-w-3xl mx-auto">
            Smart Helpdesk Chatbot merupakan sistem bantuan berbasis AI yang
            dirancang untuk membantu karyawan menemukan solusi teknis dan
            operasional secara mandiri melalui percakapan natural. Sistem
            memanfaatkan Knowledge Base, Retrieval-Augmented Generation (RAG),
            dan workflow automation untuk memberikan jawaban yang akurat,
            terstruktur, serta mampu melakukan eskalasi ketika masalah tidak
            dapat diselesaikan secara otomatis.
          </p>

          <button className="mt-10 bg-blue-600 hover:bg-blue-700 transition px-8 py-3 rounded-full text-white font-semibold shadow-lg">
            Hasil Produk
          </button>
        </motion.div>
      </section>

      {/* ================= TIM ================= */}
      <section id="tim" className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-5xl font-bold">Tim Pengembang</h2>
            <p className="mt-5 text-slate-600 max-w-3xl mx-auto">
              Proyek Smart Helpdesk Chatbot dikembangkan oleh tim Fantastic Five
              sebagai bagian dari Capstone Project Fakultas Ilmu Komputer
              Universitas Brawijaya tahun 2026.
            </p>
          </motion.div>

          <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.6 }}
                whileHover={{ y: -10, scale: 1.03 }}
                className={cardOffset[index]}
              >
                <div className="relative h-[340px]">
                  <div className="absolute inset-0 flex justify-center items-center">
                    <div className="w-40 h-40 rounded-full bg-black/40 blur-3xl" />
                  </div>
                  <div className="relative h-full z-10">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-contain drop-shadow-[0_0_35px_rgba(0,0,0,0.45)]"
                    />
                  </div>
                </div>

                <div className="bg-white rounded-3xl shadow-xl p-5 -mt-10 relative z-20">
                  <h3 className="font-bold text-sm">{member.name}</h3>
                  <p className="text-xs text-slate-500 mt-1">{member.nim}</p>
                  <p className="mt-3 text-blue-600 font-semibold text-sm">
                    {member.role}
                  </p>
                  <p className="mt-2 text-xs text-slate-600 leading-relaxed">
                    {member.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= TENTANG PROYEK ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Tentang Proyek */}
            <div className="bg-[#dce8f7] rounded-[28px] p-10 shadow-lg">
              <h2 className="text-center text-4xl font-bold">Tentang Proyek</h2>
              <p className="text-center text-blue-600 font-semibold text-xl mt-2">
                Smart Helpdesk Chatbot
              </p>

              <div className="mt-10 text-slate-700 leading-relaxed space-y-6 text-justify">
                <p>
                  Smart Helpdesk Chatbot adalah sistem helpdesk berbasis web
                  yang dikembangkan sebagai bagian dari Capstone Project
                  Universitas Brawijaya bekerja sama dengan PT Epson Indonesia.
                  Sistem ini hadir untuk mengatasi tingginya jumlah pertanyaan
                  repetitif yang membebani tim helpdesk akibat sulitnya pengguna
                  menemukan informasi pada dokumentasi dan knowledge base yang
                  tersedia.
                </p>
                <p>
                  Dengan menggabungkan teknologi Artificial Intelligence,
                  Retrieval-Augmented Generation (RAG), dan n8n Workflow
                  Automation, chatbot mampu memahami pertanyaan pengguna dalam
                  bahasa natural, mencari informasi yang relevan, serta
                  memberikan langkah penyelesaian yang mudah dipahami.
                </p>
              </div>
            </div>

            {/* Mitra */}
            <div className="bg-[#dce8f7] rounded-[28px] p-10 shadow-lg">
              <h2 className="text-center text-4xl font-bold">
                Mitra Kolaborasi
              </h2>

              <div className="flex justify-center mt-6">
                <div className="text-center">
                  <h3 className="text-6xl font-black text-[#0066B3]">EPSON</h3>
                  <p className="text-lg font-medium text-slate-700">
                    EXCEED YOUR VISION
                  </p>
                </div>
              </div>

              <div className="mt-8 text-slate-700 leading-relaxed text-justify">
                <p>
                  PT Epson Indonesia menjadi mitra kolaborasi dalam pengembangan
                  Smart Helpdesk Chatbot. Proyek ini berfokus pada digitalisasi
                  proses penanganan masalah teknis dan operasional yang saat ini
                  masih banyak dilakukan secara manual melalui email maupun
                  formulir pelaporan.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="text-blue-600 font-bold text-center mb-4">
                  Bentuk Kolaborasi
                </h3>
                <ul className="space-y-2 text-slate-700 list-disc pl-6">
                  <li>Wawancara kebutuhan sistem</li>
                  <li>Analisis proses bisnis helpdesk</li>
                  <li>Observasi mekanisme pelaporan masalah</li>
                  <li>Validasi kebutuhan pengguna</li>
                  <li>Evaluasi solusi yang diusulkan</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= LATAR BELAKANG & SOLUSI ================= */}
      <section className="py-28 px-6 bg-slate-50">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.2 }}
          transition={{ duration: 0.8 }}
          className="max-w-7xl mx-auto"
        >
          <div className="grid lg:grid-cols-[0.9fr_1.2fr] gap-8">
            {/* LEFT SIDE */}
            <div className="space-y-8">
              {/* LATAR BELAKANG */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
                className="bg-[#eef3fa] rounded-3xl p-8"
              >
                <h2 className="text-4xl font-bold mb-8">
                  Latar Belakang Proyek
                </h2>

                <div className="space-y-5">
                  {latarBelakang.map((item, index) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: false }}
                      transition={{ delay: index * 0.15, duration: 0.5 }}
                      className="flex gap-3 items-start"
                    >
                      {/* Sesuai design: icon CheckCircle2 berwarna biru */}
                      <CheckCircle2 className="w-5 h-5 text-blue-500 mt-0.5 flex-shrink-0" />
                      <p className="text-slate-700 text-sm leading-relaxed">
                        {item}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              {/* ALUR KERJA */}
              <motion.div
                initial={{ opacity: 0, x: -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7 }}
                className="bg-[#eef3fa] rounded-3xl p-8"
              >
                <h2 className="text-4xl font-bold mb-8 text-center">
                  Alur Kerja Sistem
                </h2>

                <div className="space-y-3">
                  {alurKerja.map((step, index) => (
                    <div key={step}>
                      <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: false }}
                        transition={{ delay: index * 0.1 }}
                        className="bg-white rounded-full px-5 py-3 shadow flex items-center gap-4"
                      >
                        <div className="w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center font-bold text-sm">
                          {index + 1}
                        </div>
                        <span className="font-medium text-sm">{step}</span>
                      </motion.div>

                      {/* Arrow between steps */}
                      {index < alurKerja.length - 1 && (
                        <div className="flex justify-center my-1 text-slate-400 text-xs">
                          ↓
                        </div>
                      )}
                    </div>
                  ))}
                </div>

                {/* Arrow before final split */}
                <div className="flex justify-center my-1 text-slate-400 text-xs">
                  ↓
                </div>

                <div className="grid grid-cols-2 gap-4 mt-2">
                  <div className="bg-green-100 text-green-700 rounded-xl p-4 text-center font-semibold text-sm">
                    Jawaban Diberikan ke User
                  </div>
                  <div className="bg-red-100 text-red-700 rounded-xl p-4 text-center font-semibold text-sm">
                    Eskalasi ke Helpdesk
                  </div>
                </div>
              </motion.div>
            </div>

            {/* RIGHT SIDE — Solusi yang Ditawarkan */}
            <div className="bg-[#eef3fa] rounded-3xl p-8">
              <h2 className="text-center text-4xl font-bold mb-10">
                Solusi yang Ditawarkan
              </h2>

              <div className="grid md:grid-cols-2 gap-5">
                {solutions.map((item, index) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: false }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -6, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 shadow-md border-l-4 border-blue-500"
                  >
                    {/* Icon + Title row — sesuai design */}
                    <div className="flex items-center gap-2 mb-3">
                      <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0">
                        {item.icon}
                      </div>
                      <h3 className="font-bold text-sm text-blue-600">
                        {item.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ================= TANTANGAN & SOLUSI OPERASIONAL ================= */}
      <section className="py-28 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-5xl font-bold">
              Tantangan & Solusi Operasional
            </h2>
            <p className="text-slate-500 mt-3">
              Mentransformasi beban kerja manual menjadi efisiensi otomatis
              berbasis AI.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* MASALAH */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl shadow-lg p-8"
            >
              <div className="flex items-center gap-3 mb-8">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                <h3 className="font-bold text-red-600 text-xl">
                  Masalah Operasional
                </h3>
              </div>

              <div className="space-y-6">
                {operationalProblems.map((item) => (
                  <div key={item.title}>
                    <h4 className="font-semibold text-slate-900">
                      {item.title}
                    </h4>
                    <p className="text-slate-600 mt-2 text-sm leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* SOLUSI */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.7 }}
              className="bg-white rounded-3xl shadow-lg p-8 border border-blue-100"
            >
              <div className="flex items-center gap-3 mb-8">
                <Lightbulb className="w-6 h-6 text-blue-500" />
                <h3 className="font-bold text-blue-600 text-xl">
                  Solusi Cerdas
                </h3>
              </div>

              <div className="space-y-6">
                {smartSolutions.map((item) => (
                  <div key={item.title} className="flex gap-3 items-start">
                    <div className="w-8 h-8 rounded-md bg-blue-50 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-semibold text-slate-900">
                        {item.title}
                      </h4>
                      <p className="text-slate-600 mt-1 text-sm leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= HASIL & CAPAIAN ================= */}
      <section id="capaian" className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold">Hasil & Capaian Proyek</h2>
            <p className="text-slate-500 mt-3">
              Metrik kinerja yang membuktikan efisiensi operasional.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {capaianData.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ delay: index * 0.15 }}
                whileHover={{ y: -8 }}
                className="bg-slate-50 rounded-3xl p-10 shadow-md text-center"
              >
                {/* Icon circle — sesuai design */}
                <div className="w-14 h-14 rounded-full bg-blue-100 mx-auto mb-6 flex items-center justify-center">
                  {item.icon}
                </div>

                <h3 className="text-5xl font-black">{item.value}</h3>

                <h4 className="font-semibold mt-4">{item.title}</h4>

                <p className="text-slate-600 mt-4 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="border-t bg-white">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="font-bold text-slate-900">Smart Helpdesk</div>

            <div className="flex flex-wrap justify-center gap-8 text-sm text-slate-500">
              <a href="#">Universitas Info</a>
              <a href="#">Kebijakan Privasi</a>
              <a href="#">Kontak Tim</a>
            </div>

            <div className="text-sm text-slate-500 text-center md:text-right">
              © 2026 Smart Helpdesk Chatbot Team. All Rights Reserved.
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}