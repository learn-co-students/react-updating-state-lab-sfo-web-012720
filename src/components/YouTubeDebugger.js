import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
    state = {
        errors: [],
        user: null,
        settings: {
            bitrate: 8,
            video: {
                resolution: '1080p'
            }
        }
    }
    
    handleBitrateClick = () => {
        this.setState({settings: {
            ...this.state.settings,
            bitrate : 12
            }    
        })
        console.log(this.state.settings.bitrate)
    }

    handleResolutionClick = () => {
        this.setState({
            settings: {
                ...this.state.settings,
            video: {
                ...this.state.settings.video,
                resolution: '720p'
            }
            }
        })
        console.log(this.state.settings.video.resolution)
    }

    render() {
        return (
            <div>
                <button className="bitrate" onClick={this.handleBitrateClick}>Change bitrate</button><br />
                <p>Bitrate is currently {this.state.settings.bitrate}</p>
                <button className="resolution" onClick={this.handleResolutionClick}>Change resolution</button>
                <p>Resolution is currently {this.state.settings.video.resolution}</p>
            </div>
        )
    }
}
