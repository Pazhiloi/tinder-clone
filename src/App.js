import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Chats from "./Chats";
import ChatScreen from "./ChatScreen";
import Header from "./Header";
import SwipeButtons from "./SwipeButtons";
import TinderCards from "./TinderCards";
function App() {
  return (
    <div className="app">
      <Router>
        <Routes>
          <Route
            path="/chat/:person"
            element={
              <>
                <Header backButton="/chat" />
                <ChatScreen/>
              </>
            }
          />
          <Route
            path="/chat"
            element={
              <>
                <Header backButton="/" />
                <Chats />
              </>
            }
          />

          <Route
            exact
            path="/"
            element={
              <>
                <Header />
                <TinderCards />
                <SwipeButtons />
              </>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
