// TreeItems component.
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
import { List } from '@material-ui/core'
import { TreeItem } from './Tree'
import TreeEntry from './TreeEntry'

type TreeListProps = {
  items: TreeItem[]
  level?: number
}

export const TreeList = ({ items, level = 1 }: TreeListProps) => (
  <List>
    {items.map(item => (
      <TreeEntry key={item.id} item={item} level={level} />
    ))}
  </List>
)

export default TreeList
