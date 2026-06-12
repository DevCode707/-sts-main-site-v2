import { TestAmbientDecor } from "./components/TestAmbientDecor";
import { TestBreadcrumbsRow } from "./components/TestBreadcrumbs";
import { TestExpertise } from "./components/TestExpertise";
import { TestHeader } from "./components/TestHeader";
import { TestHero } from "./components/TestHero";
import { TestReveal } from "./components/TestReveal";
import { TestScrollRevealInit } from "./components/TestScrollRevealInit";
import { TestWhyUs } from "./components/TestWhyUs";
import { testPageStyles } from "./TestPage.styles";

export function TestPage() {
  return (
    <div className={testPageStyles.root}>
      <TestScrollRevealInit />
      <TestAmbientDecor />

      <TestHeader />

      <main className={testPageStyles.main}>
        <TestBreadcrumbsRow />
        <TestHero />

        <TestReveal animation="fade-up">
          <TestWhyUs />
        </TestReveal>

        <TestReveal animation="fade-up" delay={40}>
          <TestExpertise />
        </TestReveal>
      </main>
    </div>
  );
}
