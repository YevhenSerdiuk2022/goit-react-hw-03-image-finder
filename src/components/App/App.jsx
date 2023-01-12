import React, { Component } from "react";
import { Container } from "./App.styled";
import Searchbar from "components/Searchbar/Searchbar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ImageGallery from "components/ImageGallery/ImageGallery";




export default class App extends Component {
 
  state = {
    searchQuery: '',
    showModal: false,
  }




  handleSearchFormSubmit = searchQuery => {
    this.setState({ searchQuery });
     
  };


   
  render() {
     console.log("render")
 

    return (
      <Container>
        <Searchbar onSubmit={this.handleSearchFormSubmit} />  
        <ImageGallery
          searchQuery={this.state.searchQuery}
          
        />
        <ToastContainer
          position="top-left"
          autoClose={3000}
         theme="colored"/>     
      </Container>
    );
  }
}

