import axios from "axios";
import { SET_RECENT_POSTS} from "./types"

export function fetchRecentPosts(){
    return function (dispathc){
        //perform our request in here
        // console.log("hello");
        axios.get(
            "https://api.dailysmarty.com/posts"
        ).then(response=>{
            console.log(response.data.posts);
                //associated_topics: (5) ["Python development", "Python Applications", "Python Use Cases", "use cases", "Python"]
                //content:
                // created_at:
                // id: 7441
                // post_links: 
                // title: 
                // url_for_post: 
                // __proto__: Object
            dispatchEvent({
                type: SET_RECENT_POSTS,
                payload: response.data.posts
            })

        }).catch(error => {console.log("error index.js axios", error);});
    }
}