import React from 'react';
import { Box } from '@mantine/core'
import useStyles from './Layout.styles'
interface Props {
    children?: React.ReactNode;
}

const index = ({ children }: Props) => {
    const { classes } = useStyles()
    return (
        <Box
            className={classes.container}
        >
            <Box className={classes.children}>
                {children}
            </Box>
        </Box>
    );
};

export default index;