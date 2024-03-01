// components/RangeSlider.tsx
import React, { useState } from 'react';

interface RangeSliderProps {
  min: number;
  max: number;
  step?: number;
  onChange: (values: number[]) => void;
}

const RangeSlider: React.FC<RangeSliderProps> = ({ min, max, step = 1, onChange }) => {
  const [values, setValues] = useState<number[]>([min, max]);
  const [tooltipValue, setTooltipValue] = useState<number | null>(null);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>, index: number) => {
    const newValue = parseFloat(event.target.value);
    const newValues = [...values];
    newValues[index] = newValue;
    setValues(newValues);
    setTooltipValue(newValue);
    onChange(newValues);
  };

  const handleMouseEnter = () => {
    setTooltipValue(null);
  };

  return (
    <div className="flex items-center gap-4 relative">
      <span>250k</span>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={values[0]}
        onChange={(e) => handleChange(e, 0)}
        onMouseEnter={handleMouseEnter}
        className="range-slider"
      />
      <span>500k</span>
      {tooltipValue !== null && (
        <div className="tooltip">
          <span>{tooltipValue}</span>
        </div>
      )}
      
    </div>
  );
};

export default RangeSlider;
