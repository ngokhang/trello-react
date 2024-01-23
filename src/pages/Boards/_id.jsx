// Board details
import Container from "@mui/material/Container";
import React from "react";
import BoardBar from "~/pages/Boards/BoardBar";
import BoardContent from "./BoardContent";
import AppBar from "~/components/AppBar";

const Board = () => {
  return (
    <Container
      disableGutters
      maxWidth={false}
      sx={{ height: "100vh", backgroundColor: "primary.main" }}
    >
      <AppBar />
      <BoardBar />
      <BoardContent />
    </Container>
  );
};

export default Board;
