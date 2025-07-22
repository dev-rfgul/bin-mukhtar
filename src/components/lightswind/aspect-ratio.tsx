
import * as React from "react";
import { cn } from "../lib/utils";

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The aspect ratio to maintain (width/height) */
  ratio?: number;
  /** Predefined aspect ratios for common use cases */
  preset?: "square" | "video" | "portrait" | "widescreen" | "ultrawide" | "golden";
  /** Whether to apply rounded corners */
  rounded?: boolean;
  /** Whether to show a border */
  bordered?: boolean;
  /** Optional object-fit style for child elements */
  objectFit?: "cover" | "contain" | "fill" | "none" | "scale-down";
}

const AspectRatio = React.forwardRef<HTMLDivElement, AspectRatioProps>(
  ({ 
    className, 
    ratio: propRatio, 
    preset,
    rounded = false,
    bordered = false,
    objectFit,
    style, 
    ...props 
  }, ref) => {
    // Predefined aspect ratios
    const presetRatios = {
      square: 1,             // 1:1
      video: 16/9,           // 16:9
      portrait: 3/4,         // 3:4
      widescreen: 16/9,      // 16:9
      ultrawide: 21/9,       // 21:9
      golden: 1.618          // Golden ratio
    };

    // Determine the final ratio to use
    const ratio = propRatio || (preset ? presetRatios[preset] : 1);

    return (
      <div
        ref={ref}
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: `${(1 / ratio) * 100}%`,
          ...style,
        }}
        className={cn(
          "overflow-hidden",
          rounded && "rounded-md",
          bordered && "border  ",
          className
        )}
        {...props}
      >
        {props.children && (
          <div 
            className={cn(
              "absolute inset-0 h-full w-full",
              objectFit && `[&>img]:object-${objectFit} [&>video]:object-${objectFit}`
            )}
          >
            {props.children}
          </div>
        )}
      </div>
    );
  }
);
AspectRatio.displayName = "AspectRatio";

export { AspectRatio };
