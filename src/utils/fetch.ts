const API_KEY = 'd3cX4y5vbq5UqLGJ95FHdCmwAQghQXgI3HRva3zi';
const API_URL = 'https://api.nasa.gov/planetary/apod';

export default async (urlParamas?: string) => {
  try {
    const response = await fetch(
      `${API_URL}?api_key=${API_KEY}${
        typeof urlParamas !== 'undefined' && urlParamas?.length > 0
          ? urlParamas
          : ''
      }`,
    );
    const data = await response.json();

    return Promise.resolve(data);
  } catch (error) {
    return Promise.reject(error);
  }
};
