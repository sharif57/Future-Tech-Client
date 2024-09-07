/* eslint-disable react/no-unescaped-entities */
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

import {  RiExchangeFundsLine } from "react-icons/ri";
import { MdChangeCircle } from "react-icons/md";
import { Link } from "react-router-dom";

const Profile = () => {
    const { user } = useContext(AuthContext)

    const [items, setItems] = useState([]);

    useEffect(() => {
        axios(`http://localhost:5000/posts/${user?.email}`)
            .then(res => {
                setItems(res.data)
            })
    }, [user])

    const [isAlternateLayout, setIsAlternateLayout] = useState(false);

    // Function to toggle between layouts
    const toggleLayout = () => {
        setIsAlternateLayout(!isAlternateLayout);
    };


    return <div className="">
        <div
            className="group mx-auto hover:saturate-100 saturate-0 transition-[filter] relative w-[248px] h-[318px] bg-[#FAEDE4] font-['Robot_Flex'] border-b-2 border-b-[#F04E29]">
            <img
                className="group-hover:rounded-br-[100px] rounded-br-[0px] h-[200px] w-full bg-cover object-cover transition-[border-radius]"
                src={user?.photoURL} />
            <p className="m-[5px] text-[#262626] text-base">{user?.displayName}</p>
            <p className="m-[5px] text-[#777674] text-xs">{user?.email}</p>
            <svg
                className="group-hover:opacity-100 opacity-0 transition-opacity absolute right-[10px] bottom-[10px]"
                xmlns="http://www.w3.org/2000/svg" width="45" height="64" viewBox="0 0 45 64" fill="none">
                <path d="M5.67927 0.685928C5.66838 0.658706 5.65749 0.636925 5.65749 0.636925L3.81168 1.12696C5.55403 11.7281 0.588324 15.4905 0.375974 15.6484L1.49217 17.2056C1.69363 17.0641 5.49414 14.2654 6.03318 7.14353C9.0333 14.2545 13.0244 20.1731 17.1298 24.774C17.059 24.8774 16.9882 24.9754 16.9229 25.0789C14.3311 29.0645 14.0861 34.651 16.1933 41.6912C18.6271 49.8203 24.5239 57.748 32.3754 63.4434L33.5025 61.8916C25.9886 56.4358 20.3477 48.8729 18.0336 41.1358C16.1388 34.8089 16.2913 29.6526 18.4692 26.2114C21.7035 29.5927 24.9432 32.1518 27.7636 33.8288C33.8945 37.4659 38.2232 36.377 40.2541 35.4078C42.4919 34.3406 44.1254 32.375 44.414 30.4094C44.4575 30.1099 44.4793 29.805 44.4793 29.5001C44.4793 27.5509 43.5864 25.5853 41.9039 23.8756C38.4628 20.3691 32.713 18.7465 26.5276 19.5306C23.1518 19.9607 20.3695 21.2457 18.3603 23.2821C14.4455 18.8554 10.645 13.1655 7.77554 6.34314C9.95348 8.22706 13.2476 10.2199 18.1425 11.5266L18.638 9.67539C9.24565 7.16531 6.28364 1.94369 5.75005 0.838382C5.73371 0.783935 5.71193 0.729488 5.6956 0.669594L5.67382 0.669594L5.67927 0.685928ZM26.7672 21.4308C33.3555 20.5923 38.2014 22.8411 40.5372 25.215C42.0509 26.7559 42.7533 28.5037 42.5192 30.1317C42.3558 31.2425 41.3431 32.767 39.4319 33.6763C37.744 34.4822 34.1069 35.3642 28.7437 32.179C25.9886 30.5455 22.8197 28.03 19.6617 24.6923C21.7797 22.5035 24.6056 21.6976 26.7726 21.4254L26.7672 21.4308Z" fill="#F04E29" />
            </svg>
        </div>
        <div>
            {/* Header Section */}
            <div className="bg-[#191919] py-16 px-16">
                <div className="container mx-auto">
                    <div className="flex justify-between items-center">
                        <div>
                            <button className="bg-[#333333] p-2 rounded-md text-white font-medium">A Knowledge Treasure Trove</button>
                            <h1 className="text-5xl font-semibold text-white mt-3">Explore FutureTech's In-Depth Blog Posts</h1>
                        </div>
                        <div>
                            <button className="btn flex gap-2" onClick={toggleLayout}>

                                {isAlternateLayout ? <MdChangeCircle className="size-14 text-yellow-400" /> : <RiExchangeFundsLine className="size-14 text-yellow-400" />}
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Conditional Layout Section */}
            {isAlternateLayout ? (
                <div className="grid grid-cols-1 lg:grid-cols-2  gap-8 mt-12">
                    {items.map((item) => (
                        <div key={item._id} className="relative inline-block">


                            {/* Profile Info Popover */}
                            <div
                                data-popover="profile-info-popover"
                                className="absolute mt-2  whitespace-normal break-words rounded-lg border border-blue-gray-50 bg-[#141414] p-4 font-sans text-sm font-normal text-blue-gray-500 shadow-lg shadow-blue-gray-500/10 focus:outline-none"
                            >
                                <div className="flex items-center justify-between gap-4 mb-2">
                                    <img
                                        src={item.image}
                                        alt="Tania Andrew"
                                        className="relative inline-block object-cover object-center w-12 h-12 rounded-full"
                                    />
                                    <Link to={`/postDetails/${item._id}`} className="btn btn-warning">Read</Link>
                                </div>
                                <h6 className="flex items-center gap-2 mb-2 font-sans text-base antialiased font-medium leading-relaxed tracking-normal text-blue-gray-900">
                                    <span>{user?.displayName}</span> •{" "}
                                    <a className="text-sm text-blue-gray-700" href="#">
                                        {item.category}
                                    </a>
                                </h6>
                                <p className="block font-sans text-sm antialiased font-normal leading-normal text-white">
                                    {item.title.slice(0, 130)}
                                </p>
                                <div className="flex items-center gap-8 pt-4 mt-6 border-t border-blue-gray-50">
                                    <p className="flex items-center gap-1 font-sans text-xs antialiased font-normal text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            aria-hidden="true" className="-mt-0.5 h-3.5 w-3.5">
                                            <path d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"></path>
                                            <path
                                                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"></path>
                                        </svg>
                                        Bangladesh
                                    </p>
                                    <a href="#" className="flex items-center gap-1 font-sans text-xs antialiased font-normal text-gray-200">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                            aria-hidden="true" className="-mt-0.5 h-3.5 w-3.5">
                                            <path
                                                d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z">
                                            </path>
                                        </svg>
                                        Global Tech
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
                    {items.map((item) => (
                        <div key={item._id} className="relative flex flex-col overflow-hidden rounded-xl bg-[#141414] text-white bg-clip-border shadow-md">
                            <div className="relative m-0 overflow-hidden h-[240px] text-gray-700 bg-transparent rounded-none shadow-none bg-clip-border">
                                <img
                                    src={item.photo}
                                    alt="UI/UX Review Check"
                                />
                            </div>
                            <div className="p-6">
                                <div className="flex justify-between">
                                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                                        {item.category}
                                    </h4>
                                    <p className="block font-sans text-base antialiased font-normal leading-relaxed text-inherit">
                                        {new Date(item.currentTime).toLocaleDateString("en-US", {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}
                                    </p>
                                </div>
                                <p className="block mt-3 font-sans text-xl antialiased font-normal leading-relaxed text-white">
                                    {item.title.slice(0, 100)}...
                                </p>
                            </div>
                            <div className="flex items-center justify-between p-6">
                                <div className="flex items-center -space-x-3">
                                    <img
                                        alt="Natali Craig"
                                        src={item.image}
                                        className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                                    />
                                    <img
                                        alt="Tania Andrew"
                                        src={item.photo}
                                        className="relative inline-block h-9 w-9 rounded-full border-2 border-white object-cover object-center hover:z-10"
                                    />
                                </div>
                                <Link to={`/postDetails/${item._id}`} className="btn btn-warning">Read More..</Link>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    </div>;
};
export default Profile;