import React from "react";

interface NestedProps {
  children: React.ReactNode;
}

export function LearningNested({ children }: NestedProps) {
  return (
    <div>
      {children}
    </div>
  );
}