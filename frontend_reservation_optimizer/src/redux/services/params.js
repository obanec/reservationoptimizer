const  submitParams = async (_, store) =>{ 
  const {
    param: {form: state}     
  }  = store.getState() 
  let route = 'http://backend:3001/configparam/' ; 
  let method = 'POST'
  if (state._id){ 
    route =   'http://backend:3001/configparam/' + state._id ;
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
      const configParam = await response.json();
      return configParam; 
    }
    const error = await response.text();
    throw Error(error);
};

const  fetchParams = async (filter, __, state) =>{ 
  let route = 'http://backend:3001/configparam/' ; 
  let method = 'GET'

  const queryParams = new URLSearchParams(); 
  
  if (filter.paramname) { 
    queryParams.set('paramName', filter.paramname)
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
      const configParam = await response.json();
      return configParam; 
    }
    const error = await response.text();
    throw Error(error);
};

export {submitParams, fetchParams}; 