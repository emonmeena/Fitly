import axios from 'axios'

export default axios.create({
    baseURL: 'https://newsapi.org/v2',
    headers: {
        Authorization: 'Bearer d6abfa4a2af645eebd8b6a8899e3dec3'
    }
});

// d6abfa4a2af645eebd8b6a8899e3dec3
