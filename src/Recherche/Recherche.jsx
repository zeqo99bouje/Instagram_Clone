import React, { useState } from 'react';
import './Recherche.css';
import StoriesNavbar from '../StoriesNavbar/StoriesNavbar';

const sampleUsers = [
  { id: 1, username: 'Zakaria Boujenoui', avatar: 'https://media.licdn.com/dms/image/D5603AQHafJjEx9bUHw/profile-displayphoto-shrink_800_800/0/1696279568560?e=1706140800&v=beta&t=ZHy61rBJZfcRpgBNAaNox2HMU5-48xCXjpHHIH4gQKM' },
  { id: 2, username: 'Almou Oualid', avatar: 'https://media.licdn.com/dms/image/D4D03AQF9veSsnZnsaQ/profile-displayphoto-shrink_200_200/0/1701936473965?e=1707955200&v=beta&t=Ko4HPX6ZaCQGoknSz6T1JtS2eSLYmiGlHfvoms385HU' },
  { id: 3, username: 'Zouine med', avatar: 'https://www.techrepublic.com/a/hub/i/2021/02/18/a89b6711-8e8d-4b34-a0bd-176d13042e9c/software-developer-on-php-code.jpg' },
  { id: 4, username: 'Zouine', avatar: 'https://picsum.photos/50?random=4' },
  { id: 5, username: 'Zakaria', avatar: 'https://picsum.photos/50?random=5' },
  { id: 6, username: 'Almou', avatar: 'https://picsum.photos/50?random=6' },
  { id: 7, username: 'Messi ', avatar: 'https://i.pinimg.com/originals/66/46/51/66465125902f0b331e4b1d60397b40b7.jpg' },
  { id: 8, username: 'Cristiano Ronaldo', avatar: 'https://i.pinimg.com/originals/a9/f0/b1/a9f0b14597e20acd2f1bcebe416a8b29.jpg' },
];

const Recherche = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [hasResults, setHasResults] = useState(true);

  const handleSearch = () => {
    if (searchTerm.trim() === '') {
      setSearchResults([]);
      setHasResults(true);
      return;
    }

    const results = sampleUsers.filter((user) =>
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setSearchResults(results);
    setHasResults(results.length > 0);
  };

  return (
    <div>
      <StoriesNavbar />
      <div className="search-container">
        <input
          type="text"
          placeholder="Recherche"
          className="search-input"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            handleSearch(); // Call handleSearch on each input change
          }}
        />
        <button onClick={handleSearch}>Rechercher</button>

        {!hasResults && searchTerm.trim() !== '' && (
            <div>
                  <br />
                <div className="alert alert-danger p-2  " role="alert"> 
                  Aucun résultat trouvé. Veuillez essayer une autre recherche !!!.
                </div>
            </div>
        )}

        {hasResults && searchResults.length > 0 && (
          <div className="search-results">
            <h2>Résultats de la recherche :</h2>
            {searchResults.map((user) => (
              <div key={user.id} className="search-result">
                <img src={user.avatar} alt={`${user.username} Avatar`} />
                <span>{user.username}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Recherche;
