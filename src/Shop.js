import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'

function Shop() {

  useEffect(() => {
    fetchItems()
  }, [])

  const [albums, setAlbums] = useState([])

  const fetchItems = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/albums/')
    const albums = await data.json()
    console.log(albums)
    setAlbums(albums)
  }

  return (
    <div>
      {albums.map(album => 
        <div key={album.id}>
          <Link to={{
            pathname: `/shop/${album.id}`,
            state: {album: album}
          }}>
            {album.title}
          </Link>
        </div>
      )}
    </div>
  );
}

export default Shop;
