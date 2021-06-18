import Head from 'next/head'

export default function Header({ title, description }) {
    return (
        <Head>
            <title>{title}</title>
            <meta content="text/html;charset=UTF-8" />
            <meta name="description" content={description} />
        </Head>
    )
}
