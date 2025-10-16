import Head from 'next/head'

interface MetaHeadProps {
    title: string
    description: string
    keywords?: string
    imageUrl?: string
    url?: string
}

const MetaHead = ({ title, description, keywords, imageUrl, url }: MetaHeadProps) => (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        {keywords && <meta name="keywords" content={keywords} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        {/* Open Graph */}
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        {url && <meta property="og:url" content={url} />}
        {imageUrl && <meta property="og:image" content={imageUrl} />}
        {url && <link rel="canonical" href={url} />}
    </Head>
)

export default MetaHead
