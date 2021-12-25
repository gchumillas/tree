// TreeItem component.
//
// Copyright (C) 2020 Clovrlabs SL
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
import {
  Collapse,
  IconButton,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListItemSecondaryAction
} from '@material-ui/core'
import { useTheme } from '@material-ui/core/styles'
import {
  KeyboardArrowRight as ExpandIcon,
  KeyboardArrowDown as CollapseIcon,
  Folder as FolderIcon
} from '@material-ui/icons'
import { FolderOpenIcon, FileIcon } from './icons'
import context from './context'
import { TreeItem } from './Tree'
import TreeList from './TreeList'

type TreeEntryProps = {
  item: TreeItem
  level: number
}

export const TreeEntry = ({ item, level }: TreeEntryProps) => {
  const theme = useTheme()
  const { selectedItemId, onSelectItem, isItemOpen } = React.useContext(context)
  const [open, setOpen] = React.useState(false)
  const selectable = item.selectable ?? true
  const selected = item.id == selectedItemId
  const items = item?.items || []
  const toggleItem = () => setOpen(open => !open)

  const icon = () => {
    if (items.length > 0) {
      return open ? <FolderOpenIcon /> : <FolderIcon />
    }

    return <FileIcon />
  }

  React.useEffect(() => setOpen(isItemOpen(item)), [item.id, selectedItemId])

  return (
    <>
      {item.divider == 'top' && <Divider />}
      <ListItem
        selected={selected}
        button
        style={{ paddingLeft: theme.spacing(2) * level }}
        onClick={() => {
          if (selectable) onSelectItem(item)
          setOpen(true)
        }}
      >
        <ListItemIcon>{item.icon || icon()}</ListItemIcon>
        <ListItemText primary={item.name} />
        {items.length > 0 && (
          <ListItemSecondaryAction>
            <IconButton edge="end" onClick={() => toggleItem()}>
              {open ? <CollapseIcon /> : <ExpandIcon />}
            </IconButton>
          </ListItemSecondaryAction>
        )}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        {items.length > 0 && <TreeList items={items} level={level + 1} />}
      </Collapse>
      {item.divider == 'bottom' && <Divider />}
    </>
  )
}

export default TreeEntry
