import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID Ml_VNrZsvLocLHgDTBkRV68e7G0iBfYU02ezbOxQIU0'
    }
});

