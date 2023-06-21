import React from "react";
import { Outlet } from "react-router-dom";
import { Container } from "react-bootstrap";
import Navibar from "../Navibar";

const SharedLayout = () => {
  return (
    <>
      <Navibar />
      <Container>
        <Outlet />
      </Container>
    </>
  );
};

export default SharedLayout;
