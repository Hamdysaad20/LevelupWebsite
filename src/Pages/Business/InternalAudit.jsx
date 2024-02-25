import React from "react";
import DynamicLandingHero from "../../Components/DynamicLandingHero";
import Benefits from "../../Components/Benefits/Benefits";
import Call from "../../Components/Call";
import How from "./How";
import ImgCompo from "./ImgCompo";
import Why from "./Why";
import ImageGrid from "./ImageGrid";
import Chatbot from "../../Components/Chatbot/Chatbot"

// Icons
const LeafIcon = () => (
  <svg
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M21.88 2.15002L20.68 2.55002C18.6234 3.26457 16.4273 3.48384 14.27 3.19002C12.0031 2.83824 9.68292 3.15084 7.59 4.09002C6.48048 4.56247 5.50675 5.30494 4.75747 6.24983C4.00819 7.19473 3.50716 8.31203 3.3 9.50002C3.08926 10.6425 3.11082 11.8157 3.36338 12.9496C3.61594 14.0836 4.09433 15.155 4.77 16.1C4.71 16.31 4.65 16.52 4.6 16.73C4.19384 18.4571 3.99245 20.2259 4 22H6C6.094 20.5479 6.29116 19.1042 6.59 17.68C7.97743 18.4292 9.53335 18.8113 11.11 18.79C12.5805 18.789 14.0358 18.4932 15.39 17.92C23 14.67 22 3.86002 22 3.41002L21.88 2.15002ZM14.61 16.08C12 17.19 8.88 17 7.13 15.63C7.42576 14.6411 7.83164 13.6884 8.34 12.79C8.73519 12.1434 9.20142 11.543 9.73 11C10.2701 10.4512 10.8784 9.97398 11.54 9.58002C12.9071 8.76258 14.4232 8.22547 16 8.00002V7.00002C14.1858 6.93722 12.3827 7.30744 10.74 8.08002C9.06042 8.89957 7.63602 10.1615 6.62 11.73C6.24317 12.3291 5.90901 12.954 5.62 13.6C5.15652 12.4144 5.02514 11.1248 5.24 9.87002C5.38077 8.99156 5.7429 8.1634 6.29225 7.46359C6.8416 6.76378 7.56008 6.21536 8.38 5.87002C9.57561 5.31118 10.8802 5.0243 12.2 5.03002C12.82 5.03002 13.43 5.09002 14.07 5.14002C16.0743 5.39863 18.1093 5.27992 20.07 4.79002C20 7.55002 19.5 14 14.61 16.08Z"
      fill="currentColor"
    ></path>
  </svg>
);

function InternalAudit() {
  const benefitsData = {
    title: "Internal Audit Transformation",
    description:
      "Our Internal Audit Transformation services help optimize IA strategies, structures, talent, and technologies to align with Global Internal Audit Standards and leading practices.",
    benefits: [
      {
        icon: <LeafIcon />,
        title: "Current Setup Assessment",
        description:
          "Assessing your current internal audit setup, identifying opportunities, pain points, and gaps versus expected capabilities.",
      },
      {
        icon: <LeafIcon />,
        title: "Strategy and Charter Redesign",
        description:
          "Redesigning IA strategy, charter, risk assessment processes, and KPIs to address emerging business risks and priorities.",
      },
      {
        icon: <LeafIcon />,
        title: "Organizational Enhancement",
        description:
          "Evaluating organisational positioning, reporting lines, relationship building, and resource mix to enhance IA impact.",
      },
      {
        icon: <LeafIcon />,
        title: "Skills Development",
        description:
          "Implementing competency models and training programs to close skills gaps around data analytics, digital audits, and soft skills.",
      },
      {
        icon: <LeafIcon />,
        title: "Modern Audit Techniques",
        description:
          "Introducing modern internal audit techniques like dynamic risk assessment and impact-based audits.",
      },
      {
        icon: <LeafIcon />,
        title: "Technology and Analytics Leveraging",
        description:
          "Leveraging automation, data visualization, and advanced analytics to gain efficiency, insights, and value.",
      },
      {
        icon: <LeafIcon />,
        title: "Infrastructure Upgrading",
        description:
          "Upgrading technology infrastructure to enable remote auditing and real-time risk visibility.",
      },
      {
        icon: <LeafIcon />,
        title: "Stakeholder Collaboration",
        description:
          "Establishing collaborative dynamics with management, the board, and across lines of defence.",
      },
      {
        icon: <LeafIcon />,
        title: "Transformation Monitoring",
        description:
          "Monitoring transformation success and emerging opportunities to evolve IA capabilities.",
      },
    ],
  };

  return (
    <div>
      <DynamicLandingHero
        title="Internal Audit"
        subtitle="Optimize your internal audit function to proactively meet the needs of tomorrow."
        button1={{ path: "/contact", label: "Contact Us" }}
        button2={{ path: "/contact", label: "Learn More" }}
      />
      <Benefits {...benefitsData} />
      <Call
        imgSrc="/assets/call.png"
        title="Elevate Your IA Capabilities"
        paragraph="Our proven Internal Audit Transformation methodology delivers an IA function aligned to today's risks and positioned to proactively meet the needs of tomorrow. Contact us to learn how we can assist in transforming your internal audit strategies and operations."
        buttonTitle="Get in Touch"
        buttonPath="/contact"
      />
      <How />
      <ImgCompo
        img="/assets/Business/Picture1.png"
        title="Purpose-driven approach"
        description="With a purpose-driven approach, IA becomes a proactive strategic advisor in enabling ethical, sustainable growth rather than a reactive compliance function."
      />
      <Why />
      <ImageGrid />
    </div>
  );
}
export default InternalAudit;
