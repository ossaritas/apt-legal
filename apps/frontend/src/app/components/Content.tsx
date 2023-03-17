import Clients from './Clients';

const Content = () => {
  return (
    <div className=" ml-4 rounded  p-2">
      <div className="m-1 border-b-2 ">{`Date: ${new Date(
        new Date()
      ).toDateString()}`}</div>
      <div className="bg-dark-blue mt-2">
        <Clients />
      </div>
    </div>
  );
};

export default Content;
