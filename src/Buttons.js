import styled from "styled-components"
import React from "react"

const Button = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  color: #ee6c4d;
`
const ButtonContainer = styled.div`
  display: flex;
`
const Buttons = ({ curPage, totalPages, setPage }) => {
  console.log("DEBUG - totalPages:", totalPages)
  const pagesArray = new Array(totalPages).fill("")
  return (
    <ButtonContainer>
      <Button onClick={() => setPage("-")}>Prev Page</Button>
      {pagesArray.map((e, index) => (
        <Button key={"button" + index} onClick={() => setPage(index)}>
          {index + 1}
        </Button>
      ))}
      <Button onClick={() => setPage("+")}>Next page</Button>
    </ButtonContainer>
  )
}

export default Buttons
