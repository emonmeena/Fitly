import axios from 'axios'

export default axios.create({
    baseURL: 'https://newsapi.org/v2',
    headers: {
        Authorization: 'Bearer 85fa4180b07246e09f2320f602f78d0a'
    }
});

// d6abfa4a2af645eebd8b6a8899e3dec3
