//tolkning i oppgaven: tabell tolker jeg spesifikt som html-elementet "table". I motsetning til å feks bruke "div"

import React, { useState, useEffect, useMemo } from 'react'
import { Table, HeaderRow, BodyRow, AppContainer } from './components'
import Buttons from './Buttons'
import usePaginator from './usePaginator'

function KnowitApp() {
  const [rawResults, setRawResults] = useState([])
  const [totalPages, setTotalPages] = useState(0)
  const [page, setPage] = usePaginator(0, totalPages)

  //call api once
  useEffect(() => {
    fetch(
      'https://api.github.com/search/repositories?q=language:javascript&sort=stars&order=desc&per_page=100',
    )
      .then((data) => data.json())
      .then((res) => {
        setRawResults(res.items)
        setTotalPages(Math.floor(res.items.length / 20))
      })
  }, [])

  //memoized array with current page results
  const pageResults = useMemo(() => {
    return rawResults.slice(page * 20, (page + 1) * 20)
  }, [rawResults, page])

  return !pageResults.length ? (
    'loading'
  ) : (
    <AppContainer>
      <Buttons page setPage={setPage} totalPages={totalPages} />
      <Table>
        <HeaderRow />
        <tbody>
          {pageResults.map((repo, index) => (
            <BodyRow key={index} index={index} repo={repo} />
          ))}
        </tbody>
      </Table>
      <Buttons page setPage={setPage} totalPages={totalPages} />
    </AppContainer>
  )
}

export default KnowitApp
