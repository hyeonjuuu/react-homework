import ToastButton from "@/components/ToastButton";
import { useState } from "react";

function App() {
  let state = {
    success: "success message",
    error: "error message",
  };

  const [isSuccess, setIsSuccess] = useState(true);
  function handleChange() {
    setIsSuccess(!isSuccess);
  }
  return (
    <div className="App">
      <ToastButton
        state={state}
        isSuccess={isSuccess}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
