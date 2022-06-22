import React from "react";
import PhotoItem from "./PhotoItem";
import { useGetRequest } from "../actions/useGetRequest";

const BASE_URL = "https://api.pexels.com/v1/";
const CURATED = "curated?";
const API_KEY = "563492ad6f917000010000014640aabb4e9d420cbe1c0df7daf4c2bf";
const PER_PAGE = "per_page=5";

const testedObj = {
  id: 12458839,
  width: 2624,
  height: 3936,
  url: "https://www.pexels.com/photo/luna-12458839/",
  photographer: "Josue Bautista Garcia",
  photographer_url: "https://www.pexels.com/@josue-bautista-garcia-222949289",
  photographer_id: 222949289,
  avg_color: "#4A2D29",
  src: {
    original:
      "https://images.pexels.com/photos/12458839/pexels-photo-12458839.jpeg",
    large2x:
      "https://images.pexels.com/photos/12458839/pexels-photo-12458839.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    large:
      "https://images.pexels.com/photos/12458839/pexels-photo-12458839.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
    medium:
      "https://images.pexels.com/photos/12458839/pexels-photo-12458839.jpeg?auto=compress&cs=tinysrgb&h=350",
    small:
      "https://images.pexels.com/photos/12458839/pexels-photo-12458839.jpeg?auto=compress&cs=tinysrgb&h=130",
    portrait:
      "https://images.pexels.com/photos/12458839/pexels-photo-12458839.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800",
    landscape:
      "https://images.pexels.com/photos/12458839/pexels-photo-12458839.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200",
    tiny: "https://images.pexels.com/photos/12458839/pexels-photo-12458839.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280",
  },
  liked: false,
  alt: "Luna ",
};

const PhotoGallery = () => {
  const [isLoading, errorMessage, items] = useGetRequest(
    BASE_URL,
    CURATED,
    PER_PAGE,
    API_KEY
  );

  console.log(items[4]);

  return (
    <div className="photo-gallery">
      <PhotoItem photo={testedObj} />
      <PhotoItem photo={testedObj} />
      <PhotoItem photo={testedObj} />
      <PhotoItem photo={testedObj} />
      <PhotoItem photo={testedObj} />
      <PhotoItem photo={testedObj} />
    </div>
  );
};

export default PhotoGallery;
