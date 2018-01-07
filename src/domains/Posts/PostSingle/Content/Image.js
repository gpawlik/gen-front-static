import React, { Component } from 'react';
import ImageStyled from './ImageStyled';

export class ImageBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: true
    };
  }

  handleImageLoaded = () => {
    console.log('LOADED!');
    this.setState({ isLoading: false });
  };

  componentDidMount = () => {
    this.setState({ isLoading: true });

    this.image = new Image();
    this.image.onload = this.handleImageLoaded;
    this.image.src = this.props.src;
  };

  componentWillUnmount = () => {
    this.setState({ isLoading: true });
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.src !== nextProps.src) {
      this.setState({ isLoading: true });
      this.image = new Image();
      this.image.onload = this.handleImageLoaded;
      this.image.src = this.props.src;
    }
  }

  render() {
    const { src, srcThumbnail } = this.props;
    const { isLoading } = this.state;

    return (
      <ImageStyled src={src} srcThumbnail={srcThumbnail} isLight={isLoading} />
    );
  }
}

export default ImageBox;
