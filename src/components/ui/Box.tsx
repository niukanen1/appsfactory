export default function Box({children} : {children: React.ReactNode}) {
    return ( 
        <div className="p-3 rounded-md border-[0.5px] border-gray-800 dark:border-gray-600">
            {children}
        </div>
    )
}