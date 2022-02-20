import React from "react";
import "./style.scss";
import Gover from "../../../assets/network/governce.svg";

const Network = () => {
  return (
    <section className="network">
      <div className="parent">
        <div className="row">
          <h2>Our Mission</h2>

          <p>
            We aim to create revolutionizing solutions for growing digital
            culture on top of blockchain technology to make web3 technologies
            accessible to everyone effortlessly.
          </p>
        </div>

        <div className="card-parent">
          <div class className="card">
            <img src={Gover} alt="" />
            <h4>Blockchain Gaming</h4>
            <p>
              In a typical Web 2.0 game, developers sell in-game currency and
              virtual goods to players. Still, players can’t sell them to
              others, and all the money flows from the players to the gaming
              company. The game business has come a long way since its humble
              origins. Among the wide range of applications of blockchain,
              gaming is one of the most crucial. Blockchain games offer enhanced
              ownership of in-game assets tokenized in NFT or crypto tokens,
              transparency and incentives, reusable games assets & better
              security.
            </p>
          </div>

          <div class className="card">
            <img src={Gover} alt="" />
            <h4>dApps </h4>
            <p>
              Most modern online apps we use every day have the same basic
              structure. There’s a “client” application on your device & then
              there’s a server somewhere. A decentralized application is built
              on a decentralized network that combines a smart contract and a
              frontend user interface. Smart contracts are accessible and
              transparent – like open APIs. dApps can operate without human
              intervention autonomously and are not owned by any one entity.
              dApps are creating a new digital economy of peer-to-peer services
              removing power from monopolistic companies.
            </p>
          </div>

          <div class className="card">
            <img src={Gover} alt="" />
            <h4>NFTs</h4>
            <p>
              NFTs are currently taking the digital art and collectibles world
              by storm. Digital artists are seeing their lives change thanks to
              huge sales to a new crypto-audience. Most popular form of NFTs are
              arts, video, GIFs & music. But really NFTs can be used for almost
              anything, even unique items in the physical world. Non-Fungible
              tokens or NFTs are basically digital tokens on a blockchain wit
              unique identification codes and metadata that distinguish them
              from each other.
            </p>
          </div>
        </div>
        {/* 
        <div className="learn">
          <h2>Work with us</h2>

          <div className="discover">
            <a href="">Discover DOT</a>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Network;
