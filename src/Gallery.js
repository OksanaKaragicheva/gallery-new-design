import React, { Component } from 'react';
import Dropdown from 'react-bootstrap/Dropdown';

class Gallery extends Component {
  constructor(props) {
    super(props);

    this.state = {
      albums: [],
      photos: [],
      objOfTags: {},
      titleToFilter: '',
      tagToFilter: ''
    }

    this.storeAlbumsInState = this.storeAlbumsInState.bind(this);
    this.openAlbum = this.openAlbum.bind(this);
  }

componentDidMount() {
  this.storeAlbumsInState();
}

openAlbum(e) {
   fetch(this.props.api + 'photos')
     .then(response => {
        return response.json();
     })
     .then(data => {
        const photos = data.filter(photo => {
          if (photo.albumId.toString() === e) {
             return photo;
          }
        return null;
      });
        this.setState({
          photos: photos,
          titleToFilter: ""
        });
    //    this.photosToStringToLocalStorage(this.state.photos);
    });
}

storeAlbumsInState() {
  fetch(this.props.api + "albums")
    .then(response => {
       return response.json();
    })
    .then(data => {
       this.setState({
         albums: data
       });
    });
}

render() {
  return(
       <Dropdown id="dropdownButton">
          <Dropdown.Toggle variant="warning">
            <Dropdown.Header id="dropdownHeader">
              Albums
            </Dropdown.Header>
          </Dropdown.Toggle>
            <Dropdown.Menu>
              {this.state.albums.map(album => {
                return (
                  <Dropdown.Item eventKey={album.id} key={album.id} href="#" onSelect={this.openAlbum}>
                    {`${album.title[0].toUpperCase()}${album.title.slice(1)}`}
                  </Dropdown.Item>
                );
              })}
            </Dropdown.Menu>
       </Dropdown>
    );
}

}

export default Gallery;
