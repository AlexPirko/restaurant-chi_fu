'use client';

import { UserInfo } from '@/components/info/user-info';
import { useCurrentUser } from '@/hooks/use-current-user';

const ClientPage = () => {
    const user = useCurrentUser();

    return (
        <UserInfo
            label='📱 Profile'
            user={user}
        />
    );
};

export default ClientPage;
