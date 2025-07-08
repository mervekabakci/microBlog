import { useEffect, useState } from "react";
import Card from "../../Components/Card";

export default function Blog() {
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        async function getPostList() {
            const dataList = await fetch('https://blog.muratakdemir.tr/BlogPostForEveryone/getall')
            .then(res => res.json());
            setPostList(dataList);
        }
        getPostList();
    }, []);

    return (
        <>
            <Card postList={postList} />
        </>
    )

}