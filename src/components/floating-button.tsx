"use client";

import { useState } from "react";
import { IoIosFiling } from "react-icons/io";
import { Button } from "./ui/button";
import { ResumePreviewDialog } from "./resume-preview-dialog";
import { focusRing } from "@/lib/focus-ring";

export default function FloatingButton() {
  const [isModalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button
        className={`fixed bottom-12 right-4 hidden h-12 w-12 rounded-full border border-border bg-secondary shadow-md transition-all duration-200 hover:scale-105 hover:bg-surface-muted md:flex ${focusRing}`}
        onClick={() => setModalOpen(true)}
        aria-label="View resume"
      >
        <IoIosFiling className="h-6 w-6 text-foreground" />
      </Button>

      <ResumePreviewDialog open={isModalOpen} onOpenChange={setModalOpen} />
    </>
  );
}
