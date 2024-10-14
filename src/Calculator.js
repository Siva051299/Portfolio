import React from 'react';
import { create, all } from 'mathjs';

const math = create(all, {});

const calculator = () => {
  let result = "";
  const clickbutton = (event) => {
    let text = event.target.textContent;

    if (result.length >= 16) {
      result = "";
      document.getElementById("result").innerHTML = "Out of range";
    } else {
      switch (text) {
        case "AC":
          result = "";
          document.getElementById("result").innerHTML = 0;
          break;
        case "CE":
          if (result.length === 1 || result === "") {
            result = "";
            document.getElementById("result").innerHTML = 0;
          } else {
            result = result.substring(0, result.length - 1);
            document.getElementById("result").innerHTML = result;
          }
          break;
        case "=":
          if (result === "") {
            document.getElementById("result").innerHTML = 0;
          } else {
            try {
              // Replace custom operators with standard ones
              const sanitizedExpression = result
                .replaceAll("x", "*")
                .replaceAll("÷", "/");
              
              // Safely evaluate the expression using mathjs
              result = String(math.evaluate(sanitizedExpression));
              document.getElementById("result").innerHTML = result;
            } catch (error) {
              document.getElementById("result").innerHTML = "Invalid";
              result = "";
            }
          }
          break;
        default:
          result += event.target.textContent;
          document.getElementById("result").innerHTML = result;
          break;
      }
    }
  };

  return (
    <div>
      <h2>Calculator</h2>
      <p>First Function Trial!</p>
      <p>Give a try</p>
      <div id="container">
        <div id="calculator">
          <div id="panel-top">
            <div id="screen">
              <div id="result">0</div>
            </div>
          </div>
          <div id="panel-bottom">
            <div id="buttons">
              <div className="row">
                <div onClick={clickbutton} className="button red">AC</div>
                <div onClick={clickbutton} className="button red">CE</div>
                <div onClick={clickbutton} className="button">%</div>
                <div onClick={clickbutton} className="button">÷</div>
              </div>
              <div className="row">
                <div onClick={clickbutton} className="button">7</div>
                <div onClick={clickbutton} className="button">8</div>
                <div onClick={clickbutton} className="button">9</div>
                <div onClick={clickbutton} className="button">x</div>
              </div>
              <div className="row">
                <div onClick={clickbutton} className="button">4</div>
                <div onClick={clickbutton} className="button">5</div>
                <div onClick={clickbutton} className="button">6</div>
                <div onClick={clickbutton} className="button">-</div>
              </div>
              <div className="row">
                <div onClick={clickbutton} className="button">1</div>
                <div onClick={clickbutton} className="button">2</div>
                <div onClick={clickbutton} className="button">3</div>
              </div>
              <div className="row">
                <div onClick={clickbutton} className="button">0</div>
                <div onClick={clickbutton} className="button">.</div>
                <div onClick={clickbutton} className="button">=</div>
                <div onClick={clickbutton} className="button plus">+</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default calculator;
