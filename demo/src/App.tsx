import React from 'react'
import { CssBaseline, Container, Paper } from '@material-ui/core'
import {
  Dns as DnsIcon,
  People as UserIcon,
  Settings as SettingsIcon,
  Subject as TemplateIcon,
  LockOpen as LockOpenIcon,
  PowerSettingsNew as RemoveAccountIcon,
  LocalOffer as TagIcon
} from '@material-ui/icons'
import { TagsIcon } from './icons'
import { Tree, TreeItem } from '@plastic-ui/tree'

export default () => {
  const items: TreeItem[] = [
    {
      id: '/domains',
      name: 'Domains',
      items: [
        {
          id: '/tags/1/domains',
          name: 'Tag 1',
          icon: <TagIcon />
        },
        {
          id: '/tags/2/domains',
          name: 'Tag 2',
          icon: <TagIcon />
        },
        {
          id: '/tags/3/domains',
          name: 'Tag 3',
          icon: <TagIcon />
        }
      ],
      icon: <DnsIcon />
    },
    {
      id: '/tags',
      name: 'Tags',
      icon: <TagsIcon />
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
          id: '/settings/remove-account',
          name: 'Logout',
          icon: <RemoveAccountIcon color="secondary" />
        }
      ]
    }
  ]
  const [selectedId, setSelectedId] = React.useState<React.ReactText>('2')

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
