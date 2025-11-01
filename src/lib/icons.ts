import type { IconType } from "react-icons";
import { FaGithub, FaLinkedin, FaTelegramPlane, FaViber } from "react-icons/fa";
import { GoWorkflow } from "react-icons/go";
import { HiOutlineGlobeAlt } from "react-icons/hi";
import { PiDeviceMobileCameraBold } from "react-icons/pi";
import { TbLayoutGridAdd } from "react-icons/tb";
import { RiServerLine } from "react-icons/ri";

const iconMap: Record<string, IconType> = {
  HiOutlineGlobeAlt,
  FaLinkedin,
  FaGithub,
  FaTelegramPlane,
  FaViber,
  TbLayoutGridAdd,
  RiServerLine,
  PiDeviceMobileCameraBold,
  GoWorkflow
};

export const resolveIcon = (key: string): IconType => {
  return iconMap[key] ?? HiOutlineGlobeAlt;
};
