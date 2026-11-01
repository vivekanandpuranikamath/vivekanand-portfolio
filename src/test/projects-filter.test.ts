import { describe, expect, it } from "vitest";
import { filterProjects, projects } from "@/data/portfolio";

describe("project filter", () => {
  it("shows both projects under All", () => {
    expect(filterProjects(projects, "All")).toHaveLength(2);
  });

  it("shows only Smart Attendance under Completed", () => {
    expect(filterProjects(projects, "Completed").map((p) => p.title)).toEqual([
      "Smart Attendance Management System",
    ]);
  });

  it("shows only Cravio under In Progress", () => {
    expect(filterProjects(projects, "In Progress").map((p) => p.title)).toEqual([
      "Cravio – Food Delivery Application",
    ]);
  });
});
