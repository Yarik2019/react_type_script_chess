import React, { FC } from 'react';
import {Cell} from "../models/Cell";
interface CellProps{
    cell: Cell
}
const CellComponent: FC<CellProps> = ({cell}) => {

    console.log(cell.figure)
    return (
        <div className={['cell', cell.color].join(" ")}>
            {/* <div>{cell.figure}</div> */}
            {/* <div>{cell.figure}</div> */}
        </div>
    );
};

export default CellComponent;