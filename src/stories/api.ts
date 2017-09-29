const get = (url: string): Promise<string> => {
  // Return a new promise.
  return new Promise(

    function(
        resolve: (response: string) => void, 
        reject: (error: Error) => void
      ) {

      // Do the usual XHR stuff
      var req = new XMLHttpRequest();
      req.open('GET', url);

      req.onload = function() {
        // This is called even on 404 etc
        // so check the status
        if (req.status === 200) {
          // Resolve the promise with the response text
          resolve(req.response);
        } else {
          // Otherwise reject with the status text
          // which will hopefully be a meaningful error
          reject(Error(req.statusText));
        }
      };

      // Handle network errors
      req.onerror = function() {
        reject(Error('Network Error'));
      };

      // Make the request
      req.send();
    }
  );
};

// tslint:disable:typedef
function getJSON(url: string) {
  return get(url).then(JSON.parse);
}

var storyDiv = document.querySelector('.story');

function addHtmlToPage(content) {
  var div = document.createElement('div');
  div.innerHTML = content;
  storyDiv.appendChild(div);
}

function addTextToPage(content) {
  var p = document.createElement('p');
  p.textContent = content;
  storyDiv.appendChild(p);
}

export default getJSON;