import { CircleNotch } from "phosphor-react";

function Loading() {
  return (
    <div className="flex justify-center items-center w-full h-72">
      <CircleNotch size={42} className="animate-spin" />
    </div>
  );
}

export default Loading;
