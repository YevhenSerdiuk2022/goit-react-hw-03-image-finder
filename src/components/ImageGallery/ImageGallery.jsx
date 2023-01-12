import PropTypes from 'prop-types';
import { Component } from "react";
import { Ul } from './ImageGallery.styled';
import { ImageGalleryItem } from "components/ImageGalleryItem/ImageGalleryItem";
import { Loader } from "components/Loader/Loader";
import ImageErrorView from "components/ImageErrorView/ImageErrorView";
import pixabayAPI from '../../services/pixabay-api';
import { LoadMoreBtn } from "components/Button/Button";
import Modal from "components/Modal";
const PER_PAGE = 12;

export default class ImageGallery extends Component {
    state = {
        
        query: null,
        error: null,
        status: 'idle',
        images: [],
        page: 1,
        modalUrl: '',
        modalAlt: '',
        showModal: false,
        
    };

    componentDidUpdate(prevProps, prevState) {
        const prevName = prevProps.searchQuery;
        const nextName = this.props.searchQuery;
             
        if (prevName !== nextName) {
            this.reset();
            this.setState({ status: 'pending' });
            this.fetchImages(nextName);
        }
    };
    
    
    fetchImages = name => {
        const { page } = this.state;
        pixabayAPI.fetchSearchQuery(name, page, PER_PAGE)
            .then(({ hits, totalHits }) => {
                if (hits.length === 0) {
                    return Promise.reject(new Error(`Oops! Nothing found ${name}`));
                }
                this.setState(prevState => ({
                    images: [...prevState.images, ...hits],
                    totalHits,
                    status: 'resolved'
                }));
            })
            .catch(error => this.setState({ error, status: 'rejected' }))
    }
    


    handleLoadMore = () => {
        const nextName = this.props.searchQuery;
        
        this.setState(prevState => ({
            page: prevState.page + 1,
        }));
        this.fetchImages(nextName);
        this.scrollDown();
    };
 
    scrollDown = () => {
        setTimeout(() => {
            window.scrollTo({
                top: document.body.scrollHeight,
                left: 0,
                behavior: 'smooth',
            });
        }, 500);
    };
          toggleModal = () => {
           this.setState(({ showModal }) => ({
           showModal: !showModal,
           }));
    };

    handleClickImage = ({ item }) => {
        const tags = item.tags;
        const largeImageURL = item.largeImageURL;
        this.setState({modalAlt: tags, modalUrl: largeImageURL})
        this.toggleModal();
    }    

    reset = () => {
        this.setState({ page: 1, images: [], })
    };
    render() {
        const { error, status, images, showModal, modalAlt, modalUrl } = this.state;
       
        if (status === 'idle') {
            return <div></div>
        }

        if (status === 'pending') {
            return <Loader />
        }

        if (status === 'rejected') {
            return <ImageErrorView message={error.message} />
        }
        if (status === 'resolved') {
            return (
                 <div>
                  {showModal && <Modal
                    onClose={this.toggleModal}
                    modalAlt={modalAlt}
                    modalUrl={modalUrl}
                    />}
               
                    <Ul>
                        {images.map(item => (
                            <ImageGalleryItem key={item.id}
                                item={item}
                                openModal={this.handleClickImage}
                                 />
                        ))}
                    </Ul>
                    <LoadMoreBtn onClick={this.handleLoadMore} />
                </div>
                 
            )
        }
     
            
            
        
       
    }
}

ImageGallery.propTypes = {
    images: PropTypes.arrayOf(
        PropTypes.shape({
           item:PropTypes.arrayOf 
        })
    )
}