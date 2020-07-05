import styled from "styled-components"
import React from "react"

const buttonSize = "40px"
const Button = styled.button`
  border: none;
  cursor: pointer;
  background: transparent;
  color: #ee6c4d;
  font-weight: 500;
  font-size: 18px;
  padding: 5px 10px;
  min-height: ${buttonSize};
  min-width: ${buttonSize};
  border-radius: ${buttonSize};
  position: relative;
  &:hover {
    ::before {
      border-radius: ${buttonSize};
      content: "";
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      top: 0;
      background-color: white;
      opacity: 0.1;
    }
  }
`
const ButtonContainer = styled.div`
  display: flex;
`
const Buttons = ({ curPage, totalPages, setPage }) => {
  console.log("DEBUG - totalPages:", totalPages)
  const pagesArray = new Array(totalPages).fill("")
  return (
    <ButtonContainer>
      <Button onClick={() => setPage("-")}>Prev</Button>
      {pagesArray.map((e, index) => (
        <Button key={"button" + index} onClick={() => setPage(index)}>
          {index + 1}
        </Button>
      ))}
      <Button onClick={() => setPage("+")}>Next</Button>
    </ButtonContainer>
  )
}

export default Buttons
