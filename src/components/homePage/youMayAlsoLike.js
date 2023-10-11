"use client";
import React from "react";
import Slider from "@/components/slider";
import useProduct from "@/hook/product";
import TitlePage from "../titlePage";
import { Box, Container } from "@mui/material";

const YouMayAlsoLike = (props) => {
  const { data } = useProduct();
  if (data?.length > 0) {
    return (
      <Box bgcolor="#F6F0E5" pb="64px">
        <Container>
          <TitlePage title="YOU MAY ALSO LIKE" />
          <Slider data={data} />
        </Container>
      </Box>
    );
  }
  return null;
};

export default YouMayAlsoLike;
