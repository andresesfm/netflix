import React, { useState, createContext, useContext } from 'react'
import ReactDOM from 'react-dom'
import { Container, Button, Overlay, Inner, Close } from './styles/player'


const PlayerContext = createContext()

const Player = ({ src, ...restProps }) => {
    const [showPlayer, setShowPlayer] = useState(false)
    return (
        <PlayerContext.Provider value={{ showPlayer, setShowPlayer }}>
            <Container {...restProps}>
                <PButton />
                <PVideo src={src} />
            </Container>
        </PlayerContext.Provider>
    )
}

export const PVideo = ({ children, src, ...restProps }) => {
    const { showPlayer, setShowPlayer } = useContext(PlayerContext)
    return showPlayer ? ReactDOM.createPortal(
        <Overlay onClick={() => setShowPlayer(false)} {...restProps}
            data-testid='player'>
            <Inner>
                <video id='netflix-player' controls>
                    <source src={src} type='video/mp4' />
                </video>
                <Close />
            </Inner>
            {children}
        </Overlay>
        , document.body
    ) : null
}


export const PButton = ({ ...restProps }) => {
    const { setShowPlayer } = useContext(PlayerContext)
    return (
        <Button onClick={() => setShowPlayer(showPlayer => !showPlayer)} {...restProps} >Play</Button>
    )
}






export default Player;