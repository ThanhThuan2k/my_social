import React from 'react';
import '../scss/MainComponent.scss';
import IconContainerComponent from './IconContainerComponent';
import Like from '../assets/img/facebook.png';
import Google from '../assets/img/search.png';
import Github from '../assets/img/github.png';
import Instagram from '../assets/img/instagram.png';
import Tiktok from '../assets/img/tiktok.png';
import Phone from '../assets/img/telephone.png';

export default class MainComponent extends React.Component {
    render() {
        const information = [
            {
                image: Like,
                alt: "Facebook",
                link: "https://www.facebook.com/rong.bay.31586/"
            },
            {
                image: Google,
                alt: "Google",
                link: "#"
            },
            {
                image: Github,
                alt: "Github",
                link: "https://github.com/ThanhThuan2k"
            },
            {
                image: Instagram,
                alt: "Instagram",
                link: "#"
            },
            {
                image: Tiktok,
                alt: "Tiktok",
                link: "#"
            },
            {
                image: Phone,
                alt: "Phone",
                link: "tel:0334731581"
            }
        ]

        return (
            <div className="main">
                {
                    information.map((item) =>
                        <IconContainerComponent image={item.image} alt={item.alt} link={item.link} />
                    )
                }
            </div>
        );
    }
}