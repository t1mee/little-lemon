import React from 'react';
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';


const NavLinks = (props) => {
  const animateFrom = {opacity: 0, y: -40}
  const animateTo = {opacity: 1, y: 0}
  return (
    <motion.ul className="menu-items" initial={animateFrom} animate={animateTo} transition={{delay: 0.05}}>
            <motion.li
              initial={animateFrom}
              animate={animateTo}
              transition={{delay: 0.05}}
              onClick={() => props.isMobile && props.closeMobileMenu()}
              >
                <Link to="/" className="active-links">Home</Link>
              </motion.li>
            <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.10}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <Link to="/about">About</Link>
            </motion.li>
            <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.15}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <Link to="/menu">Menu</Link>
            </motion.li>
            <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.25}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <Link to="/order">Order Online</Link>
            </motion.li>
            <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.30}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <Link to="/login">Login</Link>
            </motion.li>
            <motion.li
            initial={animateFrom}
            animate={animateTo}
            transition={{delay: 0.35}}
            onClick={() => props.isMobile && props.closeMobileMenu()}
            >
              <Link to="#">Donate</Link>
            </motion.li>
        </motion.ul>
  )
}

export default NavLinks