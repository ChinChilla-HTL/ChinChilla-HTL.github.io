import { Home, GraduationCap, BriefcaseBusiness, BookOpen } from "lucide-react";
import { ModeToggle } from "@/components/mode-toggle";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { PROFILE } from "@/data/profile";

export default function Navbar() {
  const items = [{ href: "/#home", label: "Home", icon: Home }, { href: "/#education", label: "Education", icon: GraduationCap }, { href: "/#visiting", label: "Visiting experience", icon: BriefcaseBusiness }, { href: PROFILE.scholar, label: "Google Scholar", icon: BookOpen }];
  return <nav aria-label="Main navigation" className="academic-dock">{items.map(item => <Tooltip key={item.label}><TooltipTrigger asChild><a href={item.href} aria-label={item.label} target={item.href.startsWith("https") ? "_blank" : undefined} rel={item.href.startsWith("https") ? "noopener noreferrer" : undefined}><item.icon size={19}/></a></TooltipTrigger><TooltipContent>{item.label}</TooltipContent></Tooltip>)}<span className="dock-divider"/><Tooltip><TooltipTrigger asChild><span><ModeToggle /></span></TooltipTrigger><TooltipContent>Toggle color theme</TooltipContent></Tooltip></nav>;
}
