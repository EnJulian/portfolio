"use client";

import { useState, useEffect, useCallback } from "react";

// Create a simple event system
type Listener = (isOpen: boolean) => void;
const listeners = new Set<Listener>();

// Singleton state
let isMenuOpenGlobal = false;

// Function to broadcast state changes
const broadcastState = (newState: boolean) => {
  isMenuOpenGlobal = newState;
  listeners.forEach(listener => listener(newState));
};

export function useMobileMenu() {
  // Local state that reflects the global state
  const [isMenuOpen, setLocalState] = useState(isMenuOpenGlobal);

  // Subscribe to changes
  useEffect(() => {
    const handleChange = (newState: boolean) => {
      setLocalState(newState);
    };

    listeners.add(handleChange);
    return () => {
      listeners.delete(handleChange);
    };
  }, []);

  // Function to update the global state
  const setIsMenuOpen = useCallback((newState: boolean) => {
    broadcastState(newState);
  }, []);

  return { isMenuOpen, setIsMenuOpen };
}