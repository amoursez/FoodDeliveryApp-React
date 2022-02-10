import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { productContext } from "../../Contexts/ProductsContext";
/* import "../Comments/Comments.css"; */

export default function CommentCard({ item }) {
  const { deleteComment, useAuth, getComment } = React.useContext(productContext);

  const currentUser = useAuth();
  let icons = (
    <CardActions
      disableSpacing
      style={{ display: "flex", justifyContent: "right" }}
    >
      {currentUser?.email === "amoursez@gmail.com" ? (
        <>
          <CardActions disableSpacing>
            <IconButton onClick={() => deleteComment(item.id)}>
              <DeleteIcon />
            </IconButton>
          </CardActions>
        </>
      ) : (
        <IconButton aria-label="share">
          <FavoriteIcon />
        </IconButton>
      )}
    </CardActions>
  );
  return (
    <Card sx={{ maxWidth: 2000, maxHeight: 180 }}>
      {/* <Link to={/detail/${item.id}} style={{textDecoration: 'none', color: 'black'}}> */}
      <CardContent>
        <Typography
          marginBottom="7px"
          variant="body2"
          color="darkblue"
          fontSize="16px"
        >
          {item.comment}
        </Typography>
        <div className="titleName">
          <p fontSize="18px">имя</p>
          <Typography
            marginBottom="7px"
            variant="success"
            color="darkblue"
            fontSize="16px"
            // height="40px"
            align="right"
          >
            {item.name}
          </Typography>
        </div>
      </CardContent>

      <CardContent>{icons}</CardContent>
    </Card>
  );
}
