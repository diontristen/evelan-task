import { Title, Text, Button, Container } from '@mantine/core';
import { Dots } from './Dots';
import useStyles from './Banner.styles'
import { useRouter } from 'next/router';
const Banner = () => {
    const { classes } = useStyles();
    const router = useRouter()

    const handlePush = () => {
      router.push('/users')
    }
    return (
        <Container className={classes.wrapper} size={1400}>
            <Dots className={classes.dots} style={{ left: 0, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 60, top: 0 }} />
            <Dots className={classes.dots} style={{ left: 0, top: 140 }} />
            <Dots className={classes.dots} style={{ right: 0, top: 60 }} />

            <div className={classes.inner}>
                <Title className={classes.title}>
                    Cool User {' '}
                    <Text component="span" className={classes.highlight} inherit>
                        management
                    </Text>{' '}
                    for any company
                </Title>

                <Container p={0} size={600}>
                    <Text size="lg" color="dimmed" className={classes.description}>
                        Build more reliable software with AI companion. AI is also trained to detect lazy
                        developers who do nothing and just complain on Twitter.
                    </Text>
                </Container>

                <div className={classes.controls}>
                    <Button onClick={handlePush} className={classes.control} size="lg">
                        Go to Users
                    </Button>
                </div>
            </div>
        </Container>
    );
}

export default Banner