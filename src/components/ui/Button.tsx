
export type ButtonProps = { 
    action: () => void
    isPrimary?: boolean
    children: React.ReactNode
}

export default function Button({ children, action, isPrimary = false }: ButtonProps) { 
    const baseClass = "py-2 px-5 rounded-md cursor-pointer flex flex-row items-center justify-between gap-2 ";
    const primaryClass = 'bg-blue-600 text-white'; 
    const nonPrimaryClass = 'border border-gray-800 dark:border-slate-50 dark:text-white';
    return ( 
        <div className={baseClass + (isPrimary ? primaryClass : nonPrimaryClass)} onClick={action}> 
            {children}
        </div>
    )
}