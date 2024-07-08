import React, { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import axios from "axios";
import HistorySkeleton from "./HistorySkeleton";
import s from "./index.module.scss";

interface Milestone {
  id: number;
  year: number;
  description: string;
}

export const HistoryInfo: React.FC = () => {
  const [milestonesData, setMilestonesData] = useState<Milestone[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const fetchMilestones = async () => {
    try {
      const response = await axios.get("https://jellybellywikiapi.onrender.com/api/mileStones", {
        params: {
          pageIndex: page,
          pageSize: 10,
        },
      });
      const newMilestones = response.data.items;
      setMilestonesData((prev) => [...prev, ...newMilestones]);
      setHasMore(newMilestones.length > 0);
      setPage((prev) => prev + 1);
    } catch (error) {
      console.error("Error fetching milestones data:", error);
    }
  };

  useEffect(() => {
    fetchMilestones();
  }, []);

  return (
    <section className={s.history}>
      <h1>Beans History Milestones</h1>
      <InfiniteScroll
        dataLength={milestonesData.length}
        next={fetchMilestones}
        hasMore={hasMore}
        loader={
          <div className={s.skeletonFacts}>
            {Array.from({ length: 5 }).map((_, index) => (
              <HistorySkeleton key={index} />
            ))}
          </div>
        }
        endMessage={
          <p style={{ textAlign: "center", fontSize: "52px", marginTop: "40px" }}>
            No more milestones to show
          </p>
        }
      >
        <div className={s.historyList}>
          {milestonesData.map((milestone, index) => (
            <div key={index} className={s.historyCard}>
              <h2>{milestone.year}</h2>
              <p>{milestone.description}</p>
            </div>
          ))}
        </div>
      </InfiniteScroll>
    </section>
  );
};
