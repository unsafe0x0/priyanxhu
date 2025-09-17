"use client";

interface CurrentlyLearningProps {
  learningItems: string[];
}

export default function CurrentlyLearning({
  learningItems,
}: CurrentlyLearningProps) {
  return (
    <section className="space-y-3">
      <h2 className="text-2xl tracking-wide font-medium">Currently Learning</h2>
      <ul className="space-y-1 text-sm text-neutral-300">
        {learningItems.map((item, index) => (
          <li key={index} className="text-sm text-neutral-300 leading-relaxed">
            {item}
          </li>
        ))}
      </ul>
    </section>
  );
}
