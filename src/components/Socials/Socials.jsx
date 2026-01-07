import React from "react";

function Socials({className, itemClassName, listClassName, iconSize = 20, socials}) {
    return (
        <div className={className}>
            <nav>
                <div className={listClassName}>
                    {socials.map((social) => {
                        const Icon = social.icon;

                        return (
                            <div key={social.name} className={itemClassName}>
                                <a
                                    href={social.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Icon size={iconSize}/>
                                </a>
                            </div>
                        );
                    })}
                </div>
            </nav>
        </div>
    );
}

export default Socials;
