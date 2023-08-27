import { GoStar } from "react-icons/go";
import { Card, Rating } from "flowbite-react";
import { useState } from "react";

const votes = [1, 2, 3, 4, 5];

const Question = ({ title, id, onClick }) => {
  const [positionHover, setPositionHover] = useState(-1);

  return (
    <Card>
      <div className="flex flex-col items-center m-auto py-11 gap-5">
        <h5 className="mb-2 text-3xl text-center font-bold text-gray-900 dark:text-white">
          {title}
        </h5>
        <Rating size="lg" className="text-2xl">
          {votes.map((number, index) => (
            <Rating.Star
              key={number}
              className={`${
                index < positionHover ? `text-yellow-300` : ``
              } cursor-pinter`}
              onMouseEnter={() => setPositionHover(index + 1)}
              onMouseLeave={() => setPositionHover(0)}
              onClick={() => onClick(id, index + 1)}
            />
          ))}
        </Rating>
      </div>
    </Card>
  );
};

export default Question;
