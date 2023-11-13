import React, { forwardRef } from "react";

export const Item = forwardRef(
  ({ index, faded, style, link, id, ...props }, ref) => {
    const inlineStyles = {
      opacity: faded ? "0.2" : "1",
      transformOrigin: "0 0",
      height: index === 0 ? 336 : 150,
      gridRowStart: index === 0 ? "span 2" : null,
      gridColumnStart: index === 0 ? "span 2" : null,
      backgroundImage: `url("${link}")`,
      borderRadius: "8px",
      ...style,
    };
    return (
      <>
        <div className="dragover" style={inlineStyles} {...props} ref={ref}>
          <span className="number">{index}</span>
        </div>
      </>
    );
  }
);
