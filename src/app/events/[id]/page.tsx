'use client'
import {useDispatch, useSelector} from "react-redux";
import {getEventDetails, selectLoadingState, selectSingleEvent , deleteSingleEvent} from "@/redux/slices/eventSlice";
import {useEffect} from "react";
import {AppDispatch} from "@/redux/store";
import SingleEvent from "@/features/events/single-event";
import {Skeleton} from "@/components/ui/skeleton";
import { useRouter } from 'next/navigation'

export default function Page({params}: { params: any }) {
    const dispatch = useDispatch<AppDispatch>();
    const router = useRouter()

    const event = useSelector(selectSingleEvent);
    const isLoading = useSelector(selectLoadingState);

    useEffect(() => {
        dispatch(getEventDetails(params.id));
    }, [dispatch, params.id]);

    return (
        <div className='py-24'>

            {!isLoading && event ? <SingleEvent event={event} deleteFunc={()=>{
                dispatch(deleteSingleEvent(params.id))
                router.back()

            }}/> : <Skeleton className="w-[100px] h-[20px] rounded-full" />
            }
        </div>
    )
}