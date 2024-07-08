import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import SkeletonFact from "./RecipesSkeleton";
import s from "./index.module.scss";

interface Recipe {
  id: number;
  name: string;
  description: string;
}

export const RecipesInfo: React.FC = () => {
  const [recipesData, setRecipesData] = useState<Recipe[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchRecipes = async () => {
    try {
      const response = await axios.get("https://jellybellywikiapi.onrender.com/api/recipes", {
        params: {
          pageIndex: page,
          pageSize: 10,
        },
      });
      const newRecipes = response.data.items;
      setRecipesData((prev) => [...prev, ...newRecipes]);
      setHasMore(newRecipes.length > 0);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching recipes data:", error);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <section className={s.recipes}>
      <h1>Beans Recipes</h1>
      <InfiniteScroll
        dataLength={recipesData.length}
        next={fetchRecipes}
        hasMore={hasMore}
        loader={
          <div className={s.skeletonFacts}>
            {Array.from({ length: 5 }).map((_, index) => (
              <SkeletonFact key={index} />
            ))}
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center", fontSize: "52px", marginTop: "40px" }}>
            No more recipes to show
          </p>
        }
      >
        <div className={s.recipesList}>
          {recipesData.map((recipe, index) => (
            <div key={index} className={s.recipesCard}>
              <h2>{recipe.name}</h2>
              <p>{recipe.description}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
};
