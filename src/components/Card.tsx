import type { Identifier } from 'dnd-core'
import type { FC } from 'react'
import { useRef, useEffect, useState } from 'react'
import { DragSourceMonitor, useDrag, useDrop } from 'react-dnd'
import { ImageType } from '../data/featureImages'

import { ItemTypes } from './ItemTypes'

export interface CardProps {
    id: number
    index: number
    moveCard: (dragIndex: number, hoverIndex: number) => void
    image: ImageType
    selected: ImageType[]
    getSelected: (id: number) => void
}

interface DragItem {
    index: number
    id: string
    type: string
}

export const Card: FC<CardProps> = ({
    id,
    image,
    index,
    moveCard,
    getSelected,
    selected,
}) => {
    const ref = useRef<HTMLDivElement>(null)
    const [isChecked, setIsChecked] = useState(false)

    const [{ handlerId }, drop] = useDrop<DragItem, void, { handlerId: Identifier | null }>({
        accept: ItemTypes.CARD,
        collect(monitor) {
            return {
                handlerId: monitor.getHandlerId(),
            }
        },
        hover(item: DragItem) {
            if (!ref.current) {
                return
            }
            const dragIndex = item.index
            const hoverIndex = index

            moveCard(dragIndex, hoverIndex)

            item.index = hoverIndex
        },
    })

    useEffect(() => {
        const findSelectedItem = selected.find((item: ImageType) => {
            return item.id === image.id
        })
        setIsChecked(!!findSelectedItem)
    }, [selected.length, selected, image])

    const handleCheck = () => {
        getSelected(image.id)
    }

    const [{ isDragging, draggedItem, }, drag] = useDrag({
        type: ItemTypes.CARD,
        item: () => {
            return { id, index }
        },
        collect: (monitor: DragSourceMonitor) => {
            const isDragging = monitor.isDragging();
            const draggedItem = monitor.getItem();
            return {
                isDragging,
                draggedItem,
            };
        },

    });

    console.log("dragging:", isDragging);
    console.log("draggedItem:", draggedItem);

    const transitionStyle = {
        transition: 'transform 0.7s ease-in-out',
    }

    const cardStyle = {
        transform: isDragging ? 'translate(0, 0)' : 'translate(0, 0)',
    }

    drag(drop(ref))

    return (
        <div ref={ref} data-handler-id={handlerId} className='bg-transparent'>
            <div
                className={`overflow-hidden bg-transparent relative border border-slate-300  rounded-md group ${isDragging ? 'border-2 border-slate-400 ' : 'border'
                    }`}
                style={isDragging ? { ...cardStyle, ...transitionStyle } : cardStyle}
            >
                <img src={image.src} alt={`image-${id}`} />

                <div
                    className={`absolute top-0 bottom-0 right-0 left-0 bg-gray-50  ${isDragging ? 'block' : 'hidden'}`}
                ></div>

                <div
                    className={`${isChecked && !isDragging ? 'block bg-opacity-25 bg-slate-200' : 'hidden bg-opacity-50'} group-hover:block p-4 bg-slate-600 absolute top-0 left-0 bottom-0 right-0`}
                >
                    <input
                        type="checkbox"
                        checked={isChecked}
                        onChange={handleCheck}
                        className="w-5 h-5 cursor-pointer text-left block"
                    />
                </div>
            </div>
        </div>
    )
}
