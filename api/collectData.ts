import axiosClient from './axiosClient'


export const collectDataApi = {
	getEmails:  async () =>  await axiosClient.get('/'),
	updateEmails: async ( data: Array<string> ) =>  await axiosClient.put('/', JSON.stringify(data)),
}