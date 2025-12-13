'use client';

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  onToggle: () => void;
}

function AccordionItem({ question, answer, isOpen, onToggle }: AccordionItemProps) {
  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <button
        onClick={onToggle}
        className="w-full py-4 text-left flex items-center justify-between gap-4 focus:outline-none rounded-lg px-2 -mx-2"
        aria-expanded={isOpen}
      >
        <span className="font-semibold text-[var(--color-text-dark)] pr-4">
          {question}
        </span>
        <ChevronDown
          className={`h-5 w-5 text-[var(--color-text)] flex-shrink-0 transition-transform duration-200 ${
            isOpen ? 'transform rotate-180' : ''
          }`}
        />
      </button>
      {isOpen && (
        <div className="pb-4 px-2">
          <p className="text-[var(--color-text)] leading-relaxed">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}

interface AccordionProps {
  items: Array<{ question: string; answer: string }>;
  defaultOpen?: boolean;
}

export default function Accordion({ items, defaultOpen = false }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(defaultOpen ? 0 : null);

  const handleToggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-0">
      {items.map((item, index) => (
        <AccordionItem
          key={index}
          question={item.question}
          answer={item.answer}
          isOpen={openIndex === index}
          onToggle={() => handleToggle(index)}
        />
      ))}
    </div>
  );
}

