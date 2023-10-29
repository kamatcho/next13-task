import {DataTable} from "@/app/events/data-table";
import {columns} from "@/app/events/columns";
import {EventModel} from "@/models/event-model";
import React, { useState } from 'react'

type ListProps = {
    events?: Array<EventModel>
}

 const EventList : React.FC<ListProps>  = ({events=[]}) => {
    return (
        <div className='container'>
            <h1 className='mb-6 text-3xl font-bold'>All Events</h1>
            <DataTable columns={columns} data={events} />
        </div>
    )
}
export default EventList;