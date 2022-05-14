export const SideBar = ({setHttp}) => {
    return (
        <div>
            <ul>
                <li><a onClick={() => {setHttp('post')}}>Posts</a></li>
                <li><a onClick={() => {setHttp('outra')}}>Outra</a></li>
                <li><a>Outra</a></li>
                <li><a>Outra</a></li>
            </ul>
        </div>

    )
}