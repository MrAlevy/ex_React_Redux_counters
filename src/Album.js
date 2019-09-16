import React, {useState, useEffect} from 'react';

function Album({match}) {

  useEffect(() => {
    fetchItem()
  }, [])

  const [album, setAlbum] = useState({})
  const id = match.params.id

  const fetchItem = async () => {
    const data = await fetch(`https://jsonplaceholder.typicode.com/albums/${id}`)
    const album = await data.json()
    console.log(album)
    setAlbum(album)
  }

  return (
    <div>
      {album.id}
    </div>
  );
}

export default Album;
