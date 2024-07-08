import React from "react";
import ContentLoader from "react-content-loader";

const BeansSkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={290}
    height={832}
    viewBox="0 0 290 832"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="290" height="832" />
  </ContentLoader>
);

export default BeansSkeleton;
