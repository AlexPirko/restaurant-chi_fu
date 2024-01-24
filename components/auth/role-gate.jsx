'use client';

import { useCurrentRole } from '@/hooks/use-current-role';
import { FormError } from '@/components/info/form-error';

export const RoleGate = ({ children, allowedRole }) => {
    const role = useCurrentRole();

    if (role === allowedRole) {
        return null;
        // return (
        //     <FormError message='You do not have permission to view this content!' />
        // );
    }

    return <>{children}</>;
};
