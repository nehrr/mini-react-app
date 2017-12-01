import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

class Character extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.name}</h4>
        <Link to={`/marvel/${this.props.id}`}>{this.props.name}</Link>
        <p>{this.props.description}</p>
        <img src={this.props.avatar} height='10%' width='10%'/>
      </div>
    )
  }
};

class MarvelBox extends React.Component {
  //Constructor
  constructor() {
    super();
    this.state = { characters: [] };
    this._fetchData();
  };

  //Methods
  _fetchData() {
    let baseURL = 'https://gateway.marvel.com:443';
    let actionAPI = 'v1/public/characters';
    let apiKey = '1a1c500ae807bd5b04af70a15f2a6bc3';
    axios.get(`${baseURL}/${actionAPI}?apikey=${apiKey}`)
    .then( res => {
      this.setState({ characters: res.data.data.results })
    });
  };

  //Cleaner than doing it in the render
  _getCharacters() {
    return this.state.characters.map( char => {
      return (
        <Character key={char.id}
          name={char.name}
          description={char.description} avatar={char.thumbnail.path+'.'+char.thumbnail.extension} />
        )
      })
    };


    //Pre render treatments
    componentWillMount(){
      this._fetchData();
    };

    //Render
    render() {
      //Dirty way
      // const allChars = this.state.characters.map( char => {
      //   return <Character key={char.id}
      //     name={char.name}
      //     description={char.description} avatar={char.thumbnail.path+'.'+char.thumbnail.extension} />
      //   });

      return (
        <div>
          <h1>Marvel Characters</h1>
          {this._getCharacters()}
          {/* {allChars} */}
        </div>
      )
    }

    //Post render treatments
    componentDidMount() {
      const repeat = () => {
        console.log('Again');
        this._fetchData();
      }
      this._timer = setInterval(repeat, 5000);
      console.log('Mounted');
    };

    componentWillUnmount() {
      console.log('Unmounted');
      clearInterval(this._timer);
    };

  };

  export default MarvelBox;
