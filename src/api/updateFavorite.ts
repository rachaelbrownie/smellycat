const updateFavorite = async(data: { email: string, course_id: number }) => {
  const res = await fetch("https://mc-dev-5.herokuapp.com/jsonapi/v1/favorite", {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  const result = await res.json();

  return result;
}

export {
  updateFavorite
}