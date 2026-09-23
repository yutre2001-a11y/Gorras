import * as SelectPrimitive from '@radix-ui/react-select';
import { ChevronDown } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface SelectProps {
  options: { value: string; label: string }[];
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  className?: string;
}

export function Select({ options, value, onValueChange, placeholder, className }: SelectProps) {
  return (
    <SelectPrimitive.Root value={value} onValueChange={onValueChange}>
      <SelectPrimitive.Trigger
        className={twMerge(
          clsx(
            'inline-flex items-center justify-between gap-2 px-4 py-2 text-sm',
            'bg-[#1a1d26] border border-[#252a34] rounded-full',
            'text-[#eff1f4] hover:border-[#0a90ff]',
            'transition-colors duration-200',
            className
          )
        )}
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon asChild>
          <ChevronDown className="w-4 h-4 text-[#8b98a5]" />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>
      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className="z-50 w-[var(--radix-select-trigger-width)] bg-[#1a1d26] border border-[#252a34] rounded-lg shadow-lg"
          position="popper"
          sideOffset={8}
        >
          <SelectPrimitive.Viewport>
            {options.map((option) => (
              <SelectPrimitive.Item
                key={option.value}
                value={option.value}
                className="relative flex items-center px-4 py-2 text-sm text-[#eff1f4] cursor-pointer hover:bg-[#12141a] data-[highlighted]:bg-[#0a90ff] data-[highlighted]:text-white rounded-md"
              >
                <SelectPrimitive.ItemText>{option.label}</SelectPrimitive.ItemText>
                <SelectPrimitive.ItemIndicator className="absolute right-4 inline-flex items-center">
                  <Check className="w-4 h-4" />
                </SelectPrimitive.ItemIndicator>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
}

function Check({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M7 12L10.5 15.5L17 9"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
