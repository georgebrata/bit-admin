export function useLogger() {

    // prints out to console.log() unfinished functionality
    function logger(string) {
        console.log('//TODO')
        console.log(string)
    }

    return {
        logger
    }
}
