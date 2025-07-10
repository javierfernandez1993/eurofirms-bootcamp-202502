import { useEffect, useState } from 'react';
import { useContext } from '../context'
import { logic } from '../logic';
import { Routes, Route, useNavigate } from 'react-router'
import { ChooseGender } from './components/ChooseGender';

export const Home = ({ onUserLoggedOut }) => {
    const [view, setView] = useState("quest");
    const [username, setUsername] = useState("world");

    useEffect(() => {
        try {
            logic
                .getUserUsername()
                .then((username) => setUsername(username))
                .catch((error) => {
                    console.error(error);

                    alert(error.message);
                });
        } catch (error) {
            alert(error.message);
        }
    }, []);

    const handleLogoutClick = () => {
        try {
            logic.logoutUser();

            onUserLoggedOut();
        } catch (error) {
            alert(error.message);
        }
    };

    const handleRockClicked = () => navigate('/rock-poll')
    const handleMetalClicked = () => navigate('/metal-poll')

    console.log("Home -> render");

    return (
        <div className="p-5">
            <i className="text-xl text-black-800 py-2"  style= {{fontFamily: "'Rock Salt'"}}>
                Metalquest
            </i>

            <div className="mt-2">
                <h1 className="text-xl text-black-800 py-2"  style= {{fontFamily: "'Rock Salt'"}}>
                    Hello, {username}!
                </h1>
                    <Routes>
                        <Route path='/rockPoll'/>

                        <Route path='/metalPoll'/>

                        
                    </Routes>
                {/* 
                use routes
                - /choose-gender -> ChooseGender
                - /rock-poll -> RockPoll
                - /metal-poll -> MetalPoll
                 */}
                <button className="bg-black text-white px-3" type="button" onClick={handleLogoutClick}>logout</button>
                <ChooseGender onRockClicked={handleRockClicked}
                    onMetalClicked={handleMetalClicked} />
            </div>
        </div>
    );
};
