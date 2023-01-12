import { Component } from 'react';
import { ImSearch } from 'react-icons/im';
import { Header, SearchForm, SearchFormInput, StyledBtn } from "./Searchbar.styled";
import { toast } from 'react-toastify';


export default class Searchbar extends Component {
    state = {
        searchQuery: '',

      
    };

    handleNameChange = event => {
        this.setState({ searchQuery: event.currentTarget.value.toLowerCase() });
    };

     handleSubmit = (event) => {
         event.preventDefault();

         if (this.state.searchQuery.trim() === '') {
             toast.warn("Please, enter something ...")
             return;
         }
         this.props.onSubmit(this.state.searchQuery);
         this.setState({ searchQuery: ''});
       
    }
    render() {
        return (
        <Header>
            <SearchForm onSubmit={this.handleSubmit} class="form">
                <StyledBtn type="submit" class="button">
               <ImSearch />
                </StyledBtn>

            <SearchFormInput
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            placeholder="Search images and photos"
            name="searchQuery"
            value={this.state.searchQuery}
            onChange={this.handleNameChange}           
            />
        </SearchForm>
        </Header>
             
    );
   }
   
};
