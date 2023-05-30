import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
    container: {
        maxWidth: theme.breakpoints.xl,
        margin: 'auto'
    },
    children: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        margin: '48px 0',
    }
}));