import { memo, useState } from "react";
import { useCounter } from "testinghost/useCounter";

const RemoteSharing: React.FC = memo(() => {
  const [count, setCount] = useState(0);
  const counter = useCounter();

  function handleIncrement() {
    setCount((pevState) => ++pevState);
    counter.setCount(++counter.count);
  }

  return (
    <div
      style={{
        padding: ".625rem",
        border: "1px solid grey",
        borderRadius: ".625rem",
      }}
    >
      <div style={{ marginBottom: ".25rem" }}>
        <b>Current counter:</b> {count}
        <br />
      </div>
      <div style={{ marginBottom: ".25rem" }}>
        <b>Host counter:</b>
        {counter.count}
      </div>
      <button onClick={handleIncrement}>Increment Remote One</button>
    </div>
  );
});

export default RemoteSharing;
