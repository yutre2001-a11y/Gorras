import * as SliderPrimitive from '@radix-ui/react-slider';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SliderProps {
  value: number[];
  onValueChange: (value: number[]) => void;
  min: number;
  max: number;
  step?: number;
  label?: string;
  unit?: string;
  className?: string;
}

export function Slider({ value, onValueChange, min, max, step = 1, label, unit, className }: SliderProps) {
  return (
    <div className={twMerge('space-y-2', className)}>
      {label && (
        <div className="flex justify-between items-center">
          <label className="text-sm font-medium text-[#eff1f4]">{label}</label>
          <span className="text-sm text-[#0a90ff] font-semibold">
            {value[0]}{unit}
          </span>
        </div>
      )}
      <SliderPrimitive.Root
        className="relative flex items-center select-none touch-none w-full h-5"
        value={value}
        onValueChange={onValueChange}
        min={min}
        max={max}
        step={step}
      >
        <SliderPrimitive.Track className="relative h-1 w-full bg-[#252a34] rounded-full grow">
          <SliderPrimitive.Range className="absolute h-full bg-[#0a90ff] rounded-full" />
        </SliderPrimitive.Track>
        <SliderPrimitive.Thumb
          className="block w-5 h-5 bg-[#0a90ff] rounded-full hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#0a90ff] transition-colors"
          aria-label="Thumb"
        />
      </SliderPrimitive.Root>
    </div>
  );
}
