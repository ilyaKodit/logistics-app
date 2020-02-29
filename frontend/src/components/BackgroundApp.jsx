import React, {Component} from 'react';

class BackgroundApp extends Component {
    render() {
        return (
            <div className={'bg_cont'}>
                <video loop={true} muted={true} autoPlay={true} poster={'bg.png'} className="bg_video">
                    <source src="bg.mp4" type="video/mp4"/>
                </video>
            </div>
        );
    }
}

export default BackgroundApp;
