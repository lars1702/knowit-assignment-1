import styled from "styled-components"
import React from "react"

// table styling
// https://codepen.io/Lars1702/pen/PoZKNbz

export const AppContainer = styled.div`
  background: #293241;
  min-height: 100vh;
  height: 100%;
`

export const Table = styled.table`
  border-spacing: 0;
  margin: 0 auto;
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
  td {
    font-weight: 400;
    padding: 10px;
    max-width: 500px;
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
      <td>{repo.name}</td>
      <td>{repo.homepage}</td>
      <td>{repo.watchers}</td>
      <td>{repo.description}</td>
    </tr>
  )
}
