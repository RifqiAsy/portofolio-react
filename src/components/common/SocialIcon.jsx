import { 
  FaGithub, 
  FaInstagram, 
  FaLinkedin, 
  FaEnvelope 
} from "react-icons/fa";

const icons = {
  github: FaGithub,
  instagram: FaInstagram,
  linkedin: FaLinkedin,
  email: FaEnvelope,
};

export default function SocialIcon({ type }) {
  const Icon = icons[type];

  if (!Icon) return null;

  return (
    <a
      href="#"
      className="w-11 h-11 flex items-center justify-center
                 rounded-full border text-gray-600
                 hover:text-blue-600 hover:border-blue-600
                 transition"
      aria-label={type}
    >
      <Icon size={20} />
    </a>
  );
}
