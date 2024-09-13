import React from "react";
import TournamentLayout from "../components/TournamentLayout";
import TournamentsImg from "../assets/Tournaments.png";
import "../styles/Tournaments.css";
import eafcGameCard from "../assets/eafc-gameCard.png";
import tekkenGameCard from "../assets/tekkenGameCard.png";
import FortniteGameCard from "../assets/FortniteGameCard.png";
import ApexGameCard from "../assets/ApexGameCard.png";
import GameCard from "../components/GameCard";
const GameSection = () => {
  return (
    <TournamentLayout Heading='Games' Img={TournamentsImg}>
        <div className="game-section-container" style={{width: '90%', padding: '100px 0px 100px 74px'}}>
            <div className="row" style={{width: '100%'}}>
                <div className="col card-col">
                    <GameCard url={eafcGameCard} Heading='EAFC 24' gameDetails='EA FC 24 is a football simulation game featuring realistic gameplay, advanced graphics, and updated team rosters.'/>
                </div>
                <div className="col card-col">
                    <GameCard url={tekkenGameCard} Heading='Tekken 8' gameDetails='Tekken 8 is a fast-paced fighting game featuring intense battles, stunning graphics, and an evolved combat system.'/>
                </div>
                <div className="col card-col">
                    <GameCard url={FortniteGameCard} Heading='Fortnite' gameDetails='Fortnite is a popular battle royale game featuring vibrant graphics, fast-paced combat, building mechanics, and frequent updates.'/>
                </div>
            </div>
            <div className="row" style={{width: '100%', paddingTop: '28px'}}>
                <div className="col card-col">
                    <GameCard url={ApexGameCard} Heading='Apex Legends' gameDetails='Apex Legends is a fast-paced battle royale game featuring unique characters, strategic team-based gameplay, and dynamic movement mechanics.'/>
                </div>
            </div>
        </div>
    </TournamentLayout>
  );
};

export default GameSection;
