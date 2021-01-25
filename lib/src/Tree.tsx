// Tree component.
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
import TreeList from './TreeList'
import context from './context'

export type Divider = 'top' | 'bottom'

export type TreeItem = {
  id: React.ReactText
  name: string
  divider?: Divider
  items?: TreeItem[]
  selectable?: boolean
  icon?: React.ReactNode
}

export type TreeProps = {
  items: TreeItem[]
  selectedItemId?: React.ReactText
  onSelectItem: (item: TreeItem) => void
}

export const Tree = ({ items, selectedItemId, onSelectItem }: TreeProps) => {
  const isItemOpen = (item: TreeItem): boolean => {
    const items = item?.items || []
    return selectedItemId == item.id || items.some(item => isItemOpen(item))
  }

  return (
    <context.Provider
      value={{
        selectedItemId,
        isItemOpen,
        onSelectItem
      }}
    >
      <TreeList items={items} />
    </context.Provider>
  )
}

export default Tree
