import { ReactNode } from "react";
import { SiAmazon, SiAzuredevops, SiC, SiElectron, SiGo, SiLaravel, SiNestjs, SiNextdotjs, SiPython, SiReact, SiTypescript } from "react-icons/si";

export type Technology = "react" | "nest" | "next" | "laravel" | "typescript" | "aws" | "azure" | "golang" | "iot" | "arduino" | "c" | "python" | "ai" | "electron";

export interface TechItem {
  key: Technology;
  name: string;
  icon?: () => ReactNode;
  iconClassName?: string;
}

export const technologyMap: Record<Technology, TechItem> = {
  "react": {
    key: "react",
    name: "React",
    icon: () => <SiReact />
  },
  "nest": {
    key: "nest",
    name: "NestJS",
    icon: () => <SiNestjs />
  },
  "next": {
    key: "next",
    name: "Next.js",
    icon: () => <SiNextdotjs />
  },
  "laravel": {
    key: "laravel",
    name: "Laravel",
    icon: () => <SiLaravel />
  },
  "typescript": {
    key: "typescript",
    name: "TypeScript",
    icon: () => <SiTypescript />
  },
  "aws": {
    key: "aws",
    name: "AWS",
    icon: () => <SiAmazon />
  },
  "azure": {
    key: "azure",
    name: "Azure",
    icon: () => <SiAzuredevops />
  },
  "golang": {
    key: "golang",
    name: "Go",
    icon: () => <SiGo />
  },
  "c": {
    key: "c",
    name: "C",
    icon: () => <SiC className="text-md" />
  },
  "python": {
    key: "python",
    name: "Python",
    icon: () => <SiPython className="text-md" />
  },
  "electron": {
    key: "electron",
    name: "Electron",
    icon: () => <SiElectron className="text-lg" />
  },
  "iot": {
    key: "iot",
    name: "IoT"
  },
  "arduino": {
    key: "arduino",
    name: "Arduino"
  },
  "ai": {
    key: "ai",
    name: "AI"
  }
};

