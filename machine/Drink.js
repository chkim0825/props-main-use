import React from 'react';
import { Segment, Card, Icon, Image, Label, Button } from 'semantic-ui-react';
import PropTypes from 'prop-types';
class Drink extends React.Component {
  render() {
    const { item } = this.props;
    return (
      <Segment inverted style={{ width: 100 }}>
        <Image src={'https://i.dlpng.com/static/png/1238556-chips-chips-and-soda-png-800_800_preview.png'} size='mini' centered />
        <Card.Content>
          <Card.Header style={{ textAlign: 'center' }}>{item.name}</Card.Header>
          <Card.Meta style={{ textAlign: 'center' }}>₩ {item.price}</Card.Meta>
        </Card.Content>
        <Card.Content extra >
          <Card.Header style={{ textAlign: 'center' }}>
            <Button size='mini' as='div' labelPosition='right'>
              <Button size='mini' color='red' onClick={()=>this.onClickGetButton()}>GET</Button>
              <Label as='a' basic color='red' pointing='left'>
                {item.quantity}
              </Label>
            </Button>
          </Card.Header>
        </Card.Content>
      </Segment>
    );
  }
}


// const Drink = ({ item }) => {

//   return (
//     <Segment inverted>
//       <Image src={'https://i.dlpng.com/static/png/1238556-chips-chips-and-soda-png-800_800_preview.png'} size='mini' centered />
//       <Card.Content>
//         <Card.Header style={{ textAlign: 'center' }}>{item.name}</Card.Header>
//         <Card.Meta style={{ textAlign: 'center' }}>₩ {item.price}</Card.Meta>
//       </Card.Content>
//       <Card.Content extra>
//         <Card.Header style={{ textAlign: 'center' }}>
//           <Icon name='cubes' /><Label content={item.quantity} />
//         </Card.Header>
//       </Card.Content>
//     </Segment>
//   )
// }


export default Drink;