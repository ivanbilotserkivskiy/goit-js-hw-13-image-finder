import './sass/main.scss';
import galleryTpl from '../src/templates/picturesTpl.hbs'
// import onSearch from './apiService';
import GalleryApiService from './apiService';



const _ = require('lodash');


const formRef = document.querySelector('.search-form')
const listRef = document.querySelector('.gallery')
const inputRef = document.querySelector('input')
const moreBtnRef = document.querySelector('.more-btn')
const searchBtnRef = document.querySelector('.search-btn')

formRef.addEventListener('submit', onSearch)
moreBtnRef.addEventListener('click', onLoadMore)


function onScroll() {
    moreBtnRef.scrollIntoView({
        behavior: 'smooth',
        block: 'end',
      });
}
const galleryApiService = new GalleryApiService()

function onSearch(e) {
    e.preventDefault();

    // const searchQuery = e.currentTarget.elements.query.value
    // galleryApiService.query = inputRef.value
    galleryApiService.query = e.currentTarget.elements.query.value

    galleryApiService.fetchGallery().then(appendGalleryMarkup)
}

function onLoadMore() {
    galleryApiService.fetchGallery().then(appendGalleryMarkup)
    
}

function appendGalleryMarkup(hits) {
    listRef.insertAdjacentHTML('beforeend', galleryTpl(hits))
    onScroll()
}

