import React, { useRef, useState, useEffect } from "react";
import clsx from "clsx";

interface ScrollPickerProps {
  options: string[];
  onChange: (val: string) => void;
  height?: number;
}

const ScrollPicker: React.FC<ScrollPickerProps> = ({
  options,
  onChange,
  height = 40,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        top: index * height,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = () => {
    if (!containerRef.current) return;
    const scrollTop = containerRef.current.scrollTop;
    const index = Math.round(scrollTop / height);
    setSelectedIndex(index);
    onChange(options[index]);
  };

  useEffect(() => {
    scrollToIndex(0);
    onChange(options[0]);
  }, []);

  return (
    <div className="relative w-full">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        className="overflow-y-scroll scrollbar-hidden snap-y"
        style={{ height: height * 3 }}
      >
        <div className="flex flex-col items-center">
          {/* Top padding to center first item */}
          <div style={{ height }} />
          {options.map((opt, idx) => (
            <div
              key={idx}
              className={clsx(
                "snap-center text-center transition-all duration-200",
                idx === selectedIndex
                  ? "text-white text-md lg:text-lg my-1"
                  : "text-[var(--text-4)] text-sm"
              )}
              style={{ height }}
            >
              {opt}
            </div>
          ))}
          {/* Bottom padding to center last item */}
          <div style={{ height }} />
        </div>
      </div>

      {/* Center line */}
      <div
        className="absolute top-1/4 left-0 right-0 pointer-events-none"
        style={{ height }}
      />
    </div>
  );
};

export default ScrollPicker;
