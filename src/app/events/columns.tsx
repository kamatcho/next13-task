'use client'

import { ColumnDef } from '@tanstack/react-table'

import { MoreHorizontal, ArrowUpDown } from 'lucide-react'

import { Button } from '@/components/ui/button'
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import Link from 'next/link'
import {EventModel} from "@/models/event-model";


export const columns: ColumnDef<EventModel>[] = [
    {
        accessorKey: 'title',
        header: ({ column }) => {
            return (
                <Button
                    variant='ghost'
                    onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
                >
                    Title
                    <ArrowUpDown className='ml-2 h-4 w-4' />
                </Button>
            )
        }
    },
    {
        accessorKey: 'price',
        header: 'Price'
    },
    {
        id: 'actions',
        cell: ({ row }) => {
            const event = row.original

            return (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button variant='ghost' className='h-8 w-8 p-0'>
                            <span className='sr-only'>Open menu</span>
                            <MoreHorizontal className='h-4 w-4' />
                        </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align='end'>
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem
                            onClick={() => navigator.clipboard.writeText(event.id)}
                        >
                            Copy Event ID
                        </DropdownMenuItem>
                        <DropdownMenuSeparator />
                        {/*<DropdownMenuItem onClick={()=> router.push(`/events/${event.id}`) }>View Event details</DropdownMenuItem>*/}

                        <DropdownMenuItem >
                            <Link href={`/events/${event.id}`}>
                                View Event details
                            </Link>
                            </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>
            )
        }
    }
]