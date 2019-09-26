import React from 'react';

class Avatar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            avatarData: null,
        };
    }

    render() {
        return (
            <div>
                Soy el componente avatar, voy a imprimir sus props:
                <p>{this.props.user}</p>
                <p>{this.props.size}</p>
            </div>
        );
    }
}

export default Avatar;
