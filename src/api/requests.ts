import axios from "axios";
import { Product, Review } from "../types";

const BASE_URL = "http://localhost:3500";

export const getProducts = async (): Promise<Product[]> => {
  let products: Product[] = [];
  try {
    const { data } = await axios({
      method: "GET",
      url: `${BASE_URL}/products`,
    });
    products = data;
  } catch (error) {
    console.log(error);
  }
  return products;
};

export const getReviews = async (): Promise<Review[]> => {
  let reviews: Review[] = [];
  try {
    const { data } = await axios({
      method: "GET",
      url: `${BASE_URL}/reviews`,
    });
    reviews = data;
  } catch (error) {
    console.log(error);
  }
  return reviews;
};

export const addReview = async (review: Review) => {
  try {
    await axios({
      method: "POST",
      url: `${BASE_URL}/reviews`,
      data: {
        comment: review.comment,
        author: review.author,
        date: review.date,
        email: review.email,
        rate: 0,
        phone: review.phone,
      },
    });
  } catch (error) {
    console.log(error);
  }
};
