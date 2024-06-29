import './searchFood.css'
import SearchBar from './searchBar';
import Navbar from '../Navbar/Navbar';
import { useState } from 'react';
export default function SearchFood() {

    const [data,setData] = useState();

    const getFoodData = async () => {
        try {
            const response = await fetch("http://localhost:3000/api/auth/all-foods", {
                method: "GET",

            });
            const data = await response.json();
            setData(data);
            console.log("food data: ", data);
            
        } catch (error) {
            console.log(error);
        }
    };
    getFoodData();

    return (
        <>
            <Navbar></Navbar>
            <div className="searchbar">
                <SearchBar></SearchBar>
            </div>

            <div className="container grid grid-three-cols">
                {data?.map((curElem, index) => {
                    return (
                        <div className="card" key={index}>
                            <div className="card-img">
                                <img src={curElem.image} alt="our services" width="200" />
                            </div>
                            <div className="card-details">
                                <div className="grid grid-two-cols">
                                    <h2>{curElem.foodname}</h2>
                                    <br />
                                    <p>Iron: {curElem.iron}</p>
                                    <p>Magnesium: {curElem.magnesium}</p>
                                    <p>Phosphorous: {curElem.phosphorus}</p>
                                    <p>Potassium: {curElem.potassium}</p>
                                    <p>Protein: {curElem.protein}</p>
                                    <p>Sodium: {curElem.sodium}</p>
                                    <p>Sugar: {curElem.sugar}</p>
                                    <p>VitaminA: {curElem.vitaminA}</p>
                                    <p>VitaminC: {curElem.vitaminC}</p>
                                    <p>VitaminE: {curElem.vitaminE}</p>
                                    <p>VitaminK: {curElem.vitaminK}</p>
                                    <p>Zinc: {curElem.zinc}</p>


                                </div>
                               
                            </div>
                        </div>
                    );
                })}
            </div>

        </>
    );

}