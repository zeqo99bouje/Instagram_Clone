import React, { useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar/Sidebar';
import Home from './Home/Home';
import Notifications from './Notification/Notifications';
import Profile from './Profile/Profile';
import Settings from './Settings/Settings';
import './App.css';
import Recherche from './Recherche/Recherche';
import NouvellePost from './NouvellePost/NouvellePost';
import Reels from './Reels/Reels';
import Message from './Message/Message';

const App = () => {
  const [posts, setPosts] = useState([

    {
      userAvatar: 'https://i.pinimg.com/originals/a9/f0/b1/a9f0b14597e20acd2f1bcebe416a8b29.jpg',
      username: 'Cristiano Ronaldo',
      image: 'https://editorial.uefa.com/resources/0253-0d81f3e9870e-8eb0afa6ee2a-1000/cristiano_ronaldo_portugal_.jpeg',
      caption: ' Portuguese',
      likes: 1900,
    },
    {
      userAvatar: 'https://media.licdn.com/dms/image/D5603AQHafJjEx9bUHw/profile-displayphoto-shrink_800_800/0/1696279568560?e=1706140800&v=beta&t=ZHy61rBJZfcRpgBNAaNox2HMU5-48xCXjpHHIH4gQKM',
      username: 'Boujenoui zakaria',
      image: 'https://scontent.frak2-1.fna.fbcdn.net/v/t39.30808-6/384777899_278312495075977_4691724363715943429_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=efb6e6&_nc_eui2=AeEu4RcgHFQ6gIAvE-divQJXacBU7wYkC8FpwFTvBiQLwcY2DR1fuiFJ4Bseztfu-Wz_uvZysjdpePVXyLQtdCvk&_nc_ohc=Ocgfv_5T8ScAX_PBk_3&_nc_ht=scontent.frak2-1.fna&oh=00_AfDxwqbZNh8e9HSmPCuVMHCxBIc2NkL_btwaMLLwv9pm8Q&oe=6570F100',
      caption: ' A beautiful day!',
      likes: 100,
    },
 
    {
      userAvatar: 'https://www.techrepublic.com/a/hub/i/2021/02/18/a89b6711-8e8d-4b34-a0bd-176d13042e9c/software-developer-on-php-code.jpg',
      username: 'Zouine Med',
      image: 'https://www.thecoderpedia.com/wp-content/uploads/2020/06/How-to-learn-Programming.jpg',
      caption: ' Learn Programming !',
      likes: 120,
    },

    {
      userAvatar: 'https://media.licdn.com/dms/image/D4D03AQF9veSsnZnsaQ/profile-displayphoto-shrink_200_200/0/1701936473965?e=1707955200&v=beta&t=Ko4HPX6ZaCQGoknSz6T1JtS2eSLYmiGlHfvoms385HU',
      username: 'Almou Oualid',
      image: 'https://cdn.vox-cdn.com/thumbor/BwMVMQS2ygNgNJJXGTT8cgGFOgo=/0x0:5286x3616/1820x1213/filters:focal(2221x1386:3065x2230)/cdn.vox-cdn.com/uploads/chorus_image/image/69227930/1313863278.0.jpg',
      caption: ' Premier League',
      likes: 80,
    },

    {
      userAvatar: 'https://i.pinimg.com/originals/66/46/51/66465125902f0b331e4b1d60397b40b7.jpg',
      username: 'Messi',
      image: 'https://wallpaperaccess.com/full/2120004.jpg',
      caption: ' Match day',
      likes: 1200,
    },

   
  ]);

  const handleAddPost = (newPost) => {
    setPosts([newPost, ...posts]);
  };

  const followersCount = 100;
  const followingCount = 50;

  return (
    <div className="d-flex" id="wrapper">
      <Sidebar />
      <div id="page-content-wrapper">
        <Routes>
          <Route index element={<Home posts={posts} />} />
          <Route path="/recherche" element={<Recherche />} />
          <Route path="/notifications" element={<Notifications />} />
          <Route
            path="/profile"
            element={<Profile posts={posts} followersCount={followersCount} followingCount={followingCount} />}
          />
          <Route path="/settings" element={<Settings />} />
          <Route
            path="/nouvellepost"
            element={<NouvellePost onAddPost={handleAddPost} />}
          />
          <Route path="/Reels" element={<Reels />} />
          <Route path="/Message" element={<Message />} />
        
          
        </Routes>
      </div>
    </div>
  );
};

export default App;
