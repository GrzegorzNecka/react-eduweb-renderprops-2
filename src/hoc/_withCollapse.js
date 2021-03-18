import React from "react";

const withCollapse = WrapComponent => {
  return () => <WrapComponent isCollapsed={true} />;
};

export default withCollapse;
