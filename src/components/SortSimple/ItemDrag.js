import React, { forwardRef } from "react";

export const Item = forwardRef(({ id, ...props }, ref) => {
  return (
    <>
      <div className="dragover" {...props} ref={ref}>
        {id}
      </div>
    </>
  );
});
