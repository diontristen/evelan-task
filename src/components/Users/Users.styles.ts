import { createStyles } from "@mantine/core";

export default createStyles((theme) => ({
    container: {
        margin: '16px 0'
    },
    icon: {
        color: theme.colorScheme === 'dark' ? theme.colors.dark[3] : theme.colors.gray[5],
    },

    name: {
        fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    },
    btnContainer: {
        width: '100%',
        textAlign: 'center'
    },
    loader: {
        width: '100%',
        textAlign: 'center',
        margin: '16px 0'
    }
}));