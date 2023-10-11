"use client";

import React from "react";
import { Card, CardMedia, CardContent, Typography } from "@mui/material";
import { Domine } from "next/font/google";

const domine = Domine({ subsets: ["latin"], weight: "700" });

const SlideItem = (props) => {
  const { item } = props;
  return (
    <Card>
      <CardMedia sx={{ height: 250 }} image={item.image} title={item.name} />
      <CardContent style={{ padding: 16 }}>
        <Typography
          fontSize={"16px"}
          fontWeight={700}
          textAlign={"center"}
          className={domine.className}
        >
          {item.type} - {item.code}
        </Typography>
        <Typography
          fontSize={"16px"}
          fontWeight={700}
          textAlign={"center"}
          className={domine.className}
        >
          {item.name}
        </Typography>
        <Typography
          textAlign={"center"}
          fontSize={"18px"}
          fontWeight={600}
          className={domine.className}
          color="#BB9D07"
        >
          From {item.price + item.currency}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default SlideItem;
