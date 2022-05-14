import { posts } from "../../../mock"

export const Posts = () => {
    return (
        <div className="postContainer">
            {posts.map((item) => (
                <>
                    <div>
                        <h3>{item.name}</h3>
                        <span>{item.date}</span>    
                    </div>


                </>
            ))}
        </div>
    )
}