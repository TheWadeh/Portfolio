import React from "react";

export default function App() {
  return (
    <div className="container">
      <div className="left">
        <label htmlFor="">
          <input type="text" />
        </label>
        <button>Search</button>
        <h1>Left Side</h1>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Illo facere
          inventore molestiae voluptas iste ipsum doloribus natus, nostrum
          obcaecati similique.
        </p>
        <button>Left Click</button>
      </div>
      <div className="right">
        <div>
          <h1>Right Side</h1>
          <img src="https://via.placeholder.com/150" alt="" />
        </div>
        <div>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Suscipit
            quasi assumenda maiores odio id, dignissimos mollitia ab! Sit,
            blanditiis repudiandae.
          </p>
          <button>Right click</button>
        </div>
      </div>
    </div>
  );
}
