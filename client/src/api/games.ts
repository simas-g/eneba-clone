const API_URL = import.meta.env.VITE_BACKEND_URL

export const getGames = async () => {
  const response = await fetch(`${API_URL}/list`);
  const data = await response.json();
  return data;
}

export const searchGames = async (search: string) => {
  const response = await fetch(`${API_URL}/list?search=${search}`);
  const data = await response.json();
  return data;
}
