const HomePage = () => {
    return (
        <div className="flex flex-row overflow-auto">
            <div className="drawer bg-bg_black-500 w-1/3 min-h-screen border-r border-[#21262d] text-primary-500">
                <div className="dashboard sticky px-8">
                    <div className="user mt-4 mb-6 py-4 flex items-center text-center border-b border-border-500">
                        <img src="https://avatars.githubusercontent.com/u/17967909?s=40&v=4" alt="avatar" className="w-5 rounded-full"/>
                        <span className="text-secondary-500 font-semibold text-sm ml-1">mstfsgdc</span>
                    </div>
                    <div className="recent flex flex-row justify-between items-center mb-1">
                        <span className="text-sm text-secondary-500 font-semibold">Recent Repositories</span>
                        <a href="#" className="flex flex-row items-center text-secondary-500 py-[3px] px-3 bg-btn_primary-500 w-[70px] h-[28px] text-[12px] font-bold rounded-md"><svg aria-hidden="true" height="16" viewBox="0 0 16 16" version="1.1" width="16" data-view-component="true" ><path fill="#c9d1d9" fill-rule="evenodd" d="M2 2.5A2.5 2.5 0 014.5 0h8.75a.75.75 0 01.75.75v12.5a.75.75 0 01-.75.75h-2.5a.75.75 0 110-1.5h1.75v-2h-8a1 1 0 00-.714 1.7.75.75 0 01-1.072 1.05A2.495 2.495 0 012 11.5v-9zm10.5-1V9h-8c-.356 0-.694.074-1 .208V2.5a1 1 0 011-1h8zM5 12.25v3.25a.25.25 0 00.4.2l1.45-1.087a.25.25 0 01.3 0L8.6 15.7a.25.25 0 00.4-.2v-3.25a.25.25 0 00-.25-.25h-3.5a.25.25 0 00-.25.25z"></path></svg> New </a>
                    </div>
                    <div className="find">
                        <input type="text" name="w" id="w" placeholder="Find a repository..." 
                        className="mb-4 block w-full rounded-md border-border-500 border px-3 py-[5px] text-sm bg-lightblack-500 text-secondary-900" />
                    </div>
                    <div className="repos">
                        <ul className="text-sm text-secondary-500">
                            <li className="flex flex-row items-center mt-2"><img className="rounded-full h-4 mr-2" src="https://avatars.githubusercontent.com/u/17967909?s=16&v=4>" />mstfsgdc<span className="text-[#8B949E]">/</span>test_2</li>
                            <li className="flex flex-row items-center mt-2"><img className="rounded-full h-4 mr-2" src="https://avatars.githubusercontent.com/u/17967909?s=16&v=4>" />mstfsgdc<span className="text-[#8B949E]">/</span>test_1</li>
                            <li className="flex flex-row items-center mt-2"><img className="rounded-full h-4 mr-2" src="https://avatars.githubusercontent.com/u/17967909?s=16&v=4>" />mstfsgdc<span className="text-[#8B949E]">/</span>test_3</li>
                            <li className="flex flex-row items-center mt-2"><img className="rounded-full h-4 mr-2" src="https://avatars.githubusercontent.com/u/17967909?s=16&v=4>" />mstfsgdc<span className="text-[#8B949E]">/</span>test_4</li>
                            <li className="flex flex-row items-center mt-2"><img className="rounded-full h-4 mr-2" src="https://avatars.githubusercontent.com/u/17967909?s=16&v=4>" />mstfsgdc<span className="text-[#8B949E]">/</span>test_5</li>
                            <li className="flex flex-row items-center mt-2"><img className="rounded-full h-4 mr-2" src="https://avatars.githubusercontent.com/u/17967909?s=16&v=4>" />mstfsgdc<span className="text-[#8B949E]">/</span>test_6</li>
                            <li className="flex flex-row items-center mt-2"><img className="rounded-full h-4 mr-2" src="https://avatars.githubusercontent.com/u/17967909?s=16&v=4>" />mstfsgdc<span className="text-[#8B949E]">/</span>test_7</li>
                        </ul>
                    </div>
                    <div className="more mt-4 mb-4">
                        <a href="#" className="text-gray-500 text-[12px]">Show more</a>
                    </div>
                    <div className="recent-activity border-t border-border-500">
                        <h2 className="mt-4 text-secondary-500 text-sm font-semibold">Recent activity</h2>
                        <p className="mt-2 mb-[2px] text-[12px] text-gray-500">
                            When you take actions across GitHub, we’ll provide links to that activity here.
                        </p>
                    </div>
                </div>
            </div>
            <main className="w-full h-full flex flex-row bg-lightblack-500">
                <div className="content w-full h-screen text-primary-500 mt-4 mx-8">
                    Content
                </div>
                <div className="sidebar w-1/2 h-screen text-primary-500 mt-8">
                    Sidebar
                </div>
            </main>
        </div>
    )
}

export default HomePage;
