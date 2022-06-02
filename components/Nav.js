import Link from 'next/link'
export default function Nav(){
    return(
        <nav>
        <ul>
            <li><Link href="/"><a>Home</a></Link></li>
            <li><Link href="/about"><a>about</a></Link></li>
            <li><Link href="/contact"><a>contact</a></Link></li>
        </ul>
        </nav>
        
    )
}