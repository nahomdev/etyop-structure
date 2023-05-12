import Head from 'next/head';
import Navbar from './navbar';
import Footer from './footer';
import PropTypes from 'prop-types';

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};

interface LayoutProps {
    children: React.ReactNode,
}



export default function Layout({ children }: LayoutProps) {
    return <>
        <Head>
            <title>Etyop</title>
            <meta
                name="description"
                content="A simple and user-friendly system that provides unlimited access to a range of AI services in Africa."
            />
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar />
        <main  >{children}</main>
        <Footer />

    </>
}