const React = require('react');
const PropTypes = require('prop-types');

const LoadableContext = React.createContext({});

function Capture(props) {
  return (
    <LoadableContext.Provider value={{ report: props.report }}>
      {props.children}
    </LoadableContext.Provider>
  );
}

Capture.propTypes = {
  report: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
};

module.exports.LoadableContext = LoadableContext;
module.exports.Capture = Capture;
