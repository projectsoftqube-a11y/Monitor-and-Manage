"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaShieldAlt, FaUserEdit, FaClipboardList, FaShareAlt, FaDatabase, FaUsers, FaChevronRight } from "react-icons/fa";
import Footer from "@/components/layout/Footer";

const policyPoints = [
  {
    id: "user-consent",
    title: "User Consent",
    icon: FaShieldAlt,
    content: [
      "1. By using the services provided by Guard Monitor & Manage Sdn Bhd (here in after referred as Monitor & Manage) the user consents to the collection and/or usage and/or sharing of data under the Privacy Policy and agree to all the terms and conditions."
    ]
  },
  {
    id: "policy-updates",
    title: "Policy Updates",
    icon: FaUserEdit,
    content: [
      "2. The user consents to the changes on the privacy policy upon using the service subsequent to an update.",
      "3. Monitor & Manage may and/or will modify the privacy policy from time to time and a notice will be provided in regards to the changes in the mobile app and/or web portal. By continuing to use the app and/or web portal upon receiving the notice of any amendments and/or changes, the User consents to the latest privacy policy."
    ]
  },
  {
    id: "information-collection",
    title: "Information Collection",
    icon: FaClipboardList,
    content: [
      "4. Monitor & Manage may collects information’s such as user’s name, company name, contact details of the user, correspondence address of the user (including e-mail address). These details may be obtained when the user registers to use the App and/or web portal.",
      "5. Personal data may be obtained when the user lodges any complaint and/or feedback to Monitor & Manage regarding the app and/or web portal."
    ]
  },
  {
    id: "purpose-of-collection",
    title: "Purpose of Collection",
    icon: FaDatabase,
    content: [
      "6. The collected information will be used by Monitor & Manage to verify the identity of the user, to verify financial worthiness, preventing illegal activities, to smoothen process of communication, to provide update regarding the app, to investigate, respond and/or defend the company from any legal action and/or claims arising in the future, for any other purposes that is required and/or permitted by law, regulation, guidelines.",
      "7. The information’s collected are also to enable Monitor & Manage to comply with the legal requirements, auditing purposes, analysing of data, and future researches done by Monitor & Manage and/or purposes required by the governing laws, regulations guidelines and relevant authorities."
    ]
  },
  {
    id: "data-sharing-disclosure",
    title: "Data Sharing & Disclosure",
    icon: FaShareAlt,
    content: [
      "8. Monitor & Manage may and/or be required to provide the details collected from the user to law enforcement agencies, organizations that may be our agents, contractors, service providers and/or advisers and/or business associates, government agencies",
      "9. Monitor & Manage will obtain and collect personal data of the users for as long as needed. Those Obtained data may be used by Monitor & Manage as it requires and/or deemed fit."
    ]
  },
  {
    id: "third-party-consent",
    title: "Third-Party Consent",
    icon: FaUsers,
    content: [
      "10. Security Company’s and/or Branch Managers are required to provide information’s about the users and update Monitor & Manage if there are any changes and/or incorrect information. In the event the Security Company and/or Branch Manager must provide information about a third party, they must obtain prior consent from the third party before providing the information to the company."
    ]
  }
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState(policyPoints[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for fixed header

      // Find the current active section
      for (let i = policyPoints.length - 1; i >= 0; i--) {
        const section = document.getElementById(policyPoints[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(policyPoints[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      // @ts-ignore
      if (window.lenis) {
        // @ts-ignore
        window.lenis.scrollTo(element, { offset: -120, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 selection:bg-primary/20">
      {/* Premium Hero Section */}
      <div className="relative bg-slate-950 pb-20 overflow-hidden pt-36 lg:pt-48 border-b border-slate-900">
        <div className="absolute inset-0">
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-primary/20 to-transparent blur-3xl transform -skew-x-12"></div>
          <div className="absolute top-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-blue-600/20 to-transparent blur-3xl transform skew-x-12"></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        <div className="w-full px-6 lg:px-12 relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              How we collect, use, and protect your data to provide a secure operational environment.
            </p>
            <div className="mt-8 inline-flex items-center bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full px-6 py-3 text-sm text-slate-300 shadow-2xl">
              <span className="w-2.5 h-2.5 rounded-full bg-green-500 mr-3 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]"></span>
              Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', year: 'numeric' })}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Layout */}
      <div className="container mx-auto px-6 max-w-[1520px] py-16 md:py-24 relative z-20">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">

          {/* Sticky Sidebar TOC */}
          <div className="w-full lg:w-1/3 xl:w-1/4 hidden lg:block">
            <div className="sticky top-32 glass-dark rounded-3xl p-8 border border-slate-700 shadow-premium">
              <h3 className="text-white font-heading font-bold mb-6 uppercase tracking-wider text-sm flex items-center gap-2">
                <FaClipboardList className="text-primary" /> Contents
              </h3>
              <nav className="space-y-1">
                {policyPoints.map((point) => (
                  <a
                    key={point.id}
                    href={`#${point.id}`}
                    onClick={(e) => scrollToSection(e, point.id)}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium ${activeSection === point.id
                      ? "bg-primary text-white shadow-md"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    <span className={`transition-transform duration-300 ${activeSection === point.id ? "scale-100" : "scale-0 w-0 opacity-0"}`}>
                      <FaChevronRight className="w-3 h-3" />
                    </span>
                    {point.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-full lg:w-2/3 xl:w-3/4 max-w-4xl">
            {policyPoints.map((point, index) => (
              <motion.div
                key={point.id}
                id={point.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-8 group last:mb-0"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <point.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading tracking-tight">
                    {point.title}
                  </h2>
                </div>

                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-premium border border-slate-100/50 relative overflow-hidden">
                  {/* Subtle decorative accent */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-accent opacity-20"></div>

                  <div className="prose prose-slate prose-lg max-w-none text-slate-600 leading-relaxed pl-4">
                    {point.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="mb-4 last:mb-0">{paragraph}</p>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
      <Footer />
    </div>
  );
}
