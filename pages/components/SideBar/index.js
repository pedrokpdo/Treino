export const SideBar = ({setHttp}) => {
    return (
        <div className="sideBarContainer">
            <ul className="listSideBarContainer">
                <li><a onClick={() => {setHttp('post')}}>Posts</a></li>
                <li><a onClick={() => {setHttp('outra')}}>Outra</a></li>
                <li><a onClick={() => {setHttp('post')}}>Outra</a></li>
                <li><a onClick={() => {setHttp('post')}}>Outra</a></li>
            </ul>
        </div>

    )
}