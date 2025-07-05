import { useEffect, useState } from "react";

import { logic } from "../logic";

import { Genders } from './components/Genders';

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

                    alerrt(error.message);
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

    console.log("Home -> render");

    return (
        <div className="p-5">
            <i className="text-xl text-black-800 font-family: Rock Salt py-2">
                Metalquest
            </i>

            <div className="mt-2">
                <h1 className="text-xl text-black-800 font-family: Rock Salt py-2">
                    Hello, {username}!
                </h1>

                <Genders onRockClicked={handleRockClicked}
                onMetalClicked={handleMetalClicked} />
            </div>
        </div>
    );
};
