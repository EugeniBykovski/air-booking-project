import axios from "axios";
import { useRouter } from "next/navigation";
import { useCallback, useMemo } from "react";
import { toast } from "react-hot-toast";
import { SafeUser } from "../types";
import useLoginModal from "./useLoginModal";

interface IUseFavorite {
  listingId: string;
  currentUser?: SafeUser | null;
}

const useFavorite = ({
  listingId,
  currentUser
}: IUseFavorite) => {
  const router = useRouter()
  const loginModal = useLoginModal()

  const hasFavorites = useMemo(() => {
    const list = currentUser?.favoritesIds || []
    return list.includes(listingId)
  }, [currentUser, listingId])

  const toggleFavorite = useCallback(async (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
    if (!currentUser) return loginModal.onOpen()

    try {
      let request
      hasFavorites
        ? request = () => axios.delete(`/api/favorites/${listingId}`)
        : request = () => axios.post(`/api/favorites/${listingId}`)

      await request()
      router.refresh()
      toast.success('Success')
    } catch (error) {
      toast.error('Something went wrong!')
    }
  }, [currentUser, hasFavorites, listingId, loginModal, router])

  return {
    hasFavorites,
    toggleFavorite
  }
}

export default useFavorite