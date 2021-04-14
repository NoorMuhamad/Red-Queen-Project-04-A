import './App.css';
import useWebAnimations , {rubberBand} from "@wellyshen/use-web-animations";
import React from 'react';

function App() {
  let play_BG = 0;
  let play_FG = 1;
  const sceneryFrames = [{ transform: 'translateX(100%)' }, { transform: 'translateX(-100%)' }]
  const backgroundDuration = { duration: 36000, iterations: Infinity }
  const forebackgroundDuration = { duration: 12000, iterations: Infinity }
  const queen = useWebAnimations({
    keyframes: [{ transform: 'translateY(0)' }, { transform: 'translateY(-100%)' }],
    animationOptions: {easing: 'steps(7, end)', direction: "reverse", duration: 700,playbackRate: 1,  iterations: Infinity}
  })
  const background1 = useWebAnimations({ keyframes: sceneryFrames, animationOptions: backgroundDuration });
  const background2 = useWebAnimations({ keyframes: sceneryFrames, animationOptions: backgroundDuration });
  const forebackground1 = useWebAnimations({ keyframes: sceneryFrames, animationOptions: forebackgroundDuration });
  const forebackground2 = useWebAnimations({ keyframes: sceneryFrames, animationOptions: forebackgroundDuration });
  const heading = useWebAnimations({rubberBand});
  
  let adjustPlayblack = () => {
    if (play_FG < 0.8) {play_BG = (play_FG / 2) * -1;}
    else if (play_FG > 1.2) {play_BG = (play_FG) / 2;}
    else {play_BG = 0;}
    background1.getAnimation().playbackRate = play_BG;
    background2.getAnimation().playbackRate = play_BG;
    forebackground1.getAnimation().playbackRate = play_BG;
    forebackground2.getAnimation().playbackRate = play_BG;
  }
  function goFaster() {
    play_FG *= 1.1;
    queen.getAnimation().playbackRate = play_FG;
    adjustPlayblack();
  }
  function speedup() {
    return play_BG *= 0.9;
  }
  React.useEffect(() => {
    setInterval(() => {
      if (play_FG > .4) {queen.getAnimation().playbackRate = speedup();}
      adjustPlayblack();
    }, 2000);
    document.addEventListener("click", goFaster);
    adjustPlayblack();
 
  });

  return (
    <div id="wrapper">
      <div className="sky">
        <h1 ref={heading.ref}>NoorRasheed</h1>
      </div>
      <div className="earth">
        <div id="red-queen_and_alice">
          <img id="red-queen_and_alice_sprite" ref={queen.ref} src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/sprite_running-alice-queen.png 2x" alt="Alice and the Red Queen running to stay in place." />
        </div>
      </div>
      <div className="scenery" id="foreground1" ref={forebackground1.ref}>
        <img id="palm3" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm3.png 2x" alt=" " />
      </div>
      <div className="scenery" id="foreground2" ref={forebackground2.ref} >
        <img id="bush" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/bush.png 2x" alt=" " />
        <img id="w_rook_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_upright.png 2x" alt=" " />
      </div>
      <div className="scenery" id="background1" ref={background1.ref} >
        <img id="r_pawn_upright" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_upright.png 2x" alt=" " />
        <img id="w_rook" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/w_rook.png 2x" alt=" " />
        <img id="palm1" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm1.png 2x" alt=" " />
      </div>
      <div className="scenery" id="background2" ref={background2.ref} >
        <img id="r_pawn" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_pawn.png 2x" alt=" " />
        <img id="r_knight" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/r_knight.png 2x" alt=" " />
        <img id="palm2" src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2_small.png" srcSet="https://s3-us-west-2.amazonaws.com/s.cdpn.io/641/palm2.png 2x" alt=" " />
      </div>
    </div>
  );
}

export default App;
