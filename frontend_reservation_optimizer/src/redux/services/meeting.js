import { object } from "yup";

const  submitMeeting = async (_, store) =>{ 
  const {
    meeting: {form: state}     
  }  = store.getState() 
  let route = '/api/meetings/' ; 
  let method = 'POST'
  if (state._id){ 
    route =   '/api/meetings/' + state._id ;
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
      const meetings = await response.json();
      return meetings; 
    }
    const error = await response.text();
    throw Error(error);
};

const  fetchMeeting = async (filter, __, state) =>{ 
  let route = '/api/meetings/' ; 
  let method = 'GET'

  const queryParams = new URLSearchParams(); 
  const keys = Object.keys(filter)
  keys.forEach(k => {
    if(filter[k].length){ 
      queryParams.set(k, filter[k])
    }
  })

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
      const meetings = await response.json();
      return meetings; 
    }
    const error = await response.text();
    throw Error(error);
};

export {submitMeeting, fetchMeeting}; 