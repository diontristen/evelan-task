import { User } from '@/types/user';
import { Box, Group, Text, Avatar } from '@mantine/core'
import { IconAt } from '@tabler/icons-react';
import useStyles from './Users.styles'
interface UserItemProps {
    user: User
}


const UserItem = ({ user }: UserItemProps) => {
    const { classes } = useStyles()
    return (
        <Box 
        key={user.id}   
        className={classes.container}
        >
            <Group noWrap>
                <Avatar alt='User Image' src={user?.avatar} size={94} radius="md" />
                <div>
                    <Text fz="lg" fw={500} className={classes.name}>
                        {user?.first_name} {user?.last_name}
                    </Text>

                    <Group noWrap spacing={10} mt={3}>
                        <IconAt stroke={1.5} size="1rem" className={classes.icon} />
                        <Text fz="xs" c="dimmed">
                            {user?.email}
                        </Text>
                    </Group>
                    <Text>#{user.id}</Text>
                </div>
            </Group>
        </Box>
    );
};

export default UserItem;