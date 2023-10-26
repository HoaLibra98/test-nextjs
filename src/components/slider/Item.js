"use client";

import { Card, CardContent, CardMedia, Typography } from "@mui/material";

const SlideItem = ( props ) => {
    const { item } = props;
    return (
        <Card>
            <CardMedia sx={ { height: 250 } } image={ item.image } title={ item.name } />
            <CardContent style={ { padding: 16 } }>
                <Typography
                    fontSize={ "16px" }
                    fontWeight={ 700 }
                    textAlign={ "center" }

                >
                    { item.type } - { item.code }
                </Typography>
                <Typography
                    fontSize={ "16px" }
                    fontWeight={ 700 }
                    textAlign={ "center" }

                >
                    { item.name }
                </Typography>
                <Typography
                    textAlign={ "center" }
                    fontSize={ "18px" }
                    fontWeight={ 600 }

                    color="#BB9D07"
                >
                    From { item.price + item.currency }
                </Typography>
            </CardContent>
        </Card>
    );
};

export default SlideItem;
