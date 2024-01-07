import { PulseLoader } from "react-spinners";

function LoadingScreen() {
  return (
    <div className="loading">
      <PulseLoader size=".7rem" />
      <p>Loading...</p>
    </div>
  )
}

export default LoadingScreen