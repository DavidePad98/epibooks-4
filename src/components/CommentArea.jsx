import { useEffect, useState } from "react";
import CommentList from "./CommentList";
import AddComment from "./AddComment";
import Loading from "./Loading";
import Error from "./Error";

const CommentArea = ({ asin }) => {
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    if (asin !== null) fetchUp();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [asin]);

  const fetchUp = async () => {
    setIsLoading(true);
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWJiOGZhNDViMjYxNTAwMTk4YTY5MzEiLCJpYXQiOjE3MDY3OTA4MjAsImV4cCI6MTcwODAwMDQyMH0.fYFlw9pK82L37PnqUapOfqDBqs9q4EWfZMiz029nFaE",
          },
        }
      );
      console.log(response);
      if (response.ok) {
        let comments = await response.json();
        setComments(comments);
        setIsLoading(false);
        setIsError(false);
      } else {
        setIsLoading(false);
        setIsError(true);
      }
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      setIsError(true);
    }
  };
  return (
    <div className="text-center">
      {isLoading && <Loading />}
      {isError && <Error />}
      <AddComment asin={asin} />
      <CommentList commentsToShow={comments} />
    </div>
  );
};

export default CommentArea;
