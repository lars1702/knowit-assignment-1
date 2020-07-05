import styled, { css } from "styled-components"
import React, { useState, useEffect } from "react"

// table styling
// https://codepen.io/Lars1702/pen/PoZKNbz

export const AppContainer = styled.div`
  position: relative;

  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ::before {
    content: "";
    pointer-events: none;
    position: fixed;
    background: #293241;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    z-index: 1;
  }
  * {
    z-index: 2;
  }
`

//- Table stuff -//

export const Table = styled.table`
  border-spacing: 0;
  margin: 0 auto;
  margin: 5px;
  thead {
    background-color: #3d5a80;
    color: white;
  }
  th {
    height: 70px;
    font-weight: 500;
    padding: 0px 50px;
    max-width: 500px;
    font-size: 22px;
  }
  tbody tr {
    height: 40px;
    &:nth-child(even) {
      background-color: #98c1d9;
    }
    &:nth-child(odd) {
      background-color: #e0fbfc;
    }
  }
  tr:last-child {
    td:first-child {
      border-bottom-left-radius: 10px;
    }
    td:last-child {
      border-bottom-right-radius: 10px;
    }
  }
  th:first-child {
    border-top-left-radius: 10px;
  }
  th:last-child {
    border-top-right-radius: 10px;
  }
  @media (max-width: 760px),
    (min-device-width: 768px) and (max-device-width: 1024px) {
    &,
    thead,
    tbody,
    th,
    tr,
    tbody tr {
      max-width: unset;
      padding: unset;
      height: unset;
      display: block;
    }

    thead tr {
      position: absolute;
      top: -9999px;
      left: -9999px;
    }
    tbody {
      max-width: 100%;
    }
    tbody tr {
      margin: 15px 0px;
    }
  }
`

export const TableData = styled.td`
  font-weight: 400;
  padding: 10px;
  max-width: 500px;
  word-break: break-word;
  @media (max-width: 760px), (min-device-width: 768px) and (max-device-width: 1024px) {
    max-width: unset;
    height: unset;
    display: block;
    padding: 6px;
    position: relative;
    padding-left: 33%;
    &:nth-child(even) {
      background-color: #98c1d9;
    }
    &:nth-child(odd) {
      background-color: #e0fbfc;
    }
    &::before {
      content: "${(p) => p.header}";
      position: absolute;
      font-weight: 500;
      font-size: 16px;
      line-height: 33px;
      top: 0px;
      bottom: 0px;
      left: 6px;
      width: 30%;
      white-space: nowrap;
    }
  }
`

export const HeaderRow = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Homepage</th>
        <th>Watchers</th>
        <th>Description</th>
      </tr>
    </thead>
  )
}

export const BodyRow = ({ index, repo }) => {
  return (
    <tr>
      <TableData header={"Name"}>{repo.name}</TableData>
      <TableData header={"Homepage"}>
        {repo.homepage ? <a href={repo.homepage}>{repo.homepage}</a> : "N/A"}
      </TableData>
      <TableData header={"Watcher"}>{repo.watchers}</TableData>
      <TableData header={"Description"}>{repo.description}</TableData>
    </tr>
  )
}

// - Loading screen - //

const H1 = styled.h1`
  color: #ee6c4d;
`

export const Loading = ({ loaded }) => {
  const [numDots, setNumDots] = useState(0)
  useEffect(() => {
    let id = setInterval(() => setNumDots((numDots + 1) % 4), 500)
    if (loaded) return () => clearInterval(id)
    return () => clearInterval(id)
  }, [loaded, numDots])
  return <H1>Loading{".".repeat(numDots)}</H1>
}
