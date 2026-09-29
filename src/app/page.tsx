import BlurFade from "@/components/magicui/blur-fade";
import { ArrowUpRight, GraduationCap, Phone, Mail, MessageCircle } from "lucide-react";
import Image from "next/image";
import { PROFILE } from "@/data/profile";
import type { ReactNode } from "react";

function SupervisorLink() {
  return <a href="https://yaoyuanthu.github.io/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-current/40 hover:decoration-current">Prof. Yuan Yao</a>;
}

const education = [
  { mark: "SJTU", tone: "red", name: "Shanghai Jiao Tong University", degree: "Incoming Ph.D. Student in Computer Science", details: ["School of Computer Science", <>Supervised by <SupervisorLink /> (College of AI, Tsinghua University)</>], date: "Sep 2027 - Jun 2028", location: "SJTU SCS, Shanghai, China", additionalPeriod: "Sep 2028 - Sep 2032 THU CAI, Beijing, China" },
  { mark: "SHU", tone: "blue", name: "Shanghai University", degree: "B.S. in Information Engineering", details: ["Sino-European School of Technology", "GPA: 3.63 / 4.0"], date: "Sep 2023 - Jul 2027 (expected)", location: "Shanghai, China" },
];
const visits = [
  { mark: "BIT", tone: "green", name: "Beijing Institute of Technology", degree: "Department of Computer Science", details: [<>Supervised by <a href="https://cs.bit.edu.cn/szdw/jsml/bssds/172f42bb4b8742ce8d91e88e2680b0b0.htm" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Prof. Heyan Huang</a></>], date: "Oct 2025 - Apr 2026" },
  { mark: "THU", tone: "purple", name: "Tsinghua University", degree: "Department of Electronic Engineering", details: [<>Supervised by <a href="https://thungnlab.cn/members/yongfeng-huang.html" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4">Prof. Yongfeng Huang</a></>], date: "Jul 2025 - Oct 2025" },
];

function Records({ items }: { items: { mark: string; tone: string; name: string; degree: string; details: ReactNode[]; date: string; location?: string; additionalPeriod?: string }[] }) {
  return <div>{items.map(item => <article className="record" key={item.name}><div className={`institution-mark ${item.tone}`}>{item.mark}</div><div className="record-body"><h3>{item.name}</h3><p className="degree">{item.degree}</p>{item.details.map((detail, index) => <p className="detail" key={index}>{detail}</p>)}<div className="record-meta"><span>{item.date}{item.location ? ` ${item.location}` : ""}</span></div>{item.additionalPeriod && <div className="record-meta"><span>{item.additionalPeriod}</span></div>}</div></article>)}</div>;
}

export default function Page() {
  return <main id="home">
    <BlurFade delay={0.05}><header>
      <div className="eyebrow">ACADEMIC PROFILE <span>SHANGHAI, CHINA</span></div>
      <div className="identity"><div><h1>Haitian Li<span>.</span></h1><p className="subtitle">Information Engineering &amp; Computer Science</p></div><Image src="/haitian-li-portrait-v3.jpg" alt="Haitian Li" width={112} height={112} priority className="profile-avatar" /></div>
      <p className="intro">I am an undergraduate student in Information Engineering at Shanghai University, expecting to graduate in July 2027. I will join Shanghai Jiao Tong University as a Ph.D. student in Computer Science in September 2027, supervised by <SupervisorLink /> (College of AI, Tsinghua University).</p>
      <div className="profile-links"><a href={PROFILE.scholar} target="_blank" rel="noopener noreferrer"><GraduationCap size={17}/>Google Scholar<ArrowUpRight size={14}/></a><a href="mailto:lanht2913@gmail.com"><Mail size={15}/>lanht2913@gmail.com</a><a href="tel:+8615000305183"><Phone size={15}/>+86 15000305183</a><span className="inline-flex items-center gap-[7px]"><MessageCircle size={15} aria-hidden="true"/>WeChat: <span className="select-all">ChinChillakkk</span></span></div>
    </header></BlurFade>
    <BlurFade delay={0.12}><section id="education" className="academic-section"><div className="section-heading"><h2>Education</h2><span>01</span></div><Records items={education}/></section></BlurFade>
    <BlurFade delay={0.2}><section id="visiting" className="academic-section"><div className="section-heading"><h2>Visiting Experience</h2><span>02</span></div><Records items={visits}/></section></BlurFade>
    <BlurFade delay={0.25}><footer id="contact"><span>Haitian Li</span><a href={PROFILE.scholar} target="_blank" rel="noopener noreferrer">Research on Google Scholar<ArrowUpRight size={14}/></a></footer></BlurFade>
  </main>;
}
