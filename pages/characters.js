import { useEffect } from 'react';
import Card from '../components/Card';
import CardsWrapper from '../components/CardsWrapper';
import Nav from '../components/Nav';
import useStore from '../components/useStore';

export default function CharactersPage() {
  const fetchCharacters = useStore(state => state.fetchCharacters);
  const fetchedCharacters = useStore(state => state.fetchedCharacters);

  useEffect(() => {
    fetchCharacters('https://rickandmortyapi.com/api/character/');
  }, [fetchCharacters]);

  async function addToCollection(character) {
    const res = await fetch('/api/collection/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(character),
    });
    const message = await res.json();
    console.log(message);
  }

  return (
    <>
      <CardsWrapper>
        {fetchedCharacters?.results.map(character => (
          <Card key={character.id} name={character.name}>
            {character.name}
            <img src={character.image} alt={character.name} />
            <ul>
              <li>Status: {character.status}</li>
              <li>Species: {character.species}</li>
              <li>Gender: {character.gender}</li>
              <li>Location: {character.location.name}</li>
            </ul>
            <button
              onClick={() => {
                addToCollection(character);
              }}
            >
              Add to Collection
            </button>
          </Card>
        ))}
      </CardsWrapper>
      <Nav></Nav>
    </>
  );
}
