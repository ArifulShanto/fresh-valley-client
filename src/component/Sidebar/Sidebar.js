import React from 'react';
import { Link } from 'react-router-dom';
import GridViewIcon from '@mui/icons-material/GridView';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import "./Sidebar.css";

const Sidebar = () => {
    return (
        <div className="sidebar-wrapper">
            <div>
                <div className="fv-title">
                    <h2>Fresh Valley</h2>
                </div>
                <div className="fv-sidebar">
                    <div>
                        <Link className='fv-bar' to="/manageProduct">
                            <GridViewIcon></GridViewIcon>
                            <span>Manage Product</span>
                        </Link>
                        <Link className='fv-bar' to="/addProduct">
                            <AddIcon></AddIcon>
                            <span>Add Product</span>
                        </Link>
                        <Link className='fv-bar' to="/editProduct">
                            <EditIcon></EditIcon>
                            <span>Edit Product</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;