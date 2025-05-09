"use client";

import * as React from "react";
import Modal from "react-modal";

Modal.setAppElement("html");

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "@/components/ui/command";

interface Props {
  links: { url: string; title: string }[];
}

export const CommandMenu = ({ links }: Props) => {
  const [open, setOpen] = React.useState(false);
  const [isModalOpen, setIsModalOpen] = React.useState(false);

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

  const previewDocument = () => {
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="fixed bottom-0 left-0 right-0 border-t border-gray-800 p-1 text-center text-xs bg-black text-gray-400 print:hidden">
        Press{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-700 bg-gray-900 px-1.5 font-mono text-xs text-gray-300 opacity-100">
          <span className="text-xs">⌘</span>K
        </kbd>{" "}
        or{" "}
        <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border border-gray-700 bg-gray-900 px-1.5 font-mono text-xs text-gray-300 opacity-100">
          <span className="text-xs">Ctrl</span>K
        </kbd>{" "}
        to access the command menu
      </div>
      <CommandDialog 
        open={open} 
        onOpenChange={setOpen}
      >
        <CommandInput placeholder="Type a command or search..." className="text-white" />
        <CommandList>
          <CommandEmpty>No results found.</CommandEmpty>
          <CommandGroup heading="Actions">
            <CommandItem
              onSelect={() => {
                setOpen(false);
                window.print();
              }}
              className="text-gray-300 hover:bg-gray-900 hover:text-white"
            >
              <span>Print</span>
            </CommandItem>
            <CommandItem
              onSelect={() => {
                setOpen(false);
                previewDocument();
              }}
              className="text-gray-300 hover:bg-gray-900 hover:text-white"
            >
              <span>View Resume</span>
            </CommandItem>
          </CommandGroup>
          <CommandGroup heading="Links">
            {links.map(({ url, title }) => (
              <CommandItem
                key={url}
                onSelect={() => {
                  setOpen(false);
                  window.open(url, "_blank");
                }}
                className="text-gray-300 hover:bg-gray-900 hover:text-white"
              >
                <span>{title}</span>
              </CommandItem>
            ))}
          </CommandGroup>
          <CommandSeparator />
        </CommandList>
      </CommandDialog>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        contentLabel="Document Preview"
        style={{
          overlay: {
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            zIndex: 1000
          },
          content: {
            top: '50%',
            left: '50%',
            right: 'auto',
            bottom: 'auto',
            marginRight: '-50%',
            transform: 'translate(-50%, -50%)',
            width: '80%',
            height: '80%',
            background: '#111',
            border: '1px solid #333',
            borderRadius: '4px',
            padding: '10px',
          },
        }}
      >
        <div className="flex justify-between items-center mb-2">
          <h3 className="text-white text-sm">Resume</h3>
          <button 
            onClick={() => setIsModalOpen(false)}
            className="px-3 py-1 text-sm text-gray-300 bg-gray-800 hover:bg-gray-700 rounded transition-colors"
          >
            Close
          </button>
        </div>
        <iframe
          src="/Julian-Amoah-Resume.pdf"
          width="100%"
          height="95%"
          style={{ border: "none" }}
        />
      </Modal>
    </>
  );
};
