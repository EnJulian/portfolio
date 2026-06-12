"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

interface ResumePreviewDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export function ResumePreviewDialog({
  open,
  onOpenChange,
}: ResumePreviewDialogProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="flex h-[85vh] max-w-4xl flex-col gap-2 p-4 sm:p-6">
        <DialogHeader>
          <DialogTitle>Resume</DialogTitle>
        </DialogHeader>
        <iframe
          src="/Resume_Julian_A.pdf"
          title="Resume preview"
          className="min-h-0 flex-1 rounded-md border border-border"
        />
      </DialogContent>
    </Dialog>
  );
}
