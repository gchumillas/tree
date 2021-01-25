import React from 'react'
import ReactDOM from 'react-dom'
import { CssBaseline, Container, Paper } from '@material-ui/core'
import { Tree } from '@plastic-ui/tree'

const App = () => {
  const items = [
    {
      id: '1',
      name: 'Item 1',
      items: [
        {
          id: '11',
          name: 'Item 11',
          items: [
            {
              id: '111',
              name: 'Item 111',
              items: []
            }
          ]
        },
        {
          id: '12',
          name: 'Item 12',
          items: []
        }
      ]
    },
    {
      id: '2',
      name: 'Item 2',
      items: [
        {
          id: '21',
          name: 'item 21',
          items: []
        }
      ]
    },
    {
      id: '3',
      name: 'Item 3',
      items: []
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

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
