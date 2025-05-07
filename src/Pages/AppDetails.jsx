import React, { useState } from "react";
import { Navigate, useLoaderData, useParams } from "react-router";
import { FaDownload, FaStar } from "react-icons/fa";
import toast from "react-hot-toast";

const AppDetails = () => {
  const data = useLoaderData();
  const { id } = useParams();
  // const [app] = data;
  // console.log(id);

  const app = data.find((item) => item.id === id);

  const [review, setReview] = useState("");
  const [rating, setRating] = useState(1); // default rating
  const [userReview, setUserReview] = useState([]);
  const [install, setInstall] = useState(false);
  const [canReview, setCanReview] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault;

    if (review.trim() !== "") {
      document.getElementById("my_modal_5").close();
      // console.log(review, rating);
      const obj = {
        rating,
        review,
      };
      setUserReview([...userReview, obj]);
      setReview("");
      setRating(1);
      toast.success("Review Added Successfully !!");
      // console.log(userReview);
    } else {
      // alert("please write your comment");
      toast.error("please write your comment");
    }
  };

  const handleReview = () => {
    if (canReview) {
      document.getElementById("my_modal_5").showModal();
    } else {
      // alert("Install the app first");
      toast.error("Install the app first");
    }
  };

  if (!app) {
    return <Navigate to="/appNotFound"></Navigate>;
  }

  // console.log(name);
  return (
    <div className="min-h-[calc(100vh-115px)] w-11/12 mx-auto max-w-[1200px] space-y-6 mb-[100px]">
      {/* Banner */}
      <div className="w-full h-64 rounded-2xl overflow-hidden">
        <img
          src={app.banner}
          alt={`${app.name} banner`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Header section */}
      <div className="flex md:items-center gap-4 justify-between md:flex-row flex-col">
        <div className="flex gap-3">
          <img
            src={app.thumbnail}
            alt={`${app.name} thumbnail`}
            className="w-20 h-20 rounded-xl"
          />
          <div>
            <h2 className="text-2xl font-bold">{app.name}</h2>
            <p className="text-sm text-gray-400">by {app.developer}</p>
          </div>
        </div>
        <div className="ml-auto flex gap-2">
          <button
            className="btn btn-secondary text-gray-300"
            onClick={handleReview}>
            add review
          </button>
          <button
            onClick={() => {
              setInstall(!install);
              toast.success(
                `${install ? "Uninstall " : "Install "} Successful`
              );
              setCanReview(true);
            }}
            className="btn btn-primary">
            {install ? "Uninstall" : "Install"}
          </button>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
        <div>
          <p className="font-semibold">Downloads</p>
          <p>
            <FaDownload className="inline mr-1" />{" "}
            {app.downloads.toLocaleString()}
          </p>
        </div>
        <div>
          <p className="font-semibold">Category</p>
          <p>{app.category}</p>
        </div>
        <div>
          <p className="font-semibold">Rating</p>
          <p className="flex items-center">
            <FaStar className="inline text-yellow-400 mr-1" /> {app.rating}
          </p>
        </div>
      </div>

      {/* Description */}
      <div>
        <h3 className="text-xl font-semibold">Description</h3>
        <p className="text-gray-300">{app.description}</p>
      </div>

      {/* Features */}
      <div>
        <h3 className="text-xl font-semibold">Features</h3>
        <ul className="list-disc list-inside space-y-1">
          {app.features.map((feature, index) => (
            <li key={index} className="text-gray-300">
              {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* Reviews */}
      <div className="space-y-2">
        <h3 className="text-xl font-semibold">User Reviews</h3>
        <div className="space-y-4">
          {app.reviews.map((review, index) => (
            <div key={index} className="p-4 bg-[#39455f6d] rounded-xl">
              <p className="font-semibold"> User : {review.user}</p>
              <p className="text-yellow-400 flex items-center">
                Rating : &nbsp;
                <FaStar className="inline mr-1" /> {review.rating}
              </p>
              <p className="text-gray-300">Comment : {review.comment}</p>
            </div>
          ))}
        </div>
      </div>
      {/* User review */}

      {userReview.length > 0 && (
        <div className="space-y-2">
          <h3 className="text-xl font-semibold">Your Reviews</h3>
          <div className="space-y-4">
            {userReview.map((review, index) => (
              <div key={index} className="p-4 bg-[#39455f6d] rounded-xl">
                <p className="text-yellow-400 flex items-center">
                  Rating : &nbsp;
                  <FaStar className="inline mr-1" /> {review.rating}
                </p>
                <p className="text-gray-300">Comment : {review.review}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <h3 className="font-bold text-lg mb-[20px]">Give your feedback</h3>
          <div className="flex gap-[10px]">
            <p>Rating</p>
            <div className="rating rating-sm mb-[10px]">
              {[1, 2, 3, 4, 5].map((value) => (
                <input
                  key={value}
                  type="radio"
                  name="rating"
                  className="mask mask-star-2 bg-orange-400"
                  aria-label={`${value} star`}
                  checked={rating === value}
                  onChange={() => setRating(value)}
                />
              ))}
            </div>
          </div>
          <textarea
            name="review"
            placeholder="Write your review here..."
            className="textarea textarea-primary w-full"
            rows={5}
            value={review}
            onChange={(e) => setReview(e.target.value)}
          />
          <div className="modal-action">
            {/* if there is a button in form, it will close the modal */}
            <button onClick={handleSubmit} className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </dialog>
    </div>
  );
};

export default AppDetails;
