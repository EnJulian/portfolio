import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { Footer } from "@/components/footer";
import { mobileCtaSafeAreaClassName } from "@/components/mobile-cta";

describe("Footer", () => {
  it("reserves safe area for the fixed mobile CTA", () => {
    render(<Footer />);

    expect(screen.getByRole("contentinfo").className).toContain(
      mobileCtaSafeAreaClassName.split(" ")[0],
    );
  });
});
