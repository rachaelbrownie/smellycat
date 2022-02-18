const deleteFavorite = async(data: { email: string, course_id: number }) => {
  const res = await fetch("https://mc-dev-5.herokuapp.com/jsonapi/v1/favorite", {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data) 
  });
  console.log('res', res);
  if (res.status !== 204) {
    throw new Error('couldnt delet favorite')
  }
}

export {
  deleteFavorite
}