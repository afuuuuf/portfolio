import { icons } from "./techIconMap";

export default function TechIcon({ name }) {
  const Icon = icons[name];
  return Icon ? <Icon aria-hidden="true" /> : null;
}
