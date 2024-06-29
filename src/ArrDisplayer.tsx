import React from 'react'
import { Relic } from './Relic'

export default function ArrDisplayer(props: any) {
    const spawnImgs = (arr: Relic[]) =>
        arr.map((x) => <>
            <img src={'/relic_images/' + x.Name.replaceAll(' ', '') + '.png'} className='w-14'></img>
        </>)
    return <div className='flex flex-row w-full flex-wrap'>
        {spawnImgs(props.arr)}
    </div>



}
