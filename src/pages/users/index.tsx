import { getUsers } from '@/services/users';
import { QueryClient, dehydrate } from '@tanstack/react-query';
import { GetServerSideProps } from 'next';
import Head from 'next/head';
import React from 'react';
import Layout from '@/components/Layout';
import UserList from '@/components/Users/UserList';
type Props = {}

const index = ({ }: Props) => {
    return (
        <>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Evelan Tasks - Show your cool users</title>
                <link rel="icon" href="/favicon.ico" />
                <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />

                <meta name="description" content="Explore user details on our sophisticated platform created by talented engineers." />
                <meta name="keywords" content="user details, cool, sophisticated, engineers, platform" />
                <meta name="author" content="Dion Aguilar" />


                <meta property="og:title" content="User Details Platform" />
                <meta property="og:description" content="Explore user details on our sophisticated platform created by talented engineers." />
                <meta property="og:image" content="https://evelan.dionaguilar.com/evelan.png" />
                <meta property="og:url" content="https://evelan.dionaguilar.com" />
                <meta property="og:type" content="website" />



                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@dionaguilar" />
                <meta name="twitter:title" content="User Details Platform" />
                <meta name="twitter:description" content="Explore user details on our sophisticated platform created by talented engineers." />
                <meta name="twitter:image" content="https://evelan.dionaguilar.com/evelan.png" />

                <meta name="robots" content="index, follow" />
                <meta name="googlebot" content="index, follow" />
                <meta name="google" content="nositelinkssearchbox" />
            </Head>
            <Layout>
                <UserList />
            </Layout>
        </>


    );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
    const queryClient = new QueryClient()

    await queryClient.prefetchQuery({
        queryKey: ["users", 1],
        queryFn: async () => getUsers(1),
    })

    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    }
}

export default index