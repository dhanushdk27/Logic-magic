import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function CardFile( { jobFromData, priceFromeData, ratingFromData, detailsFromData } ) {
    return (
        <Card style={{boxShadow: "rgb(0 0 0 / 19%) 0px 4px 13px 4px",height:"fit-content"}} sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="140"
          image="https://images.wallpaperscraft.com/image/single/lizard_reptile_amphibian_162180_300x168.jpg"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {jobFromData}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {priceFromeData}
          </Typography>
          <Typography gutterBottom variant="h5" component="div">
            {ratingFromData}
          </Typography>
          {detailsFromData.indexOf(",") != -1 ? detailsFromData.split(",").map(e => (
          <Typography variant="body2" color="text.secondary">
           {detailsFromData}
          </Typography>
           )) :
           <Typography variant="body2" color="text.secondary">
            {detailsFromData}
            </Typography>
          }
        </CardContent>
        <CardActions>
          <Button size="small">Add to Card</Button>
        </CardActions>
      </Card>
    );
}

export default CardFile;