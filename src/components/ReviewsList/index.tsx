import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { Review } from "../../types";
import { getReviews } from "../../api/requests";
import ReviewItem from "../ReviewItem";

const ReviewsList = () => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isShowAll, setIsShowAll] = useState<boolean>(false);

  useEffect(() => {
    getReviews().then((data) => setReviews(data));
  }, []);

  const renderReviewsList = isShowAll ? reviews : reviews.slice(0, 1);

  return (
    <>
      {renderReviewsList.map((review) => (
        <ReviewItem key={review.id} review={review} />
      ))}
      <Button
        className="showMoreButton "
        variant="link"
        onClick={() => setIsShowAll(!isShowAll)}
      >
        {isShowAll ? "Show first review" : "Read all reviews"}
      </Button>
    </>
  );
};

export default ReviewsList;
