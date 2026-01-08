import { ReactNode } from "react";
import { SiAmazon, SiC, SiDatadog, SiElectron, SiElixir, SiGo, SiLaravel, SiNestjs, SiNextdotjs, SiPython, SiReact, SiSupabase, SiTerraform, SiTypescript, SiN8N } from "react-icons/si";
import { VscAzure } from "react-icons/vsc";


export type Technology = "react" | "nest" | "next" | "laravel" | "typescript" | "aws" | "azure" | "golang" | "iot" | "arduino" | "c" | "python" | "ai" | "electron" | "elixir" | "terraform" | "datadog" | "supabase" | "n8n";

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
    icon: () => <VscAzure />
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
  "elixir": {
    key: "elixir",
    name: "Elixir",
    icon: () => <SiElixir className="text-lg" />
  },
  "terraform": {
    key: "terraform",
    name: "Terraform",
    icon: () => <SiTerraform className="text-lg" />
  },
  "datadog": {
    key: "datadog",
    name: "Datadog",
    icon: () => <SiDatadog className="text-lg" />
  },
  "supabase": {
    key: "supabase",
    name: "Supabase",
    icon: () => <SiSupabase className="text-lg" />
  },
  "n8n": {
    key: "n8n",
    name: "N8N",
    icon: () => <SiN8N className="text-lg" />
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

