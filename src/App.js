import React from "react";
import ReactSlider from "react-slider";
import StyledSlider from "./StyledSlider";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
      />
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[0, 100]}
        ariaLabel={["Lower thumb", "Upper thumb"]}
        ariaValuetext={state => `Thumb value ${state.valueNow}`}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={10}
      />
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[0, 50, 100]}
        ariaLabel={["Leftmost thumb", "Middle thumb", "Rightmost thumb"]}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        pearling
        minDistance={10}
      />
      <ReactSlider
        className="vertical-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[0, 50, 100]}
        ariaLabel={["Lowest thumb", "Middle thumb", "Top thumb"]}
        renderThumb={(props, state) => <div {...props}>{state.valueNow}</div>}
        orientation="vertical"
        invert
        pearling
        minDistance={10}
      />
      <StyledSlider />
    </div>
  );
}
