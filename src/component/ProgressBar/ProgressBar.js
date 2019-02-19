import React, {Component} from 'react';
import './ProgressBar.css';

class ProgressBar extends Component {
    constructor(props) {
        super(props);
        this.slide = React.createRef();
        this.progressBg = React.createRef();
        this.state = {
            curWidth: 0,
            progressBgX: 0
        }
    }

    mouseDown = (e) => {
        this.setState({
            progressBgX: this.progressBg.current.offsetLeft
        });
        const mouseMove = (e) =>{
            const progress = e.clientX - this.state.progressBgX;
            // console.log(progress);
            this.setState({
                curWidth: progress > 493 ? 493 : progress
            });
        };
        window.addEventListener('mousemove', mouseMove);

        //
        const removeMouse = () => {
            window.removeEventListener('mouseup', removeMouse);
            window.removeEventListener('mousemove', mouseMove);
        };
        window.addEventListener('mouseup', removeMouse);
    };

    render() {
        return (
            <div className="ProgressBar" ref={this.progressBg}>
                <div className="ProgressBg"></div>
                <div className="ProgressCur" style={{width: this.state.curWidth}}>
                    <span className="slide" ref={this.slide} onMouseDown={this.mouseDown}>
                    </span>
                </div>
            </div>
        );
    }
}

export default ProgressBar;
