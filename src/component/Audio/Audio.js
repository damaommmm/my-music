import React, { Component } from 'react';
import './Audio.css';
import ProgressBar from '../ProgressBar/ProgressBar'

class Audio extends Component {
    constructor(props){
        super(props);
        this.audio = React.createRef();
        this.state = {
            audioState:'audio-paused'
        }
    }
    playAndPase = () => {
        const audio = this.audio.current;
        // console.log(audio);
        if(audio.paused){
            audio.play();
            this.setState({
                audioState:'audio-play'
            })
        }else {
            audio.pause();
            this.setState({
                audioState:'audio-paused'
            })
        }
    };
    render() {
        const {audioState} = this.state;
        return (
            <div className="Audio">
                <audio src={require('../../static/222.mp3')}  ref={this.audio}>
                    您的浏览器不支持 audio 标签。
                </audio>
                <div className="audio-content">
                    <div className="btns">
                        <a href="javascript:;" hidefocus="true" className="prev">上一首</a>
                        <a href="javascript:;" hidefocus="true" className={'play-pauseBtn '+audioState} onClick={this.playAndPase}>播放/暂停</a>
                        <a href="javascript:;" hidefocus="true" className="next">下一首</a>
                    </div>
                    <div className="sing-image">
                        <img src="" alt=""/>
                    </div>
                    <div className="audio-play-control">
                        <div className="audio-info">
                            <a href="#" className="audio-name">明年今日</a>
                        </div>
                        <ProgressBar />
                    </div>
                </div>

            </div>
        );
    }
}

export default Audio;
