import { useState } from "react"
import { Posts } from "../Posts"
import { SideBar } from "../SideBar"

export const HomeContainer = () => {
    const [http, setHttp] = useState('post')

   
    return (
        <div className="contentContainer">
            <SideBar setHttp={setHttp} />
            {http === 'post' ? <Posts/> : 'outra page'}
        </div>
    )
}