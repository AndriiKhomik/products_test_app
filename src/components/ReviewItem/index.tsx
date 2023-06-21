import React, { useState, FC } from "react";
import { Card, Button } from "react-bootstrap";
import { Rating } from "@mui/material";
import { Review } from "../../types";
import "bootstrap/dist/css/bootstrap.min.css";

type TReview = {
  review: Review;
};

const ReviewItem: FC<TReview> = ({ review }) => {
  const [isReadMore, setIsReadMore] = useState<boolean>(false);

  let reviewContent = review.comment;
  if (review.comment.length > 200) {
    reviewContent = `${review.comment.slice(0, 200)}...`;
  }

  return (
    <Card
      className="p-4"
      style={{ backgroundColor: "#9a9a9a", border: "none" }}
    >
      <Card.Text className="bg cardTitle">{review.author}</Card.Text>
      <Card.Text>{new Date(review.date).toDateString()}</Card.Text>
      <Rating
        name="read-only"
        value={review.rate}
        readOnly
        sx={{ color: "gray" }}
      />
      <Card.Text>{isReadMore ? review.comment : reviewContent}</Card.Text>

      <Button
        variant="link"
        className="showMoreButton riviewButton"
        onClick={() => setIsReadMore(!isReadMore)}
      >
        {isReadMore ? "Less" : "Read more"}
      </Button>
    </Card>
  );
};

export default ReviewItem;
