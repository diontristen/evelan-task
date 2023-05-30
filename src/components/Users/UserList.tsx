import React, { useState, MouseEvent } from 'react';
import { Box, Title, Loader, Text } from '@mantine/core';
import { useUsers } from '@/hooks/useUsers';
import { User } from '@/types/user';
import UserItem from './UserItem';
import UserMoreBtn from './UserMoreBtn';
import useStyles from './Users.styles'
const UserList = () => {
    const { classes } = useStyles()
    const [page, setPage] = useState<number>(1);
    const { data, isLoading } = useUsers(page)

    const handleLoadMore = (_event: MouseEvent<HTMLButtonElement>) => {
        if (!data) return
        setPage((currentPage) => currentPage + 1)
    }

    return (
        <Box>
            <Title
                color="primary"
            >
                Cool Users
            </Title>
            <Text align='center' mb='md'>Here is a list of cool users mate.</Text>
            <Box>
                {!isLoading && data?.users && data.users.length > 0 && data.users.map((user: User) => (
                    <UserItem
                        key={user.id}
                        user={user}
                    />
                ))}
                {!isLoading && data?.users && data.users.length === 0 && <Box
                    className={classes.loader}
                >
                    No data
                </Box>
                }
            </Box>
            {isLoading && <Box
                className={classes.loader}
            >
                <Loader

                />
            </Box>}
            <UserMoreBtn
                disable={data?.total_pages === page ?? false}
                action={handleLoadMore}
                loading={isLoading}
            />
        </Box>
    );
};

export default UserList;