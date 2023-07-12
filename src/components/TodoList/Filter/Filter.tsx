"use client";

import { applyFilter, filters } from "@/app/features/filters/filtersSlice";
import { useAppDispatch, useAppSelector } from "@/app/hooks/reduxHooks";
import { useState } from "react";

export default function Filter() {
	const [select, setSelect] = useState<filters>("none");
    const filter = useAppSelector(state => state.filters.filter); 
    const dispatch = useAppDispatch();

    const handleClick = (appliedFilter: filters) => { 
        dispatch(applyFilter(appliedFilter));
    }

	return (
		<div className='flex w-fit flex-row rounded-md overflow-hidden divide-x-[0.5px] divide-gray-200 dark:divide-zinc-800'>
			<div
                onClick={() => handleClick("doneAtTop")}
				className={
					"filterButtonBase " + (filter == "doneAtTop" ? "filterButtonSelected" : "filterButtonNonSelected")
				}>
				Done at the top
			</div>
			<div
                onClick={() => handleClick("InProgressAtTop")}
				className={"filterButtonBase " + (filter == "InProgressAtTop" ? "filterButtonSelected" : "filterButtonNonSelected")}>
				In Progress at the top
			</div>
			<div
                onClick={() => handleClick("none")}
				className={"filterButtonBase " + (filter == "none" ? "filterButtonSelected" : "filterButtonNonSelected")}>
				None
			</div>
		</div>
	);
}
