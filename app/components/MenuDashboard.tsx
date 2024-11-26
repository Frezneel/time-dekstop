import { color, motion } from "framer-motion";

import { ComponentProps, useEffect, useState } from "react";

interface MenuDashboardProps{
    title: string;
    detail: string;
    svg: React.ReactNode;
}

const MenuDashboard: React.FC<MenuDashboardProps> = ({title, detail, svg}) => {
    return (
        <motion.div
        whileHover={{ scale: 1.1, backgroundColor: '#C9E6F0' }} // Scale up on hover
        whileTap={{ scale: 0.9 }}   // Scale down on tap/click
        transition={{ duration: 0.2 }} // Animation duration
        style={{
          height: '120px',
          maxWidth: '320px',
          backgroundColor: 'white',
          shadow: '',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
          cursor: 'pointer',
          color: 'black',
        }} 
        // Add click event handler
      >
        <div className="container flex m-4">
            <div className="content-center justify-center justify-self-center">
                {svg}
            </div>
            <div className="col-1 m-4">
                <div className="">
                    <p className="font-extrabold text-md">{title}</p>
                </div>
                <div className="mt-2">
                    <p className="font text-sm">{detail}</p>
                </div>
            </div>
        </div>
        </motion.div>
    );
};
export default MenuDashboard;