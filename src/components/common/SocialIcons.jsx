import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";

const icons = {
  github: FaGithub,
  linkedin: FaLinkedinIn,
  email: FaEnvelope,
};

export default function SocialIcons({ name }) {
  const Icon = icons[name];
  if (!Icon) return null;
  return <Icon aria-hidden="true" />;
}
