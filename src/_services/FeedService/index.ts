import * as HttpApiService from '../HttpApiService'
import AsyncStorage from "@react-native-async-storage/async-storage";



const getPosts = async (id?: string) => {
    let url = '/feed'
    if (id) {
        url = `/feed?id=${id}`
    }
    return await HttpApiService.get(url)
}

export { getPosts }