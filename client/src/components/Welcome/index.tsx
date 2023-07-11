import React from "react";
import "./Welcome.css";

type WelcomeStateProps = {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
};

export default function Welcome({ name, setName }: WelcomeStateProps) {
  //  get the the user name
  return (
    <main className="Welcome">
      <h1>Are You Ready to Start Quiz.</h1>

      <div className="user-name">
        <label htmlFor="name">Enter Your Name</label>
        <input
          autoFocus
          id="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Please Enter Your Name..."
        />
      </div>
    </main>
  );
}
