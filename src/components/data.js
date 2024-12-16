import {
  AdjustmentsHorizontalIcon,
  BuildingStorefrontIcon,
  ChartBarSquareIcon,
  CheckCircleIcon,
  ComputerDesktopIcon,
  FaceSmileIcon,
  PencilIcon,
  UserGroupIcon,
  WrenchIcon,
} from "@heroicons/react/24/solid";

import benefitOneImg from "../../public/img/benefit-one.png";
import benefitTwoImg from "../../public/img/benefit-two.png";
import benefitThreeImg from "../../public/img/hero.png";

const benefitOne = {
  title: "Realtime Tenant Communication",
  desc: "Effortlessly communicate with prospective and current tenants.",
  image: benefitOneImg,
  bullets: [
    {
      title: "Answer prospective tenants' queries",
      desc: "Help prospective tenants find their dream home with ease. Automatically handle questions like “What homes have 3 bedrooms?” or similar inquiries.",
      icon: <FaceSmileIcon />,
    },
    {
      title: "Support current tenants",
      desc: "Provide instant answers to common questions like “Where is the main broker located?” and more, ensuring a seamless tenant experience.",
      icon: <ChartBarSquareIcon />,
    },
    {
      title: "Monitor and intervene",
      desc: "Use your dashboard to oversee all conversations, step in when needed, and keep your FAQs updated for maximum efficiency.",
      icon: <ComputerDesktopIcon />,
    },
  ],
};

const benefitTwo = {
  title: "Automate Maintenance Requests",
  desc: "Streamline maintenance management with intelligent automation.",
  image: benefitTwoImg,
  bullets: [
    {
      title: "Triage problems intelligently",
      desc: "Candor asks targeted questions, checks the knowledge base for warranty details, and gathers all relevant information about the issue.",
      icon: <WrenchIcon />,
    },
    {
      title: "Generate and summarize tickets",
      desc: "Automatically create detailed tickets on your dashboard, complete with a problem summary, cost estimate, and approval status—putting you in control of the next steps.",
      icon: <AdjustmentsHorizontalIcon />,
    },
    {
      title: "Coordinate with vendors and tenants",
      desc: "Effortlessly find qualified vendors and schedule a suitable time with tenants, ensuring a smooth and hassle-free resolution.",
      icon: <UserGroupIcon />,
    },
  ],
};

const benefitThree = {
  title: "Simplified Lease-Up Process",
  desc: "Automate and accelerate your tenant onboarding experience.",
  image: benefitThreeImg,
  bullets: [
    {
      title: "Validate applications effortlessly",
      desc: "Ensure submitted documents are accurate and complete. Take care of the back-and-forth communication with tenants to collect missing information.",
      icon: <CheckCircleIcon />,
    },
    {
      title: "Streamline lease preparation",
      desc: "Once approved, tenant data is seamlessly integrated into a lease template, which is sent for e-signature—saving time and reducing manual errors.",
      icon: <PencilIcon />,
    },
    {
      title: "Prepare move-in documentation",
      desc: "Automatically generate key pick-up forms and other essential documents, ensuring tenants are ready for a smooth move-in experience on their scheduled date.",
      icon: <BuildingStorefrontIcon />,
    },
  ],
};

export { benefitOne, benefitThree, benefitTwo };
