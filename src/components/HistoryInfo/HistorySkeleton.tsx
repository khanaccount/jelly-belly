import React from "react";
import ContentLoader from "react-content-loader";

const HistorySkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={290}
    height={244}
    viewBox="0 0 290 244"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="288" height="244" />
  </ContentLoader>
);

export default HistorySkeleton;
