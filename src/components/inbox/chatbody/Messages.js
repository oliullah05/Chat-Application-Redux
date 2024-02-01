import { useSelector } from "react-redux";
import Message from "./Message";

export default function Messages({messages=[]}) {
    console.log(messages,4444);
    const {user}= useSelector((state)=>state.auth  )
    const {email}=user;

    return (
        <div className="relative w-full h-[calc(100vh_-_197px)] p-6 overflow-y-auto flex flex-col-reverse">
            <ul className="space-y-2">
                {/* <Message justify="start" message={lastMessage} />
                <Message justify="end" message="I am fine what about you?" /> */}
{
   messages.map((message)=>{
    const {message:lastMessage,id,sender} =message ;
    const justify = sender?.email ===email ?"end":"start"
    return <Message key={id} justify={justify} message={lastMessage} />
   }
    
   )
}


            </ul>
        </div>
    );
}
