import { getUsersInfo } from '@/lib/actions/user.action';
import { URLProps } from '@/types';
import { auth } from '@clerk/nextjs';
import React from 'react';

const Page = async ({params , searchParams } :URLProps ) => {
    const { userId: clerkId } = auth();
    const userInfo = await getUsersInfo({ userId: params.id})
    return (
        <div>
            
        </div>
    );
};

export default Page;