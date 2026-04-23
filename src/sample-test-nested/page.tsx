import { LearningNested } from "./component/Nested";

export default function SamplePage() {
  return (
    <div>
      <LearningNested>
        <p>Ini adalah children dari LearningNested</p>
      </LearningNested>
    </div>
  );
}   