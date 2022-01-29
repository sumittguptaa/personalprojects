import React from "react"
import "./Main.css"
import Chart from "../charts/Chart"
import download from "./download.jpg"
import { useSelector } from "react-redux"
const Main = () => {
    const {authData} = useSelector((state)=> state.authReducer)
    console.log(authData)
    return (
        <main >
            <div className="main__container">
                <div className="main__title" >
                    <img src={download} alt="Title_Image" />
                    <div className="main__greeting" >
                        <h1>Hello {authData?.result.name}</h1>
                        <p>Welcome to your Admin Dashboard</p>
                    </div>
                </div>
                <div className="main__cards" >
                    <div className="card" >
                        <i className="fa fa-user-o fa-2x text-lightblue" ></i>
                        <div className=".card__inner" >
                            <p className="text-primary-p">Number of Subscribers</p>
                            <span className="font-bold text-title" >587</span>
                        </div>
                    </div>
                    <div className="card" >
                        <i className="fa fa-calendar fa-2x text-red" ></i>
                        <div className=".card__inner" >
                            <p className="text-primary-p">Times of Watching</p>
                            <span className="font-bold text-title" >2467 hrs</span>
                        </div>
                    </div>
                    <div className="card" >
                        <i className="fa fa-video-camera fa-2x text-yellow" ></i>
                        <div className=".card__inner" >
                            <p className="text-primary-p">Number of Videos</p>
                            <span className="font-bold text-title" >45</span>
                        </div>
                    </div>
                    <div className="card" >
                        <i className="fa fa-thumbs-up fa-2x text-green" ></i>
                        <div className=".card__inner" >
                            <p className="text-primary-p">Number of Likes</p>
                            <span className="font-bold text-title" >587</span>
                        </div>
                    </div>
                </div>
                <div className="charts" >
                    <div className="charts__left" >
                        <div className="charts__left_title" >
                            <div>
                                <h1>Daily Reports</h1>
                                <p>Gorakhpur,Uttar Pradesh</p>
                            </div>
                            <i className="fa fa-usd" ></i>
                        </div>
                        <Chart/>
                    </div>
                    <div className="charts__right" >
                        <div className="charts__right__title" >
                            <div>
                                <h1>Stats Report</h1>
                                <p>Gorakhpur ,Uttar Pradesh</p>
                            </div>

                            <i className="fa fa-line-chart"></i>
                        </div>
                        <div className="charts__right__cards" >
                            <div className="card1" >
                                <h1>Income</h1>
                                <p>50,000 Rs</p>
                            </div>
                            <div className="card2" >
                                <h1>Sales</h1>
                                <p>50,000 Rs</p>
                            </div>
                            <div className="card3" >
                                <h1>Users</h1>
                                <p>50,000 Rs</p>
                            </div>
                            <div className="card4" >
                                <h1>Orders</h1>
                                <p>50,000 Rs</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    )
}
export default Main