import React from 'react';
interface arr {
    info:Array<string>
}

export default function ArrayChild({info}:arr) {
  return (
    <div>
      <h4 className='mt-5 text-center'>
          {info[0]}<br />
          {info[1]}<br />
          {info[2]}<br />
          {info[3]}<br />
          </h4>
    </div>
  );
}
