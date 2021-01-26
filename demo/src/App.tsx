// App demo.
//
// Copyright (C) 2021 Gonzalo Chumillas
//
// This program is free software: you can redistribute it
// and/or modify it under the terms of the GNU General Public License as published
// by the Free Software Foundation, either version 3 of the License, or (at your
// option) any later version.
//
// This program is distributed in the hope that it will be useful, but WITHOUT ANY
// WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A
// PARTICULAR PURPOSE. See the GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License along with
// this program. If not, see https://www.gnu.org/licenses/.

import React from 'react'
import { CssBaseline, Container, Paper } from '@material-ui/core'
import {
  Dns as DnsIcon,
  People as UserIcon,
  Settings as SettingsIcon,
  Subject as TemplateIcon,
  LockOpen as LockOpenIcon,
  PowerSettingsNew as RemoveAccountIcon
} from '@material-ui/icons'
import { Tree, TreeItem } from '@plastic-ui/tree'

export default () => {
  const items: TreeItem[] = [
    {
      id: '/domains',
      name: 'Domains',
      items: [
        {
          id: '/tags/1/domains',
          name: 'Tag 1'
        },
        {
          id: '/tags/2/domains',
          name: 'Tag 2'
        },
        {
          id: '/tags/3/domains',
          name: 'Tag 3'
        }
      ],
      icon: <DnsIcon />
    },
    {
      id: '/tags',
      name: 'Tags'
    },
    {
      id: '/users',
      name: 'Users',
      icon: <UserIcon />
    },
    {
      id: '/settings',
      name: 'Settings',
      selectable: false,
      icon: <SettingsIcon />,
      divider: 'top',
      items: [
        {
          id: '/settings/templates',
          name: 'Templates',
          icon: <TemplateIcon />
        },
        {
          id: '/settings/api-key',
          name: 'API Key',
          icon: <LockOpenIcon />
        },
        {
          id: '/settings/logout',
          name: 'Logout',
          icon: <RemoveAccountIcon color="secondary" />
        }
      ]
    }
  ]

  const [selectedId, setSelectedId] = React.useState<React.ReactText>()

  return (
    <>
      <CssBaseline />
      <Container maxWidth="sm">
        <Paper>
          <Tree
            items={items}
            selectedItemId={selectedId}
            onSelectItem={item => setSelectedId(item.id)}
          />
        </Paper>
      </Container>
    </>
  )
}
