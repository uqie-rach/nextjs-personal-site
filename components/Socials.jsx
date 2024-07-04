import Link from "next/link";

import { FaGithub, FaLinkedin, FaYoutube } from "react-icons/fa";

const socials = [
  { icon: <FaGithub />, path: "https://github.com/uuqkun" },
  { icon: <FaLinkedin />, path: "https://www.linkedin.com/in/achmadfrachmadie/" },
  { icon: <FaYoutube />, path: "" },
];
const Socials = ({ containerStyles, iconStyles }) => {
  return (
    <div className={containerStyles}>
      {socials.map((item, i) => {
        return (
          <Link key={i} href={item.path} className={iconStyles} target="_blank">
            {item.icon}
          </Link>
        );
      })}
    </div>
  );
};

export default Socials;
