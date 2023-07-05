import { memo, useState } from 'react'

import { AiOutlineClose } from 'react-icons/ai'
import { GiHamburgerMenu } from 'react-icons/gi'
import { Link } from 'react-router-dom'

import { MenuMb, MenuOverlay, NavSection } from './styles'

interface IMenuMobileProps {
  children?: React.ReactNode
}

const MenuMobile: React.FC<IMenuMobileProps> = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false)
  return (
    <>
      <MenuOverlay
        isMenuOpened={isMenuOpened}
        onClick={() => setIsMenuOpened(false)}
        className="position-fixed h-100 w-100"
      />
      <div className="d-flex align-items-center d-lg-none">
        <GiHamburgerMenu
          type="button"
          onClick={() => setIsMenuOpened(true)}
          size={25}
        />
      </div>
      <MenuMb
        isMenuOpened={isMenuOpened}
        className="d-flex flex-column d-lg-none position-fixed bg-white h-100"
      >
        <NavSection className=" w-100">
          <div className=" d-flex flex-column justify-content-center mb-3">
            <AiOutlineClose
              type="button"
              onClick={() => setIsMenuOpened(false)}
              className="align-self-end"
            />
          </div>
          <div className="d-flex flex-column w-100">
            <h4 className="text-center pb-5">The Rick and Morty API</h4>
            <h5 className="pb-4 border-bottom px-2">MENU</h5>
            <Link
              to="/"
              className="pb-3 pt-2 px-2 text-decoration-none text-black"
            >
              CHARACTERS
            </Link>
            <Link
              to="/location"
              className="pb-3 px-2 text-decoration-none text-black"
            >
              LOCATIONS
            </Link>
            <Link
              to="/episodes"
              className="pb-3 px-2 text-decoration-none text-black"
            >
              EPISODES
            </Link>
          </div>
        </NavSection>
      </MenuMb>
    </>
  )
}

export default memo(MenuMobile)
