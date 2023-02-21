import "react-loading-skeleton/dist/skeleton.css";
import ShimmerCard from "./ShimmerCard";

const Shimmer = () => {
  return (
    <div className="flex flex-col w-full">
      {/* <div className="flex justify-evenly"> */}
      {/* {Array(9)
          .fill("")
          .map((e) => {
            return (
              <div>
                <Skeleton width={100} height={30} />
              </div>
            );
          })}
      </div> */}

      <div className="flex flex-wrap justify-evenly">
        {Array(50)
          .fill("")
          .map((e, index) => {
            return <ShimmerCard key={index} />;
          })}
      </div>
    </div>
  );
};

export default Shimmer;
