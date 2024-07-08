import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import SkeletonFact from "./CombinationsSkeleton";
import s from "./index.module.scss";

interface Combination {
  id: number;
  name: string;
  description: string;
  tag: string[];
}

export const CombinationsInfo: React.FC = () => {
  const [combinationsData, setCombinationsData] = useState<Combination[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchCombinations = async () => {
    try {
      const response = await axios.get("https://jellybellywikiapi.onrender.com/api/combinations", {
        params: {
          pageIndex: page,
          pageSize: 10,
        },
      });
      const newCombinations = response.data.items;
      setCombinationsData((prev) => [...prev, ...newCombinations]);
      setHasMore(newCombinations.length > 0);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching combinations data:", error);
    }
  };

  useEffect(() => {
    fetchCombinations();
  }, []);

  return (
    <section className={s.combinations}>
      <h1>Beans Combinations</h1>
      <InfiniteScroll
        dataLength={combinationsData.length}
        next={fetchCombinations}
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
            No more combinations to show
          </p>
        }
      >
        <div className={s.combinationsList}>
          {combinationsData.map((combination, index) => (
            <div key={index} className={s.combinationsCard}>
              <h2>{combination.name}</h2>
              <div className={s.tags}>
                {combination.tag.map((tag, idx) => (
                  <span key={idx} className={s.tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
};
