import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faWhatsapp,
  faFacebookMessenger,
  faTelegram,
} from "@fortawesome/free-brands-svg-icons";

export interface ISocialLink {
  name: string;
  to: string;
  icon: IconDefinition;
}

export const socialLinks: ISocialLink[] = [
  {
    name: "Instagram",
    to: "https://www.instagram.com/meet_my_box?igsh=MWoyaWNyODY5Mm9yYw%3D%3D&utm_source=qr",
    icon: faInstagram,
  },
  { name: "WhatsApp", to: "https://wa.me/1234567890", icon: faWhatsapp },
  {
    name: "Telegram",
    to: "https://t.me/meetmbox",
    icon: faTelegram,
  },
];
