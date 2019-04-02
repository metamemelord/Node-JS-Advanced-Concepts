/*
    Dummy code! This file is not supposed to run. It's purely to understand
    how node works internally!
*/
throw new Error("This file is not supposed to run!");

// node myFile.js

const pendingTimers = [];
const pendingOSTasks = [];
const pendingOperations = [];

// New  timers, tasks, and operations are recorded from myFile
myFile.runContent();

function shouldContinue() {
  /*
        Three checks:
            1. Any pending setTimeout, setInterval, or setImmediate?
            2. Any pending OS tasks? (Some server listening on port)
            3. Any pending long running operations? (Like fs module)
  */
  return (
    pendingTimers.length || pendingOSTasks.length || pendingOperations.length
  );
}

// Entire body executes in 1 tick
while (shouldContinue()) {
  /*
        Three checks:
            1. Node looks at pendingTimers and sees if any functions are
               ready to be called! (setTimeout, setInterval)
            2. Node looks at pendingOSTasks and pendingOperations and
               calls relevent callbacks!
            3. Pause execution. Continue when...
                - a new pendingOSTask is done
                - a new pendingOperation is done
                - a timer is about to complete
            4. Look at pendingTimers. Call any setImmediate
            5. Handle any 'close' events. Like readSteam.on('close', handler);
  */
}

// exit back to terminal
