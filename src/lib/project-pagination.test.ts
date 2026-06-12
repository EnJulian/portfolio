import { describe, it, expect } from "vitest";
import {
  clampPage,
  getPaginatedSlice,
  getTotalPages,
} from "@/lib/project-pagination";

describe("project pagination", () => {
  const items = ["a", "b", "c", "d", "e", "f", "g"];

  it("calculates total pages", () => {
    expect(getTotalPages(7, 6)).toBe(2);
    expect(getTotalPages(3, 6)).toBe(1);
    expect(getTotalPages(0, 6)).toBe(1);
  });

  it("returns the correct slice for a page", () => {
    expect(getPaginatedSlice(items, 1, 6)).toEqual(["a", "b", "c", "d", "e", "f"]);
    expect(getPaginatedSlice(items, 2, 6)).toEqual(["g"]);
  });

  it("clamps invalid page numbers", () => {
    expect(clampPage(0, 2)).toBe(1);
    expect(clampPage(5, 2)).toBe(2);
    expect(clampPage(2, 2)).toBe(2);
  });
});
