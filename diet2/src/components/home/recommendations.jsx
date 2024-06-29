import { useEffect, useState } from "react";
import axios from "axios";

export default function Recommendation() {
  const [userData, setUserData] = useState();
  const [recommendationData, setRecommendationData] = useState();
  const email = localStorage.getItem("email");
  console.log(email);

  const fetchUserInfo = async () => {
    
      const response = await axios.get(
        "http://localhost:3000/api/auth/get-user-info",
        { email }
      );
      console.log("response",response);
      setUserData(response.data);
      
    
  };

  fetchUserInfo();
  console.log("sasad",userData);
  const fetchRecommendationData = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/getDietRecommendation",
        { userData }
      );
      setRecommendationData(response.data);
    } catch (err) {
      console.log(err);
    }
  };

//   fetchRecommendationData();

  console.log("Recommendation data ::: ", recommendationData);

  return <></>;
}