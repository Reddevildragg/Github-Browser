import axios from 'axios'

export default class github
{
    static GetUserProjects()
    {
        // create a promise for the axios request
        const promise = axios.get('https://api.github.com/orgs/greener-games/repos')

        // using .then, create a new promise which extracts the data
        // return it
        return promise.then((response) => response.data)
    }
}