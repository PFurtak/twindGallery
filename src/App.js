import React from 'react';

function App() {
  return (
    <div className='App'>
      <div className='max-w-sm rounded overflow-hidden shadow-lg'>
        <img
          src='https://images.unsplash.com/photo-1586453160490-c6f298678a6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80'
          alt=''
          className='w-full'></img>
        <div className='px-6 py-4'>
          <div className='font-bold text-purple-500 text-xl mb-2'>
            Photo by John
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              2000
            </li>
            <li>
              <strong>Downloads: </strong>
              1345
            </li>
            <li>
              <strong>Likes: </strong>
              457
            </li>
          </ul>
        </div>
        <div className='px-6 py-4'>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #tag1
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #tag2
          </span>
          <span className='inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2'>
            #tag3
          </span>
        </div>
      </div>
    </div>
  );
}

export default App;
