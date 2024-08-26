import { useLoaderData, } from "react-router-dom";

const PostDetails = () => {

    const items = useLoaderData()
    // console.log(items);

    return <div>
        <h1>hello</h1>
        {items.name}
        <h1>intro {items.introduction}</h1>
    </div>;
};
export default PostDetails;