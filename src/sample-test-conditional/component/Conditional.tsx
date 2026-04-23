interface ConditionalProps {
  num: number;
}

export function LearningConditional({ num }: ConditionalProps) {
  return (
    <div>
      {num > 2 ? "lebih dari 2" : "kurang dari 2"}
    </div>
  );
}