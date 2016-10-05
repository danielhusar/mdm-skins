import React from 'react';
import Helmet from 'react-helmet';

function About() {
  return (
    <div className="index">
      <Helmet title="About" />
      <div className="content">
        <h1>About</h1>
        <p>Fusce suscipit lorem enim, ut blandit libero consequat sed. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu risus at neque feugiat gravida. Phasellus volutpat felis cursus elit sollicitudin convallis. Aliquam erat volutpat. Curabitur nec porta nunc, ornare consectetur odio. Vivamus sodales iaculis ipsum, ut commodo risus sagittis eu. Cras tristique rhoncus ligula, id faucibus libero egestas in. Integer libero purus, pretium sed turpis a, rutrum tincidunt justo. In non neque ac sem volutpat euismod nec a risus. Etiam maximus ultrices velit, ac tincidunt metus mattis ac. Sed vel leo lectus. Aliquam tristique arcu sed felis eleifend, id elementum tortor suscipit.</p>
        <p>Vivamus fermentum urna nec sem finibus, vel convallis nunc mattis. Curabitur semper maximus lorem vel egestas. Sed fermentum lorem et justo consequat, tincidunt blandit velit venenatis. Suspendisse tempus, enim nec vehicula mollis, mauris arcu volutpat est, in rhoncus mi lectus sed leo. Praesent venenatis nisl eu mi porttitor volutpat. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec mollis orci vitae tortor aliquet tincidunt. Donec a orci lectus. Fusce sit amet lorem vel dui convallis volutpat at id purus. Morbi rutrum, velit et dapibus vulputate, quam elit ornare velit, et tincidunt ante justo non lorem. Vivamus tincidunt, tellus at faucibus scelerisque, diam purus pulvinar augue, sed lacinia nisi neque hendrerit enim. Cras id magna et nisi lobortis facilisis a eu eros. Nunc lacinia metus eget elit accumsan pharetra. Pellentesque imperdiet lacinia lorem in fringilla. Ut eu dui et enim sodales interdum. Nam pharetra augue sit amet accumsan luctus.</p>
      </div>
    </div>
  );
}

About.propTypes = {};

export default About;
