import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card";
import {Table, TableBody, TableCell, TableRow} from "@/components/ui/table";
import {EventModel} from "@/models/event-model";
import React from "react";
import {Button} from "@/components/ui/button";
import {
    Dialog, DialogClose,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
type ListProps = {
    event: EventModel,
    deleteFunc : ()=>void
}

const SingleEvent : React.FC<ListProps>  = ({event , deleteFunc})=> {
    const detailsRowData = (title: string , value:any)=> {
        return (
            <TableRow>
                <TableCell
                    className='h-24 text-center'
                >
                    <p className={"text-xl font-black"}>{title}</p>
                </TableCell>
                <TableCell
                    className='h-24 text-center'
                >
                    {value}
                </TableCell>
            </TableRow>

        )
    }
    const date = new Date(event.date)
    return (
        <div className='container'>

            <div className="flex flex-wrap justify-center">
                <div className="w-6/12 sm:w-4/12 px-4">
                    <img src={event.image} alt="Event Image" className="shadow rounded max-w-full h-auto align-middle border-2 p-2" />
                </div>

            </div>
            <div className={"flex justify-center mt-4 mb-3"}>
                <Dialog>
                    <DialogTrigger>
                        <Button className={"bg-red-500"} >
                            Delete Event
                        </Button>
                    </DialogTrigger>
                    <DialogContent>
                        <DialogHeader>
                            <DialogTitle>Are you sure absolutely sure?</DialogTitle>
                            <DialogDescription>
                                This action cannot be undone. This will permanently delete event from our servers.
                            </DialogDescription>
                        </DialogHeader>
                        <DialogClose>
                            <div className={" flex  justify-around"}>
                                <Button className={"bg-white text-blue-400 border-blue-400 border-2"}>
                                    Cancel
                                </Button>
                                <Button onClick={deleteFunc} className={"bg-red-500"}>
                                    Delete
                                </Button>
                            </div>

                        </DialogClose>
                    </DialogContent>

                </Dialog>

            </div>

            <div className={"justify-center mt-5"}>
                <Card>
                    <CardHeader>
                        <CardTitle><h1 className='mb-6 text-3xl font-bold'>{event.title}</h1></CardTitle>
                        <CardDescription>{event.description}</CardDescription>

                    </CardHeader>

                    <CardContent>
                        <Table>
                            <TableBody >
                                {detailsRowData("Price" , event.price)}
                                {detailsRowData("Address" , event.address)}
                                {detailsRowData("Capacity" , event.capacity)}

                                {detailsRowData("Speakers" , event.speakers)}
                                {detailsRowData("Capacity" , event.spots)}
                                {detailsRowData("Date" , date.toLocaleDateString())}

                            </TableBody>
                        </Table>

                    </CardContent>

                </Card>
            </div>
        </div>
    )
}
export default SingleEvent