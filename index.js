import React, { useState } from 'react';
import { render } from 'react-dom';

import OtpInput from '../../lib';
import './styles.css';

const Demo = () => {
  
  const [otp,setOtp] = useState("");
  const [numInputs,setNumInputs] = useState(4);
  const [separator,setSeperator] = useState('-');
  const [isDisabled,setIsDisabled] = useState(false);
  const [hasErrored,setHasErrored] = useState(false);
  const [isInputNum,setIsInputNum] = useState(false);
  const [minLength,setMinLength] = useState(0);
  const [maxLength,setMaxLength] = useState(40);


  const handleOtpChange = otp => {
    setOtp(otp);
  };

  const handleChange = e => {
    let currVal = e.target.value;

    if (e.target.name === 'numInputs') {

      if (currVal < minLength || currVal > maxLength) {
        currVal = 4;

        console.error(
          `Please enter a value between ${minLength} and ${maxLength}`
        );
      }
    }
    if(e.target.name === "numInputs") setNumInputs(currVal)
    if(e.target.name === "separator") setSeperator(currVal)
    if(e.target.name === "otp") setOtp(currVal)
  };

  const clearOtp = () => {
    setOtp('');
  };

  const handleCheck = e => {
    if(e.target.name === "isDisabled") setIsDisabled(!isDisabled)
    if(e.target.name === "hasErrored") setHasErrored(!hasErrored)
    if(e.target.name === "isInputNum") setIsInputNum(!isInputNum)
  };

  const handleSubmit = e => {
    e.preventDefault();
    alert(otp);
  };

    return (
      <div className="container">
        <div className="side-bar">
          <a
            href="https://github.com/devfolioco/react-otp-input"
            target="_blank"
          >
            <div className="side-bar__segment side-bar__segment--header">
              <h2>react-otp-input</h2>
            </div>
          </a>
          <div className="side-bar__segment">
            <label htmlFor="num-inputs">
              numInputs
              <input
                id="num-inputs"
                name="numInputs"
                type="number"
                value={numInputs}
                onChange={handleChange}
                min={minLength}
                max={maxLength}
              />
            </label>
          </div>
          <div className="side-bar__segment">
            <label htmlFor="separator">
              separator
              <input
                id="separator"
                maxLength={1}
                name="separator"
                type="text"
                value={separator}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="side-bar__segment">
            <label htmlFor="value">
              value
              <input
                id="value"
                maxLength={numInputs}
                name="otp"
                type="text"
                value={otp}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="side-bar__segment">
            <label htmlFor="disabled">
              <input
                id="disabled"
                name="isDisabled"
                type="checkbox"
                checked={isDisabled}
                onChange={handleCheck}
              />
              isDisabled
            </label>
          </div>
          <div className="side-bar__segment">
            <label htmlFor="hasErrored">
              <input
                id="hasErrored"
                name="hasErrored"
                type="checkbox"
                checked={hasErrored}
                onChange={handleCheck}
              />
              hasErrored
            </label>
          </div>
          <div className="side-bar__segment">
            <label htmlFor="isInputNum">
              <input
                id="isInputNum"
                name="isInputNum"
                type="checkbox"
                checked={isInputNum}
                onChange={handleCheck}
              />
              isInputNum
            </label>
          </div>
          <div className="side-bar__segment side-bar__segment--bottom">
            <a href="https://github.com/devfolioco/react-otp-input">
              Documentation and Source
            </a>
          </div>
        </div>
        <div className="view">
          <div className="card">
            <form onSubmit={handleSubmit}>
              <p>Enter verification code</p>
              <div className="margin-top--small">
                <OtpInput
                  inputStyle="inputStyle"
                  numInputs={numInputs}
                  isDisabled={isDisabled}
                  hasErrored={hasErrored}
                  errorStyle="error"
                  onChange={handleOtpChange}
                  separator={<span>{separator}</span>}
                  isInputNum={isInputNum}
                  shouldAutoFocus
                  value={otp}
                />
              </div>
              <div className="btn-row">
                <button
                  className="btn margin-top--large"
                  type="button"
                  disabled={isDisabled}
                  onClick={clearOtp}
                >
                  Clear
                </button>
                <button
                  className="btn margin-top--large"
                  disabled={otp.length < numInputs}
                >
                  Get OTP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    );
}

render(<Demo />, document.getElementById('app'));
