import axios from "axios";


const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
    headers: { 'X-Custom-Header': 'foobar' }
})

const useAxiosSecure = () => {
    // const navigate = useNavigate()
    // const { logOut } = useContext(AuthContext)
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('access-token')
        config.headers.authorization = `Bearer ${token}`
        return config;
    }, function (error) {
        return Promise.reject(error);
    });

    axiosSecure.interceptors.response.use(function (response) {

        return response;
    }, async (error) => {
        const status = error.response.status
        console.log('status error in the interceptor', status)
        if (status === 401 || status === 403) {
            // await logOut()
            // navigate('/login')
        }
        return Promise.reject(error);
    });

    return axiosSecure;
};

export default useAxiosSecure;