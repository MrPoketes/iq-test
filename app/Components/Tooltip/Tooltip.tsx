import {
  Tooltip as AriakitTooltip,
  TooltipAnchor,
  TooltipArrow,
  useTooltipState,
} from "ariakit/tooltip";
import clsx from "clsx";
import React from "react";

interface TooltipProps {
  content: React.ReactElement;
  children: React.ReactElement;
}

export const Tooltip: React.FC<TooltipProps> = ({
  children,
  content,
  ...props
}) => {
  const tooltip = useTooltipState();
  return (
    <>
      <TooltipAnchor state={tooltip}>
        {({ onMouseEnter, onMouseLeave, ...tooltipProps }) =>
          React.cloneElement(children, {
            ...tooltipProps,
            ...props,
            // used to show tooltip on disabled components
            onMouseOver: onMouseEnter,
            onMouseOut: onMouseLeave,
          })
        }
      </TooltipAnchor>
      <AriakitTooltip
        portal
        state={tooltip}
        className={clsx(
          "relative z-50 max-w-sm rounded border border-neutral-800 bg-neutral-800 px-2 py-1 text-sm text-white shadow-lg"
        )}
      >
        <TooltipArrow state={tooltip} />
        {content}
      </AriakitTooltip>
    </>
  );
};
