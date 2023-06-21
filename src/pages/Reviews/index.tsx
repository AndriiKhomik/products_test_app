import React from "react";
import { Container } from "react-bootstrap";
import AddReviewForm from "../../components/AddReviewForm";
import ReviewsList from "../../components/ReviewsList";

const Reviews = () => {
  return (
    <Container className="bg p-2">
      <ReviewsList />
      <AddReviewForm />
    </Container>
  );
};

export default Reviews;
