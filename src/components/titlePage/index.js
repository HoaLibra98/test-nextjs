import { Box, Typography } from "@mui/material";
import React from "react";
import { Domine } from "next/font/google";

const domine = Domine({ subsets: ["latin"], weight: "700" });
const TitlePage = (props) => {
  const { title } = props;
  return (
    <>
      <Typography
        color="#26231E"
        fontSize={"36px"}
        fontWeight={700}
        textAlign={"center"}
        className={domine.className}
        pt={"64px"}
      >
        {title}
      </Typography>
      <Box
        width={90}
        height={2}
        mt={"24px"}
        mb={"64px"}
        mx="auto"
        sx={{
          backgroundColor: "#26231E",
        }}
      />
    </>
  );
};

export default TitlePage;
