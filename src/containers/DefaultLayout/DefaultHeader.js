import React, {Component} from 'react';
import {DropdownItem, DropdownMenu, DropdownToggle, Nav, NavItem, NavLink} from 'reactstrap';
import PropTypes from 'prop-types';

import {AppHeaderDropdown, AppNavbarBrand, AppSidebarToggler} from '@coreui/react';
import logo from '../../assets/img/brand/logo.svg'
import sygnet from '../../assets/img/brand/sygnet.svg'
import DialogResetPassAdmin from "../DialogResetPassAdmin";
//
const propTypes = {
    children: PropTypes.node,
};

const defaultProps = {};

class DefaultHeader extends Component {
    async Logout(e) {
        await  sessionStorage.removeItem("token")
        window.location.href = '/'
    }

    render() {
        // eslint-disable-next-line
        const {children, ...attributes} = this.props;

        return (
            <React.Fragment>
                <AppSidebarToggler className="d-lg-none" display="md" mobile/>
                <AppNavbarBrand
                    full={{src: logo, width: 89, height: 25, alt: 'CoreUI Logo'}}
                    minimized={{src: sygnet, width: 30, height: 30, alt: 'CoreUI Logo'}}
                />
                <AppSidebarToggler className="d-md-down-none" display="lg"/>

                <Nav className="d-md-down-none" navbar>
                    <NavItem className="px-3">
                        <NavLink href="#/dashboard">Dashboard</NavLink>
                    </NavItem>
                    <NavItem className="px-3">
                        <DialogResetPassAdmin/>
                    </NavItem>
                </Nav>
                <Nav className="ml-auto" navbar>
                    <AppHeaderDropdown direction="down">
                        <DropdownToggle nav>
                            <img src={'http://icongal.com/gallery/image/212948/admin_administrator_user_person_customer_face.png'}
                                 className="img-avatar"
                                 alt="admin"/>
                        </DropdownToggle>
                        <DropdownMenu right style={{right: 'auto'}}>
                            <DropdownItem onClick={this.Logout.bind(this)}><i className="fa fa-lock"></i> Logout</DropdownItem>
                        </DropdownMenu>
                    </AppHeaderDropdown>
                </Nav>
                {/*<AppAsideToggler className="d-lg-none" mobile />*/}
            </React.Fragment>
        );
    }
}

DefaultHeader.propTypes = propTypes;
DefaultHeader.defaultProps = defaultProps;

export default DefaultHeader;
