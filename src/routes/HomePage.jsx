const HomePage = () => {
    return (
        <div className="flex flex-row overflow-auto">
            <div className="drawer bg-bg_black-500 w-1/3 min-h-screen border-r border-[#21262d] text-primary-500">
                <div className="dashboard sticky">
                    Testt
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
