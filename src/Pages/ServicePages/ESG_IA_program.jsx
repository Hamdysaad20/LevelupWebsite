import React from 'react';
import { FaAngular } from "react-icons/fa6";
import SliderLogos from '../../Components/SliderLogos/SliderLogos';
import Cursal from '../../Components/Cursal/Cursal';
import Hero_Services from '../../Components/Hero_Services';
import Footer from '../../Components/Footer'


const services = [
  {
    title: "ESG Internal Audit (IA) Strategy Development",
    description: "Our service guides you in meticulously planning and scoping your ESG audits, whether conducted separately or integrated. ",
    icon: <FaAngular />,
    data: {
      title: "ESG Internal Audit (IA) Strategy Development",
      discription: "Our service guides you in meticulously planning and scoping your ESG audits, whether conducted separately or integrated. Our strategies aim for consistent usage and standards, encompassing quantitative metrics, industry standards, and other compliance areas. We ensure that your audits align with the latest sustainability practices, providing a robust foundation for comprehensive ESG evaluation.",
      LOTTIEanimationData: "../../assets/images/discussing-business-documents.avif"
    },
  },
  {
    title: "ESG IA Methodology Manual",
    description: "Navigate the evolving ESG landscape confidently with our comprehensive ESG IA Methodology Manual.",
    icon: <FaAngular />,
    data: {
      title: "ESG IA Methodology Manual",
      discription: "Navigate the evolving ESG landscape confidently with our comprehensive ESG IA Methodology Manual. This detailed guide will outline the methodology for conducting ESG audits, addressing the nuances of new governance frameworks such as the Sustainability COSO framework, The EU Corporate Sustainability Due Diligence Directive (CSDDD), and FCA/anti-greenwashing regulations. It serves as a valuable resource for understanding and implementing best practices in ESG auditing.",
      LOTTIEanimationData: "../../assets/images/discussing-business-documents.avif"
    },
  },
  {
    title: "Qualitative Risks and Controls",
    description: "Identifying and managing qualitative risks and controls related to ESG is critical for a thorough audit. ",
    icon: <FaAngular />,
    data: {
      title: "Qualitative Risks and Controls",
      discription: "Identifying and managing qualitative risks and controls related to ESG is critical for a thorough audit. We provide expertise in this area, assisting you in navigating the complex landscape of qualitative considerations associated with Environmental, Social, and Governance factors. This ensures a comprehensive approach to risk management within the ESG context.",
      LOTTIEanimationData: "../../assets/images/discussing-business-documents.avif"
    },
  },
  {
    title: "Requirements Tracking Program",
    description: "Our detailed ESG Internal Audit Checklist ensures comprehensive scope coverage.",
    icon: <FaAngular />,
    data: {
      title: "Requirements Tracking Program",
      discription: "Our detailed ESG Internal Audit Checklist ensures comprehensive scope coverage. Tailored to address the unique aspects of ESG audits, this checklist guarantees that all relevant areas are thoroughly audited, promoting effective evaluation and risk management in line with industry standards and regulatory requirements.",
      LOTTIEanimationData: "../../assets/images/discussing-business-documents.avif"
    },
  },
  {
    title: "Title 5",
    description: "Small Description 5",
    icon: <FaAngular />,
    data: {
      title: "Title",
      discription: "Discription",
      LOTTIEanimationData: "../../assets/images/discussing-business-documents.avif"
    },
  },
  {
    title: "Title 6",
    description: "Small Description 6",
    icon: <FaAngular />,
    data: {
      title: "Title",
      discription: "Discription",
      LOTTIEanimationData: "../../assets/images/handImage.wehttps://media.istockphoto.com/id/1814193775/photo/esg-concept-sustainable-development-goal-ideas-for-sustainable-development-and-green-business.jpg?s=612x612&w=0&k=20&c=oQ2s5snKykDbsq_mjaTr1vuzGPYp7IXZAZWkWYG7CZs=bp"
    },
  },
]


const ESG_IA_program = () => {
  return (
    <div className='pt-[4.5rem] flex flex-col items-center'>
      <Hero_Services title={"ESG IA program"} subtitle={"We provide comprehensive assistance to internal audit (IA) functions in building their ESG capabilities. Our services include the development of an ESG IA strategy and methodology manual, tailored to your organisation's needs. We understand that there is no one-size-fits-all approach, and we adapt our services based on the maturity of your assurance and overall controls environment."} buttonText={"Contact Us"}/>
      <SliderLogos />
      <Cursal services={services}/>
      <Footer />
    </div>
  );
}

export default ESG_IA_program;