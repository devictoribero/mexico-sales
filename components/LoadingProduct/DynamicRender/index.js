import React from "react";

import useNearScreen from "./use-near-screen";
import useOnScreen from "./use-on-screen";

export const DynamicRender = ({ children, placeholder, ...rest }) => {
  const [isNear, outerRef] = useNearScreen({ offset: 200 + "px" });
  const [isIntersecting] = useOnScreen();

  if (isIntersecting || isNear) {
    return children;
  }

  return (
    <div ref={outerRef} {...rest}>
      {placeholder}
    </div>
  );
};
