import React from 'react';
import Helmet from 'react-helmet';

function Help() {
  return (
    <div className="index">
      <Helmet title="Help" />
      <div className="content">
        <h1>Help</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque maximus urna vitae sem suscipit, sed sagittis velit porta. Morbi facilisis mauris at ante semper, eu imperdiet mi imperdiet. Pellentesque in finibus neque. Phasellus nulla ipsum, aliquam eget ex sed, pulvinar feugiat ex. Fusce sed erat ornare, dapibus ex ut, fringilla urna. Nullam finibus magna id metus tincidunt dignissim a ac ipsum. In placerat lectus vitae orci laoreet, nec accumsan ipsum posuere. Aenean non efficitur lacus. Nam et ligula ante. Cras tristique pellentesque ligula, vel tempus enim consectetur ac. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus quis quam blandit, scelerisque metus nec, luctus neque. Morbi et nisi id arcu faucibus aliquet.</p>
        <p>Cras tempus ex vitae leo faucibus, quis rhoncus mi maximus. Ut porta nisi eu arcu porttitor, nec vulputate tortor facilisis. Morbi ligula odio, sollicitudin a purus nec, convallis accumsan tortor. Suspendisse rutrum tristique pharetra. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nullam tempus elit in orci semper iaculis. Aliquam rhoncus erat malesuada, imperdiet tellus at, vestibulum turpis.</p>
        <p>Fusce gravida, dolor nec rutrum scelerisque, nisl felis gravida massa, ut gravida lectus ligula sit amet nunc. Etiam a est nisi. Vivamus ut lacus ut justo vehicula porttitor vulputate ut turpis. Fusce eget lorem sodales lectus posuere imperdiet nec consequat nunc. Ut interdum suscipit felis nec tincidunt. Fusce gravida porttitor mattis. Donec viverra lacus urna, sed euismod felis sodales in. Cras dapibus sit amet metus vitae porttitor.</p>
      </div>
    </div>
  );
}

Help.propTypes = {};

export default Help;
