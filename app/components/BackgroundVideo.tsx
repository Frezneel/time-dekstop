import React, {useCallback, useEffect, useState} from "react";

export function BackgroundVideo() {

    const [fileNames, setFileNames] = useState<string[]>([]);
    const videoBg = 'https://samplelib.com/lib/preview/mp4/sample-30s.mp4';

    return (
        <video autoPlay loop muted playsInline style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: '-1'
        }}>
            <source src={'/videos/Injourney.mp4'} type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}