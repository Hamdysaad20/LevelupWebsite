import React from 'react';

const logos = [
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/1.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/2.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/3.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/4.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/5.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/6.png",
  "https://s3-us-west-2.amazonaws.com/s.cdpn.io/557257/7.png",
]

const sliderLogos = () => (
  <div className="h-[100px] overflow-hidden my-14 bg-[#F9FFF5] max-w-[1400px] w-[calc(100vw-5%)]">
    <div className={`animate-slider flex justify-center items-center w-[calc(400px*${logos.length})] bg-[#F9FFF5]`}>
      {logos.map((url, index) => (
        <div className="h-full w-[300px]" key={index}>
          <img className="bg-[#F9FFF5] min-w-full min-h-full object-cover" src={url} alt="" />
        </div>
      ))}
    </div>
  </div>
);

export default sliderLogos;