import Link from "next/link";
import { IconType } from "react-icons";
import { motion } from "motion/react";

import { SiInstagram, SiLeetcode, SiWhatsapp } from "react-icons/si";
import { PiTelegramLogo } from "react-icons/pi";
import { FaGithub, FaLinkedinIn, FaTwitter } from "react-icons/fa6";

import { selfData } from "@/constant";

export const ContactSocials = () => {
  const socialLinks = [
    {
      Icon: FaGithub,
      link: `https://github.com/${selfData.socials_username.github}`,
      initial: -10,
    },
    {
      Icon: FaLinkedinIn,
      link: `https://www.linkedin.com/in/${selfData.socials_username.linkedin}`,
      initial: 10,
    },
    {
      Icon: SiInstagram,
      link: `https://instagram.com/${selfData.socials_username.instagram}`,
      initial: -10,
    },
    {
      Icon: SiWhatsapp,
      link: `https://api.whatsapp.com/send?phone=${selfData.socials_username.whatsapp}&text=Hi%20Yash,%20I%20found%20your%20portfolio%20and%20would%20like%20to%20connect!`,
      initial: -10,
    },
    {
      Icon: FaTwitter,
      link: `https://twitter.com/${selfData.socials_username.twitter}`,
      initial: 10,
    },
  ];

  return (
    <ul className="flex mt-12 space-x-4">
      {socialLinks.map((social, index) => (
        <ContactSocialItem
          key={index}
          Icon={social.Icon}
          link={social.link}
          initial={social.initial}
        />
      ))}
    </ul>
  );
};

const ContactSocialItem = ({
  Icon,
  link,
  initial,
}: {
  Icon: IconType;
  link: string;
  initial: number;
}) => {
  return (
    <motion.li
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: initial }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 400,
        damping: 10,
      }}
      whileHover={{
        scale: 1.1,
      }}
      className="bg-purple-700 text-slate-300 hover:bg-slate-400 hover:text-purple-700 h-10 w-10 rounded-full flex items-center justify-center shrink-0"
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center"
      >
        <Icon className="text-slate-300 hover:text-purple-700 w-6 h-6" />
      </Link>
    </motion.li>
  );
};
