import React from 'react';
import { storiesOf } from '@storybook/react';
import { Text, P, Title, SectionTitle, SubsectionTitle, Label } from './Type';

storiesOf('Type', module)
  .add('All components', () => (
    <React.Fragment>
      <Title>The Title component is for page titles.</Title>
      <SectionTitle>The SectionTitle component is for sub-sections of a page.</SectionTitle>
      <SubsectionTitle>The SubsectionTitle component is for sub-sections of a page.</SubsectionTitle>
      <P>The P component is for block text.</P>
      <Text>Text component is for inline content.</Text>
      <Label>Label component is for labeling things.</Label>
    </React.Fragment>
  ))
  .add('Conent with a mix of headings and paragraphs', () => (
    <React.Fragment>
      <Title>Nunc vitae nisl vestibulum</Title>
      <P>
        Porttitor urna sit amet, congue nulla. Etiam in posuere nibh. Nam 
        pellentesque, lacus id elementum posuere, neque purus ullamcorper nunc, 
        consequat mi velit eget mi. Duis ipsum augue, pulvinar ullamcorper 
        fringilla in, dignissim congue velit. Nunc id arcu sagittis, volutpat  
        sit amet, accumsan diam. Pellentesque luctus, nulla a ornare semper, 
        dui mollis nisi, vel lacinia neque velit eget sapien. Etiam sodales  
        dolor, vel dictum libero cursus ac. Nam vulputate tempor mauris vel. 
        Nam tristique metus et dignissim pretium. Aliquam erat volutpat.
      </P>
      <SectionTitle>Donec leo felis</SectionTitle>
      <P>
        Nunc tempor eget mauris id facilisis. Morbi convallis mauris at 
        fermentum gravida. Nunc lacinia a odio eu rutrum. Etiam in libero 
        vestibulum, lobortis mi fermentum, pharetra lacus. Aliquam commodo 
        molestie dolor, vel tristique orci efficitur eu. Nullam eleifend  
        malesuada. Nam luctus blandit dignissim. Mauris eu odio tristique,  
        lorem quis, lobortis nulla. Interdum et malesuada fames ac ante ipsum 
        primis in faucibus. Nunc quis lacus felis. Ut convallis rhoncus orci. 
        Maecenas sit amet leo dui. Integer semper porta dignissim.
      </P>
      <SubsectionTitle>Fusce varius fringilla nunc vitae tincidunt.</SubsectionTitle>
      <P>
        Vestibulum interdum mi est, quis imperdiet lacus sodales a. Cras 
        consectetur ullamcorper risus, id pharetra neque malesuada eu. Duis ac 
        sapien dictum, hendrerit nunc in, dictum sem. Pellentesque finibus, 
        turpis nec auctor tempor, erat eros facilisis orci, ultrices laoreet leo
        ligula et ipsum. Vivamus mattis vel dui vel lacinia. Mauris placerat mi 
        nisl, ut commodo nisl feugiat ac. Pellentesque ut cursus justo.
      </P>
    </React.Fragment>
  ))
  .add('Text', () => (
    <React.Fragment>
      <Text>This is a line of inline text.</Text>
      <Text fontSize="small">It can accept a fontSize property.</Text>
    </React.Fragment>
  ))
  .add('P', () => (
    <React.Fragment>
      <P>The P component is for block content. It gives you a standard font size and line height.</P>
      <P fontSize="large">It can be also accept a different fontSize.</P>
      <P>Aliquam erat volutpat. Integer elementum orci vestibulum porta venenatis. Phasellus porta quam ligula, eu venenatis nisl rutrum gravida. Aliquam ultricies sollicitudin accumsan. Duis consequat ex sit amet mi laoreet, sed fringilla augue interdum. Vivamus pharetra laoreet gravida. Pellentesque varius vitae erat ullamcorper vestibulum. Nunc ornare lectus risus, eu dapibus nisl iaculis sit amet. Pellentesque aliquet orci mi, quis elementum tellus viverra in. Mauris sit amet mi diam. Cras rhoncus, justo et consectetur tempor, quam odio pulvinar velit, ut vulputate urna mi ut tortor. Quisque ac tortor pretium, volutpat neque sed, molestie mauris. Duis eros nisi, faucibus quis orci sit amet, ornare dignissim purus. Proin eu sem ex.</P>
    </React.Fragment>
  ))
  .add('Title', () => (
    <React.Fragment>
      <Title>This is a block of text.</Title>
      <Title>The Title component is for page titles. It gives you a standard font size and line height.</Title>
      <Title>Aliquam erat volutpat. Integer elementum orci vestibulum porta venenatis. Phasellus porta quam ligula, eu venenatis nisl rutrum gravida. Aliquam ultricies sollicitudin accumsan. Duis consequat ex sit amet mi laoreet, sed fringilla augue interdum. Vivamus pharetra laoreet gravida. Pellentesque varius vitae erat ullamcorper vestibulum. Nunc ornare lectus risus, eu dapibus nisl iaculis sit amet. Pellentesque aliquet orci mi, quis elementum tellus viverra in. Mauris sit amet mi diam. Cras rhoncus, justo et consectetur tempor, quam odio pulvinar velit, ut vulputate urna mi ut tortor. Quisque ac tortor pretium, volutpat neque sed, molestie mauris. Duis eros nisi, faucibus quis orci sit amet, ornare dignissim purus. Proin eu sem ex.</Title>
    </React.Fragment>
  ))
  .add('SectionTitle', () => (
    <React.Fragment>
      <SectionTitle>This is a block of text.</SectionTitle>
      <SectionTitle>The SectionTitle component is for page Sectiontitles. It gives you a standard font size and line height.</SectionTitle>
      <SectionTitle>Aliquam erat volutpat. Integer elementum orci vestibulum porta venenatis. Phasellus porta quam ligula, eu venenatis nisl rutrum gravida. Aliquam ultricies sollicitudin accumsan. Duis consequat ex sit amet mi laoreet, sed fringilla augue interdum. Vivamus pharetra laoreet gravida. Pellentesque varius vitae erat ullamcorper vestibulum. Nunc ornare lectus risus, eu dapibus nisl iaculis sit amet. Pellentesque aliquet orci mi, quis elementum tellus viverra in. Mauris sit amet mi diam. Cras rhoncus, justo et consectetur tempor, quam odio pulvinar velit, ut vulputate urna mi ut tortor. Quisque ac tortor pretium, volutpat neque sed, molestie mauris. Duis eros nisi, faucibus quis orci sit amet, ornare dignissim purus. Proin eu sem ex.</SectionTitle>
    </React.Fragment>
  ))
  .add('SubsectionTitle', () => (
    <React.Fragment>
      <SubsectionTitle>This is a block of text.</SubsectionTitle>
      <SubsectionTitle>The SubsectionTitle component is for page Subsectiontitles. It gives you a standard font size and line height.</SubsectionTitle>
      <SubsectionTitle>Aliquam erat volutpat. Integer elementum orci vestibulum porta venenatis. Phasellus porta quam ligula, eu venenatis nisl rutrum gravida. Aliquam ultricies sollicitudin accumsan. Duis consequat ex sit amet mi laoreet, sed fringilla augue interdum. Vivamus pharetra laoreet gravida. Pellentesque varius vitae erat ullamcorper vestibulum. Nunc ornare lectus risus, eu dapibus nisl iaculis sit amet. Pellentesque aliquet orci mi, quis elementum tellus viverra in. Mauris sit amet mi diam. Cras rhoncus, justo et consectetur tempor, quam odio pulvinar velit, ut vulputate urna mi ut tortor. Quisque ac tortor pretium, volutpat neque sed, molestie mauris. Duis eros nisi, faucibus quis orci sit amet, ornare dignissim purus. Proin eu sem ex.</SubsectionTitle>
    </React.Fragment>
  ))
  .add('Label', () => (
    <React.Fragment>
      <Label>This is a block of text.</Label>
      <Label>The Label component is for page Labels. It gives you a standard font size and line height.</Label>
      <Label>Aliquam erat volutpat. Integer elementum orci vestibulum porta venenatis. Phasellus porta quam ligula, eu venenatis nisl rutrum gravida. Aliquam ultricies sollicitudin accumsan. Duis consequat ex sit amet mi laoreet, sed fringilla augue interdum. Vivamus pharetra laoreet gravida. Pellentesque varius vitae erat ullamcorper vestibulum. Nunc ornare lectus risus, eu dapibus nisl iaculis sit amet. Pellentesque aliquet orci mi, quis elementum tellus viverra in. Mauris sit amet mi diam. Cras rhoncus, justo et consectetur tempor, quam odio pulvinar velit, ut vulputate urna mi ut tortor. Quisque ac tortor pretium, volutpat neque sed, molestie mauris. Duis eros nisi, faucibus quis orci sit amet, ornare dignissim purus. Proin eu sem ex.</Label>
    </React.Fragment>
  ));