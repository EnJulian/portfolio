import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { SurfaceCard } from "@/components/ui/surface-card";

describe("SurfaceCard", () => {
  it("renders a link when href is provided", () => {
    render(
      <SurfaceCard href="https://example.com" aria-label="Visit Example">
        Example content
      </SurfaceCard>,
    );

    const link = screen.getByRole("link", { name: "Visit Example" });
    expect(link).toHaveAttribute("href", "https://example.com");
    expect(link).toHaveAttribute("target", "_blank");
    expect(link).toHaveAttribute("rel", "noopener noreferrer");
    expect(screen.getByText("Example content")).toBeInTheDocument();
  });
});
