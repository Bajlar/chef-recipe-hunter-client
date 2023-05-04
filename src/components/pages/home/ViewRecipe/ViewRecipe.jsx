import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

const ViewRecipe = () => {
  const { id } = useParams();

  useEffect(() => {
    fetch(`http://localhost:5000/chefs/${id}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  console.log(id);
  return <div>ViewRecipe page</div>;
};

export default ViewRecipe;