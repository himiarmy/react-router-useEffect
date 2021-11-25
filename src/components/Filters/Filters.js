import React, { useState, useEffect } from "react";

const Filters = () => {
  const [selectedTag, setSelectedTag] = useState("All");
  const [inputVal, setInputVal] = useState("");
  let elems = ["All", "Men", "Women", "Kids"];
  useEffect(() => {
    console.log("Я срабатываю при каждом изменении в документе");
  });
  useEffect(() => {
    console.log("Документ загрузился");
  }, []);
  useEffect(() => {
    console.log("Тэг изменился");
  }, [selectedTag]);
  useEffect(() => {
    console.log("Значение инпута изменилось");
  }, [inputVal]);
  return (
    <div className="container mt-3 mb-3 d-flex justify-content-between">
      <div>
        {elems.map((elem, index) => (
          <span
            onClick={() => setSelectedTag(elem)}
            className={
              selectedTag === elem ? "btn btn-warning" : "btn btn-light"
            }
            key={index}
          >
            {elem}
          </span>
        ))}
      </div>
      <input
        value={inputVal}
        onChange={(e) => setInputVal(e.target.value)}
        placeholder="Search..."
      />
    </div>
  );
};

export default Filters;
