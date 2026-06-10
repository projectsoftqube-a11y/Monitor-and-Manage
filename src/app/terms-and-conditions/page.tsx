"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaFileContract, FaKey, FaCreditCard, FaBalanceScale, FaUserShield, FaServer, FaChevronRight, FaClipboardList, FaTools } from "react-icons/fa";
import Footer from "@/components/layout/Footer";

const termsSections = [
  {
    id: "general-agreement",
    title: "1. General Agreement",
    icon: FaFileContract,
    points: [
      "Guard Monitor & Manage Sdn Bhd (hereinafter referred as Monitor & Manage) hereby agrees to provide the service by way of (Monitor & Manage App) Application (herein after referred to as The Mobile App/Web Portal) to the User once the User has subscribed as specified and defined in the Form.",
      "Unless otherwise expressly agreed in writing or as specified in or modified by the applicable schedule, these following terms shall apply and/or govern all the rights and/or obligations of the parties.",
      "Monitor & Manage reserves all rights to vary and/or modify and/or add and/or delete and/or change and/or amend and/or revoke any terms required at any time and such changes shall be effective once they are posted in the Mobile App/web portal. It is the Users responsibility to read, understand, review the Terms and Condition from time to time. By continuing to use the Mobile App after the date of amendments have taken place, it is deemed that the User have read and understood and agreed to the new terms and condition.",
      "Unless otherwise expressly agreed in writing and/or as specified in the applicable laws, the Security Company and/or Property Management may only use and/or apply the services provided by the Monitor & Manage through the Mobile App and/or Web Portal in accordance to the Malaysian applicable laws and for the use and lawful purpose only. The user is neither permitted to sell, resell, hire, lease (extending to sub lease), rent, offer, license (extending to sub-license) the service and any portion thereto whether for consideration or otherwise to any third party and/or unauthorized persona for any unlawful, illegal, fraudulent, improper use in breach of any applicable laws and/or regulations, notwithstanding tampering, altering, adjusting, removing abusing and/or affecting the App and/or its services.",
      "In the event of any disputes arising from using the Mobile App/webportal, the governing laws will be Malaysian Laws. In any legal proceedings commenced by Monitor & Manage against the Security Company and/or Property Management, all legal costs and/or expenses incurred by Monitor & Manage as a result of a legal proceedings shall be recovered from the User.",
      "In the event any provision of this terms and condition is held by a court of law of competent jurisdiction to be contrary to the applicable laws, the remaining provisions of this terms and condition shall remain in full force and effect.",
      "In the event there are any new laws imposed and/or any amendments to the current laws of Malaysia which affects the terms and condition and/or the app and/or the services provided by Monitor & Manage, then notwithstanding anything herein, the terms and conditions herein will be deemed to be amended to such extent as necessary to allow all parties to comply with the new laws and/or amendments.",
      "All terms and conditions contained herein together with the registration form shall together form an agreement between Monitor & Manage and the Security Company and/or Property Management."
    ]
  },
  {
    id: "access-registration",
    title: "2. Access & Registration",
    icon: FaKey,
    points: [
      "Upon completion of the e-form provided by the Monitor & Manage and it has been accepted by the management of the company, the user shall be given access to the Mobile App/Web Portal and its services as listed in the app. The activation process will take 24 hours (working day). In the event the Security Company and/or Property Management wishes to add new guards the activation will take twenty-four (24) hours (working day) to be completed. The activation of the user will only be done by Monitor & Manage upon confirmation of payment made to Monitor & Manage",
      "All users that access the service by way of web portal must access it using their designated password, meanwhile all users that access the service by way of mobile portal will be able to access the services by way of one-time password (OTP).",
      "Property Management will be able to access the Web Portal provided and also be able to register four (4) mobile users without any payment.",
      "Property Management are required to provide the Property Management and Corporate Information only such as email id and contact details. Property Management are not allowed to provide any other personal details such as contact number of persons in charge and/or email address of person in charge.",
      "In the event the Property Management registered the account and/or user and or ID under an individual’s name and in the future the Property Management decides to amend and/or alter and/or change the details provided, the Property Management must bear all the cost of the process as a new user must be created and any password reset cannot be done by Monitor & Manage",
      "in the event Monitor & Manage discovers that a user to be using a fake and/or illegal and/or unauthorized details and/or profile, Monitor & Manage will immediately terminate the users access to the app and all services and any payment provided by the user to Monitor & Manage will not be refunded. Monitor & Manage may commence legal action against the user and all cost resulted from this will be borne by the user."
    ]
  },
  {
    id: "payments-billing",
    title: "3. Payments & Billing",
    icon: FaCreditCard,
    points: [
      "Users will be given one (1) month free trial and at the end of the free trial, users are required to pay a registration fee of Ringgit Malaysia (RM) 100.00, for registration of every new user (this includes Security Company and/or Branch Managers as well). Monitor & Manage will accept all payments via online banking transfer account number 8881051139828 (Am Bank) and by way of cheque only payable under the name of Guard Monitor & Manage Sdn Bhd. Monitor & Manage will not accept any payment by way of cash.",
      "Monitor & Manage shall not accept any form of payments from a third-party account holder on behalf of the Main User (security Company and/or Branch manager). All payments must be made from the Main User (security Company and/or Branch manager) which is registered to use the services provided by Monitor & Manage.",
      "All users are required to pay RM 39.90 per guard for every month as a fee for using the services provided by the Monitor & Manage. All charges exclude applicable SST, or prevailing service taxes. The user must use the service provided in the app until the service period selected ends. All payments are non-refundable, once activated the user will have an option to use the service provided by Monitor & Manage for a term of 3 months/6 months/12 months.",
      "By selecting the option for payment 6 months once, the company shall provide discount of 10% amounting to RM 35.90 and by selecting the option for payment 12 months once, the company shall provide a discount of 30% amounting to RM 27.90. These discounts are applicable to both Web Portal Users and also Mobile App Users.",
      "All payments by the User to Monitor & Manage must be made within two (2) weeks of issuance of the invoice. In the event the user decides to dis-continue the service provided by the App/Web Portal and or make payments required by Monitor & Manage after completion of the trial period, the user’s access and or profile will be restricted and or blocked and or deactivated and or deleted. All costs to reactivate the users access and or profile shall be borne by the user.",
      "User must notify Monitor & Manage by seven (7) working days before the expiry and/or completion of the selected payment package in the event the user wishes to add more users. The user must notify the Monitor & Manage by way of writing only. In the event there are no payments made by the User for using the App/Web Portal, Monitor & Manage may deactivate the user from using the services provided. All costs incurred in re-activating the User’s access will be borne by the User.",
      "Monitor & Manage will issue a tax invoice to the users for the package selected by the users and the users shall pay and continue to pay the charges by the due date as stated in the invoices. Any issues as a result of the issuance of an invoice must be raised by way of writing within seven (7) workings days to Monitor & Manage from the date of receiving the invoice. The user must specify the dispute clearly to Monitor & Manage and upon receiving the dispute from the user, Monitor & Manage shall investigate the dispute if the dispute is justified and provide a solution for the dispute raised by the user.",
      "The user acknowledges and agrees to its obligations to pay all payments due to Monitor & Manage and all payment shall not be waived or diminished because of the user’s failure or negligence on not checking or requesting and/or clarifying the nature of the service provided. The user further acknowledge that the user shall be responsible to request from Monitor & Manage for invoices in the event the user did not receive any for the billing period."
    ]
  },
  {
    id: "hardware-device-leasing",
    title: "4. Hardware & Equipment Terms",
    icon: FaTools,
    points: [
      "The Client irrevocably agrees to subscribe to the Service for a fixed minimum period of twelve (12) months (“Initial Term”) commencing from the service activation date. The Client shall not terminate, suspend, or withdraw from the Service during the Initial Term except as expressly permitted herein.",
      "All devices, hardware, and accessories supplied remain the absolute and exclusive property of the Company at all times. The Client shall: not sell, lease, transfer, pledge, or assign the equipment; not modify, dismantle, relocate, reverse engineer, or tamper with the equipment; use the equipment solely for its intended operational purpose.",
      "In the event of termination by the Client prior to expiry of the Initial Term, the Client shall immediately pay to the Company: All remaining subscription fees for the unexpired contract period in full which shall become immediately due and payable as liquidated damages and not as a penalty. No refund shall be granted under any circumstances.",
      "The Client bears full responsibility for the equipment while in its custody.",
      "The Client shall indemnify and reimburse the Company for: loss or theft, physical damage, electrical damage, water exposure, vandalism, misuse or negligence. Replacement charges shall be invoiced at the Company’s prevailing replacement value.",
      "Upon expiry of the Initial Term, the Agreement shall automatically renew on a month-to-month basis unless terminated by either party with a minimum of thirty (30) days written notice.",
      "Any breach of this Agreement entitles the Company to: immediate service termination, recovery of equipment, recovery of outstanding fees, legal action and recovery of legal costs."
    ]
  },
  {
    id: "user-obligations",
    title: "5. User Obligations & Compliance",
    icon: FaBalanceScale,
    points: [
      "The User hereby agrees that Monitor & Manage shall not be held accountable and/or responsible and/or liable for any damage resulted as a result of using The Mobile App and/or Web Portal and/or its services provided due to the fault of the User and/or its affiliates, employees, officers, agents, workers, branch managers and others.",
      "The User hereby agrees to assume full responsibility and/or liability for all the losses, cost incurred, expenses arising in connection with or related to the Mobile App and/or Web Portal and/or its services.",
      "The User shall maintain in confidence all information and data relating to the Mobile App and/or Web Portal and/or the services provided, marketing and promotion plans and other operations and/or information about Monitor & Manage which are disclosed to the User whether by way of oral or by way of writing and whether before, on or after the date of this Terms and Condition.",
      "The User shall ensure that all confidential information’s stated above are only used in relation to the Mobile App and/or Web Portal and/or the services provided by the Mobile App and/or Web Portal and shall not without prior consent, disclose such information to any third party and/or use it for any other purposes.",
      "Monitor & Manage reserves its rights to collect and process the users personal data in accordance to Privacy Policy. The Privacy policy applies to all of the services provided by the Mobile App and/or Web Portal and/or the Company and its terms are made a part of this agreement by this reference.",
      "Where applicable the Security Company and/or Property Management hereby agrees and consents to Monitor & Manage in collecting, using, processing and disclosing personal data.",
      "The Security Company and/or Property Management by consenting to the Terms and Condition hereby acknowledges that Monitor & Manage may disclose personal data of other individuals to you in the course of your use of the Mobile App and/or the services provided by Monitor & Manage. The User represent and warrant that the User will only use such data for the purposes for which it was disclosed by Monitor & Manage and not for any other unauthorized purposes. In the event the personal data were used for any unauthorized purposes, Monitor & Manage will not be held liable and/or responsible."
    ]
  },
  {
    id: "responsibilities-liabilities",
    title: "6. Responsibilities & Liabilities",
    icon: FaUserShield,
    points: [
      "Monitor & Manage will not be involved in any quotation tenders.",
      "Monitor & Manage will not take any responsibility for the activities and/or conducts of the security guards and or any other persons.",
      "Monitor & Manage will not be involved in any payment and/or issues and/or conflicts between the user and the management body.",
      "Monitor & Manage will not be involved in any disputes and/or issues and/or problems between the management companies and the security guards.",
      "It is the responsibility of the Monitor & Manage to add the Security Company and/or Branch Managers particulars and creating a user.",
      "It is the responsibility of the Security Company and/or Branch Managers to add Person In charge and Security Guard particulars and creating a user for Person in Charge and Security Guards. It is the responsibility of the Security Company and/or Branch Manager for adding and/or restricting and or blocking the details of Person In charge and Security Guards. Monitor & Manage will only be able to deactivate the user. Any mistake as a result from creating a user by the Security Company and/or Branch Manager, Monitor & Manage will not be held accountable and/or responsible. All cost incurred by Monitor & Manage as a result of rectifying this shall be borne by the User (Security Company).",
      "It is the responsibility of the Property Management to add their own users. Monitor & Manage will not be involved in adding and/or deactivating and/or deleting the user.",
      "Any mistake as a result from creating an account and/or profile by the Property Management, Monitor & Manage will not be held accountable and/or responsible. All cost incurred by Monitor & Manage as a result of rectifying this shall be borne by the User (Property management).",
      "Working and patrolling schedule can only be created by Security Company and/or Branch Manager, the created schedules will take eight (8) hours to appear and/or reflect in the App and/or system. Monitor & Manage will not be held responsible to amend and/or vary and/or modify and/or delete the schedules."
    ]
  },
  {
    id: "service-operations",
    title: "7. Service Operations & Support",
    icon: FaServer,
    points: [
      "The users who do not access the Mobile app/web portal and/or who are deemed not active after completion of one (1) year from the date of registration shall be restricted and/or blocked and/or deactivated and/or deleted. All costs to reactivate the users access and or profile shall be borne by the user.",
      "Monitor & Manage hereby states that Monitor & Manage does not warrant and/or guarantee that the Mobile App and/or web portal the services provided shall be error free or uninterrupted. Monitor & Manage shall not be responsible for any unavoidable, unavailability and/or inaccessibility of the services provided that may arise from or due to the circumstances which is beyond Monitor & Manages controls.",
      "In the event the User discovers and/or finds that there is interruption in the Mobile App and/or its services, it is the duty of the User to immediately notify Monitor & Manage of such discovery. Monitor & Manage shall do its best to restore and/or rectify the service as soon as possible upon receiving the notification from the User.",
      "the operational hours of Monitor & Manage in regarding the app and/or any query will be Monday to Friday 10.00 am till 10.00 pm, Saturdays 10.00 am till 2.00 pm. Monitor & Manage will be closed on Sundays and public holidays, any query sent during these times will be entertained and or answered and or resolved on the next working day.",
      "Any new user and/or renewal activation will be done within twenty-four hours (24) of working day after submission."
    ]
  }
];

export default function TermsAndConditionsPage() {
  const [activeSection, setActiveSection] = useState(termsSections[0].id);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150; // offset for fixed header

      for (let i = termsSections.length - 1; i >= 0; i--) {
        const section = document.getElementById(termsSections[i].id);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(termsSections[i].id);
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
          <div className="absolute top-0 -left-1/4 w-1/2 h-full bg-gradient-to-r from-blue-600/20 to-transparent blur-3xl transform -skew-x-12"></div>
          <div className="absolute top-0 -right-1/4 w-1/2 h-full bg-gradient-to-l from-indigo-600/20 to-transparent blur-3xl transform skew-x-12"></div>
          <div className="absolute inset-0 bg-[url('/noise.png')] opacity-[0.03] mix-blend-overlay"></div>
        </div>

        <div className="w-full px-6 lg:px-12 relative z-10 text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-heading font-bold text-white mb-6 tracking-tight">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-slate-400 text-lg md:text-xl max-w-2xl mx-auto font-medium leading-relaxed">
              GUARD MONITOR & MANAGE SDN BHD
            </p>
            <div className="mt-8 inline-flex items-center bg-slate-900/80 backdrop-blur-md border border-slate-800 rounded-full px-6 py-3 text-sm text-slate-300 shadow-2xl">
              <span className="w-2.5 h-2.5 rounded-full bg-primary mr-3 animate-pulse shadow-[0_0_10px_rgba(37,99,235,0.6)]"></span>
              Read carefully before using the service
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
                {termsSections.map((section) => (
                  <a
                    key={section.id}
                    href={`#${section.id}`}
                    onClick={(e) => scrollToSection(e, section.id)}
                    className={`group flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 text-sm font-medium ${activeSection === section.id
                      ? "bg-primary text-white shadow-md"
                      : "text-slate-300 hover:text-white hover:bg-white/10"
                      }`}
                  >
                    <span className={`transition-transform duration-300 ${activeSection === section.id ? "scale-100" : "scale-0 w-0 opacity-0"}`}>
                      <FaChevronRight className="w-3 h-3" />
                    </span>
                    {section.title}
                  </a>
                ))}
              </nav>
            </div>
          </div>

          {/* Main Content Area */}
          <div className="w-full lg:w-2/3 xl:w-3/4 max-w-4xl">
            {termsSections.map((section) => (
              <motion.div
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="mb-8 group last:mb-0"
              >
                <div className="flex items-center gap-5 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:shadow-md transition-all duration-300">
                    <section.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground font-heading tracking-tight">
                    {section.title}
                  </h2>
                </div>

                <div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-premium border border-slate-100/50 relative overflow-hidden">
                  {/* Subtle decorative accent */}
                  <div className="absolute top-0 left-0 w-1.5 h-full bg-gradient-to-b from-primary to-accent opacity-20"></div>

                  <ul className="space-y-6 pl-4">
                    {section.points.map((point, ptIndex) => (
                      <li key={ptIndex} className="flex items-start gap-4">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2.5 shrink-0 shadow-[0_0_8px_rgba(37,99,235,0.5)]"></div>
                        <p className="text-slate-600 leading-relaxed text-lg">
                          {point}
                        </p>
                      </li>
                    ))}
                  </ul>
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
