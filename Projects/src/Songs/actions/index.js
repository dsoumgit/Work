// Action creator 
export const selectSong = song => {
    // Return an action 
    return {
        type: 'SONG_SELECTED',   // type is required
        payload: song 
    };
};

/* Differences between export default vs export 
    - Export default can only export a single module 
    - Export can have multiple named exports per file and surrounded by braces 

*/
