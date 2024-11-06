import React from 'react';

interface SpacerProps {
  size: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' | 'xxxlarge';
}

const Spacer: React.FC<SpacerProps> = ({ size }) => {
  const spacing = `var(--spacing-${size})`;
  return <div style={{ height: spacing }}></div>;
};

export default Spacer;