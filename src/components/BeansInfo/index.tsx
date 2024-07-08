import React, { useEffect, useState } from "react";
import axios from "axios";
import BeansSkeleton from "./BeansSkeleton";
import s from "./index.module.scss";

interface Bean {
  beanId: number;
  beanName: string;
  groupName: string[];
  ingredients: string[];
  flavorName: string;
  description: string;
  colorGroup: string;
  backgroundColor: string;
  imageUrl: string;
  glutenFree: boolean;
  sugarFree: boolean;
  seasonal: boolean;
  kosher: boolean;
}

export const BeansInfo: React.FC = () => {
  const [beansData, setBeansData] = useState<Bean[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBeans = async () => {
      try {
        const response = await axios.get("https://jellybellywikiapi.onrender.com/api/beans");
        setBeansData(response.data.items);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching beans data:", error);
        setLoading(false);
      }
    };

    fetchBeans();
  }, []);

  return (
    <section className={s.beans}>
      <h1>Beans Information</h1>
      <div className={s.beansList}>
        {loading ? (
          <div className={s.beanDetails}>
            {Array.from({ length: 10 }).map((_, index) => (
              <BeansSkeleton key={index} />
            ))}
          </div>
        ) : (
          beansData.map((bean) => (
            <div key={bean.beanId} className={s.beanCard}>
              <div className={s.beanImage}>
                <img src={bean.imageUrl} alt={bean.flavorName} />
              </div>
              <div className={s.beanDetails}>
                <h2>{bean.beanName}</h2>
                <p>Flavor: {bean.flavorName}</p>
                <p>Group Name: {bean.groupName.join(", ")}</p>
                <p>Description: {bean.description}</p>
                <p>Ingredients: {bean.ingredients.join(", ")}</p>
                <p>Color Group: {bean.colorGroup}</p>
                <p>Background Color: {bean.backgroundColor}</p>
                <p>Gluten Free: {bean.glutenFree ? "Yes" : "No"}</p>
                <p>Sugar Free: {bean.sugarFree ? "Yes" : "No"}</p>
                <p>Seasonal: {bean.seasonal ? "Yes" : "No"}</p>
                <p>Kosher: {bean.kosher ? "Yes" : "No"}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
};
