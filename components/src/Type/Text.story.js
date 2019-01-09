import React from 'react';
import { storiesOf } from '@storybook/react';
import Text from './Text';

storiesOf('Text', module)
  .add('Default', () => (
      <Text>Default text</Text>
  ))
  .add('With a color', () => (
    <Text color='blue'>Small text</Text>
  ))
  .add('With a size', () => (
    <Text fontSize={0}>Small text</Text>
  ))
  .add('With custom margin', () => (
    <React.Fragment>
    <Text mb={4}>Default text</Text>
    <Text>Default text</Text>
    </React.Fragment>
))  
.add('Inline', () => (
  <React.Fragment>
    <Text inline mr={2}>Default text</Text>
    <Text inline>Default text</Text>
  </React.Fragment>
))
;