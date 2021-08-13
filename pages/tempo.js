function Tempo(props){
    const dynamicDate = new Date();
    const dynamicDateString = dynamicDate.toGMTString();

    return (
        <div>
            <div>{dynamicDateString} (dinâmico)</div>
            <div>{props.staticDateString} (estático com delay)</div>
        </div>
    )
}

export async function getStaticProps(){
    console.log('getStaticProps');
    console.log('delay');

    await delay(5000);
    const staticDate = new Date();
    const staticDateString = staticDate.toGMTString();

    return {
        props: {
            staticDateString
        }
    }
}

const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

export default Tempo;