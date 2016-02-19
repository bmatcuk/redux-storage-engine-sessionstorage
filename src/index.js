export default (key) => ({
    load() {
        const jsonState = sessionStorage.getItem(key);
        return Promise.resolve(JSON.parse(jsonState) || {});
    },

    save(state) {
        const jsonState = JSON.stringify(state);
        sessionStorage.setItem(key, jsonState);
        return Promise.resolve();
    }
});
