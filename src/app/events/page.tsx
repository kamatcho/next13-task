'use client'
import {getEvents, selectEvents , selectLoadingState , selectErrorState} from "@/redux/slices/eventSlice";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";

import {AppDispatch} from "@/redux/store";
import EventList from "@/features/events/event-list";
import { useToast } from "@/components/ui/use-toast"

export default  function Page() {
    const { toast } = useToast()

    const dispatch = useDispatch<AppDispatch>();

    const events = useSelector(selectEvents);
    const isLoading = useSelector(selectLoadingState)
    useEffect(() => {
        dispatch(getEvents());
    }, [dispatch]);

    return <div className='py-24'>



        <EventList  events={events}/>
    </div>
}