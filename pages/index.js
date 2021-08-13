import Link from 'next/link';

function Home(){
    return <div>
            <h2>Home</h2>
            <Link href="/sobre">
            <a>Outra</a>
            </Link>
        </div>
}


export default Home