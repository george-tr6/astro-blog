import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {
    const [blogs, setBlogs] = useState([
        { title: 'My new website', body: 'lorem ipsum...', author: 'mario', id: 1 },
        { title: 'Welcome party!', body: 'lorem ipsum...', author: 'yoshi', id: 2 },
        { title: 'Web dev top tips', body: 'lorem ipsum...', author: 'mario', id: 3 }
    ]);

    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    return ( 
        <div className="home">
            <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete} />
            
        </div>
     );
}
 
export default Home;





// Great tutorial. As a newbie, I try to understand what's going on here. 
// - when the "delete blog" button is clicked, the handleDelete function is invoked; 
// - then inside the handleDelete function, the setBlogs function is invoked, thus changing the value of blogs; 
// - because blogs as a state variable has changed, React re-renders the Home component; 
// - When React re-renders the Home component, it also re-renders the BlogList component. 
// When I first read the code, what I didn't understand is how the child component can change the data in the parent component. My understanding is that, because a component is kind of a function, then the child component maybe can be viewed as a function inside the parent function and it has access to the data in the parent function.