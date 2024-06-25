const  submitUser = async (_, store) =>{ 
  
  const {
    user: {form: state}     
  }  = store.getState() 

  let route = 'http://backend:3001/users/register' ; 
  let method = 'POST'
  if (state._id){ 
    route =   'http://backend:3001/users/' + state._id ;
    method = 'PUT'
  }

  const response = await fetch(route, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'authorization':'Bearer ' + window.localStorage.getItem('token') 
      },
      body: JSON.stringify(state)
    });
    
    if (response.ok) {
      const user = await response.json();
      return user; 
    }
    const error = await response.text();
    throw Error(error);
};

const  fetchUser = async (filter, __, state) =>{ 
  let route = 'http://backend:3001/users/' ; 
  let method = 'GET'

  const queryParams = new URLSearchParams(); 
  
  if (filter.username) { 
    queryParams.set('username', filter.username)
  }

  if (filter.role) { 
    queryParams.set('role', filter.role)
  }

  route += `?${queryParams.toString()}`

  const response = await fetch(route, {
      method,
      headers: {
        'Content-Type': 'application/json',
        'authorization':'Bearer ' + window.localStorage.getItem('token') 
      },
      body: JSON.stringify(state)
    });
    
    if (response.ok) {
      const user = await response.json();
      return user; 
    }
    const error = await response.text();
    throw Error(error);
};

export {submitUser, fetchUser}; 