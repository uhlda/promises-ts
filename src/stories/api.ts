import { Story, Chapter } from '../stories/types';

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
export default function getJSON(url: string) {
  return get(url).then(JSON.parse);
}

var storyDiv: Element;

export function addHtmlToPage(content: string) {
  storyDiv = storyDiv || document.querySelector('.story');
  const div = document.createElement('div');
  div.innerHTML = content;
  if (storyDiv) {
    storyDiv.appendChild(div);
  }
}

export function addTextToPage(content: string) {
  storyDiv = storyDiv || document.querySelector('.story');
  const p = document.createElement('p');
  p.textContent = content;
  if (storyDiv) {
    storyDiv.appendChild(p);
  }
}

export function getHeading() {
  getJSON('story.json')
  .then(function(story: Story) {
    addHtmlToPage(story.heading);
  });
}

var storyPromise: Promise<Story>;

export function getChapter(i: number): void {
  (storyPromise = storyPromise || getJSON('story.json'))
  .then(function(story: Story) {
    return getJSON(story.chapterUrls[i]);
  })
  .then(function(chapter: Chapter) {
    addHtmlToPage(chapter.html);
  });
}

export function getChapters(): void {
  (storyPromise = storyPromise || getJSON('story.json'))
  .then( (s) =>  
    s.chapterUrls.map( 
      (c) => getJSON(c)
      .then( (chapter) =>
        addHtmlToPage(chapter.html)
      ) 
    )
  );
}