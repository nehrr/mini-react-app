import React from 'react';
import axios from 'axios';

class OneCharacter extends React.Component {

  componentWillMount(){
    const { match: { params } } = this.props;
    console.log(params.id);
    let baseURL = 'https://gateway.marvel.com:443';
    let actionAPI = 'v1/public/characters';
    let apiKey = '1a1c500ae807bd5b04af70a15f2a6bc3';
    axios.get(`${baseURL}/${actionAPI}?apikey=${apiKey}/${this.props.id}`)
    .then(({ data: character }) => {
      console.log('character', character);

      this.setState({ character });
    });
  };

    render() {
      return (
        <div>
          <h4>{this.props.name}</h4>
          <p>{this.props.description}</p>
          <img src={this.props.avatar} height='10%' width='10%'/>
        </div>
      )
    }
}

export default OneCharacter;
