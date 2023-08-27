import { Button, ListGroup, Rating } from "flowbite-react";

const Starts = ({ number }) => {
  const starts = [];
  for (let index = 0; index < number; index++) {
    starts.push(<Rating.Star key={index} />);
  }
  return <>{starts}</>;
};

const Answers = ({ answers, onReset }) => {
  return (
    <>
      <ListGroup>
        {answers.map((item, pos) => (
          <ListGroup.Item key={pos}>
            <div className="flex flex-col py-2 px-4">
              <p>{item.question.texto}</p>
              <Rating size="lg" className="text-2xl text-yellow-300">
                <Starts number={item.stars} />
              </Rating>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <Button color="light" className="mt-4" onClick={onReset} >Reiniciar</Button>
    </>
  );
};

export default Answers;
