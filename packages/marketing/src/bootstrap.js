import React from 'react';
import ReactDOM  from 'react-dom';
import App from './App';

const mount = (el) => {
    ReactDOM.render(
        <App/>,
        el
    );
}

if(process.env.NODE_ENV === 'development'){
    var el = document.querySelector('#_marketing-div-root');

    if(el!=null){
        mount(el);
    }
}

export {mount};