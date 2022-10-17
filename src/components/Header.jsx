import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faBell } from '@fortawesome/free-regular-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    return (
        <header className="h-[3.75rem] bg-[#161B22] px-[1.5rem] py-[1rem] flex items-center justify-between">
            <div className="flex items-center left-panel">
                <FontAwesomeIcon icon={faGithub} color={'#F0F6FC'} size={'2x'} />
                <input type="text" name="search" id="search" placeholder={'Search or jump to...'} className='text-inherit bg-[#0d1117] w-64 py-1 px-[0.75rem] text-[0.875rem] rounded border border-[#30363d] ml-4 focus:outline-0 active:outline-0 text-white' />
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="20" aria-hidden="true" className="relative -left-7"><path fill="none" stroke="#979A9C" opacity=".4" d="M3.5.5h12c1.7 0 3 1.3 3 3v13c0 1.7-1.3 3-3 3h-12c-1.7 0-3-1.3-3-3v-13c0-1.7 1.3-3 3-3z"></path><path fill="#979A9C" d="M11.8 6L8 15.1h-.9L10.8 6h1z"></path></svg>
                <a className='font-[600] text-primary-500 ml-4 whitespace-nowrap text-[0.875rem]'>Pull requests</a>
                <a className='font-[600] text-primary-500 ml-4 whitespace-nowrap text-[0.875rem]'>Issues</a>
                <a className='font-[600] text-primary-500 ml-4 whitespace-nowrap text-[0.875rem]'>Marketplace</a>
                <a className='font-[600] text-primary-500 ml-4 whitespace-nowrap text-[0.875rem]'>Explore</a>
            </div>
            <div className="right-panel flex justify-between w-20">
                <FontAwesomeIcon icon={faBell} color={'#f0f6fc'} />
                <FontAwesomeIcon icon={faPlus} color={'#f0f6fc'} />
                <div className="avatar w-5 h-5">
                    <img src="https://avatars.githubusercontent.com/u/17967909?s=40&v=4" alt="avatar" className='rounded-full' />
                </div>
            </div>
        </header>
    )
}

export default Header;