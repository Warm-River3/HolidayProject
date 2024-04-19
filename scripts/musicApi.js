// API key	ed7a61b4683638fb8cc8272040a12977
// Shared secret	df6e99db8d83e65f2a861528357cec37


const getMusic = async ()=>{
    const apiKey = 'ed7a61b4683638fb8cc8272040a12977';
    const apiUrl = `https://ws.audioscrobbler.com/2.0/?method=track.search&track=Believe&api_key=${apiKey}&format=json`;

    // Make fetch request
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Handle the data here
        console.log(data);
      })
      .catch(error => {
        // Handle errors here
        console.error('There was a problem with the fetch operation:', error);
      });
}


getMusic();