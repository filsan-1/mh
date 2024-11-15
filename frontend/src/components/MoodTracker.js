import React, { useEffect, useState } from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";

const MoodTracker = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("/journals/")
      .then((response) => response.json())
      .then((data) =>
        setData(
          data.map((item) => ({
            date: new Date(item.date_created).toLocaleDateString(),
            mood: item.mood,
          }))
        )
      );
  }, []);

  return (
    <LineChart width={500} height={300} data={data}>
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="date" />
      <YAxis />
      <Tooltip />
      <Line type="monotone" dataKey="mood" stroke="#8884d8" />
    </LineChart>
  );
};

export default MoodTracker;