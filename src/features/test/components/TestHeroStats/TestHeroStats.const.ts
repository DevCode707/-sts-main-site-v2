import type { StatConfig } from "./TestHeroStats";

export const testHeroStats: StatConfig[] = [
  {
    id: "sales",
    end: 75,
    suffix: "%",
    labelLines: ["Clients increase sales"],
  },
  {
    id: "projects",
    end: 120,
    labelLines: ["Successfully delivered projects"],
  },
  {
    id: "years",
    end: 3,
    suffix: "+",
    labelLines: ["Years average clients partnership"],
  },
  {
    id: "countries",
    end: 20,
    labelLines: ["Countries, US, UK, EU market"],
  },
];
