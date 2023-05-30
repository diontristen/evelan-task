import React, { MouseEvent } from 'react';
import { Box, Button } from '@mantine/core';
import useStyles from './Users.styles';
interface Props {
    action: (e: MouseEvent<HTMLButtonElement>) => void
    loading: boolean
    disable: boolean
}

const UserMoreBtn = ({
    disable,
    loading,
    action }: Props) => {
    const { classes, theme } = useStyles()
    return (
        <Button
            className={classes.btnContainer}
            disabled={disable}
            onClick={action}
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
            {loading ? 'Fetching Data' : 'Load More'}
        </Button>
    );
};

export default UserMoreBtn;