import React, { Component } from 'react';
import logo from './logo.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div class="modal-header">
          <h1 class="logo">
            <img class="logo-icon" src={logo} />Asif Vora
            <span class="version">(0.0.1)</span>
          </h1>
        </div>
        <div class="modal-content">
          <p>Easily Access Asif Vora</p>
        </div>
        <div class="modal-icons">
          <div class="flex-container">
            <div class="flex">
              <a href="https://www.linkedin.com/in/asif-vora" target="_blank" title="linkedIn">
                <i class="fa fa-linkedin"></i>
              </a>
            </div>
            <div class="flex">
              <a href="https://www.instagram.com/007_dark_shadow/" target="_blank" title="instagram">
                <i class="fa fa-instagram"></i>
              </a>
            </div>
            <div class="flex">
              <a href="https://twitter.com/007_dark_shadow" target="_blank" title="twitter">
                <i class="fa fa-twitter"></i>
              </a>
            </div>
            <div class="flex">
              <a href="https://www.facebook.com/asif.vora.92" target="_blank" title="facebook">
                <i class="fa fa-facebook"></i>
              </a>
            </div>
            <div class="flex">
              <a href="https://github.com/asifvora" target="_blank" title="github">
                <i class="fa fa-github"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
