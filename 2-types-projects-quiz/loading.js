{
    function printLoginState(state) {
        switch (state.state) {
            case 'loading':
                console.log('👀 loading...');
                break;
            case 'success':
                console.log('😃 loaded');
                break;
            case 'fail':
                console.log('😱 no network');
                break;
            default:
                throw Error("unknown state " + state);
        }
    }
    printLoginState({ state: 'loading' }); // 👀 loading...
    printLoginState({ state: 'success', response: { body: 'loaded' } }); // 😃 loaded
    printLoginState({ state: 'fail', reason: 'no network' }); // 😱 no network
}
