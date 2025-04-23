import React from "react";
import { MacbookScroll } from "../components/ui/macbook-scroll";

export function MacbookSection() {
  return (
    <div className=" overflow-hidden bg-background w-full">
      <MacbookScroll
        title={
          <span className="text-primary">
            "<span className="text-foreground">A new era of messaging</span>"
          </span>
        }
        src="\telegram_chat_desktop(cropped).jpg"
        showGradient={false}
      />
    </div>
  );
}
