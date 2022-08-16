import React from "react";
import "./styles.css";
import FoodItem from "../FoodItem";
import { useParams } from "react-router-dom";
import Loading from "../Loading";
const ListItem = () => {
  const { food__category } = useParams();
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  let category = typeof food__category !== "undefined" ? food__category : "";
  React.useEffect(() => {
    setLoading(true);
    fetch(
      `https://615c3a9bc298130017735ff6.mockapi.io/freshfood?category=${category}`
    )
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [category]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="food-item-wrap all">
          <FoodItem data={data} />
        </div>
      )}
    </>
  );
};
export default ListItem;
