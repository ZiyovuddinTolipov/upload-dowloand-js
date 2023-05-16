async function fetchData() {
    try {
      const response = await fetch('https://onlinemarketshop.pythonanywhere.com/upload/${keyInput.value}'); // Make a request
  
      if (!response.ok) {
        throw new Error('Request failed');
      }
  
      const data = await response.json(); // Parse response as JSON
  
      // Access the desired property from the JSON object
      const promiseResult = data.PromiseResult;
  
      return promiseResult;
    } catch (error) {
      console.error(error);
      // Handle errors here
    }
  }
  