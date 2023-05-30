import Head from 'next/head'
import Layout from '@/components/Layout'
import { Button, useMantineTheme } from '@mantine/core'
import { useRouter } from 'next/router'
export default function Home() {
  const theme = useMantineTheme()
  const router = useRouter()

  const handlePush = () => {
    router.push('/users')
  }

  return (
    <>
      <Head>
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
        <Button
          onClick={handlePush}
          sx={{
            backgroundColor: theme.colors.primary[6],
            color: 'white',
            ':disabled': {
              backgroundColor: theme.colors.primaryContrast[9],
              color: theme.colors.primaryContrast[7],
              cursor: 'not-allowed'
            }
          }}
        >
          Go to Cool Users
        </Button>
      </Layout>
    </>
  )
}
