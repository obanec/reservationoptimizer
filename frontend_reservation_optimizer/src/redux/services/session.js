const  apicall = async () =>{
    const token = window.localStorage.getItem('token'); 

    const response = await fetch('http://localhost:3001/session', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `Bearer ${token}`
        },
      });
  
      if (response.ok) {
        const user = await response.json();
        return user; 
      }
      return {} ;
  };
  export default apicall; 