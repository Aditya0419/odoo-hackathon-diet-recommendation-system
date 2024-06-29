import "./home.css"
import Navbar from "../Navbar/Navbar";
import Recommendation from "./recommendations";


export default function Home() {
    return (
        <>
            <Navbar></Navbar>
            <h1 className="homeHeading">Recommendation For You</h1>
            <Recommendation/>
        </>
    );
}