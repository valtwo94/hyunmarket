import Head from "next/head";

const MetaTags = ({title = '', description = '', image = ''}) => {

    return (
        <Head>
            <title>{title}</title>
            {/*트위터*/}
            <meta name="twitter:card" content="summary"/>
            <meta name="twitter:site" content=""/>
            <meta name="twitter:title" content={title}/>
            <meta name="twitter:description" content={description}/>
            <meta name="twitter:image" content={image}/>
            {/*오픈그래프*/}
            <meta property="og:title" content={title}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={image}/>
            {/*키워드*/}
            <meta name="keywords" content={`${title},${description}`}/>
            {/*제목*/}
            <meta name="title" content={title}/>
            {/*상세설명*/}
            <meta name="description" content={description}/>
            {/*크롤링방지*/}
            <meta name="robots" content="noindex,nofollow"/>
        </Head>
    )
}

export default MetaTags