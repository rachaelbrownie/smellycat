

const getCoursesByUser = async() => {
  const res = await fetch("https://mc-dev-5.herokuapp.com/jsonapi/v1/courses?email=roachedezigne@gmail.com", {
    headers: {
      'Content-Type': 'application/json'
    },
  });
  const result = await res.json();

  return result;
}

export {
  getCoursesByUser
}