import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../Routes File/Firebase file/AuthProvider";
import useAxiousPublic from "./useAxiousPublic";


const useAdmin = () => {
    const { users : user } = useContext(AuthContext)
    const axiousPublic = useAxiousPublic()
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'idAdmin'],
        queryFn: async () => {
            const res = await axiousPublic.get(`/users/admin/${user.email}`)
            console.log(res)
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;