import axios from 'axios';

const baseURL = "https://api.jsonbin.io/v3/b/64872fa39d312622a36e5a21"


 const axiosClient = axios.create({
  headers :{ 'Content-Type': 'application/json' , 'X-Access-Key': '$2b$10$w.QZggHHf/0qYREv4dfAzeTddOkkn00bRzYOrteP/fwyznt6nLTLm' },
	baseURL,
});

export default axiosClient;