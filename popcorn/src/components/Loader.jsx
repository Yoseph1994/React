import { WifiLoader } from "react-awesome-loaders";
function Loader() {
  return (
    <>
      <WifiLoader
        background={"transparent"}
        desktopSize={"100px"}
        mobileSize={"100px"}
        text={"Loading..."}
        backColor="#E8F2FC"
        frontColor="#4645F6"
      />
    </>
  );
}

export default Loader;
