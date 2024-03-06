
const  apicall = async (username, password) =>{ 
  
  console.log('username is::: ', username ,' psw: ', password);

  const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    });

    if (response.ok) {
      const user = await response.json();
      return user; 
    }
    const error = await response.text();
    throw Error(error);
};
export default apicall; 