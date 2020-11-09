import React, { useState } from 'react';
import StreamPlayer from '../StreamPlayer';
import StreamControls from '../StreamControls';

const Home = ({
  activeStreamUrl,
  activeStreamer,
  getRandomStream,
  getNextStream,
  getPrevStream,
}) => {
  const [started, setStarted] = useState(false);
  return (
    <React.Fragment>
      <StreamPlayer activeStreamUrl={activeStreamUrl} started={started} />
      <StreamControls
        activeStreamUrl={activeStreamUrl}
        activeStreamer={activeStreamer}
        getRandomStream={getRandomStream}
        getNextStream={getNextStream}
        getPrevStream={getPrevStream}
        started={started}
        setStarted={setStarted}
      />
    </React.Fragment>
  );
};

export default Home;
