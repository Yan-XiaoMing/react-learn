import React ,{ReactDOM} from 'react';
import {  interpolate, animated, useSpring  } from 'react-spring'
import {useDrag} from 'react-use-gesture';
const { useState } = React;
const imgData = [
  {
    name: "James Eades",
    detail:
      "Feel free to visit my website or Instagram (@jmeeades) for more shots! Please contact me if you wish to use images for prints/commercial use.",
    images: [
      "https://images.unsplash.com/photo-1588607725406-c514f1acab95?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=60",
      "https://images.unsplash.com/photo-1588607842830-eeac30741e92?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    ],
    url:
      "https://images.unsplash.com/photo-1550757750-4ce187a65014?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80",
    profile:
      "https://images.unsplash.com/profile-1588608105476-bb7b8341a8cdimage?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
  },
  {
    name: "Miro Dozo",
    detail: "Download free, beautiful high-quality photos curated by Miro.",
    images: [
      "https://images.unsplash.com/photo-1505051508008-923feaf90180?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1514477917009-389c76a86b68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    ],
    url:
      "https://images.unsplash.com/photo-1442410519123-a33d5dc262b1?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80",
    profile:
      "https://images.unsplash.com/profile-fb-1442410481-1615103c9d59.jpg?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
  },
  {
    name: "Theresa Panag",
    detail:
      "I don't consider myself a photographer. I just love taking pictures! :).",
    images: [
      "https://images.unsplash.com/photo-1590178593317-c7dd485e459a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1586898374586-32bdde7fd6dc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
    ],
    url:
      "https://images.unsplash.com/photo-1589999562311-56254e87db45?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
    profile:
      "https://images.unsplash.com/profile-1587492395889-d9a9921b3e79image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
  },
  {
    name: "Nika Akin",
    detail: "I am self-taught artist, do photos for fun ;-).",
    images: [
      "https://images.unsplash.com/photo-1590044211267-2776cdfae939?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      "https://images.unsplash.com/photo-1588492846515-ed79f5ef40cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60"
    ],
    url:
      "https://images.unsplash.com/photo-1579329974377-10c2d3458e44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2775&q=80",
    profile:
      "https://images.unsplash.com/profile-1575179715509-30b19b831167image?dpr=2&auto=format&fit=crop&w=150&h=150&q=60&crop=faces&bg=fff"
  }
];
const Card = props => {
  const { _x, _y, num, index, data, active, setActive } = props;
  const cardIndex = num - index;
  const offset = cardIndex * 276 + 80;
  const [{ x, y, scale }, set] = useSpring(() => ({
    x: _x + offset,
    y: _y,
    scale: active ? 2.4 : 1
  }));
  const [{ posX, posY, proScale, blur }, setPro] = useSpring(() => ({
    posX: 0,
    posY: 0,
    proScale: 1.2,
    config: { mass: 2 },
    blur: 0
  }));
  const handleClick = () => {
    if (num === index) {
      if (!active) {
        set({ scale: 2.2 });
        setPro({ posX: -53, posY: -337, proScale: 2.5, blur: 4 });
        setActive(true);
      }
    }
  };
  set({ x: _x + offset, y: _y });
  if (num === index) {
    if (!active) {
      set({ scale: 1 });
      setPro({ posX: 0, posY: 0, proScale: 1, blur: 0 });
    }
  }
  return (
    <animated.div
      id="card"
      style={{
        transform: interpolate(
          [
            x.interpolate(x => `translateX(${x}px)`),
            y.interpolate(y => `translateY(${y}px)`)
          ],
          (translateX, translateY) => `${translateX} ${translateY}`
        ),
        zIndex: num === index ? 10 : 1
      }}
    >
      <animated.div
        id="imgContainer"
        style={{
          transform: scale.interpolate(s => `scale(${s})`)
        }}
      >
        <animated.img
          style={{
            width: "300%",
            userSelect: "none",
            transform: x
              .interpolate({ range: [-196, 356], output: [-380, -20] })
              .interpolate(x => `translate3d(${x}px, 0px, 0px)`)
          }}
          src={data.url}
        />
        <animated.div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            top: "0",
            backdropFilter: blur.interpolate(x => `blur(${x}px)`),
            backgroundColor: blur
              .interpolate({ range: [0, 4], output: [0, 0.3] })
              .interpolate(x => `rgba(0, 0, 0, ${x})`)
          }}
        />
      </animated.div>
      <animated.img
        id="profile"
        style={{
          transform: interpolate(
            [
              posX.interpolate(x => `translateX(${x}px)`),
              posY.interpolate(y => `translateY(${y}px)`),
              proScale.interpolate(y => `scale(${y})`)
            ],
            (translateX, translateY, proScale) =>
              `${translateX} ${translateY} ${proScale}`
          ),
          border: proScale
            .interpolate({ range: [1, 2.5], output: [6, 4] })
            .interpolate(x => `${x}px solid #fff`)
        }}
        src={data.profile}
        onClick={handleClick}
      />
    </animated.div>
  );
};
const heightOffset = 200;
const Info = props => {
  const { active, index, setActive } = props;
  const [{ y }, set] = useSpring(() => ({ y: !active ? -40 : 0 }));
  set({ y: !active ? -40 : 0 });
  return (
    <>
      <animated.div
        id="cross"
        onClick={() => {
          setActive(false);
        }}
        style={{
          transform: y
            .interpolate({ range: [-40, 0], output: [0, 1] })
            .interpolate(y => `scale(${y})`)
        }}
      >
        <div className="close" />
      </animated.div>
      <animated.div
        style={{ bottom: y.interpolate(y => `${y}vh`) }}
        id="infocontainer"
      >
        <div id="detailName">{imgData[index].name}</div>
        <div id="detailPro">{imgData[index].detail}</div>
        <button id="follow">Follow</button>
        <button id="message">Message</button>
        <img
          id="detailImage"
          src={imgData[index].images[0]}
          style={{ background: "#000" }}
        />
        <img
          id="detailImage"
          src={imgData[index].images[1]}
          style={{ background: "#2174f3" }}
        />
      </animated.div>
    </>
  );
};


export default function Screen() {
  const [{ x, y }, set] = useState(() => ({ x: 0, y: heightOffset }));
  const [index, setIndex] = useState(0);
  const [active, setActive] = useState(false);
  const bind = useDrag(
    ({ down, movement: [x, y], distance, direction: [xDir], velocity }) => {
      const trigger = velocity > 0.2;
      const dir = xDir < 0 ? -1 : 1;
      if (!active) {
        if (trigger && !down) {
          if (!(index + dir * -1 >= imgData.length || index + dir * -1 < 0)) {
            setIndex(index + dir * -1);
          }
          set({ x: 0, y: heightOffset });
        } else {
          set({ x: down ? x : 0, y: heightOffset });
        }
      }
    }
  );
  return (
    <div id="app" {...bind()}>
      {imgData.map((data, i) => {
        return (
          <Card
            key={i}
            _x={x}
            _y={y}
            num={i}
            index={index}
            data={data}
            active={active}
            setActive={setActive}
          />
        );
      })}
      <Info active={active} index={index} setActive={setActive}/>
    </div>
  );
}
