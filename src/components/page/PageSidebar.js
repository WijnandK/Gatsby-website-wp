import React from "react"

import {
  SidebarWrapper,
  SidebarMenu,
  EducationBadge,
} from "./styles/PageSidebarStyles"

const PageSidebar = ({ children, parentChildren, currentPage, parent }) => {
  const getChildContent = () => null

  const getParentcontent = () => null

  return (
    <div>
      <SidebarWrapper>
        {currentPage.acf.education ? (
          <EducationBadge className="tango-call-action-eduction">
            mail
          </EducationBadge>
        ) : null}
      </SidebarWrapper>
      <SidebarMenu>
        {currentPage.wordpress_parent === 0
          ? getParentcontent()
          : getChildContent()}
      </SidebarMenu>
    </div>
  )
}

export default PageSidebar
