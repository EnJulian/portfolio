"use client";

import * as React from "react";
import { RESUME_DATA } from "@/data/resume-data";
import { useToastContext } from "@/components/ui/toast";
import { ResumePreviewDialog } from "@/components/resume-preview-dialog";
import { Kbd } from "@/components/ui/kbd";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from "@/components/ui/command";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links: _links }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);
  const [search, setSearch] = React.useState("");
  const { toast } = useToastContext();

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((open) => !open);
      }
    };

    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const downloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Resume_Julian_A.pdf";
    link.download = "/Resume_Julian_A.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 hidden border-t border-border bg-background p-1 text-center text-xs text-muted-foreground print:hidden md:block">
        Press <Kbd><span className="text-xs">⌘</span>K</Kbd> or{" "}
        <Kbd><span className="text-xs">Ctrl</span>K</Kbd> to access the command
        menu
      </div>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput
          placeholder="Type a command or search..."
          value={search}
          onValueChange={setSearch}
        />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                setIsModalOpen(true);
              }}
            >
              <span>View Resume</span>
              <CommandShortcut>V</CommandShortcut>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                downloadResume();
              }}
            >
              <span>Download Resume</span>
              <CommandShortcut>D</CommandShortcut>
            </CommandItem>
          </CommandGroup>

          <CommandGroup heading="Contact">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                copyToClipboard(RESUME_DATA.contact.email);
                toast({
                  title: "Copied!",
                  description: "Email address copied to clipboard",
                  variant: "success",
                  duration: 3000,
                  loading: false,
                });
              }}
            >
              <span>Copy Email</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.location.href = `mailto:${RESUME_DATA.contact.email}`;
              }}
            >
              <span>Send Email</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                copyToClipboard(RESUME_DATA.contact.tel);
                toast({
                  title: "Copied!",
                  description: "Phone number copied to clipboard",
                  variant: "success",
                  duration: 3000,
                  loading: false,
                });
              }}
            >
              <span>Copy Phone Number</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.location.href = `tel:${RESUME_DATA.contact.tel}`;
              }}
            >
              <span>Call Phone Number</span>
            </CommandItem>
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>

      <ResumePreviewDialog open={isModalOpen} onOpenChange={setIsModalOpen} />
    </>
  );
};
