import { ambientDecorStyles } from "./TestAmbientDecor.styles";

export function TestAmbientDecor() {
  return (
    <div className={ambientDecorStyles.root} aria-hidden>
      <div className={ambientDecorStyles.primaryGlow} />
      <div className={ambientDecorStyles.secondaryGlow} />
    </div>
  );
}
