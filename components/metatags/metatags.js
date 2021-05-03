import Head from "next/head";

const MetaTags = ({title = '', description = '', image = ''}) => {

    return (
        <Head>
            <title>{title}</title>
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content=""/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image}/>

            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>

            <meta name="keywords" content={`${title},${description}`}/>
            <meta name="title" content={title}/>
            <meta name="description" content={description}/>
            <meta name="robots" content="noindex,nofollow"/>
        </Head>
    )
}

export default MetaTags