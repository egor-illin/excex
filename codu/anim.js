const config = {
    getTimeFunction: () => {
        const currentDate = new Date();
        return currentDate.getTime();
    }
};

// Using the getTimeFunction
console.log("Current Time in Milliseconds:", config.getTimeFunction());
