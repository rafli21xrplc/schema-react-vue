interface LearningPropsType {
  text: string;
}

export function LearningProps({ text }: LearningPropsType) {
  return (
    <h1>{text.toUpperCase()}</h1>
  );
}