const  apicall = async ({username, password}) =>{ 

  const response = await fetch('http://backend:3001/users/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const user = await response.json();
      window.localStorage.setItem('token', user.token)
      return user; 
    }
    const error = await response.text();
    throw Error(error);
};
export default apicall; 