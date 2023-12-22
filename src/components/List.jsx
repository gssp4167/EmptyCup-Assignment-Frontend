import React, { useEffect, useState } from "react";
import Card from "./Card";
import { callGetAllItems, callShortlistedItems } from "../api/api";
import Spinner from "./Spinner";

const List = ({ activeMenu }) => {

  const [loading, setLoading] = useState(false)
  const [items, setItems] = useState();

  const getAllItems = async () => {
    setLoading(true);
    const res = await callGetAllItems();
    setItems(res);
    setLoading(false);
  };

  

  const getShortlistedItems = async () => {
    setLoading(true);
    const res = await callShortlistedItems();
    setItems(res);
    setLoading(false);
  };

  

  useEffect(() => {
    if(activeMenu=='shortlisted'){
      getShortlistedItems();
    }
    else{
      getAllItems();
    }
  }, [activeMenu]);

  return (
    <div className="list flex flex-col items-center justify-start">
      {
      loading ? <Spinner/>
      : items?.map((ele) => {
        return <Card item={ele} />;
      })}
      
    </div>
  );
};

export default List;
