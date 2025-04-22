
import React from "react";
import './../styles/App.css';
import PageLayout from "./PageLayout";

const App = () => {
  return (
    <div>
      {/* Do not remove the main div */}
      <PageLayout
        header={<h1>Welcome to my website</h1>}
        footer={<h3>&copy; 2023 My Website.All rights reserved.</h3>}
      >
        <p>This is the content of my website.</p>
      </PageLayout>
    </div>
  )
}

export default App;
