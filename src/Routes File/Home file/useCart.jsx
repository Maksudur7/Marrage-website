import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../Hooks file/useAxiosSecure";


const useCart = () => {
    const axiosSecure = useAxiosSecure()
    const { data: viewProfiles = [], refetch } = useQuery({
        queryKey: ['viewProfiles'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/viewProfiles`)
            return res.data
        }
    })
    return [viewProfiles, refetch]
};

export default useCart;