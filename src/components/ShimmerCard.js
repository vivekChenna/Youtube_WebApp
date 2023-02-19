import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const ShimmerCard = () => {
  return (
    <div className=" w-80 h-60  mt-4 p-4">
      <Skeleton height={150} />

      <div className="flex">
        <div className="pt-2">
          <Skeleton circle={true} height={50} width={50} />
        </div>

        <div className=" w-full pt-3 pl-2">
          <Skeleton width={220} height={20} />
          <Skeleton width={220} height={20} />
        </div>
      </div>
    </div>
  );
};

export default ShimmerCard;
