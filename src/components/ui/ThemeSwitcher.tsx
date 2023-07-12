'use client'
import { useTheme } from "next-themes"
import Toggle from "./Toggle"
import { useEffect, useState } from "react"

export default function ThemeSwitcher() { 
    const {theme, setTheme} = useTheme()
    const [mount, setMount] = useState<boolean>(false);
    useEffect(() => { 
        setMount(true)
    }, [])
    const toggleTheme = (value: boolean) => { 
        setTheme(value ? 'dark' : 'light')
    }
    if (!mount) { 
        return null
    }
    return ( 
        <Toggle onToggle={toggleTheme} />
    )
}