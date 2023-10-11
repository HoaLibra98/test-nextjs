"use client";
import React from "react";
import Slider from "@/components/slider";
import useProduct from "@/hook/product";
import TitlePage from "../titlePage";
import { Box } from "@mui/material";

const Explore = () => {
  const { data } = useProduct();
  if (data?.length > 0) {
    return (
      <Box mb={5}>
        <TitlePage title="EXPLORE OUR OTHER" />
        <Slider data={data} />
      </Box>
    );
  }
  return null;
};

export default Explore;
