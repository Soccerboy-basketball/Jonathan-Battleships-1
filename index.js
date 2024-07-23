fetch('/add', { 
    method: 'POST', 
    headers: { 
      'Content-Type': 'application/json' 
    }, 
    body: JSON.stringify({ a: 2, b: 3 }) 
  }) 
  .then(response => response.json()) 
  .then(data => { 
    console.log('Result:', data.result); // Output: Result: 5 
  }) 
  .catch(error => { 
    console.error('Error:', error); 
  }); 