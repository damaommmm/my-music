import React, {Component} from 'react';
import './Audio.css';
import ProgressBar from '../ProgressBar/ProgressBar'

class Audio extends Component {
    constructor(props) {
        super(props);
        this.audio = React.createRef();
        this.state = {
            audioState: 'audio-paused',
            audioPercent: 0,
            allTime: '00:00',
            hoverTime: '00:00'
        }
    }

    playAndPase = () => {
        const audio = this.audio.current;
        // console.log(audio);
        if (audio.paused) {
            audio.play();
            this.setState({
                audioState: 'audio-play'
            })
        } else {
            audio.pause();
            this.setState({
                audioState: 'audio-paused'
            })
        }
    };
    changeProgress = (current) => {
        // console.log(current);
        const audio = this.audio.current;
        audio.currentTime = current * audio.duration;
    };

    componentDidMount() {
        const audio = this.audio.current;
        setInterval(() => {
            // console.log(this.audio.current.currentTime);
            // console.log(this.audio.current.duration);
            let allTime = timeFormat(this.audio.current.duration);
            let hoverTime = timeFormat(this.audio.current.currentTime);
            this.setState({
                audioPercent: audio.currentTime / audio.duration,
                allTime: allTime,
                hoverTime: hoverTime
            })
        }, 1000)
    }

    render() {
        const {audioState, allTime, hoverTime} = this.state;
        return (
            <div className="Audio">
                <audio src={require('../../static/222.mp3')} ref={this.audio}>
                    您的浏览器不支持 audio 标签。
                </audio>
                <div className="audio-content">
                    <div className="btns">
                        <a href="javascript:;" hidefocus="true" className="prev">上一首</a>
                        <a href="javascript:;" hidefocus="true" className={'play-pauseBtn ' + audioState}
                           onClick={this.playAndPase}>播放/暂停</a>
                        <a href="javascript:;" hidefocus="true" className="next">下一首</a>
                    </div>
                    <div className="sing-image">
                        <img src="" alt=""/>
                    </div>
                    <div className="audio-play-control">
                        <div className="audio-info clearFix">
                            <a href="#" className="audio-name">明年今日(陈奕迅)</a>
                        </div>
                        <ProgressBar allTime={allTime} hoverTime={hoverTime} progress={this.state.audioPercent}
                                     changeProgress={this.changeProgress}/>
                    </div>
                </div>

            </div>
        );
    }
}

function timeFormat(time = 0) {
    let hour = parseInt(time / 60);
    hour = hour < 10 ? '0' + hour : hour;
    let second = Math.ceil(time%60);
    second = second < 10 ? '0' + second : second;
    return `${hour}:${second}`
}

export default Audio;
