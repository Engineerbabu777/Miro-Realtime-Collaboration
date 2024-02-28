

import Canvas from './_components/canvas';


type Props = {
    params:{
        boardId: string;
    }
}

export default function Page({
    params 
}:Props) {


    return(<>
    <Canvas boardId={params.boardId}/>
    </>)
}