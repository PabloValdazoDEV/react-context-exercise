const GetAllCharacters = async (characterId) => {
    const url = `https://thronesapi.com/api/v2/Characters/${characterId}`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const json = await response.json();
      console.log(json)
      return json
    } catch (error) {
      console.error(error.message);
    }
  };
  
  export default GetAllCharacters
  