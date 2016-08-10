import React from 'react';
import {Card, CardMedia, CardTitle} from 'material-ui/Card';
import img from '../images/1.jpg';
import '../style/Work.css';

class Work extends React.Component {

  render () {
    return(
      <div id="work">
        <Card className='card'>
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src={img} />
        </CardMedia>
        </Card>
        <Card className='card'>
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src={img} />
        </CardMedia>
        </Card>
        <Card className='card'>
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src={img} />
        </CardMedia>
        </Card>
        <Card className='card'>
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src={img} />
        </CardMedia>
        </Card>
        <Card className='card'>
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src={img} />
        </CardMedia>
        </Card>
        <Card className='card'>
        <CardMedia
          overlay={<CardTitle title="Overlay title" subtitle="Overlay subtitle" />}
        >
          <img src={img} />
        </CardMedia>
        </Card>
      </div>
    )
  }
}
export default Work;
