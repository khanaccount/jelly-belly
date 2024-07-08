import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import FactSkeleton from "./FactSkeleton";
import s from "./index.module.scss";

interface Fact {
  id: number;
  title: string;
  description: string;
}

export const FactsInfo: React.FC = () => {
  const [factsData, setFactsData] = useState<Fact[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchFacts = async () => {
    try {
      const response = await axios.get("https://jellybellywikiapi.onrender.com/api/facts", {
        params: {
          pageIndex: page,
          pageSize: 10,
        },
      });
      const newFacts = response.data.items;
      setFactsData((prev) => [...prev, ...newFacts]);
      setHasMore(newFacts.length > 0);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching facts data:", error);
    }
  };

  useEffect(() => {
    fetchFacts();
  }, []);

  return (
    <section className={s.factsInfo}>
      <h1>Beans Facts</h1>
      <InfiniteScroll
        dataLength={factsData.length}
        next={fetchFacts}
        hasMore={hasMore}
        loader={
          <div className={s.skeletonFacts}>
            {Array.from({ length: 10 }).map((_, index) => (
              <FactSkeleton key={index} />
            ))}
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center", fontSize: "52px", marginTop: "40px" }}>
            No more facts to show
          </p>
        }
      >
        <div className={s.factsLists}>
          {factsData.map((fact, index) => (
            <div key={index} className={s.factCard}>
              <h2>{fact.title}</h2>
              <p>{fact.description}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
};
