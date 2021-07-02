import React from 'react';
import '../scss/ContainerComponent.scss';
import MainComponent from './MainComponent';

export default class ContainerComponent extends React.Component{
    render(){
        return (
            <div className="container">
                <MainComponent />
            </div>
        );
    };
}