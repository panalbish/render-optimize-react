import React, { PropTypes } from 'react';
import { Group, Circle } from 'react-konva';

const Target = (props) => {
  const { x, y, color, radius } = props.target;
  return (
    <Group x={x} y={y}>
      <Circle
        radius={radius}
        fill={color}
      />
      <Circle
        radius={radius * (1 / 2)}
        fill="black"
      />
      <Circle
        radius={radius * (1 / 4)}
        fill="white"
      />
    </Group>
  );
};

Target.propTypes = {
  target: PropTypes.shape({
    x: PropTypes.number.isRequired,
    y: PropTypes.number.isRequired,
    color: PropTypes.string.isRequired,
    radius: PropTypes.number.isRequired
  })
};

export default Target;
