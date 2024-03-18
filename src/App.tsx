import React from 'react'

// GraphiQL
import { createGraphiQLFetcher } from '@graphiql/toolkit'
import { GraphiQL } from 'graphiql'
import 'graphiql/graphiql.css'

import styles from './App.module.scss'

function App(): React.JSX.Element {
  const fetcher = createGraphiQLFetcher({ url: 'http://localhost:3000' })
  return (
    <div className={styles.container}>
      <GraphiQL fetcher={fetcher} />
    </div>
  )
}

export default App
