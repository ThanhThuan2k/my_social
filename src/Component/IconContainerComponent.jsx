import React from 'react';
import '../scss/IconContainerComponent.scss';

export default class IconContainerComponent extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const styles = {
            background: this.props.backgroundColor
        }

        return (
            <div className="icon-container">
                <a class="hyperlink" href={this.props.link} target="_blank">
                    <img className="fluid-image" src={this.props.image} alt={this.props.alt} />
                </a>
            </div>
        );
    }
}

IconContainerComponent.defaultProps = {
    image: 'facebook.png',
    alt: 'Icon',
    link: '#'
}