const React = require('react');
const ReactDOM = require('react-dom');
const { hot } = require('react-hot-loader/root');

const WorldRelay = require('./WorldRelay');

const Hot = hot(WorldRelay);
ReactDOM.render(<Hot />, document.querySelector('#root'));
