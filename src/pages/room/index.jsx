import React, { useEffect, useRef } from 'react';
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt';
import { useParams } from 'react-router-dom';

const RoomPage = () => {
    const { roomId } = useParams();
    const meetingContainerRef = useRef(null);

    const myMeeting = async (element) => {
        const appID = 1875242582;
        const serverSecret = "7bf0d45968725d56eb17a90c254c8196";
        const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
            appID,
            serverSecret,
            roomId,
            Date.now().toString(),  // Corrected to call toString()
            "Rohit"
        );
        const zp = ZegoUIKitPrebuilt.create(kitToken);
        zp.joinRoom({
            container: element,  // Corrected typo here
            scenario: {
                mode: ZegoUIKitPrebuilt.VideoConferenceMode,
            },
        });
    };

    useEffect(() => {
        if (meetingContainerRef.current) {
            myMeeting(meetingContainerRef.current);
        }
    }, []);

    return (
        <div className='room-page'>
            <div ref={meetingContainerRef} />
        </div>
    );
};

export default RoomPage;
