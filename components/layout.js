import Nav from "./Nav";
import Hero from "./Hero";
export default function Layout({children}) {
    return (
      <>
      <Nav/>
      <Hero/>
       <main>
           {children}
       </main>
      </>
    )
}