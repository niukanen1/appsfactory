
export type ErrorAlertProps = { 
    message: string
    showAlert: boolean
}

export default function ErrorAlert({message, showAlert}: ErrorAlertProps) { 
    if (!showAlert) { 
        return null
    }
    return ( 
        <div className="p-3 rounded-md border-[0.5px] border-red-900 bg-red-700/20 text-red-800">
            <p>
                {message}
            </p>
        </div>
    )
}