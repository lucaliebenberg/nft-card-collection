import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

// imports
import Card from "./components/Card";

import NFT1 from "../src/assets/nft-image.png";
import NFT2 from "../src/assets/nft-image-2.png";
import NFT3 from "../src/assets/nft-image-3.png";
import NFT4 from "../src/assets/nft-image-4.png";
import NFT5 from "../src/assets/nft-image-5.png";
import NFT6 from "../src/assets/nft-image-6.png";
import NFT7 from "../src/assets/nft-image-7.png";

const App = () => {
  return (
    <div className="App">
      {/* <div className="container"> */}
      <Card
        image={NFT1}
        title="#3429"
        description="Our Equilibrium collection promotes balance and calm."
        price="0.041 ETH"
      />
      <Card
        image={NFT2}
        title="#298"
        description="A unique digital collectible of a cute cat wearing a bow tie"
        price="0.103 ETH"
      />
      <Card
        image={NFT3}
        title="#85730"
        description="Rare digital sticker of a popular meme"
        price="1.020 ETH"
      />
      <Card
        image={NFT4}
        title="#21"
        description="Exclusive digital trading card of a legendary Pokémon."
        price="0.513 ETH"
      />
      <Card
        image={NFT5}
        title="#85412"
        description="Digital collectible of a famous painting."
        price="5.124 ETH"
      />
      <Card
        image={NFT6}
        title="#3"
        description="Collectible digital comic book cover."
        price="0.035 ETH"
      />
      <Card
        image={NFT7}
        title="#3429"
        description="One-of-a-kind pattern that has been hand crafted by famous computer wizard called Bill Gates."
        price="0.001 ETH"
      />
      {/* </div> */}
    </div>
  );
};

export default App;
