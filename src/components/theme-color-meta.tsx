"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ThemeColorMeta() {
  const { resolvedTheme } = useTheme();
  const [color, setColor] = useState("#000000");

  useEffect(() => {
    setColor(resolvedTheme === "light" ? "#FFFCF0" : "#000000");
  }, [resolvedTheme]);

  return (
    <>
      <meta name="theme-color" content={color} />
      <meta name="msapplication-TileColor" content={color} />
    </>
  );
}
