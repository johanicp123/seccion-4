
export const getImagen = async() => {

    try {

        const apiKey = 'eXRDlwwak1GIIOwB7JFhZYOiYzZDOxoN';
        const resp   = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await resp.json(); 

        const { url } = data.images.original;
        return url;

    } catch (error) {

        return "no se encontro la imagen";
    }
    
    
    
}





