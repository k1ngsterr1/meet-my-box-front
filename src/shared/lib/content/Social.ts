import type { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import {
  faInstagram,
  faWhatsapp,
  faFacebookMessenger,
} from "@fortawesome/free-brands-svg-icons";

export interface ISocialLink {
  name: string;
  to: string;
  icon: IconDefinition;
}

export const socialLinks: ISocialLink[] = [
  { name: "Instagram", to: "https://www.instagram.com", icon: faInstagram },
  { name: "WhatsApp", to: "https://wa.me/1234567890", icon: faWhatsapp },
  {
    name: "Messenger",
    to: "https://www.messenger.com",
    icon: faFacebookMessenger,
  },
];
