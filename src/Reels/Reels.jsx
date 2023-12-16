// Reels.jsx

import React, { useState } from 'react';
import './Reels.css'; 

const Reels = () => {
  const [reelsData, setReelsData] = useState([
    {
      id: 1,
      userAvatar: 'https://picsum.photos/50?random=1',
      video: 'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3',
      caption: 'React js',
      likes: 180,
    },
    {
      id: 2,
      userAvatar: 'https://picsum.photos/50?random=2',
      video: 'https://www.youtube.com/watch?v=mMmiZTgOW2Q&list=PLoMFrq1Jfnr82k8rSczHHvaf7Y_lSPbaW',
      caption: 'Chapitre I : DÉCOUVRIR LE CLOUD',
      likes: 120,
    },
    {
      id: 3,
      userAvatar: 'https://picsum.photos/50?random=3',
      video: 'https://www.youtube.com/watch?v=gX-a4sMWItk&list=RDgX-a4sMWItk&start_radio=1',
      caption: 'La Voce Della Magana l RCA ZINA ',
      likes: 140,
    },
    {
      id:4,
      userAvatar: 'https://picsum.photos/50?random=4',
      video: 'https://www.youtube.com/watch?v=zpPlUTkgaZc&list=PLoMFrq1Jfnr_dJoe9Frq0Trw09v5TDrce',
      caption: 'COMMENT DUPLIQUER PLUSIEURS FOIS UNE FEUILLE DE CALCUL EXCEL EN 1 CLIC',
      likes: 150,
    },

    {
      id: 5,
      userAvatar: 'https://picsum.photos/50?random=5',
      video: 'https://www.youtube.com/watch?v=h29Vk9ylyWw&list=PLpQgsScLDotTqGHHAgSsVsZY25aoANrhO',
      caption: 'React JS Darija V1 - Les aspects avancés de JavaScript',
      likes: 150,
    },
    {
      id: 6,
      userAvatar: 'https://picsum.photos/50?random=6',
      video: 'https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3',
      caption: 'ReactJS Tutorial - 1 - Introduction',
      likes: 112,
    },

  ]);

  return (
    <div className="ReelsContainer">
      <div className="ReelsList">
        {reelsData.map((reel) => (
          <div key={reel.id} className="Reel">
            <iframe
              className="Video"
              src={`https://www.youtube.com/embed/${reel.video}`}
              title={`Reel-${reel.id}`}
              frameBorder="0"
              allowFullScreen
            />
            <div className="ReelDetails">
              <img className="UserAvatar" src={reel.userAvatar} alt="User Avatar" />
              <span className="Likes">{reel.likes} likes</span>
              <p className="Caption">{reel.caption}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Reels;
