"use client";

import clsx from "clsx";

type TabType = "main" | "side";

interface TabMenuProps {
  activeTab: TabType;
  onTabChange: (tab: TabType) => void;
  mainCount?: number;
  sideCount?: number;
}

export default function TabMenu({ activeTab, onTabChange, mainCount = 0, sideCount = 0 }: TabMenuProps) {
  return (
    <div className="flex justify-center gap-x-4 sm:gap-x-6 md:gap-x-8 mb-8">
      <button
        onClick={() => onTabChange("main")}
        className={clsx(
          "text-md font-mono font-bold transition-colors",
          activeTab === "main"
            ? "text-white"
            : "text-rockblue-500 hover:text-rockblue-50"
        )}
        data-umami-event="main-tab-button"
      >
        Main{mainCount > 0 && ` (${mainCount})`}
      </button>
      <button
        onClick={() => onTabChange("side")}
        className={clsx(
          "text-md font-mono font-bold transition-colors",
          activeTab === "side"
            ? "text-white"
            : "text-rockblue-500 hover:text-rockblue-50"
        )}
        data-umami-event="side-tab-button"
      >
        Side{sideCount > 0 && ` (${sideCount})`}
      </button>
    </div>
  );
}

