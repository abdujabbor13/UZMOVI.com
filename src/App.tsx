import { Button } from "antd";
import { useState } from "react";

const App = () => {
  const [count, setCound] = useState(0)
  return (
    <div className="container-main sm:px-6 lg:px-8">
      <h1>{count}</h1>
      <Button onClick={() => setCound(prev => prev + 1)} type="primary">Bosish</Button>
    </div>
  );
};

export default App;