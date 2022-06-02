import Title from "../components/Title"
import style from '../styles/Home.module.css';
export default function Home({data}) {
    return (
        <div>
            <Title title='Home'/>
            <h1>Home page</h1>
            <p>Lorem, ipsum dolor sit amet con
                sectetur adipisicing elit. Veniam velit co
                nsectetur quaerat mollitia illum hic ducimus optio quas quasi laborum.
            </p>
             <div className={style.container}>
              {
                  data.map((post,i)=>{
                   return(
                    <div key={i}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                   )
                  })
              }
              </div>
        </div>
    )
}
export async function getStaticProps(){
    // feching api
    const res= await fetch ("https://jsonplaceholder.typicode.com/posts?_limit=10")
    const data=await res.json();
    return {
        props:{
            data
        }
    }
}