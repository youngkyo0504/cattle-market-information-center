import React from "react";

function lazyWithPreload(
  factory: () => Promise<{
    default: React.ComponentType<any>;
  }>
) {
  const Component = React.lazy(factory);
  factory();
  return Component;
}

export default lazyWithPreload;
