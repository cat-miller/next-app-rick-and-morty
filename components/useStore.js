import create from 'zustand';

const useStore = create(set => {
  return {
    fetchedCharacters: null,
    fetchCharacters: url => {
      if (url) {
        fetch(url)
          .then(response => response.json())
          .then(data => {
            set({ fetchedCharacters: data });
          })

          .catch(error_ => {
            console.error(error_);
          });
      }
    },
  };
});

export default useStore;
