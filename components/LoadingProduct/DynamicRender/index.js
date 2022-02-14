import React from "react";

import useNearScreen from "src/client/hooks/use-near-screen";
import useOnScreen from "src/client/hooks/use-on-screen";

const DynamicRender = ({ children, placeholder, ...rest }) => {
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
export default DynamicRender;
