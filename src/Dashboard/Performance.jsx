/* eslint-disable react/prop-types */



import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../hooks/useAxiosSecure";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer
} from "recharts";

// Define the CustomizedDot component
const CustomizedDot = (props) => {
    const { cx, cy, value } = props;

    if (value > 2500) {
        return (
            <svg
                x={cx - 10}
                y={cy - 10}
                width={20}
                height={20}
                fill="red"
                viewBox="0 0 1024 1024"
            >
                <path d="M512 1009.984c-274.912 0-497.76-222.848-497.76-497.76s222.848-497.76 497.76-497.76c274.912 0 497.76 222.848 497.76 497.76s-222.848 497.76-497.76 497.76zM340.768 295.936c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM686.176 296.704c-39.488 0-71.52 32.8-71.52 73.248s32.032 73.248 71.52 73.248c39.488 0 71.52-32.8 71.52-73.248s-32.032-73.248-71.52-73.248zM772.928 555.392c-18.752-8.864-40.928-0.576-49.632 18.528-40.224 88.576-120.256 143.552-208.832 143.552-85.952 0-164.864-52.64-205.952-137.376-9.184-18.912-31.648-26.592-50.08-17.28-18.464 9.408-21.216 21.472-15.936 32.64 52.8 111.424 155.232 186.784 269.76 186.784 117.984 0 217.12-70.944 269.76-186.784 8.672-19.136 9.568-31.2-9.12-40.096z" />
            </svg>
        );
    }

    return (
        <svg
            x={cx - 10}
            y={cy - 10}
            width={20}
            height={20}
            fill="green"
            viewBox="0 0 1024 1024"
        >
            <path d="M517.12 53.248q95.232 0 179.2 36.352t145.92 98.304 98.304 145.92 36.352 179.2-36.352 179.2-98.304 145.92-145.92 98.304-179.2 36.352-179.2-36.352-145.92-98.304-98.304-145.92-36.352-179.2 36.352-179.2 98.304-145.92 145.92-98.304 179.2-36.352zM663.552 261.12q-15.36 0-28.16 6.656t-23.04 18.432-15.872 27.648-5.632 33.28q0 35.84 21.504 61.44t51.2 25.6 51.2-25.6 21.504-61.44q0-17.408-5.632-33.28t-15.872-27.648-23.04-18.432-28.16-6.656zM373.76 261.12q-29.696 0-50.688 25.088t-20.992 60.928 20.992 61.44 50.688 25.6 50.176-25.6 20.48-61.44-20.48-60.928-50.176-25.088zM520.192 602.112q-51.2 0-97.28 9.728t-82.944 27.648-62.464 41.472-35.84 51.2q-1.024 1.024-1.024 2.048-1.024 3.072-1.024 8.704t2.56 11.776 7.168 11.264 12.8 6.144q25.6-27.648 62.464-50.176 31.744-19.456 79.36-35.328t114.176-15.872q67.584 0 116.736 15.872t81.92 35.328q37.888 22.528 63.488 50.176 17.408-5.12 19.968-18.944t0.512-18.944-3.072-7.168-1.024-3.072q-26.624-55.296-100.352-88.576t-176.128-33.28z" />
        </svg>
    );
};

const Performance = () => {
    const axiosSecure = useAxiosSecure();

    // Fetching data for posts, users, and reviews
    const { data: post = [] } = useQuery({
        queryKey: ['post'],
        queryFn: async () => {
            const res = await axiosSecure.get('/post');
            return res.data;
        }
    });

    const { data: users = [] } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });

    const { data: reviews = [] } = useQuery({
        queryKey: ['reviews'],
        queryFn: async () => {
            const res = await axiosSecure.get('/reviews');
            return res.data;
        }
    });
    const { data: bookMark = [] } = useQuery({
        queryKey: ['bookMark'],
        queryFn: async () => {
            const res = await axiosSecure.get('/bookMark');
            return res.data;
        }
    });

    // Prepare the data for the chart
    const chartData = [
        { name: "Jan", posts: post.length, users: users.length, reviews: reviews.length },
        { name: "Feb", posts: post.length + 10, users: users.length + 5, reviews: reviews.length, bookMark: bookMark.length + 8 },
        { name: "Mar", posts: post.length + 20, users: users.length + 10, reviews: reviews.length , bookMark: bookMark.length + 12 },
        { name: "Mar", posts: post.length + 30, users: users.length + 15, reviews: reviews.length , bookMark: bookMark.length + 16 },
        // Add more data points as needed
    ];

    return (
        <div>
            <div className="flex justify-center items-center gap-10 mb-10">

                <div
                    className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
                >
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute blur z-10 fill-red-300 duration-500 group-hover:blur-none group-hover:scale-105"
                    >
                        <path
                            transform="translate(100 100)"
                            d="M39.5,-49.6C54.8,-43.2,73.2,-36.5,78.2,-24.6C83.2,-12.7,74.8,4.4,69,22.5C63.3,40.6,60.2,59.6,49.1,64.8C38.1,70,19,61.5,0.6,60.7C-17.9,59.9,-35.9,67,-47.2,61.9C-58.6,56.7,-63.4,39.5,-70,22.1C-76.6,4.7,-84.9,-12.8,-81.9,-28.1C-79,-43.3,-64.6,-56.3,-49.1,-62.5C-33.6,-68.8,-16.8,-68.3,-2.3,-65.1C12.1,-61.9,24.2,-55.9,39.5,-49.6Z"
                        ></path>
                    </svg>
                    <div className="z-20 flex flex-col justify-center items-center">
                        <span className="font-bold text-6xl ml-2">{post.length}</span>
                        <p className="font-bold">Posts</p>
                    </div>
                </div>

                <div
                    className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
                >
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute blur z-10 fill-orange-300 duration-500 group-hover:blur-none group-hover:scale-105"
                    >
                        <path
                            transform="translate(100 100)"
                            d="M45.4,-55.3C59.5,-47.6,70.6,-33.4,76.3,-16.4C81.9,0.6,82.1,19.6,73.5,32.9C64.9,46.2,47.4,53.8,31.3,58.7C15.1,63.6,-0.7,65.8,-17.1,63.1C-33.5,60.4,-50.5,52.9,-60.6,40.8C-70.8,28.6,-74.2,11.9,-72.6,-4.1C-71,-20,-64.4,-35.3,-53.2,-43.8C-41.9,-52.2,-26,-54.8,-10.7,-54.2C4.5,-53.6,9,-49.7,45.4,-55.3Z"
                        ></path>
                    </svg>
                    <div className="z-20 flex flex-col justify-center items-center">
                        <span className="font-bold text-6xl ml-2">{users.length}</span>
                        <p className="font-bold">Users</p>
                    </div>
                </div>

                <div
                    className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
                >
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute blur z-10 fill-indigo-300 duration-500 group-hover:blur-none group-hover:scale-105"
                    >
                        <path
                            transform="translate(100 100)"
                            d="M36.3,-54.3C50,-46.3,65.8,-38.8,70.5,-27.9C75.3,-17.1,69.1,-2.8,64.8,13.8C60.5,30.4,58.1,49.3,47.2,60.4C36.3,71.4,17.9,74.7,0.3,74.4C-17.3,74.1,-34.5,70.2,-43.6,60.4C-52.6,50.5,-53.6,34.8,-53.4,20.8C-53.2,6.8,-51.9,-5.4,-52,-18.2C-52,-31.1,-53.3,-44.7,-46.4,-55.1C-39.5,-65.5,-24.5,-72.7,-10.7,-68.8C3,-64.9,6,-49.8,36.3,-54.3Z"
                        ></path>
                    </svg>
                    <div className="z-20 flex flex-col justify-center items-center">
                        <span className="font-bold text-6xl ml-2">{reviews.length}</span>
                        <p className="font-bold">Reviews</p>
                    </div>
                </div>

                <div
                    className="hover:-translate-y-2 group bg-neutral-50 duration-500 w-44 h-44 flex text-neutral-600 flex-col justify-center items-center relative rounded-xl overflow-hidden shadow-md"
                >
                    <svg
                        viewBox="0 0 200 200"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute blur z-10 fill-green-300 duration-500 group-hover:blur-none group-hover:scale-105"
                    >
                        <path
                            transform="translate(100 100)"
                            d="M35.4,-47.2C47.2,-37.1,57.9,-24.4,60.7,-10.2C63.4,4,58.3,19.7,51.2,35.6C44.2,51.5,35.2,67.6,21.3,72.6C7.4,77.5,-11.3,71.4,-24.1,61.3C-37,51.2,-44.1,37.2,-49.2,23.7C-54.3,10.3,-57.4,-2.5,-54.4,-14.2C-51.4,-25.9,-42.4,-36.5,-31.5,-46.3C-20.6,-56.1,-10.3,-65.2,2.1,-67.7C14.5,-70.2,29,-66.2,35.4,-47.2Z"
                        ></path>
                    </svg>
                    <div className="z-20 flex flex-col justify-center items-center">
                        <span className="font-bold text-6xl ml-2">{bookMark.length}</span>
                        <p className="font-bold">Bookmarks</p>
                    </div>
                </div>
            </div>

            <div style={{ width: '100%', height: 600 }}>
                <ResponsiveContainer>
                    <LineChart
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line
                            type="monotone"
                            dataKey="posts"
                            stroke="#8884d8"
                            dot={<CustomizedDot />}
                        />
                        <Line
                            type="monotone"
                            dataKey="users"
                            stroke="#82ca9d"
                            dot={<CustomizedDot />}
                        />
                        <Line
                            type="monotone"
                            dataKey="reviews"
                            stroke="#ffc658"
                            dot={<CustomizedDot />}
                        />
                        <Line
                            type="monotone"
                            dataKey="bookMark"
                            stroke="#ffc658"
                            dot={<CustomizedDot />}
                        />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Performance;
