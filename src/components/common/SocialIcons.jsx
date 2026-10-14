import { FaGithub, FaLinkedinIn, FaArrowRight } from "react-icons/fa";
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";

const icons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
  download: FiDownload,
  rightArrow: FaArrowRight,
  location: FaLocationDot,
};

export default function SocialIcons({ name }) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon aria-hidden="true" />;
}
