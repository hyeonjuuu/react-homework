import ToastButton from "@/components/ToastButton";
import { useState } from "react";

function App() {
  let a = {
    default: "default message",
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
        state="default"
        a={a}
        isSuccess={isSuccess}
        handleChange={handleChange}
      />
    </div>
  );
}

export default App;
