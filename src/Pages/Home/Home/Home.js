import React from 'react';
import Banner from '../Banner/Banner';
import HelpDesk from '../HelpDesk/HelpDesk';
import TypingSkill from '../TypingSkill/TypingSkill';
import Video from '../Video/Video';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <TypingSkill></TypingSkill>
            <Video></Video>
            <HelpDesk></HelpDesk>
        </div>
    );
};

export default Home;