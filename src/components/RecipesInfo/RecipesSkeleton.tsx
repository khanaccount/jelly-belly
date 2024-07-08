import React from "react";
import ContentLoader from "react-content-loader";

const RecipesSkeleton: React.FC = () => (
  <ContentLoader
    speed={2}
    width={288}
    height={330}
    viewBox="0 0 288 290"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <rect x="0" y="0" rx="0" ry="0" width="288" height="400" />
  </ContentLoader>
);

export default RecipesSkeleton;
