import _ from 'lodash';
import {createHeader} from './header.js';
import {createAside} from './sidebar.js';

document.addEventListener("DOMContentLoaded", () => {
    createHeader();
    createAside();
});