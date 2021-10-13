import React from 'react'

import { Menu } from '@fluentui/react-northstar'
import MegaMenu from '../components/MegaMenu'

const Dashboard = () => {



    return (
        <>
            <Menu
                items={[
                    'Profile',
                    'My account',
                    {
                        content: 'Messages',
                        key: 'messages',
                        menu: <MegaMenu />,
                    },
                    'Logout',
                ]}
            />
        </>

    )
}

export default Dashboard